import { supabase } from "./supabase"

export type Page = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  draft: boolean
  created_at: string
  updated_at: string
}

export async function getAllPublishedPages(): Promise<Page[]> {
  const { data } = await supabase
    .from("pages")
    .select("*")
    .eq("draft", false)
    .order("title")
  return data ?? []
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const { data } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", slug)
    .eq("draft", false)
    .single()
  return data ?? null
}

export async function getAllPagesAdmin(): Promise<Page[]> {
  const { data } = await supabase
    .from("pages")
    .select("*")
    .order("created_at", { ascending: false })
  return data ?? []
}
