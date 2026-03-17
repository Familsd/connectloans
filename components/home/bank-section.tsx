"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const partners = [
  { name: "State Bank of India", logo: "/images/bank/sbi.svg" },
  { name: "HDFC Bank", logo: "/images/bank/hdfc.png" },
  { name: "ICICI Bank", logo: "/images/bank/icici.png" },
  { name: "Bajaj Finserv", logo: "/images/bank/bajaj.png" },
  { name: "Axis Bank", logo: "/images/bank/axis.jpg" },
  { name: "Kotak Mahindra", logo: "/images/bank/kotak.jpg" },
  { name: "Aditya Birla Capital", logo: "/images/bank/aditya.jpeg" },
  { name: "Punjab National Bank", logo: "/images/bank/pnb.jpg" },
  { name: "Bank of Baroda", logo: "/images/bank/bnb.jpg" },
  { name: "l & T Finance", logo: "/images/bank/lndt.png" },
  { name: "Canara Bank", logo: "/images/bank/canarab.jpg" },
  { name: "Union Bank", logo: "/images/bank/union.jpg" },
  { name: "IDFC First Bank", logo: "/images/bank/idfc.jpg" },
  { name: "Tata Capital", logo: "/images/bank/tata1.png" },
  { name: "Yes Bank", logo: "/images/bank/yes.jpg" },
  { name: "Indian Bank", logo: "/images/bank/indian.jpg" },
  { name: "Indian Oversees", logo: "/images/bank/indianoverseas.jpg" },
  { name: "KVB", logo: "/images/bank/kvb.jpg" },
  { name: "Muthoot Finance", logo: "/images/bank/muth.png" },
  
]

export function AboutPartners() {

  const { ref, isVisible } = useScrollAnimation()

  return (

    <section className="py-14 bg-secondary overflow-hidden" ref={ref}>

      <div className="mx-auto max-w-6xl px-4 lg:px-8 text-center">

        {/* HEADER */}
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>

          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Network
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted Banking Partners
          </h2>

          <p className="mt-2 text-lg text-muted-foreground">
            We work with India's leading banks and NBFCs to bring you the best loan options.
          </p>

        </div>

        {/* CAROUSEL */}
        <div className="relative mt-14 overflow-hidden p-4 ">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-secondary to-transparent z-10"></div>

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-secondary to-transparent z-10"></div>

          <div
            style={{
              display: "flex",
              gap: "60px",
              width: "max-content",
              animation: "scrollPartners 35s linear infinite"
            }}
          >

            {[...partners, ...partners].map((partner, index) => (

              <div
                key={index}
                style={{
                  minWidth: "120px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
                }}
              >

                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    maxHeight: "50px",
                    width: "auto",
                    objectFit: "contain"
                  }}
                />

              </div>

            ))}

          </div>

        </div>

        <p className={`mt-8 text-center text-muted-foreground ${isVisible ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
          + Many more NBFCs and financial institutions
        </p>

      </div>

      {/* INLINE ANIMATION */}
      <style jsx>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>

  )
}