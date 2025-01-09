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
  achievement?: string;
}

export default function PricingTestimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Working Professional",
      image: "/testimonials/avatar-1.jpg",
      quote: "The Pro plan's AI tracking has transformed my workouts. The personalized adjustments to my routine based on my progress are incredible.",
      rating: 5,
      planName: "Pro Plan",
      planGradient: "from-blue-500 via-purple-500 to-pink-500",
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      name: "Marcus Rodriguez",
      role: "Fitness Beginner",
      image: "/testimonials/avatar-2.jpg",
      quote: "Started with the Starter plan and it was perfect for learning proper form. The AI feedback on my movements helped prevent injuries.",
      rating: 5,
      planName: "Starter Plan",
      planGradient: "from-emerald-500 to-teal-500",
      achievement: "Achieved First Pull-up"
    },
    {
      name: "Emma Thompson",
      role: "Marathon Runner",
      image: "/testimonials/avatar-3.jpg",
      quote: "The Elite plan's 1-on-1 coaching combined with AI analysis of my running form has significantly improved my race times. Worth every penny.",
      rating: 5,
      planName: "Elite Plan",
      planGradient: "from-orange-500 to-rose-500",
      achievement: "Completed First Marathon"
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
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8"
          >
            <span className="text-gray-100">Trusted by</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Fitness Enthusiasts
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Join thousands of people who have transformed their fitness journey with our AI-powered guidance.
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
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Gradient border */}
              <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${testimonial.planGradient} 
                opacity-0 group-hover:opacity-20 blur-sm transition-all duration-700`} />

              {/* Content */}
              <div className="relative p-8 rounded-2xl bg-[#1A1A1C]/60 backdrop-blur-sm border border-white/[0.075] 
                group-hover:border-white/[0.15] transition-all duration-500">
                {/* Plan Badge */}
                <div className="mb-6">
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                    bg-gradient-to-r ${testimonial.planGradient} text-white/90 shadow-lg`}>
                    {testimonial.planName}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Achievement */}
                {testimonial.achievement && (
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-px flex-grow bg-gradient-to-r from-white/[0.1] to-transparent" />
                    <span className="text-xs font-medium text-gray-400">
                      {testimonial.achievement}
                    </span>
                    <div className="h-px flex-grow bg-gradient-to-l from-white/[0.1] to-transparent" />
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white/[0.05]">
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