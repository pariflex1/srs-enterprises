import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCcw, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Counter, EASE, Eyebrow, Reveal, Stagger, staggerChild } from "./motion-primitives";

const BENEFITS = [
  {
    icon: Timer,
    title: "30-night home trial",
    copy: "Live with it for a month. If it doesn’t earn its place, we collect it free — no questions, no restocking fees.",
  },
  {
    icon: ShieldCheck,
    title: "10-year warranty",
    copy: "The longest warranty in the category, with in-home service at 500+ service centers nationwide.",
  },
  {
    icon: Leaf,
    title: "Carbon-neutral, always",
    copy: "Recycled aluminum bodies, plastic-free packaging, and every delivery offset — automatically.",
  },
  {
    icon: RefreshCcw,
    title: "Trade-in credit",
    copy: "Send us your old water purifier — any brand — and get credit toward your upgrade. We refurbish or recycle it.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-32 top-0 size-[500px] rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.22),transparent_65%)] blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[420px] rounded-full bg-[radial-gradient(circle,rgb(255_178_94/0.14),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 shadow-lift">
              <img
                src="/images/lifestyle-room.png"
                alt="Sunlit modern living room with an SRS air purifier by the wall"
                loading="lazy"
                className="aspect-[4/3.2] w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* Floating review card */}
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
              className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-xs"
            >
              <div className="rounded-3xl border border-white/15 bg-ink-2 p-5 shadow-lift">
                <div className="flex items-center gap-2 text-apricot">
                  <Sparkles className="size-4" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em]">Quality guaranteed</p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                  “It’s the first appliance we’ve owned that makes the room feel calmer,
                  not busier.”
                </p>
                <p className="mt-2 text-xs font-semibold text-white/50">— Maya R., Digital RO owner</p>
              </div>
            </motion.div>

            {/* Stat chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              className="absolute -top-6 right-6 rounded-2xl border border-white/15 bg-ink-2 px-5 py-4 animate-float-slow"
            >
              <p className="font-display text-3xl font-bold text-white">
                <Counter to={98} suffix="%" />
              </p>
              <p className="text-[11px] font-medium text-white/60">keep it after the trial</p>
            </motion.div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow dark>Ownership, reimagined</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Buying better should feel{" "}
              <span className="font-accent font-normal italic text-apricot">effortless.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
              We removed every risk and every ounce of friction from upgrading your home —
              so the only thing left is enjoying clean water and quality appliances.
            </p>
          </Reveal>

          <Stagger className="mt-10 space-y-3">
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                variants={staggerChild}
                className="group flex gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5 transition-all duration-400 hover:border-ember/40 hover:bg-white/[0.07] sm:p-6"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ember/25 to-apricot/15 text-apricot transition-transform duration-300 group-hover:scale-110">
                  <b.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{b.copy}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>

          <Reveal delay={0.2} className="mt-9">
            <a
              href="#faq"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              <span className="border-b border-white/25 pb-0.5 transition-colors group-hover:border-apricot group-hover:text-apricot">
                Questions? Read the FAQ
              </span>
              <ArrowRight className="size-4 text-apricot transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
