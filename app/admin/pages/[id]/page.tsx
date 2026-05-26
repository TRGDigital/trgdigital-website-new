"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import { getBrowserClient } from "@/lib/supabase-browser"
import { PageForm } from "../PageForm"
import type { Page } from "@/lib/pages"

export default function EditPagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [page, setPage] = useState<Page | null | undefined>(undefined)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("pages").select("*").eq("id", id).single()
      setPage(data ?? null)
    }
    load()
  }, [id])

  if (page === undefined) return <p className="text-body text-ink-muted">Loading…</p>
  if (page === null) return <p className="text-body text-ink-muted">Page not found.</p>

  return (
    <div>
      <h1 className="text-h2 font-heading font-bold text-ink mb-8">Edit page</h1>
      <PageForm page={page} />
    </div>
  )
}
