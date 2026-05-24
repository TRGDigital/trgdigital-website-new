"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import { getBrowserClient } from "@/lib/supabase-browser"
import { AuthorForm } from "../AuthorForm"
import type { Author } from "@/lib/supabase"

export default function EditAuthorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [author, setAuthor] = useState<Author | null | undefined>(undefined)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("authors").select("*").eq("id", id).single()
      setAuthor(data ?? null)
    }
    load()
  }, [id])

  if (author === undefined) return <p className="text-body text-ink-muted">Loading…</p>
  if (author === null) return <p className="text-body text-ink-muted">Author not found.</p>

  return (
    <div>
      <h1 className="text-h2 font-heading font-bold text-ink mb-8">Edit author</h1>
      <AuthorForm author={author} />
    </div>
  )
}
