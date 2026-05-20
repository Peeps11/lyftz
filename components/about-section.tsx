import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-[5%] bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Image Side */}
        <div className="relative reveal">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2015.13.59-8XFQkLTDblTBRiiY0IinfhbbMoCNOp.jpeg"
            alt="Badia, entrenador personal online"
            width={500}
            height={600}
            className="w-full rounded-[10px] grayscale-[15%]"
          />
          {/* Certificate badge */}
          <div className="absolute top-6 right-0 lg:right-[-1.5rem] bg-primary text-primary-foreground px-4 py-2 rounded-[4px] text-[0.75rem] font-bold tracking-[0.1em] uppercase">
            NSCA · Dietética
          </div>
        </div>

        {/* Content Side */}
        <div className="reveal">
          <span className="text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-3 block">
            Sobre mí
          </span>
          <h2 className="font-display text-[clamp(2.2rem,3.5vw,3.5rem)] tracking-[0.03em] leading-[1.05] mb-4 text-foreground">
            Yo también estuve<br />donde tú estás{' '}
            <em className="text-primary not-italic">ahora</em>
          </h2>

          <p className="text-muted-foreground leading-[1.8] font-light mb-4">
            Llevo más de 7 años en este mundo, con certificaciones nacionales e internacionales tanto en preparación física como en dietética. Pero la razón por la que hago esto no es el papel: <strong className="text-foreground font-medium">es porque yo mismo pasé años haciendo las cosas mal</strong>, siguiendo planes genéricos que prometían mucho y entregaban nada.
          </p>

          <p className="text-muted-foreground leading-[1.8] font-light mb-6">
            Cuando encontré la forma correcta de hacerlo — adaptada a mi vida, no a la de otro — todo cambió. Y eso es exactamente lo que quiero para ti. No voy a darte una dieta imposible ni un plan copiado de internet. Voy a <strong className="text-foreground font-medium">diseñar contigo un método que quepa en tu vida real</strong>.
          </p>

          <div className="pt-6 mt-6 border-t border-border text-[0.88rem] text-muted-foreground">
            ¿Mi historia te resuena?{' '}
            <Link href="#contacto" className="text-primary no-underline hover:underline">
              Hablemos sin compromiso →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
