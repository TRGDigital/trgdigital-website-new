"use client"

import { useEffect, useState } from "react"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { PageSeo } from "@/lib/blog"

const TITLE_LIMIT = 60
const DESC_LIMIT = 156

function CharCount({ value, limit }: { value: string; limit: number }) {
  const len = value.length
  const pct = len / limit
  const color =
    len > limit
      ? "text-red-600"
      : pct >= 0.9
      ? "text-amber-500"
      : "text-ink-subtle"
  return (
    <p className={`text-xs mt-1 text-right tabular-nums ${color}`}>
      {len} / {limit}
    </p>
  )
}

export default function AdminPageSeoPage() {
  const [entries, setEntries] = useState<PageSeo[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [editing, setEditing] = useState<Record<string, PageSeo>>({})

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("page_seo").select("*").order("page")
      setEntries(data ?? [])
      const map: Record<string, PageSeo> = {}
      data?.forEach((entry) => { map[entry.page] = { ...entry } })
      setEditing(map)
      setLoading(false)
    }
    load()
  }, [])

  function handleChange(page: string, field: "title" | "description", value: string) {
    setEditing((prev) => ({
      ...prev,
      [page]: { ...prev[page], [field]: value },
    }))
  }

  async function handleSave(page: string) {
    setSaving(page)
    const supabase = getBrowserClient()
    const entry = editing[page]
    await supabase
      .from("page_seo")
      .upsert({ page, title: entry.title, description: entry.description })
    setEntries((prev) => prev.map((e) => (e.page === page ? { ...entry } : e)))
    setSaving(null)
  }

  const inputClass =
    "w-full rounded-md border border-border bg-surface px-3 py-2 text-small text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"

  return (
    <div>
      <h1 className="text-h2 font-heading font-bold text-ink mb-2">Page SEO</h1>
      <p className="text-body text-ink-muted mb-8">Edit meta titles and descriptions for each page.</p>

      {loading ? (
        <p className="text-body text-ink-muted">Loading…</p>
      ) : (
        <div className="space-y-6">
          {entries.map((entry) => {
            const draft = editing[entry.page]
            const dirty =
              draft?.title !== entry.title || draft?.description !== entry.description
            const titleVal = draft?.title ?? ""
            const descVal = draft?.description ?? ""
            return (
              <div key={entry.page} className="rounded-lg border border-border bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-small font-semibold uppercase tracking-widest text-ink-muted">
                    /{entry.page}
                  </p>
                  <button
                    onClick={() => handleSave(entry.page)}
                    disabled={!dirty || saving === entry.page}
                    className="rounded-md bg-accent px-3 py-1.5 text-small font-medium text-ink-inverse hover:bg-accent-hover transition-colors disabled:opacity-40"
                  >
                    {saving === entry.page ? "Saving…" : "Save"}
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-small font-medium text-ink mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={titleVal}
                      onChange={(e) => handleChange(entry.page, "title", e.target.value)}
                      className={inputClass}
                    />
                    <CharCount value={titleVal} limit={TITLE_LIMIT} />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-ink mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={descVal}
                      onChange={(e) => handleChange(entry.page, "description", e.target.value)}
                      className={inputClass}
                    />
                    <CharCount value={descVal} limit={DESC_LIMIT} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
