import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { buildMetadata } from "@/lib/seo"
import { getPageBySlug, getAllPublishedPages } from "@/lib/pages"
import { Section } from "@/components/primitives/section"
import { Container } from "@/components/primitives/container"

export const revalidate = 60

export async function generateStaticParams() {
  const pages = await getAllPublishedPages()
  return pages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) return {}
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
  })
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  return (
    <Section variant="default" as="div">
      <Container>
        <div className="max-w-3xl py-8">
          <h1 className="text-h1 font-heading font-bold text-ink mb-8">{page.title}</h1>
          <div className="prose prose-neutral max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.content}</ReactMarkdown>
          </div>
        </div>
      </Container>
    </Section>
  )
}
