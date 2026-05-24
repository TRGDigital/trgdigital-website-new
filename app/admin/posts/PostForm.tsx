"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { Post, Author } from "@/lib/supabase"

type PostFormData = {
  title: string
  slug: string
  description: string
  content: string
  published_at: string
  author_id: string
  tags: string
  featured: boolean
  draft: boolean
  image: string
  image_alt: string
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function PostForm({ post }: { post?: Post }) {
  const router = useRouter()
  const [authors, setAuthors] = useState<Author[]>([])
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState<PostFormData>({
    title: post?.title ?? "",
    slug: post?.slug ?? "",
    description: post?.description ?? "",
    content: post?.content ?? "",
    published_at: post?.published_at ?? new Date().toISOString().split("T")[0],
    author_id: post?.author_id ?? "",
    tags: post?.tags?.join(", ") ?? "",
    featured: post?.featured ?? false,
    draft: post?.draft ?? true,
    image: post?.image ?? "",
    image_alt: post?.image_alt ?? "",
  })

  useEffect(() => {
    async function loadAuthors() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("authors").select("*").order("name")
      setAuthors(data ?? [])
    }
    loadAuthors()
  }, [])

  function set(field: keyof PostFormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    setForm((prev) => ({
      ...prev,
      title,
      slug: post ? prev.slug : slugify(title),
    }))
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
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      featured: form.featured,
      draft: form.draft,
      image: form.image || null,
      image_alt: form.image_alt || null,
    }

    let err
    if (post) {
      const res = await supabase.from("posts").update(payload).eq("id", post.id)
      err = res.error
    } else {
      const res = await supabase.from("posts").insert(payload)
      err = res.error
    }

    if (err) {
      setError(err.message)
      setSaving(false)
    } else {
      router.push("/admin/posts")
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2 text-body text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-small text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-small font-medium text-ink mb-1.5">Title</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={handleTitleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Slug</label>
          <input
            type="text"
            required
            value={form.slug}
            onChange={(e) => set("slug", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Published date</label>
          <input
            type="date"
            required
            value={form.published_at}
            onChange={(e) => set("published_at", e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-small font-medium text-ink mb-1.5">Description</label>
          <textarea
            required
            rows={2}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-small font-medium text-ink mb-1.5">Content (Markdown)</label>
        <textarea
          required
          rows={20}
          value={form.content}
          onChange={(e) => set("content", e.target.value)}
          className={`${inputClass} font-mono text-small`}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Author</label>
          <select
            value={form.author_id}
            onChange={(e) => set("author_id", e.target.value)}
            className={inputClass}
          >
            <option value="">No author</option>
            {authors.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Tags (comma-separated)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            placeholder="CQC, Technology, Operations"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Cover image URL</label>
          <input
            type="url"
            value={form.image}
            onChange={(e) => set("image", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-small font-medium text-ink mb-1.5">Cover image alt text</label>
          <input
            type="text"
            value={form.image_alt}
            onChange={(e) => set("image_alt", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.draft}
            onChange={(e) => set("draft", e.target.checked)}
            className="rounded border-border accent-accent"
          />
          <span className="text-small font-medium text-ink">Draft</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => set("featured", e.target.checked)}
            className="rounded border-border accent-accent"
          />
          <span className="text-small font-medium text-ink">Featured</span>
        </label>
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-accent px-5 py-2.5 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors disabled:opacity-50"
        >
          {saving ? "Saving…" : post ? "Save changes" : "Create post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          className="rounded-md border border-border px-5 py-2.5 text-small font-medium text-ink hover:bg-surface-alt transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
