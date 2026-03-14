import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Our Services - Connect Loans | Housing, Business & Property Loans",
  description: "Explore our comprehensive loan services including housing loans, plot loans, business loans, loan against property, and working capital finance. Expert guidance for all your financial needs.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
