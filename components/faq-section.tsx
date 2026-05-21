'use client'

import { useState } from 'react'

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

  return (
    <section id="faq" className="py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="mb-20 reveal">
          <h2 className="text-editorial-sm font-display uppercase mb-8">
            Preguntas<br />
            <em className="text-accent-italic">frecuentes</em>
          </h2>
        </div>

        {/* FAQ List - Editorial style with big numbers */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="reveal border-t border-border py-8 cursor-pointer group"
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex gap-8 items-start">
                {/* Number */}
                <span className="text-4xl md:text-5xl font-display font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors w-16 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    <span className={`text-primary text-2xl font-light shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>
                  <div className={`text-muted-foreground leading-relaxed overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
