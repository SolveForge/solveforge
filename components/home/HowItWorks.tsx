"use client"

import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { motion } from "framer-motion"
import { Brain, UserCircle2, LineChart } from "lucide-react"

interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
  delay: number;
}

export default function HowItWorks(): JSX.Element {
  const steps: Step[] = [
    {
      title: "Input Your Details",
      description: "Tell us about your fitness level, goals, available equipment, and time constraints.",
      icon: <UserCircle2 className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      title: "AI Analysis",
      description: "Our AI processes your information, considering factors like muscle groups, recovery time, and progressive overload.",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      delay: 0.2
    },
    {
      title: "Get Your Plan",
      description: "Receive a personalized workout plan optimized for your specific needs and goals.",
      icon: <LineChart className="w-8 h-8" />,
      gradient: "from-indigo-500 to-indigo-600",
      delay: 0.3
    }
  ];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          {/* Badge with rotating emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
              bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm mb-8"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="animate-spin-slow">🎯</span>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 
                bg-clip-text text-transparent">
                Three-Step Process
              </span>
            </div>
          </motion.div>

          {/* Title without blue dot */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:leading-tight
              text-gray-900 tracking-tight mb-8"
          >
            <span className="inline-flex items-center gap-4">
              How It
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Works
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg sm:text-xl leading-relaxed"
          >
            Transform your fitness journey with our intelligent and adaptive process
          </motion.p>
        </div>

        {/* New Layout: Cards Left, Image Right */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps with centered connecting line */}
            <div className="relative space-y-12">
              {/* Enhanced Connecting line */}
              <div className="absolute left-1/2 top-[80px] bottom-[80px] w-[3px] 
                bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 
                  blur-md" />
                
                {/* Animated flowing line */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 
                    animate-flow-down" />
                </div>

                {/* Connection dots */}
                {[0, 1, 2].map((index) => (
                  <div key={index} 
                    className="absolute left-1/2 transform -translate-x-1/2"
                    style={{ top: `${index * 50}%` }}>
                    <div className="relative w-4 h-4">
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 
                        animate-pulse" />
                      {/* Inner dot */}
                      <div className="absolute inset-1 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>
                ))}
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="relative group"
                >
                  {/* Enhanced glassmorphic card */}
                  <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    border border-white/20 transition-all duration-300 hover:-translate-y-1">
                    {/* Glass effect layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30 
                      rounded-2xl opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 
                      rounded-2xl" />
                    
                    {/* Card content */}
                    <div className="relative flex items-start gap-8">
                      {/* Icon container */}
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} 
                        flex items-center justify-center text-white shadow-lg
                        transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                        <div className="relative z-10 transform transition-transform duration-300 
                          group-hover:scale-110">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium
                            bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700">
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                            bg-clip-text text-transparent">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-6 right-6 flex space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500/40 
                        to-purple-500/40 animate-pulse delay-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-500/40 
                        to-pink-500/40 animate-pulse delay-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 0.5 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative group"
            >
              {/* Enhanced glow effect - more visible in both states */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 
                rounded-3xl blur-2xl opacity-90 group-hover:opacity-100 transition-all duration-500
                group-hover:from-blue-500/60 group-hover:via-purple-500/60 group-hover:to-pink-500/60
                animate-pulse-slow" />
              
              {/* Main image container - with thinner border */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl
                ring-2 ring-white ring-opacity-20 ring-offset-2 ring-offset-white/10
                group-hover:ring-opacity-30 transition-all duration-500">
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-3xl border border-white/30 
                  group-hover:border-white/40 transition-all duration-500" />
                
                <div className="relative w-full h-full">
                  <Image
                    src="/image/2.jpeg"
                    alt="AI Fitness Process Visualization"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 
                      brightness-75 group-hover:brightness-70"
                  />
                  {/* Enhanced dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 
                    opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Enhanced color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 
                    to-pink-500/20 mix-blend-overlay opacity-40 group-hover:opacity-60 
                    transition-opacity duration-500" />

                  {/* Inner ring glow - thinner border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/10
                    group-hover:border-white/20 transition-all duration-500
                    shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]
                    group-hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.2)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

