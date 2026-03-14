"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutHero() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-24 bg-secondary overflow-hidden" ref={ref}>
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)' }} />
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">About Us</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Your Trusted Partner in <span className="text-primary">Financial </span> Solutions
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            For over 15 years, Connect Loans has been helping individuals and businesses navigate the complex
            world of financing. We believe everyone deserves access to the right loan at the best terms.
          </p>
        </div>
      </div>
    </section>
  )
}
