import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, Gift, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import { EASE } from "./motion-primitives";

const LINKS = [
  { label: "Products", href: "/#showcase" },
  { label: "Why SRS", href: "/#features" },
  { label: "Plans", href: "/plans" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Bundles", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="SRS Enterprises home">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-ember to-apricot font-display text-lg font-bold text-white shadow-ember transition-transform duration-500 group-hover:rotate-[8deg]">
        S
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", dark ? "text-white" : "text-ink")}>
          SRS
        </span>
        <span className={cn("text-[9px] font-semibold uppercase tracking-[0.32em]", dark ? "text-white/50" : "text-smoke")}>
          Enterprises
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-ember to-apricot"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500",
          scrolled
            ? "border-b border-ink/[0.06] bg-porcelain shadow-[0_8px_32px_-16px_rgb(24_20_16/0.15)]"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-smoke transition-colors duration-300 hover:text-ink"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#referral"
              className="group hidden items-center gap-2 rounded-full border border-ember/25 bg-blush/60 px-4 py-2 text-sm font-semibold text-ember-deep transition-all duration-300 hover:border-ember/50 hover:bg-blush md:inline-flex"
            >
              <Gift className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
              Refer &amp; earn $25
              <span className="size-1.5 rounded-full bg-ember animate-pulse-dot" />
            </a>
            <a
              href="#showcase"
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-ember hover:shadow-ember sm:inline-flex"
            >
              Shop now
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white text-ink lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="overflow-hidden border-b border-ink/[0.06] bg-porcelain lg:hidden"
            >
              <ul className="space-y-1 px-6 py-6">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-xl font-semibold text-ink transition-colors hover:bg-white"
                    >
                      {l.label}
                      <ArrowRight className="size-4 text-fog" />
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.4, ease: EASE }}
                  className="flex gap-3 pt-3"
                >
                  <a
                    href="#showcase"
                    onClick={() => setOpen(false)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-white"
                  >
                    Shop now <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="#referral"
                    onClick={() => setOpen(false)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ember/30 bg-blush px-5 py-3.5 text-sm font-semibold text-ember-deep"
                  >
                    <Gift className="size-4" /> Refer &amp; earn
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
