"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronDown, ChevronRight } from "lucide-react"
import { getBrowserClient } from "@/lib/supabase-browser"
import { revalidateSite } from "@/app/actions/revalidate"
import { MDEditor } from "../posts/MdEditor"
import type { Page } from "@/lib/pages"

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-")
}

type Status = "complete" | "partial" | "empty"

function sectionStatus(fields: (string | undefined | null)[]): Status {
  const filled = fields.filter((f) => (f ?? "").toString().trim()).length
  if (filled === 0) return "empty"
  if (filled === fields.length) return "complete"
  return "partial"
}

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
  return <p className={`text-xs mt-1 text-right tabular-nums ${color}`}>{len} / {limit}</p>
}

function AccordionSection({ id, title, status, open, onToggle, children }: {
  id: string; title: string; status: Status
  open: boolean; onToggle: (id: string) => void; children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-border bg-white overflow-hidden">
      <button type="button" onClick={() => onToggle(id)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-alt/60 transition-colors">
        <div className="flex items-center gap-2.5">
          <StatusDot status={status} />
          <span className="text-small font-semibold text-ink">{title}</span>
        </div>
        {open ? <ChevronDown className="w-4 h-4 text-ink-subtle shrink-0" /> : <ChevronRight className="w-4 h-4 text-ink-subtle shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-5 pt-3 border-t border-border space-y-4">{children}</div>
      )}
    </div>
  )
}

type FormState = {
  title: string; slug: string; description: string
  content: string; status: "draft" | "published"
}

export function PageForm({ page }: { page?: Page }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [open, setOpen] = useState<Set<string>>(() => new Set(page ? [] : ["basics"]))

  const [form, setForm] = useState<FormState>({
    title: page?.title ?? "",
    slug: page?.slug ?? "",
    description: page?.description ?? "",
    content: page?.content ?? "",
    status: page ? (page.draft ? "draft" : "published") : "draft",
  })

  function toggle(id: string) {
    setOpen((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next })
  }

  function set<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    setForm((prev) => ({ ...prev, title, slug: page ? prev.slug : slugify(title) }))
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
      draft: form.status === "draft",
    }

    const res = page
      ? await supabase.from("pages").update(payload).eq("id", page.id)
      : await supabase.from("pages").insert(payload)

    if (res.error) {
      setError(res.error.message)
      setSaving(false)
    } else {
      await revalidateSite()
      router.push("/admin/pages")
    }
  }

  const wordCount = form.content.trim().split(/\s+/).filter(Boolean).length
  const s = {
    basics: sectionStatus([form.title, form.slug, form.description]),
    seo: sectionStatus([form.title, form.description]),
  }

  const inputClass = "w-full rounded-md border border-border bg-surface px-3 py-2 text-small text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-small text-red-700">{error}</div>
      )}

      {/* Basics */}
      <AccordionSection id="basics" title="Title, Slug & Description" status={s.basics} open={open.has("basics")} onToggle={toggle}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-ink-muted mb-1">Title *</label>
            <input type="text" required value={form.title} onChange={handleTitleChange}
              placeholder="e.g. Privacy Policy" className={inputClass} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">URL Slug *</label>
            <input type="text" required value={form.slug} onChange={(e) => set("slug", e.target.value)}
              placeholder="privacy-policy" className={inputClass} />
            <p className="text-xs text-ink-subtle mt-1">Page will be at /{form.slug || "your-slug"}</p>
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Status</label>
            <select value={form.status} onChange={(e) => set("status", e.target.value as "draft" | "published")} className={inputClass}>
              <option value="draft">Draft</option>
              <option value="published">Published — appears in footer</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-ink-muted mb-1">Description *</label>
            <textarea required rows={2} value={form.description} onChange={(e) => set("description", e.target.value)}
              placeholder="Short summary used as the meta description in search results"
              className={inputClass} />
          </div>
        </div>
      </AccordionSection>

      {/* SEO Preview */}
      <AccordionSection id="seo" title="SEO Preview" status={s.seo} open={open.has("seo")} onToggle={toggle}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Meta title</label>
            <div className="rounded-md border border-border bg-surface-alt px-3 py-2 text-small text-ink-muted truncate">
              {form.title || <span className="italic">No title yet</span>}
            </div>
            <CharCount value={form.title} limit={60} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-ink-muted mb-1">Meta description</label>
            <div className="rounded-md border border-border bg-surface-alt px-3 py-2 text-small text-ink-muted line-clamp-2 min-h-[40px]">
              {form.description || <span className="italic">No description yet</span>}
            </div>
            <CharCount value={form.description} limit={156} />
          </div>
        </div>
        <div className="rounded-lg border border-border bg-white p-4">
          <p className="text-xs font-semibold text-ink-subtle mb-2 uppercase tracking-widest">Google preview</p>
          <p className="text-accent font-medium truncate text-small">{form.title || "Page title"} | TRG Digital</p>
          <p className="text-green-700 text-xs">trgdigital.co.uk/{form.slug || "page-slug"}</p>
          <p className="text-ink-muted text-xs mt-1 line-clamp-2">{form.description || "Description will appear here…"}</p>
        </div>
      </AccordionSection>

      {/* Content — always visible */}
      <div className="rounded-lg border border-border bg-white overflow-hidden" data-color-mode="light">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <span className="text-small font-semibold text-ink">Content</span>
          <span className="text-xs text-ink-subtle tabular-nums">{wordCount} words</span>
        </div>
        <div className="p-2">
          <MDEditor value={form.content} onChange={(val) => set("content", val ?? "")} height={500} preview="edit" />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button type="submit" disabled={saving}
          className="rounded-md bg-accent px-5 py-2.5 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors disabled:opacity-50">
          {saving ? "Saving…" : page ? "Save changes" : "Create page"}
        </button>
        <button type="button" onClick={() => router.push("/admin/pages")}
          className="rounded-md border border-border px-5 py-2.5 text-small font-medium text-ink hover:bg-surface-alt transition-colors">
          Cancel
        </button>
      </div>
    </form>
  )
}
