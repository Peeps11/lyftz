import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-syne)] text-balance">
            TRANSFORMA TU
            <br />
            <span className="text-primary">CUERPO</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground text-pretty">
            Deja de perder el tiempo con planes genéricos. Consigue el físico que buscas 
            con una estrategia de entrenamiento y nutrición adaptada al 100% a tu vida, 
            con ciencia y seguimiento diario.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#contacto" className="relative">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect text-base px-8 py-6"
              >
                Empezar Asesoría
              </Button>
              {/* Arrow pointing to button */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                <ChevronDown className="w-5 h-5 text-primary animate-bounce" />
              </div>
            </Link>
            <Link href="#sobre-mi">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                Conocer Más
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
