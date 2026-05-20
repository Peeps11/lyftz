import Link from 'next/link'

const features = [
  {
    icon: '📹',
    title: 'Videollamada Inicial',
    description: 'Sesión de 30 minutos para establecer tus objetivos y conocer tu punto de partida.',
  },
  {
    icon: '🥗',
    title: 'Plan Nutricional',
    description: 'Totalmente adaptado a tus gustos, horarios y necesidades. Sin dietas imposibles.',
  },
  {
    icon: '💪',
    title: 'Plan de Entrenamiento',
    description: 'Diseñado a medida para maximizar tu rendimiento y estética corporal.',
  },
  {
    icon: '📱',
    title: 'App de Seguimiento',
    description: 'Lleva tu rutina, registros y videos de ejercicios siempre en tu bolsillo.',
  },
  {
    icon: '📊',
    title: 'Revisiones Semanales',
    description: 'Análisis de progreso para ajustar el plan y garantizar resultados.',
  },
  {
    icon: '💬',
    title: 'Soporte Diario',
    description: 'Resolución de dudas de forma directa y diaria por WhatsApp.',
  },
]

export function FeaturesSection() {
  return (
    <section id="incluye" className="py-24 px-[5%] bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Todo Incluido
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            QUÉ INCLUYE EL{' '}
            <em className="text-primary not-italic">PROGRAMA</em>
          </h2>
          <p className="text-muted-foreground max-w-[540px] leading-[1.7] font-light">
            Un paquete completo diseñado para darte todas las herramientas que necesitas para transformarte.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover relative p-7 rounded-[10px] border border-border bg-card"
            >
              {/* Icon */}
              <span className="text-[1.8rem] mb-4 block">{feature.icon}</span>

              {/* Content */}
              <h3 className="text-[1rem] font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-[0.88rem] text-muted-foreground leading-[1.7] font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="bg-[rgba(0,229,255,0.15)] border border-[rgba(0,229,255,0.3)] rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <strong className="font-display text-[1.6rem] tracking-[0.05em] text-primary block">
              PLAZAS LIMITADAS
            </strong>
            <span className="text-[0.9rem] text-muted-foreground">
              Solo trabajo con un número reducido de clientes para garantizar la calidad del servicio.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              {[...Array(7)].map((_, i) => (
                <span 
                  key={i} 
                  className={`w-3.5 h-3.5 rounded-full ${i < 5 ? 'bg-primary' : 'bg-muted border border-[rgba(0,229,255,0.3)]'}`} 
                />
              ))}
            </div>
            <span className="text-[0.8rem] text-muted-foreground ml-2">2 plazas libres</span>
          </div>
          <Link 
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[0.85rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px] hover:brightness-110 transition-all whitespace-nowrap"
          >
            Reservar Plaza
          </Link>
        </div>
      </div>
    </section>
  )
}
