import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/vehicle-recovery-24-7", label: "Recovery 24/7" },
  { to: "/garage-services", label: "Garage" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const chromeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = chromeRef.current;
    if (!el) return;
    const setHeight = () => {
      document.documentElement.style.setProperty("--site-chrome-h", `${el.offsetHeight}px`);
    };
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    window.addEventListener("resize", setHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeight);
    };
  }, [open]);

  return (
    <div ref={chromeRef} className="relative z-50">
      <div className="bg-ink text-white text-[11px] sm:text-xs tracking-wider uppercase">
        <div className="container-cars flex items-center justify-between gap-3 py-2">
          <span className="hidden sm:inline text-white/70 truncate">{SITE.tagline}</span>
          <span className="sm:hidden text-white/70">24/7 Recovery · Aberdeen</span>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 font-semibold text-white hover:text-primary transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden /> {SITE.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="container-cars flex items-center justify-between py-3 gap-4">
          <BrandLogo compact />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-semibold uppercase tracking-wider text-ink transition-colors relative group py-1 focus-visible:outline-none focus-visible:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 pulse-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label={`Call now ${SITE.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Now
            </a>
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md bg-ink text-white h-11 w-11 hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`lg:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ${
            open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          <nav className="container-cars flex flex-col py-2" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3.5 text-base font-semibold uppercase tracking-wider text-ink border-b border-border last:border-0 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary text-white px-4 py-3.5 text-sm font-bold uppercase tracking-wider"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </nav>
        </div>
      </header>

      <a
        href={`tel:${SITE.phoneTel}`}
        className="sm:hidden fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 text-sm font-bold uppercase tracking-wider shadow-2xl pulse-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        aria-label={`Call 24/7 ${SITE.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden /> Call 24/7
      </a>
    </div>
  );
}
