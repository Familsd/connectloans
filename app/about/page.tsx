import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutPartners } from "@/components/about/about-partners"
import { AboutCTA } from "@/components/about/about-cta"
import { AboutWhat } from "@/components/about/about-what"
import { AboutAchiev } from "@/components/about/about-Achiev"

export const metadata: Metadata = {
  title: "About Us - Connect Loans | Your Trusted Loan Consultancy Partner",
  description: "Learn about Connect Loans, our mission, values, and commitment to providing expert loan consultancy services. 15+ years of experience helping clients achieve their financial goals.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutWhat />
        <AboutAchiev />
        <AboutPartners />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
