'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate different transform values based on scroll
  const translateY = scrollY * 0.3
  const scale = 1 + scrollY * 0.0002
  const rotate = scrollY * 0.01

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
        }}
      >
        <Image
          src="/images/multipower-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          priority
          quality={75}
        />
      </div>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    </div>
  )
}
