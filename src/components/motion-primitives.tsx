import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { cn } from "../utils/cn";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Stagger --------------------------------- */

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Counter --------------------------------- */

export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, prefix, suffix, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/* ---------------------------------- Magnet --------------------------------- */

export function Magnet({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  return (
    <motion.div
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------ Section heading ----------------------------- */

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]",
        dark
          ? "border-white/15 bg-white/5 text-apricot"
          : "border-ink/10 bg-white/60 text-ember backdrop-blur"
      )}
    >
      <span className="relative flex size-1.5">
        <span
          className={cn(
            "absolute inline-flex size-full rounded-full",
            dark ? "bg-apricot" : "bg-ember"
          )}
        />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  dark = false,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              dark ? "text-white/60" : "text-smoke"
            )}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}
