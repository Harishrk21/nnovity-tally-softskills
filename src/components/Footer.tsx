import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="overflow-hidden border-t border-border bg-white pb-24 sm:pb-20 md:pb-8">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        {/* CTA band */}
        <div className="mb-10 grid gap-6 rounded-[1.5rem] bg-foreground px-5 py-8 text-background sm:mb-12 sm:rounded-[2rem] sm:px-8 sm:py-10 md:mb-14 md:grid-cols-[1.4fr_auto] md:items-center md:gap-10 md:px-12">
          <div className="min-w-0 text-center md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
              Let's work together
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Talk to Chennai&apos;s Tally & soft skills expert.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-background/70 md:mx-0 md:text-base">
              Tally Prime sales & support, corporate soft skills training, or both — we&apos;ll help you design the right path.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="w-full rounded-full bg-primary px-6 hover:bg-primary/90 md:w-auto md:justify-self-end"
          >
            <NavLink to="/contact" className="inline-flex items-center justify-center">
              Start a conversation
              <ArrowUpRight className="ml-2 h-4 w-4 flex-shrink-0" />
            </NavLink>
          </Button>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo1.jpg" alt="NnovityWorks - Best Tally Prime and soft skills training in Chennai" className="h-10 w-auto flex-shrink-0 object-contain sm:h-12" />
              <div className="min-w-0">
                <div className="truncate font-display text-lg font-semibold sm:text-xl">NnovityWorks</div>
                <div className="text-[11px] italic text-primary sm:text-xs">Innovate. Empower. Excel.</div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Best Tally Prime service provider and soft skills training institute in Chennai — led by Mr. Samshul Millath in Anna Nagar.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm sm:block sm:space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Mr. Samshul Millath" },
                { to: "/softskills-training", label: "Best Soft Skills Training Chennai" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact / Book Consultation" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/tally-sales", label: "Buy Tally Prime in Chennai" },
                { to: "/tally-support", label: "Tally Prime Support & AMC" },
                { to: "/training", label: "Tally Prime Training Chennai" },
                { to: "/crm-solutions", label: "CRM Solutions Chennai" },
                { to: "/erp-solutions", label: "ERP Solutions Chennai" },
                { to: "/hrms-solutions", label: "HRMS Solutions Chennai" },
                { to: "/pos-billing-solutions", label: "POS Billing Software Chennai" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="inline-block py-0.5 text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground sm:mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span className="break-words text-muted-foreground">
                  13, 1st Main Road, R.V. Nagar, Block 1, Anna Nagar East, Chennai - 600102
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <a href="tel:+919841115769" className="break-all text-muted-foreground hover:text-primary">
                  +91 98411 15769
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:smillath@nnovityworks.com" className="break-all text-muted-foreground hover:text-primary">
                  smillath@nnovityworks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:mt-12 sm:pt-8 sm:text-sm md:flex-row md:items-center md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} NnovityWorks. All rights reserved.</p>
          <p className="max-w-sm md:max-w-none">Best Tally Prime · Soft Skills Training Institute · Chennai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
