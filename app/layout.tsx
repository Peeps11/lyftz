import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'LYFTZ | Coaching Online que Funciona de Verdad',
  description: 'Coaching de entrenamiento y nutricion para personas con poco tiempo y muchos intentos fallidos. Metodo personalizado con seguimiento diario. +100 clientes transformados.',
  keywords: ['coaching', 'fitness', 'entrenamiento', 'nutricion', 'transformacion', 'personalizado', 'online'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
