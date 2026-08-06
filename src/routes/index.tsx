import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck, Truck, Wrench, Car,
  KeyRound, Fuel, BatteryCharging, CircleDot, Gauge, SprayCan,
  PackageCheck, Warehouse, ArrowRight, Check, PhoneCall, Send, Quote, Star,
} from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { pageSeo, SITE } from "@/lib/site";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImg from "@/assets/hero-recovery.jpg";
import workshopImg from "@/assets/workshop.jpg";
import recoveryImg from "@/assets/recovery-service.jpg";
import fleetImg from "@/assets/fleet.jpg";
import fleet2 from "@/assets/fleet-2.jpg";
import fleet3 from "@/assets/fleet-3.jpg";
import philipImg from "@/assets/philip-patterson.png";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "CARS Recovery & Garage Services | 24/7 Vehicle Recovery Aberdeen",
      description:
        "24/7 vehicle recovery, roadside assistance, workshop repairs, MOT, servicing, valeting, transport and secure storage across Aberdeen and the North East.",
      path: "/",
    }),
  component: HomePage,
});

/* ----------------------------------------------------------- */

function HomePage() {
  return (
    <Layout>
      <Hero />
      <TwoCore />
      <RecoveryServices />
      <GarageServices />
      <TrustBar />
      <About />
      <Fleet />
      <RecoveryProcess />
      <WorkshopProcess />
      <ServiceArea />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

/* ------------------ HERO ------------------ */
function Hero() {
  const badges = [
    "24/7 Recovery",
    "Roadside Assist",
    "Workshop Repairs",
    "Secure Storage",
    "ISO 9001",
  ];

  return (
    <section
      className="relative bg-ink text-white overflow-hidden flex flex-col min-h-[calc(100dvh-var(--site-chrome-h,5.5rem))]"
      style={{ minHeight: "calc(100dvh - var(--site-chrome-h, 5.5rem))" }}
    >
      <img
        src={heroImg}
        alt="CARS recovery truck on a wet Aberdeen road at night"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="absolute top-0 left-0 h-1 w-full diag-stripes z-[1]" aria-hidden />

      <div className="container-cars relative z-[1] flex-1 flex flex-col justify-center py-5 sm:py-6 min-h-0">
        <div className="grid lg:grid-cols-12 gap-5 xl:gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/90 reveal-up">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden />
              24/7 Emergency · Aberdeen &amp; North East
            </div>
            <h1 className="mt-3 sm:mt-3.5 text-[clamp(1.75rem,4.2vw,3.75rem)] font-black leading-[0.95] reveal-up">
              24/7 Vehicle Recovery
              <br />
              <span className="text-primary text-glow-red">&amp; Garage Services</span>
              <br />
              in Aberdeen.
            </h1>
            <p className="mt-3 sm:mt-3.5 max-w-xl text-xs sm:text-sm md:text-[0.95rem] text-white/75 leading-relaxed reveal-up">
              Fast roadside assistance, damage-free recovery, workshop repairs, servicing, MOT
              checks, vehicle storage and transport support across Aberdeen and the North East.
            </p>

            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 reveal-up">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-[13px] font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] pulse-red btn-press"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden /> Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-white text-ink px-5 text-[13px] font-bold uppercase tracking-wider hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] btn-press"
              >
                Request Recovery <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                to="/garage-services"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/35 bg-white/5 px-5 text-[13px] font-bold uppercase tracking-wider hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 btn-press"
              >
                Garage Services
              </Link>
            </div>
          </div>

          {/* Emergency caller card */}
          <div className="lg:col-span-5 xl:col-span-4 flex">
            <div className="relative w-full rounded-xl bg-white/[0.06] border border-white/12 backdrop-blur-xl p-4 sm:p-5 overflow-hidden flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.35)] reveal-up">
              <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-primary/25 blur-3xl pointer-events-none" aria-hidden />
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden /> Live · 24/7
              </div>
              <h2 className="mt-2.5 font-display text-xl sm:text-2xl leading-tight normal-case tracking-normal text-white">
                Need recovery right now?
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-white/70 leading-relaxed">
                One call, dispatched immediately. Roadside, home or workplace.
              </p>

              <div className="mt-3.5 space-y-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="group flex items-center justify-between gap-3 rounded-lg bg-primary px-3.5 py-3 hover:bg-[color:var(--brand-red-deep)] transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  aria-label={`Call primary number ${SITE.phone}`}
                >
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase tracking-widest text-white/85 font-semibold">Primary</div>
                    <div className="font-display text-lg sm:text-xl tracking-wide truncate">{SITE.phone}</div>
                  </div>
                  <PhoneCall className="h-5 w-5 shrink-0 group-hover:rotate-12 transition-transform duration-300" aria-hidden />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 rounded-lg bg-white/5 px-3.5 py-2.5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label={`Email ${SITE.email}`}
                >
                  <Mail className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden />
                  <span className="text-xs sm:text-sm break-all">{SITE.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service strip — full-width aligned bar */}
      <div className="relative z-[1] border-t border-white/10 bg-black/40 backdrop-blur-md shrink-0 mt-auto">
        <div className="container-cars">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
            {badges.map((b) => (
              <li
                key={b}
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-white/80 px-2 py-2.5 sm:py-3 text-center font-semibold hover:text-white hover:bg-white/5 transition-colors"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------ TWO CORE ------------------ */
function TwoCore() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-cars">
        <SectionHeader
          eyebrow="What we do"
          title="Two core services. One reliable team."
          intro="Recovery and workshop capabilities operating under one roof — every job handled by the same experienced Aberdeen crew."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <CoreCard
            image={recoveryImg}
            eyebrow="CARS Recovery"
            title="24/7 vehicle recovery you can call any time"
            points={[
              "Emergency accident recovery",
              "Roadside assistance & breakdown",
              "Damage-free vehicle transport",
              "Fast North East response",
            ]}
            cta={{ label: "Get recovered now", href: `tel:${SITE.phoneTel}`, primary: true }}
            secondary={{ label: "Recovery details", to: "/vehicle-recovery-24-7" }}
          />
          <CoreCard
            image={workshopImg}
            eyebrow="Workshop Services"
            title="Repairs, servicing & MOT under one roof"
            points={[
              "MOT checks & full servicing",
              "Mechanical & diagnostic repairs",
              "Valeting & finishing",
              "Collection & delivery",
            ]}
            cta={{ label: "Book workshop service", to: "/garage-services" }}
            secondary={{ label: "Garage details", to: "/garage-services" }}
          />
        </div>
      </div>
    </section>
  );
}

function CoreCard({
  image, eyebrow, title, points, cta, secondary,
}: {
  image: string;
  eyebrow: string;
  title: string;
  points: string[];
  cta: { label: string; href?: string; to?: string; primary?: boolean };
  secondary: { label: string; to: string };
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-ink text-white">
      <div className="relative h-72 overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary text-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold">
          <span className="h-1.5 w-1.5 bg-white rounded-full" /> {eyebrow}
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full diag-stripes" />
      </div>
      <div className="p-7 md:p-9">
        <h3 className="text-3xl md:text-4xl">{title}</h3>
        <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-white/80">
              <span className="mt-1 h-1.5 w-1.5 bg-primary rounded-full flex-none" /> {p}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          {cta.href ? (
            <a href={cta.href} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
              {cta.label} <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <Link to={cta.to!} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
              {cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <Link to={secondary.to} className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-bold uppercase tracking-wider hover:border-primary">
            {secondary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------ RECOVERY SERVICES ------------------ */
const RECOVERY_ITEMS = [
  { icon: Truck, title: "Breakdown Recovery", body: "Fast dispatch for cars, vans and light commercial vehicles." },
  { icon: ShieldCheck, title: "Accident Recovery", body: "Damage-free removal, cleared scene, safely relocated." },
  { icon: PhoneCall, title: "Roadside Assistance", body: "Technicians attend at the roadside, home or workplace." },
  { icon: Car, title: "Vehicle Transport", body: "Point-to-point car and van movement across the North East." },
  { icon: BatteryCharging, title: "Battery Jump Starts", body: "Flat battery? We'll get you moving again." },
  { icon: CircleDot, title: "Wheel Changes", body: "Punctures and blowouts handled roadside." },
  { icon: KeyRound, title: "Lock Outs", body: "Locked out or lost keys — we open safely." },
  { icon: Fuel, title: "Fuel Decontamination", body: "Misfuelled? On-site fuel drain and decontamination." },
  { icon: Gauge, title: "Diagnostics", body: "Fault codes read, next steps advised on the spot." },
];

function RecoveryServices() {
  return (
    <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full diag-stripes" />
      <div className="container-cars">
        <SectionHeader
          dark
          eyebrow="Recovery 24/7"
          title="Vehicle Recovery, any time, any weather"
          intro="Fast, efficient, damage-free vehicle recovery with an extensive, versatile fleet. Roadside technicians attend on the road, at home, or at work — around the clock."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECOVERY_ITEMS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.07] hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <div className="mt-5 font-display text-2xl">{title}</div>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
            <Phone className="h-4 w-4" /> Call for 24/7 recovery
          </a>
          <Link to="/vehicle-recovery-24-7" className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-primary">
            See full recovery details →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------ GARAGE SERVICES ------------------ */
const GARAGE_ITEMS = [
  { icon: ShieldCheck, title: "MOT Checks" },
  { icon: Wrench, title: "Servicing" },
  { icon: Gauge, title: "Repairs" },
  { icon: CircleDot, title: "Diagnostics" },
  { icon: SprayCan, title: "Valeting" },
  { icon: PackageCheck, title: "Collection & Delivery" },
  { icon: Warehouse, title: "Secure Vehicle Storage" },
  { icon: Wrench, title: "Workshop Support" },
];

function GarageServices() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-cars grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            align="left"
            eyebrow="Garage Services"
            title="Workshop that keeps you moving"
            intro="Our workshop team's vehicle knowledge is drawn directly from years of recovery and roadside work — a rare depth of experience for every car, van and light commercial we service."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/garage-services" className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-primary transition-colors">
              Book garage service <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-md border-2 border-ink px-6 py-3 font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-white">
              <Phone className="h-4 w-4" /> Talk to us
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-3">
            {GARAGE_ITEMS.map(({ icon: Icon, title }) => (
              <div key={title} className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 hover:border-primary hover:bg-white hover:shadow-lg transition-all">
                <div className="h-11 w-11 rounded-md bg-ink text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="font-display text-lg text-ink">{title}</div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ TRUST BAR ------------------ */
function TrustBar() {
  const TRUST = [
    { k: "24/7", v: "Recovery support" },
    { k: "ISO 9001", v: "TÜV certified" },
    { k: "Fast", v: "North East response" },
    { k: "Damage-free", v: "Handling focus" },
  ];
  const POINTS = [
    "Latest recovery vehicle platforms and equipment",
    "Experienced roadside technicians on every call",
    "Workshop and recovery under one roof",
    "Secure on-site vehicle storage",
    "Fast response across Aberdeen and the North East",
    "Damage-free vehicle handling as standard",
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-cars">
        <SectionHeader
          eyebrow="Why CARS"
          title="Built for speed, safety & trust"
          intro="An accredited operator with the fleet, the equipment and the experience to handle any recovery or workshop job."
        />
        <div className="mt-14 grid md:grid-cols-4 gap-4">
          {TRUST.map((t) => (
            <div key={t.k} className="rounded-xl bg-ink text-white p-7 relative overflow-hidden group">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="font-display text-5xl text-primary">{t.k}</div>
              <div className="mt-2 text-sm text-white/70 uppercase tracking-widest">{t.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-3">
          {POINTS.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-lg bg-white border border-border p-5">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-none">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-ink">{p}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-ink text-white p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-md diag-stripes flex items-center justify-center">
              <ShieldCheck className="h-7 w-7 text-white drop-shadow" />
            </div>
            <div>
              <div className="font-display text-2xl">Accredited & audited</div>
              <p className="text-sm text-white/70">ISO 9001 (TÜV-certified) quality management. PAS 43 accreditation pending confirmation.</p>
            </div>
          </div>
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
            <Phone className="h-4 w-4" /> Call the team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------ ABOUT ------------------ */
function About() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="container-cars grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <SectionHeader
            align="left"
            eyebrow="About Us"
            title="A trusted Aberdeen team, built on reliability"
            intro="CARS Recovery & Garage Services is an established recovery and vehicle services team operating across Aberdeen and the North East — covering recovery, roadside assistance, workshop repairs, servicing, transport, storage, collection and delivery."
          />
          <p className="mt-6 text-lg text-ink font-display leading-tight">
            "Built around reliability, fast response, and dependable workmanship."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">— Philip Patterson, Owner</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { k: "Recovery", v: "24/7 dispatch" },
              { k: "Workshop", v: "Full service" },
              { k: "Storage", v: "Secure yard" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-border p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-display text-xl text-ink">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/about-us" className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-primary transition-colors">
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Founder card */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ink via-[#1a1a1a] to-[#2a0d10] aspect-[4/5] max-w-lg mx-auto">
            <div className="absolute inset-0 diag-stripes opacity-10" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-primary text-white px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold z-10">
              <span className="h-1.5 w-1.5 bg-white rounded-full" /> Leadership
            </div>
            <img
              src={philipImg}
              alt="Philip Patterson, Owner of CARS Recovery & Garage Services"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom drop-shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
              <div className="font-display text-3xl text-white">Philip Patterson</div>
              <div className="text-sm text-white/70 uppercase tracking-widest mt-1">Owner · CARS Recovery Ltd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ FLEET ------------------ */
function Fleet() {
  const items = [
    { img: fleetImg, title: "Recovery trucks", body: "Modern flatbed and specialist recovery platforms." },
    { img: fleet2, title: "Rotator & heavy recovery", body: "For accident scenes and complex extractions." },
    { img: fleet3, title: "Enclosed transport", body: "Secure long-distance vehicle movement." },
    { img: recoveryImg, title: "Roadside response", body: "Rapid attendance across the North East." },
  ];
  const loop = [...items, ...items];
  return (
    <section className="bg-ink text-white py-20 md:py-28 overflow-hidden">
      <div className="container-cars">
        <SectionHeader
          dark
          eyebrow="Recovery Fleet"
          title="Equipped for fast, safe recovery"
          intro="An extensive, versatile fleet — from single-vehicle roadside response to heavy accident recovery and enclosed transport."
        />
      </div>
      <div className="mt-14 relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 fleet-marquee w-max">
          {loop.map((f, i) => (
            <div key={i} className="w-[340px] md:w-[420px] flex-none rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
              <div className="relative h-64 overflow-hidden">
                <img src={f.img} alt={f.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="font-display text-2xl">{f.title}</div>
                <p className="mt-1 text-sm text-white/60">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ PROCESS ------------------ */
function RecoveryProcess() {
  const steps = [
    { n: "01", t: "Call the emergency number", d: `Dial ${SITE.phone} any time — day or night.` },
    { n: "02", t: "Share location & vehicle issue", d: "Tell us where you are and what's happened." },
    { n: "03", t: "Technician dispatched", d: "The nearest recovery vehicle is sent immediately." },
    { n: "04", t: "Roadside checks", d: "We attempt to get you moving on the spot." },
    { n: "05", t: "Recover or repair", d: "Vehicle recovered damage-free if needed." },
    { n: "06", t: "Workshop, storage or delivery", d: "Follow-on support seamlessly handled by our team." },
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-cars">
        <SectionHeader
          eyebrow="Roadside Process"
          title="What happens when you call?"
          intro="Six clear steps from your first call to safely handed over — no guesswork, no delays."
        />
        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-xl bg-white border border-border p-6 hover:border-primary hover:shadow-lg transition-all group">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-primary/20 group-hover:text-primary transition-colors">{s.n}</span>
                <span className="font-display text-xl text-ink">{s.t}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground pl-16">{s.d}</p>
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-ink text-white p-6">
          <div className="flex items-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <div className="font-display text-xl">Recovery is one call away — 24/7.</div>
              <p className="text-sm text-white/60">Aberdeen and the North East, any hour.</p>
            </div>
          </div>
          <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function WorkshopProcess() {
  const steps = [
    { n: "01", t: "Tell us the issue" },
    { n: "02", t: "We inspect the vehicle" },
    { n: "03", t: "You receive clear advice" },
    { n: "04", t: "Work completed" },
    { n: "05", t: "Collect or delivery" },
  ];
  return (
    <section className="bg-white py-20 md:py-28 relative">
      <div className="container-cars">
        <SectionHeader
          eyebrow="Workshop booking"
          title="Simple workshop booking"
          intro="Five clear steps from first message to keys back in your hand. No jargon, honest advice, dependable workmanship."
        />
        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center font-display text-2xl relative z-10 border-4 border-white">
                  {s.n}
                </div>
                <div className="mt-4 font-display text-lg text-ink">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link to="/garage-services" className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-primary transition-colors">
            Book workshop service <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------ SERVICE AREA ------------------ */
function ServiceArea() {
  const areas = [
    "Aberdeen", "Aberdeenshire", "Dyce", "Bridge of Don", "Westhill", "Portlethen",
    "Stonehaven", "Ellon", "Inverurie", "Peterhead", "Fraserburgh", "North East Scotland",
  ];
  return (
    <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }} />
      <div className="container-cars relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            dark align="left"
            eyebrow="Coverage"
            title="Recovery across Aberdeen & the North East"
            intro="Local response with the reach to move vehicles wherever they need to go. Talk to us for Scotland-wide vehicle movement enquiries."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest">
                <MapPin className="inline h-3 w-3 mr-1.5 text-primary" />{a}
              </span>
            ))}
          </div>
          <a href={`tel:${SITE.phoneTel}`} className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)]">
            <Phone className="h-4 w-4" /> Call to arrange
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto border border-white/10 bg-white/[0.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,25,32,0.15),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="h-4 w-4 rounded-full bg-primary pulse-red" />
                <div className="absolute -inset-16 border border-primary/30 rounded-full animate-ping" />
                <div className="absolute -inset-8 border border-primary/50 rounded-full" />
                <div className="absolute -inset-24 border border-primary/20 rounded-full" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/5 backdrop-blur border border-white/10 p-4">
              <div className="text-[10px] uppercase tracking-widest text-white/60">HQ</div>
              <div className="font-display text-lg">Craigshaw Drive</div>
              <div className="text-xs text-white/70">West Tullos Ind. Est., Aberdeen AB12 3AS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ TESTIMONIALS ------------------ */
function Testimonials() {
  const t = [
    {
      body: "Called after a breakdown outside Aberdeen — dispatched fast, on the flatbed inside the hour, no fuss.",
      who: "Recovery Customer",
    },
    {
      body: "Booked in for MOT and a service. Straight advice, sensible price, keys back same day. Would use again.",
      who: "Garage Customer",
    },
    {
      body: "Reliable partner for our vehicle movements — professional handling, accurate updates, always answer the phone.",
      who: "Fleet Customer",
    },
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-cars">
        <SectionHeader
          eyebrow="What customers say"
          title="Trusted when it matters most"
          intro="Real feedback from the people we help — recovery jobs, workshop bookings and fleet partners."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {t.map((x, i) => (
            <div key={i} className="rounded-2xl bg-white border border-border p-8 relative hover:shadow-xl hover:-translate-y-1 transition-all">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="flex gap-0.5 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-ink leading-relaxed">"{x.body}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{x.who}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ CONTACT ------------------ */
function Contact() {
  return <ContactBlock />;
}

export function ContactBlock() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState("");
  const services = [
    "Recovery",
    "Roadside Assistance",
    "Garage Service",
    "MOT",
    "Valeting",
    "Vehicle Transport",
    "Storage",
  ];

  return (
    <section className="bg-ink text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-1 w-full diag-stripes" aria-hidden />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="container-cars grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            dark
            align="left"
            eyebrow="Contact"
            title="Need help now?"
            intro="Call for emergency recovery or send a request and we'll get back to you."
          />
          <div className="mt-8 space-y-3">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-center gap-4 rounded-xl bg-primary p-5 hover:bg-[color:var(--brand-red-deep)] transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 card-lift"
            >
              <div className="h-12 w-12 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-white/80">Phone</div>
                <div className="font-display text-2xl truncate">{SITE.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-white/60">Email</div>
                <div className="font-display text-lg break-all">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl bg-white/5 border border-white/10 p-5">
              <div className="h-12 w-12 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">Registered address</div>
                <div className="text-sm leading-relaxed">{SITE.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!service) return;
              setSent(true);
            }}
            className="rounded-2xl bg-white text-ink p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] h-full"
          >
            <h2 className="font-display text-3xl">Send a request</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              For an emergency, please call — this form is monitored during working hours.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" />
              <Field label="Vehicle registration" name="reg" />
              <Field label="Location" name="location" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label
                  htmlFor="service-required"
                  className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                >
                  Service required <span className="text-primary">*</span>
                </label>
                <input type="hidden" name="service" value={service} />
                <Select value={service || undefined} onValueChange={setService}>
                  <SelectTrigger
                    id="service-required"
                    aria-required="true"
                    aria-label="Service required"
                    className="mt-1.5 h-12 w-full rounded-md border border-border bg-white px-4 text-sm font-medium text-ink hover:border-primary focus:ring-2 focus:ring-primary/30 data-[placeholder]:text-muted-foreground"
                  >
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent className="z-[80] border border-border bg-white text-ink shadow-xl">
                    {services.map((o) => (
                      <SelectItem
                        key={o}
                        value={o}
                        className="cursor-pointer focus:bg-primary focus:text-white data-[highlighted]:bg-primary data-[highlighted]:text-white"
                      >
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-md border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-shadow"
                  placeholder="Tell us what's happened…"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!service}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none btn-press"
            >
              <Send className="h-4 w-4" aria-hidden /> Send request
            </button>
            {sent && (
              <p className="mt-4 text-sm text-primary font-semibold" role="status">
                Thanks — request received. For emergencies please call {SITE.phone}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-shadow"
      />
    </div>
  );
}

/* ------------------ SECTION HEADER ------------------ */
export function SectionHeader({
  eyebrow, title, intro, align = "center", dark = false,
}: {
  eyebrow: string; title: string; intro?: string;
  align?: "center" | "left"; dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold ${dark ? "text-primary" : "text-primary"}`}>
        <span className="h-px w-8 bg-primary" /> {eyebrow}
      </div>
      <h2 className={`mt-4 text-4xl md:text-6xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-base md:text-lg ${dark ? "text-white/70" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}
