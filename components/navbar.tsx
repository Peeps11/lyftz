'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#incluye', label: 'Qué Incluye' },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-4 transition-all duration-300 border-b ${
      isScrolled ? 'bg-[rgba(12,12,12,0.92)] backdrop-blur-[10px] border-border' : 'bg-transparent border-transparent'
    }`}>
      {/* Logo */}
      <Link href="#inicio" className="font-display text-3xl tracking-[0.12em] text-primary no-underline">
        LYFTZ
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-muted-foreground text-[0.85rem] tracking-[0.08em] uppercase no-underline hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link 
        href="#contacto"
        className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 text-[0.82rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px] hover:brightness-110 hover:-translate-y-[1px] transition-all"
      >
        Empezar
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col justify-center items-center gap-[5px] cursor-pointer bg-transparent border-none p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-[22px] h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-[22px] h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(12,12,12,0.98)] backdrop-blur-[10px] border-b border-border md:hidden">
          <ul className="flex flex-col py-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="block px-[5%] py-3 text-muted-foreground text-[0.9rem] tracking-[0.08em] uppercase no-underline hover:text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-[5%] pt-4">
              <Link 
                href="#contacto"
                className="block text-center bg-primary text-primary-foreground px-5 py-3 text-[0.85rem] font-bold tracking-[0.1em] uppercase no-underline rounded-[4px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Empezar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
