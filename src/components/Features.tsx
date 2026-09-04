import { motion } from "framer-motion";
import {
  AudioLines,
  BatteryCharging,
  Leaf,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Truck,
} from "lucide-react";
import { Reveal, SectionHeading, Stagger, staggerChild } from "./motion-primitives";

const QUICK = [
  { icon: Truck, title: "Free 2-day shipping", sub: "on every order, nationwide" },
  { icon: ShieldCheck, title: "500+ service hubs", sub: "in-home repairs in 48 hrs" },
  { icon: Leaf, title: "Carbon-neutral delivery", sub: "offset on 100% of shipments" },
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why SRS"
          title={
            <>
              Engineering you can feel.{" "}
              <span className="font-accent font-normal italic text-ember">Design</span> you can see.
            </>
          }
          copy="Every SRS product is obsessively engineered for quality and performance — and it shows the moment you use it."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {/* WhisperCore — wide tile */}
          <Reveal className="md:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10">
              <div aria-hidden className="absolute -right-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.12),transparent_65%)] blur-2xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative flex flex-wrap items-start justify-between gap-8">
            <div className="max-w-sm">
              <span className="grid size-12 place-items-center rounded-2xl bg-blush text-ember">
                <AudioLines className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                Advanced Purification
              </h3>
              <p className="mt-3 leading-relaxed text-smoke">
                Multi-stage RO + UV purification systems that deliver crystal-clear,
                safe drinking water for your family.
              </p>
            </div>
                <div className="flex flex-col items-center gap-4 self-center">
                  <div className="flex h-24 items-end gap-1.5" aria-hidden>
                    {[0.5, 0.9, 0.65, 1, 0.4, 0.8, 0.55, 0.95, 0.6, 0.75].map((v, i) => (
                      <span
                        key={i}
                        className="w-1.5 origin-bottom rounded-full bg-gradient-to-t from-ember to-apricot"
                        style={{ height: `${v * 100}%`, animation: `eq ${1 + (i % 4) * 0.18}s ease-in-out ${-i * 0.15}s infinite` }}
                      />
                    ))}
                  </div>
                  <p className="font-display text-5xl font-bold tracking-tight text-ink">
                    24<span className="text-2xl text-ember">dB</span>
                  </p>
                  <p className="-mt-2 text-xs font-medium uppercase tracking-[0.2em] text-fog">as quiet as</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Warranty badge tile */}
          <Reveal delay={0.1}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-ink p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10">
              <div aria-hidden className="absolute -bottom-20 -right-20 size-56 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.35),transparent_65%)] blur-2xl" />
              <div className="relative mx-auto grid size-36 place-items-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 spin-badge" aria-hidden>
                  <defs>
                    <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-white/70 text-[9.5px] font-semibold uppercase tracking-[0.22em]">
                    <textPath href="#circlePath">10-year warranty · SRS Enterprises ·</textPath>
                  </text>
                </svg>
                <ShieldCheck className="size-9 text-apricot" />
              </div>
              <div className="relative mt-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Built for a decade</h3>
                <p className="mt-3 leading-relaxed text-white/60">
                  Every motor is warranted for 10 years — because the most sustainable
                  appliance is the one you never replace.
                </p>
              </div>
            </div>
          </Reveal>

          {/* App tile */}
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#e8f0fe] text-[#2f6fed]">
                <Smartphone className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">Smart Monitoring</h3>
              <p className="mt-3 leading-relaxed text-smoke">
                Track water quality, filter life, and maintenance schedules — all from
                one convenient app.
              </p>
              {/* Mini phone mock */}
              <div aria-hidden className="relative mx-auto mt-8 w-56 rounded-[1.75rem] border border-ink/10 bg-porcelain p-3 shadow-soft transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="rounded-3xl bg-ink p-4 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">Digital RO · Kitchen</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-3xl font-bold">Auto</span>
                    <span className="rounded-full bg-leaf/20 px-2.5 py-1 text-[10px] font-bold text-[#7fe0b5]">AIR EXCELLENT</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    {[["Quiet mode", true], ["Night schedule", true], ["Boost", false]].map(([label, on]) => (
                      <div key={label as string} className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2">
                        <span className="text-xs text-white/70">{label}</span>
                        <span className={`flex h-4 w-7 items-center rounded-full px-0.5 ${on ? "justify-end bg-ember" : "justify-start bg-white/20"}`}>
                          <span className="size-3 rounded-full bg-white" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Energy — wide tile */}
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-gradient-to-br from-white to-blush/50 p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-10">
                <div className="max-w-sm">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#e7f5ee] text-leaf">
                    <BatteryCharging className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                    Energy Efficient
                  </h3>
                  <p className="mt-3 leading-relaxed text-smoke">
                    Smart-load sensors and efficient motors reduce power consumption —
                    saving you money on electricity bills.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-leaf shadow-soft">
                    <Sparkles className="size-3.5" /> Trusted by 10,000+ homes
                  </div>
                </div>
                {/* Energy meter */}
                <div aria-hidden className="flex flex-1 flex-col justify-center gap-3 self-center min-w-56 max-w-xs">
                  {[
                    { label: "SRS Digital RO", pct: 34, cls: "bg-gradient-to-r from-ember to-apricot" },
                    { label: "Category average", pct: 82, cls: "bg-ink/15" },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
                        <span className="text-ink">{b.label}</span>
                        <span className="text-fog">{b.pct} kWh/mo</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-ink/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                          className={`h-full rounded-full ${b.cls}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quick trust strip */}
        <Stagger className="mt-5 grid gap-5 sm:grid-cols-3">
          {QUICK.map((q) => (
            <motion.div
              key={q.title}
              variants={staggerChild}
              className="group flex items-center gap-4 rounded-3xl border border-ink/[0.07] bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush text-ember transition-transform duration-300 group-hover:scale-110">
                <q.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">{q.title}</p>
                <p className="mt-0.5 text-xs text-smoke">{q.sub}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
