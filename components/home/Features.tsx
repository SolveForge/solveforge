'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Clock, Dumbbell, Sparkles as SparklesIcon, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from "framer-motion"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export default function Features() {
  useScrollAnimation()

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Injury Management",
      description: "Our AI adapts your workouts and nutrition based on your injuries. Log your injuries to receive modified plans that promote recovery while maintaining fitness. Get personalized alternative exercises and recovery timelines that help you stay active safely.",
      color: "blue",
      gradient: "from-blue-600/90 to-indigo-600/90",
      softGradient: "from-blue-50 via-indigo-50/50 to-transparent",
      hoverAccent: "group-hover:text-blue-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Deep Personalization",
      description: "Experience truly personalized fitness plans through our comprehensive questionnaire system. We analyze your goals, fitness level, equipment access, and preferences to create workouts that evolve with your progress.",
      color: "purple",
      gradient: "from-purple-600/90 to-pink-600/90",
      softGradient: "from-purple-50 via-pink-50/50 to-transparent",
      hoverAccent: "group-hover:text-purple-600"
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Science-Based Training",
      description: "Access workouts built on proven sports science principles. Get detailed form guides and technique tips for each exercise, optimized for your goals while minimizing injury risk.",
      color: "emerald",
      gradient: "from-emerald-600/90 to-teal-600/90",
      softGradient: "from-emerald-50 via-teal-50/50 to-transparent",
      hoverAccent: "group-hover:text-emerald-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Injury Recognition AI",
      description: "Our AI helps identify potential injuries through targeted questions about your symptoms. Get insights and recommendations on whether to modify activities or seek professional medical care. Note: Always consult healthcare professionals for serious concerns.",
      color: "rose",
      gradient: "from-rose-600/90 to-orange-600/90",
      softGradient: "from-rose-50 via-orange-50/50 to-transparent",
      hoverAccent: "group-hover:text-rose-600"
    }
  ]

  return (
    <section 
      id="features" 
      className="relative py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_100px,rgba(0,0,0,0.02),transparent)]" />
      
      <div className="container relative mx-auto max-w-7xl">
        {/* Enhanced badge and title section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-20 animate-on-scroll">
          <div className="lg:max-w-2xl mb-10 lg:mb-0">
            {/* Badge design - With emoji */}
            <div className="relative inline-flex items-center px-3 sm:px-5 py-1.5 rounded-full 
              bg-gray-100/80 text-gray-700 text-sm font-medium border border-gray-200/30 shadow-sm mb-8">
              
              {/* Content wrapper */}
              <div className="relative z-10 flex items-center gap-2">
                {/* Emoji with subtle animation */}
                <span className="animate-subtle-float">✨</span>

                {/* Text */}
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 
                  bg-clip-text text-transparent">
                  Discover Excellence
                </span>
              </div>
            </div>

            {/* Title - Matching Hero style exactly */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight lg:leading-tight
                text-gray-900 tracking-tight">
                Engineered for <br className="hidden sm:block" />
                <span className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
                Discover how our cutting-edge AI technology transforms complex challenges into elegant solutions, 
                tailored specifically to your needs and goals.
              </p>
            </div>
          </div>

          {/* Right side description */}
          <div className="lg:max-w-xl lg:pt-16">
            <p className="text-gray-600 text-lg leading-relaxed text-left lg:text-right">
              Our AI-powered platform delivers personalized fitness solutions that adapt and grow with you, 
              ensuring optimal results at every step of your journey.
            </p>
          </div>
        </div>

        {/* Refined grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isWide = index === 0 || index === 3
            return (
              <div key={index} className={`${isWide ? 'lg:col-span-8' : 'lg:col-span-4'}`}>
                <Card className="group relative h-full animate-on-scroll overflow-hidden rounded-3xl 
                  border-0 bg-white/60 backdrop-blur-sm transition-all duration-500
                  hover:shadow-2xl hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 150}ms` }}>
                  
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.softGradient} opacity-100`} />
                  
                  {/* Content */}
                  <CardContent className="relative p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon container */}
                      <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-20`} />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl 
                          bg-white shadow-md transition-transform duration-500 group-hover:scale-110 
                          group-hover:shadow-lg">
                          <div className={`text-gradient bg-gradient-to-br ${feature.gradient} bg-clip-text`}>
                            {feature.icon}
                          </div>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${feature.hoverAccent}`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Learn more link */}
                    <div className="mt-4 flex justify-end">
                      <span className={`inline-flex items-center gap-2 text-sm font-medium 
                        opacity-0 transform translate-x-4 transition-all duration-500
                        group-hover:opacity-100 group-hover:translate-x-0 ${feature.hoverAccent}`}>
                        Learn More 
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

