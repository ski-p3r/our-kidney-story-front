"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Mail, MapPin, MessageSquare, Phone, Send, PhoneIcon as WhatsApp } from "lucide-react"

const faqs = [
  {
    question: "What is Kidney Community?",
    answer:
      "Kidney Community is India's first dedicated platform for kidney patients and caregivers. We provide resources, support, and connection opportunities specifically designed for the Indian healthcare context.",
  },
  {
    question: "Is membership free?",
    answer:
      "Yes, joining our community is completely free. We believe support should be accessible to everyone facing kidney health challenges.",
  },
  {
    question: "How can I find dialysis centers near me?",
    answer:
      "Our platform includes a Dialysis Center Locator tool that helps you find centers across India. You can filter by location, services offered, and read reviews from other community members.",
  },
  {
    question: "Do you provide medical advice?",
    answer:
      "While we share educational resources reviewed by medical professionals, we do not provide personalized medical advice. Always consult with your healthcare provider for medical decisions.",
  },
  {
    question: "How can I share my kidney journey story?",
    answer:
      "We welcome stories from our community members! You can submit your story through the 'Share Your Story' form in your member dashboard, or contact us directly.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes, we take privacy seriously. Your personal information is protected according to our Privacy Policy. You control what you share in community discussions.",
  },
  {
    question: "How can I volunteer or contribute?",
    answer:
      "We welcome volunteers and contributors! Visit our 'Get Involved' page to learn about opportunities to help with content creation, community moderation, and more.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">CONTACT US</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                We're Here to <span className="text-[#22AA86]">Support You</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Have questions, feedback, or need assistance? Our team is ready to help you navigate your kidney health
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-background to-muted/30 dark:from-muted/10 dark:to-background border border-muted shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#22AA86]/20 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-[#22AA86]" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>We typically respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="mailto:support@kidneycommunity.in" className="text-[#22AA86] hover:underline font-medium">
                    support@kidneycommunity.in
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-muted/30 dark:from-muted/10 dark:to-background border border-muted shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#22AA86]/20 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-[#22AA86]" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Available Mon-Fri, 9am to 6pm IST</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+919876543210" className="text-[#22AA86] hover:underline font-medium">
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-muted/30 dark:from-muted/10 dark:to-background border border-muted shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#22AA86]/20 flex items-center justify-center mb-4">
                    <WhatsApp className="h-6 w-6 text-[#22AA86]" />
                  </div>
                  <CardTitle>WhatsApp Support</CardTitle>
                  <CardDescription>Quick responses for urgent queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://wa.me/919876543210" className="text-[#22AA86] hover:underline font-medium">
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-1 w-10 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">GET IN TOUCH</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">Send Us a Message</h2>

                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our resources, need support, or want to explore partnership
                  opportunities, we'd love to hear from you.
                </p>

                {submitSuccess ? (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-xl p-6 mb-8">
                    <h3 className="text-green-600 dark:text-green-400 font-medium text-lg mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600/80 dark:text-green-400/80">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => setSubmitSuccess(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide details about your query..."
                        required
                        className="min-h-[150px] rounded-xl"
                        rows={5}
                      />
                    </div>

                    {submitError && (
                      <div className="text-red-500 text-sm p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        {submitError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8 h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-2xl"></div>

                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] border border-muted">
                  <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-12 w-12 text-[#22AA86] mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-muted-foreground mb-4">
                        123 Kidney Care Street
                        <br />
                        Koramangala, Bangalore 560034
                        <br />
                        Karnataka, India
                      </p>
                      <Button
                        variant="outline"
                        className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl"
                        onClick={() => window.open("https://maps.google.com", "_blank")}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>

                  {/* This would be replaced with an actual map component in production */}
                  <img
                    src="/map-placeholder.png"
                    alt="Office location map"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                  <span className="text-[#22AA86] font-medium text-sm tracking-wider">FAQ</span>
                  <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>

              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our platform and kidney care.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background dark:bg-gray-900 rounded-xl border border-muted px-6"
                  >
                    <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">Don't see your question here? Reach out to us directly.</p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat with Support
                  </Button>

                  <Button
                    variant="outline"
                    className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl"
                    onClick={() => window.open("https://facebook.com", "_blank")}
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Join Facebook Group
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#22AA86]">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Community Today</h2>

              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Connect with fellow kidney warriors, access resources, and find the support you need on your kidney
                health journey.
              </p>

              <Button size="lg" className="bg-white text-[#22AA86] hover:bg-white/90 rounded-xl px-8">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
