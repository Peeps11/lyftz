export function ProofStrip() {
  return (
    <section className="py-6 px-[5%] border-y border-border overflow-hidden">
      {/* Marquee effect */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 mx-8">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">+50 Clientes</span>
            <span className="text-primary">●</span>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">7+ Años experiencia</span>
            <span className="text-primary">●</span>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">100% Personalizado</span>
            <span className="text-primary">●</span>
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Soporte 24h</span>
            <span className="text-primary">●</span>
          </div>
        ))}
      </div>
    </section>
  )
}
