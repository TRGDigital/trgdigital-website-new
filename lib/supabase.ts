import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(url, key)

export type Author = {
  id: string
  name: string
  role: string
  slug: string
  avatar_url: string | null
  linkedin: string | null
  created_at: string
}

export type Post = {
  id: string
  title: string
  slug: string
  description: string
  content: string
  published_at: string
  author_id: string | null
  author?: Author
  tags: string[]
  featured: boolean
  image: string | null
  image_alt: string | null
  draft: boolean
  created_at: string
  updated_at: string
}
