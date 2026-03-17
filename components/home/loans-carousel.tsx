"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Home, MapPin, Building2, Landmark, Receipt, Briefcase, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const loanTypes = [
  {
    icon: Home,
    title: "Housing Loans",
    description: "Purchase your dream home with competitive interest rates starting from 8.5% p.a. Flexible tenure up to 30 years.",
    features: ["Up to 90% financing", "Quick approval", "Minimal documentation"],
  },
  {
    icon: MapPin,
    title: "Plot Loans",
    description: "Finance your plot purchase for future construction with attractive terms and easy processing.",
    features: ["Up to 80% financing", "15-year tenure", "Competitive rates"],
  },
  {
    icon: Building2,
    title: "Industrial Property Loans",
    description: "Expand your business with industrial property financing. Ideal for factories, warehouses, and commercial spaces.",
    features: ["High loan amounts", "Flexible repayment", "Industry expertise"],
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    description: "Unlock the value of your residential or commercial property for any financial need.",
    features: ["Up to 70% LTV", "Lower interest rates", "Multi-purpose use"],
  },
  {
    icon: Receipt,
    title: "Lease Rental Discounting",
    description: "Convert your future rental income from leased properties into immediate funds.",
    features: ["Based on rental income", "Quick disbursement", "Minimal collateral"],
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with unsecured and secured business loan options.",
    features: ["Minimal documentation", "Fast processing", "Flexible tenure"],
  },
  {
    icon: Banknote,
    title: "Working Capital Finance",
    description: "Maintain smooth business operations with short-term working capital financing.",
    features: ["Cash flow support", "Overdraft facility", "Quick sanctions"],
  },
]

export function LoansCarousel() {
  const { ref, isVisible } = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, loanTypes.length - itemsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="py-24 bg-background overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Customized Loan Solutions for Every Need
          </h2>
          <p className="mt-2 pb-5 text-lg text-muted-foreground">
            From business to housing finance, we connect you with the right lenders for your financial goals.
          </p>
        </div>
        {/* <div className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">Loan Types</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Explore Our Loan Products
          </h2>
        </div> */}

        <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {loanTypes.map((loan) => (
                <div
                  key={loan.title}
                  className="w-full shrink-0 px-3 mb-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-card mt-2  rounded-2xl p-6 h-full border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <loan.icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {loan.title}
                    </h3>

                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                      {loan.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {loan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                >
                  <span className="sr-only">Go to slide {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
