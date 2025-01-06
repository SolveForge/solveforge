'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do the subscription plans work?",
      answer: "Our subscription plans are billed monthly and can be cancelled at any time. Once subscribed, you'll get immediate access to all features included in your chosen plan. You can upgrade, downgrade, or cancel your subscription from your account settings."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes! You can switch between plans at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, your new rate will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 7-day free trial on our Pro plan, giving you full access to test out our premium features. No credit card is required to start your trial, and you can cancel anytime during the trial period."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All payments are processed securely through our payment provider."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied with our service, simply contact our support team within 30 days of your purchase for a full refund."
    },
    {
      question: "Do you offer team or family plans?",
      answer: "Yes! We offer special rates for families and teams. Contact our sales team for custom pricing options that fit your group's needs."
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
            <span className="text-gray-100">Frequently Asked</span>{" "}
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to know about our pricing and plans.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-200
                  ${openIndex === index 
                    ? 'bg-[#1A1A1C]/60 border-white/[0.15] shadow-lg' 
                    : 'bg-[#1A1A1C]/30 border-white/[0.075] hover:border-white/[0.15]'}`}
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-lg font-medium text-gray-200">{faq.question}</h3>
                  <div className={`ml-4 flex-shrink-0 transition-transform duration-200
                    ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                  >
                    <Plus className={`h-5 w-5 ${openIndex === index ? 'text-gray-200' : 'text-gray-400'}`} />
                  </div>
                </div>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 