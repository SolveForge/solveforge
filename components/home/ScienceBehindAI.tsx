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
    <section className="relative py-32 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full 
              bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2">
              <span className="animate-float-emoji">🧬</span>
              <span className="text-xs font-medium text-gray-400">
                Scientific Research
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:leading-tight
              tracking-tight mb-8 mt-8"
          >
            <span className="text-gray-100">Scientific</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Our AI technology is built on proven scientific principles and continuously evolves 
            with the latest research in exercise science and nutrition.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Image */}
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
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
              rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative h-full w-full rounded-3xl overflow-hidden 
              border border-white/[0.075] group-hover:border-white/[0.15] transition-all duration-500">
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
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {sciencePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#1A1A1C]/50 backdrop-blur-sm rounded-2xl p-6 
                  border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${point.gradient} 
                      flex items-center justify-center text-white shadow-lg
                      transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-200 mb-2">{point.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

