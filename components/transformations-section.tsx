'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const transformations = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TheJohnKnee%20%20What%20a%20difference%20a%20year%20can%20do%20_TransformationTuesday-cRxnRamIU2X9tWeS0ZmgSRHjHvvL2W.jpg',
    alt: 'Transformación física masculina',
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Feel%20Light%2C%20Confident%20%26%20Beautiful%20in%20Your%20Own%20Body%20Again%20%E2%9C%A8%EF%B8%8F%20%281%29-2F9nMgiamgQ6iK5PJTep0VGjEfL28A.jpg',
    alt: 'Transformación física femenina',
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%282%29%20%281%29-flyzuP4UGTSguyrTYyaA1XKjud6Lui.jpg',
    alt: 'Transformación física femenina',
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20%281%29%20%281%29-5smxl0jVZ5slAaAh8b6Uqi7XJnwbyA.jpg',
    alt: 'Transformación física masculina',
  },
]

const testimonials = [
  {
    initials: 'MG',
    quote: "Llevaba 3 años probando cosas sin resultado. En 4 meses con Badia bajé 12 kg sin pasar hambre y sin dejar de comer con mi familia los fines de semana.",
    name: "María G.",
    meta: "32 años",
  },
  {
    initials: 'CL',
    quote: "Trabajo 10 horas al día y pensaba que no tenía tiempo. Badia me diseñó un plan de 3 días a la semana y en 6 meses cambié más que en 2 años yendo al gym por mi cuenta.",
    name: "Carlos L.",
    meta: "38 años",
  },
  {
    initials: 'AL',
    quote: "Lo que más valoro es el WhatsApp diario. Cuando tienes una duda a las 8 de la noche y recibes respuesta en minutos, eso marca la diferencia.",
    name: "Ana L.",
    meta: "27 años",
  },
]

export function TransformationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section id="resultados" className="py-24 px-[5%] bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Resultados reales
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] text-foreground">
            Transformaciones que{' '}
            <em className="text-primary not-italic">hablan por sí solas</em>
          </h2>
        </div>

        {/* Transformations Grid - RESULTS FIRST */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {transformations.map((item) => (
            <div
              key={item.id}
              className="reveal relative rounded-[10px] border border-border bg-card overflow-hidden hover:border-[rgba(0,229,255,0.3)] transition-all duration-300 group"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mb-16">
          <div className="relative overflow-hidden rounded-[10px]">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="rounded-[10px] border border-border bg-card overflow-hidden">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border mb-16" />

        {/* Testimonials Header */}
        <div className="mb-8">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Lo que dicen
          </span>
          <h3 className="font-display text-[clamp(1.8rem,2.5vw,2.5rem)] tracking-[0.03em] leading-[1.05] text-foreground">
            Personas que{' '}
            <em className="text-primary not-italic">confiaron</em>
          </h3>
        </div>

        {/* Testimonials Grid - REVIEWS SECOND */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <div key={index} className="reveal bg-card border border-border rounded-[10px] p-7">
              <div className="text-primary text-[0.9rem] tracking-[0.1em] mb-4">★★★★★</div>
              <p className="text-[0.95rem] text-muted-foreground leading-[1.7] italic font-light mb-6">
                &ldquo;{testi.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted border border-[rgba(0,229,255,0.3)] flex items-center justify-center text-[0.85rem] font-semibold text-primary">
                  {testi.initials}
                </div>
                <div>
                  <p className="text-[0.9rem] font-medium text-foreground">{testi.name}</p>
                  <p className="text-[0.78rem] text-[#555550]">{testi.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
