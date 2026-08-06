/** Shared business / SEO constants — single source of truth */
export const SITE = {
  name: "CARS Recovery & Garage Services",
  shortName: "CARS Recovery",
  tagline: "Recovery & Workshop Services — For All Your Vehicle Needs 24/7",
  url: "https://www.carsrecovery.com",
  phone: "01224 896500",
  phoneTel: "01224896500",
  email: "info@carsrecovery.com",
  address: "Craigshaw Drive, West Tullos Industrial Est., Aberdeen AB12 3AS",
  linkedin: "https://www.linkedin.com/company/cars-recovery-garage-services/home/",
  social: {
    facebook: "Add here",
    twitter: "Add here",
    instagram: "Add here",
  },
  keywords:
    "vehicle recovery Aberdeen, 24/7 recovery North East, roadside assistance Aberdeen, garage services Aberdeen, MOT Aberdeen, car recovery, breakdown recovery, CARS Recovery, workshop Aberdeen, vehicle storage Aberdeen",
} as const;

export function absoluteUrl(path = "/") {
  const base = SITE.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p === "/" ? "" : p}`;
}

export function pageSeo({
  title,
  description,
  path = "/",
  keywords = SITE.keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/og-image.png");
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
