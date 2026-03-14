"use client"

import { ContactInfo } from "./contact-info"
import { ContactForm } from "./contact-form"

export function ContactSection() {

  return (
    <section className="py-20 bg-background">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="lg:pr-10">
            <ContactInfo />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:border-l lg:pl-10 border-border">
            <ContactForm />
          </div>

        </div>

      </div>

    </section>
  )
}