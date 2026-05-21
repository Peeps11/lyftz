'use client'

import Link from 'next/link'
import { Phone, Utensils, Dumbbell, Smartphone, BarChart3, MessageCircle, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Videollamada inicial',
    description: 'Antes de empezar, te conozco de verdad. Tus objetivos, tu historial, tu día a día.',
  },
  {
    icon: Utensils,
    title: 'Plan nutricional real',
    description: 'Adaptado a tus gustos, tus horarios y tu presupuesto. Sin alimentos raros.',
  },
  {
    icon: Dumbbell,
    title: 'Entrenamiento a medida',
    description: 'Diseñado para tu nivel, tu material disponible y tu tiempo real.',
  },
  {
    icon: Smartphone,
    title: 'App de seguimiento',
    description: 'Tus rutinas, registros y vídeos siempre en el bolsillo.',
  },
  {
    icon: BarChart3,
    title: 'Revisiones semanales',
    description: 'Analizamos tu progreso cada semana y ajustamos el plan.',
  },
  {
    icon: MessageCircle,
    title: 'Soporte diario',
    description: 'WhatsApp directo conmigo. Cualquier duda, estoy ahí.',
  },
]

export function FeaturesSection() {
  return (
    <section id="incluye" className="py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="mb-20 reveal">
          <h2 className="text-editorial-sm font-display uppercase mb-8">
            Todo lo que<br />
            <em className="text-accent-italic">necesitas</em>
          </h2>
          <p className="text-muted-foreground max-w-[500px] text-lg leading-relaxed">
            No solo un plan. Un sistema completo con el apoyo diario que hace que la gente llegue al final.
          </p>
        </div>

        {/* Horizontal scroll features on mobile, grid on desktop */}
        <div className="horizontal-scroll lg:grid lg:grid-cols-3 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal min-w-[280px] lg:min-w-0 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="border-t border-border pt-6 h-full">
                <feature.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner - editorial style */}
        <div className="reveal relative overflow-hidden">
          <div className="bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[0.7rem] tracking-[0.2em] uppercase opacity-70 mb-2 block">
                Plazas limitadas
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Solo acepto 10 clientes al mes
              </h3>
              <p className="opacity-80 text-sm">
                Para garantizar la atención que mereces. Actualmente: 6/10 ocupadas.
              </p>
            </div>
            <Link 
              href="#contacto"
              className="glow-effect inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-sm font-bold tracking-[0.1em] uppercase rounded-[4px] group shrink-0"
            >
              Reservar plaza
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
