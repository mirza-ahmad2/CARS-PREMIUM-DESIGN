import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-1.5 diag-stripes" aria-hidden />
      <div className="container-cars py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo onDark link compact imgClassName="h-10 sm:h-11" />
            <p className="mt-5 text-sm text-white/70 max-w-xs leading-relaxed">
              {SITE.tagline}. Aberdeen &amp; the North East.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:border-primary hover:text-primary transition-all"
                aria-label="CARS on LinkedIn"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/45" title="Facebook">
                <Facebook className="h-4 w-4" aria-hidden /> Add here
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/45" title="Instagram">
                <Instagram className="h-4 w-4" aria-hidden /> Add here
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-4 font-sans font-semibold uppercase">
              Navigate
            </p>
            <ul className="space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/about-us", "About Us"],
                ["/vehicle-recovery-24-7", "Vehicle Recovery 24/7"],
                ["/garage-services", "Garage Services"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/80 hover:text-primary transition-colors inline-flex hover:translate-x-0.5 duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-4 font-sans font-semibold uppercase">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>24/7 Recovery</li>
              <li>Roadside Assistance</li>
              <li>Garage Services</li>
              <li>MOT Checks</li>
              <li>Valeting</li>
              <li>Secure Storage</li>
              <li>Fuel Decontamination</li>
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-4 font-sans font-semibold uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="hover:text-primary font-semibold transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-primary break-all transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span>© {new Date().getFullYear()} CARS Recovery &amp; Garage Services Ltd.</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
          <a
            href="https://theinnovations.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary tracking-wider transition-colors"
          >
            Powered by The Innovations
          </a>
        </div>
      </div>
    </footer>
  );
}
