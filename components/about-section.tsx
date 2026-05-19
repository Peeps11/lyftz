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
              Tras más de 7 años de experiencia y acreditaciones a nivel nacional e 
              internacional tanto en preparación física como en dietética, descubrí 
              que mi verdadera pasión es ayudar a las personas a verse y sentirse 
              mejor que nunca.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi enfoque combina la base científica con la realidad de tu día a día. 
              Aquí no encontrarás dietas imposibles ni entrenamientos genéricos. Cada 
              programa está diseñado minuciosamente para adaptarse a tus necesidades 
              y objetivos particulares, dándote las herramientas y el apoyo diario 
              que necesitas para lograr resultados sin complicarte la vida.
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
                  <p className="text-sm font-medium">+7 Años</p>
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
