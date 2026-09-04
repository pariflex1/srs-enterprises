import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { EASE, Eyebrow, Reveal } from "./motion-primitives";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "How does the 10-year warranty actually work?",
    a: "Every SRS motor is covered for 10 years, and all parts and labor for 2 years — register within 30 days and we extend parts coverage to 4. If anything fails, we repair it in-home at one of 500+ hubs or replace it outright. No fine-print gymnastics.",
  },
  {
    q: "What is the 30-night home trial?",
    a: "Use any appliance in your real life — not a showroom — for 30 nights. If it doesn't earn its place, schedule a free pickup and we'll refund every cent. 98% of homes keep theirs.",
  },
  {
    q: "How does the referral program pay out?",
    a: "Share your personal link; friends get 20% off plus free shipping. The day their order ships, $25 in credit lands in your SRS account. Credits never expire, stack with bundles, and there's no limit on how many friends you refer.",
  },
  {
    q: "Can I pay monthly?",
    a: "Yes — every product and bundle splits into 12 payments at 0% APR through our financing partner. Pre-qualification takes 30 seconds and uses a soft credit check, so it never affects your score.",
  },
  {
    q: "How fast is shipping and setup?",
    a: "Orders ship free within 24 hours and arrive in 2 business days nationwide. In most metro areas, Complete Home and Estate bundles include white-glove delivery, placement, and onboarding.",
  },
  {
    q: "What if I already own an older appliance?",
    a: "Our trade-in program accepts appliances from any brand, working or not. You'll get instant credit — up to $120 — and we'll refurbish or responsibly recycle the old unit. Nothing goes to landfill.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border transition-all duration-400",
        open ? "border-ember/25 bg-white shadow-soft" : "border-ink/[0.08] bg-white/60 hover:bg-white"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
      >
        <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">{q}</span>
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400",
            open ? "rotate-45 border-ember bg-ember text-white" : "border-ink/15 text-ink"
          )}
        >
          <Plus className="size-4.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-smoke sm:px-7">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-ink/[0.07] bg-white/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>Good questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
              Everything, answered{" "}
              <span className="font-accent font-normal italic text-ember">honestly.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-smoke">
              Can’t find what you’re looking for? A real human — not a bot pretending to
              be one — replies in about two minutes.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="#top"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="relative grid size-9 place-items-center rounded-full bg-[#e7f5ee] text-leaf">
                <MessageCircle className="size-4.5" />
                <span className="absolute right-0 top-0 size-2.5 rounded-full border-2 border-white bg-leaf" />
              </span>
              Chat with support
              <span className="text-xs font-medium text-fog">· ~2 min</span>
            </a>
          </Reveal>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
