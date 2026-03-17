"use client"

import { Zap, Shield, Users, Eye, Layers } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountAnimation } from "@/hooks/use-count-animation"

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

export function WhyChooseSection() {
  const { ref, isVisible } = useScrollAnimation()
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

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Simplifying Loans with Expert Financial Guidance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              At Connect Loans, we understand that every client has unique financial needs. Our experts connect you with trusted lenders to secure the right loan solution with the most competitive terms.</p>

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



          {/* Right Content - Enhanced Stats Grid */}
          <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}>
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
