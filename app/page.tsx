import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import FeatureSection from "@/components/feature-section"
import WhyJoinSection from "@/components/why-join-section"
import Testimonials from "@/components/testimonials"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <WhyJoinSection />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
