'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Clock, Dumbbell, Sparkles as SparklesIcon, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from "framer-motion"

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
        {/* Enhanced header section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-20 animate-on-scroll">
          <div className="lg:max-w-2xl mb-10 lg:mb-0">
            {/* Enhanced badge design */}
            <div className="inline-flex items-center mb-8 relative">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-gray-900/10 to-gray-800/10 
                  rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full 
                  bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/60 shadow-sm">
                  <span className="flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    Why Choose SolveForge?
                  </span>
                </div>
              </div>
            </div>

            {/* Enhanced title design */}
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-gray-900">
                  Engineered for
                </span>
                <br />
                <span className="inline-flex items-center">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                  <span className="ml-4 inline-block w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 
                    animate-pulse" />
                </span>
              </h2>
            </div>
          </div>

          {/* Fixed description alignment */}
          <div className="lg:max-w-xl lg:pt-16">
            <p className="text-gray-600 text-lg leading-relaxed text-left lg:text-right">
              Discover how our cutting-edge AI technology transforms complex challenges into elegant solutions, 
              tailored specifically to your needs and goals.
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

