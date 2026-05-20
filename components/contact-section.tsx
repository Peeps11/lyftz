'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Calendar } from 'lucide-react'

export function ContactSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    objetivo: '',
    presupuesto: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.nombre && formData.email && formData.telefono && formData.edad
  const isStep2Valid = formData.objetivo
  const isStep3Valid = formData.presupuesto

  const objetivos = ['Perder grasa', 'Ganar músculo', 'Recomposición', 'Competir']

  return (
    <section id="contacto" className="py-24 px-[5%] bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        {/* Left Content */}
        <div>
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Empieza Hoy
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            ¿LISTO PARA{' '}
            <em className="text-primary not-italic">TRANSFORMARTE</em>?
          </h2>
          <p className="text-muted-foreground max-w-[400px] leading-[1.7] font-light mb-6">
            Completa el formulario y reserva tu videollamada inicial gratuita de 30 minutos.
          </p>

          <ul className="flex flex-col gap-3 mt-6">
            {[
              'Sin compromiso inicial',
              'Respuesta en menos de 24h',
              'Plan 100% personalizado',
              'Soporte diario incluido',
            ].map((item) => (
              <li key={item} className="text-[0.88rem] text-muted-foreground flex items-center gap-2">
                <span className="text-primary font-bold text-[0.8rem]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-[10px] p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.15)] border-2 border-primary flex items-center justify-center mx-auto mb-6 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">¡Solicitud Enviada!</h3>
              <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                Me pondré en contacto contigo en las próximas 24 horas para confirmar tu cita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      s < step ? 'bg-primary opacity-50' : s === step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
                <span className="text-[0.75rem] text-[#555550] tracking-[0.1em] uppercase ml-2">
                  Paso <span className="text-primary">{step}</span> de 3
                </span>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Datos de contacto</h3>
                  <p className="text-[0.85rem] text-muted-foreground mb-6">Para poder ponerme en contacto contigo.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Nombre</label>
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Edad</label>
                      <input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="25"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid}
                    className="w-full bg-primary text-primary-foreground py-4 text-[0.88rem] font-bold tracking-[0.12em] uppercase rounded-[4px] hover:brightness-110 hover:-translate-y-[1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2"
                  >
                    Continuar →
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Tu objetivo</h3>
                  <p className="text-[0.85rem] text-muted-foreground mb-6">¿Qué quieres conseguir?</p>

                  <div className="grid grid-cols-2 gap-3">
                    {objetivos.map((obj) => (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => handleInputChange('objetivo', obj)}
                        className={`px-4 py-3 text-[0.85rem] rounded-[4px] border transition-all text-center ${
                          formData.objetivo === obj
                            ? 'border-primary text-primary bg-[rgba(0,229,255,0.15)]'
                            : 'border-border text-muted-foreground bg-muted hover:border-primary hover:text-primary'
                        }`}
                      >
                        {obj}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-transparent border border-border text-muted-foreground py-3 text-[0.82rem] tracking-[0.08em] uppercase rounded-[4px] hover:border-muted-foreground hover:text-foreground transition-all"
                    >
                      ← Atrás
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
                      className="flex-1 bg-primary text-primary-foreground py-3 text-[0.88rem] font-bold tracking-[0.12em] uppercase rounded-[4px] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continuar →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Compromiso</h3>
                  <p className="text-[0.85rem] text-muted-foreground mb-6">¿Estás dispuesto a invertir más de 200€ en tu cambio físico?</p>

                  <div className="grid grid-cols-2 gap-3">
                    {['Sí', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleInputChange('presupuesto', opt)}
                        className={`px-6 py-4 text-lg rounded-[4px] border transition-all ${
                          formData.presupuesto === opt
                            ? 'border-primary text-primary bg-[rgba(0,229,255,0.15)]'
                            : 'border-border text-muted-foreground bg-muted hover:border-primary hover:text-primary'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Calendly section */}
                  {formData.presupuesto === 'Sí' && (
                    <div className="p-6 rounded-[10px] border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.05)] space-y-4 mt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[rgba(0,229,255,0.2)] flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Agenda tu llamada gratuita</h4>
                          <p className="text-[0.85rem] text-muted-foreground">Videollamada de 30 minutos</p>
                        </div>
                      </div>
                      <p className="text-[0.85rem] text-muted-foreground leading-[1.7]">
                        En esta llamada analizaremos tu situación y te explicaré cómo puedo ayudarte.
                      </p>
                      <a 
                        href="https://calendly.com/nutritionbadia/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[4px] bg-primary text-primary-foreground font-bold tracking-[0.1em] uppercase text-[0.85rem] hover:brightness-110 transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        Reservar en Calendly
                      </a>
                    </div>
                  )}

                  {formData.presupuesto === 'No' && (
                    <div className="p-6 rounded-[10px] border border-border bg-muted/50 mt-6">
                      <p className="text-muted-foreground text-[0.9rem] leading-[1.7]">
                        Entiendo. Por ahora no tengo opciones disponibles para ese presupuesto, pero puedes seguirme en redes sociales donde comparto contenido gratuito.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 bg-transparent border border-border text-muted-foreground py-3 text-[0.82rem] tracking-[0.08em] uppercase rounded-[4px] hover:border-muted-foreground hover:text-foreground transition-all"
                    >
                      ← Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={!isStep3Valid}
                      className="flex-1 bg-primary text-primary-foreground py-3 text-[0.88rem] font-bold tracking-[0.12em] uppercase rounded-[4px] hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
