'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingHero from '@/components/pricing/PricingHero'
import PricingTiers from '@/components/pricing/PricingTiers'
import PricingFAQ from '@/components/pricing/PricingFAQ'
import PricingTestimonials from '@/components/pricing/PricingTestimonials'
import PricingCTA from '@/components/pricing/PricingCTA'

export default function Pricing() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main background glow - matches landing page */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#3b3b3f,transparent)]" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <PricingHero />
        <div className="mt-[4rem] lg:mt-0">
          <PricingTiers />
          <PricingTestimonials />
          <PricingFAQ />
          <PricingCTA />
        </div>
      </div>
      <Footer />
    </main>
  )
}