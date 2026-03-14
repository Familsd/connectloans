"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { FileText, Clock, Shield, CheckCircle } from "lucide-react"

const highlights = [
  { icon: FileText, text: "Simple Application" },
  { icon: Clock, text: "24-Hour Response" },
  { icon: Shield, text: "Secure Process" },
  { icon: CheckCircle, text: "High Approval Rate" },
]

export function ApplyHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-20 bg-primary overflow-hidden" ref={ref}>
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)' }} />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Start Your Journey</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Apply for Your <span className="text-primary">Dream </span>Loan Today
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Take the first step towards achieving your financial goals. Our expert team is ready to 
            help you find the perfect loan solution tailored to your needs.
          </p>
        </div>
        
        <div className={`mt-12 flex flex-wrap justify-center gap-6 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
          {highlights.map((item) => (
            <div key={item.text} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-5 py-2.5">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}
