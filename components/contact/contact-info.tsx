"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactDetails = [
  {
    icon: Phone,
    title: "Loan Consultation Helpline",
    details: ["+91 98765 43210", "+91 22 1234 5678"],
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@connectloans.in", "info@connectloans.in"],
    href: "mailto:support@connectloans.in",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: ["123 Financial District", "Business Tower, Mumbai - 400001"],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Work Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
    href: null,
  },
]

export function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Get In Touch</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Contact Connect Loans for loan consultation, eligibility guidance, and personalized financial assistance. 
            Our experts are ready to help you.
          </p>
        </div>
        
        <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-rows-2 gap-6">
          {contactDetails.map((contact, index) => (
            <div
              key={contact.title}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-8  rounded-xl bg-primary/10 flex items-center justify-center">
                <contact.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{contact.title}</h3>
              <div className="mt-2 space-y-1">
                {contact.details.map((detail) => (
                  contact.href ? (
                    <Link
                      key={detail}
                      href={contact.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail}
                    </Link>
                  ) : (
                    <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}
