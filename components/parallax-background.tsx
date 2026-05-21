'use client'

import Image from 'next/image'
import { useParallax } from '@/hooks/use-parallax'

export function ParallaxBackground() {
  const scrollY = useParallax()
  
  // Calculate rotation based on scroll
  const rotateY = scrollY * 0.015
  const rotateX = Math.sin(scrollY * 0.001) * 8
  const scale = 1 + Math.sin(scrollY * 0.0005) * 0.05

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ perspective: '1500px' }}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      
      {/* 3D Rotating gym image */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspectiveOrigin: '50% 50%' }}
      >
        <div
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out',
            width: '140%',
            height: '140%',
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/vercel/share/v0-project/public/images/multipower-3d-y7ZGOc4ODzBvfUY29LfFxuvQdzq4o8.jpg"
            alt="Multipower machine"
            fill
            className="object-cover"
            style={{ 
              filter: 'brightness(0.7) contrast(1.1) saturate(0.9)',
            }}
            priority
          />
        </div>
      </div>

      {/* Subtle cyan glow overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,229,255,0.03) 0%, transparent 70%)",
        }}
      />
      
      {/* Gradient overlay for text readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.2) 30%, rgba(10,10,10,0.4) 70%, rgba(10,10,10,0.7) 100%)",
        }}
      />
    </div>
  )
}
