"use client"

import { FileText, UserCheck, FileSearch, ThumbsUp, Wallet } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Enquiry",
    description: "Fill out our simple loan application form with your basic details and requirements.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Eligibility Evaluation",
    description: "Our experts assess your profile and match you with suitable lender options.",
  },
  {
    icon: FileSearch,
    step: "03",
    title: "Document Verification",
    description: "Submit required documents for verification by our team and lender partners.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Loan Approval",
    description: "Get your loan approved with the best terms and competitive interest rates.",
  },
  {
    icon: Wallet,
    step: "05",
    title: "Fund Disbursement",
    description: "Receive funds directly in your account after successful approval and documentation.",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Simple 5-Step Loan Process
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From application to disbursement, we make the loan journey smooth and hassle-free.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* <div className="relative z-10 mx-auto h-20 w-20 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg group hover:bg-primary transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div> */}
                <div className="relative z-10 mx-auto h-20 w-20 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg group hover:bg-primary transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  {index < steps.length - 0 && (
                    <div className="hidden lg:block absolute top-24 -translate-x-1/2 -translate-y-1/2 right-[25px]">

                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Arrow Connector - Desktop Only */}

                <div className="mt-6">
                  <span className="text-sm font-bold text-primary">Step {step.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
