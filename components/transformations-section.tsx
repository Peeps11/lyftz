'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const transformations = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TheJohnKnee%20%20What%20a%20difference%20a%20year%20can%20do%20_TransformationTuesday-cRxnRamIU2X9tWeS0ZmgSRHjHvvL2W.jpg',
    label: 'Cliente 01',
    year: '2024',
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feel%20Light%2C%20Confident%20%26%20Beautiful%20in%20Your%20Own%20Body%20Again%20%E2%9C%A8%EF%B8%8F%20%281%29-2F9nMgiamgQ6iK5PJTep0VGjEfL28A.jpg',
    label: 'Cliente 02',
    year: '2024',
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%282%29%20%281%29-flyzuP4UGTSguyrTYyaA1XKjud6Lui.jpg',
    label: 'Cliente 03',
    year: '2023',
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29%20%281%29-5smxl0jVZ5slAaAh8b6Uqi7XJnwbyA.jpg',
    label: 'Cliente 04',
    year: '2023',
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
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="resultados" className="py-32">
      {/* Editorial header */}
      <div className="px-[5%] mb-16 max-w-[1400px] mx-auto reveal">
        <h2 className="text-editorial-sm font-display uppercase">
          <em className="text-accent-italic">Resultados</em> reales
        </h2>
      </div>

      {/* Horizontal scroll photos - editorial style like Lando's helmets */}
      <div className="relative mb-20">
        {/* Scroll controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Photos container */}
        <div 
          ref={scrollRef}
          className="horizontal-scroll px-[5%] gap-6"
        >
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="reveal image-hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-[300px] md:w-[350px] aspect-[3/4] rounded-lg overflow-hidden border border-border">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="350px"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="text-sm text-primary">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="max-w-[1400px] mx-auto px-[5%] mb-20">
        <div className="border-t border-border" />
      </div>

      {/* Testimonials - editorial style */}
      <div className="px-[5%] max-w-[1400px] mx-auto">
        <div className="mb-12 reveal">
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-primary block mb-4">
            Testimonios
          </span>
          <h3 className="text-editorial-sm font-display uppercase">
            Lo que <em className="text-accent-italic">dicen</em>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="reveal border-t border-border pt-8"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-1 text-primary text-xs mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="quote-editorial text-lg mb-8">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                  {testi.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testi.name}</p>
                  <p className="text-xs text-muted-foreground">{testi.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
