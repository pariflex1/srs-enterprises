import { Counter, Reveal, Stagger, staggerChild } from "./motion-primitives";
import { motion } from "framer-motion";

const PRESS = [
  { name: "VOGUE Living", cls: "font-accent italic text-2xl" },
  { name: "WIRED", cls: "font-display font-bold tracking-[0.3em] text-lg" },
  { name: "Dwell", cls: "font-display font-semibold text-2xl tracking-tight" },
  { name: "TechRadar", cls: "font-body font-bold text-xl tracking-tight" },
  { name: "ELLE Décor", cls: "font-accent italic text-2xl" },
  { name: "Dezeen", cls: "font-display font-medium text-2xl lowercase" },
  { name: "Monocle", cls: "font-body font-semibold text-xl tracking-[0.2em]" },
  { name: "AD", cls: "font-display font-bold text-2xl tracking-[0.25em]" },
];

const STATS = [
  { value: 120, suffix: "K+", label: "Homes equipped", sub: "across 14 countries" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "Average rating", sub: "12,400+ reviews" },
  { value: 98, suffix: "%", label: "Would recommend", sub: "post-purchase survey" },
  { value: 10, suffix: " yr", label: "Motor warranty", sub: "standard on all products" },
];

export default function SocialProof() {
  return (
    <section aria-label="Press and company statistics" className="relative border-y border-ink/[0.07] bg-white/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-fog">
            As featured in
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="marquee-track mask-fade-x mt-8 overflow-hidden" aria-hidden={false}>
            <div className="flex w-max animate-marquee items-center gap-16 pr-16">
              {[...PRESS, ...PRESS].map((p, i) => (
                <span
                  key={`${p.name}-${i}`}
                  className={`whitespace-nowrap text-ink/35 transition-colors duration-300 hover:text-ink/70 ${p.cls}`}
                  aria-hidden={i >= PRESS.length}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/[0.07] pt-12 lg:grid-cols-4">
          {STATS.map((s) => (
            <motion.div key={s.label} variants={staggerChild} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <Counter to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">{s.label}</p>
              <p className="mt-0.5 text-xs text-fog">{s.sub}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
