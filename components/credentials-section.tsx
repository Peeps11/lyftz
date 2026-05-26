'use client'

import { Trophy, GraduationCap } from 'lucide-react'

const titulos = [
  "Campeón de Barcelona Junior 2024 — Mens Physique",
  "Campeón Promesas de Catalunya Junior 2024 — Mens Physique",
  "3º Catalunya 2024",
  "4º España 2024",
  "3º España 2026 — Classic Physique y Classic Bodybuilding",
  "Atleta Internacional — Selección Española FEFF",
  "Competidor federado IFBB",
]

const formacion = [
  "Técnico Superior en Dietética y Nutrición",
  "+7 años de experiencia en preparación física competitiva",
]

export function CredentialsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Trayectoria</span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display mt-2">
            <span className="text-primary">Credenciales</span>
          </h2>
        </div>

        {/* Quote */}
        <p className="text-center text-muted-foreground italic max-w-3xl mx-auto mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          &ldquo;Mi formación no viene solo de libros. Viene de años compitiendo al más alto nivel — preparaciones reales, cuerpo propio como laboratorio, y resultados sobre el escenario.&rdquo;
        </p>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Títulos deportivos */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-xl border border-border bg-secondary/50">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Títulos Deportivos
            </h3>
            <ul className="space-y-4">
              {titulos.map((titulo, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{titulo}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Formación */}
          <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 p-6 rounded-xl border border-border bg-secondary/50">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formación
            </h3>
            <ul className="space-y-4">
              {formacion.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
