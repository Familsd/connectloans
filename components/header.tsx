"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
]


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
  }, [mobileMenuOpen])
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 lg:px-8">
          <img src="/images/logo/logo (4).png" width={"54px"} alt="" />
        <div className="flex lg:flex-1 pl-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-3xl font-bold text-foreground">
              Connect<span className="text-primary">Loans</span>
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${pathname === link.href
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-foreground hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {/* <Link href="tel:+919966520005" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            +91 99665 20005
          </Link> */}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="fixed top-0 right-0 z-50 h-full w-[320px] bg-background shadow-2xl px-6 py-6 shadow-xl sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-foreground">
                Connect<span className="text-primary">Loans</span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-7 flow-root">
            <div className="-my-5 divide-y divide-border">
              <div className="space-y-3 py-6 fixed right-0 bg-background shadow-2xl w-[320px] px-6 py-6 shadow-xl sm:ring-1 sm:ring-border">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-all
${pathname === link.href
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary/60 text-foreground hover:bg-secondary"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* <div className="py-6">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                  <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
