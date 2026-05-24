"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { use } from "react"
import { getBrowserClient } from "@/lib/supabase-browser"
import { PostForm } from "../PostForm"
import type { Post } from "@/lib/supabase"

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [post, setPost] = useState<Post | null | undefined>(undefined)

  useEffect(() => {
    async function load() {
      const supabase = getBrowserClient()
      const { data } = await supabase.from("posts").select("*, author:authors(*)").eq("id", id).single()
      setPost(data ?? null)
    }
    load()
  }, [id])

  if (post === undefined) return <p className="text-body text-ink-muted">Loading…</p>
  if (post === null) return notFound()

  return (
    <div>
      <h1 className="text-h2 font-heading font-bold text-ink mb-8">Edit post</h1>
      <PostForm post={post} />
    </div>
  )
}
