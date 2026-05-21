'use client'

import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
              alt="Coach Badia"
              fill
              className="object-cover"
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
                con certificaciones nacionales e internacionales tanto en preparación física 
                como en dietética.
              </p>
              <p>
                Yo mismo pasé años haciendo las cosas mal, siguiendo planes genéricos 
                que prometían mucho y entregaban nada. Cuando encontré la forma correcta 
                de hacerlo — <strong className="text-foreground">adaptada a mi vida, no a la de otro</strong> — 
                todo cambió.
              </p>
              <p>
                No voy a darte una dieta imposible ni un plan copiado de internet. 
                Voy a diseñar contigo un método que quepa en tu vida real.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div>
                <span className="block text-foreground font-bold text-lg">Badia</span>
                <span className="text-sm text-muted-foreground">NSCA-CPT / Dietista</span>
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
