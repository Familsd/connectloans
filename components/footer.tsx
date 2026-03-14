import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  services: [
    { href: "/services#business", label: "Business Loans" },
    { href: "/services#housing", label: "Housing Loans" },
    // { href: "/services#plot", label: "Plot Loans" },
    // { href: "/services#industrial", label: "Industrial Property Loans" },
    { href: "/services#lap", label: "Loan Against Property" },
    { href: "/services#lrd", label: "Lease Rental Discounting" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
}

export function Footer() {
  return (
    <>
      {/* Apply for Loan CTA - Floating Section */}
      {/* <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative -mb-16 rounded-2xl bg-primary p-8 md:p-12 shadow-2xl shadow-primary/20">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  Ready to Get Your Loan?
                </h3>
                <p className="mt-2 text-primary-foreground/80 max-w-lg">
                  Start your application today and get expert guidance from our loan consultants. Quick approval, best rates.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30 group w-full sm:w-auto">
                  <Link href="/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-primary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  <Link href="tel:+919876543210">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-24 pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-bold text-foreground">
                Connect<span className="text-primary">Loans</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-58">
                Your trusted loan consultancy, connecting you with the right lenders for your financial needs.              </p>
            </div>



            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Our Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    123 Financial District, Business Tower, Mumbai, India - 400001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <Link href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 98765 43210
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <Link href="mailto:info@connectloans.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@connectloans.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Connect Services Pvt.Ltd. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Connect Loans is a loan consultancy service. We are not a direct lender.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
