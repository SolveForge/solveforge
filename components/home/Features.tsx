'use client'

import { Card, CardContent } from "@/components/ui/card"
import { 
  Brain, 
  Target, 
  Clock, 
  Dumbbell, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from "framer-motion"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { AnimatedEmoji } from "@/components/ui/animated-emoji"

export default function Features() {
  useScrollAnimation()

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smart Injury Management",
      description: "Our AI adapts your workouts and nutrition based on your injuries. Log your injuries to receive modified plans that promote recovery while maintaining fitness.",
      gradient: "from-blue-600/90 to-indigo-600/90",
      softGradient: "from-blue-900/20 via-indigo-900/10 to-transparent"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Deep Personalization",
      description: "Experience truly personalized fitness plans through our comprehensive questionnaire system. We analyze your goals, fitness level, equipment access, and preferences to create workouts that evolve with your progress.",
      color: "purple",
      gradient: "from-purple-600/90 to-pink-600/90",
      softGradient: "from-purple-50 via-pink-50/50 to-transparent"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Science-Based Training",
      description: "Access workouts built on proven sports science principles. Get detailed form guides and technique tips for each exercise, optimized for your goals while minimizing injury risk.",
      color: "emerald",
      gradient: "from-emerald-600/90 to-teal-600/90",
      softGradient: "from-emerald-50 via-teal-50/50 to-transparent"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Injury Recognition AI",
      description: "Our AI helps identify potential injuries through targeted questions about your symptoms. Get insights and recommendations on whether to modify activities or seek professional medical care. Note: Always consult healthcare professionals for serious concerns.",
      color: "rose",
      gradient: "from-rose-600/90 to-orange-600/90",
      softGradient: "from-rose-50 via-orange-50/50 to-transparent"
    }
  ]

  return (
    <section 
      id="features" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-96 pt-96"
    >
      <div className="container relative mx-auto max-w-7xl">
        {/* Badge and title section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-20">
          <div className="lg:max-w-2xl mb-10 lg:mb-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1.5 rounded-full 
                bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-2">
                <AnimatedEmoji emoji="✨" animationType="pulse" className="text-sm" />
                <AnimatedShinyText 
                  className="text-xs font-medium text-gray-300"
                  shimmerWidth={100}
                >
                  Discover Excellence
                </AnimatedShinyText>
              </div>
            </motion.div>

            {/* Title */}
            <div className="space-y-6 mt-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-100">Engineered for</span> <br />
                <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                Discover how our cutting-edge AI technology transforms complex challenges into elegant solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feature, index) => {
            const isWide = index === 0 || index === 3
            return (
              <div key={index} className={`${isWide ? 'lg:col-span-8' : 'lg:col-span-4'}`}>
                <Card className="group relative h-full animate-on-scroll overflow-hidden rounded-3xl 
                  border border-white/[0.075] bg-[#1A1A1C] transition-all duration-500
                  hover:border-white/[0.15] hover:shadow-2xl hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" 
                  />
                  
                  <CardContent className="relative p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} blur-xl opacity-20`} />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl 
                          bg-[#1A1A1C] border border-white/[0.075] transition-transform duration-500 
                          group-hover:scale-110 group-hover:shadow-lg">
                          <div className="text-white/90">
                            {feature.icon}
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-gray-200 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
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

