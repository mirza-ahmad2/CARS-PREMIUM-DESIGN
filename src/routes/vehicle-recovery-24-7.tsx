import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactBlock, SectionHeader } from "./index";
import recoveryImg from "@/assets/recovery-service.jpg";
import {
  Truck, ShieldCheck, PhoneCall, Car, BatteryCharging, CircleDot, KeyRound, Fuel, Gauge, ArrowRight, Phone,
} from "lucide-react";
import { pageSeo, SITE } from "@/lib/site";

const ITEMS = [
  { icon: Truck, title: "Breakdown Recovery", body: "Fast dispatch for cars, vans and light commercial vehicles across the North East." },
  { icon: ShieldCheck, title: "Accident Recovery", body: "Damage-free removal, cleared scene and safe relocation — day or night." },
  { icon: PhoneCall, title: "Roadside Assistance", body: "Technicians attend on the roadside, at your home or at your workplace." },
  { icon: Car, title: "Vehicle Transportation", body: "Point-to-point car and van movement, including enclosed transport options." },
  { icon: BatteryCharging, title: "Battery Jump Starts", body: "Flat battery? We'll get you moving again and diagnose the cause." },
  { icon: CircleDot, title: "Wheel Changes", body: "Punctures and blowouts handled roadside with the right equipment." },
  { icon: KeyRound, title: "Lock Outs", body: "Locked out or lost keys — we open safely and can arrange onward help." },
  { icon: Fuel, title: "Fuel Decontamination", body: "Misfuelled? Full on-site fuel drain and decontamination service." },
  { icon: Gauge, title: "Roadside Diagnostics", body: "Fault codes read at the roadside, next steps advised on the spot." },
];

export const Route = createFileRoute("/vehicle-recovery-24-7")({
  head: () =>
    pageSeo({
      title: "24/7 Vehicle Recovery Aberdeen | CARS Recovery",
      description:
        "24/7 vehicle recovery, roadside assistance, accident recovery, fuel decontamination, lockouts and vehicle transport across Aberdeen and the North East.",
      path: "/vehicle-recovery-24-7",
    }),
  component: RecoveryPage,
});

function RecoveryPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Recovery 24/7"
        title="Vehicle Recovery you can call any hour."
        intro="Fast, damage-free recovery with an extensive, versatile fleet — attending across Aberdeen and the North East, day or night."
        image={recoveryImg}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-cars">
          <SectionHeader
            eyebrow="Recovery services"
            title="Everything we cover on the road"
            intro="From single-vehicle roadside jobs to full accident recovery — one team, one number, one call."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-white p-6 hover:border-primary card-lift"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-md bg-ink text-white flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink normal-case tracking-normal">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-ink text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-2xl">Recovery needed now?</div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)] pulse-red transition-all btn-press"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <ContactBlock />
    </Layout>
  );
}
