import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Use - Connect Loans",
  description: "Read our terms of use to understand the conditions for using Connect Loans services.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Legal</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Terms of Use
              </h1>
              <p className="mt-4 text-muted-foreground">
                Last updated: March 2026
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Service Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect Loans is a loan consultancy service that helps individuals and businesses 
                    find suitable loan products from various banks and financial institutions. We act as 
                    intermediaries to connect borrowers with lenders and provide guidance throughout the 
                    loan application process.
                  </p>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Important Disclaimer: Not a Direct Lender</h2>
                  <p className="text-foreground leading-relaxed font-medium">
                    Connect Loans is NOT a bank, NBFC, or direct lender. We do not directly provide loans 
                    or make lending decisions. We are a consultancy service that facilitates connections 
                    between borrowers and various financial institutions. All loan approvals, terms, interest 
                    rates, and disbursements are at the sole discretion of the respective lending partners.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">By using our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Provide accurate and truthful information in all loan applications</li>
                    <li>Submit genuine documents for verification purposes</li>
                    <li>Not misrepresent your financial status or identity</li>
                    <li>Promptly respond to requests for additional information</li>
                    <li>Understand that loan approval is subject to lender evaluation</li>
                    <li>Not use our services for any unlawful purposes</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. No Guarantee of Loan Approval</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not guarantee loan approval or specific interest rates. Loan eligibility, terms, 
                    and approval are determined solely by the lending institutions based on their policies 
                    and your creditworthiness. Our role is to assist in the application process and provide 
                    guidance, not to make lending decisions.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Fees and Charges</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our consultancy services may involve processing fees, which will be clearly communicated 
                    before any charges are applied. Any fees charged by lending institutions (processing fees, 
                    stamp duty, legal fees, etc.) are separate from our service charges and are payable 
                    directly to the respective institutions.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect Loans shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    <li>Rejection of loan applications by lending institutions</li>
                    <li>Delays in loan processing or disbursement by lenders</li>
                    <li>Changes in interest rates or loan terms by lenders</li>
                    <li>Any losses arising from reliance on information provided on our website</li>
                    <li>Actions or omissions of our banking partners</li>
                    <li>Technical issues affecting website accessibility</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, and images, is the 
                    property of Connect Loans and is protected by intellectual property laws. You may 
                    not reproduce, distribute, or use our content without prior written permission.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for 
                    the content, privacy practices, or terms of use of these external sites. Visiting 
                    third-party links is at your own risk.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Use are governed by the laws of India. Any disputes arising from 
                    the use of our services shall be subject to the exclusive jurisdiction of the 
                    courts in Mumbai, Maharashtra.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms of Use at any time. Changes will be 
                    effective immediately upon posting on this website. Continued use of our services 
                    after any changes constitutes acceptance of the modified terms.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Use, please contact us at:
                  </p>
                  <div className="mt-4 text-muted-foreground">
                    <p>Email: legal@connectloans.com</p>
                    <p>Phone: +91 99665 20005</p>
                    <p>Address: 123 Financial District, Business Tower, Mumbai, India - 400001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
