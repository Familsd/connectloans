"use client"

import { Heart, Shield, Users, Lightbulb, Award, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

export function AboutValues() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-secondary" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Our Core Values</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Drives Us Every Day
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our core values shape every interaction and decision we make.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
