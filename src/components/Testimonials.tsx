import { BadgeCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading, Stagger, staggerChild } from "./motion-primitives";
import { cn } from "../utils/cn";

const TESTIMONIALS = [
  {
    quote:
      "The Digital RO is the best investment we made for our family. Pure water every day, and the maintenance is so easy.",
    name: "Maya Rodriguez",
    meta: "Digital RO · Delhi, IN",
    initials: "MR",
    bg: "from-ember to-apricot",
  },
  {
    quote:
      "Our office needed a commercial RO system. SRS delivered and installed it within a week. Excellent service!",
    name: "Daniel Kim",
    meta: "Commercial RO · Mumbai, IN",
    initials: "DK",
    bg: "from-[#2f6fed] to-[#7db3ff]",
  },
  {
    quote:
      "I bought the water purifier, then the mixer, then the geyser. SRS is slowly and beautifully taking over my kitchen.",
    name: "Priya Sharma",
    meta: "Water Purifier + Kitchen · Bangalore, IN",
    initials: "PS",
    bg: "from-[#1e9e6a] to-[#7fd8ad]",
  },
  {
    quote:
      "The Kangen Ionizer changed our lifestyle. Alkaline water on demand — our whole family loves it.",
    name: "Tom Wheeler",
    meta: "Kangen Ionizer · Chennai, IN",
    initials: "TW",
    bg: "from-[#7c4dff] to-[#c4a7ff]",
  },
  {
    quote:
      "The solar system was installed perfectly. Our electricity bills dropped significantly within the first month.",
    name: "Elena Moreau",
    meta: "Solar System · Hyderabad, IN",
    initials: "EM",
    bg: "from-[#d63384] to-[#ff9ec7]",
  },
  {
    quote:
      "I've referred four friends so far — they all got great deals on water purifiers. SRS has the best products.",
    name: "Jess & Aaron Cole",
    meta: "Referral members · Pune, IN",
    initials: "JC",
    bg: "from-[#0e7490] to-[#6ee7d8]",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Verified reviews"
          title={
            <>
              Loved in <span className="font-accent font-normal italic text-ember">120,000+</span> homes.
            </>
          }
          copy="Every review below is from a verified purchase, collected by an independent third party. We publish the tough ones too."
        />

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={staggerChild}
              className={cn(
                "group flex flex-col rounded-[2rem] border border-ink/[0.07] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
                i === 1 && "lg:-translate-y-4",
                i === 4 && "lg:translate-y-4"
              )}
            >
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-ember text-ember" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/[0.06] pt-5">
                <span
                  className={`grid size-11 place-items-center rounded-full bg-gradient-to-br ${t.bg} text-xs font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink">{t.name}</p>
                  <p className="truncate text-xs text-fog">{t.meta}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#e7f5ee] px-2.5 py-1 text-[10px] font-bold text-leaf">
                  <BadgeCheck className="size-3" /> Verified
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
