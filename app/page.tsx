import Header from '@/components/Header'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import MacroPath from '@/components/home/MacroPath'
import HowItWorks from '@/components/home/HowItWorks'
import ScienceBehindAI from '@/components/home/ScienceBehindAI'
import Newsletter from '@/components/home/Newsletter'
import CTA from '@/components/home/CTA'
import Footer from '@/components/Footer'
import MartialArts from "@/components/home/MartialArts"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main>
        <Hero />
        <div className="mt-[4rem] lg:mt-0">
          <Features />
          <MacroPath />
          <HowItWorks />
          <ScienceBehindAI />
          <MartialArts />
          <Newsletter />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  )
}

