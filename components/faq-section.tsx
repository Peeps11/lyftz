'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mt-2 mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-pretty">
            Resolvemos las dudas más comunes antes de empezar.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="font-medium font-[family-name:var(--font-syne)] pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
