"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const contactDetails = [
  {
    icon: Phone,
    title: "Consultation Helpline",
    details: ["+91 99665 20005"],
    href: "tel:+919966520005",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@connectloans.in"],
    href: "mailto:contact@connectloans.in",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: ["8-3-231/W/35/G1, SHANTHI KUTEER APTS, Yousufguda, Khairatabad, Hyderabad - 500045, Telangana, India"],
    href: "https://maps.app.goo.gl/ABHTdQETqJsy29yD9",
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
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
              className={`bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
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


      </div> */}
    </section>
  )
}
