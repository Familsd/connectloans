"use client"
import Image from "next/image"
import Link from "next/link"
import { Home, MapPin, Building2, Landmark, Receipt, Briefcase, Banknote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "housing",
    icon: Home,
    title: "Housing Loans",
    description: "Make your dream of owning a home a reality with our comprehensive housing loan solutions. We connect you with top banks offering competitive interest rates and flexible repayment options.",
    highlights: ["Up to 90% financing", "30 year tenure", "From 8.5% p.a."],
    idealFor: "Salaried professionals, self-employed individuals, and NRIs looking to purchase residential property.",
    image: "/images/serv (6).jpg"
    // imageComponent: HousingLoanImage,
  },
  {
    id: "plot",
    icon: MapPin,
    title: "Plot Purchase Loans",
    description: "Secure the perfect plot for your future home or investment with our plot purchase financing options. Build your dream home at your own pace.",
    highlights: ["Up to 80% financing", "15 year tenure", "Combo loans available"],
    idealFor: "Individuals planning to build their own home or make land investments.",
    image: "/images/serv (2).jpg"
    // imageComponent: PlotLoanImage,
  },
  {
    id: "industrial",
    icon: Building2,
    title: "Industrial Property Loans",
    description: "Expand your business operations with financing for industrial properties including factories, warehouses, and commercial spaces.",
    highlights: ["High loan amounts", "Flexible tenure", "Multiple lenders"],
    idealFor: "Business owners, manufacturers, and entrepreneurs looking to expand their operational space.",
    image: "/images/serv (1).jpg"
    // imageComponent: IndustrialLoanImage,
  },
  {
    id: "lap",
    icon: Landmark,
    title: "Loan Against Property",
    description: "Unlock the value of your residential or commercial property for any financial need - from business expansion to personal emergencies.",
    highlights: ["Up to 70% value", "20 year tenure", "Any purpose"],
    idealFor: "Property owners needing funds for business, education, medical emergencies, or debt consolidation.",
    image: "/images/serv (7).png"
    // image  Component: LAPImage,
  },
  {
    id: "lrd",
    icon: Receipt,
    title: "Lease Rental Discounting",
    description: "Convert your future rental income from leased commercial properties into immediate funds for business growth.",
    highlights: ["Based on rentals", "High amounts", "Quick processing"],
    idealFor: "Commercial property owners with existing lease agreements from reputed corporate tenants.",
    image: "/images/serv (3).jpg"
    // imageComponent: LRDImage,
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with our range of secured and unsecured business loan options. From startups to established enterprises.",
    highlights: ["Secured & unsecured", "Quick approval", "Minimal docs"],
    idealFor: "SMEs, startups, traders, manufacturers, and service providers needing capital for growth.",
    image: "/images/serv (4).jpg"
    // imageComponent: BusinessLoanImage,
  },
  {
    id: "working-capital",
    icon: Banknote,
    title: "Working Capital Finance",
    description: "Maintain smooth business operations with short-term financing solutions designed to meet your day-to-day operational needs.",
    highlights: ["Cash credit", "Invoice financing", "Revolving credit"],
    idealFor: "Businesses needing funds for inventory, payroll, and day-to-day operations.",
    image: "/images/serv9.png"
    // imageComponent: WorkingCapitalImage,
  },
]

// Vector illustration componentss
function HousingLoanImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="houseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" />
          <stop offset="100%" stopColor="rgb(79, 82, 221)" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="270" rx="150" ry="20" fill="url(#houseGrad)" />
      <rect x="120" y="140" width="160" height="120" rx="4" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <polygon points="200,60 90,140 310,140" fill="url(#roofGrad)" />
      <rect x="175" y="190" width="50" height="70" rx="2" fill="rgb(99, 102, 241)" />
      <circle cx="215" cy="225" r="4" fill="rgb(20, 184, 166)" />
      <rect x="135" y="160" width="35" height="35" rx="2" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <line x1="152.5" y1="160" x2="152.5" y2="195" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <line x1="135" y1="177.5" x2="170" y2="177.5" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <rect x="230" y="160" width="35" height="35" rx="2" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <line x1="247.5" y1="160" x2="247.5" y2="195" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <line x1="230" y1="177.5" x2="265" y2="177.5" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <circle cx="200" cy="100" r="15" fill="rgb(20, 184, 166)" opacity="0.3" />
      <path d="M195 100 L200 95 L205 100 L205 108 L195 108 Z" fill="rgb(20, 184, 166)" />
      <ellipse cx="330" cy="180" rx="30" ry="60" fill="rgb(20, 184, 166)" opacity="0.2" />
      <rect x="327" y="180" width="6" height="90" fill="rgb(20, 184, 166)" opacity="0.4" />
      <ellipse cx="70" cy="200" rx="25" ry="50" fill="rgb(99, 102, 241)" opacity="0.15" />
      <rect x="67" y="200" width="6" height="70" fill="rgb(99, 102, 241)" opacity="0.3" />
    </svg>
  )
}

function PlotLoanImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="plotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="260" rx="160" ry="25" fill="url(#plotGrad)" />
      <path d="M80 180 L200 250 L320 180 L200 110 Z" fill="rgb(20, 184, 166)" opacity="0.2" stroke="rgb(20, 184, 166)" strokeWidth="2" strokeDasharray="10,5" />
      <circle cx="80" cy="180" r="8" fill="rgb(99, 102, 241)" />
      <circle cx="200" cy="250" r="8" fill="rgb(99, 102, 241)" />
      <circle cx="320" cy="180" r="8" fill="rgb(99, 102, 241)" />
      <circle cx="200" cy="110" r="8" fill="rgb(99, 102, 241)" />
      <rect x="100" y="60" width="60" height="80" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <polygon points="130,35 90,60 170,60" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <circle cx="260" cy="80" r="25" fill="rgb(20, 184, 166)" opacity="0.2" />
      <path d="M250 80 L260 60 L270 80 L270 95 L250 95 Z" fill="rgb(20, 184, 166)" opacity="0.5" />
      <line x1="150" y1="200" x2="170" y2="180" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <polygon points="172,176 175,185 166,182" fill="rgb(99, 102, 241)" />
      <text x="155" y="220" fill="rgb(99, 102, 241)" fontSize="12" fontWeight="600">1200 sqft</text>
      <path d="M340 140 L340 100 L330 100 L350 80 L370 100 L360 100 L360 140 Z" fill="rgb(99, 102, 241)" opacity="0.3" />
    </svg>
  )
}

function IndustrialLoanImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="indGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="265" rx="170" ry="20" fill="url(#indGrad)" />
      <rect x="60" y="140" width="180" height="120" rx="2" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <rect x="60" y="120" width="180" height="25" fill="rgb(99, 102, 241)" />
      <rect x="80" y="170" width="40" height="50" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="130" y="170" width="40" height="50" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="180" y="170" width="40" height="50" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="100" y="230" width="80" height="30" fill="rgb(20, 184, 166)" opacity="0.3" />
      <rect x="260" y="100" width="25" height="160" fill="rgb(99, 102, 241)" opacity="0.2" />
      <rect x="255" y="80" width="35" height="25" fill="rgb(99, 102, 241)" opacity="0.4" />
      <ellipse cx="272.5" cy="70" rx="12" ry="15" fill="rgb(156, 163, 175)" opacity="0.4" />
      <ellipse cx="272.5" cy="55" rx="8" ry="10" fill="rgb(156, 163, 175)" opacity="0.3" />
      <rect x="300" y="120" width="25" height="140" fill="rgb(20, 184, 166)" opacity="0.2" />
      <rect x="295" y="100" width="35" height="25" fill="rgb(20, 184, 166)" opacity="0.4" />
      <ellipse cx="312.5" cy="90" rx="12" ry="15" fill="rgb(156, 163, 175)" opacity="0.4" />
      <circle cx="340" cy="200" r="30" fill="rgb(99, 102, 241)" opacity="0.1" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <path d="M325 200 L340 185 L340 200 L355 200 L340 215 L340 200 Z" fill="rgb(99, 102, 241)" opacity="0.4" />
    </svg>
  )
}

function LAPImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="lapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="265" rx="160" ry="20" fill="url(#lapGrad)" />
      <rect x="80" y="130" width="120" height="130" rx="4" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <polygon points="140,70 60,130 220,130" fill="rgb(99, 102, 241)" />
      <rect x="120" y="200" width="40" height="60" fill="rgb(99, 102, 241)" opacity="0.7" />
      <rect x="95" y="150" width="30" height="30" rx="2" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="155" y="150" width="30" height="30" rx="2" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <path d="M230 170 Q280 170 280 120 L320 120 Q320 170 280 170 Z" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="3" strokeDasharray="8,4" />
      <polygon points="320,110 335,120 320,130" fill="rgb(20, 184, 166)" />
      <circle cx="310" cy="80" r="35" fill="rgb(20, 184, 166)" opacity="0.15" />
      <text x="290" y="75" fill="rgb(20, 184, 166)" fontSize="20" fontWeight="700">₹</text>
      <text x="295" y="95" fill="rgb(20, 184, 166)" fontSize="10" fontWeight="600">LOAN</text>
      <circle cx="310" cy="200" r="30" fill="rgb(99, 102, 241)" opacity="0.1" />
      <rect x="295" y="185" width="30" height="20" rx="2" fill="rgb(99, 102, 241)" opacity="0.3" />
      <rect x="300" y="210" width="20" height="3" fill="rgb(99, 102, 241)" opacity="0.4" />
      <rect x="300" y="216" width="15" height="3" fill="rgb(99, 102, 241)" opacity="0.4" />
    </svg>
  )
}

function LRDImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="lrdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="265" rx="160" ry="20" fill="url(#lrdGrad)" />
      <rect x="70" y="100" width="140" height="160" rx="4" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <rect x="70" y="100" width="140" height="30" fill="rgb(99, 102, 241)" />
      <rect x="85" y="145" width="50" height="40" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="145" y="145" width="50" height="40" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="85" y="200" width="50" height="40" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <rect x="145" y="200" width="50" height="40" fill="rgb(224, 231, 255)" stroke="rgb(99, 102, 241)" strokeWidth="1" />
      <path d="M230 180 L330 180" stroke="rgb(20, 184, 166)" strokeWidth="3" strokeDasharray="10,5" />
      <polygon points="330,175 345,180 330,185" fill="rgb(20, 184, 166)" />
      <rect x="250" y="120" width="70" height="45" rx="4" fill="rgb(20, 184, 166)" opacity="0.2" stroke="rgb(20, 184, 166)" strokeWidth="2" />
      <text x="270" y="148" fill="rgb(20, 184, 166)" fontSize="14" fontWeight="600">RENT</text>
      <circle cx="320" cy="100" r="25" fill="rgb(99, 102, 241)" opacity="0.15" />
      <text x="310" y="105" fill="rgb(99, 102, 241)" fontSize="16" fontWeight="700">₹</text>
      <rect x="260" y="210" width="60" height="40" rx="4" fill="rgb(99, 102, 241)" opacity="0.1" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <text x="275" y="235" fill="rgb(99, 102, 241)" fontSize="12" fontWeight="600">LOAN</text>
    </svg>
  )
}

function BusinessLoanImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="bizGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="265" rx="160" ry="20" fill="url(#bizGrad)" />
      <rect x="130" y="80" width="140" height="180" rx="8" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <rect x="145" y="95" width="110" height="15" rx="2" fill="rgb(99, 102, 241)" opacity="0.2" />
      <rect x="145" y="120" width="80" height="10" rx="2" fill="rgb(224, 231, 255)" />
      <rect x="145" y="140" width="95" height="10" rx="2" fill="rgb(224, 231, 255)" />
      <rect x="145" y="160" width="70" height="10" rx="2" fill="rgb(224, 231, 255)" />
      <rect x="145" y="190" width="110" height="50" rx="4" fill="rgb(20, 184, 166)" opacity="0.15" stroke="rgb(20, 184, 166)" strokeWidth="1.5" />
      <path d="M160 215 L180 205 L200 220 L220 195 L240 210" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="80" cy="120" r="35" fill="rgb(99, 102, 241)" opacity="0.1" />
      <rect x="60" y="105" width="40" height="30" rx="4" fill="rgb(99, 102, 241)" opacity="0.3" />
      <text x="70" y="125" fill="rgb(99, 102, 241)" fontSize="14" fontWeight="700">₹</text>
      <circle cx="320" cy="150" r="40" fill="rgb(20, 184, 166)" opacity="0.1" />
      <path d="M300 150 L310 140 L310 147 L340 147 L340 153 L310 153 L310 160 Z" fill="rgb(20, 184, 166)" opacity="0.5" />
      <circle cx="90" cy="220" r="25" fill="rgb(20, 184, 166)" opacity="0.15" />
      <path d="M85 220 L95 220 M90 215 L90 225" stroke="rgb(20, 184, 166)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function WorkingCapitalImage() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="wcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="265" rx="160" ry="20" fill="url(#wcGrad)" />
      <circle cx="200" cy="150" r="80" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="3" />
      <circle cx="200" cy="150" r="65" fill="rgb(99, 102, 241)" opacity="0.05" />
      <path d="M200 70 A80 80 0 0 1 280 150" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="8" strokeLinecap="round" />
      <path d="M280 150 A80 80 0 0 1 200 230" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="200" cy="150" r="40" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="2" />
      <text x="180" y="158" fill="rgb(99, 102, 241)" fontSize="24" fontWeight="700">₹</text>
      <path d="M70 180 L90 160 L110 175 L130 140" fill="none" stroke="rgb(20, 184, 166)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="130,135 140,145 125,145" fill="rgb(20, 184, 166)" />
      <rect x="60" y="190" width="90" height="50" rx="4" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <rect x="70" y="200" width="40" height="6" rx="1" fill="rgb(224, 231, 255)" />
      <rect x="70" y="212" width="60" height="6" rx="1" fill="rgb(224, 231, 255)" />
      <rect x="70" y="224" width="30" height="6" rx="1" fill="rgb(20, 184, 166)" opacity="0.4" />
      <rect x="280" y="80" width="80" height="100" rx="4" fill="white" stroke="rgb(99, 102, 241)" strokeWidth="1.5" />
      <rect x="290" y="95" width="20" height="60" fill="rgb(224, 231, 255)" />
      <rect x="290" y="115" width="20" height="40" fill="rgb(20, 184, 166)" opacity="0.4" />
      <rect x="320" y="95" width="20" height="60" fill="rgb(224, 231, 255)" />
      <rect x="320" y="105" width="20" height="50" fill="rgb(99, 102, 241)" opacity="0.3" />
      <rect x="290" y="160" width="50" height="8" rx="1" fill="rgb(224, 231, 255)" />
    </svg>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()
  const isEven = index % 2 === 0
  // const ImageComponent = service.imageComponent

  return (
    <div
      id={service.id}
      ref={ref}
      className={`py-16 scroll-mt-24 ${index !== 0 ? "border-border" : ""}`}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Mobile: Title first */}
        <div className={`lg:hidden w-full ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
          </div>
        </div>

        {/* Image - Second on mobile, alternates on desktop */}
        <div className={`w-full ${!isEven ? "lg:order-2" : ""} ${isVisible ? (isEven ? "animate-slide-in-right" : "animate-slide-in-left") : "opacity-0"}`}>
          <div className="relative group">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" /> */}
            {/* <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-border/50 overflow-hidden group-hover:border-primary/30 transition-colors duration-300"> */}
            {/* <div className="aspect-[7/4] w-full">
                <ImageComponent />
                
              </div> */}
            <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-500" />

            <div className="relative backdrop-blur-sm  p-6 lg:p-8 overflow-hidden group-hover:border-primary/30 transition-colors duration-300">

              <div className=" w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-2xl "
                  loading="lazy"
                />
              </div>
              {/* Floating highlights */}
              {/* <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex gap-1.5 sm:gap-2 flex-wrap">
                {service.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 sm:px-3 sm:py-1.5 bg-card/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-foreground border border-border/50 shadow-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Content - Third on mobile, alternates on desktop */}
        <div className={`w-full ${!isEven ? "lg:order-1" : ""} ${isVisible ? (isEven ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"}`}>
          {/* Desktop title */}
          <div className="hidden lg:flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <service.icon className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {service.description}
          </p>

          <div className="mt-6 p-5 bg-gradient-to-r from-secondary to-secondary/50 rounded-2xl border border-border/50">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Ideal For</p>
            <p className="mt-2 text-foreground/80">{service.idealFor}</p>
          </div>

          <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto">
            <Link href="/apply" className="flex items-center justify-center">
              <span className="truncate">Apply for {service.title}</span>
              <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ServicesList() {
  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
