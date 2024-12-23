'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#smartbite', label: 'SmartBite' },
    { href: '#howitworks', label: 'How it Works' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0 w-[180px]">
            <a 
              href="/" 
              className="relative text-[26px] font-extrabold font-['Inter'] tracking-[-0.02em]
                bg-gradient-to-r from-gray-800 from-0% via-gray-700 via-50% to-gray-600 to-100%
                bg-clip-text text-transparent"
            >
              SolveForge
            </a>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex w-[180px] justify-end">
            <Button variant="default" className="shadow-lg hover:shadow-xl transition-shadow">
              Get Started
            </Button>
          </div>

          <div className="flex md:hidden flex-1 justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" className="w-full shadow-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

