'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  shimmerWidth?: number
}

export function AnimatedShinyText({ 
  children, 
  className,
  shimmerWidth = 100,
  ...props 
}: AnimatedShinyTextProps) {
  return (
    <div 
      className={cn(
        "relative inline-flex overflow-hidden",
        className
      )} 
      {...props}
    >
      {children}
      <div 
        className="absolute inset-0 translate-x-[-100%] animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ width: `${shimmerWidth}%` }}
      />
    </div>
  )
}
