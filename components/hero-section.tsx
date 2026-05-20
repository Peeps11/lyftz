'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-[5%] pt-28 pb-16 lg:pt-32 lg:pb-16 gap-8 lg:gap-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-[rgba(0,229,255,0.04)] to-transparent pointer-events-none hidden lg:block" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.16em] uppercase text-primary border border-[rgba(0,229,255,0.3)] px-3 py-1.5 rounded-[2px] mb-6">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot" />
          Plazas limitadas · Solo 4 disponibles
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(3.2rem,5.5vw,5.5rem)] leading-[0.95] tracking-[0.02em] text-foreground mb-6">
          Para de<br />
          perder tiempo<br />
          con planes que<br />
          <em className="text-primary not-italic">no funcionan</em>
        </h1>

        {/* Subtitle */}
        <p className="text-[1.05rem] text-muted-foreground max-w-[440px] leading-[1.7] mb-8 font-light">
          Coaching online 100% personalizado para personas que quieren resultados reales
          <strong className="text-foreground font-medium"> sin dietas de hambre</strong> ni horas interminables en el gym.
          Ciencia aplicada a tu vida, no a la vida de otro.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-[0.88rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px] hover:brightness-110 hover:-translate-y-[2px] transition-all group"
          >
            Quiero mi videollamada gratuita
            <ArrowRight className="w-4 h-4 group-hover:translate-x-[3px] transition-transform" />
          </Link>
          <Link 
            href="#sobre-mi"
            className="inline-flex items-center gap-1.5 text-muted-foreground text-[0.85rem] no-underline hover:text-foreground transition-colors"
          >
            Conocer más ↓
          </Link>
        </div>

        {/* Note */}
        <p className="mt-6 text-[0.78rem] text-[#555550] flex items-center gap-1.5">
          <span className="text-primary font-bold">✓</span>
          Sin compromiso · Te respondo en menos de 24h
        </p>
      </div>

      {/* Visual */}
      <div className="relative flex justify-center items-center order-first lg:order-last">
        <div className="relative w-full max-w-[460px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
            alt="Badia — Coach LYFTZ"
            width={460}
            height={580}
            className="w-full rounded-[10px] grayscale-[20%] contrast-[1.05]"
            priority
          />
          {/* Overlay border */}
          <div className="absolute inset-0 rounded-[10px] border border-[rgba(0,229,255,0.3)] pointer-events-none" />
          
          {/* Badge */}
          <div className="absolute -bottom-6 -left-4 lg:-left-6 bg-card border border-border rounded-[10px] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-[rgba(0,229,255,0.15)] rounded-full flex items-center justify-center text-xl">
              🏅
            </div>
            <div>
              <strong className="block text-lg text-primary">NSCA-CPT</strong>
              <span className="text-[0.75rem] text-muted-foreground">Certificado internacionalmente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
