"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronRight, Check, Upload, Loader2 } from "lucide-react"
import { getBrowserClient } from "@/lib/supabase-browser"
import { MDEditor } from "./MdEditor"
import type { Post, Author, Faq } from "@/lib/supabase"

// ── helpers ──────────────────────────────────────────────────────────────────

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")
}

function calcReadTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

const EMPTY_FAQ: Faq = { question: "", answer: "" }
const EMPTY_FAQS: Faq[] = Array(5).fill(null).map(() => ({ ...EMPTY_FAQ }))

// ── section completion ────────────────────────────────────────────────────────

type Status = "complete" | "partial" | "empty"

function sectionStatus(fields: (string | boolean | undefined | null)[]): Status {
  const vals = fields.map((f) => (typeof f === "boolean" ? "" : (f ?? "").toString().trim()))
  const filled = vals.filter(Boolean).length
  if (filled === 0) return "empty"
  if (filled === vals.length) return "complete"
  return "partial"
}

// ── sub-components ────────────────────────────────────────────────────────────

function StatusDot({ status }: { status: Status }) {
  if (status === "complete")
    return (
      <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </span>
    )
  if (status === "partial")
    return (
      <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center shrink-0">
        <span className="w-2 h-2 rounded-full bg-white" />
      </span>
    )
  return <span className="w-5 h-5 rounded-full border-2 border-border shrink-0" />
}

function CharCount({ value, limit }: { value: string; limit: number }) {
  const len = value.length
  const pct = len / limit
  const color = len > limit ? "text-red-600" : pct >= 0.9 ? "text-amber-500" : "text-ink-subtle"
  return (
    <p className={`text-xs mt-1 text-right tabular-nums ${color}`}>
      {len} / {limit}
    </p>
  )
}

function AccordionSection({
  id, title, status, optional, open, onToggle, children,
}: {
  id: string; title: string; status: Status; optional?: boolean
  open: boolean; onToggle: (id: string) => void; children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-border bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-alt/60 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <StatusDot status={status} />
          <span className="text-small font-semibold text-ink">{title}</span>
          {optional && status === "empty" && (
            <span className="text-xs text-ink-subtle bg-surface-alt px-1.5 py-0.5 rounded-full">optional</span>
          )}
        </div>
        {open
          ? <ChevronDown className="w-4 h-4 text-ink-subtle shrink-0" />
          : <ChevronRight className="w-4 h-4 text-ink-subtle shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-5 pt-3 border-t border-border space-y-4">
          {children}
        </div>
      )}
    </div>
  )
}

// ── form state ────────────────────────────────────────────────────────────────

type FormState = {
  title: string; slug: string; description: string; content: string
  published_at: string; author_id: string; tags: string
  status: "draft" | "published"; featured: boolean
  image: string; image_alt: string; faqs: Faq[]
}

// ── main form ─────────────────────────────────────────────────────────────────

export function PostForm({ post }: { post?: Post }) {
  const router = useRouter()
  const [authors, setAuthors] = useState<Author[]>([])
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const [open, setOpen] = useState<Set<string>>(
    () => new Set(post ? [] : ["basics"])
  )

  const rawFaqs = Array.isArray(post?.faqs) ? post.faqs : []
  const [form, setForm] = useState<FormState>({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    description: post?.description ?? "",
    content: post?.content ?? "",
    published_at: post?.published_at ?? new Date().toISOString().split("T")[0],
    author_id: post?.author_id ?? "",
    tags: post?.tags?.join(", ") ?? "",
    status: post ? (post.draft ? "draft" : "published") : "draft",
    featured: post?.featured ?? false,
    image: post?.image ?? "",
    image_alt: post?.image_alt ?? "",
    faqs: Array(5).fill(null).map((_, i) => rawFaqs[i] ?? { ...EMPTY_FAQ }),
  })

  useEffect(() => {
    getBrowserClient().from("authors").select("*").order("name").then(({ data }) => {
      setAuthors(data ?? [])
    })
  }, [])

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function set<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    setForm((prev) => ({ ...prev, title, slug: post ? prev.slug : slugify(title) }))
  }

  function setFaq(index: number, field: keyof Faq, value: string) {
    setForm((prev) => {
      const faqs = [...prev.faqs]
      faqs[index] = { ...faqs[index], [field]: value }
      return { ...prev, faqs }
    })
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const ext = file.name.split(".").pop()?.toLowerCase()
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const supabase = getBrowserClient()
    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file, { upsert: true, contentType: file.type })
    if (uploadError) {
      alert("Upload failed: " + uploadError.message)
    } else {
      const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName)
      set("image", data.publicUrl)
    }
    setUploading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSaving(true)

    const supabase = getBrowserClient()
    const payload = {
      title: form.title,
      slug: form.slug,
      description: form.description,
      content: form.content,
      published_at: form.published_at,
      author_id: form.author_id || null,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      featured: form.featured,
      draft: form.status === "draft",
      image: form.image || null,
      image_alt: form.image_alt || null,
      faqs: form.faqs.filter((f) => f.question.trim() || f.answer.trim()),
    }

    const res = post
      ? await supabase.from("posts").update(payload).eq("id", post.id)
      : await supabase.from("posts").insert(payload)

    if (res.error) {
      setError(res.error.message)
      setSaving(false)
    } else {
      router.push("/admin/posts")
    }
  }

  const readTime = calcReadTime(form.content)
  const wordCount = form.content.trim().split(/\s+/).filter(Boolean).length

  const s = {
    basics: sectionStatus([form.title, form.slug, form.description]),
    seo: sectionStatus([form.title, form.description]),
    image: sectionStatus([form.image, form.image_alt]),
    publishing: sectionStatus([form.author_id, form.published_at, form.tags]),
  }
  const faqStatuses = form.faqs.map((f) => sectionStatus([f.question, f.answer]))

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2 text-small text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-small text-red-700">
          {error}
        </div>
      )}

      {/* 1. Basics */}
      <AccordionSection id="basics" title="Title, Slug & Description" status={s.basics} open={open.has("basics")} onToggle={toggle}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-ink-muted mb-1">Title *</label>
            <input type="text" required value={form.title} onChange={handleTitleChange}
              placeholder="e.g. How CQC Are Changing Inspection in 2026" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">URL Slug *</label>
            <input type="text" required value={form.slug} onChange={(e) => set("slug", e.target.value)}
              placeholder="how-cqc-are-changing-inspection" className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-ink-muted mb-1">Description *</label>
            <textarea required rows={2} value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Short summary shown in search results and listings"
              className={inputClass} />
            <p className="text-xs text-ink-subtle mt-1">This is also your meta description — keep it compelling.</p>
          </div>
        </div>
      </AccordionSection>

      {/* 2. SEO Preview */}
      <AccordionSection id="seo" title="SEO Preview" status={s.seo} open={open.has("seo")} onToggle={toggle}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Meta title (from Title)</label>
            <div className="rounded-md border border-border bg-surface-alt px-3 py-2 text-small text-ink-muted truncate">
              {form.title || <span className="italic">No title yet</span>}
            </div>
            <CharCount value={form.title} limit={60} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Meta description (from Description)</label>
            <div className="rounded-md border border-border bg-surface-alt px-3 py-2 text-small text-ink-muted line-clamp-2 min-h-[40px]">
              {form.description || <span className="italic">No description yet</span>}
            </div>
            <CharCount value={form.description} limit={156} />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-white p-4">
          <p className="text-xs font-semibold text-ink-subtle mb-2 uppercase tracking-widest">Google preview</p>
          <p className="text-accent font-medium truncate text-small">{form.title || "Post title"} | TRG Digital</p>
          <p className="text-green-700 text-xs">trgdigital.co.uk/blog/{form.slug || "post-slug"}</p>
          <p className="text-ink-muted text-xs mt-1 line-clamp-2">{form.description || "Post description will appear here…"}</p>
        </div>
      </AccordionSection>

      {/* 3. Cover Image */}
      <AccordionSection id="image" title="Cover Image" status={s.image} optional open={open.has("image")} onToggle={toggle}>
        <div className="flex flex-wrap items-center gap-3">
          <label className={`flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface text-small font-medium cursor-pointer hover:bg-surface-alt transition-colors ${uploading ? "opacity-50 pointer-events-none" : ""}`}>
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {uploading ? "Uploading…" : "Upload image"}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
          </label>
          <span className="text-xs text-ink-subtle">or</span>
          <input type="url" value={form.image} onChange={(e) => set("image", e.target.value)}
            placeholder="Paste image URL…" className={`${inputClass} flex-1 min-w-48`} />
          {form.image && (
            <>
              <img src={form.image} alt="preview" className="h-10 w-16 object-cover rounded border border-border" />
              <button type="button" onClick={() => set("image", "")} className="text-xs text-red-500 hover:underline">Remove</button>
            </>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-ink-muted mb-1">Alt text</label>
          <input type="text" value={form.image_alt} onChange={(e) => set("image_alt", e.target.value)}
            placeholder="Descriptive alt text for accessibility and SEO" className={inputClass} />
        </div>
      </AccordionSection>

      {/* 4. Publishing */}
      <AccordionSection id="publishing" title="Author, Tags & Publishing" status={s.publishing} open={open.has("publishing")} onToggle={toggle}>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Author</label>
            <select value={form.author_id} onChange={(e) => set("author_id", e.target.value)} className={inputClass}>
              <option value="">No author</option>
              {authors.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Publication date</label>
            <input type="date" required value={form.published_at} onChange={(e) => set("published_at", e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Status</label>
            <select value={form.status} onChange={(e) => set("status", e.target.value as "draft" | "published")} className={inputClass}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-ink-muted mb-1">Tags (comma-separated)</label>
            <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)}
              placeholder="CQC, Technology, Operations" className={inputClass} />
          </div>
          <div className="flex items-end pb-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => set("featured", e.target.checked)}
                className="rounded border-border accent-accent" />
              <span className="text-small font-medium text-ink">Featured on homepage</span>
            </label>
          </div>
        </div>
        <p className="text-xs text-ink-subtle">
          Est. read time: <strong>{readTime} min</strong> — auto-calculated from content.
        </p>
      </AccordionSection>

      {/* 5–9. FAQs */}
      {form.faqs.map((faq, i) => {
        const preview = faq.question.trim()
        const faqTitle = preview
          ? `FAQ ${i + 1}: ${preview.length > 50 ? preview.slice(0, 50) + "…" : preview}`
          : `FAQ ${i + 1}`
        return (
          <AccordionSection
            key={i} id={`faq-${i}`} title={faqTitle}
            status={faqStatuses[i]} optional
            open={open.has(`faq-${i}`)} onToggle={toggle}
          >
            <p className="text-xs text-ink-muted">FAQs appear below the post and are included as structured data for Google.</p>
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1">Question</label>
              <input type="text" value={faq.question} onChange={(e) => setFaq(i, "question", e.target.value)}
                placeholder="e.g. How often should care plans be reviewed?" className={inputClass} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-ink-muted mb-1">Answer</label>
              <textarea rows={3} value={faq.answer} onChange={(e) => setFaq(i, "answer", e.target.value)}
                placeholder="Write a clear, concise answer…" className={inputClass} />
            </div>
          </AccordionSection>
        )
      })}

      {/* Content editor — always visible */}
      <div className="rounded-lg border border-border bg-white overflow-hidden" data-color-mode="light">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <span className="text-small font-semibold text-ink">Content</span>
          <span className="text-xs text-ink-subtle tabular-nums">{wordCount} words · {readTime} min read</span>
        </div>
        <div className="p-2">
          <MDEditor
            value={form.content}
            onChange={(val) => set("content", val ?? "")}
            height={500}
            preview="edit"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <button type="submit" disabled={saving}
          className="rounded-md bg-accent px-5 py-2.5 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors disabled:opacity-50">
          {saving ? "Saving…" : post ? "Save changes" : "Create post"}
        </button>
        <button type="button" onClick={() => router.push("/admin/posts")}
          className="rounded-md border border-border px-5 py-2.5 text-small font-medium text-ink hover:bg-surface-alt transition-colors">
          Cancel
        </button>
      </div>
    </form>
  )
}
