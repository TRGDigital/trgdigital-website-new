import type { MDXComponents } from "mdx/types"
import { PullQuote } from "@/components/mdx/pull-quote"
import { Callout } from "@/components/mdx/callout"
import { Figure } from "@/components/mdx/figure"
import { Stat } from "@/components/mdx/stat"

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-h2 font-heading font-bold text-ink mt-14 mb-4 scroll-mt-24">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-h3 font-heading font-bold text-ink mt-10 mb-3 scroll-mt-24">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-body font-heading font-bold text-ink mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-body text-ink-muted leading-relaxed mb-5">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-body text-ink-muted leading-relaxed">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-body text-ink-muted leading-relaxed">
        {children}
      </ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 my-8 text-ink-muted italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono text-small bg-surface-alt px-1.5 py-0.5 rounded text-ink">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface-dark text-surface p-6 rounded-lg overflow-x-auto my-8 text-small font-mono">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-border my-12" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    PullQuote,
    Callout,
    Figure,
    Stat,
    ...components,
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components)
}
