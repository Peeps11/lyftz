'use client'

import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_AQOwcgbIw9guCUSfkwa7JjlT4p3OxGPrAgNu0hcUC_3Q61GyMCr4cYk2c4Kice3w9z-q2h3-tmwtn4602iwUuf2F-HigWOHG7oDawJgoasIKr1INT3ViQhM.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Sobre mí</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Ciencia aplicada, <span className="text-primary">resultados reales</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Llevo más de <strong className="text-foreground">7 años</strong> en este mundo, 
                con certificaciones nacionales e internacionales en preparación física y dietética.
              </p>
              <p>
                Pero hubo un tiempo en que yo era el primero en hacerlo mal. Cardio en ayunas a las 6 de la mañana, 
                pollo con arroz cinco veces al día, planes de Instagram que prometían resultados en 30 días. 
                <strong className="text-foreground"> Agotado, sin progresar</strong>, preguntándome qué estaba haciendo mal.
              </p>
              <p>
                El problema no era mi esfuerzo. Era que esos planes no eran míos.
              </p>
              <p>
                Cuando aprendí a adaptar el método a mi vida real, no a la de un atleta profesional, todo cambió.
              </p>
              <p>
                <strong className="text-foreground">Eso es exactamente lo que hago contigo.</strong>
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div>
                <span className="block text-foreground font-bold text-lg">Badia</span>
                <span className="text-sm text-muted-foreground">Preparador físico | Dietista</span>
              </div>
              <Link href="#contacto" className="ml-auto text-primary hover:underline text-sm">
                Hablemos →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
