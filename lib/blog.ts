import { supabase, type Post, type Author } from "./supabase"

export type { Post, Author }

export type Tag = { slug: string; count: number }
export type PageSeo = { page: string; title: string; description: string }

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
    .eq("draft", false)
    .single()
  return data ?? null
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .eq("draft", false)
    .lte("published_at", new Date().toISOString().split("T")[0])
    .contains("tags", [tag])
    .order("published_at", { ascending: false })
  return data ?? []
}

export async function getAllTags(): Promise<Tag[]> {
  const { data } = await supabase
    .from("posts")
    .select("tags")
    .eq("draft", false)
    .lte("published_at", new Date().toISOString().split("T")[0])

  const counts = new Map<string, number>()
  data?.forEach((row) => {
    row.tags?.forEach((tag: string) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    })
  })

  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count)
}

export async function getAllAuthors(): Promise<Author[]> {
  const { data } = await supabase.from("authors").select("*").order("name")
  return data ?? []
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  const { data } = await supabase.from("authors").select("*").eq("slug", slug).single()
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

export async function getPageSeo(page: string): Promise<PageSeo | null> {
  const { data } = await supabase.from("page_seo").select("*").eq("page", page).single()
  return data ?? null
}

// Admin: all posts including drafts
export async function getAllPostsAdmin(): Promise<Post[]> {
  const { data } = await supabase
    .from("posts")
    .select("*, author:authors(*)")
    .order("created_at", { ascending: false })
  return data ?? []
}
