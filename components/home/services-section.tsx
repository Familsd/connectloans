"use client"

import Link from "next/link"
import { Home, MapPin, Building2, Landmark, Receipt, Briefcase, Banknote, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Home,
    title: "Housing Loans",
    description: "Realize your dream of owning a home with competitive interest rates and flexible repayment options.",
    href: "/services#housing",
  },
  {
    icon: MapPin,
    title: "Plot Purchase Loans",
    description: "Secure financing for your perfect plot of land with attractive terms and quick approvals.",
    href: "/services#plot",
  },
  {
    icon: Building2,
    title: "Industrial Property Loans",
    description: "Fund your industrial ventures with specialized loans designed for commercial properties.",
    href: "/services#industrial",
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    description: "Unlock the value of your property with loans at competitive rates for any purpose.",
    href: "/services#lap",
  },
  {
    icon: Receipt,
    title: "Lease Rental Discounting",
    description: "Convert your future rental income into immediate funds for business expansion.",
    href: "/services#lrd",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with tailored financing solutions and minimal documentation.",
    href: "/services#business",
  },
  {
    icon: Banknote,
    title: "Working Capital Finance",
    description: "Maintain smooth operations with flexible working capital financing solutions.",
    href: "/services#working-capital",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive Loan Solutions for Every Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From housing to business finance, we connect you with the right lenders for your financial goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
