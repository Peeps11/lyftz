'use client'

import { useParallax } from "@/hooks/use-parallax"

export function ParallaxBackground() {
  const scrollY = useParallax()

  // Ajusta estos valores para más o menos intensidad
  const translateY = scrollY * 0.3          // traslación vertical
  const scale = 1 + scrollY * 0.0001        // escala muy sutil
  const rotate = scrollY * 0.008            // rotación muy sutil

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-[-10%] w-[120%] h-[120%]"
        style={{
          backgroundImage: "url('/images/multipower-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
          willChange: "transform",
          filter: "brightness(0.35)",
        }}
      />
      {/* Overlay con gradiente cyan para mantener la estética */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,229,255,0.05) 0%, rgba(10,10,10,0.85) 100%)",
        }}
      />
    </div>
  )
}
