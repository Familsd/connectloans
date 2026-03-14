"use client"

import { Zap, Shield, Users, Eye, Layers } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Zap,
    title: "Fast Loan Processing",
    description: "Quick approvals with minimal documentation. Get your loan sanctioned in days.",
  },
  {
    icon: Shield,
    title: "Trusted Banking Partners",
    description: "We work with 25+ reputed banks and NBFCs to offer you the best loan options.",
  },
  {
    icon: Users,
    title: "Expert Financial Consultation",
    description: "Our experienced team guides you through every step of the loan process.",
  },
  {
    icon: Eye,
    title: "Transparent Loan Guidance",
    description: "No hidden charges or surprises. Complete clarity on all terms and conditions.",
  },
  {
    icon: Layers,
    title: "Multiple Loan Options",
    description: "Compare offers from multiple lenders and choose what works best for you.",
  },
]

export function WhyChooseSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Your Success is Our Priority
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At Connect Loans, we understand that every client has unique financial needs.
              Our personalized approach ensures you get the right loan solution with the best possible terms.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}>
            {/* <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground mt-2">Years of Experience</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground mt-1">Crores Disbursed</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">10K+</p>
                    <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">25+</p>
                    <p className="text-sm text-muted-foreground mt-1">Bank Partners</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground mt-1">Approval Rate</p>
                  </div>
                </div>
              </div>
            </div> */}
            <img
              src="/images/advisor.png"
              alt="Why Choose Us"
              className="w-full rounded-2xl shadow-lg border border-border"
            />
          </div>
        </div>

        
       

      </div>
    </section>
  )
}
