import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";

type BrightHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export const BrightHero = ({ eyebrow, title, description, actions, className }: BrightHeroProps) => {
  return (
    <section className={cn("bright-mini-hero", className)}>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && <p className="section-lead mx-auto">{description}</p>}
          {actions && <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{actions}</div>}
        </div>
      </div>
    </section>
  );
};

type PageHeroStat = { value: string; label: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  stats?: PageHeroStat[];
  badge?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta = { label: "Book Consultation", to: "/contact" },
  secondaryCta,
  stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "Chennai", label: "Based Support" },
  ],
  badge = "NnovityWorks",
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border/50 pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_88%/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_88%/0.35)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal direction="left">
            <div className="text-center lg:text-left">
              <p className="section-eyebrow">— {eyebrow} —</p>
              <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg lg:mx-0">
                {description}
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="w-full rounded-full bg-hero-gradient px-6 text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:opacity-95 sm:w-auto">
                  <NavLink to={primaryCta.to}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline" className="w-full rounded-full border-border bg-white px-6 transition-all duration-300 hover:scale-[1.03] hover:bg-muted sm:w-auto">
                    <NavLink to={secondaryCta.to}>{secondaryCta.label}</NavLink>
                  </Button>
                )}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-border/70 pt-6 sm:mt-10 sm:gap-3 sm:pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-center lg:text-left">
                    <div className="font-display text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-[10px] leading-snug text-muted-foreground sm:text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.2rem] bg-hero-gradient opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 md:aspect-[5/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-foreground/85 p-3 text-background backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-2xl sm:p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.18em]">{badge}</p>
                  <p className="mt-1 font-display text-base font-semibold leading-snug sm:text-lg">
                    Practical solutions. Personal support. Measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

type GlassBadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "primary";
};

export const GlassBadge = ({ children, className, tone = "default" }: GlassBadgeProps) => (
  <div
    className={cn(
      "glass-badge text-sm font-medium text-foreground",
      tone === "primary" && "border-primary/20 bg-primary text-primary-foreground",
      className
    )}
  >
    {children}
  </div>
);

type StatItem = { value: string; label: string };

export const StatRow = ({ items, className }: { items: StatItem[]; className?: string }) => (
  <div className={cn("grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4", className)}>
    {items.map((item) => (
      <div key={item.label} className="min-w-0 text-center md:text-left">
        <div className="font-display text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl">{item.value}</div>
        <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{item.label}</div>
      </div>
    ))}
  </div>
);
