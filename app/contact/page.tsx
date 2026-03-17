import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { HelpCards } from "@/components/contact/help-cards"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactCta } from "@/components/contact/contact-cta"
import { ContactSection } from "@/components/contact/contact-sec"

export const metadata: Metadata = {
  title: "Contact Us - Connect Loans | Get Expert Loan Consultation",
  description: "Contact Connect Loans for loan consultation, eligibility guidance, and financial assistance. Our experts are here to help with housing loans, business loans, and more.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <ContactHero />
        {/* <ContactSection/> */}
        {/* <ContactInfo /> */}
        <ContactForm />
        <HelpCards />
        <ContactFaq />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
