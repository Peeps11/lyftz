'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Esencial',
    price: '149',
    period: '/mes',
    description: 'Para quien quiere empezar con lo basico',
    features: [
      'Plan de entrenamiento personalizado',
      'Plan nutricional adaptado',
      'Revision quincenal',
      'Soporte por email',
    ],
    cta: 'Empezar',
    popular: false,
  },
  {
    name: 'Completo',
    price: '199',
    period: '/mes',
    description: 'El mas elegido. Seguimiento real.',
    features: [
      'Todo lo del plan Esencial',
      'Revisiones semanales',
      'Soporte WhatsApp diario',
      'Videollamadas mensuales',
      'Ajustes ilimitados',
    ],
    cta: 'Elegir plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: '299',
    period: '/mes',
    description: 'Atencion maxima y resultados rapidos',
    features: [
      'Todo lo del plan Completo',
      'Videollamadas semanales',
      'Respuesta prioritaria 24h',
      'Plan de suplementacion',
      'Analisis de bioimpedancia',
    ],
    cta: 'Contactar',
    popular: false,
  },
]

export function PricingSection() {
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
    <section id="precios" ref={sectionRef} className="py-24 px-[5%] bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-4">
            PRECIOS <span className="text-primary">CLAROS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin sorpresas. Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`scroll-reveal opacity-0 translate-y-8 transition-all duration-700 p-8 rounded-xl border ${
                plan.popular 
                  ? 'border-primary bg-primary/5 relative' 
                  : 'border-border bg-secondary/20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Mas popular
                </span>
              )}
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-colors group ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          Todos los planes incluyen videollamada inicial gratuita. Compromiso minimo de 3 meses.
        </p>
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
