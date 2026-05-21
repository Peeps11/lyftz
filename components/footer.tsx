import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border px-[5%] py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center">
          <span className="text-xl font-bold tracking-tight font-display">
            <span className="text-foreground">LYFT</span>
            <span className="text-primary">Z</span>
          </span>
        </Link>

        {/* Legal Links */}
        <div className="flex items-center gap-6 flex-wrap">
          <Link 
            href="/politica-privacidad" 
            className="text-[0.78rem] text-[#555550] no-underline tracking-[0.06em] uppercase hover:text-muted-foreground transition-colors"
          >
            Política de privacidad
          </Link>
          <Link 
            href="/terminos-condiciones" 
            className="text-[0.78rem] text-[#555550] no-underline tracking-[0.06em] uppercase hover:text-muted-foreground transition-colors"
          >
            Términos y condiciones
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border text-center">
        <p className="text-[0.75rem] text-[#555550]">
          © 2026 LYFTZ. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
