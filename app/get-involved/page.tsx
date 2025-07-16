"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Handshake, Users, MessageSquare, Edit, BookOpen, Globe } from "lucide-react"
import Link from "next/link"

const donationOptions = [
  {
    amount: "₹500",
    description: "Provides educational materials for 5 kidney patients",
    popular: false,
  },
  {
    amount: "₹1,000",
    description: "Sponsors a support group meeting for kidney warriors",
    popular: true,
  },
  {
    amount: "₹2,500",
    description: "Helps develop kidney-friendly recipe resources",
    popular: false,
  },
  {
    amount: "₹5,000",
    description: "Supports the mapping of dialysis centers in a new region",
    popular: false,
  },
]

const volunteerRoles = [
  {
    title: "Community Moderator",
    description:
      "Help facilitate discussions, answer questions, and ensure a supportive environment in our online forums.",
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    commitment: "5-7 hours/week",
  },
  {
    title: "Content Creator",
    description: "Create articles, infographics, or videos about kidney health, treatment options, and lifestyle tips.",
    icon: <Edit className="h-6 w-6 text-white" />,
    commitment: "3-5 hours/week",
  },
  {
    title: "Resource Researcher",
    description: "Help identify and verify kidney care resources across different regions in India.",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    commitment: "2-4 hours/week",
  },
  {
    title: "Regional Ambassador",
    description: "Represent Kidney Community in your local area, connecting with healthcare providers and patients.",
    icon: <Globe className="h-6 w-6 text-white" />,
    commitment: "4-6 hours/week",
  },
]

const partnershipTypes = [
  {
    title: "Healthcare Providers",
    description:
      "Partner with us to provide verified information, special services for our members, or educational content.",
    benefits: ["Increased visibility", "Community trust", "Patient education resources"],
  },
  {
    title: "Kidney Care Brands",
    description: "Showcase your kidney-friendly products or services to our community in an ethical, transparent way.",
    benefits: ["Targeted audience", "Authentic engagement", "Social impact"],
  },
  {
    title: "NGOs & Foundations",
    description:
      "Collaborate on initiatives, share resources, and amplify each other's impact in the kidney care space.",
    benefits: ["Extended reach", "Shared resources", "Collective impact"],
  },
]

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#22AA86]/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22AA86]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">GET INVOLVED</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Be Part of the <span className="text-[#22AA86]">Kidney Care Revolution</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Join us in our mission to support kidney patients and caregivers across India through donations,
                partnerships, or volunteering.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8"
                  onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Donate Now
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl px-8"
                  onClick={() => document.getElementById("volunteer")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Volunteer
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Us Section */}
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-2xl"></div>

                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/support-community.png" alt="Supporting the kidney community" className="w-full h-auto" />
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="h-1 w-10 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">WHY SUPPORT US</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Support Makes a Difference</h2>

                <div className="space-y-6 text-muted-foreground">
                  <p>
                    In India, over 2.5 lakh people develop kidney failure annually, yet only 30% receive the treatment
                    they need. Beyond medical care, patients and caregivers face immense emotional, financial, and
                    practical challenges.
                  </p>

                  <p>By supporting Kidney Community, you're helping to:</p>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      </div>
                      <span>Connect isolated patients with a supportive community</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      </div>
                      <span>Provide India-specific resources that address unique cultural and healthcare contexts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      </div>
                      <span>Improve access to information about treatment options and care centers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      </div>
                      <span>Empower caregivers with knowledge and support networks</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl"
                    onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Support Our Mission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">DONATE</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Our Mission</h2>

              <p className="text-lg text-muted-foreground">
                Your contribution helps us develop resources, maintain our platform, and expand our reach to more kidney
                warriors across India.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {donationOptions.map((option, index) => (
                  <Card
                    key={index}
                    className={`relative overflow-hidden ${option.popular ? "border-[#22AA86]" : "border-muted"}`}
                  >
                    {option.popular && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-[#22AA86] text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                          Popular
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl font-bold">{option.amount}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{option.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={
                          option.popular
                            ? "bg-[#22AA86] hover:bg-[#1c8f70] w-full"
                            : "bg-muted hover:bg-muted/80 text-foreground w-full"
                        }
                        variant={option.popular ? "default" : "outline"}
                      >
                        Donate {option.amount}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Or enter a custom amount</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="outline"
                    className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl px-8"
                  >
                    Custom Donation
                  </Button>

                  <Button
                    variant="outline"
                    className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl px-8"
                  >
                    Monthly Giving
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-6">
                  All donations are eligible for tax benefits under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">VOLUNTEER</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Share Your Time & Skills</h2>

              <p className="text-lg text-muted-foreground">
                Join our team of dedicated volunteers who help make our community thrive. We have opportunities for
                various skills and time commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {volunteerRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-background dark:bg-gray-900 rounded-3xl p-6 shadow-lg border border-muted hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#22AA86] to-[#1a8a6c] flex items-center justify-center shadow-lg mb-6 border border-white/10 backdrop-blur-sm p-3 relative overflow-hidden">
                    {role.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{role.title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{role.description}</p>

                  <div className="mt-auto">
                    <div className="text-xs font-medium text-[#22AA86] mb-4">Time Commitment: {role.commitment}</div>

                    <Button
                      variant="outline"
                      className="w-full border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Don't see a role that matches your skills? We're always open to new ideas!
              </p>

              <Link href="/contact">
                <Button className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">PARTNERSHIPS</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>

              <p className="text-lg text-muted-foreground">
                Collaborate with Kidney Community to create meaningful impact in the lives of kidney patients and
                caregivers across India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-background to-muted/30 dark:from-muted/10 dark:to-background border border-muted shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full"
                >
                  <CardHeader>
                    <div className="h-14 w-14 rounded-2xl bg-[#22AA86]/20 flex items-center justify-center mb-4">
                      <Handshake className="h-6 w-6 text-[#22AA86]" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium mb-2">Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="mt-1 h-4 w-4 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#22AA86]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl"
                    >
                      Explore Partnership
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Interested in discussing a custom partnership opportunity?</p>

              <Link href="/contact">
                <Button className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8">
                  Contact Our Partnership Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-[#22AA86]">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Hear From Our Supporters</h3>

                <blockquote className="text-white/90 text-lg italic mb-8">
                  "Volunteering with Kidney Community has been incredibly rewarding. As someone who lost a parent to
                  kidney disease, I know firsthand how important support and information are. The work this platform
                  does is truly changing lives across India."
                </blockquote>

                <div className="flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full border-2 border-white/30 overflow-hidden mr-4">
                    <img src="/volunteer-testimonial.png" alt="Volunteer" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">Priya Desai</p>
                    <p className="text-white/70 text-sm">Volunteer since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-background to-muted/30 dark:from-muted/10 dark:to-background border border-muted rounded-3xl p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#22AA86]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22AA86]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>

                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether through donation, volunteering, or partnership, your support helps us create a stronger
                  community for kidney patients across India.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8"
                    onClick={() => document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Donate Now
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl px-8"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
