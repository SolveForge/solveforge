'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { AnimatedEmoji } from "@/components/ui/animated-emoji";

export default function PricingCTA() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          {/* Background gradient effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#1A1A1C] rounded-3xl" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r 
              from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r 
              from-rose-500/20 via-orange-500/20 to-amber-500/20 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative rounded-3xl border border-white/[0.075]">
            <div className="px-6 py-12 sm:p-16 md:p-20 lg:p-24">
              <div className="max-w-3xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center px-3 py-1.5 rounded-full 
                    bg-white/[0.05] border border-white/[0.075] shadow-lg mb-8"
                >
                  <div className="flex items-center gap-2">
                    <AnimatedEmoji emoji="🚀" animationType="bounce" className="text-sm" />
                    <span className="text-xs font-medium text-gray-300">
                      Limited Time Offer
                    </span>
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8"
                >
                  <span className="text-gray-100">Start Your</span>{" "}
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 
                    bg-clip-text text-transparent">
                    Fitness Journey
                  </span>{" "}
                  <span className="text-gray-100">Today</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
                >
                  Join thousands of satisfied members who have transformed their lives 
                  with our personalized fitness programs. Get{" "}
                  <span className="text-gray-200">30% off</span> your first 3 months.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                      text-white hover:opacity-90 px-8"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white/[0.075] hover:border-white/[0.15] text-gray-200"
                  >
                    Talk to Sales
                  </Button>
                </motion.div>

                {/* Guarantee text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8 text-sm text-gray-400"
                >
                  30-day money-back guarantee • No credit card required
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 