'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Instagram, Mail, MapPin } from "lucide-react"
import { DiscordIcon } from "@/components/icons/DiscordIcon"

export default function Footer() {
  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "AI Fitness", href: "#" },
        { name: "Martial Arts", href: "#" },
        { name: "Nutrition", href: "#" },
        { name: "Progress Tracking", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Partners", href: "#" }
      ]
    }
  ]

  const contactInfo = [
    { icon: Mail, text: "support@solveforge.com", href: "mailto:support@solveforge.com" },
    { icon: MapPin, text: "Borehamwood, United Kingdom", href: "#" }
  ]

  const socialLinks = [
    { icon: Github, href: "#", color: "hover:text-gray-100" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: DiscordIcon, href: "#", color: "hover:text-indigo-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" }
  ]

  return (
    <footer className="relative border-t border-white/[0.075]">
      <div className="absolute inset-0 bg-[#1A1A1C]/80 backdrop-blur-xl -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="inline-block">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-200">
                    SolveForge
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Transforming fitness through AI innovation. Our mission is to make personalized 
                fitness and martial arts training accessible to everyone.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-gray-400 hover:text-gray-200 
                        transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#1A1A1C] group-hover:bg-blue-500/10 
                        transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.text}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((column, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-200 mb-4">{column.title}</h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Column */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-200 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-2 rounded-lg bg-[#1A1A1C] text-gray-400 
                        ${social.color} transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.075] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SolveForge. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

