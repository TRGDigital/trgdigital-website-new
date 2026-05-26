import { Header } from "@/components/chrome/header"
import { Footer } from "@/components/chrome/footer"
import { NavSpacer } from "@/components/chrome/nav-spacer"

export const revalidate = 60

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <NavSpacer />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
