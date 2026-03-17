"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (


    <section className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative -mb-16 rounded-2xl bg-primary p-8 md:p-12 shadow-2xl shadow-primary/20">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
                Let&apos;s Start Your Financial Journey Together
              </h2>
              <p className="mt-2 text-primary-foreground/80 max-w-lg">
                Whether you&apos;re buying your first home or expanding your business,
                we&apos;re here to guide you every step of the way.
              </p>
              {/* <p className="mt-2 text-primary-foreground/80 max-w-lg">
                Start your application today and get expert guidance from our loan consultants. Quick approval, best rates.
              </p> */}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Button asChild size="lg" className="bg-[#ffffff] text-primary hover:bg-secondary/90 shadow-lg shadow-primary/30 group w-full sm:w-auto">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="bg-primary border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                <Link href="tel:+919966520005">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="py-24 bg-primary" ref={ref}>
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
    //       <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
    //         Let&apos;s Start Your Financial Journey Together
    //       </h2>
    //       <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
    //         Whether you&apos;re buying your first home or expanding your business, 
    //         we&apos;re here to guide you every step of the way.
    //       </p>

    //       <div className="mt-10 flex flex-wrap justify-center gap-4">
    //         <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
    //           <Link href="/contact">
    //             Contact Us Today
    //             <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    //           </Link>
    //         </Button>
    //         <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
    //           <Link href="/services">
    //             Explore Our Services
    //           </Link>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
