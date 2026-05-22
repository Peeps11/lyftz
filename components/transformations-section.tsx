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
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    quote: "En 4 meses baje 12 kg sin pasar hambre y sin dejar de comer con mi familia los fines de semana.",
    name: "Maria Garcia",
    meta: "32 anos - Perdio 12 kg",
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    quote: "Badia me diseno un plan de 3 dias a la semana y en 6 meses cambie mas que en 2 anos yendo al gym por mi cuenta.",
    name: "Carlos Lopez",
    meta: "38 anos - Gano 8 kg musculo",
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    quote: "Cuando tienes una duda a las 8 de la noche y recibes respuesta en minutos, eso marca la diferencia.",
    name: "Ana Martinez",
    meta: "27 anos - Perdio 9 kg",
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

        {/* Photos - Horizontal row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

        {/* Testimonials - Full width cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <p className="text-lg text-foreground leading-relaxed mb-6">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/30">
                  <Image 
                    src={testi.image} 
                    alt={testi.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-base font-medium text-foreground">{testi.name}</p>
                  <p className="text-sm text-muted-foreground">{testi.meta}</p>
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
