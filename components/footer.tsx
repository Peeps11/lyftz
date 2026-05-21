import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-20 px-[5%] border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        {/* Large editorial logo */}
        <div className="mb-16">
          <Link href="#inicio" className="inline-block">
            <span className="text-6xl md:text-8xl font-display font-bold tracking-tight">
              <span className="text-foreground">LYFT</span>
              <span className="text-primary">Z</span>
            </span>
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            © 2026 LYFTZ. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/politica-privacidad" 
              className="text-xs text-muted-foreground tracking-wider uppercase hover:text-primary transition-colors"
            >
              Privacidad
            </Link>
            <Link 
              href="/terminos-condiciones" 
              className="text-xs text-muted-foreground tracking-wider uppercase hover:text-primary transition-colors"
            >
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
