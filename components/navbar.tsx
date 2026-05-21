'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#incluye', label: 'Qué incluye' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      {/* Logo - Editorial style */}
      <Link href="#inicio" className="flex items-center">
        <span className="text-2xl md:text-3xl font-display font-bold tracking-tight">
          <span className="text-foreground">LYFT</span>
          <span className="text-primary">Z</span>
        </span>
      </Link>

      {/* Desktop Nav Links - Minimal editorial style */}
      <ul className="hidden lg:flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-muted-foreground text-xs tracking-[0.15em] uppercase no-underline hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button - Editorial pill style */}
      <Link 
        href="#contacto"
        className="hidden lg:inline-flex bg-primary text-primary-foreground px-6 py-3 text-xs font-bold tracking-[0.12em] uppercase rounded-full hover:brightness-110 transition-all glow-effect"
      >
        Consulta gratuita
      </Link>

      {/* Mobile: CTA + Menu */}
      <div className="lg:hidden flex items-center gap-4">
        <Link 
          href="#contacto"
          className="bg-primary text-primary-foreground px-4 py-2 text-[0.7rem] font-bold tracking-[0.1em] uppercase rounded-full"
        >
          Consulta
        </Link>
        <button 
          className="flex flex-col justify-center items-center gap-1.5 cursor-pointer bg-transparent border-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu - Full screen editorial */}
      <div className={`fixed inset-0 bg-background z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <ul className="flex flex-col items-center gap-8 list-none">
          {navLinks.map((link, index) => (
            <li key={link.href} style={{ transitionDelay: `${index * 0.1}s` }}>
              <Link 
                href={link.href}
                className={`text-3xl md:text-4xl font-display font-bold uppercase text-foreground hover:text-primary transition-all ${
                  isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
