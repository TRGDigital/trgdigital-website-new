"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { Author } from "@/lib/supabase"

export default function AdminAuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("authors").select("*").order("name")
      setAuthors(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  async function handleDelete(id: string) {
    if (!confirm("Delete this author?")) return
    const supabase = getBrowserClient()
    await supabase.from("authors").delete().eq("id", id)
    setAuthors((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-h2 font-heading font-bold text-ink">Authors</h1>
        <Link
          href="/admin/authors/new"
          className="rounded-md bg-accent px-4 py-2 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors"
        >
          New author
        </Link>
      </div>

      {loading ? (
        <p className="text-body text-ink-muted">Loading…</p>
      ) : authors.length === 0 ? (
        <p className="text-body text-ink-muted">No authors yet.</p>
      ) : (
        <div className="rounded-lg border border-border bg-white overflow-hidden">
          <table className="w-full text-small">
            <thead className="bg-surface-alt border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-ink-muted">Name</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted hidden sm:table-cell">Role</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted hidden md:table-cell">Slug</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {authors.map((author) => (
                <tr key={author.id} className="hover:bg-surface-alt/50">
                  <td className="px-4 py-3 font-medium text-ink">{author.name}</td>
                  <td className="px-4 py-3 text-ink-muted hidden sm:table-cell">{author.role}</td>
                  <td className="px-4 py-3 text-ink-muted hidden md:table-cell">{author.slug}</td>
                  <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                    <Link
                      href={`/admin/authors/${author.id}`}
                      className="text-accent hover:underline font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(author.id)}
                      className="text-red-500 hover:underline font-medium"
                    >
                      Delete
                    </button>
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
