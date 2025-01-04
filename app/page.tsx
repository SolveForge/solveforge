import Header from '@/components/Header'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import MacroPath from '@/components/home/MacroPath'
import HowItWorks from '@/components/home/HowItWorks'
import ScienceBehindAI from '@/components/home/ScienceBehindAI'
import Newsletter from '@/components/home/Newsletter'
import Footer from '@/components/Footer'
import MartialArts from "@/components/home/MartialArts"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main background glow - covers all sections */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#3b3b3f,transparent)]" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <Hero />
        <div className="mt-[4rem] lg:mt-0">
          <Features />
          <MacroPath />
          <HowItWorks />
          <ScienceBehindAI />
          <Newsletter />
          <MartialArts />
        </div>
      </div>
      <Footer />
    </main>
  )
}

