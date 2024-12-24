'use client'

import React from 'react'
import { cn } from "@/lib/utils"

interface AnimatedEmojiProps {
  emoji: string
  className?: string
  animationType?: 'pulse' | 'bounce' | 'spin'
}

export function AnimatedEmoji({ emoji, className, animationType = 'pulse' }: AnimatedEmojiProps) {
  const animations = {
    pulse: 'animate-[emoji-pulse_3s_ease-in-out_infinite]',
    bounce: 'animate-[emoji-bounce_3s_ease-in-out_infinite]',
    spin: 'animate-[emoji-spin_2s_ease-in-out_alternate_infinite]'
  }

  return (
    <span className={cn(
      "inline-block transform transition-transform duration-500",
      animations[animationType],
      className
    )}>
      {emoji}
    </span>
  )
} 