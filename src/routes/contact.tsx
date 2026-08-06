import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ContactBlock } from "./index";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-recovery.jpg";
import { pageSeo, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact CARS Recovery & Garage Services Aberdeen",
      description: `Call ${SITE.phone} for 24/7 vehicle recovery in Aberdeen or send us a request for workshop and garage services.`,
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="relative bg-ink text-white overflow-hidden">
        <img
          src={heroImg}
          alt="CARS recovery vehicle ready for emergency dispatch"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute top-0 left-0 h-1.5 w-full diag-stripes" aria-hidden />
        <div className="container-cars relative py-20 md:py-28 lg:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl max-w-3xl">Talk to CARS — any time.</h1>
          <p className="mt-6 max-w-2xl text-white/75 text-base sm:text-lg">
            For emergency recovery, always call. For workshop and general enquiries, send us a message.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold uppercase tracking-wider hover:bg-[color:var(--brand-red-deep)] pulse-red transition-all duration-200 hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" aria-hidden /> {SITE.phone}
          </a>
        </div>
      </section>
      <ContactBlock />
    </Layout>
  );
}
