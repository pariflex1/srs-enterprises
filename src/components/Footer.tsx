import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "./Navbar";
import { Reveal } from "./motion-primitives";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Shop", links: ["Water Purifiers", "RO Systems", "Solar Systems", "Home Appliances", "Kitchen Appliances", "All Products"] },
  { title: "Company", links: ["Our story", "Products", "Sustainability", "Careers", "Contact"] },
  { title: "Support", links: ["Contact us", "Warranty & care", "Service centers", "Track order", "Bulk orders"] },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: XIcon, label: "X (Twitter)" },
  { icon: YoutubeIcon, label: "YouTube" },
  { icon: FacebookIcon, label: "Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink pb-10 pt-20 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 size-96 rounded-full bg-[radial-gradient(circle,rgb(232_85_31/0.14),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 border-b border-white/[0.08] pb-14 lg:flex-row lg:items-center">
            <div className="max-w-md">
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                The Quiet Home — our monthly dispatch.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Design notes, owner-only offers, and early access to launches. One email a
                month, worth opening.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubscribed(false); }}
                placeholder="you@home.com"
                className="w-full rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-sm text-white placeholder:text-white/35 transition-colors focus:border-ember/60 focus:outline-none"
              />
              <button
                type="submit"
                className={`grid size-[52px] shrink-0 place-items-center rounded-full text-white shadow-ember transition-all duration-300 hover:-translate-y-0.5 ${
                  subscribed ? "bg-leaf" : "bg-gradient-to-br from-ember to-apricot"
                }`}
                aria-label={subscribed ? "Subscribed" : "Subscribe"}
              >
                {subscribed ? <Check className="size-5" /> : <ArrowRight className="size-5" />}
              </button>
            </form>
          </div>
        </Reveal>

        <div className="grid gap-12 py-14 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Premium water purification, home appliances, and solar solutions — engineered for quality and built to last.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:bg-ember hover:text-white"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                      >
                        <span className="h-px w-0 bg-ember transition-all duration-300 group-hover:w-3" />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 SRS Enterprises, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#top" className="transition-colors hover:text-white">Privacy</a>
            <a href="#top" className="transition-colors hover:text-white">Terms</a>
            <a href="#top" className="transition-colors hover:text-white">Accessibility</a>
          </div>
        </div>

        {/* Watermark */}
        <div aria-hidden className="pointer-events-none select-none pt-10 text-center">
          <p className="font-display text-[clamp(4rem,14vw,11rem)] font-bold leading-none tracking-tight text-white/[0.04]">
            SRS ENTERPRISES
          </p>
        </div>
      </div>
    </footer>
  );
}
