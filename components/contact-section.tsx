'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'

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
    console.log('[v0] Form submitted:', formData)
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.nombre && formData.email && formData.telefono && formData.edad && formData.disponibilidad
  const isStep2Valid = formData.objetivo
  const isStep3Valid = true

  const objetivos = [
    { emoji: '🔥', label: 'Perder grasa' },
    { emoji: '💪', label: 'Ganar músculo' },
    { emoji: '⚡', label: 'Mejorar rendimiento' },
    { emoji: '🔄', label: 'Recomposición' },
  ]

  return (
    <section id="contacto" className="py-24 px-[5%] bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        {/* Left Content */}
        <div>
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Empieza hoy
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            Primera<br />videollamada,<br />
            <em className="text-primary not-italic">100% gratis</em>
          </h2>
          <p className="text-muted-foreground max-w-[400px] leading-[1.7] font-light mb-6">
            Sin compromiso. En 30 minutos vemos dónde estás, a dónde quieres llegar y si puedo ayudarte.
          </p>

          <ul className="flex flex-col gap-3 mt-6">
            {[
              'Rellena el formulario y te contacto en menos de 24h',
              'Coordinamos la videollamada a tu horario',
              'Sin letra pequeña, sin tarjeta, sin nada',
              'Si no creo que pueda ayudarte, te lo digo con honestidad',
            ].map((item) => (
              <li key={item} className="text-[0.88rem] text-muted-foreground flex items-center gap-2">
                <span className="text-primary font-bold text-[0.8rem] flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="reveal bg-card border border-border rounded-[10px] p-6 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.15)] border-2 border-primary flex items-center justify-center mx-auto mb-6 text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">¡Recibido! Hablamos pronto.</h3>
              <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                Te escribo en menos de 24 horas para coordinar tu videollamada gratuita.<br />Mientras tanto, sígueme en Instagram para ver más contenido.
              </p>
              <a 
                href="https://instagram.com/lyftz.fit" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[0.85rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px] hover:brightness-110 transition-all mt-6"
              >
                Ver Instagram →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step Indicator */}
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-2 h-2 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'} ${step > 1 ? 'opacity-50' : ''}`} />
                <div className="flex-1 h-px bg-border" />
                <div className={`w-2 h-2 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'} ${step > 2 ? 'opacity-50' : ''}`} />
                <div className="flex-1 h-px bg-border" />
                <div className={`w-2 h-2 rounded-full transition-colors ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
                <span className="text-[0.75rem] text-[#555550] tracking-[0.1em] uppercase ml-2">
                  Paso <span className="text-primary">{step}</span> de 3
                </span>
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Tus datos básicos</h3>
                    <p className="text-[0.85rem] text-muted-foreground mb-6">Solo lo esencial para poder contactarte.</p>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Nombre completo</label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange('nombre', e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Correo electrónico</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tucorreo@mail.com"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => handleInputChange('telefono', e.target.value)}
                        placeholder="+34 600 000 000"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Edad</label>
                      <input
                        type="number"
                        value={formData.edad}
                        onChange={(e) => handleInputChange('edad', e.target.value)}
                        placeholder="Tu edad"
                        min="16"
                        max="80"
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Disponibilidad</label>
                      <select
                        value={formData.disponibilidad}
                        onChange={(e) => handleInputChange('disponibilidad', e.target.value)}
                        className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">¿Cuándo puedes entrenar?</option>
                        <option value="Mañanas">Mañanas</option>
                        <option value="Tardes">Tardes</option>
                        <option value="Noches">Noches</option>
                        <option value="Fin de semana">Fin de semana</option>
                        <option value="Flexible">Flexible</option>
                      </select>
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
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Tu objetivo principal</h3>
                    <p className="text-[0.85rem] text-muted-foreground mb-6">¿Qué quieres conseguir? Esto me ayuda a preparar la llamada.</p>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">¿A qué te dedicas?</label>
                    <input
                      type="text"
                      value={formData.trabajo}
                      onChange={(e) => handleInputChange('trabajo', e.target.value)}
                      placeholder="Ej: trabajo de oficina, sector salud..."
                      className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-2">Objetivo principal</label>
                    <div className="grid grid-cols-2 gap-3">
                      {objetivos.map((obj) => (
                        <button
                          key={obj.label}
                          type="button"
                          onClick={() => handleInputChange('objetivo', obj.label)}
                          className={`px-4 py-3 text-[0.85rem] rounded-[4px] border transition-all text-center ${
                            formData.objetivo === obj.label
                              ? 'border-primary text-primary bg-[rgba(0,229,255,0.15)]'
                              : 'border-border text-muted-foreground bg-muted hover:border-primary hover:text-primary'
                          }`}
                        >
                          {obj.emoji} {obj.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">Experiencia previa</label>
                    <select
                      value={formData.experiencia}
                      onChange={(e) => handleInputChange('experiencia', e.target.value)}
                      className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Selecciona tu nivel</option>
                      <option value="Nunca he entrenado">Nunca he entrenado</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="1-3 años">1-3 años</option>
                      <option value="Más de 3 años">Más de 3 años</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!isStep2Valid}
                    className="w-full bg-primary text-primary-foreground py-4 text-[0.88rem] font-bold tracking-[0.12em] uppercase rounded-[4px] hover:brightness-110 hover:-translate-y-[1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    Continuar →
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full bg-transparent border border-border text-muted-foreground py-3 text-[0.82rem] tracking-[0.08em] uppercase rounded-[4px] hover:border-muted-foreground hover:text-foreground transition-all"
                  >
                    ← Volver
                  </button>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Casi listo</h3>
                    <p className="text-[0.85rem] text-muted-foreground mb-6">Una última pregunta para llegar preparado a la llamada.</p>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">¿Qué has intentado antes y no ha funcionado? (opcional)</label>
                    <textarea
                      value={formData.antes}
                      onChange={(e) => handleInputChange('antes', e.target.value)}
                      placeholder="Cuéntame lo que quieras..."
                      rows={3}
                      className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.78rem] text-muted-foreground tracking-[0.08em] uppercase mb-1">¿Tienes alguna lesión o condición a tener en cuenta?</label>
                    <input
                      type="text"
                      value={formData.lesion}
                      onChange={(e) => handleInputChange('lesion', e.target.value)}
                      placeholder="Ej: rodilla, espalda, ninguna..."
                      className="w-full bg-muted border border-border rounded-[4px] px-4 py-3 text-foreground text-[0.9rem] outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isStep3Valid}
                    className="w-full bg-primary text-primary-foreground py-4 text-[0.88rem] font-bold tracking-[0.12em] uppercase rounded-[4px] hover:brightness-110 hover:-translate-y-[1px] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    Solicitar videollamada gratuita 🎯
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-transparent border border-border text-muted-foreground py-3 text-[0.82rem] tracking-[0.08em] uppercase rounded-[4px] hover:border-muted-foreground hover:text-foreground transition-all"
                  >
                    ← Volver
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
