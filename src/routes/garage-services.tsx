import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactBlock, SectionHeader } from "./index";
import workshopImg from "@/assets/workshop.jpg";
import {
  ShieldCheck, Wrench, Gauge, CircleDot, SprayCan, PackageCheck, Warehouse, ArrowRight, Phone,
} from "lucide-react";
import { pageSeo, SITE } from "@/lib/site";

const ITEMS = [
  { icon: ShieldCheck, title: "MOT Checks", body: "Class 4 MOT testing and pre-MOT inspections." },
  { icon: Wrench, title: "Servicing", body: "Interim, full and manufacturer-schedule servicing." },
  { icon: Gauge, title: "Repairs", body: "Mechanical repairs handled by experienced technicians." },
  { icon: CircleDot, title: "Diagnostics", body: "Fault-code reading and full electronic diagnostics." },
  { icon: SprayCan, title: "Valeting", body: "Interior and exterior cleaning to a high finish." },
  { icon: PackageCheck, title: "Collection & Delivery", body: "Convenient vehicle collection and return." },
  { icon: Warehouse, title: "Secure Storage", body: "On-site secure vehicle storage available." },
  { icon: Wrench, title: "Workshop Support", body: "General workshop support for fleets and private owners." },
];

export const Route = createFileRoute("/garage-services")({
  head: () =>
    pageSeo({
      title: "Garage & Workshop Services Aberdeen | CARS",
      description:
        "MOT checks, servicing, repairs, diagnostics, valeting, secure storage and collection & delivery at our Aberdeen workshop.",
      path: "/garage-services",
    }),
  component: GaragePage,
});

function GaragePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Garage Services"
        title="Workshop capability under one roof."
        intro="MOT, servicing, repairs, diagnostics, valeting, storage and delivery — handled by a team whose experience is drawn from the road."
        image={workshopImg}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-cars">
          <SectionHeader
            eyebrow="Workshop services"
            title="Everything we do in the workshop"
            intro="Straight advice, sensible pricing, dependable workmanship — every visit."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-white p-6 hover:border-primary card-lift"
              >
                <div className="h-11 w-11 rounded-md bg-ink text-white flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink normal-case tracking-normal">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                <ArrowRight
                  className="mt-4 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  aria-hidden
                />
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl bg-surface p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-display text-2xl text-ink">Ready to book in?</div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-primary transition-colors btn-press"
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
