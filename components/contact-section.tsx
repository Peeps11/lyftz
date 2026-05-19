'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ArrowRight, ArrowLeft, Check, Calendar, Phone } from 'lucide-react'

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    ocupacion: '',
    objetivo: '',
    ayuda: '',
    patologia: '',
    presupuesto: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle form submission
    console.log('[v0] Form submitted:', formData)
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.nombre && formData.email && formData.telefono && formData.edad && formData.ocupacion
  const isStep2Valid = formData.objetivo && formData.ayuda
  const isStep3Valid = formData.presupuesto

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] mb-2">
          ¡Solicitud Enviada!
        </h3>
        <p className="text-muted-foreground">
          Me pondré en contacto contigo en las próximas 24-48 horas.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
          }`}>
            {step > 1 ? <Check className="w-4 h-4" /> : '1'}
          </div>
          <span className="text-sm hidden sm:inline">Datos</span>
        </div>
        <div className="w-4 sm:w-12 h-px bg-border" />
        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
          }`}>
            {step > 2 ? <Check className="w-4 h-4" /> : '2'}
          </div>
          <span className="text-sm hidden sm:inline">Objetivos</span>
        </div>
        <div className="w-4 sm:w-12 h-px bg-border" />
        <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
          }`}>
            3
          </div>
          <span className="text-sm hidden sm:inline">Compromiso</span>
        </div>
      </div>

      {/* Step 1: Personal Data */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="+34 600 000 000"
                value={formData.telefono}
                onChange={(e) => handleInputChange('telefono', e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edad">Edad</Label>
              <Input
                id="edad"
                type="number"
                placeholder="25"
                value={formData.edad}
                onChange={(e) => handleInputChange('edad', e.target.value)}
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ocupacion">¿A qué te dedicas?</Label>
            <Input
              id="ocupacion"
              placeholder="Tu profesión u ocupación"
              value={formData.ocupacion}
              onChange={(e) => handleInputChange('ocupacion', e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary"
            />
          </div>

          <div className="pt-4">
            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!isStep1Valid}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              Continuar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Goals and Health */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>¿Cuál es tu objetivo principal?</Label>
            <RadioGroup
              value={formData.objetivo}
              onValueChange={(value) => handleInputChange('objetivo', value)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {['Competir', 'Perder grasa', 'Ganar músculo'].map((option) => (
                <div key={option}>
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={option}
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-border bg-secondary/50 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:border-primary/50"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label>¿En qué parte necesitas más ayuda?</Label>
            <RadioGroup
              value={formData.ayuda}
              onValueChange={(value) => handleInputChange('ayuda', value)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {['Entrenamiento', 'Dieta', 'Ambos'].map((option) => (
                <div key={option}>
                  <RadioGroupItem
                    value={option}
                    id={`ayuda-${option}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`ayuda-${option}`}
                    className="flex items-center justify-center px-4 py-3 rounded-lg border border-border bg-secondary/50 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:border-primary/50"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="patologia">¿Tienes algún tipo de patología o lesión?</Label>
            <Textarea
              id="patologia"
              placeholder="Describe cualquier condición médica o lesión relevante (opcional)"
              value={formData.patologia}
              onChange={(e) => handleInputChange('patologia', e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary min-h-[100px]"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Atrás
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              disabled={!isStep2Valid}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              Continuar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Budget */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>¿Estás dispuesto a gastarte más de 200€ en tu cambio físico?</Label>
            <RadioGroup
              value={formData.presupuesto}
              onValueChange={(value) => handleInputChange('presupuesto', value)}
              className="grid grid-cols-2 gap-4"
            >
              {['Sí', 'No'].map((option) => (
                <div key={option}>
                  <RadioGroupItem
                    value={option}
                    id={`presupuesto-${option}`}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={`presupuesto-${option}`}
                    className="flex items-center justify-center px-6 py-4 rounded-lg border border-border bg-secondary/50 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:border-primary/50 text-lg"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Show call scheduling section if user selected "Sí" */}
          {formData.presupuesto === 'Sí' && (
            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Agenda tu llamada gratuita</h4>
                  <p className="text-sm text-muted-foreground">Reserva una videollamada de 15 minutos conmigo</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                En esta llamada analizaremos tu situación actual, tus objetivos y te explicaré 
                cómo puedo ayudarte a conseguir los resultados que buscas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow-effect"
                >
                  <Calendar className="w-4 h-4" />
                  Reservar en Calendly
                </a>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 font-medium hover:border-primary/50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Contactar por WhatsApp
                </a>
              </div>
            </div>
          )}

          {formData.presupuesto === 'No' && (
            <div className="p-6 rounded-xl border border-border bg-secondary/30 space-y-3">
              <p className="text-muted-foreground">
                Entiendo. Por ahora no tengo opciones disponibles para ese presupuesto, 
                pero puedes seguirme en redes sociales donde comparto contenido gratuito 
                que puede ayudarte en tu camino.
              </p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Atrás
            </Button>
            <Button
              type="submit"
              disabled={!isStep3Valid}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              Enviar Solicitud
            </Button>
          </div>
        </div>
      )}
    </form>
  )
}

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Empieza Hoy</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mt-2 mb-4">
            ¿Listo para <span className="text-primary">Transformarte</span>?
          </h2>
          <p className="text-muted-foreground text-pretty">
            Completa el formulario y me pondré en contacto contigo para programar 
            tu videollamada inicial gratuita.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
