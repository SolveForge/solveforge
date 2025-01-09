'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/lib/supabase';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  User, Dumbbell, Calendar, Trophy, 
  Heart, Bell, Settings, LogOut 
} from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis'
import type Lenis from '@studio-freight/lenis'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Science', href: '#science' },
  { name: 'Pricing', href: '/pricing' }
];

export default function Header() {
  const { user, loading } = useUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lenis: Lenis | null = useLenis() ?? null;

  const handleDropdownOpenChange = useCallback((open: boolean) => {
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-[#0A0A0C]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Logo withBackground className="w-full h-full" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-gray-100 to-gray-300 
                bg-clip-text text-transparent">
                SolveForge
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex lg:items-center lg:gap-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-200
                  ${isActiveLink(item.href)
                    ? 'font-bold text-white'
                    : 'font-medium text-gray-300/80 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex lg:items-center lg:gap-4"
          >
            {!loading && (
              <>
                {user ? (
                  <DropdownMenu onOpenChange={handleDropdownOpenChange}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        className="group relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                          hover:from-blue-500/20 hover:to-purple-500/20 text-white px-4 py-2 text-sm 
                          font-medium rounded-xl transition-colors duration-300 border border-white/[0.05] 
                          backdrop-blur-xl"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 
                          to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-3">
                          <div className="relative flex-shrink-0">
                            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-purple-500 
                              rounded-full flex items-center justify-center text-white text-sm 
                              font-semibold uppercase">
                              {user.email?.[0]}
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 
                              bg-emerald-500 rounded-full border-2 border-[#1A1A1C]" />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="font-medium text-sm text-white">
                              {user.email?.split('@')[0]}
                            </span>
                            <span className="text-xs text-emerald-400">Online</span>
                          </div>
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="w-64 bg-[#1A1A1C] text-white border border-white/[0.05] shadow-xl
                        fixed z-[999] rounded-xl"
                      align="end"
                      sideOffset={8}
                    >
                      <div 
                        className="relative isolate bg-[#1A1A1C]" 
                        data-lenis-prevent
                      >
                        <div className="max-h-[calc(100vh-80px)] overflow-y-auto
                          [&::-webkit-scrollbar]:hidden
                          [&::-webkit-scrollbar]:w-0
                          [-ms-overflow-style:none]
                          [scrollbar-width:none]"
                        >
                          <DropdownMenuLabel className="flex items-center gap-3 px-3 py-2 border-b border-white/[0.05] sticky top-0 bg-[#1A1A1C] z-10">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 
                              rounded-full flex items-center justify-center">
                              {user.email?.[0]}
                            </div>
                            <div className="flex flex-col">
                              <p className="font-medium">{user.email?.split('@')[0]}</p>
                              <p className="text-xs text-gray-400">{user.email}</p>
                            </div>
                          </DropdownMenuLabel>
                          
                          <DropdownMenuGroup className="p-1">
                            <DropdownMenuItem asChild>
                              <Link href="/profile" className="flex items-center gap-2 cursor-pointer">
                                <User size={16} />
                                <span>Profile</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/workouts" className="flex items-center gap-2 cursor-pointer">
                                <Dumbbell size={16} />
                                <span>My Workouts</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/schedule" className="flex items-center gap-2 cursor-pointer">
                                <Calendar size={16} />
                                <span>Schedule</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/progress" className="flex items-center gap-2 cursor-pointer">
                                <Trophy size={16} className="text-yellow-500" />
                                <span>Progress</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/health" className="flex items-center gap-2 cursor-pointer">
                                <Heart size={16} className="text-red-400" />
                                <span>Health Stats</span>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>

                          <DropdownMenuSeparator className="bg-white/[0.05]" />
                          
                          <DropdownMenuGroup className="p-1">
                            <DropdownMenuItem asChild>
                              <Link href="/notifications" className="flex items-center gap-2 cursor-pointer">
                                <Bell size={16} />
                                <span>Notifications</span>
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
                                <Settings size={16} />
                                <span>Settings</span>
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>

                          <DropdownMenuSeparator className="bg-white/[0.05]" />
                          
                          <div className="p-1">
                            <DropdownMenuItem 
                              onClick={handleSignOut}
                              className="flex items-center gap-2 text-red-400 hover:text-red-300 
                                hover:bg-red-500/10 cursor-pointer"
                            >
                              <LogOut size={16} />
                              <span>Sign out</span>
                            </DropdownMenuItem>
                          </div>
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="relative text-gray-300 hover:text-white transition-colors duration-200 group px-4 py-2 
                        hover:bg-white/[0.02]"
                    >
                      <Link href="/signin">
                        <span className="relative z-10">Sign in</span>
                      </Link>
                    </Button>
                    <Link href="/signup">
                      <Button 
                        className="group relative bg-white/[0.05] hover:bg-white/[0.1]
                          text-white px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300
                          border border-white/[0.05] backdrop-blur-xl"
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Get Started</span>
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                hover:text-white hover:bg-white/[0.05] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0C]/95 backdrop-blur-xl border-t border-white/[0.05]"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base
                    ${isActiveLink(item.href)
                      ? 'font-bold text-white'
                      : 'font-medium text-gray-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-gray-300 hover:text-white">
                  Sign in
                </Button>
                <Button className="w-full bg-white/[0.05] hover:bg-white/[0.1] text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}