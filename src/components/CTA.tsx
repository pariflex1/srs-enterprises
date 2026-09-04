import { ArrowRight, Gift, ShieldCheck, Timer, Truck } from "lucide-react";
import { Magnet, Reveal } from "./motion-primitives";

const GUARANTEES = [
  { icon: Truck, label: "Free 2-day shipping" },
  { icon: Timer, label: "30-night trial" },
  { icon: ShieldCheck, label: "10-year warranty" },
];

export default function CTA() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-ink px-6 py-20 text-center text-white shadow-lift sm:px-14 sm:py-24">
            {/* Ambient */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid-dark absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_80%_at_50%_50%,black,transparent)]" />
              <div className="absolute -left-24 -top-24 size-96 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.35),transparent_65%)] blur-3xl animate-aurora" />
              <div className="absolute -bottom-28 -right-16 size-96 rounded-full bg-[radial-gradient(circle,rgb(255_178_94/0.25),transparent_65%)] blur-3xl animate-aurora [animation-delay:-7s]" />
              <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
              <div className="absolute left-1/2 top-1/2 size-[840px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
            </div>

            <div className="relative">
              <Reveal>
                <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
                  Your home deserves{" "}
                  <span className="font-accent font-normal italic text-transparent [background:linear-gradient(100deg,#ffb25e,#e8551f)] bg-clip-text">
                    better.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                  Join 120,000+ homes running quieter, cleaner, and more beautiful. Order
                  today — or share SRS with a friend and start earning.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Magnet>
                    <a
                      href="#showcase"
                      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-ember to-[#f0701f] px-9 py-4.5 text-base font-semibold text-white shadow-ember transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative">Shop the collection</span>
                      <ArrowRight className="relative size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Magnet>
                  <a
                    href="#referral"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4.5 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                  >
                    <Gift className="size-4.5 text-apricot transition-transform duration-300 group-hover:-rotate-12" />
                    Refer &amp; earn $25
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.26}>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
                  {GUARANTEES.map((g) => (
                    <span key={g.label} className="inline-flex items-center gap-2 text-sm font-medium text-white/55">
                      <g.icon className="size-4 text-apricot" />
                      {g.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
