'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center px-[5%] pt-28 pb-16 lg:pt-32 relative overflow-hidden">
      {/* Editorial large text */}
      <div className="reveal max-w-[1400px] mx-auto w-full">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-primary">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
            Coaching personalizado
          </span>
        </div>
        
        <h1 className="text-editorial font-display uppercase mb-12">
          <span className="block reveal delay-100">Transforma tu</span>
          <span className="block reveal delay-200"><em className="text-accent-italic">cuerpo,</em> transforma</span>
          <span className="block reveal delay-300">tu <em className="text-accent-italic">vida.</em></span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          {/* Left - Quote & CTA */}
          <div className="reveal delay-400">
            <p className="quote-editorial mb-8 max-w-[500px]">
              Deja de perder tiempo con planes genéricos. 
              <strong>Ciencia aplicada</strong> a tu vida, 
              <strong>resultados reales</strong> sin sacrificar lo que amas.
            </p>
            
            <div className="flex items-center gap-6 flex-wrap">
              <Link 
                href="#contacto"
                className="glow-effect inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-[0.85rem] font-bold tracking-[0.12em] uppercase rounded-[4px] group"
              >
                Empezar ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
                Solo 5 plazas disponibles
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="reveal delay-500 flex gap-12 lg:justify-end">
            <div>
              <span className="block text-[3.5rem] lg:text-[4.5rem] font-display font-bold text-primary leading-none">+50</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Clientes</span>
            </div>
            <div>
              <span className="block text-[3.5rem] lg:text-[4.5rem] font-display font-bold text-foreground leading-none">7+</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Años exp.</span>
            </div>
            <div>
              <span className="block text-[3.5rem] lg:text-[4.5rem] font-display font-bold text-foreground leading-none">100%</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[0.7rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
