"use client"

import { Card } from "@/components/ui/card"
import { Microscope, BookOpen, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function ScienceBehindAI() {
  const sciencePoints = [
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Evidence-Based Approach",
      description: "Our AI is trained on peer-reviewed scientific studies and established exercise physiology principles.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Continuous Learning",
      description: "The AI stays up-to-date with the latest research in fitness and nutrition science.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Data-Driven Optimization",
      description: "Analyzes user data to refine and improve workout and nutrition recommendations over time.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Personalized Adaptations",
      description: "Utilizes machine learning to understand individual responses to different training and nutrition strategies.",
      gradient: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          {/* Badge with CSS-based floating emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
              bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm mb-8"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="animate-float-emoji">
                🧬
              </span>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 
                bg-clip-text text-transparent">
                Scientific Research
              </span>
            </div>
          </motion.div>

          {/* New Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:leading-tight
              text-gray-900 tracking-tight mb-8"
          >
            Scientific <span className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Our AI technology is built on proven scientific principles and continuously evolves 
            with the latest research in exercise science and nutrition.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Image (Moved from right) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative lg:h-[700px] group"
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 
              rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-all duration-500
              group-hover:from-blue-500/60 group-hover:via-purple-500/60 group-hover:to-pink-500/60
              animate-pulse-slow" />
            
            {/* Main image container */}
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl
              ring-2 ring-white ring-opacity-20 ring-offset-2 ring-offset-white/10
              group-hover:ring-opacity-30 transition-all duration-500">
              <div className="absolute inset-0 rounded-3xl border border-white/30 
                group-hover:border-white/40 transition-all duration-500" />
              
              <div className="relative h-full">
                <Image
                  src="/image/2.jpeg"
                  alt="Scientific Approach Visualization"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 
                    brightness-75 group-hover:brightness-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 
                  opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            {/* Science Points in Vertical Layout */}
            <div className="space-y-6">
              {sciencePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    border border-white/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30 
                      rounded-2xl opacity-80" />
                    
                    <div className="relative flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} 
                        flex items-center justify-center text-white shadow-lg
                        transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="relative z-10">{point.icon}</div>
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 
                          bg-clip-text text-transparent">{point.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

