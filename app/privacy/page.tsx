import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Connect Loans",
  description: "Read our privacy policy to understand how Connect Loans collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <section className="py-24 bg-secondary">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Legal</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Privacy Policy
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect Loans (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website or use our loan consultancy services.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Financial information (income details, employment information, loan requirements)</li>
                    <li>Property details (for property-related loans)</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process and evaluate your loan applications</li>
                    <li>Connect you with suitable banking partners and lenders</li>
                    <li>Provide personalized financial consultancy services</li>
                    <li>Communicate with you about your loan enquiries</li>
                    <li>Send you relevant updates and promotional materials (with your consent)</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing with Financial Partners</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    As a loan consultancy service, we share your information with banks, NBFCs, and other 
                    financial institutions to help process your loan applications. This sharing is essential 
                    to provide our services. We only share information with partners who have agreed to 
                    maintain the confidentiality and security of your data.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the Internet is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights and Choices</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies and similar tracking technologies to enhance your browsing 
                    experience and analyze website traffic. You can control cookie preferences through 
                    your browser settings.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. User Consent</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using our services and submitting your information through our forms, you consent 
                    to the collection, use, and sharing of your information as described in this Privacy 
                    Policy. You may withdraw your consent at any time by contacting us.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any 
                    significant changes by posting the new policy on this page and updating the 
                    &quot;Last updated&quot; date.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please 
                    contact us at:
                  </p>
                  <div className="mt-4 text-muted-foreground">
                    <p>Email: privacy@connectloans.com</p>
                    <p>Phone: +91 98765 43210</p>
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
