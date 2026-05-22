'use client'

import { useState } from 'react'
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react'
import Link from 'next/link'

export function ContactSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    objetivo: '',
    experiencia: '',
    inversion: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.nombre && formData.apellido && formData.edad && formData.telefono
  const isStep2Valid = formData.objetivo
  const isStep3Valid = formData.experiencia
  const isStep4Valid = formData.inversion

  const objetivos = [
    { label: 'Perder grasa' },
    { label: 'Ganar músculo' },
    { label: 'Mejorar rendimiento' },
    { label: 'Recomposición' },
  ]

  const experiencias = [
    { label: 'Nunca he entrenado' },
    { label: 'Menos de 1 año' },
    { label: '1-3 años' },
    { label: 'Más de 3 años' },
  ]

  const inversiones = [
    { label: 'Sí, estoy listo/a para invertir en mi cambio', value: 'si' },
    { label: 'Prefiero más información primero', value: 'info' },
  ]

  return (
    <section id="contacto" className="py-24 px-[5%] bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-display mb-4">
            PRIMERA LLAMADA <span className="text-primary">GRATIS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin compromiso. En 30 minutos vemos dónde estás, a dónde quieres llegar y si puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Benefits */}
          <div>
            <div className="space-y-6">
              {[
                'Rellena el formulario y te contacto en menos de 24h',
                'Coordinamos la videollamada a tu horario',
                'Sin letra pequeña, sin tarjeta',
                'Si no puedo ayudarte, te lo digo con honestidad',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 border-t border-border pt-6">
                  <span className="text-2xl font-display font-bold text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="text-center py-16 border border-border rounded-xl bg-background/50">
                {formData.inversion === 'si' ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">¡Perfecto!</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Reserva tu videollamada gratuita ahora
                    </p>
                    <Link 
                      href="https://calendly.com/nutritionbadia/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-base font-bold tracking-wider uppercase rounded-full hover:brightness-110 transition-all"
                    >
                      Reservar en Calendly
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">¡Sin problema!</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Escríbeme por WhatsApp y resuelvo todas tus dudas
                    </p>
                    <Link 
                      href="https://wa.me/34603812155"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 text-base font-bold tracking-wider uppercase rounded-full hover:brightness-110 transition-all"
                    >
                      Contactar por WhatsApp
                      <MessageCircle className="w-5 h-5" />
                    </Link>
                  </>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-border rounded-xl bg-background/50">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3, 4].map((s) => (
                    <div 
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${step >= s ? 'bg-primary' : 'bg-border'}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-3">{step}/4</span>
                </div>

                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-xl font-display font-bold mb-4">Tus datos</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Nombre"
                        className="w-full bg-transparent border-b-2 border-border py-3 text-base text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="text"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange('apellido', e.target.value)}
                        placeholder="Apellido"
                        className="w-full bg-transparent border-b-2 border-border py-3 text-base text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="Edad"
                        className="w-full bg-transparent border-b-2 border-border py-3 text-base text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="Teléfono"
                        className="w-full bg-transparent border-b-2 border-border py-3 text-base text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                      className="w-full bg-primary text-primary-foreground py-4 text-base font-bold tracking-wider uppercase rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                      Continuar
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-xl font-display font-bold mb-4">Tu objetivo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {objetivos.map((obj) => (
                        <button
                          key={obj.label}
                          type="button"
                          onClick={() => handleInputChange('objetivo', obj.label)}
                          className={`px-4 py-4 text-base rounded-xl border-2 transition-all ${
                            formData.objetivo === obj.label
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {obj.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border-2 border-border text-muted-foreground py-4 text-base tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!isStep2Valid}
                        className="flex-1 bg-primary text-primary-foreground py-4 text-base font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                      >
                        Continuar
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="text-xl font-display font-bold mb-4">Tu experiencia entrenando</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {experiencias.map((exp) => (
                        <button
                          key={exp.label}
                          type="button"
                          onClick={() => handleInputChange('experiencia', exp.label)}
                          className={`px-4 py-4 text-base rounded-xl border-2 transition-all ${
                            formData.experiencia === exp.label
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {exp.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border-2 border-border text-muted-foreground py-4 text-base tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        disabled={!isStep3Valid}
                        className="flex-1 bg-primary text-primary-foreground py-4 text-base font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                      >
                        Continuar
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-5">
                    <h3 className="text-xl font-display font-bold mb-2">Último paso</h3>
                    <p className="text-base text-muted-foreground mb-6">
                      El servicio de coaching personalizado tiene un coste mensual. ¿Estás preparado para invertir en ti?
                    </p>
                    <div className="space-y-4">
                      {inversiones.map((inv) => (
                        <button
                          key={inv.value}
                          type="button"
                          onClick={() => handleInputChange('inversion', inv.value)}
                          className={`w-full px-6 py-5 text-base rounded-xl border-2 transition-all text-left ${
                            formData.inversion === inv.value
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {inv.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 border-2 border-border text-muted-foreground py-4 text-base tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={!isStep4Valid}
                        className="flex-1 bg-primary text-primary-foreground py-4 text-base font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                      >
                        Enviar
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
