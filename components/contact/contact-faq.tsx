"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "What types of loans does Connect Loans assist with?",
    answer: "We provide assistance for housing loans, loan against property, business loans, working capital finance, and lease rental discounting (LRD). Our experts can help you find the best loan solution based on your needs.",
  },
  {
    question: "How long does loan approval take?",
    answer: "Loan approval timelines vary depending on the lender, documentation, and loan type. However, we assist in speeding up the process by ensuring proper documentation and follow-ups. Typically, approvals can take 3-7 working days after complete documentation.",
  },
  {
    question: "Do I need property for loan against property?",
    answer: "Yes. Loan Against Property (LAP) requires residential, commercial, or industrial property as collateral. The loan amount is typically up to 70% of the property's market value.",
  },
  {
    question: "Can businesses apply for working capital loans?",
    answer: "Yes. Businesses can apply for working capital finance to support operations and expansion. We offer both secured and unsecured working capital options based on your business profile and requirements.",
  },
  {
    question: "How can I apply for a loan through Connect Loans?",
    answer: "You can submit an enquiry form on our website or visit our Apply page to fill out a detailed loan application. Our team will contact you within 24 hours to discuss your requirements and guide you through the process.",
  },
]

export function ContactFaq() {
  const { ref, isVisible } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">
            Find answers to common questions about our loan services and process.
          </p>
        </div>
        
        <div className={`space-y-4 ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              <div 
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
