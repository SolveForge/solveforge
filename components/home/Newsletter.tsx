'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Sparkle, NewspaperIcon } from 'lucide-react'

export default function Newsletter() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // newsletter signup logic
  }

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-white/[0.075] rounded-2xl p-10 sm:p-12 
            bg-[#1A1A1C]/50 backdrop-blur-sm shadow-[0_8px_32px_rgb(0,0,0,0.4)]"
        >
          <div className="grid lg:grid-cols-[1fr,1fr] gap-16 items-start">
            {/* Left side - Newsletter Form */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                bg-[#1A1A1C] border border-white/[0.075] text-gray-400 text-sm font-medium mb-6">
                <NewspaperIcon className="h-4 w-4" />
                <span>Newsletter</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-2">
                Stay Updated with <br />
                <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  SolveForge
                </span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Get the latest fitness tips, AI insights, and exclusive offers
                delivered straight to your inbox.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#1A1A1C]/60 border-white/[0.075] focus:border-white/[0.15] 
                      focus:ring-0 h-12 pl-4 pr-10 text-gray-200 placeholder:text-gray-500"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white h-12
                    hover:from-blue-600 hover:to-cyan-600 transition-all duration-300
                    shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35"
                >
                  Subscribe Now
                </Button>
              </form>
              
              {/* Features */}
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Sparkle className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-gray-400">Weekly fitness insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-blue-400" />
                  <span className="text-xs text-gray-400">No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>

            {/* Right side - Loading Cards */}
            <div className="relative mt-12">
              {/* Background shadow for all cards */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />
              
              <div className="space-y-3">
                {[
                  { bgColor: 'bg-[#1A1A1C]/60' },
                  { bgColor: 'bg-[#1A1A1C]/40' },
                  { bgColor: 'bg-[#1A1A1C]/20' }
                ].map((card, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`${card.bgColor} rounded-xl p-4 border border-white/[0.075]`}
                  >
                    <div className="space-y-2.5">
                      <div className="h-2.5 bg-white/10 rounded-full w-[88%] animate-pulse-slow" />
                      <div className="h-2.5 bg-white/5 rounded-full w-[75%] animate-pulse-slow delay-75" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

