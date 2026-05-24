import { supabase, type Post, type Author } from "./supabase"

export type { Post, Author }

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

export async function getAllPosts(): Promise<Post[]> {
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .eq("draft", false)
    .lte("published_at", new Date().toISOString().split("T")[0])
    .order("published_at", { ascending: false })
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .eq("slug", slug)
    .single()
  return data ?? null
}

export async function getAllAuthors(): Promise<Author[]> {
  const { data } = await supabase
    .from("authors")
    .select("*")
    .order("name")
  return data ?? []
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const { data } = await supabase
    .from("authors")
    .select("*")
    .eq("slug", slug)
    .single()
  return data ?? null
}

export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
  if (!post.tags.length) return []
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .eq("draft", false)
    .lte("published_at", new Date().toISOString().split("T")[0])
    .neq("slug", post.slug)
    .contains("tags", post.tags.slice(0, 1))
    .limit(limit)
  return data ?? []
}

// Admin: fetch all posts including drafts (requires auth)
export async function getAllPostsAdmin(): Promise<Post[]> {
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .order("created_at", { ascending: false })
  return data ?? []
}
