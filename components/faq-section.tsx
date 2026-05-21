'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Necesito ir al gimnasio obligatoriamente?',
    answer: 'No. El plan de entrenamiento se diseña según tu material disponible. Puedes entrenar en un gimnasio completo, en casa con material básico, o incluso solo con tu peso corporal. Lo que importa es la constancia, no dónde lo haces.',
  },
  {
    question: '¿Cuánto cuesta el coaching?',
    answer: 'El precio varía según la duración y el nivel de seguimiento. Lo comentamos en la videollamada inicial gratuita, donde también veo si puedo ayudarte y qué opción encaja mejor con tu situación. Sin compromiso.',
  },
  {
    question: '¿En cuánto tiempo veré resultados?',
    answer: 'Depende de tu punto de partida y tu objetivo, pero la mayoría de clientes empieza a notar cambios visibles en las primeras 4-6 semanas. Resultados significativos suelen llegar en 3-4 meses con constancia.',
  },
  {
    question: '¿Qué compromiso mínimo hay?',
    answer: 'Trabajamos con un mínimo de 3 meses porque los cambios reales llevan tiempo. No vendo soluciones milagro. Si buscas resultados en 2 semanas, no soy tu entrenador. Si buscas un cambio real y duradero, hablemos.',
  },
  {
    question: '¿Por qué no usar una app o YouTube?',
    answer: 'Las apps y YouTube son geniales para el conocimiento general, pero no conocen tu historial, tus lesiones, tus horarios ni tus gustos. Yo sí. La diferencia entre un plan genérico y uno personalizado es exactamente la diferencia entre el progreso que llevas y el que querrías tener.',
  },
  {
    question: '¿Qué pasa si un día no puedo entrenar?',
    answer: 'Absolutamente nada. La vida pasa. Me escribes por WhatsApp y ajustamos. El objetivo es construir un hábito sostenible, no castigarte por ser humano. Flexibilidad real es parte del método.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-[5%] bg-background/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            Todo lo que te estás<br />preguntando{' '}
            <em className="text-primary not-italic">ahora mismo</em>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[10px] overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-secondary p-8 cursor-pointer hover:bg-card transition-colors ${openIndex === index ? 'bg-card' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-start gap-4 text-[0.95rem] font-semibold text-foreground mb-2">
                <span>{faq.question}</span>
                <span className={`text-primary text-[1.3rem] font-light flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              <div className={`text-[0.88rem] text-muted-foreground leading-[1.7] font-light overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-60 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
