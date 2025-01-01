'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function ScrollProvider({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: document.querySelector('[data-scroll-container]') as HTMLElement,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        touchInertiaMultiplier: 35,
      }
    })

    return () => {
      scroll.destroy()
    }
  }, [])

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
} 