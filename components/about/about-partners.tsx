"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const partners = [
  { name: "State Bank of India", logo: "/images/bank/sbi.svg" },
  { name: "HDFC Bank", logo: "/images/bank/hdfc.png" },
  { name: "ICICI Bank", logo: "/images/bank/icici.png" },
  { name: "Axis Bank", logo: "/images/bank/axis.jpg" },
  { name: "Kotak Mahindra", logo: "/images/bank/kotak.jpg" },
  { name: "Punjab National Bank", logo: "/images/bank/pnb.jpg" },
  { name: "Bank of Baroda", logo: "/images/bank/bnb.jpg" },
  { name: "Canara Bank", logo: "/images/bank/canarab.jpg" },
  { name: "Union Bank", logo: "/images/bank/union.jpg" },
  { name: "IDFC First Bank", logo: "/images/bank/idfc.jpg" },
  { name: "Yes Bank", logo: "/images/bank/yes.jpg" },
  { name: "Indian Bank", logo: "/images/bank/indian.jpg" },
]

export function AboutPartners() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Network</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted Banking Partners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We work with India&apos;s leading banks and NBFCs to bring you the best loan options.
          </p>
        </div>
        
        <div
  className={`mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
    isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"
  }`}
>
  {partners.map((partner) => (
    <div
      key={partner.name}
      className="bg-card rounded-xl p-6 border border-border flex flex-col items-center justify-center text-center hover:border-accent/50 hover:shadow-md transition-all duration-300 h-32"
    >
      <div className="h-12 flex items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-12 w-auto object-contain"
        />
      </div>

      <p className="mt-3 text-sm font-medium text-foreground">
        {partner.name}
      </p>
    </div>
  ))}
</div>
        
        <p className={`mt-8 text-center text-muted-foreground ${isVisible ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
          + Many more NBFCs and financial institutions
        </p>
      </div>
    </section>
  )
}
