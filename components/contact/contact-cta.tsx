"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactCta() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-secondary">
      <section className="relative z-10 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="relative -mb-16 rounded-2xl bg-primary p-8 md:p-12 shadow-2xl shadow-primary/20">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">
                  Find the Right Loan for Your Financial Goals              </h2>
                <p className="mt-2 text-primary-foreground/80 max-w-lg">
                  From home loans to business finance and loan against property, discover solutions designed for your financial needs.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
                {/* <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/30 group w-full sm:w-auto">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button> */}
                <Button asChild size="lg" variant="outline" className="bg-[#ffffff] text-primary hover:bg-background/80 shadow-lg shadow-primary/30 group w-full sm:w-auto">
                  <Link href="/services">
                    Explore Loan Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

  )
}
