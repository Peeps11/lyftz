import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProofStrip } from '@/components/proof-strip'
import { AboutSection } from '@/components/about-section'
import { FeaturesSection } from '@/components/features-section'
import { TransformationsSection } from '@/components/transformations-section'
import { FAQSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <ProofStrip />
      <AboutSection />
      <FeaturesSection />
      <TransformationsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
