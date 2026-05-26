import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { buildMetadata, buildArticleSchema, SITE } from "@/lib/seo"
import { getAllPosts, getPostBySlug, getRelatedPosts, formatDate, getReadingTime } from "@/lib/blog"
import { JsonLd } from "@/components/seo/json-ld"
import { ArticleCard } from "@/components/cards/article-card"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    ...(post.image && { ogImage: post.image }),
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post, 3)
  const author = post.author ?? null
  const faqs = Array.isArray(post.faqs) ? post.faqs.filter((f) => f.question && f.answer) : []

  const articleSchema = buildArticleSchema({
    title: post.title,
    description: post.description,
    publishedAt: post.published_at,
    slug: post.slug,
    authorName: author?.name,
  })

  const imageSchema = post.image
    ? {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        url: post.image,
        contentUrl: post.image,
        name: post.title,
        description: post.image_alt ?? post.title,
      }
    : null

  const faqSchema = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null

  return (
    <>
      <JsonLd data={articleSchema} />
      {imageSchema && <JsonLd data={imageSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}

      <article>
        <Section variant="default" as="div">
          <Container>
            <div className="max-w-2xl pt-8">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-small text-ink-subtle mb-8">
                <Link href="/blog" className="hover:text-ink transition-colors">Insights</Link>
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
                  {author && <p className="text-small font-medium text-ink">{author.name}</p>}
                  <p className="text-small text-ink-subtle">
                    {formatDate(post.published_at)} · {getReadingTime(post.content)}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section variant="default" as="div" className="pt-0">
          <Container>
            <div className="prose prose-neutral max-w-2xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </Container>
        </Section>

        {faqs.length > 0 && (
          <Section variant="alt" as="div">
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-h2 font-heading font-bold text-ink mb-8">Frequently asked questions</h2>
                <div className="space-y-0 divide-y divide-border border border-border rounded-lg overflow-hidden">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-surface">
                      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-medium text-ink hover:bg-surface-alt transition-colors">
                        {faq.question}
                        <span className="shrink-0 text-ink-muted group-open:rotate-180 transition-transform duration-200">
                          ▾
                        </span>
                      </summary>
                      <div className="px-6 pb-5 text-body text-ink-muted">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Container>
          </Section>
        )}

        {author && (
          <Section variant="alt" as="div">
            <Container>
              <div className="max-w-2xl">
                <div className="rounded-lg border border-border bg-surface p-8">
                  <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-4">About the author</p>
                  <p className="text-h3 font-heading font-bold text-ink">{author.name}</p>
                  <p className="text-body text-ink-muted mt-1">{author.role}</p>
                  {author.linkedin && (
                    <a href={author.linkedin} target="_blank" rel="noopener noreferrer"
                      className="inline-block mt-4 text-small font-medium text-accent underline underline-offset-2 hover:opacity-70 transition-opacity">
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            </Container>
          </Section>
        )}
      </article>

      {related.length > 0 && (
        <Section variant="default" as="div">
          <Container>
            <p className="text-small font-semibold uppercase tracking-widest text-ink-muted mb-8">Related reading</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ArticleCard
                  key={p.slug} tag={p.tags[0] ?? "Insights"} title={p.title}
                  excerpt={p.description} date={formatDate(p.published_at)}
                  readingTime={getReadingTime(p.content)} href={`/blog/${p.slug}`}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  )
}
