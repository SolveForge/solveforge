'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

interface PricingTier {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  highlighted?: boolean;
  gradient?: string;
  badge?: string;
}

export default function PricingTiers() {
  const [isYearly, setIsYearly] = useState(false);
  const [shake, setShake] = useState(false);

  const handleYearlyClick = () => {
    setIsYearly(true);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const tiers: PricingTier[] = [
    {
      name: "Starter",
      price: {
        monthly: "$9",
        yearly: "$90"
      },
      description: "Perfect for those just beginning their fitness journey",
      features: [
        "Personalized workout plans",
        "Basic nutrition guidance",
        "Progress tracking",
        "Email support",
        "Access to mobile app",
        "Weekly check-ins",
        "Basic analytics"
      ],
      gradient: "from-emerald-500 to-teal-500",
      badge: "Best Value"
    },
    {
      name: "Pro",
      price: {
        monthly: "$19",
        yearly: "$190"
      },
      description: "For dedicated fitness enthusiasts seeking optimal results",
      features: [
        "Everything in Starter",
        "Advanced workout customization",
        "Detailed nutrition planning",
        "Priority support",
        "Video form analysis",
        "Custom meal plans",
        "Weekly progress reports",
        "Advanced goal setting"
      ],
      highlighted: true,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      badge: "Most Popular"
    },
    {
      name: "Elite",
      price: {
        monthly: "$39",
        yearly: "$390"
      },
      description: "The ultimate fitness experience with maximum support",
      features: [
        "Everything in Pro",
        "1-on-1 coaching sessions",
        "24/7 chat support",
        "Personalized mobility work",
        "Recovery protocols",
        "Advanced analytics",
        "Custom supplement guides",
        "Priority feature access"
      ],
      gradient: "from-orange-500 to-rose-500",
      badge: "Ultimate"
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-32 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex items-center p-1 rounded-full 
              bg-[#1A1A1C]/60 border border-white/[0.075] backdrop-blur-sm
              shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/[0.1] 
              transition-all duration-300 mb-4"
          >
            {/* Background Slider */}
            <motion.div
              initial={false}
              animate={{
                x: isYearly ? "calc(100% - 4px)" : "0%"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-y-1 left-1 w-[calc(50%-2px)] bg-gradient-to-r 
                from-blue-500/90 via-purple-500/90 to-pink-500/90 
                rounded-full shadow-lg"
            />

            <button
              onClick={() => setIsYearly(false)}
              className="relative w-[100px] px-5 py-2 text-sm font-medium rounded-full 
                transition-colors duration-200 z-10"
            >
              <motion.span
                animate={{ color: !isYearly ? "#fff" : "#94A3B8" }}
                className="relative flex items-center justify-center gap-2"
              >
                Monthly
              </motion.span>
            </button>
            <div className="relative">
              <button
                onClick={handleYearlyClick}
                className="relative w-[100px] px-5 py-2 text-sm font-medium rounded-full 
                  transition-colors duration-200 z-10"
              >
                <motion.span
                  animate={{ color: isYearly ? "#fff" : "#94A3B8" }}
                  className="relative flex items-center justify-center gap-2"
                >
                  Yearly
                </motion.span>
              </button>
              
              {/* Savings Indicator */}
              <AnimatePresence>
                {isYearly && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, x: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: 10
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.5, 
                      x: 0 
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }}
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                      <motion.span
                        animate={shake ? {
                          rotate: [0, -10, 10, -10, 10, 0],
                          transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                          }
                        } : {}}
                        className="inline-block text-xs leading-none"
                      >
                        ✨
                      </motion.span>
                      <span>Save 20%</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Animated Text Container */}
          <div className="w-full max-w-sm h-8 relative overflow-hidden">
            <motion.div
              initial={false}
              animate={{ y: isYearly ? "-50%" : "0%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="h-8 flex items-center justify-center">
                <p className="text-sm text-gray-400">
                  Maximum flexibility with no commitment
                </p>
              </div>
              <div className="h-8 flex items-center justify-center">
                <p className="text-sm text-gray-400">
                  Best value with 20% savings
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-end relative z-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group h-full ${
                tier.highlighted ? 'md:h-[calc(100%+4rem)] md:-translate-y-16' : ''
              }`}
            >
              {/* Subtle gradient border */}
              <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${tier.gradient} 
                opacity-0 group-hover:opacity-20 blur-sm transition-all duration-700`} 
              />

              {/* Card Content */}
              <div className={`relative h-full rounded-2xl p-8 
                ${tier.highlighted 
                  ? 'bg-[#1A1A1C]/80 backdrop-blur-sm shadow-xl' 
                  : 'bg-[#1A1A1C]/40'} 
                border border-white/[0.075] group-hover:border-white/[0.1]
                transition-all duration-700 flex flex-col`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium
                      bg-gradient-to-r ${tier.gradient} 
                      text-white/90 shadow-xl flex items-center gap-1.5`}
                    >
                      <Sparkles className="h-3 w-3" />
                      {tier.badge}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-200">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-100">
                        {isYearly ? tier.price.yearly : tier.price.monthly}
                      </span>
                      <span className="text-gray-400 font-medium">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Subtle Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-white/[0.05] via-white/[0.05] to-transparent my-6" />

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 group/item">
                        <div className={`flex-shrink-0 p-1 rounded-full 
                          group-hover/item:bg-gradient-to-r ${tier.gradient} 
                          opacity-75 group-hover/item:opacity-100
                          transition-all duration-500`}>
                          <Check className="h-4 w-4 text-gray-400
                            group-hover/item:text-white/90 transition-colors duration-500" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover/item:text-gray-300 
                          transition-colors duration-500">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full group/button relative overflow-hidden mt-auto
                      ${tier.highlighted 
                        ? 'bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-500/90 text-white hover:opacity-95' 
                        : 'bg-[#1A1A1C] border border-white/[0.075] hover:border-white/[0.1] text-gray-200'}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 
                        group-hover/button:translate-x-0.5" />
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tier.gradient} 
                      opacity-0 group-hover/button:opacity-20 transition-opacity duration-500`} 
                    />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 