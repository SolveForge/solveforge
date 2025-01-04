'use client'

import * as React from "react"
import { Scale, Salad, Dumbbell, ArrowRight, Calculator, RefreshCcw, LineChart } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export default function MacroPath() {
  const macros = [
    {
      title: "Protein",
      icon: <Dumbbell className="h-8 w-8" />,
      description: "Essential for muscle growth and recovery",
      gradient: "from-rose-500 to-red-600",
      features: [
        "Muscle repair and growth",
        "Enhanced recovery",
        "Improved strength",
        "Better satiety"
      ],
      percentage: 30
    },
    {
      title: "Carbohydrates",
      icon: <Salad className="h-8 w-8" />,
      description: "Primary energy source for workouts",
      gradient: "from-emerald-500 to-green-600",
      features: [
        "Sustained energy",
        "Better performance",
        "Mental focus",
        "Muscle glycogen"
      ],
      percentage: 40
    },
    {
      title: "Fats",
      icon: <Scale className="h-8 w-8" />,
      description: "Vital for hormone production and health",
      gradient: "from-amber-500 to-yellow-600",
      features: [
        "Hormone balance",
        "Brain health",
        "Nutrient absorption",
        "Energy storage"
      ],
      percentage: 30
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full 
            bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)] mb-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-white/70" />
              <span className="text-xs font-medium text-gray-400">
                Smart Macro Calculator
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-gray-100">Optimize Your</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Nutrition
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            Our AI-powered system calculates your perfect macro distribution based on your goals,
            body composition, and activity level for maximum results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Image */}
          <div className="relative h-[700px] w-full lg:w-[650px] mr-auto">
            <div className="animate-float group h-full">
              {/* Enhanced glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden 
                border border-white/[0.075] group-hover:border-white/[0.15] transition-all duration-500">
                <Image
                  src="/image/3.jpeg"
                  alt="Macro nutrition visualization"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 
                    brightness-75 group-hover:brightness-70"
                  priority
                  sizes="(max-width: 1024px) 100vw, 650px"
                />

                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 
                  opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Stats with improved styling */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="grid grid-cols-3 gap-4">
                    {macros.map((macro, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="group/card relative bg-[#1A1A1C]/60 backdrop-blur-md rounded-2xl p-6 
                          border border-white/[0.075] hover:border-white/[0.15] 
                          hover:bg-[#1A1A1C]/80 transition-all duration-300
                          hover:scale-[1.02] hover:shadow-lg"
                      >
                        <div className="relative z-10">
                          <div className="text-4xl font-bold text-white/90 mb-2">
                            {macro.percentage}%
                          </div>
                          <div className="text-sm font-medium text-white/70">
                            {macro.title}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Content */}
          <div className="space-y-12">
            {/* Macro Details */}
            <div className="space-y-6">
              {macros.map((macro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative bg-[#1A1A1C]/50 backdrop-blur-sm rounded-2xl p-6 
                    border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-[#1A1A1C] 
                        border border-white/[0.075] flex items-center justify-center 
                        transform transition-transform duration-300 group-hover:scale-110`}>
                        <div className="text-white/90">
                          {macro.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">{macro.title}</h3>
                        <p className="text-gray-400 mb-4">{macro.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {macro.features.map((feature, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 
                              rounded-full bg-[#1A1A1C] border border-white/[0.075] text-sm text-gray-400">
                              <div className="w-1 h-1 rounded-full bg-white/20" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Real-time Updates",
                  description: "Macro targets adjust automatically based on your progress and activity",
                  icon: <RefreshCcw className="h-5 w-5" />
                },
                {
                  title: "Smart Tracking",
                  description: "Monitor your daily intake with our intuitive tracking system",
                  icon: <LineChart className="h-5 w-5" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative bg-[#1A1A1C]/30 backdrop-blur-sm rounded-xl p-4 
                    border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#1A1A1C] text-white/80">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.description}</p>
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