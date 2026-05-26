'use client'

import { useEffect, useRef } from 'react'
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
    <section id="incluye" ref={sectionRef} className="py-24 px-[5%] bg-background">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-xs tracking-[0.2em] uppercase text-primary mb-4 block">Qué incluye</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-muted-foreground max-w-[500px]">
            No solo un plan. Un sistema completo con el apoyo diario que hace que la gente llegue al final.
          </p>
        </div>

        {/* Features Grid - 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 group p-6 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Plazas limitadas - sutil, integrado */}
        <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-xl border border-border bg-secondary/20">
          <div>
            <p className="text-sm font-medium text-foreground">Maximo 10 clientes activos al mes</p>
            <p className="text-xs text-muted-foreground">Para garantizar atencion personalizada real</p>
          </div>
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Reservar plaza
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
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
