import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnerHero } from "@/components/partner/partner-hero"
import { WhyChoosePartner } from "@/components/partner/why-partner"
import { PartnerApplicationForm } from "@/components/partner/apply-partner"

export const metadata: Metadata = {
    title: "Connect Loans | Get Your Loan Today - Fast Approval, Best Rates & Expert Guidance",
    description: "Apply for housing loans, business loans, loan against property and more. Quick approval, competitive rates, and expert guidance from Connect Loans.",
}

export default function PartnerPage() {
    return (
        <>
            <Header />
            <main className="pt-[73px]">
                <PartnerHero />
                <PartnerApplicationForm />
                <WhyChoosePartner />
            </main>
            <Footer />
        </>
    )
}
