"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getBrowserClient } from "@/lib/supabase-browser"
import type { Post } from "@/lib/supabase"

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase
        .from("posts")
        .select("*, author:authors(name)")
        .order("created_at", { ascending: false })
      setPosts(data ?? [])
      setLoading(false)
    }
    load()
  }, [])

  async function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return
    const supabase = getBrowserClient()
    await supabase.from("posts").delete().eq("id", id)
    setPosts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-h2 font-heading font-bold text-ink">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="rounded-md bg-accent px-4 py-2 text-small font-semibold text-ink-inverse hover:bg-accent-hover transition-colors"
        >
          New post
        </Link>
      </div>

      {loading ? (
        <p className="text-body text-ink-muted">Loading…</p>
      ) : posts.length === 0 ? (
        <p className="text-body text-ink-muted">No posts yet.</p>
      ) : (
        <div className="rounded-lg border border-border bg-white overflow-hidden">
          <table className="w-full text-small">
            <thead className="bg-surface-alt border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-ink-muted">Title</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted hidden sm:table-cell">Author</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted hidden md:table-cell">Published</th>
                <th className="text-left px-4 py-3 font-medium text-ink-muted">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-surface-alt/50">
                  <td className="px-4 py-3 font-medium text-ink max-w-xs truncate">
                    {post.title}
                  </td>
                  <td className="px-4 py-3 text-ink-muted hidden sm:table-cell">
                    {(post.author as { name: string } | undefined)?.name ?? "—"}
                  </td>
                  <td className="px-4 py-3 text-ink-muted hidden md:table-cell">
                    {post.published_at}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                        post.draft
                          ? "bg-surface-alt text-ink-muted"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {post.draft ? "Draft" : "Published"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-3 whitespace-nowrap">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="text-accent hover:underline font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
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
