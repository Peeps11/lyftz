'use client'

import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    question: '¿Necesito ir al gimnasio?',
    answer: 'No. El plan se diseña según tu material disponible. Gimnasio, casa, o solo peso corporal. Lo que importa es la constancia, no dónde lo haces.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer: 'El precio varía según la duración y seguimiento. Lo comentamos en la videollamada inicial gratuita. Sin compromiso.',
  },
  {
    question: '¿Cuánto tiempo hasta ver resultados?',
    answer: 'La mayoría empieza a notar cambios en las primeras 4-6 semanas. Resultados significativos en 3-4 meses.',
  },
  {
    question: '¿Qué compromiso mínimo hay?',
    answer: 'Trabajamos con mínimo 3 meses. Los cambios reales llevan tiempo. No vendo soluciones milagro.',
  },
  {
    question: '¿Por qué no una app?',
    answer: 'Las apps no conocen tu historial, lesiones ni gustos. Yo sí. La diferencia está en la personalización real.',
  },
  {
    question: '¿Y si no puedo entrenar un día?',
    answer: 'Nada. Me escribes y ajustamos. Flexibilidad real es parte del método.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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
    <section id="faq" ref={sectionRef} className="py-20 px-[5%] bg-background">
      <div className="max-w-[900px] mx-auto">
        {/* Header - smaller, consistent */}
        <div className="mb-10 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Preguntas frecuentes
          </h2>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 border border-border rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-sm font-medium text-foreground">
                  {faq.question}
                </h3>
                <span className={`text-primary text-lg font-light shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              <div className={`text-xs text-muted-foreground leading-relaxed overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}>
                {faq.answer}
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
