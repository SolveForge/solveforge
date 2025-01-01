'use client'

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle, Star } from 'lucide-react'
import { useRef } from 'react'

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const benefits = [
    "Personalized AI Workout Plans",
    "Real-time Progress Tracking",
    "Expert Nutrition Guidance",
    "24/7 Support & Motivation"
  ]

  const getDescriptionForBenefit = (benefit: string) => {
    const descriptions = {
      "Personalized AI Workout Plans": "Custom routines that adapt to your progress and goals",
      "Real-time Progress Tracking": "Monitor your improvements with detailed analytics",
      "Expert Nutrition Guidance": "Tailored meal plans and dietary recommendations",
      "24/7 Support & Motivation": "Always available assistance and encouragement"
    }
    return descriptions[benefit as keyof typeof descriptions]
  }

  return (
    <section className="relative py-32 sm:py-40 overflow-hidden" ref={containerRef}>
      {/* Enhanced gradient background with parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" 
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Enhanced floating orbs with better contained positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-24 left-24 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" 
        />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative lg:pr-10"
          >
            {/* Enhanced Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12
                tracking-tight leading-[1.1] lg:text-left max-w-xl"
            >
              Transform your body with{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent 
                  relative inline-block hover:from-blue-700 hover:to-cyan-700
                  transition-all duration-300"
              >
                AI-powered
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-1.5 left-0 w-full h-[1px] 
                    bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-cyan-600/0" 
                />
              </motion.span>
              {' '}fitness
            </motion.h2>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12 max-w-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-gray-200" />
              <div className="text-gray-600 font-medium">
                Trusted by <span className="text-gray-900">50,000+</span> users worldwide
              </div>
            </motion.div>

            {/* Enhanced Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-4 max-w-2xl"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex flex-col gap-3 bg-gradient-to-r from-white/90 to-white/70 p-6 rounded-2xl
                    shadow-sm border border-gray-100/50 hover:shadow-md backdrop-blur-sm
                    hover:border-gray-200/50 transition-all group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 rounded-xl
                    shadow-sm group-hover:shadow-md transition-all w-fit">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 
                      transition-colors leading-tight">{benefit}</h3>
                    <p className="text-gray-500 text-sm">
                      {getDescriptionForBenefit(benefit)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative lg:text-left mt-12 lg:mt-0"
          >
            {/* Stats Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white/95 to-white/90 rounded-2xl p-8 border border-gray-200/50 
                shadow-xl shadow-gray-900/[0.05] hover:shadow-2xl backdrop-blur-sm
                hover:shadow-gray-900/[0.1] transition-all lg:ml-auto lg:max-w-md"
            >
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-gray-500 
                    bg-gradient-to-r from-gray-50 to-gray-100/80 
                    p-2 rounded-lg inline-block hover:from-gray-100 hover:to-gray-200/80 transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  <span>Limited time offer</span>
                </motion.div>
                
                <h3 className="text-2xl font-semibold bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-transparent">
                  Start your fitness journey today
                </h3>
                
                <p className="text-gray-600">
                  Join thousands of satisfied users who have transformed their lives with 
                  our AI-powered fitness solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-100">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">95%</div>
                    <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-500 transition-colors">Success Rate</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.2 }}
                    className="group"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10k+</div>
                    <div className="text-sm text-gray-600 mt-1 group-hover:text-blue-500 transition-colors">Active Users</div>
                  </motion.div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 h-14
                    group relative overflow-hidden shadow-lg shadow-gray-900/10
                    hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300
                    text-base font-medium rounded-full"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 
                      group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card</span>
                  </div>
                  <div className="h-4 w-px bg-gray-200" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>14-day free trial</span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-3 pt-4">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white 
                        bg-gradient-to-br ${
                          ['from-blue-500 to-blue-600',
                           'from-cyan-500 to-cyan-600',
                           'from-purple-500 to-purple-600',
                           'from-pink-500 to-pink-600'][i]
                        }`} 
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Join our community</div>
                    <div className="text-gray-500">of fitness enthusiasts</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

