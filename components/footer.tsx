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
          <Link 
            href="#contacto" 
            className="text-[0.78rem] text-[#555550] no-underline tracking-[0.06em] uppercase hover:text-muted-foreground transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/lyftz.fit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground text-[0.8rem] hover:border-primary hover:text-primary transition-all"
            aria-label="Instagram"
          >
            IG
          </a>
          <a
            href="https://tiktok.com/@lyftz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground text-[0.8rem] hover:border-primary hover:text-primary transition-all"
            aria-label="TikTok"
          >
            TK
          </a>
          <a
            href="https://youtube.com/@lyftz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground text-[0.8rem] hover:border-primary hover:text-primary transition-all"
            aria-label="YouTube"
          >
            YT
          </a>
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
