'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { AnimatedEmoji } from "@/components/ui/animated-emoji"
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion'
import Iphone15Pro from "@/components/ui/iphone-15-pro"
import { Activity, Calendar, Dumbbell, LineChart } from 'lucide-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface Widget {
  title: string;
  icon: React.ReactNode;
  value: string;
  unit: string;
  content: React.ReactNode;
  initial: { opacity: number; x: number; y: number };
  animate: { opacity: number; x: number; y: number };
  transition: { duration: number; delay: number };
  className: string;
  floatAnimation: { y: number[] };
  floatTransition: { duration: number; repeat: number; ease: string };
}

export default function Hero() {
  const widgets: Widget[] = [
    {
      title: "Workout Time",
      icon: (
        <div className="h-2.5 w-2.5 rounded-full bg-blue-400/20">
          <div className="h-full w-full rounded-full bg-blue-400 animate-pulse" />
        </div>
      ),
      value: "32",
      unit: "min",
      content: (
        <div className="relative w-full">
          <div className="relative w-[52px] h-[52px]">
            <CircularProgressbar
              value={70}
              strokeWidth={6}
              styles={buildStyles({
                textSize: '24px',
                textColor: '#F3F4F6',
                pathColor: 'rgba(96, 165, 250, 0.9)',
                trailColor: 'rgba(255, 255, 255, 0.03)',
              })}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-200">70%</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-blue-400" />
            <span className="text-[10px] text-gray-400">13 min left</span>
          </div>
        </div>
      ),
      initial: { opacity: 0, x: -40, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.7, delay: 0.4 },
      className: "absolute -left-24 top-24 z-10",
      floatAnimation: { y: [-8, 8, -8] },
      floatTransition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    },
    {
      title: "Calories Burned",
      icon: (
        <div className="relative">
          <span className="absolute -inset-2 bg-orange-400/20 rounded-full blur-md" />
          <span className="relative text-orange-400 text-base">🔥</span>
        </div>
      ),
      value: "324",
      unit: "kcal",
      content: (
        <div className="space-y-3">
          <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-full bg-gradient-to-r from-orange-400 via-amber-400 to-rose-400 rounded-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <div className="px-1.5 py-0.5 rounded-full bg-orange-400/10">
                <p className="text-[10px] text-orange-400 font-medium">Active</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-500">Goal: 500 kcal</span>
          </div>
        </div>
      ),
      initial: { opacity: 0, x: 40, y: 20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.7, delay: 0.6 },
      className: "absolute -right-6 top-40 z-20",
      floatAnimation: { y: [-10, 10, -10] },
      floatTransition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    {
      title: "Heart Rate",
      icon: (
        <div className="flex items-center gap-1.5">
          <span className="relative">
            <span className="absolute -inset-2 bg-rose-400/20 rounded-full blur-md" />
            <span className="relative text-rose-400 text-base">❤️</span>
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
        </div>
      ),
      value: "147",
      unit: "bpm",
      content: (
        <div className="space-y-3">
          <div className="flex gap-1 h-8 items-end px-0.5">
            {Array.from({ length: 7 }).map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  height: [`${Math.random() * 20 + 12}px`, `${Math.random() * 20 + 12}px`]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.1
                }}
                className="w-1.5 rounded-full bg-gradient-to-t from-rose-500 via-rose-400 to-pink-400"
                style={{
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20">
              <p className="text-[10px] text-rose-400 font-medium">Cardio Zone</p>
            </div>
            <span className="text-[10px] text-gray-500">70-85%</span>
          </div>
        </div>
      ),
      initial: { opacity: 0, x: 40, y: -20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.7, delay: 0.8 },
      className: "absolute -right-28 bottom-36 z-10",
      floatAnimation: { y: [-9, 9, -9] },
      floatTransition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
    },
    {
      title: "Steps Today",
      icon: (
        <div className="relative">
          <span className="absolute -inset-2 bg-green-400/20 rounded-full blur-md" />
          <span className="relative text-green-400 text-base">👣</span>
        </div>
      ),
      value: "8,439",
      unit: "steps",
      content: (
        <div className="space-y-3">
          <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <div className="px-1.5 py-0.5 rounded-full bg-green-400/10">
                <p className="text-[10px] text-green-400 font-medium">On Track</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-500">Goal: 10k</span>
          </div>
        </div>
      ),
      initial: { opacity: 0, x: -40, y: -20 },
      animate: { opacity: 1, x: 0, y: 0 },
      transition: { duration: 0.7, delay: 1 },
      className: "absolute -left-20 bottom-28 z-10",
      floatAnimation: { y: [-11, 11, -11] },
      floatTransition: { duration: 5.8, repeat: Infinity, ease: "easeInOut" }
    }
  ];

  const cards = [
    {
      title: "AI-Powered Workouts",
      description: "Personalized routines that adapt",
      icon: <Activity className="w-3.5 h-3.5 text-blue-400" />
    },
    {
      title: "Smart Progress Tracking",
      description: "Monitor improvements in real-time",
      icon: <LineChart className="w-3.5 h-3.5 text-green-400" />
    },
    {
      title: "Nutrition Guidance",
      description: "AI-optimized meal planning",
      icon: <Calendar className="w-3.5 h-3.5 text-purple-400" />
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full 
                bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-2">
                <AnimatedEmoji emoji="⚡" animationType="pulse" className="text-sm" />
                <AnimatedShinyText 
                  shimmerWidth={100}
                  className="text-xs font-medium text-gray-300"
                >
                  AI-Powered Fitness Revolution
                </AnimatedShinyText>
              </div>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="text-gray-100 leading-[1.1]">Transform Your</span> <br />
                <span className="text-gray-100 leading-[1.1]">Fitness with</span> <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 
                  bg-clip-text text-transparent leading-[1.1]">
                  Technology
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl mt-6">
                Personalized workout plans and nutrition guidance powered by AI, 
                designed to help you achieve your fitness goals <span className="text-gray-200">faster</span>.
              </p>
            </div>
                
            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto group relative bg-white/[0.05] hover:bg-white/[0.1]
                    text-white px-6 py-4 text-base font-medium rounded-xl transition-all duration-300
                    border border-white/[0.05] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                {/* Rating indicator */}
                <div className="flex items-center gap-2 text-sm text-gray-400 pt-2">
                  <div className="flex gap-0.5">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-yellow-400">
                        {star}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-300">4.9/5</span>
                  <span className="text-gray-500">(2.5k+ reviews)</span>
                </div>
              </div>

              {/* Trust indicators */}
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="text-gray-400">🔒</span>
                No credit card required • Cancel anytime
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3 [&>*:last-child]:col-span-2">
              {cards.map((card, index) => (
                <div key={index} className="group relative h-[72px]">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 to-white/5 
                    rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative h-full p-3 bg-white/[0.03] backdrop-blur-xl rounded-xl 
                    border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300
                    shadow-[0_8px_16px_rgb(0,0,0,0.2)]">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.075]
                        flex items-center justify-center shadow-inner">
                        {card.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-medium text-gray-200 truncate">{card.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5 truncate">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - iPhone and Widgets */}
          <div className="relative h-[800px] w-full lg:w-[500px] ml-auto">
            {widgets.map((widget: Widget, index: number) => (
              <motion.div 
                key={index}
                initial={widget.initial}
                animate={widget.animate}
                transition={widget.transition}
                className={widget.className}
              >
                <motion.div 
                  animate={widget.floatAnimation}
                  transition={widget.floatTransition}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent 
                    rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700
                    group-hover:duration-500" />
                  
                  <div className="relative p-4 rounded-2xl transition-all duration-500
                    border border-white/[0.075] 
                    group-hover:border-white/[0.2]
                    group-hover:shadow-[0_8px_32px_rgb(0,0,0,0.5)]
                    group-hover:translate-y-[-2px]
                    bg-[#1A1A1C]
                    w-[190px]">
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/40 rounded-full 
                            animate-ping [animation-duration:3s]" />
                          <div className="relative h-1 w-1 rounded-full bg-white/80" />
                        </div>
                        <p className="text-[11px] font-medium text-gray-300/90 tracking-wide">
                          {widget.title}
                        </p>
                      </div>
                      {widget.icon}
                    </div>

                    <div className="space-y-3 relative">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-semibold text-gray-100 tracking-tight">
                          {widget.value}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {widget.unit}
                        </span>
                      </div>

                      <motion.div 
                        initial={false}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {widget.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* iPhone */}
            <motion.div 
              className="h-full flex items-center justify-center relative z-0"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Iphone15Pro 
                src="/image/5.mp4"
                width={380}
                height={770}
                theme="dark"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

