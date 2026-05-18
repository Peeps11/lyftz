import Image from 'next/image'
import { Award, Target, Heart } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
                alt="Coach Badia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 rounded-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-lg" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Sobre Mí</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] mt-2 mb-4">
                Tu Entrenador,{' '}
                <span className="text-primary">Badia</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Con más de 10 años de experiencia en el mundo del fitness y la preparación 
              física, he dedicado mi carrera a ayudar a atletas y personas comprometidas 
              a alcanzar su máximo potencial.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi filosofía se basa en la ciencia, la constancia y la personalización. 
              Cada persona es única, y por eso cada programa que diseño está adaptado 
              específicamente a tus necesidades, objetivos y estilo de vida.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Certificado</p>
                  <p className="text-xs text-muted-foreground">NSCA-CPT</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">+50</p>
                  <p className="text-xs text-muted-foreground">Clientes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">10+ Años</p>
                  <p className="text-xs text-muted-foreground">Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
