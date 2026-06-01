'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const transformations = [
  {
    id: 1,
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_582321332445290689007263_y%20%281%29-jTw8HKPG20D5s80bGLJbEKnOmJ1ZiQ.jpg',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5832fsdfsdf445290689007263_y%20%281%29-8nkx34XcpiIfcd7WsawryREdD3TdHV.jpg',
  },
  {
    id: 2,
    before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%2013.59.26%20%281%29-2UYsq9G6erkZ5clK4kj4Go50kj5N9D.jpeg',
    after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-26%20at%2013.59.18%20%281%29-rh3sDJ2BeFXNXzzaeZNh0MzlXaYyOC.jpeg',
  },
]

const testimonials = [
  {
    quote: "Estoy muy contenta con el trato y la profesionalidad. Tanto la planificacion de la alimentacion como los entrenamientos estan adaptados a mi y a mis objetivos, y eso hace que todo sea mucho mas facil de seguir. Ademas, siempre esta disponible para resolver dudas y hacer ajustes cuando es necesario. Lo recomiendo totalmente a cualquiera que busque resultados de forma saludable y sostenible.",
  },
  {
    quote: "El mejor preparador fisico que he probado, destaca su predisposicion en todo, la gran variedad de comidas que te da te hace que no te saltes la dieta, nada de dietas pesadas. Un gran entreno el que te prepara, te lo explica punto por punto, con metodologias segun lo que te va a ir bien. Su motivacion hace que te mantengas enfocado. Lo recomiendo a todo el que quiera avanzar y no estancarse.",
  },
  {
    quote: "Badia super contenta con los resultados!!! El mejor preparador fitness.",
  },
  {
    quote: "Cuando tienes una duda a las 8 de la noche y recibes respuesta en minutos, eso marca la diferencia.",
  },
]

export function TransformationsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resultados" ref={sectionRef} className="py-24 px-[5%] bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-4">
            RESULTADOS <span className="text-primary">REALES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformaciones de clientes que decidieron dar el paso
          </p>
        </div>

        {/* Before/After Photos - 2 rows, each with before and after side by side */}
        <div className="space-y-8 mb-20">
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Before */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border/50 group">
                  <Image
                    src={item.before}
                    alt={`Antes - Cliente ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    ANTES
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-primary/30 group">
                  <Image
                    src={item.after}
                    alt={`Despues - Cliente ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-foreground">
                    DESPUES
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-20" />

        {/* Testimonials Header */}
        <div className="text-center mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h3 className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-4">
            LO QUE <span className="text-primary">DICEN</span>
          </h3>
        </div>

        {/* Testimonials - 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 p-8 rounded-xl border border-border bg-background/50 hover:border-primary/30 transition-colors"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-1 text-primary text-sm mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-base text-foreground leading-relaxed">
                &ldquo;{testi.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
