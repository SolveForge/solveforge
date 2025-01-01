"use client"

import * as React from "react"

export default function Iphone15Pro({
  src,
  width = 280,
  height = 570,
  theme = 'dark',
}: {
  src: string
  width?: number
  height?: number
  theme?: 'dark' | 'light'
}) {
  const colors = {
    dark: {
      frame: 'bg-[#1B1B1F]',
      buttons: 'bg-[#2B2B2F]',
      island: 'bg-black',
      camera: 'bg-[#121212]'
    },
    light: {
      frame: 'bg-[#F5F5F7]',
      buttons: 'bg-[#E1E1E3]',
      island: 'bg-[#E1E1E3]',
      camera: 'bg-[#F5F5F7]'
    },
  }

  return (
    <div
      className="relative mx-auto"
      style={{
        width,
        height,
      }}
    >
      <div className="absolute inset-0">
        {/* Frame */}
        <div className={`absolute inset-0 rounded-[55px] ${colors[theme].frame} shadow-2xl`}>
          {/* Screen */}
          <div className="absolute left-[12px] right-[12px] top-[12px] bottom-[12px] overflow-hidden rounded-[45px] bg-white">
            <img
              src={src}
              className="h-full w-full object-cover"
              alt="App screenshot"
            />
          </div>

          {/* Dynamic Island */}
          <div className={`absolute left-[50%] top-[24px] h-[31px] w-[126px] -translate-x-[50%] rounded-[24px] ${colors[theme].island}`}>
            {/* Camera Dot */}
            <div className={`absolute right-[22px] top-[50%] -translate-y-[50%] h-[11px] w-[11px] rounded-full ${colors[theme].camera}`} />
          </div>

          {/* Side Button */}
          <div className={`absolute right-[-2px] top-[120px] h-[40px] w-[3px] rounded-l-sm ${colors[theme].buttons}`} />
          
          {/* Volume Buttons */}
          <div className={`absolute left-[-2px] top-[120px] h-[65px] w-[3px] rounded-r-sm ${colors[theme].buttons}`} />
          <div className={`absolute left-[-2px] top-[195px] h-[65px] w-[3px] rounded-r-sm ${colors[theme].buttons}`} />

          {/* Action Button */}
          <div className={`absolute left-[-2px] top-[85px] h-[25px] w-[3px] rounded-r-sm ${colors[theme].buttons}`} />
        </div>
      </div>
    </div>
  )
}
