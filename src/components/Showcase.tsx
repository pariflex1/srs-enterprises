import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Plus, Star } from "lucide-react";
import { EASE, Reveal, SectionHeading } from "./motion-primitives";
import { cn } from "../utils/cn";

type Category = "All" | "Water Purifier" | "RO System" | "Appliance" | "Solar" | "Kitchen";

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  price?: number;
  compareAt?: number;
  rating: number;
  reviews: string;
  tag?: string;
  img: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    id: "water-purifier",
    name: "Water Purifier",
    category: "Water Purifier",
    rating: 4.8,
    reviews: "1,240",
    tag: "Popular",
    img: "/images/Products/Water Purifier.png",
    alt: "Water Purifier",
  },
  {
    id: "kangen-ionizer",
    name: "Kangen Alkaline Water Ionizer",
    category: "Water Purifier",
    rating: 4.9,
    reviews: "890",
    tag: "Premium",
    img: "/images/Products/Kangen Alkaline Water Ionizer.png",
    alt: "Kangen Alkaline Water Ionizer",
  },
  {
    id: "ionizer",
    name: "Ionizer",
    category: "Water Purifier",
    rating: 4.7,
    reviews: "654",
    img: "/images/Products/Ionizer.png",
    alt: "Ionizer",
  },
  {
    id: "water-dispenser",
    name: "Water Dispenser",
    category: "Water Purifier",
    rating: 4.6,
    reviews: "780",
    img: "/images/Products/Water Dispenser.png",
    alt: "Water Dispenser",
  },
  {
    id: "water-conditioner",
    name: "Water Conditioner",
    category: "Water Purifier",
    rating: 4.5,
    reviews: "432",
    img: "/images/Products/Water Conditioner.png",
    alt: "Water Conditioner",
  },
  {
    id: "digital-ro",
    name: "Digital RO",
    category: "RO System",
    rating: 4.8,
    reviews: "1,100",
    tag: "Best seller",
    img: "/images/Products/Digital RO.png",
    alt: "Digital RO System",
  },
  {
    id: "aqua-ro-black",
    name: "Aqua Addition RO Black",
    category: "RO System",
    rating: 4.7,
    reviews: "876",
    img: "/images/Products/Aqua Addition RO Black.png",
    alt: "Aqua Addition RO Black",
  },
  {
    id: "aqua-ro-white",
    name: "Aqua Addition RO White",
    category: "RO System",
    rating: 4.7,
    reviews: "876",
    img: "/images/Products/Aqua Addition RO White.png",
    alt: "Aqua Addition RO White",
  },
  {
    id: "commercial-ro",
    name: "Commercial Reverse Osmosis System",
    category: "RO System",
    rating: 4.9,
    reviews: "320",
    tag: "Commercial",
    img: "/images/Products/Commercial Reverse Osmosis System.png",
    alt: "Commercial Reverse Osmosis System",
  },
  {
    id: "50lph-purifier",
    name: "50 LPH Water Purifier",
    category: "RO System",
    rating: 4.6,
    reviews: "210",
    img: "/images/Products/50 LPH Water Purifier.png",
    alt: "50 LPH Water Purifier",
  },
  {
    id: "150lph-cooler",
    name: "150 LPH Cooler",
    category: "RO System",
    rating: 4.5,
    reviews: "180",
    img: "/images/Products/150 LPH Cooler.png",
    alt: "150 LPH Cooler",
  },
  {
    id: "smart-led-tv",
    name: "Smart LED TV",
    category: "Appliance",
    rating: 4.8,
    reviews: "2,340",
    tag: "New",
    img: "/images/Products/Smart LED TV.png",
    alt: "Smart LED TV",
  },
  {
    id: "washing-machine",
    name: "Washing Machine",
    category: "Appliance",
    rating: 4.7,
    reviews: "1,560",
    img: "/images/Products/Washing Machine.png",
    alt: "Washing Machine",
  },
  {
    id: "geyser",
    name: "Geyser",
    category: "Appliance",
    rating: 4.6,
    reviews: "980",
    img: "/images/Products/Geyser.png",
    alt: "Geyser",
  },
  {
    id: "mixer",
    name: "Mixer",
    category: "Kitchen",
    rating: 4.5,
    reviews: "760",
    img: "/images/Products/Mixer.png",
    alt: "Mixer",
  },
  {
    id: "solar-system",
    name: "Solar System",
    category: "Solar",
    rating: 4.9,
    reviews: "420",
    tag: "Eco",
    img: "/images/Products/Solar System.png",
    alt: "Solar System",
  },
  {
    id: "indexn",
    name: "Indexn",
    category: "Water Purifier",
    rating: 4.4,
    reviews: "310",
    img: "/images/Products/Indexn.png",
    alt: "Indexn Water System",
  },
];

const TABS: Category[] = ["All", "Water Purifier", "RO System", "Appliance", "Kitchen", "Solar"];

function ProductCard({ p, index }: { p: Product; index: number }) {
  const [added, setAdded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.3 } }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: EASE }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-ink/[0.07] bg-cream shadow-soft transition-shadow duration-500 group-hover:shadow-lift">
        {p.tag && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-ink px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            {p.tag}
          </span>
        )}
        <img
          src={p.img}
          alt={p.alt}
          loading="lazy"
          className="aspect-square w-full object-contain p-6"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add */}
        <button
          onClick={() => setAdded(true)}
          aria-label={`Add ${p.name} to cart`}
          className={cn(
            "absolute bottom-4 right-4 grid size-12 place-items-center rounded-full shadow-lift transition-all duration-400 active:scale-90",
            "translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100",
            added ? "bg-leaf text-white" : "bg-white text-ink hover:bg-ink hover:text-white"
          )}
        >
          {added ? <Check className="size-5" /> : <Plus className="size-5" />}
        </button>
      </div>

      <div className="flex flex-1 flex-col px-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">{p.category}</p>
          <div className="flex items-center gap-1 text-xs font-semibold text-ink">
            <Star className="size-3.5 fill-ember text-ember" />
            {p.rating}
            <span className="font-normal text-fog">({p.reviews})</span>
          </div>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-ink">
          {p.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="font-display text-xl font-bold text-ink">
            {p.price ? (
              <>
                ${p.price}
                {p.compareAt && (
                  <span className="ml-2 text-sm font-medium text-fog line-through">${p.compareAt}</span>
                )}
              </>
            ) : (
              <span className="text-sm font-medium text-fog">Contact for price</span>
            )}
          </p>
          <button
            onClick={() => setAdded(true)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all duration-300",
              added
                ? "bg-leaf/10 text-leaf"
                : "bg-ink/[0.05] text-ink hover:bg-ink hover:text-white"
            )}
          >
            {added ? (
              <>
                <Check className="size-3.5" /> Added
              </>
            ) : (
              "Add to cart"
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Showcase() {
  const [tab, setTab] = useState<Category>("All");
  const visible = tab === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === tab);

  return (
    <section id="showcase" className="relative scroll-mt-24 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-15%] top-1/4 size-[560px] rounded-full bg-[radial-gradient(circle,rgb(255_178_94/0.14),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The collection"
          title={
            <>
              Quality products.{" "}
              <span className="font-accent font-normal italic text-ember">Trusted</span> by thousands.
            </>
          }
          copy="From water purifiers to solar systems — explore our complete range of home and commercial solutions."
        />

        {/* Tabs */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Filter products by category">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                  tab === t ? "text-white" : "text-smoke hover:text-ink"
                )}
              >
                {tab === t && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 rounded-full bg-ink shadow-soft"
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <ProductCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-16 text-center">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <span className="border-b border-ink/20 pb-0.5 transition-colors group-hover:border-ember group-hover:text-ember">
              Contact us for bulk pricing and custom bundles
            </span>
            <ArrowRight className="size-4 text-ember transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
