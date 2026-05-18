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
  title: 'FISIBA | Athlete Performance Hub',
  description: 'Premium, high-performance online coaching for athletes and individuals looking to optimize their physical performance and aesthetics.',
  keywords: ['coaching', 'fitness', 'athlete', 'performance', 'training', 'nutrition'],
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
