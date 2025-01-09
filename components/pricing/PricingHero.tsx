'use client';

import { motion } from 'framer-motion';
import { AnimatedEmoji } from "@/components/ui/animated-emoji"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { usePageLoading } from '@/components/LoadingScreen';

export default function PricingHero() {
  const { shouldStartPageAnimation } = usePageLoading();

  return (
    <section className="relative pt-32 pb-8 lg:pt-36 lg:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: shouldStartPageAnimation ? 1 : 0, y: shouldStartPageAnimation ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full 
              bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2">
              <AnimatedEmoji emoji="💎" animationType="pulse" className="text-sm" />
              <AnimatedShinyText 
                shimmerWidth={100}
                className="text-xs font-medium text-gray-300"
              >
                Simple, Transparent Pricing
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: shouldStartPageAnimation ? 1 : 0, y: shouldStartPageAnimation ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-gray-100 leading-[1.1]">Choose Your</span><br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 
              bg-clip-text text-transparent leading-[1.1]">
              Fitness Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: shouldStartPageAnimation ? 1 : 0, y: shouldStartPageAnimation ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-gray-400 leading-relaxed"
          >
            Start your transformation today with our flexible plans designed to fit your goals and budget.
            <span className="text-gray-200"> No hidden fees.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
} 