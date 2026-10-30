import Link from "next/link";
import { Icon } from "@/components/icons";
import type { FeatureIcon } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FeatureCard({
  title,
  description,
  icon,
  href,
  variant = "compact",
}: {
  title: string;
  description: string;
  icon: FeatureIcon;
  /** The feature's own page; the whole card is the link. */
  href?: string;
  /** "lead" is a main feature (large icon, larger text); "compact" is a supporting one. */
  variant?: "lead" | "compact";
}) {
  const lead = variant === "lead";
  const body = lead ? (
    <div className="flex items-start gap-4 sm:flex-col sm:gap-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition duration-300 group-hover:bg-primary group-hover:text-background sm:h-14 sm:w-14">
        <Icon name={icon} className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>
      <div>
        <h3 className="text-base font-semibold tracking-tight text-white sm:mt-5 sm:text-xl">{title}</h3>
        <p className="mt-1 text-sm leading-snug text-muted sm:mt-2 sm:text-base sm:leading-relaxed">{description}</p>
      </div>
    </div>
  ) : (
    <>
      <div className="flex items-center gap-2">
        <Icon name={icon} className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
        <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">{title}</h3>
      </div>
      <p className="mt-2 line-clamp-3 text-xs leading-snug text-muted sm:line-clamp-none sm:text-sm sm:leading-relaxed">{description}</p>
    </>
  );
  const className = cn(
    "group block transition duration-300 hover:-translate-y-1 hover:border-primary/25",
    lead
      ? "rounded-2xl border border-primary/25 bg-surface p-4 hover:shadow-[0_24px_60px_-32px_rgba(242,179,61,0.35)] sm:rounded-3xl sm:p-6 lg:p-7"
      : "rounded-2xl border border-white/8 bg-surface/60 p-3 sm:p-5",
  );
  if (href) {
    return (
      <article>
        <Link href={href} className={className} aria-label={`${title}: read more`}>
          {body}
        </Link>
      </article>
    );
  }
  return <article className={className}>{body}</article>;
}
