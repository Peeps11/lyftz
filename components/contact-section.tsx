'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

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
    { label: 'Sí, estoy listo para invertir en mí', value: 'si' },
    { label: 'Necesito más información primero', value: 'info' },
  ]

  return (
    <section id="contacto" className="py-20 px-[5%] bg-secondary/30">
      <div className="max-w-[900px] mx-auto">
        {/* Header - smaller, consistent with other sections */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-primary mb-3 block">Contacto</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Primera llamada gratis
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-[500px]">
            Sin compromiso. En 30 minutos vemos dónde estás, a dónde quieres llegar y si puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <div>
            <div className="space-y-4">
              {[
                'Rellena el formulario y te contacto en menos de 24h',
                'Coordinamos la videollamada a tu horario',
                'Sin letra pequeña, sin tarjeta',
                'Si no puedo ayudarte, te lo digo con honestidad',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3 border-t border-border pt-4">
                  <span className="text-sm font-display font-bold text-muted-foreground/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="text-center py-10 border border-border rounded-lg">
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4 text-primary text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">¡Recibido!</h3>
                <p className="text-sm text-muted-foreground">
                  Te escribo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4].map((s) => (
                    <div 
                      key={s}
                      className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? 'bg-primary' : 'bg-border'}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">{step}/4</span>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-display font-semibold mb-3">Tus datos</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Nombre"
                        className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="text"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange('apellido', e.target.value)}
                        placeholder="Apellido"
                        className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="Edad"
                        className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="Teléfono"
                        className="w-full bg-transparent border-b border-border py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!isStep1Valid}
                      className="w-full bg-primary text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase rounded-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-display font-semibold mb-3">Tu objetivo</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {objetivos.map((obj) => (
                        <button
                          key={obj.label}
                          type="button"
                          onClick={() => handleInputChange('objetivo', obj.label)}
                          className={`px-3 py-3 text-sm rounded-lg border transition-all ${
                            formData.objetivo === obj.label
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {obj.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border border-border text-muted-foreground py-3 text-sm tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!isStep2Valid}
                        className="flex-1 bg-primary text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-display font-semibold mb-3">Tu experiencia</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {experiencias.map((exp) => (
                        <button
                          key={exp.label}
                          type="button"
                          onClick={() => handleInputChange('experiencia', exp.label)}
                          className={`px-3 py-3 text-sm rounded-lg border transition-all ${
                            formData.experiencia === exp.label
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {exp.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 border border-border text-muted-foreground py-3 text-sm tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        disabled={!isStep3Valid}
                        className="flex-1 bg-primary text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                      >
                        Continuar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-display font-semibold mb-2">Último paso</h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      Para poder ofrecerte el mejor servicio posible, necesito saber si estás preparado para dar el paso.
                    </p>
                    <div className="space-y-3">
                      {inversiones.map((inv) => (
                        <button
                          key={inv.value}
                          type="button"
                          onClick={() => handleInputChange('inversion', inv.value)}
                          className={`w-full px-4 py-4 text-sm rounded-lg border transition-all text-left ${
                            formData.inversion === inv.value
                              ? 'border-primary text-primary bg-primary/10'
                              : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {inv.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 border border-border text-muted-foreground py-3 text-sm tracking-wider uppercase rounded-full hover:border-foreground hover:text-foreground transition-colors"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={!isStep4Valid}
                        className="flex-1 bg-primary text-primary-foreground py-3 text-sm font-bold tracking-wider uppercase rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:brightness-110 transition-all"
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
