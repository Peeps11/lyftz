'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const transformations = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TheJohnKnee%20%20What%20a%20difference%20a%20year%20can%20do%20_TransformationTuesday-cRxnRamIU2X9tWeS0ZmgSRHjHvvL2W.jpg',
    name: 'Cliente 1',
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feel%20Light%2C%20Confident%20%26%20Beautiful%20in%20Your%20Own%20Body%20Again%20%E2%9C%A8%EF%B8%8F%20%281%29-2F9nMgiamgQ6iK5PJTep0VGjEfL28A.jpg',
    name: 'Cliente 2',
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%282%29%20%281%29-flyzuP4UGTSguyrTYyaA1XKjud6Lui.jpg',
    name: 'Cliente 3',
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29%20%281%29-5smxl0jVZ5slAaAh8b6Uqi7XJnwbyA.jpg',
    name: 'Cliente 4',
  },
]

const testimonials = [
  {
    initials: 'MG',
    quote: "En 4 meses bajé 12 kg sin pasar hambre y sin dejar de comer con mi familia los fines de semana.",
    name: "María G.",
    meta: "32 años",
  },
  {
    initials: 'CL',
    quote: "Badia me diseñó un plan de 3 días a la semana y en 6 meses cambié más que en 2 años yendo al gym por mi cuenta.",
    name: "Carlos L.",
    meta: "38 años",
  },
  {
    initials: 'AL',
    quote: "Cuando tienes una duda a las 8 de la noche y recibes respuesta en minutos, eso marca la diferencia.",
    name: "Ana L.",
    meta: "27 años",
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
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-xs tracking-[0.2em] uppercase text-primary mb-4 block">Resultados</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Transformaciones reales
          </h2>
        </div>

        {/* Photos Grid - 2 rows, 2 columns */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-16">
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-16" />

        {/* Testimonials Header */}
        <div className="mb-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-xs tracking-[0.2em] uppercase text-primary mb-4 block">Testimonios</span>
          <h3 className="text-2xl font-display font-bold text-foreground">
            Lo que dicen
          </h3>
        </div>

        {/* Testimonials - smaller text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 p-5 rounded-xl border border-border bg-background/50"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-1 text-primary text-[10px] mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-semibold text-primary">
                  {testi.initials}
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">{testi.name}</p>
                  <p className="text-[10px] text-muted-foreground">{testi.meta}</p>
                </div>
              </div>
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
