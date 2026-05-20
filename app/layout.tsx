import type { Metadata } from 'next'
import { DM_Sans, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '700'],
})

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"],
  variable: '--font-bebas',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'LYFTZ | Coaching Online que Funciona de Verdad',
  description: 'Coaching online personalizado de entrenamiento y nutricion. Mas de 50 personas transformadas con ciencia y seguimiento diario. Videollamada inicial gratuita.',
  keywords: ['coaching', 'fitness', 'entrenamiento', 'nutricion', 'transformacion', 'personalizado'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${dmSans.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
