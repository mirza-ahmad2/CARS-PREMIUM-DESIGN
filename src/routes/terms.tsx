import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { pageSeo, SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      title: "Terms of Use | CARS Recovery & Garage Services",
      description: `Website terms of use for ${SITE.name}.`,
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <article className="bg-white py-16 md:py-24">
        <div className="container-cars max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Legal</p>
          <h1 className="mt-4 text-4xl md:text-5xl text-ink">Terms of Use</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            By using this website you agree to these terms. Content is provided for general
            information about {SITE.name} recovery and workshop services across Aberdeen and the
            North East.
          </p>
          <h2 className="mt-10 text-2xl text-ink">Services</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Recovery and workshop work is subject to availability, site conditions and agreed
            pricing at the time of booking. Emergency recovery should always be requested by phone
            on {SITE.phone}.
          </p>
          <h2 className="mt-10 text-2xl text-ink">Website</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We aim to keep information accurate but do not guarantee uninterrupted access. External
            links (including social profiles) are provided for convenience.
          </p>
          <h2 className="mt-10 text-2xl text-ink">Contact</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {SITE.address}. Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-primary font-semibold underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  );
}
