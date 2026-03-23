"use client"

import { Heart, Shield, Users, Lightbulb, Award, Clock } from "lucide-react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCountAnimation } from "@/hooks/use-count-animation"
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
        value: 10,
        suffix: "+",
        label: "Years of Excellence",
        // icon: MoneyBagIcon,
        color: "primary" as const,
        description: "Total years in the industry",
    },
    {
        value: 15,
        suffix: "K+",
        label: "Happy Clients",
        // icon: PeopleGroupIcon,
        color: "accent" as const,
        description: "Satisfied customers served",
    },
    {
        value: 25,
        suffix: "+",
        label: "Banking Partners",
        // icon: BankBuildingIcon,
        color: "primary" as const,
        description: "Top banks & NBFCs",
    },
   {
        value: 500,
        suffix: "+",
        label: "Crores Disbursed",
        // icon: MoneyBagIcon,
        color: "accent" as const,
        description: "Total loan amount processed",
    },
]
const values = [
    {
        icon: Heart,
        title: "Client-First Approach",
        description: "Your financial well-being is our top priority. We listen, understand, and recommend solutions that truly benefit you.",
    },
    {
        icon: Shield,
        title: "Integrity & Trust",
        description: "We maintain the highest ethical standards. Honest advice and transparent dealings are the foundation of our service.",
    },
    {
        icon: Users,
        title: "Expert Guidance",
        description: "Our team of financial experts brings years of experience to help you make informed decisions.",
    },
    {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description: "We constantly evolve our services to offer creative financing solutions that meet changing market needs.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for excellence in every interaction, ensuring a seamless and professional experience.",
    },
    {
        icon: Clock,
        title: "Efficiency",
        description: "Time is valuable. We work diligently to process your loan applications quickly and efficiently.",
    },
]

export function AboutAchiev() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section className="py-24 bg-secondary" ref={ref}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider">Our Achievments</p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        What Drives Us Every Day
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Numbers that speak for our success
                    </p>
                </div>

                <div className="mt-16 grid  gap-8">
                    <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-200" : "opacity-0"}`}>
                        <div className="grid grid-cols-4 gap-4">
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
                                        {/* <div className="absolute -right-4 -bottom-4 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-300">
                                            <stat.icon className={`h-28 w-28 ${colorClass}`} />
                                        </div> */}

                                        <div className="relative flex flex-col h-full">
                                            {/* Icon */}
                                            {/* <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-xl ${bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                <stat.icon className={`h-7 w-7 lg:h-8 lg:w-8 ${colorClass}`} />
                                            </div> */}

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
                 <div className="mt-16 bg-card border rounded-2xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 items-center">

            {/* LEFT IMAGE */}
            <div className="h-full">
              <img
                src="/images/ser (2).jpg"
                alt="Partner Program"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-8">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">
                Partner Program
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-foreground">
                Join Our Partner Network
              </h3>

              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Become a part of a structured and reliable loan distribution ecosystem.
                Access verified opportunities, streamlined processes, and dedicated support
                designed to help you operate with confidence and consistency.
              </p>

              <div className="mt-5">
                <a
                  href="/partner"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Apply as a Partner →
                </a>
              </div>
            </div>

          </div>
        </div>
            </div>
        </section>
    )
}
