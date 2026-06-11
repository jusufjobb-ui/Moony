const badges = [
  {
    icon: '🌱',
    label: '100% Veganskt',
    description: 'Växtbaserat sojavax',
  },
  {
    icon: '🤲',
    label: 'Handgjort i Sverige',
    description: 'Småland, sedan 2021',
  },
  {
    icon: '🌿',
    label: 'Fritt från parabener & ftalater',
    description: 'Rena doftoljor',
  },
  {
    icon: '✨',
    label: 'Unikt marmorerat mönster',
    description: 'Aldrig exakt lika',
  },
  {
    icon: '📦',
    label: 'Fri frakt över 500 kr',
    description: 'Snabb leverans',
  },
]

export default function TrustBadges() {
  return (
    <section
      className="bg-brand-card py-8 border-y border-brand-primary/20"
      aria-label="Varför välja Moony Flames"
    >
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 group"
            >
              <span className="text-2xl" aria-hidden="true">{badge.icon}</span>
              <div>
                <p className="font-sans text-sm font-medium text-brand-text group-hover:text-brand-primary transition-colors">
                  {badge.label}
                </p>
                <p className="font-sans text-xs text-brand-muted">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
