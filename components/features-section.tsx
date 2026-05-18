import { Video, Utensils, Dumbbell, Smartphone, BarChart3, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Videollamada Inicial',
    description: 'Para establecer tus objetivos y conocer tu punto de partida.',
  },
  {
    icon: Utensils,
    title: 'Plan Nutricional',
    description: 'Totalmente adaptado a tus gustos, horarios y necesidades.',
  },
  {
    icon: Dumbbell,
    title: 'Plan de Entrenamiento',
    description: 'Diseñado a medida para maximizar tu rendimiento y estética.',
  },
  {
    icon: Smartphone,
    title: 'App Propia',
    description: 'Lleva tu rutina, registros y videos de ejercicios en tu bolsillo.',
  },
  {
    icon: BarChart3,
    title: 'Revisiones Semanales',
    description: 'Análisis de progreso para ajustar el plan y garantizar resultados.',
  },
  {
    icon: MessageCircle,
    title: 'Soporte Diario por WhatsApp',
    description: 'Resolución de dudas de forma directa y diaria conmigo.',
  },
]

export function FeaturesSection() {
  return (
    <section id="incluye" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Todo Incluido</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mt-2 mb-4">
            Qué Incluye el <span className="text-primary">Programa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un paquete completo diseñado para darte todas las herramientas que necesitas 
            para transformarte.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold font-[family-name:var(--font-syne)] mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
