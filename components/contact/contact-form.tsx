"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const enquiryTopics = [
  "Housing Loan Enquiry",
  "Loan Against Property",
  "Business Loan Enquiry",
  "Working Capital Finance",
  "Lease Rental Discounting",
  "General Consultation",
  "Other",
]

interface FormData {
  fullName: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.subject) newErrors.subject = "Please select an enquiry topic"
    if (!formData.message.trim()) newErrors.message = "Please describe your loan requirements"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-background" ref={ref}>
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 border border-border text-center">
            <img className="mx-auto flex items-center justify-center" src="/images/busrs.jpg" width="200px" alt="" />
            {/* <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div> */}
            <h2 className="mt-6 text-2xl font-bold text-foreground">Message Sent!</h2>
            <p className="mt-4 text-muted-foreground">
              Thank you for contacting Connect Loans. Our team will review your enquiry 
              and get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  fullName: "",
                  email: "",
                  subject: "",
                  message: "",
                })
              }}
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-background" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className={`text-center mb-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Send Us a Message</h2>
          <p className="mt-3 text-muted-foreground">
            Have a question about our loan services? Fill out the form below and our team will get back to you.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className={`bg-card rounded-2xl p-8 border border-border ${isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={errors.fullName ? "border-destructive" : ""}
              />
              {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
            </div>
            
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            
            {/* Subject / Loan Type */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Loan Type / Enquiry Topic <span className="text-destructive">*</span>
              </label>
              <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                <SelectTrigger className={errors.subject ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select enquiry topic" />
                </SelectTrigger>
                <SelectContent>
                  {enquiryTopics.map((topic) => (
                    <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>
            
            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Loan Requirement Details <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                placeholder="Please describe your loan requirements, questions, or any specific details you'd like to discuss..."
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-center text-muted-foreground">
            By submitting this form, you agree that Connect Loans may contact you regarding 
            loan assistance and financial consultation services.
          </p>
        </form>
      </div>
    </section>
  )
}
