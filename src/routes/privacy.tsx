import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { pageSeo, SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      title: "Privacy Policy | CARS Recovery & Garage Services",
      description: `Privacy policy for ${SITE.name}. How we collect, use and protect your information.`,
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <article className="bg-white py-16 md:py-24">
        <div className="container-cars max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Legal</p>
          <h1 className="mt-4 text-4xl md:text-5xl text-ink">Privacy Policy</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {SITE.name} respects your privacy. When you contact us by phone, email or through our
            website forms, we use the details you provide solely to respond to your enquiry and
            deliver recovery or workshop services.
          </p>
          <h2 className="mt-10 text-2xl text-ink">Information we collect</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Name, phone number, email address, vehicle registration, location and any message you
            choose to send. Call recordings may apply for training and quality purposes where
            notified.
          </p>
          <h2 className="mt-10 text-2xl text-ink">How we use it</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To dispatch recovery, arrange workshop bookings, and communicate about your job. We do
            not sell your personal data.
          </p>
          <h2 className="mt-10 text-2xl text-ink">Contact</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Questions about this policy:{" "}
            <a href={`mailto:${SITE.email}`} className="text-primary font-semibold underline underline-offset-4">
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${SITE.phoneTel}`} className="text-primary font-semibold">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </article>
    </Layout>
  );
}
