import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'LYFTZ | Transforma Tu Cuerpo',
  description: 'Coaching online personalizado de entrenamiento y nutricion. Consigue el fisico que buscas con ciencia y seguimiento diario.',
  keywords: ['coaching', 'fitness', 'entrenamiento', 'nutricion', 'transformacion', 'personalizado'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
