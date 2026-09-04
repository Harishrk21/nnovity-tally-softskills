import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const linkClass =
  "px-2.5 py-1.5 text-[13px] font-medium text-foreground/75 transition-all duration-300 hover:text-foreground rounded-full hover:bg-muted";
const activeClass = "text-foreground bg-muted";

const dropdownItemClass =
  "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-muted focus:bg-muted";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[60] px-3 pt-3 md:px-5 md:pt-4">
      <div className="pointer-events-auto relative mx-auto max-w-6xl">
        <nav
          className={`border backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-border bg-card shadow-[0_14px_44px_-10px_hsl(var(--foreground)/0.28)]"
              : "border-border/70 bg-card/95 shadow-[0_10px_40px_-12px_hsl(var(--foreground)/0.18)]"
          } ${
            isMobileMenuOpen
              ? "rounded-[1.75rem] shadow-[0_20px_50px_-12px_hsl(var(--foreground)/0.28)]"
              : "rounded-[999px]"
          }`}
        >
          <div className="flex min-h-[3.75rem] items-center gap-2 px-3 py-2 md:min-h-[4rem] md:px-4 md:py-2.5">
            <NavLink to="/" onClick={closeMobile} className="flex min-w-0 flex-shrink-0 items-center gap-2 group">
              <img
                src="/logo1.jpg"
                alt="NnovityWorks Logo"
                className="h-11 w-auto flex-shrink-0 rounded-full object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 md:h-14"
              />
            </NavLink>

            <div className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
              <NavLink to="/" className={linkClass} activeClassName={activeClass}>
                Home
              </NavLink>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-2.5 py-1.5 text-[13px] font-medium text-foreground/75 hover:bg-muted hover:text-foreground data-[state=open]:bg-muted">
                      Tally Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[380px] gap-1 p-3">
                        <li>
                          <NavigationMenuLink asChild>
                            <NavLink to="/tally-sales" className={dropdownItemClass}>
                              <div className="text-sm font-medium">Tally Prime Sales</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Purchase genuine TallyPrime software</p>
                            </NavLink>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <NavLink to="/tally-support" className={dropdownItemClass}>
                              <div className="text-sm font-medium">Tally Prime Support</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Customization, cloud, training, and support</p>
                            </NavLink>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href="https://tallysolutions.com/download/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className={dropdownItemClass}
                            >
                              <div className="text-sm font-medium">Download</div>
                              <p className="line-clamp-2 text-sm text-muted-foreground">Official TallyPrime downloads</p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-auto rounded-full bg-transparent px-2.5 py-1.5 text-[13px] font-medium text-foreground/75 hover:bg-muted hover:text-foreground data-[state=open]:bg-muted">
                      Business Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[380px] gap-1 p-3">
                        {[
                          { to: "/crm-solutions", title: "CRM Solutions", desc: "Customer Relationship Management" },
                          { to: "/erp-solutions", title: "ERP Solutions", desc: "Enterprise Resource Planning" },
                          { to: "/hrms-solutions", title: "HRMS Solutions", desc: "Human Resource Management" },
                          { to: "/pos-billing-solutions", title: "POS Billing", desc: "Retail & supermarket billing" },
                        ].map((item) => (
                          <li key={item.to}>
                            <NavigationMenuLink asChild>
                              <NavLink to={item.to} className={dropdownItemClass}>
                                <div className="text-sm font-medium">{item.title}</div>
                                <p className="line-clamp-2 text-sm text-muted-foreground">{item.desc}</p>
                              </NavLink>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavLink to="/softskills-training" className={linkClass} activeClassName={activeClass}>
                Soft Skills Training
              </NavLink>
              <NavLink to="/about" className={linkClass} activeClassName={activeClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={linkClass} activeClassName={activeClass}>
                Contact
              </NavLink>
              <NavLink to="/faq" className={linkClass} activeClassName={activeClass}>
                FAQ
              </NavLink>
            </div>

            <div className="ml-auto hidden flex-shrink-0 items-center gap-1.5 xl:flex">
              <ThemeToggle />
              <Button
                asChild
                className="rounded-full bg-hero-gradient px-5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:opacity-95"
              >
                <NavLink to="/contact">Book Consultation</NavLink>
              </Button>
            </div>

            <div className="ml-auto flex items-center gap-1 xl:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="max-h-[min(75vh,32rem)] overflow-y-auto overscroll-contain border-t border-border px-3 py-3 xl:hidden animate-fade-in">
              <div className="space-y-1 pb-2">
                <NavLink to="/" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>
                  Home
                </NavLink>

                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown("tally")}
                    className="flex w-full items-center justify-between rounded-full px-2.5 py-2.5 text-left text-[13px] font-medium text-foreground/80 hover:bg-muted"
                  >
                    Tally Solutions
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${mobileDropdownOpen === "tally" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen === "tally" && (
                    <div className="mt-1 space-y-1 rounded-2xl bg-muted/50 p-2 animate-fade-in">
                      <NavLink to="/tally-sales" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">
                        Tally Prime Sales
                      </NavLink>
                      <NavLink to="/tally-support" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">
                        Tally Prime Support
                      </NavLink>
                      <a
                        href="https://tallysolutions.com/download/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobile}
                        className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground"
                      >
                        Download TallyPrime
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown("business")}
                    className="flex w-full items-center justify-between rounded-full px-2.5 py-2.5 text-left text-[13px] font-medium text-foreground/80 hover:bg-muted"
                  >
                    Business Solutions
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${mobileDropdownOpen === "business" ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen === "business" && (
                    <div className="mt-1 space-y-1 rounded-2xl bg-muted/50 p-2 animate-fade-in">
                      <NavLink to="/crm-solutions" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">CRM Solutions</NavLink>
                      <NavLink to="/erp-solutions" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">ERP Solutions</NavLink>
                      <NavLink to="/hrms-solutions" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">HRMS Solutions</NavLink>
                      <NavLink to="/pos-billing-solutions" onClick={closeMobile} className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-background hover:text-foreground">POS Billing</NavLink>
                    </div>
                  )}
                </div>

                <NavLink to="/softskills-training" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>Soft Skills Training</NavLink>
                <NavLink to="/training" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>Training</NavLink>
                <NavLink to="/about" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>About</NavLink>
                <NavLink to="/contact" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>Contact</NavLink>
                <NavLink to="/faq" onClick={closeMobile} className={`block ${linkClass}`} activeClassName={activeClass}>FAQ</NavLink>

                <div className="px-1 pt-3">
                  <Button asChild className="w-full rounded-full bg-hero-gradient py-6 text-white hover:opacity-95">
                    <NavLink to="/contact" onClick={closeMobile}>Book Consultation</NavLink>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="pointer-events-auto fixed inset-0 -z-10 bg-foreground/20 backdrop-blur-[2px] xl:hidden"
          onClick={closeMobile}
        />
      )}
    </header>
  );
};

export default Navigation;
