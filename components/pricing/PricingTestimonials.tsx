'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  planName: string;
  planGradient: string;
}

export default function PricingTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Fitness Enthusiast",
      image: "/testimonials/avatar-1.jpg",
      quote: "The Pro plan has completely transformed my fitness journey. The personalized workout plans and nutrition guidance are worth every penny.",
      rating: 5,
      planName: "Pro Plan",
      planGradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "Amateur Athlete",
      image: "/testimonials/avatar-2.jpg",
      quote: "Started with the Starter plan and saw great results. The basic features are perfect for beginners looking to establish a routine.",
      rating: 5,
      planName: "Starter Plan",
      planGradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Emma Thompson",
      role: "Professional Trainer",
      image: "/testimonials/avatar-3.jpg",
      quote: "The Elite plan's advanced features and 1-on-1 coaching have helped me achieve results I never thought possible. Absolutely worth the investment.",
      rating: 5,
      planName: "Elite Plan",
      planGradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8"
          >
            <span className="text-gray-100">Loved by</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Members
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            See what our community has to say about their experience.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient border */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/0 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-8 rounded-2xl bg-[#1A1A1C]/30 border border-white/[0.075] 
                group-hover:border-white/[0.15] transition-all duration-500">
                {/* Plan Badge */}
                <div className="mb-6">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                    bg-gradient-to-r ${testimonial.planGradient} text-white`}>
                    {testimonial.planName}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 