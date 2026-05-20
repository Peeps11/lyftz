import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-[5%] bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Image Side */}
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
            alt="Coach Badia"
            width={500}
            height={600}
            className="w-full rounded-[10px] grayscale-[15%]"
          />
          {/* Certificate badge */}
          <div className="absolute top-6 -right-4 lg:right-[-1.5rem] bg-primary text-primary-foreground px-4 py-2 rounded-[4px] text-[0.75rem] font-bold tracking-[0.1em] uppercase">
            Certificado NSCA
          </div>
        </div>

        {/* Content Side */}
        <div>
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Sobre Mí
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            TU COACH,{' '}
            <em className="text-primary not-italic">BADIA</em>
          </h2>

          <p className="text-muted-foreground leading-[1.8] font-light mb-4">
            Tras más de <strong className="text-foreground font-medium">7 años de experiencia</strong> y acreditaciones a nivel nacional e internacional tanto en preparación física como en dietética, descubrí que mi verdadera pasión es ayudar a las personas a verse y sentirse mejor que nunca.
          </p>

          <p className="text-muted-foreground leading-[1.8] font-light mb-6">
            Mi enfoque combina la base científica con la realidad de tu día a día. Aquí no encontrarás dietas imposibles ni entrenamientos genéricos. Cada programa está diseñado minuciosamente para adaptarse a tus necesidades y objetivos particulares, dándote las herramientas y el apoyo diario que necesitas para <strong className="text-foreground font-medium">lograr resultados sin complicarte la vida</strong>.
          </p>

          <div className="pt-6 mt-6 border-t border-border text-[0.88rem] text-muted-foreground">
            ¿Listo para empezar tu transformación?{' '}
            <Link href="#contacto" className="text-primary no-underline hover:underline">
              Agenda tu llamada gratuita →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
