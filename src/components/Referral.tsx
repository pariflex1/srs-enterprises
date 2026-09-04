import { BadgePercent, Link2, Wallet, ArrowRight } from "lucide-react";
import { Magnet, Reveal, Stagger, staggerChild } from "./motion-primitives";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: Link2,
    step: "01",
    title: "Share your link",
    copy: "Every order unlocks your personal referral link. Share it anywhere — group chats count.",
  },
  {
    icon: BadgePercent,
    step: "02",
    title: "They save 20%",
    copy: "Friends get 20% off their first appliance plus free shipping. Instant hero status for you.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "You earn $25",
    copy: "Credit lands the day their order ships. No caps, no expiry — refer ten friends, earn $250.",
  },
];

export default function Referral() {
  return (
    <section id="referral" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 size-[480px] rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.1),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.75rem] border border-ember/15 bg-gradient-to-br from-blush/70 via-white to-porcelain p-8 shadow-lift sm:p-14 lg:p-16">
            {/* Decorative rings */}
            <div aria-hidden className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full border-[28px] border-ember/[0.07]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full border-[22px] border-apricot/[0.12]" />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Referral program
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl">
                Give 20%.{" "}
                <span className="font-accent font-normal italic text-ember">Get $25.</span>{" "}
                Repeat forever.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-smoke">
                Great homes talk. When yours recommends SRS, everyone wins — our average
                member earns <span className="font-semibold text-ink">$148 a year</span> in credits.
              </p>
            </div>

            <Stagger className="relative mt-14 grid gap-5 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <motion.div key={s.step} variants={staggerChild} className="relative">
                  {i < STEPS.length - 1 && (
                    <div aria-hidden className="absolute left-[calc(100%-0.5rem)] top-12 hidden w-8 border-t-2 border-dashed border-ember/30 md:block" />
                  )}
                  <div className="group h-full rounded-[1.75rem] border border-ink/[0.07] bg-white/80 p-7 shadow-soft backdrop-blur transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-ember to-apricot text-white shadow-ember transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]">
                        <s.icon className="size-5.5" />
                      </span>
                      <span className="font-display text-4xl font-bold text-ink/[0.08]">{s.step}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-smoke">{s.copy}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>

            <Reveal delay={0.15} className="relative mt-12 flex flex-col items-center gap-4">
              <Magnet strength={8}>
                <a
                  href="#pricing"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-ink px-9 py-4 text-base font-semibold text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:shadow-ember"
                >
                  Get my referral link
                  <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnet>
              <p className="text-xs text-fog">Free to join · No purchase minimum on rewards · Credits never expire</p>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
