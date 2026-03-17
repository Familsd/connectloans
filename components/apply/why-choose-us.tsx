"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Users,
  BadgePercent,
  Zap,
  HeadphonesIcon,
  Building2,
  FileCheck
} from "lucide-react"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Users,
    title: "Expert Loan Consultants",
    description: "Our team of experienced financial advisors guides you through every step of the loan process.",
  },
  {
    icon: BadgePercent,
    title: "Best Interest Rates",
    description: "We compare offers from 25+ partner banks to get you the most competitive interest rates.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick document verification and streamlined process ensures faster loan approvals.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal relationship manager assigned to handle your application from start to finish.",
  },
  {
    icon: Building2,
    title: "Multiple Bank Options",
    description: "Access to all major banks and NBFCs, giving you the flexibility to choose the best offer.",
  },
  {
    icon: FileCheck,
    title: "Hassle-Free Documentation",
    description: "We assist with document preparation and verification, making the process smooth and easy.",
  },
]

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary">
      <section className="py-16 bg-secondary" ref={ref}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Why Connect Loans</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Choose Us for Your Loan Needs?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 15 years of experience, we have helped thousands of customers secure the best loan solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative z-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
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
                {/* <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30 group w-full sm:w-auto">
                  <Link href="/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button> */}
                <Button asChild size="lg" variant="outline" className="bg-primary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  <Link href="tel:+919966520005">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>


  )
}
