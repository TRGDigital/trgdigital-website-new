"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { getBrowserClient } from "@/lib/supabase-browser"

const navItems = [
  { label: "Posts", href: "/admin/posts" },
  { label: "Authors", href: "/admin/authors" },
  { label: "Page SEO", href: "/admin/page-seo" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = getBrowserClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (pathname === "/admin/login") return <>{children}</>

  return (
    <div className="min-h-screen bg-surface-alt flex">
      <aside className="w-52 shrink-0 bg-surface border-r border-border flex flex-col">
        <div className="px-5 py-5 border-b border-border">
          <p className="text-small font-semibold uppercase tracking-widest text-ink-muted">TRG Digital</p>
          <p className="text-small font-bold text-ink mt-0.5">Admin</p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-small font-medium transition-colors ${
                  active
                    ? "bg-accent text-ink-inverse"
                    : "text-ink-muted hover:bg-surface-alt hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="px-3 py-4 border-t border-border">
          <button
            onClick={handleSignOut}
            className="w-full rounded-md px-3 py-2 text-small font-medium text-ink-muted hover:bg-surface-alt hover:text-ink transition-colors text-left"
          >
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  )
}
