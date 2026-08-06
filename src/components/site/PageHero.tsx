import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
        decoding="async"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="absolute top-0 left-0 h-1.5 w-full diag-stripes" aria-hidden />
      <div className="container-cars relative py-20 md:py-28 lg:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold reveal-up">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-black max-w-4xl reveal-up">
          {title}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl reveal-up">{intro}</p>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold uppercase tracking-wider text-primary-foreground hover:bg-[color:var(--brand-red-deep)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <Phone className="h-4 w-4" aria-hidden /> Call {SITE.phone}
        </a>
      </div>
    </section>
  );
}
