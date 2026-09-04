import { motion } from "framer-motion";
import { ArrowRight, Check, Droplet, Zap, Wind, Package, ShieldCheck, Wrench, Phone, Mail, MapPin, BadgeCheck } from "lucide-react";
import { Reveal, SectionHeading, Stagger, staggerChild } from "../components/motion-primitives";
import { cn } from "../utils/cn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type ProductCategory = {
  name: string;
  icon: any;
  description: string;
  products: string[];
  color: string;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    name: "Water Purification",
    icon: Droplet,
    description: "Advanced water purification systems for every need",
    products: [
      "RO Water Purifiers (Residential)",
      "Commercial RO Systems (50 LPH)",
      "Industrial RO Systems (150 LPH)",
      "UV Water Purifiers",
      "Alkaline Water Systems",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Solar Solutions",
    icon: Zap,
    description: "Sustainable energy solutions for homes and businesses",
    products: [
      "Solar Water Heaters",
      "Solar Panels & Systems",
      "Solar Inverters",
      "Battery Backup Systems",
      "Complete Solar Installations",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "HVAC Systems",
    icon: Wind,
    description: "Climate control solutions for optimal comfort",
    products: [
      "Air Conditioners (Split & Window)",
      "Commercial HVAC",
      "Air Coolers",
      "Ventilation Systems",
      "Installation & Maintenance",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Home Appliances",
    icon: Package,
    description: "Essential appliances for modern living",
    products: [
      "Washing Machines",
      "Refrigerators",
      "Microwave Ovens",
      "Kitchen Appliances",
      "Small Home Appliances",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "₹5,000 - ₹15,000",
    description: "Perfect for residential needs and small homes",
    features: [
      "Single RO/UV Water Purifier",
      "Standard installation included",
      "1-year warranty",
      "Annual maintenance available",
      "Basic customer support",
    ],
  },
  {
    name: "Standard Plan",
    price: "₹20,000 - ₹50,000",
    description: "Ideal for families and small businesses",
    features: [
      "Premium water purification system",
      "Solar water heater OR AC installation",
      "Professional installation",
      "2-year extended warranty",
      "Priority customer support",
      "Quarterly maintenance checks",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹75,000 - ₹1,50,000",
    description: "Complete solution for homes and offices",
    features: [
      "Commercial RO system (50-150 LPH)",
      "Solar panel installation (1-3 KW)",
      "Multiple appliances bundle",
      "Complete installation package",
      "3-year comprehensive warranty",
      "Monthly maintenance visits",
      "24/7 customer support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom Pricing",
    description: "Tailored solutions for large-scale requirements",
    features: [
      "Industrial-grade RO systems",
      "Complete solar energy setup",
      "Commercial HVAC installation",
      "Bulk appliance procurement",
      "Dedicated account manager",
      "AMC (Annual Maintenance Contract)",
      "On-site technical support",
      "Volume discounts available",
    ],
  },
];

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Installation Services",
    description: "Professional installation by certified technicians for all products",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Regular maintenance and quick repair services with genuine parts",
  },
  {
    icon: BadgeCheck,
    title: "AMC Packages",
    description: "Annual Maintenance Contracts for hassle-free operation and peace of mind",
  },
];

export default function Plans() {
  return (
    <div className="grain min-h-screen bg-porcelain font-body text-ink antialiased">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/4 size-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.12),transparent_70%)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-block rounded-full bg-gradient-to-r from-ember/20 to-apricot/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ember">
                Our Plans & Services
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Complete Solutions for{" "}
                <span className="bg-gradient-to-r from-ember to-apricot bg-clip-text text-transparent">
                  Every Need
                </span>
              </h1>
              <p className="mt-6 text-lg text-smoke sm:text-xl">
                From residential water purifiers to commercial solar installations,
                SRS Enterprises offers comprehensive plans tailored to your requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="What we offer"
              title={
                <>
                  Our{" "}
                  <span className="font-accent font-normal italic text-ember">comprehensive</span>{" "}
                  product range
                </>
              }
              copy="Explore our wide range of products across multiple categories"
            />

            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCT_CATEGORIES.map((category) => (
                <motion.div
                  key={category.name}
                  variants={staggerChild}
                  className="group relative overflow-hidden rounded-3xl border border-ink/[0.08] bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
                >
                  <div className={cn(
                    "inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br",
                    category.color,
                    "text-white shadow-lg"
                  )}>
                    <category.icon className="size-6" />
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-smoke">{category.description}</p>

                  <ul className="mt-4 space-y-2">
                    {category.products.map((product) => (
                      <li key={product} className="flex items-start gap-2 text-sm text-smoke">
                        <Check className="mt-0.5 size-4 shrink-0 text-ember" strokeWidth={2.5} />
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    aria-hidden
                    className={cn(
                      "absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20",
                      category.color
                    )}
                  />
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="relative py-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute right-1/4 top-1/2 size-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.08),transparent_65%)] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Flexible pricing"
              title={
                <>
                  Choose the{" "}
                  <span className="font-accent font-normal italic text-ember">perfect</span>{" "}
                  plan
                </>
              }
              copy="Transparent pricing with no hidden costs. All plans include professional installation."
            />

            <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRICING_PLANS.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={staggerChild}
                  className={cn(
                    "relative flex flex-col rounded-3xl p-8 transition-all duration-500",
                    plan.popular
                      ? "border border-white/10 bg-ink text-white shadow-lift lg:-my-4 lg:scale-[1.05]"
                      : "border border-ink/[0.08] bg-white shadow-soft hover:-translate-y-1.5 hover:shadow-lift"
                  )}
                >
                  {plan.popular && (
                    <>
                      <div aria-hidden className="absolute -right-20 -top-20 size-52 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.4),transparent_65%)] blur-2xl" />
                      <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-ember to-apricot px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-ember">
                        Most Popular
                      </span>
                    </>
                  )}

                  <div className="relative">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{plan.name}</h3>
                    <p className={cn("mt-2 text-sm", plan.popular ? "text-white/60" : "text-smoke")}>
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <p className="font-display text-3xl font-bold tracking-tight">{plan.price}</p>
                    </div>

                    <div className={cn("my-6 h-px", plan.popular ? "bg-white/10" : "bg-ink/[0.07]")} />

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            className={cn(
                              "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                              plan.popular ? "bg-ember/25 text-apricot" : "bg-blush text-ember"
                            )}
                          >
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className={cn("text-sm leading-snug", plan.popular ? "text-white/75" : "text-smoke")}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={cn(
                        "group mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all duration-300",
                        plan.popular
                          ? "bg-gradient-to-r from-ember to-[#f0701f] text-white shadow-ember hover:-translate-y-0.5"
                          : "bg-ink text-white hover:-translate-y-0.5 hover:bg-ember"
                      )}
                    >
                      Get Quote
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Beyond products"
              title={
                <>
                  Complete{" "}
                  <span className="font-accent font-normal italic text-ember">service</span>{" "}
                  support
                </>
              }
              copy="We don't just sell products, we ensure they work perfectly for years"
            />

            <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
              {SERVICES.map((service) => (
                <motion.div
                  key={service.title}
                  variants={staggerChild}
                  className="group rounded-3xl border border-ink/[0.08] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ember to-apricot text-white shadow-lg">
                    <service.icon className="size-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">{service.description}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ink via-ink to-ember/20 p-8 shadow-lift sm:p-12 lg:p-16">
                <div aria-hidden className="absolute -right-32 -top-32 size-96 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.3),transparent_65%)] blur-3xl" />

                <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Ready to get started?
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                      Contact us today for a free consultation and custom quote tailored to your specific needs.
                    </p>

                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-4 text-white/90">
                        <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10">
                          <Phone className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Call us</p>
                          <a href="tel:+919876543210" className="font-semibold hover:text-apricot transition-colors">
                            +91 98765 43210
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-white/90">
                        <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10">
                          <Mail className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Email us</p>
                          <a href="mailto:info@srsenterprise.com" className="font-semibold hover:text-apricot transition-colors">
                            info@srsenterprise.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-white/90">
                        <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/10">
                          <MapPin className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60">Visit us</p>
                          <p className="font-semibold">Shop No. 1, SRS Complex<br/>Main Market, Sector 15</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <h3 className="font-display text-xl font-semibold">Get a Free Quote</h3>
                    <form className="mt-6 space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm outline-none transition-all focus:border-ember focus:ring-2 focus:ring-ember/20"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm outline-none transition-all focus:border-ember focus:ring-2 focus:ring-ember/20"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm outline-none transition-all focus:border-ember focus:ring-2 focus:ring-ember/20"
                      />
                      <select className="w-full rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm outline-none transition-all focus:border-ember focus:ring-2 focus:ring-ember/20">
                        <option>Select a Plan</option>
                        <option>Basic Plan</option>
                        <option>Standard Plan</option>
                        <option>Premium Plan</option>
                        <option>Enterprise Plan</option>
                      </select>
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        className="w-full rounded-xl border border-ink/10 bg-porcelain px-4 py-3 text-sm outline-none transition-all focus:border-ember focus:ring-2 focus:ring-ember/20"
                      />
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-ember to-apricot py-4 text-sm font-bold text-white shadow-ember transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Submit Request
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
