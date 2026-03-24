"use client"

import { Zap, Shield, Users, Eye, Layers, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
    {
        icon: Zap,
        title: "Loan Assessment",
        description: "We analyze your financial profile and requirements to recommend the most suitable loan products.",
    },
    {
        icon: Users,
        title: "Lender Network",
        description: "We leverage our extensive network of 50+ banking partners to secure competitive rates for you.",
    },
    {
        icon: Layers,
        title: "Documentation Support",
        description: "We guide you through the entire documentation process, ensuring everything is in order.",
    },
    {
        icon: Shield,
        title: "Application Processing",
        description: "We handle the loan application process from start to finish, saving you time and effort.",
    },
    // {
    //     icon: Layers,
    //     title: "Multiple Loan Options",
    //     description: "Compare offers from multiple lenders and choose what works best for you.",
    // },
]
export function AboutWhat() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section className="py-24 bg-[#ffffff]" ref={ref}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-300" : "opacity-0"}`}>
                        {/* <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground mt-2">Years of Experience</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground mt-1">Crores Disbursed</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">10K+</p>
                    <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">25+</p>
                    <p className="text-sm text-muted-foreground mt-1">Bank Partners</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground mt-1">Approval Rate</p>
                  </div>
                </div>
              </div>
            </div> */}
                        <img
                            src="/images/busofs.jpg"
                            alt="Why Choose Us"
                            className="w-full"
                        />
                    </div>
                    <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
                        {/* <p className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</p> */}
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            What We Do
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            As a loan consultancy firm, we specialize in:</p>

                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed mt-8">With over 15 years of experience in the financial services industry, we have built strong relationships with more than 180 banks and NBFCs, enabling us to offer our clients competitive interest rates and flexible loan terms.</p>

                        <div className="mt-10 space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`flex gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                                    style={{ animationDelay: `${(index + 1) * 150}ms` }}
                                >
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <feature.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                                        <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>




            </div>
        </section>
        // <section className="py-24 bg-background" ref={ref}>
        //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
        //     <div className="grid lg:grid-cols-2 gap-12">
        //       <div className={`bg-card rounded-2xl p-8 border border-border ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
        //         <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
        //           <Target className="h-7 w-7 text-accent" />
        //         </div>
        //         <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
        //         <p className="mt-4 text-muted-foreground leading-relaxed">
        //           To democratize access to financial services by connecting individuals and businesses with the right 
        //           lending partners. We strive to make the loan process transparent, efficient, and stress-free for 
        //           everyone, regardless of their financial background.
        //         </p>
        //         <p className="mt-4 text-muted-foreground leading-relaxed">
        //           We are committed to providing unbiased guidance, helping our clients understand their options, 
        //           and ensuring they secure the best possible terms for their unique financial situations.
        //         </p>
        //       </div>

        //       <div className={`bg-card rounded-2xl p-8 border border-border ${isVisible ? "animate-slide-in-right animation-delay-200" : "opacity-0"}`}>
        //         <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
        //           <Eye className="h-7 w-7 text-accent" />
        //         </div>
        //         <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
        //         <p className="mt-4 text-muted-foreground leading-relaxed">
        //           To become India&apos;s most trusted loan consultancy, known for our integrity, expertise, and 
        //           client-first approach. We envision a future where every person can easily access the financing 
        //           they need to achieve their dreams.
        //         </p>
        //         <p className="mt-4 text-muted-foreground leading-relaxed">
        //           We aim to build lasting relationships with our clients, becoming their go-to partner for all 
        //           financial needs throughout their life journey.
        //         </p>
        //       </div>
        //     </div>

        //     <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
        //       <div className="text-center">
        //         <p className="text-4xl font-bold text-accent">15+</p>
        //         <p className="mt-2 text-muted-foreground">Years of Experience</p>
        //       </div>
        //       <div className="text-center">
        //         <p className="text-4xl font-bold text-accent">10,000+</p>
        //         <p className="mt-2 text-muted-foreground">Happy Clients</p>
        //       </div>
        //       <div className="text-center">
        //         <p className="text-4xl font-bold text-accent">500+</p>
        //         <p className="mt-2 text-muted-foreground">Crores Disbursed</p>
        //       </div>
        //       <div className="text-center">
        //         <p className="text-4xl font-bold text-accent">25+</p>
        //         <p className="mt-2 text-muted-foreground">Banking Partners</p>
        //       </div>
        //     </div>
        //   </div>
        // </section>
    )
}
