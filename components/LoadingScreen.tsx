'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/icons/Logo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Create a simple event emitter for loading state
const loadingEmitter = {
  listeners: new Set<(isLoading: boolean) => void>(),
  emit(isLoading: boolean) {
    this.listeners.forEach(listener => listener(isLoading));
  },
  subscribe(listener: (isLoading: boolean) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
};

// Hook to access loading state and provide delay for page animations
export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldStartPageAnimation, setShouldStartPageAnimation] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setShouldStartPageAnimation(false);
    
    // Prevent scrolling when loading
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    const timer = setTimeout(() => {
      loadingEmitter.emit(false);
      setIsLoading(false);
      // Re-enable scrolling
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      
      setTimeout(() => {
        setShouldStartPageAnimation(true);
      }, 500);
    }, 1500);

    return () => {
      clearTimeout(timer);
      // Ensure scrolling is re-enabled on cleanup
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [pathname]);

  return { isLoading, shouldStartPageAnimation };
}

export default function LoadingScreen() {
  const { isLoading } = usePageLoading();

  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0A0A0C]"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-16 w-16"
            >
              <Logo withBackground className="w-full h-full" />
            </motion.div>
            
            {/* Square Ripple Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-lg border-2 border-white/20"
            />
            
            {/* Loading Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -bottom-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
