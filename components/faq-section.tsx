'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '¿Necesito material o ir al gimnasio obligatoriamente?',
    answer: 'No necesariamente. Puedo diseñar planes adaptados a entrenar en casa con material mínimo, en un gimnasio comercial, o incluso combinando ambos. El programa se adapta completamente a los recursos que tengas disponibles.',
  },
  {
    question: '¿Cuánto dura el compromiso mínimo?',
    answer: 'El compromiso mínimo es de 3 meses, ya que es el tiempo necesario para ver cambios significativos y establecer hábitos sostenibles.',
  },
  {
    question: '¿El plan de nutrición incluye alimentos raros o restrictivos?',
    answer: 'Para nada. El plan nutricional se basa en alimentos accesibles y que te gusten. No creo en dietas restrictivas ni en eliminar grupos de alimentos. El objetivo es crear un plan que puedas mantener a largo plazo.',
  },
  {
    question: '¿Qué pasa si no puedo entrenar algún día?',
    answer: 'La vida pasa, y el programa está diseñado para ser flexible. Si un día no puedes entrenar, simplemente me lo comunicas y ajustamos el plan. La consistencia a largo plazo es más importante que la perfección diaria.',
  },
  {
    question: '¿Cómo es el soporte por WhatsApp?',
    answer: 'Tendrás acceso directo a mí por WhatsApp para resolver cualquier duda sobre entrenamiento, nutrición o seguimiento. Respondo todos los días en horario establecido, garantizando que nunca te sientas solo en el proceso.',
  },
  {
    question: '¿Qué métodos de pago aceptáis?',
    answer: 'Aceptamos transferencia bancaria y pago con tarjeta. El pago se realiza de forma mensual por adelantado.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-[5%] bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            FAQ
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            PREGUNTAS{' '}
            <em className="text-primary not-italic">FRECUENTES</em>
          </h2>
          <p className="text-muted-foreground max-w-[540px] leading-[1.7] font-light">
            Resolvemos las dudas más comunes antes de empezar.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-[10px] overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-secondary p-6 cursor-pointer hover:bg-card transition-colors ${openIndex === index ? 'bg-card' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-start gap-4 text-[0.95rem] font-semibold text-foreground mb-2">
                <span>{faq.question}</span>
                <span className={`text-primary text-xl font-light flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              <div className={`text-[0.88rem] text-muted-foreground leading-[1.7] font-light overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
