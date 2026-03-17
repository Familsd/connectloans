import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplyHero } from "@/components/apply/apply-hero"
import { WhyChooseUs } from "@/components/apply/why-choose-us"
import { LoanApplicationForm } from "@/components/apply/loan-application-form"

export const metadata: Metadata = {
  title: "Connect Loans | Get Your Loan Today - Fast Approval, Best Rates & Expert Guidance",
  description: "Apply for housing loans, business loans, loan against property and more. Quick approval, competitive rates, and expert guidance from Connect Loans.",
}

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <ApplyHero />
        <LoanApplicationForm />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}
