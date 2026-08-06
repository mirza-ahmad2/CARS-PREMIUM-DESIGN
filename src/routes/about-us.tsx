import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactBlock, SectionHeader } from "./index";
import philipImg from "@/assets/philip-patterson.png";
import workshopImg from "@/assets/workshop.jpg";
import { ShieldCheck, Truck, Wrench } from "lucide-react";
import { pageSeo } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () =>
    pageSeo({
      title: "About CARS Recovery & Garage Services | Aberdeen",
      description:
        "Meet the team behind CARS Recovery — an established Aberdeen recovery and workshop operator led by Philip Patterson.",
      path: "/about-us",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Built around reliability, fast response & dependable workmanship."
        intro="A trusted Aberdeen team delivering recovery and workshop services across the North East."
        image={workshopImg}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-cars grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-ink via-[#1a1a1a] to-[#2a0d10] aspect-[4/5] max-w-lg">
              <div className="absolute inset-0 diag-stripes opacity-10" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
              <img src={philipImg} alt="Philip Patterson, Owner"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto object-contain object-bottom drop-shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="font-display text-3xl text-white">Philip Patterson</div>
                <div className="text-sm text-white/70 uppercase tracking-widest mt-1">Owner · CARS Recovery Ltd</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeader align="left" eyebrow="Our story"
              title="An established North East recovery operator"
              intro="CARS Recovery & Garage Services covers recovery, roadside assistance, workshop repairs, servicing, vehicle transport, storage, collection and delivery — all handled by the same experienced Aberdeen team." />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our workshop team's vehicle knowledge is drawn from years of recovery and roadside work, giving us a rare depth of experience for every job that rolls onto the ramp. Whether it's a 2am flatbed call or a booked-in MOT, the standard is the same: dependable, professional, and straight with you.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For Philip's direct enquiries, contact{" "}
              <a href="mailto:philip.patterson@carsrecovery.com" className="text-primary font-semibold underline decoration-primary/40 underline-offset-4">philip.patterson@carsrecovery.com</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-cars">
          <SectionHeader eyebrow="Accreditation" title="Audited to a professional standard" intro="Quality management independently certified — every job carried out to a consistent, documented process." />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "ISO 9001 (TÜV-certified)", d: "Independently audited quality management across recovery and workshop operations." },
              { icon: Truck, t: "PAS 43 (pending confirmation)", d: "Recovery-industry standard referenced by the client — awaiting confirmation before display." },
              { icon: Wrench, t: "Recovery + workshop in one", d: "Rare combination of accredited recovery capacity and full workshop capability under one roof." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-white border border-border p-8">
                <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <div className="mt-5 font-display text-2xl text-ink">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBlock />
    </Layout>
  );
}
