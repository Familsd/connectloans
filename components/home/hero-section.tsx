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

// SVG Icons as components for better visual representation
function MoneyBagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="36" r="24" fill="currentColor" opacity="0.15" />
      <path d="M32 16c-12 0-20 8-20 22s8 18 20 18 20-4 20-18-8-22-20-22z" fill="currentColor" opacity="0.3" />
      <path d="M26 12h12l-2-6c0-1-1-2-4-2s-4 1-4 2l-2 6z" fill="currentColor" opacity="0.4" />
      <text x="32" y="42" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="bold">&#8377;</text>
    </svg>
  )
}

function PeopleGroupIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="18" r="10" fill="currentColor" opacity="0.4" />
      <circle cx="14" cy="24" r="7" fill="currentColor" opacity="0.25" />
      <circle cx="50" cy="24" r="7" fill="currentColor" opacity="0.25" />
      <path d="M32 30c-14 0-22 8-22 16v6h44v-6c0-8-8-16-22-16z" fill="currentColor" opacity="0.35" />
      <path d="M14 34c-8 0-12 4-12 10v4h16v-8c0-2 0.5-4 1.5-6-2-0.5-4-0.5-5.5 0z" fill="currentColor" opacity="0.2" />
      <path d="M50 34c8 0 12 4 12 10v4H46v-8c0-2-0.5-4-1.5-6 2-0.5 4-0.5 5.5 0z" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

function BankBuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 4L4 20v4h56v-4L32 4z" fill="currentColor" opacity="0.4" />
      <rect x="8" y="26" width="8" height="24" fill="currentColor" opacity="0.3" />
      <rect x="20" y="26" width="8" height="24" fill="currentColor" opacity="0.3" />
      <rect x="36" y="26" width="8" height="24" fill="currentColor" opacity="0.3" />
      <rect x="48" y="26" width="8" height="24" fill="currentColor" opacity="0.3" />
      <rect x="4" y="50" width="56" height="6" fill="currentColor" opacity="0.35" />
      <circle cx="32" cy="14" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function ChartUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="44" width="10" height="14" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="20" y="34" width="10" height="24" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="34" y="24" width="10" height="34" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="48" y="14" width="10" height="44" rx="2" fill="currentColor" opacity="0.4" />
      <path d="M8 38L22 28L36 32L56 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M48 12h10v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

// Animated counter component
function AnimatedCounter({
  value,
  suffix,
  isVisible
}: {
  value: number
  suffix: string
  isVisible: boolean
}) {
  const count = useCountAnimation({ end: value, duration: 2000, isVisible })
  return <>{count}{suffix}</>
}

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Crores Disbursed",
    icon: MoneyBagIcon,
    color: "primary" as const,
    description: "Total loan amount processed",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Happy Clients",
    icon: PeopleGroupIcon,
    color: "accent" as const,
    description: "Satisfied customers served",
  },
  {
    value: 25,
    suffix: "+",
    label: "Banking Partners",
    icon: BankBuildingIcon,
    color: "primary" as const,
    description: "Top banks & NBFCs",
  },
  {
    value: 98,
    suffix: "%",
    label: "Approval Rate",
    icon: ChartUpIcon,
    color: "accent" as const,
    description: "Successful loan approvals",
  },
]

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-8 lg:py-0">
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

          {/* Right Content - Enhanced Stats Grid */}
          <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-200" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const colorClass = stat.color === 'primary' ? 'text-primary' : 'text-accent'
                const bgClass = stat.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                const borderHover = stat.color === 'primary' ? 'hover:border-primary/30' : 'hover:border-accent/30'

                return (
                  <div
                    key={stat.label}
                    className={`group relative bg-card rounded-2xl p-5 lg:p-6 shadow-lg border border-border ${borderHover} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                    style={{ animationDelay: `${(index + 2) * 150}ms` }}
                  >
                    {/* Background icon watermark */}
                    <div className="absolute -right-4 -bottom-4 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300">
                      <stat.icon className={`h-28 w-28 ${colorClass}`} />
                    </div>

                    <div className="relative flex flex-col h-full">
                      {/* Icon */}
                      <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-xl ${bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className={`h-7 w-7 lg:h-8 lg:w-8 ${colorClass}`} />
                      </div>

                      {/* Value with animation */}
                      <p className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${colorClass} leading-none`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                      </p>

                      {/* Label */}
                      <p className="text-sm lg:text-base font-medium text-foreground mt-2">
                        {stat.label}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
