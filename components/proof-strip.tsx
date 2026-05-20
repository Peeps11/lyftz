export function ProofStrip() {
  const stats = [
    { num: '+50', label: 'Clientes' },
    { num: '+7', label: 'Años Experiencia' },
    { num: '100%', label: 'Personalizado' },
    { num: '24/7', label: 'Soporte' },
  ]

  return (
    <section className="bg-secondary border-y border-border py-10 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-[2.8rem] tracking-[0.04em] text-primary leading-none">
              {stat.num}
            </p>
            <p className="text-[0.78rem] text-muted-foreground uppercase tracking-[0.1em] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
