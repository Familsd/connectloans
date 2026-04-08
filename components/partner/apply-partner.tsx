"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

import { Loader2 } from "lucide-react"

export function PartnerApplicationForm() {

    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [sendingOtp, setSendingOtp] = useState(false)
    const [verifyingOtp, setVerifyingOtp] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        verified: false,
        type: "",
        details: {} as any
    })

    const [otp, setOtp] = useState("")
    const [otpSent, setOtpSent] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [cooldown, setCooldown] = useState(0)
    const [attempts, setAttempts] = useState(0)

    /* ---------------- COMMON HANDLER ---------------- */

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        setError("")
    }

    const handleDetailChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            details: { ...prev.details, [field]: value }
        }))
    }

    /* ---------------- STEP 1 ---------------- */
    const validateStep1 = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[6-9]\d{9}$/

        if (!emailRegex.test(formData.email)) {
            return "Enter a valid email address"
        }

        if (!phoneRegex.test(formData.phone)) {
            return "Enter a valid 10-digit mobile number"
        }

        return null
    }
    const sendOtp = async () => {
        const validationError = validateStep1()

        if (validationError) {
            return setError(validationError)
        }


        setSendingOtp(true)

        try {
            const res = await fetch("/api/send-otp", {
                method: "POST",
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            console.log("otp", data, res);

            if (!res.ok) throw new Error(data.error)

            setOtpSent(true)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setSendingOtp(false)
        }
    }


    const verifyOtp = async () => {
        if (!otp) return setError("Enter OTP")

        setVerifyingOtp(true)

        try {
            const res = await fetch("/api/verify-otp", {
                method: "POST",
                body: JSON.stringify({ email: formData.email, otp }),
            })

            const data = await res.json()

            console.log(data, res, "Verifyotp");

            if (!data.valid) throw new Error("Invalid or expired OTP")

            setFormData(prev => ({ ...prev, verified: true }))
            setStep(2) // auto move
        } catch (err: any) {
            setError(err.message)
        } finally {
            setVerifyingOtp(false)
        }
    }

    /* ---------------- STEP 2 ---------------- */

    const [agreed, setAgreed] = useState(false)

    const handleSubmit = async () => {
        if (!formData.verified) {
            return setError("Complete verification first")
        }

        if (!agreed) {
            return setError("Please accept terms & conditions")
        }

        setSubmitting(true)

        try {
            const res = await fetch("/api/partner-submit", {
                method: "POST",
                body: JSON.stringify(formData),
            })

            const data = await res.json()


            if (!data.success) throw new Error("Submission failed")

            setSuccess(true)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section className="py-20 bg-card">
            <div className="max-w-5xl mx-auto px-6">

                {/* MAIN CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-secondary/20 border rounded-2xl overflow-hidden shadow-lg min-h-[520px]">
                    {/* LEFT IMAGE */}
                    <div className="hidden py-8 md:block">
                        <img
                            src="/images/ser (6).jpg"
                            alt="Partner"

                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">

                        {/* HEADER */}
                        <div>
                            <h2 className="text-2xl font-bold">Partner Application</h2>
                            <p className="text-muted-foreground mt-1 text-sm">
                                Join our partner network
                            </p>

                            {/* STEP INDICATOR */}
                            <div className="mt-6">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className={step >= 1 ? "text-primary font-medium" : "opacity-50"}>Verify</span>
                                    <span className={step === 2 ? "text-primary font-medium" : "opacity-50"}>Details</span>
                                </div>

                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary transition-all duration-300"
                                        style={{ width: step === 1 ? "50%" : "100%" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FORM BODY (FIXED HEIGHT AREA) */}
                        {success ? (
                            <div className="flex flex-col items-center justify-center text-center h-full">
                                <h2 className="text-2xl font-bold text-primary">Thank You!</h2>
                                <p className="mt-3 text-muted-foreground max-w-sm">
                                    Your application has been submitted successfully.
                                    Our team will review your details and get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="mt-6 flex-1 flex flex-col justify-center">

                                    {step === 1 && (
                                        <div className="grid gap-5">
                                            <Input
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                            />

                                            <Input
                                                placeholder="Enter phone"
                                                maxLength={10}
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    handleChange("phone", e.target.value.replace(/\D/g, ""))
                                                }
                                            />

                                            {!otpSent ? (
                                                <Button onClick={sendOtp} disabled={sendingOtp}>
                                                    {sendingOtp ? <Loader2 className="animate-spin" /> : "Send OTP"}
                                                </Button>
                                            ) : (
                                                <>
                                                    <Input
                                                        placeholder="Enter OTP Recieved to your email"
                                                        onChange={(e) => setOtp(e.target.value)}
                                                    />

                                                    <Button onClick={verifyOtp} disabled={verifyingOtp}>
                                                        {verifyingOtp ? <Loader2 className="animate-spin" /> : "Verify OTP"}
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="grid gap-5">

                                            <div className="flex gap-3">
                                                <Button
                                                    variant={formData.type === "individual" ? "default" : "outline"}
                                                    onClick={() =>
                                                        setFormData({ ...formData, type: "individual", details: {} })
                                                    }
                                                >
                                                    Individual
                                                </Button>

                                                <Button
                                                    variant={formData.type === "firm" ? "default" : "outline"}
                                                    onClick={() =>
                                                        setFormData({ ...formData, type: "firm", details: {} })
                                                    }
                                                >
                                                    Firm
                                                </Button>
                                            </div>

                                            {formData.type === "individual" && (
                                                <>
                                                    <Input placeholder="Name as per PAN"
                                                        onChange={(e) => handleDetailChange("name", e.target.value)} />

                                                    <Input placeholder="PAN"
                                                        onChange={(e) => handleDetailChange("pan", e.target.value)} />

                                                    <Input placeholder="Address"
                                                        onChange={(e) => handleDetailChange("address", e.target.value)} />

                                                    <Input placeholder="Pincode"
                                                        onChange={(e) => handleDetailChange("pincode", e.target.value)} />
                                                </>
                                            )}

                                            {formData.type === "firm" && (
                                                <>
                                                    <Select onValueChange={(v) => handleDetailChange("firmType", v)}>
                                                        <SelectTrigger className="w-[250px]">
                                                            <SelectValue placeholder="Select firm type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="pvt_ltd">Pvt Ltd</SelectItem>
                                                            <SelectItem value="llp">LLP</SelectItem>
                                                            <SelectItem value="proprietorship">Proprietorship</SelectItem>
                                                        </SelectContent>
                                                    </Select>

                                                    <Input placeholder="Company Name"
                                                        onChange={(e) => handleDetailChange("companyName", e.target.value)} />

                                                    <Input placeholder="Company PAN"
                                                        onChange={(e) => handleDetailChange("pan", e.target.value)} />

                                                    <Input placeholder="Address"
                                                        onChange={(e) => handleDetailChange("address", e.target.value)} />

                                                    <Input placeholder="Pincode"
                                                        onChange={(e) => handleDetailChange("pincode", e.target.value)} />
                                                </>
                                            )}

                                        </div>
                                    )}

                                </div>
                                {step === 2 && (
                                    <div className="flex items-center gap-2 mt-4">
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                        />
                                        <span className="text-sm">
                                            I agree to the Terms & Conditions
                                        </span>
                                    </div>
                                )}
                                {/* FOOTER BUTTONS */}
                                <div className="mt-6 flex justify-between items-center">

                                    {/* BACK only in step 2 */}
                                    {step === 2 ? (
                                        <Button variant="outline" onClick={() => setStep(1)}>
                                            Back
                                        </Button>
                                    ) : (
                                        <div /> // keeps spacing stable
                                    )}

                                    {/* PRIMARY ACTION BUTTON */}
                                    {/* {step === 1 && !otpSent && (
                                <Button onClick={sendOtp} disabled={sendingOtp}>
                                    {sendingOtp ? <Loader2 className="animate-spin" /> : "Send OTP"}
                                </Button>
                            )} */}

                                    {/* {step === 1 && otpSent && (
                                <Button onClick={verifyOtp} disabled={verifyingOtp}>
                                    {verifyingOtp ? <Loader2 className="animate-spin" /> : "Verify OTP"}
                                </Button>
                            )} */}

                                    {step === 2 && (
                                        <Button onClick={handleSubmit} disabled={submitting}>
                                            {submitting ? <Loader2 className="animate-spin" /> : "Submit Application"}
                                        </Button>
                                    )}

                                </div>

                            </>
                        )}
                        {/* ERROR */}
                        {error && (
                            <p className="text-destructive text-sm mt-3">{error}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}