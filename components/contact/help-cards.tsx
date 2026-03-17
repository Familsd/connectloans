"use client"

import Link from "next/link"
import { BookOpen, Users, HeadphonesIcon, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const helpItems = [
  {
    icon: BookOpen,
    title: "Loan Guides",
    description: "Learn about housing loans, loan against property, and business finance options. Get informed before you apply.",
    link: "/services",
    linkText: "Explore Guides",
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Speak with our financial experts for guidance on choosing the right loan solution for your needs.",
    link: "/apply",
    linkText: "Book Consultation",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Our team is available to assist you with loan enquiries and application support during business hours.",
    link: "tel:+919966520005",
    linkText: "Call Now",
  },
]

export function HelpCards() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="pb-16 bg-background" ref={ref}>
      {/* Google Map Embed */}
      <div className={`rounded-2xl overflow-hidden border border-border ${isVisible ? "animate-fade-in animation-delay-500" : "opacity-0"}`}>
      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.85798477651457!2d78.42349764177239!3d17.43112105583437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9111849138a9%3A0x57eb8005d7e9c934!2sShanti%20Kuteer!5e1!3m2!1sen!2sin!4v1773727146545!5m2!1sen!2sin"
          width="100%"
          height="300"
          className="sm:h-[400px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Connect Loans Office Location" />

      </div>
      <div className="mx-auto max-w-7xl pt-12 mt-12 px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Need More Help?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our resources or connect with our experts for personalized loan assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {helpItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              className={`group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">
                {item.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                {item.linkText}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
