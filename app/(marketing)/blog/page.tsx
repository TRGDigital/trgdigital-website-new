import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { getAllPosts, getPostsByTag, formatDate } from "@/lib/mdx"
import { getAllTags } from "@/lib/tags"
import { ArticleCard } from "@/components/cards/article-card"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"
import { FadeIn } from "@/components/ui/fade-in"

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Practical thinking on care technology, compliance, and running a better care operation.",
  path: "/blog",
})

const POSTS_PER_PAGE = 12

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; tag?: string }>
}) {
  const { page = "1", tag } = await searchParams
  const pageNum = Math.max(1, parseInt(page) || 1)

  const allPosts = tag ? getPostsByTag(tag) : getAllPosts()
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const currentPage = Math.min(pageNum, totalPages)
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
  const allTags = getAllTags()

  const featuredPost = !tag && currentPage === 1 ? posts.find((p) => p.featured) : undefined
  const regularPosts = featuredPost ? posts.filter((p) => p.slug !== featuredPost.slug) : posts

  return (
    <>
      {/* Page header */}
      <Section variant="default" as="div">
        <Container>
          <div className="max-w-2xl pt-8">
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
              Insights
            </p>
            <h1 className="text-display-2 font-heading font-bold text-ink">
              Thinking on care technology.
            </h1>
            <p className="text-body-lg text-ink-muted mt-6">
              Practical writing on care software, CQC compliance, and running a better care
              operation.
            </p>
          </div>
        </Container>
      </Section>

      {/* Tag filter */}
      {allTags.length > 0 && (
        <Section variant="default" as="div" className="pt-0 pb-0">
          <Container>
            <div className="flex flex-wrap gap-2 border-b border-border pb-8">
              <Link
                href="/blog"
                className={`rounded-full px-4 py-1.5 text-small font-medium transition-colors ${
                  !tag
                    ? "bg-accent text-ink-inverse"
                    : "bg-surface-alt text-ink-muted hover:bg-border"
                }`}
              >
                All
              </Link>
              {allTags.map((t) => (
                <Link
                  key={t.slug}
                  href={`/blog?tag=${encodeURIComponent(t.slug)}`}
                  className={`rounded-full px-4 py-1.5 text-small font-medium transition-colors ${
                    tag === t.slug
                      ? "bg-accent text-ink-inverse"
                      : "bg-surface-alt text-ink-muted hover:bg-border"
                  }`}
                >
                  {t.slug}
                  <span className="ml-1.5 opacity-50">{t.count}</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Posts */}
      <Section variant="default" as="div">
        <Container>
          {posts.length === 0 ? (
            <p className="text-body text-ink-muted py-16 text-center">
              No posts found{tag ? ` for "${tag}"` : ""}.
            </p>
          ) : (
            <div className="space-y-16">
              {/* Featured post */}
              {featuredPost && (
                <FadeIn>
                  <ArticleCard
                    tag={featuredPost.tags[0] ?? "Insights"}
                    title={featuredPost.title}
                    excerpt={featuredPost.description}
                    date={formatDate(featuredPost.publishedAt)}
                    readingTime={featuredPost.readingTime}
                    href={`/blog/${featuredPost.slug}`}
                    featured
                  />
                </FadeIn>
              )}

              {/* Regular grid */}
              {regularPosts.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {regularPosts.map((post, i) => (
                    <FadeIn key={post.slug} delay={i * 60}>
                      <ArticleCard
                        tag={post.tags[0] ?? "Insights"}
                        title={post.title}
                        excerpt={post.description}
                        date={formatDate(post.publishedAt)}
                        readingTime={post.readingTime}
                        href={`/blog/${post.slug}`}
                      />
                    </FadeIn>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Blog pagination"
              className="flex items-center justify-center gap-2 mt-16"
            >
              {currentPage > 1 && (
                <Link
                  href={`/blog?${tag ? `tag=${encodeURIComponent(tag)}&` : ""}page=${currentPage - 1}`}
                  className="rounded-md border border-border px-4 py-2 text-small font-medium text-ink hover:bg-surface-alt transition-colors"
                >
                  ← Previous
                </Link>
              )}
              <span className="text-small text-ink-muted px-4">
                Page {currentPage} of {totalPages}
              </span>
              {currentPage < totalPages && (
                <Link
                  href={`/blog?${tag ? `tag=${encodeURIComponent(tag)}&` : ""}page=${currentPage + 1}`}
                  className="rounded-md border border-border px-4 py-2 text-small font-medium text-ink hover:bg-surface-alt transition-colors"
                >
                  Next →
                </Link>
              )}
            </nav>
          )}
        </Container>
      </Section>
    </>
  )
}
