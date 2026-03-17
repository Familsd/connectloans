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
import Turnstile from "react-turnstile"

import { CheckCircle, Loader2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const loanTypes = [
  "Housing Loan",
  "Plot Purchase Loan",
  "Industrial Property Loan",
  "Loan Against Property",
  "Lease Rental Discounting (LRD)",
  "Business Loan",
  "Working Capital Finance"
]

const employmentTypes = [
  "Salaried",
  "Self-Employed Professional",
  "Self-Employed Business",
  "Others"
]

const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Plot/Land",
  "Not Applicable"
]

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  city: string
  loanType: string
  loanAmount: string
  employmentType: string
  monthlyIncome: string
  propertyType: string
  message: string
}

export function LoanApplicationForm() {

  const { ref } = useScrollAnimation()
  const [captchaToken, setCaptchaToken] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    loanType: "",
    loanAmount: "",
    employmentType: "",
    monthlyIncome: "",
    propertyType: "",
    message: ""
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {

    const newErrors: Partial<FormData> = {}

    if (!/^[A-Za-z\s]+$/.test(formData.firstName))
      newErrors.firstName = "Only letters allowed"

    if (!/^[A-Za-z\s]+$/.test(formData.lastName))
      newErrors.lastName = "Only letters allowed"

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10 digit phone"

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email"

    if (!/^[A-Za-z\s]+$/.test(formData.city))
      newErrors.city = "City must contain letters"

    if (!formData.loanType)
      newErrors.loanType = "Select loan type"

    if (!/^[0-9]+$/.test(formData.loanAmount))
      newErrors.loanAmount = "Numbers only"

    if (!formData.employmentType)
      newErrors.employmentType = "Select employment"

    if (!/^[0-9]+$/.test(formData.monthlyIncome))
      newErrors.monthlyIncome = "Numbers only"

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: "" }))
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {

    e.preventDefault()
    console.log("testing");
    if (!validateForm()) return


    console.log(formData, "form")
    setIsSubmitting(true)

    try {
     
      const res = await fetch("/api/loan-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken
        }),
      })
      const data = await res.json()
      console.log(data, "Resp-loan");
      if (data.success) {
        setIsSubmitted(true)
        // setIsSubmitting(false)
      } else {
        // setIsSubmitting(false)
        alert("Submission failed. Please try again.")
      }


    } catch (error) {
      console.error(error)
    }
    setIsSubmitting(false)
  }

  /* ---------------- SUCCESS SCREEN ---------------- */

  if (isSubmitted) {
    return (

      <section className="py-24 bg-secondary">

        <div className="max-w-xl mx-auto text-center bg-card border rounded-2xl p-12">
          {/* <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div> */}
          <img className="mx-auto flex items-center justify-center" src="/images/busrs.jpg" width="400px" alt="" />
          {/* <img src="/images/thank-you-img.jpg" className="mx-auto mt-4" alt="" /> */}

          <h2 className="text-2xl font-bold mt-6">
            Application Submitted
          </h2>

          <p className="text-muted-foreground mt-3">
            Our loan advisor will contact you within 24 hours
          </p>

        </div>

      </section>

    )
  }

  /* ---------------- FORM ---------------- */

  return (

    <section ref={ref} className="py-24 bg-background">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Loan Application
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            Apply for the best loan offers from top banks
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-secondary/25 border shadow-sm rounded-2xl p-10"
        >

          <div className="grid md:grid-cols-3 gap-8">

            {/* FIRST NAME */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                First Name <span className="text-destructive">*</span>
              </label>

              <Input
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                value={formData.firstName}
                placeholder="Your First Name"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "")
                  handleChange("firstName", value)
                }}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.firstName}
              </p>

            </div>

            {/* LAST NAME */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Last Name <span className="text-destructive">*</span>
              </label>

              <Input
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "")
                  handleChange("lastName", value)
                }}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.lastName}
              </p>

            </div>

            {/* PHONE */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Phone <span className="text-destructive">*</span>
              </label>

              <Input
                maxLength={10}
                inputMode="numeric"
                placeholder="Your phone Number"
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  handleChange("phone", value)
                }}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.phone}
              </p>

            </div>

            {/* EMAIL */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Email <span className="text-destructive">*</span>
              </label>

              <Input
                type="email"
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.email}
              </p>

            </div>

            {/* CITY */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                City <span className="text-destructive">*</span>
              </label>

              <Input
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="Your City"
                value={formData.city}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "")
                  handleChange("city", value)
                }}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.city}
              </p>

            </div>
            {/* LOAN AMOUNT */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Loan Amount (Lakhs) <span className="text-destructive">*</span>
              </label>

              <Input
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="Approximate Loan Amount"
                value={formData.loanAmount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  handleChange("loanAmount", value)
                }}
              />

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.loanAmount}
              </p>

            </div>

            {/* LOAN TYPE */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Loan Type <span className="text-destructive">*</span>
              </label>

              <Select
                value={formData.loanType}
                onValueChange={(v) => handleChange("loanType", v)}
              >

                <SelectTrigger className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2" style={{ width: "100%" }}>
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>

                <SelectContent position="popper">

                  {loanTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}

                </SelectContent>

              </Select>

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.loanType}
              </p>

            </div>



            {/* EMPLOYMENT */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Employment <span className="text-destructive">*</span>
              </label>

              <Select
                value={formData.employmentType}
                onValueChange={(v) => handleChange("employmentType", v)}
              >

                <SelectTrigger className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2" style={{ width: "100%" }}>
                  <SelectValue placeholder="Select employment" />
                </SelectTrigger>

                <SelectContent position="popper">

                  {employmentTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}

                </SelectContent>

              </Select>

              <p className="text-xs text-destructive min-h-[16px]">
                {errors.employmentType}
              </p>

            </div>

            {/* PROPERTY TYPE */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Property Type
              </label>

              <Select
                value={formData.propertyType}
                onValueChange={(v) => handleChange("propertyType", v)}
              >

                <SelectTrigger className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2" style={{ width: "100%" }}>
                  <SelectValue placeholder="Select property" />
                </SelectTrigger>

                <SelectContent position="popper">

                  {propertyTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}

                </SelectContent>

              </Select>

            </div>

            {/* MONTHLY INCOME */}

            <div className="space-y-2">

              <label className="font-medium text-sm">
                Monthly Income <span className="text-destructive">*</span>
              </label>

              <Input
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="Your Monthly Income"
                value={formData.monthlyIncome}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  handleChange("monthlyIncome", value)
                }}
              />


              <p className="text-xs text-destructive min-h-[16px]">
                {errors.monthlyIncome}
              </p>

            </div>



            {/* MESSAGE */}

            <div className="space-y-2 md:col-span-2">

              <label className="font-medium text-sm">
                Additional Message
              </label>

              <Textarea
                rows={4}
                className="text-base border-primary/20 focus:ring-primary/50 focus:ring-2"
                placeholder="write if u have any requirments"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

            </div>

          </div>
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onVerify={(token) => setCaptchaToken(token)}
            className="mt-4 w-full flex justify-center"
          />

          <Button
            type="submit"
            className="flex items-center justify-center w-full mt-10 h-14 text-lg font-semibold"
            disabled={isSubmitting}
          >

            {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}

            {isSubmitting ? "Submitting" : "Submit Loan Application"}

          </Button>

        </form>

      </div>

    </section>

  )
}