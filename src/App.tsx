import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Referral from "./components/Referral";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen bg-porcelain font-body text-ink antialiased">
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Referral />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
