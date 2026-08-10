import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import SEO_CONFIG from "@/config/seo.config";

type RelatedServicesProps = {
  exclude?: string[];
  title?: string;
  limit?: number;
  className?: string;
};

const RelatedServices = ({
  exclude = [],
  title = "Explore related services in Chennai",
  limit = 6,
  className = "",
}: RelatedServicesProps) => {
  const links = SEO_CONFIG.internalLinks
    .filter((link) => !exclude.includes(link.to))
    .slice(0, limit);

  return (
    <section className={`border-t border-border bg-white py-14 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <p className="section-eyebrow">Internal Resources</p>
          <h2 className="section-title text-2xl sm:text-3xl">{title}</h2>
          <p className="section-lead">
            Interlink with NnovityWorks services — Tally Prime solutions and the best soft skills training institute in Chennai.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
