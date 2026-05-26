"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { Page } from "@/lib/pages"

export default function AdminPagesPage() {
  const [pages, setPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("pages").select("*").order("created_at", { ascending: false })
      setPages(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  async function handleDelete(id: string) {
    if (!confirm("Delete this page?")) return
    const supabase = getBrowserClient()
    await supabase.from("pages").delete().eq("id", id)
    setPages((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-h2 font-heading font-bold text-ink">Pages</h1>
          <p className="text-small text-ink-muted mt-1">Published pages appear automatically in the footer.</p>
        </div>
        <Link
          href="/admin/pages/new"
          className="rounded-md bg-accent px-4 py-2 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors"
        >
          New page
        </Link>
      </div>

      {loading ? (
        <p className="text-body text-ink-muted">Loading…</p>
      ) : pages.length === 0 ? (
        <p className="text-body text-ink-muted">No pages yet.</p>
      ) : (
        <div className="rounded-lg border border-border bg-white overflow-hidden">
          <table className="w-full text-small">
            <thead className="bg-surface-alt border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-ink-muted">Title</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted hidden sm:table-cell">URL</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {pages.map((page) => (
                <tr key={page.id} className="hover:bg-surface-alt/50">
                  <td className="px-4 py-3 font-medium text-ink">{page.title}</td>
                  <td className="px-4 py-3 text-ink-muted hidden sm:table-cell">/{page.slug}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      page.draft ? "bg-surface-alt text-ink-muted" : "bg-green-50 text-green-700"
                    }`}>
                      {page.draft ? "Draft" : "Published"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                    <Link href={`/admin/pages/${page.id}`} className="text-accent hover:underline font-medium">Edit</Link>
                    <button onClick={() => handleDelete(page.id)} className="text-red-500 hover:underline font-medium">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
