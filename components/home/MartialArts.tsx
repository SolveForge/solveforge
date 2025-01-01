'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sword, Shield, Target, Zap, Medal, Users, Clock, Trophy } from 'lucide-react'
import Image from 'next/image'

export default function MartialArts() {
  const disciplines = [
    {
      name: "Karate",
      description: "Master the art of striking",
      icon: Sword,
      students: "2,000+",
      level: "Beginner to Black Belt"
    },
    {
      name: "Brazilian Jiu-Jitsu",
      description: "Ground fighting excellence",
      icon: Shield,
      students: "1,500+",
      level: "All levels welcome"
    },
    {
      name: "Muay Thai",
      description: "The art of 8 limbs",
      icon: Target,
      students: "1,000+",
      level: "Beginner friendly"
    },
    {
      name: "Judo",
      description: "Master throws and grappling",
      icon: Zap,
      students: "800+",
      level: "Progressive learning"
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
    <section className="relative py-24 bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Discover Your Inner Warrior
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Choose from multiple martial arts disciplines and embark on a journey of self-discovery,
            discipline, and mastery.
          </motion.p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {disciplines.map((discipline, index) => {
            const Icon = discipline.icon
            return (
              <motion.div
                key={discipline.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-orange-500/10 
                  rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative bg-white border border-gray-200/50 p-6 rounded-2xl
                  backdrop-blur-sm hover:border-red-500/30 transition-all duration-300
                  shadow-sm hover:shadow-md">
                  <Icon className="h-8 w-8 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{discipline.name}</h3>
                  <p className="text-gray-600 mb-4">{discipline.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-500">{discipline.students} students</span>
                    <span className="text-gray-500">{discipline.level}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full 
                  bg-red-500/10 mb-4">
                  <Icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-6
              rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300
              text-lg font-medium shadow-lg shadow-red-500/25 hover:shadow-xl 
              hover:shadow-red-500/35"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 