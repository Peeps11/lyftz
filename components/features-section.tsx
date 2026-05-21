import Link from 'next/link'
import { Phone, Utensils, Dumbbell, Smartphone, BarChart3, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Videollamada inicial',
    description: 'Antes de empezar, te conozco de verdad. Tus objetivos, tu historial, tu día a día. El punto de partida lo marcamos juntos.',
  },
  {
    icon: Utensils,
    title: 'Plan nutricional real',
    description: 'Adaptado a tus gustos, tus horarios y tu presupuesto. Come lo que te gusta. Sin alimentos raros. Sin pasar hambre.',
  },
  {
    icon: Dumbbell,
    title: 'Plan de entrenamiento a medida',
    description: 'Diseñado para tu nivel, tu material disponible y tu tiempo real. Con o sin gimnasio. Con o sin mucho tiempo libre.',
  },
  {
    icon: Smartphone,
    title: 'App propia de seguimiento',
    description: 'Tus rutinas, tus registros y los vídeos de los ejercicios siempre en el bolsillo. Sin hojas de Excel, sin líos.',
  },
  {
    icon: BarChart3,
    title: 'Revisiones semanales',
    description: 'Analizamos tu progreso cada semana y ajustamos el plan. Por eso nunca te estancas: siempre vas hacia delante.',
  },
  {
    icon: MessageCircle,
    title: 'Yo contigo cada día',
    description: 'Soporte diario por WhatsApp. Cualquier duda, ajuste o bajón motivacional — estoy ahí. No esperas al próximo entreno.',
  },
]

export function FeaturesSection() {
  return (
    <section id="incluye" className="py-24 px-[5%] bg-background/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Qué incluye
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            Todo lo que necesitas<br />para{' '}
            <em className="text-primary not-italic">no fallar esta vez</em>
          </h2>
          <p className="text-muted-foreground max-w-[540px] leading-[1.7] font-light">
            No solo un plan. Un sistema completo con el apoyo diario que hace que la gente llegue al final.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover reveal relative p-7 rounded-[10px] border border-border bg-card"
            >
              {/* Icon */}
              <feature.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />

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
        <div className="reveal bg-[rgba(0,229,255,0.15)] border border-[rgba(0,229,255,0.3)] rounded-[10px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <strong className="font-display text-[1.6rem] tracking-[0.05em] text-primary block">
              Solo acepto 10 clientes nuevos al mes
            </strong>
            <span className="text-[0.9rem] text-muted-foreground">
              Para garantizar la atención que mereces, limito mi disponibilidad. Actualmente quedan 4 plazas.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-muted border border-[rgba(0,229,255,0.3)]" />
                <span className="w-3.5 h-3.5 rounded-full bg-muted border border-[rgba(0,229,255,0.3)]" />
                <span className="w-3.5 h-3.5 rounded-full bg-muted border border-[rgba(0,229,255,0.3)]" />
                <span className="w-3.5 h-3.5 rounded-full bg-muted border border-[rgba(0,229,255,0.3)]" />
              </div>
              <span className="text-[0.8rem] text-muted-foreground ml-2">6/10</span>
            </div>
            <Link 
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[0.85rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px] hover:brightness-110 transition-all whitespace-nowrap"
            >
              Reservar mi plaza →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
