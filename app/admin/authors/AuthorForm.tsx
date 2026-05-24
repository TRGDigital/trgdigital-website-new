"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { Author } from "@/lib/supabase"

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export function AuthorForm({ author }: { author?: Author }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    name: author?.name ?? "",
    slug: author?.slug ?? "",
    role: author?.role ?? "",
    avatar_url: author?.avatar_url ?? "",
    linkedin: author?.linkedin ?? "",
  })

  function set(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.value
    setForm((prev) => ({
      ...prev,
      name,
      slug: author ? prev.slug : slugify(name),
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setSaving(true)

    const supabase = getBrowserClient()
    const payload = {
      name: form.name,
      slug: form.slug,
      role: form.role,
      avatar_url: form.avatar_url || null,
      linkedin: form.linkedin || null,
    }

    let err
    if (author) {
      const res = await supabase.from("authors").update(payload).eq("id", author.id)
      err = res.error
    } else {
      const res = await supabase.from("authors").insert(payload)
      err = res.error
    }

    if (err) {
      setError(err.message)
      setSaving(false)
    } else {
      router.push("/admin/authors")
    }
  }

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2 text-body text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-small text-red-700">
          {error}
        </div>
      )}

      <div>
        <label className="block text-small font-medium text-ink mb-1.5">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={handleNameChange}
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
        <label className="block text-small font-medium text-ink mb-1.5">Role / Title</label>
        <input
          type="text"
          required
          value={form.role}
          onChange={(e) => set("role", e.target.value)}
          placeholder="Head of Care Technology"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-small font-medium text-ink mb-1.5">Avatar URL</label>
        <input
          type="url"
          value={form.avatar_url}
          onChange={(e) => set("avatar_url", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-small font-medium text-ink mb-1.5">LinkedIn URL</label>
        <input
          type="url"
          value={form.linkedin}
          onChange={(e) => set("linkedin", e.target.value)}
          placeholder="https://linkedin.com/in/..."
          className={inputClass}
        />
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <button
          type="submit"
          disabled={saving}
          className="rounded-md bg-accent px-5 py-2.5 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors disabled:opacity-50"
        >
          {saving ? "Saving…" : author ? "Save changes" : "Create author"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/authors")}
          className="rounded-md border border-border px-5 py-2.5 text-small font-medium text-ink hover:bg-surface-alt transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
