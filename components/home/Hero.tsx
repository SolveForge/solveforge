'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BorderBeam } from "@/components/ui/border-beam"
import { AnimatedEmoji } from "@/components/ui/animated-emoji"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh+16rem)] lg:min-h-[calc(100vh-5rem)] flex items-start lg:items-center 
      overflow-hidden py-8 sm:py-12 lg:py-16 mb-[12rem] lg:mb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-6 lg:space-y-10">
            {/* Overline text with AnimatedShinyText */}
            <div className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
              bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm">
              
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
            </div>

            {/* Main heading with adjusted font sizes for mobile */}
            <div className="space-y-6 lg:space-y-10">
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
              <div className="space-y-4 sm:space-y-6">
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
              </div>
            </div>

            {/* Feature Cards Section with refined rainbow glow */}
            <div className="pt-6 sm:pt-8">
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
            </div>
          </div>

          {/* Right Column - Adjust mobile height and spacing */}
          <div className="relative h-[700px] w-full lg:w-[500px] ml-auto mt-8 lg:mt-0">
            {/* Floating effect wrapper */}
            <div className="animate-float group h-full">
              {/* Enhanced rainbow glow effect for image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-blue-600/80 
                rounded-2xl blur-lg opacity-80 group-hover:opacity-90 transition duration-1000 
                group-hover:duration-200 scale-[0.9] group-hover:blur-2xl">
              </div>
              
              <div className="relative h-full w-full overflow-hidden">
                {/* Background and gradient effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-2xl scale-[0.9]" />
                
                {/* Image */}
                <Image
                  src="/image/1.jpeg"
                  alt="Fitness Journey"
                  fill
                  className="object-cover rounded-2xl brightness-90 scale-[0.9] transition-all duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  style={{ objectPosition: "center 20%" }}
                />

                {/* Darker overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-gray-900/50 rounded-2xl scale-[0.9]
                  transition-all duration-500" />

                {/* Shine effect */}
                <div className="absolute inset-0 h-full w-1/2 z-5 block transform -skew-x-12 
                  bg-gradient-to-r from-transparent via-white to-transparent opacity-10 
                  group-hover:animate-[shine_4s_ease-in-out_infinite] scale-[0.9]" 
                />

                {/* Enhanced border */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 scale-[0.9]
                  group-hover:ring-white/30 transition-all duration-500" />
              </div>
            </div>

            {/* Goal Tracking Card */}
            <div className="absolute -left-16 top-32 hidden lg:block">
              <div className="animate-float-card-1">
                <div className="group relative transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 
                    rounded-lg blur-lg opacity-50 group-hover:opacity-75 group-hover:blur-xl transition-all duration-500">
                  </div>
                  <div className="relative bg-white/50 hover:bg-white/80 backdrop-blur-xl rounded-lg p-3.5 shadow-lg 
                    border border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                        flex items-center justify-center shadow-inner transform group-hover:scale-110 
                        group-hover:rotate-3 transition-all duration-300 overflow-hidden">
                        <AnimatedEmoji emoji="🎯" animationType="pulse" className="text-base" />
                      </div>
                      <div className="transform group-hover:translate-x-1 transition-all duration-300">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-gray-900/80 group-hover:text-gray-900 
                            transition-colors duration-300">Smart Goals</p>
                          <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                            <span className="text-[10px]">✓</span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-gray-600/75 group-hover:text-gray-600 
                          transition-colors duration-300">AI-driven milestones</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workout Card */}
            <div className="absolute -right-16 bottom-32 hidden lg:block">
              <div className="animate-float-card-2">
                <div className="group relative transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 
                    rounded-lg blur-lg opacity-50 group-hover:opacity-75 group-hover:blur-xl transition-all duration-500">
                  </div>
                  <div className="relative bg-white/50 hover:bg-white/80 backdrop-blur-xl rounded-lg p-3.5 shadow-lg 
                    border border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 
                        flex items-center justify-center shadow-inner transform group-hover:scale-110 
                        group-hover:rotate-3 transition-all duration-300 overflow-hidden">
                        <AnimatedEmoji emoji="⚡" animationType="bounce" className="text-base" />
                      </div>
                      <div className="transform group-hover:translate-x-1 transition-all duration-300">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-gray-900/80 group-hover:text-gray-900 
                            transition-colors duration-300">Dynamic Training</p>
                          <div className="h-4 w-4 rounded-full bg-blue-100 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                            <span className="text-[10px]">↻</span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-gray-600/75 group-hover:text-gray-600 
                          transition-colors duration-300">Adapts to your progress</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Card */}
            <div className="absolute -left-8 bottom-48 hidden lg:block">
              <div className="animate-float-card-3">
                <div className="group relative transition-all duration-300 hover:scale-105">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 
                    rounded-lg blur-lg opacity-50 group-hover:opacity-75 group-hover:blur-xl transition-all duration-500">
                  </div>
                  <div className="relative bg-white/50 hover:bg-white/80 backdrop-blur-xl rounded-lg p-3.5 shadow-lg 
                    border border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                        flex items-center justify-center shadow-inner transform group-hover:scale-110 
                        group-hover:rotate-3 transition-all duration-300 overflow-hidden">
                        <AnimatedEmoji emoji="📈" animationType="spin" className="text-base" />
                      </div>
                      <div className="transform group-hover:translate-x-1 transition-all duration-300">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-gray-900/80 group-hover:text-gray-900 
                            transition-colors duration-300">Live Insights</p>
                          <div className="h-4 w-4 rounded-full bg-purple-100 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                            <span className="text-[10px]">⚡</span>
                          </div>
                        </div>
                        <p className="text-xs font-medium text-gray-600/75 group-hover:text-gray-600 
                          transition-colors duration-300">Real-time analytics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

