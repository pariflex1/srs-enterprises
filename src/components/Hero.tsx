import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowRight, AudioLines, Award, Gift, Star, Wind } from "lucide-react";
import { EASE, Magnet } from "./motion-primitives";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const AVATARS = [
  { initials: "MR", bg: "from-ember to-apricot" },
  { initials: "DK", bg: "from-[#2f6fed] to-[#7db3ff]" },
  { initials: "PS", bg: "from-[#1e9e6a] to-[#7fd8ad]" },
  { initials: "EW", bg: "from-[#7c4dff] to-[#c4a7ff]" },
];

function GlassChip({
  className,
  children,
  delay = 0,
  duration = 7,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.9, ease: EASE }}
      className={className}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lift"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20 });
  const py = useSpring(my, { stiffness: 50, damping: 20 });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24"
      onPointerMove={(e) => {
        if (reduce) return;
        const { innerWidth, innerHeight } = window;
        mx.set((e.clientX / innerWidth - 0.5) * 18);
        my.set((e.clientY / innerHeight - 0.5) * 14);
      }}
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(75%_60%_at_50%_20%,black,transparent)]" />
        <div className="absolute -top-40 right-[-10%] size-[640px] rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.16),transparent_65%)] blur-3xl" />
        <div className="absolute top-1/3 left-[-12%] size-[480px] rounded-full bg-[radial-gradient(circle,rgb(255_178_94/0.18),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item}>
            <a
              href="#showcase"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/90 py-1.5 pl-1.5 pr-4 text-xs font-semibold text-smoke shadow-soft transition-colors hover:border-ember/30 hover:text-ink"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                <Award className="size-3 text-apricot" /> Best Seller
              </span>
              Digital RO — Advanced Water Purification
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.85rem] font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.6rem]"
          >
            Clean water,{" "}
            <span className="relative inline-block font-accent font-normal italic tracking-normal text-transparent [background:linear-gradient(100deg,#e8551f,#ffb25e)] bg-clip-text">
              pure living.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-smoke"
          >
            SRS Enterprises provides premium water purification, home appliances,
            and solar solutions — engineered for quality and built to last.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnet>
              <a
                href="#showcase"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-ember to-[#f0701f] px-8 py-4 text-base font-semibold text-white shadow-ember transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Shop the collection</span>
                <ArrowRight className="relative size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnet>
            <a
              href="#referral"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink/12 bg-white/90 px-7 py-4 text-base font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-lift"
            >
              <Gift className="size-4.5 text-ember transition-transform duration-300 group-hover:-rotate-12" />
              Refer &amp; earn $25
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex -space-x-2.5">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className={`grid size-10 place-items-center rounded-full bg-gradient-to-br ${a.bg} text-[11px] font-bold text-white ring-[2.5px] ring-porcelain`}
                >
                  {a.initials}
                </span>
              ))}
              <span className="grid size-10 place-items-center rounded-full bg-ink text-[10px] font-bold text-white ring-[2.5px] ring-porcelain">
                120K
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-ember text-ember" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-ink">4.9/5</span>
              </div>
              <p className="mt-0.5 text-sm text-smoke">
                from <span className="font-semibold text-ink">12,400+</span> verified homes
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
          className="relative mx-auto w-full max-w-[540px]"
        >
          <motion.div style={reduce ? undefined : { x: px, y: py }} className="relative">
            {/* Orbit rings */}
            <div aria-hidden className="absolute inset-[-8%] rounded-full border border-dashed border-ember/25 spin-badge [animation-duration:36s]" />
            <div aria-hidden className="absolute inset-[-2%] rounded-full border border-ink/[0.07]" />

            <div className="relative overflow-hidden rounded-[2.75rem] border border-white/70 shadow-lift">
              <img
                src="/images/Products/Digital RO.png"
                alt="Digital RO Water Purification System"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/[0.12] via-transparent to-transparent" />
              {/* Price chip */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/40 bg-ink/85 px-4 py-3 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Digital RO</p>
                  <p className="font-display text-lg font-bold leading-tight">
                    Contact for price
                  </p>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <GlassChip className="absolute -left-4 top-10 sm:-left-10" delay={0.9} duration={6}>
              <span className="grid size-9 place-items-center rounded-xl bg-blush text-ember">
                <AudioLines className="size-4.5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-none text-ink">RO + UV</p>
                <p className="mt-1 text-[11px] font-medium text-smoke">Multi-stage purification</p>
              </div>
            </GlassChip>

            <GlassChip className="absolute -right-3 top-1/3 sm:-right-8" delay={1.1} duration={8}>
              <span className="grid size-9 place-items-center rounded-xl bg-[#e7f5ee] text-leaf">
                <Wind className="size-4.5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-none text-ink">100%</p>
                <p className="mt-1 text-[11px] font-medium text-smoke">Pure drinking water</p>
              </div>
            </GlassChip>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
