import { ArrowRight, Check, RefreshCcw, ShieldCheck, Truck } from "lucide-react";
import { Reveal, SectionHeading, Stagger, staggerChild } from "./motion-primitives";
import { cn } from "../utils/cn";

type Plan = {
  name: string;
  blurb: string;
  items: string[];
  features: string[];
  featured?: boolean;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Residential",
    blurb: "Perfect for homes and small offices.",
    items: ["Water Purifiers", "RO Systems", "Home Appliances"],
    features: [
      "Free installation",
      "1-year warranty",
      "Annual maintenance available",
      "EMI options available",
    ],
    cta: "Get Quote",
  },
  {
    name: "Commercial",
    blurb: "For businesses and large-scale needs.",
    items: ["Commercial RO", "50/150 LPH Systems", "Solar Solutions"],
    features: [
      "Custom installation",
      "Extended warranty",
      "On-site service support",
      "Bulk pricing available",
    ],
    featured: true,
    cta: "Get Quote",
  },
  {
    name: "Enterprise",
    blurb: "Complete water and energy solutions.",
    items: ["Full Range", "Custom Solutions", "Annual Contracts"],
    features: [
      "Dedicated account manager",
      "Priority support",
      "Annual maintenance contracts",
      "Volume discounts",
    ],
    cta: "Contact Us",
  },
];

const ASSURANCES = [
  { icon: ShieldCheck, label: "30-night home trial" },
  { icon: Truck, label: "Free 2-day shipping" },
  { icon: RefreshCcw, label: "Free returns pickup" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 size-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.07),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our plans"
          title={
            <>
              Tailored solutions,{" "}
              <span className="font-accent font-normal italic text-ember">honest</span> pricing.
            </>
          }
          copy="Choose the plan that fits your needs. Contact us for custom quotes and bulk pricing."
        />

        <Stagger className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <motion.div
              key={p.name}
              variants={staggerChild}
              className={cn(
                "relative flex flex-col rounded-[2.25rem] p-8 transition-all duration-500 sm:p-10",
                p.featured
                  ? "border border-white/10 bg-ink text-white shadow-lift lg:-my-4 lg:scale-[1.02]"
                  : "border border-ink/[0.08] bg-white shadow-soft hover:-translate-y-1.5 hover:shadow-lift"
              )}
            >
              {p.featured && (
                <>
                  <div aria-hidden className="absolute -right-20 -top-20 size-52 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.4),transparent_65%)] blur-2xl" />
                  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-ember to-apricot px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-ember">
                    Most popular
                  </span>
                </>
              )}

              <div className="relative">
                <h3 className="font-display text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className={cn("mt-1 text-sm", p.featured ? "text-white/55" : "text-smoke")}>{p.blurb}</p>

                <div className="mt-7 flex h-16 items-end gap-2 overflow-hidden">
                  <p className="font-display text-3xl font-bold tracking-tight">
                    Contact for pricing
                  </p>
                </div>

                <div className={cn("my-7 h-px", p.featured ? "bg-white/10" : "bg-ink/[0.07]")} />

                <p className={cn("text-[11px] font-bold uppercase tracking-[0.18em]", p.featured ? "text-apricot" : "text-ember")}>
                  {p.items.join(" · ")}
                </p>
                <ul className="mt-4 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          p.featured ? "bg-ember/25 text-apricot" : "bg-blush text-ember"
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={cn("text-sm leading-snug", p.featured ? "text-white/75" : "text-smoke")}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "group mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all duration-300",
                    p.featured
                      ? "bg-gradient-to-r from-ember to-[#f0701f] text-white shadow-ember hover:-translate-y-0.5"
                      : "bg-ink text-white hover:-translate-y-0.5 hover:bg-ember"
                  )}
                >
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className={cn("mt-4 text-center text-[11px]", p.featured ? "text-white/40" : "text-fog")}>
                  Custom solutions available. Contact us for details.
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {ASSURANCES.map((a) => (
              <span key={a.label} className="inline-flex items-center gap-2 text-sm font-semibold text-smoke">
                <a.icon className="size-4.5 text-ember" />
                {a.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
