import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { z } from "zod"
import { cache } from "react"
import { getReadingTime } from "./reading-time"

const BLOG_DIR = path.join(process.cwd(), "content/blog")
const AUTHORS_DIR = path.join(process.cwd(), "content/authors")

const PostFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  author: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  draft: z.boolean().default(false),
})

const AuthorFrontmatterSchema = z.object({
  name: z.string(),
  role: z.string(),
  avatar: z.string().optional(),
  linkedin: z.string().optional(),
})

export type Post = z.infer<typeof PostFrontmatterSchema> & {
  slug: string
  content: string
  readingTime: string
}

export type Author = z.infer<typeof AuthorFrontmatterSchema> & {
  slug: string
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export const getAllPosts = cache((): Post[] => {
  if (!fs.existsSync(BLOG_DIR)) return []

  const isDev = process.env.NODE_ENV === "development"

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
      const { data, content } = matter(raw)
      const frontmatter = PostFrontmatterSchema.parse(data)
      return { ...frontmatter, slug, content, readingTime: getReadingTime(content) }
    })
    .filter((post) => isDev || !post.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
})

export const getPostBySlug = cache((slug: string): Post | null => {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const frontmatter = PostFrontmatterSchema.parse(data)
  return { ...frontmatter, slug, content, readingTime: getReadingTime(content) }
})

export const getPostsByTag = cache((tag: string): Post[] =>
  getAllPosts().filter((post) => post.tags.includes(tag))
)

export const getRelatedPosts = cache((post: Post, limit = 3): Post[] =>
  getAllPosts()
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, limit)
)

export const getAllAuthors = cache((): Author[] => {
  if (!fs.existsSync(AUTHORS_DIR)) return []

  return fs
    .readdirSync(AUTHORS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(AUTHORS_DIR, file), "utf8")
      const { data } = matter(raw)
      const frontmatter = AuthorFrontmatterSchema.parse(data)
      return { ...frontmatter, slug }
    })
})

export const getAuthorBySlug = cache((slug: string): Author | null => {
  const filePath = path.join(AUTHORS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { data } = matter(raw)
  const frontmatter = AuthorFrontmatterSchema.parse(data)
  return { ...frontmatter, slug }
})
