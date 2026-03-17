import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
// import { ServicesSection } from "@/components/home/services-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { ProcessSection } from "@/components/home/process-section"
import { LoansCarousel } from "@/components/home/loans-carousel"
import { CTASection } from "@/components/home/cta-section"
import { AboutPartners } from "@/components/home/bank-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <HeroSection />
        <AboutPartners />
        <LoansCarousel />
        {/* <ServicesSection /> */}
        <WhyChooseSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
