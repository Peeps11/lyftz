'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-sm text-muted-foreground">Plazas limitadas</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="text-sm text-muted-foreground">Solo 5 disponibles</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display">
          TRANSFORMA TU
          <br />
          <span className="text-primary">CUERPO</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Deja de perder el tiempo con planes genéricos. Consigue el físico que buscas 
          con una estrategia de entrenamiento y nutrición adaptada al 100% a tu vida, 
          con ciencia y seguimiento diario.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="#contacto">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-base px-8 py-6"
            >
              Empezar Asesoría
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 pt-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">+50</p>
            <p className="text-sm text-muted-foreground">Clientes</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold">7+</p>
            <p className="text-sm text-muted-foreground">Años exp.</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
    </section>
  )
}
