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
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          {/* Badge with rotating emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center px-3 py-1.5 rounded-full 
              bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span className="animate-spin-slow">🎯</span>
              <span className="text-xs font-medium text-gray-400">
                Three-Step Process
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
            <span className="text-gray-100">How It</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed"
          >
            Transform your fitness journey with our intelligent and adaptive process
          </motion.p>
        </div>

        {/* Content remains the same, just updating colors */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Steps */}
            <div className="relative space-y-12">
              {/* Connecting line stays the same */}
              <div className="absolute left-1/2 top-[80px] bottom-[80px] w-[3px] 
                bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20">
                {/* Previous line animations stay the same */}
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  className="relative group"
                >
                  <div className="relative bg-[#1A1A1C]/50 backdrop-blur-sm rounded-2xl p-8 
                    border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300
                    hover:-translate-y-1">
                    <div className="relative flex items-start gap-8">
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} 
                        flex items-center justify-center text-white shadow-lg
                        transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        {step.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium
                            bg-white/10 text-gray-300">
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-200">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                opacity: { duration: 0.5 },
                x: { duration: 0.5 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative group h-[600px]"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full w-full rounded-3xl overflow-hidden 
                border border-white/[0.075] group-hover:border-white/[0.15] transition-all duration-500">
                <Image
                  src="/image/2.jpeg"
                  alt="AI Fitness Process Visualization"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 
                    brightness-75 group-hover:brightness-70"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 
                  opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

