const brands = ["FUSION", "URBANA", "AETHER", "NIMBUS", "NOVA", "REGAL", "ELYSIAN", "MERIDIAN"];

export function Marquee() {
  const items = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden py-10 border-y border-border bg-[color:var(--secondary)]">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {items.map((b, i) => (
          <span
            key={i}
            className="font-display text-3xl sm:text-4xl font-bold tracking-widest text-[color:var(--royal)]/40 hover:text-[color:var(--royal)] transition"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
