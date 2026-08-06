import { Link } from "@tanstack/react-router";
import logo from "@/assets/cars-logo.png";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  /** Set false to render without a home link (e.g. decorative hero mark) */
  link?: boolean;
  /** Light plate behind logo for dark backgrounds */
  onDark?: boolean;
  compact?: boolean;
};

export function BrandLogo({
  className,
  imgClassName,
  link = true,
  onDark = false,
  compact = false,
}: BrandLogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-90",
        onDark && "rounded-md bg-white px-2.5 py-1.5 shadow-sm",
        className,
      )}
    >
      <img
        src={logo}
        alt={`${SITE.name} logo`}
        width={compact ? 140 : 200}
        height={compact ? 70 : 100}
        className={cn(
          "h-auto w-auto object-contain",
          compact ? "h-9 sm:h-10" : "h-11 sm:h-12 md:h-14",
          imgClassName,
        )}
        decoding="async"
      />
    </span>
  );

  if (link) {
    return (
      <Link to="/" aria-label={`${SITE.name} — Home`} className="inline-flex">
        {content}
      </Link>
    );
  }
  return content;
}
