'use client'

import { useParallax } from "@/hooks/use-parallax"

export function ParallaxBackground() {
  const scrollY = useParallax()

  const translateY = scrollY * 0.3
  const scale = 1.05 + scrollY * 0.0001
  const rotate = scrollY * 0.003

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute top-[-10%] left-[-10%] right-[-10%] bottom-[-10%]"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/vercel/share/v0-project/public/images/gym-equipment-3LFvEUoYByUVwZTTJDBBy8EdceyWJ6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
          willChange: "transform",
          filter: "brightness(0.55) contrast(1.15) saturate(0.7)",
        }}
      />
      
      {/* Dark gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0"
        style={{
          background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.85) 100%)",
        }}
      />
      
      {/* Cyan accent glow in top-left area */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 15%, rgba(0,229,255,0.12) 0%, transparent 45%)",
        }}
      />
    </div>
  )
}
