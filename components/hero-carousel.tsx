"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselItems = [
  {
    title: "Empowering Kidney Warriors & Their Caregivers",
    description:
      "Connecting kidney patients and caregivers through shared stories, resources, and support for a healthier journey together.",
    image: "/hero-image.png",
    ctaText: "Join Our Community",
    ctaLink: "#join",
    secondaryCta: "Share Your Story",
    secondaryCtaLink: "#share",
  },
  {
    title: "Your Journey, Our Community",
    description:
      "Find support, resources, and friendship on your kidney health journey with India's first kidney care community.",
    image: "/hero-journey.png",
    ctaText: "Get Started Today",
    ctaLink: "#start",
    secondaryCta: "Learn More",
    secondaryCtaLink: "#learn",
  },
  {
    title: "India's First Kidney Care Community",
    description:
      "Access India-specific resources, find local dialysis centers, and connect with others who understand your challenges.",
    image: "/hero-india-specific.png",
    ctaText: "Explore Resources",
    ctaLink: "#resources",
    secondaryCta: "Find Centers",
    secondaryCtaLink: "#centers",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/50 dark:from-background dark:via-background/95 dark:to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#22AA86]/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-[#22AA86]/5 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 w-48 h-48 rounded-full bg-[#22AA86]/10 blur-2xl"></div>

      <div className="container relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="h-1 w-6 bg-[#22AA86] rounded-full mr-2"></div>
                <span className="text-[#22AA86] font-medium text-sm tracking-wider">INDIA'S KIDNEY COMMUNITY</span>
                <div className="h-1 w-6 bg-[#22AA86] rounded-full ml-2"></div>
              </div>
            </div>

            <div className="transition-all duration-500" style={{ opacity: 1, transform: "translateY(0px)" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {carouselItems[currentSlide].title.split(" ").map((word, i) =>
                  word.toLowerCase() === "kidney" || word.toLowerCase() === "warriors" ? (
                    <span key={i} className="text-[#22AA86]">
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h1>

              <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
                {carouselItems[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#22AA86] hover:bg-[#1c8f70] rounded-xl px-8 shadow-lg shadow-[#22AA86]/20"
                >
                  {carouselItems[currentSlide].ctaText}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#22AA86] text-[#22AA86] hover:bg-[#22AA86]/10 rounded-xl px-8"
                >
                  {carouselItems[currentSlide].secondaryCta}
                </Button>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                  <img src="/avatar-1.png" alt="Community member" className="h-full w-full object-cover" />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                  <img src="/avatar-2.png" alt="Community member" className="h-full w-full object-cover" />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                  <img src="/avatar-3.png" alt="Community member" className="h-full w-full object-cover" />
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-background bg-[#22AA86] flex items-center justify-center text-white text-xs">
                  +500
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">500+</span> kidney warriors
              </p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start gap-3">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#22AA86] w-8" : "bg-[#22AA86]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#22AA86]/10 rounded-full blur-xl"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="relative overflow-hidden" style={{ height: "500px" }}>
                <div
                  className="flex transition-transform duration-500 h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselItems.map((item, index) => (
                    <div key={index} className="min-w-full h-full relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white hover:bg-black/50 rounded-full h-12 w-12 shadow-lg"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 text-white hover:bg-black/50 rounded-full h-12 w-12 shadow-lg"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#22AA86]/20 flex items-center justify-center">
                      <svg className="h-6 w-6 text-[#22AA86]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Community Support</h3>
                      <p className="text-white/70 text-sm">Connect with others who understand</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      <p className="text-white/90 text-sm">Access to India-specific resources</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      <p className="text-white/90 text-sm">Find local dialysis centers</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#22AA86]"></div>
                      <p className="text-white/90 text-sm">Share experiences and practical tips</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
