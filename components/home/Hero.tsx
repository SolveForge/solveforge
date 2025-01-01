'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { AnimatedEmoji } from "@/components/ui/animated-emoji"
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion'
import Iphone15Pro from "@/components/ui/iphone-15-pro"
import { Activity, Calendar, Dumbbell, LineChart } from 'lucide-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left space-y-6 lg:space-y-10"
          >
            {/* Overline text with AnimatedShinyText */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
                bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm"
            >
              
              {/* Content wrapper */}
              <div className="relative z-10 flex items-center gap-2">
                <AnimatedEmoji emoji="⚡" animationType="pulse" className="text-sm" />
                <AnimatedShinyText 
                  className="text-xs sm:text-sm font-medium text-gray-800"
                  shimmerWidth={200}
                >
                  AI-Powered Fitness Revolution
                </AnimatedShinyText>
              </div>
            </motion.div>

            {/* Main heading with adjusted font sizes for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 lg:space-y-10"
            >
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight lg:leading-tight
                  text-gray-900 tracking-tight"
                >
                  Transform Your <br className="hidden sm:block" />
                  Fitness with AI <br className="hidden sm:block" />
                  <span className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">Technology</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Personalized workout plans and nutrition guidance powered by AI, 
                  designed to help you achieve your fitness goals <span className="font-medium text-gray-800">faster</span>.
                </p>
              </div>
              
              {/* Enhanced CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto group relative bg-gray-900 text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium 
                      rounded-xl transition-all duration-500 hover:shadow-lg hover:scale-[1.01] overflow-hidden
                      border border-gray-700 hover:border-gray-600 hover:bg-gray-900"
                  >
                    {/* Improved shine effect */}
                    <div className="absolute top-0 -left-full h-full w-1/2 z-5 block transform -skew-x-12 
                      bg-gradient-to-r from-transparent via-white to-transparent opacity-20 
                      group-hover:animate-[shine_1.5s_ease-in-out]" 
                    />
                    
                    <span className="relative z-10 flex items-center">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-700 group-hover:translate-x-1" />
                    </span>
                  </Button>
                  
                  {/* Rating indicator */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <div className="flex gap-1">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400">
                          {star}
                        </span>
                      ))}
                    </div>
                    <span className="font-medium">4.9/5</span>
                    <span className="text-gray-500">(2.5k+ reviews)</span>
                  </div>
                </div>

                {/* Trust indicators */}
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  🔒 No credit card required • Cancel anytime
                </p>
              </motion.div>
            </motion.div>

            {/* Feature Cards Section with refined rainbow glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 sm:pt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Left column - Stacked cards */}
                <div className="space-y-3">
                  {/* AI-Powered Workouts */}
                  <div className="group relative">
                    {/* Refined rainbow glow background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600/40 via-purple-600/40 to-blue-600/40 
                      rounded-xl blur-md opacity-35 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                    </div>
                    
                    {/* Card content */}
                    <div className="relative p-4 bg-white/80 backdrop-blur-xl rounded-xl 
                      border border-white/20 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          AI-Powered Workouts
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Personalized routines that adapt to your goals
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Real-time Adaptations */}
                  <div className="group relative">
                    {/* Refined rainbow glow background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/40 via-cyan-600/40 to-teal-600/40 
                      rounded-xl blur-md opacity-35 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                    </div>
                    
                    {/* Card content */}
                    <div className="relative p-4 bg-white/80 backdrop-blur-xl rounded-xl 
                      border border-white/20 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          Real-time Adaptations
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Workouts that evolve with your performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Single card */}
                <div>
                  <div className="group relative">
                    {/* Refined rainbow glow background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/40 via-yellow-600/40 to-orange-600/40 
                      rounded-xl blur-md opacity-35 group-hover:opacity-50 transition duration-1000 group-hover:duration-200">
                    </div>
                    
                    {/* Card content */}
                    <div className="relative p-4 bg-white/80 backdrop-blur-xl rounded-xl 
                      border border-white/20 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center shadow-sm">
                        <svg
                          className="w-4 h-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          Smart Progress Tracking
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Monitor improvements with detailed analytics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - iPhone and Floating Widgets */}
          <div className="relative h-[800px] w-full lg:w-[500px] ml-auto">
            {/* Workout Timer Widget - Top Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -left-40 top-32 z-10"
            >
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-5 
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 
                  hover:shadow-lg hover:border-gray-600/30 hover:-translate-y-0.5 transition-all duration-300 w-[170px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-[13px] font-medium">Workout Time</p>
                    <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px]">
                      <CircularProgressbar
                        value={70}
                        text={`32`}
                        strokeWidth={6}
                        styles={buildStyles({
                          textSize: '24px',
                          pathColor: '#60A5FA',
                          textColor: '#F3F4F6',
                          trailColor: '#374151',
                        })}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-200 font-medium text-sm">min left</p>
                      <p className="text-xs text-gray-400">of 45 min</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Calories Widget - Top Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -right-12 top-52 z-20"
            >
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-5 
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 
                  hover:shadow-lg hover:border-gray-600/30 hover:-translate-y-0.5 transition-all duration-300 w-[170px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-[13px] font-medium">Calories</p>
                    <span className="text-orange-400">🔥</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-gray-100">324</span>
                    <span className="text-xs text-gray-400">kcal</span>
                  </div>
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-orange-400 to-orange-500 rounded-full" />
                  </div>
                  <p className="text-xs text-gray-400">Daily Goal: 500 kcal</p>
                </div>
              </motion.div>
            </motion.div>

            {/* AI Form Widget - Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -left-12 bottom-52 z-20"
            >
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-5 
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 
                  hover:shadow-lg hover:border-gray-600/30 hover:-translate-y-0.5 transition-all duration-300 w-[170px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 text-[13px] font-medium">Form Analysis</p>
                    <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-lg">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-medium">Perfect</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px]">
                      <CircularProgressbar
                        value={98}
                        text={`98`}
                        strokeWidth={6}
                        styles={buildStyles({
                          textSize: '22px',
                          pathColor: '#34D399',
                          textColor: '#F3F4F6',
                          trailColor: '#374151',
                        })}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-200 text-sm font-medium">Form Score</p>
                      <p className="text-xs text-gray-400">Last Set</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Heart Rate Widget - Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -right-40 bottom-32 z-10"
            >
              <motion.div 
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl p-5 
                  shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-700/30 
                  hover:shadow-lg hover:border-gray-600/30 hover:-translate-y-0.5 transition-all duration-300 w-[170px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-[13px] font-medium">Heart Rate</p>
                    <div className="flex items-center gap-1">
                      <span className="text-rose-400">❤️</span>
                      <div className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-gray-100">147</span>
                    <span className="text-xs text-gray-400">bpm</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ 
                          height: [`${Math.random() * 12 + 8}px`, `${Math.random() * 12 + 8}px`]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.1
                        }}
                        className="w-1 rounded-full bg-gradient-to-t from-rose-500 to-rose-400"
                        style={{
                          opacity: Math.random() * 0.7 + 0.3,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">Zone: Cardio</p>
                </div>
              </motion.div>
            </motion.div>

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

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-full opacity-50" />
      </div>
    </section>
  );
}

