'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function ContactSection() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    disponibilidad: '',
    trabajo: '',
    objetivo: '',
    experiencia: '',
    antes: '',
    lesion: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.nombre && formData.email && formData.telefono
  const isStep2Valid = formData.objetivo

  const objetivos = [
    { label: 'Perder grasa' },
    { label: 'Ganar músculo' },
    { label: 'Mejorar rendimiento' },
    { label: 'Recomposición' },
  ]

  return (
    <section id="contacto" className="py-32 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Editorial header */}
        <div className="mb-16 reveal">
          <h2 className="text-editorial-sm font-display uppercase mb-8">
            Primera llamada,<br />
            <em className="text-accent-italic">100% gratis</em>
          </h2>
          <p className="text-muted-foreground max-w-[500px] text-lg leading-relaxed">
            Sin compromiso. En 30 minutos vemos dónde estás, a dónde quieres llegar y si puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Benefits */}
          <div className="reveal delay-200">
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
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal delay-300">
            {isSubmitted ? (
              <div className="text-center py-12 border border-border rounded-lg">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-6 text-primary text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">¡Recibido!</h3>
                <p className="text-muted-foreground mb-6">
                  Te escribo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s}
                      className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? 'bg-primary' : 'bg-border'}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">{step}/3</span>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-display font-semibold mb-4">Tus datos</h3>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      placeholder="Nombre"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      placeholder="WhatsApp"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                      className="glow-effect w-full bg-primary text-primary-foreground py-4 text-sm font-bold tracking-wider uppercase rounded-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-display font-semibold mb-4">Tu objetivo</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {objetivos.map((obj) => (
                        <button
                          key={obj.label}
                          type="button"
                          onClick={() => handleInputChange('objetivo', obj.label)}
                          className={`px-4 py-4 text-sm rounded-lg border transition-all ${
                            formData.objetivo === obj.label
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {obj.label}
                        </button>
                      ))}
                    </div>
                    <select
                      value={formData.experiencia}
                      onChange={(e) => handleInputChange('experiencia', e.target.value)}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors mt-4"
                    >
                      <option value="">Experiencia entrenando</option>
                      <option value="Nunca">Nunca</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1-3 años">1-3 años</option>
                      <option value="Más de 3 años">Más de 3 años</option>
                    </select>
                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-border text-muted-foreground py-4 text-sm tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!isStep2Valid}
                        className="glow-effect flex-1 bg-primary text-primary-foreground py-4 text-sm font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-display font-semibold mb-4">Casi listo</h3>
                    <textarea
                      value={formData.antes}
                      onChange={(e) => handleInputChange('antes', e.target.value)}
                      placeholder="¿Qué has intentado antes? (opcional)"
                      rows={3}
                      className="w-full bg-transparent border border-border rounded-lg p-4 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                    />
                    <input
                      type="text"
                      value={formData.lesion}
                      onChange={(e) => handleInputChange('lesion', e.target.value)}
                      placeholder="¿Alguna lesión? (opcional)"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                    />
                    <div className="flex gap-3 mt-6">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-border text-muted-foreground py-4 text-sm tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        className="glow-effect flex-1 bg-primary text-primary-foreground py-4 text-sm font-bold tracking-wider uppercase rounded-full flex items-center justify-center gap-2"
                      >
                        Enviar
                        <ArrowRight className="w-4 h-4" />
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
