import { getAllPosts } from "./mdx"

export type Tag = {
  slug: string
  count: number
}

export function getAllTags(): Tag[] {
  const counts = new Map<string, number>()

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count)
}
