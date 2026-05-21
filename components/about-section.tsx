'use client'

import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-32 px-[5%] relative overflow-hidden">
      {/* Large editorial text */}
      <div className="max-w-[1400px] mx-auto mb-20">
        <h2 className="text-editorial-sm font-display uppercase text-center reveal">
          <em className="text-accent-italic">Ciencia</em> aplicada,{' '}
          <em className="text-accent-italic">resultados</em> reales.
        </h2>
      </div>

      {/* Content with side images - editorial layout */}
      <div className="relative max-w-[1400px] mx-auto">
        {/* Left image - cropped to edge */}
        <div className="absolute left-[-5%] top-0 w-[25%] h-[70%] hidden xl:block reveal-left">
          <div className="relative h-full image-hover">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
              alt="Entrenamiento"
              fill
              className="object-cover grayscale-[30%]"
            />
          </div>
          <span className="block mt-3 text-[0.7rem] text-muted-foreground uppercase tracking-wider">Coach, 2024</span>
        </div>

        {/* Center content */}
        <div className="max-w-[700px] mx-auto px-4 xl:px-0">
          <div className="reveal">
            <p className="quote-editorial text-center mb-12">
              No importa <strong>dónde</strong> empieces, 
              lo que importa es <strong>cómo</strong> progresas desde ahí.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground leading-[1.9] reveal delay-200">
            <p>
              Llevo más de <strong className="text-foreground">7 años</strong> en este mundo, 
              con certificaciones nacionales e internacionales tanto en preparación física 
              como en dietética. Pero no siempre fue así.
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

          {/* Signature */}
          <div className="mt-12 pt-8 border-t border-border reveal delay-300">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-foreground font-display text-xl">Badia</span>
                <span className="text-[0.75rem] text-muted-foreground">NSCA-CPT · Dietista</span>
              </div>
              <Link 
                href="#contacto" 
                className="text-primary text-sm hover:underline"
              >
                Hablemos →
              </Link>
            </div>
          </div>
        </div>

        {/* Right image - cropped to edge */}
        <div className="absolute right-[-5%] bottom-0 w-[22%] h-[60%] hidden xl:block reveal-right">
          <div className="relative h-full image-hover">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/vercel/share/v0-project/public/images/gym-equipment-3LFvEUoYByUVwZTTJDBBy8EdceyWJ6.jpg"
              alt="Gym"
              fill
              className="object-cover grayscale-[40%]"
            />
          </div>
          <span className="block mt-3 text-[0.7rem] text-muted-foreground uppercase tracking-wider text-right">Training, 2024</span>
        </div>
      </div>
    </section>
  )
}
