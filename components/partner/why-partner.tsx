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
    title: "Access to Verified Loan Leads",
    description: "Get consistent, quality-checked leads to focus on conversions instead of sourcing.",
  },
  {
    icon: BadgePercent,
    title: "Wide Lender Network",
    description: "Connect with multiple banks and NBFCs to match the right product for every customer.",
  },
  {
    icon: Zap,
    title: "Faster Processing Flow",
    description: "Streamlined system ensures quicker turnaround from application to approval.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Partner Support",
    description: "Get operational and process support at every stage of your loan handling.",
  },
  {
    icon: Building2,
    title: "Multiple Loan Categories",
    description: "Handle personal, business, home, and other loan requirements from one platform.",
  },
  {
    icon: FileCheck,
    title: "Simplified Documentation",
    description: "Standardized process reduces friction and improves deal closure efficiency.",
  },
]

export function WhyChoosePartner() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary">
      <section className="py-16 bg-secondary" ref={ref}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Partner Program
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Join the Connect Loans Partner Network?
            </h2>

            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured platform designed to help partners access verified leads, streamline loan processing,
              and build long-term, reliable partnerships in lending.
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
                  Ready to Join as a Partner?
                </h3>

                <p className="mt-2 text-primary-foreground/80 max-w-lg">
                  Enroll in our partner program and start working with a reliable system designed
                  for consistency, transparency, and long-term growth.
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
