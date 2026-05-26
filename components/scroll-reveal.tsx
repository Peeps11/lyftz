'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    reveals.forEach((reveal) => observer.observe(reveal))

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal))
    }
  }, [])

  return null
}
