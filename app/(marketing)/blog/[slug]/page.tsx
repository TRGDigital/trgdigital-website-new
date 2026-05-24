import { notFound } from "next/navigation"
import Link from "next/link"
import { compile, run } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import { buildMetadata, buildArticleSchema } from "@/lib/seo"
import { getAllPosts, getPostBySlug, getAuthorBySlug, getRelatedPosts, formatDate } from "@/lib/mdx"
import { getMDXComponents } from "@/mdx-components"
import { JsonLd } from "@/components/seo/json-ld"
import { ArticleCard } from "@/components/cards/article-card"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const compiled = await compile(post.content, {
    outputFormat: "function-body",
    remarkPlugins: [],
    rehypePlugins: [],
  })

  const { default: MDXContent } = await run(String(compiled), {
    ...(runtime as Parameters<typeof run>[1]),
    baseUrl: import.meta.url,
  })

  const author = post.author ? getAuthorBySlug(post.author) : null
  const related = getRelatedPosts(post, 3)

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          publishedAt: post.publishedAt,
          slug: post.slug,
          authorName: author?.name,
        })}
      />

      <article>
      {/* Post header */}
      <Section variant="default" as="div">
        <Container>
          <div className="max-w-2xl pt-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-small text-ink-subtle mb-8">
              <Link href="/blog" className="hover:text-ink transition-colors">
                Insights
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-ink-muted">{post.tags[0] ?? "Article"}</span>
            </nav>

            {post.tags.length > 0 && (
              <p className="text-small font-semibold uppercase tracking-widest text-accent mb-4">
                {post.tags[0]}
              </p>
            )}

            <h1 className="text-h1 font-heading font-bold text-ink">{post.title}</h1>
            <p className="text-body-lg text-ink-muted mt-4">{post.description}</p>

            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div>
                {author && (
                  <p className="text-small font-medium text-ink">{author.name}</p>
                )}
                <p className="text-small text-ink-subtle">
                  {formatDate(post.publishedAt)} · {post.readingTime}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Post body */}
      <Section variant="default" as="div" className="pt-0">
        <Container>
          <div className="max-w-2xl">
            <MDXContent components={getMDXComponents({})} />
          </div>
        </Container>
      </Section>

      {/* Author card */}
      {author && (
        <Section variant="alt" as="div">
          <Container>
            <div className="max-w-2xl">
              <div className="rounded-lg border border-border bg-surface p-8">
                <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">
                  About the author
                </p>
                <p className="text-h3 font-heading font-bold text-ink">{author.name}</p>
                <p className="text-body text-ink-muted mt-1">{author.role}</p>
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-small font-medium text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          </Container>
        </Section>
      )}
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <Section variant="default" as="div">
          <Container>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-8">
              Related reading
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ArticleCard
                  key={p.slug}
                  tag={p.tags[0] ?? "Insights"}
                  title={p.title}
                  excerpt={p.description}
                  date={formatDate(p.publishedAt)}
                  readingTime={p.readingTime}
                  href={`/blog/${p.slug}`}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
