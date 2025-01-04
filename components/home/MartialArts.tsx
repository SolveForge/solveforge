'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sword, Shield, Target, Zap, Medal, Users, Clock, Trophy, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function MartialArts() {
  const disciplines = [
    {
      name: "Karate",
      description: "Master the art of striking",
      icon: Sword,
      students: "2,000+",
      level: "Beginner to Black Belt",
      gradient: "from-blue-500/90 to-cyan-500/90"
    },
    {
      name: "Brazilian Jiu-Jitsu",
      description: "Ground fighting excellence",
      icon: Shield,
      students: "1,500+",
      level: "All levels welcome",
      gradient: "from-purple-500/90 to-pink-500/90"
    },
    {
      name: "Muay Thai",
      description: "The art of 8 limbs",
      icon: Target,
      students: "1,000+",
      level: "Beginner friendly",
      gradient: "from-orange-500/90 to-red-500/90"
    },
    {
      name: "Judo",
      description: "Master throws and grappling",
      icon: Zap,
      students: "800+",
      level: "Progressive learning",
      gradient: "from-emerald-500/90 to-green-500/90"
    }
  ]

  const features = [
    {
      icon: Medal,
      title: "Expert Instructors",
      description: "Learn from certified black belt masters"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive martial arts family"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Train at your own pace and time"
    },
    {
      icon: Trophy,
      title: "Regular Events",
      description: "Competitions and gradings"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full 
              bg-[#1A1A1C] border border-white/[0.075] shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
          >
            <div className="flex items-center gap-2">
              <span className="animate-spin-slow">🥋</span>
              <span className="text-xs font-medium text-gray-400">
                Martial Arts Training
              </span>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:leading-tight
              tracking-tight mb-8 mt-8"
          >
            <span className="text-gray-100">Discover Your</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Inner Warrior
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed"
          >
            Choose from multiple martial arts disciplines and embark on a journey of self-discovery,
            discipline, and mastery.
          </motion.p>
        </div>

        {/* Grid layout for disciplines and CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left side - Disciplines Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon
              return (
                <motion.div
                  key={discipline.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-[#1A1A1C]/50 backdrop-blur-sm rounded-2xl p-6 
                    border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${discipline.gradient} 
                      mb-4 text-white shadow-lg transform transition-all duration-300 
                      group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{discipline.name}</h3>
                    <p className="text-gray-400 mb-4">{discipline.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{discipline.students} students</span>
                      <span className="text-gray-500">{discipline.level}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right side - CTA Content */}
          <div className="relative lg:text-left">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="relative bg-[#1A1A1C]/60 backdrop-blur-sm rounded-2xl p-8 
                border border-white/[0.075] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-gray-400 
                    bg-[#1A1A1C]/80 p-2 rounded-lg inline-block transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span>Limited time offer</span>
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-200">
                  Start your martial arts journey today
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#1A1A1C] text-blue-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300">{feature.title}</h4>
                          <p className="text-xs text-gray-500">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white
                    hover:from-blue-600 hover:to-cyan-600 transition-all duration-300
                    shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35"
                >
                  Start Your Journey Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 