'use client'

import * as React from "react"
import { Scale, Salad, Dumbbell, ArrowRight, Calculator } from 'lucide-react'
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
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Image */}
          <div className="relative h-[700px] w-full lg:w-[650px] mr-auto">
            {/* Floating effect wrapper */}
            <div className="animate-float group h-full">
              {/* Multi-layered glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-blue-600/80 
                rounded-3xl blur-lg opacity-80 group-hover:opacity-90 transition duration-1000 
                group-hover:duration-200 group-hover:blur-2xl" />
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/50 via-cyan-600/50 to-teal-600/50 
                rounded-3xl blur-xl opacity-60 group-hover:opacity-70 transition duration-1000 rotate-3" />
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-600/40 via-fuchsia-600/40 to-indigo-600/40 
                rounded-3xl blur-xl opacity-60 group-hover:opacity-70 transition duration-1000 -rotate-3" />
              
              <div className="relative h-full w-full overflow-hidden">
                {/* Glass background effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl backdrop-blur-sm" />
                
                {/* Image with enhanced container */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                  <Image
                    src="/image/3.jpeg"
                    alt="Macro nutrition visualization"
                    fill
                    className="object-cover brightness-95 transition-all duration-700 
                      group-hover:scale-105 group-hover:brightness-90"
                    priority
                    sizes="(max-width: 1024px) 100vw, 650px"
                    style={{ objectPosition: "center 30%" }}
                  />

                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/10 
                    opacity-90 group-hover:opacity-75 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-gray-900/50" />

                  {/* Animated shine effect */}
                  <div className="absolute inset-0 h-full w-1/2 z-5 block transform -skew-x-12 
                    bg-gradient-to-r from-transparent via-white to-transparent opacity-0
                    group-hover:animate-[shine_2s_ease-in-out_infinite]" />

                  {/* Enhanced border with double effect */}
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 
                    transition-all duration-700" />
                  <div className="absolute inset-[1px] rounded-3xl ring-1 ring-white/5 group-hover:ring-white/10 
                    transition-all duration-700" />

                  {/* Floating Stats with improved design */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="grid grid-cols-3 gap-4">
                      {macros.map((macro, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="group/card relative bg-white/10 backdrop-blur-md rounded-2xl p-4 
                            border border-white/10 hover:border-white/20 
                            hover:bg-white/15 transition-all duration-300
                            hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5
                            overflow-hidden"
                        >
                          {/* Subtle gradient background */}
                          <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${macro.gradient}`} />
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="text-3xl font-bold text-white mb-1 group-hover/card:text-white/90">
                              {macro.percentage}%
                            </div>
                            <div className="text-sm font-medium text-white/80 group-hover/card:text-white/90">
                              {macro.title}
                            </div>
                          </div>
                          
                          {/* Hover shine effect */}
                          <div className="absolute inset-0 w-1/2 -translate-x-full transform 
                            bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            group-hover/card:translate-x-[200%] transition-transform duration-1000" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Section Header */}
            <div className="mb-12">
              <div className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
                bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm">
                <div className="relative z-10 flex items-center gap-2">
                  <Calculator className="h-4 w-4 animate-subtle-float group-hover:animate-subtle-shake transition-transform" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Smart Macro Calculator
                  </span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 mt-6">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight lg:leading-tight
                  text-gray-900 tracking-tight"
                >
                  Smart Macro <br className="hidden sm:block" />
                  <span className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                    Distribution
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Our AI-powered system calculates your optimal macro distribution based on your goals,
                  body composition, and activity level.
                </p>
              </div>
            </div>

            {/* Macro Details */}
            <div className="space-y-6 mb-12">
              {macros.map((macro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 
                    border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md 
                    transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${macro.gradient} 
                        flex items-center justify-center text-white transform transition-transform 
                        duration-300 group-hover:scale-110 shadow-sm`}>
                        {macro.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{macro.title}</h3>
                        <p className="text-gray-600 mb-4">{macro.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {macro.features.map((feature, i) => (
                            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 
                              rounded-full bg-gray-50/80 border border-gray-100 text-sm text-gray-600">
                              <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${macro.gradient}`} />
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

            {/* Enhanced CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md 
                border border-gray-100 hover:border-gray-200 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Calculate Your Macros
                    </h3>
                    <p className="text-gray-600">Get your personalized nutrition plan in seconds</p>
                  </div>
                  <button className="w-full sm:w-auto group relative bg-gray-900 text-white px-6 py-4 text-base font-medium 
                    rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-[1.01] overflow-hidden
                    border border-gray-700 hover:border-gray-600 hover:bg-gray-900">
                    <div className="absolute top-0 -left-full h-full w-1/2 z-5 block transform -skew-x-12 
                      bg-gradient-to-r from-transparent via-white to-transparent opacity-20 
                      group-hover:animate-[shine_1.5s_ease-in-out]" />
                    <span className="relative z-10 flex items-center">
                      Start Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 