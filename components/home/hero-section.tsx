"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountAnimation } from "@/hooks/use-count-animation"

const highlights = [
  "Fast Loan Processing",
  "Trusted Banking Partners",
  "Expert Financial Guidance",
]




export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-8 lg:py-20">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)' }} />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>


      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-8 pb-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Trusted by 10,000+ Clients
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-balance">
              Trusted Loan Consultants for{" "}
              <span className="text-primary">Housing, Property & Business</span> Finance
            </h1>

            <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Expert guidance, multiple lender options, and transparent loan processing to help you achieve your financial goals.
            </p>

            <ul className="mt-6 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-sm text-foreground ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg shadow-primary/25 h-12 px-6 w-full sm:w-auto">
                <Link href="/apply">
                  Apply for Loan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/5 h-12 px-6 w-full sm:w-auto">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}>
            
            <img
              src="/images/h1 (2).png"
              alt="Why Choose Us"
               className="w-full rounded-2xl "
              // className="w-full rounded-2xl shadow-lg border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
