import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo5.jpg" 
              alt="NnovityWorks Logo - Best Tally Prime Solutions & Soft Skills Training in Chennai" 
              className="h-16 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Home
            </NavLink>

            {/* Tally Prime Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground data-[state=open]:bg-transparent">
                    Tally Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/tally-sales"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Tally Prime Sales</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Purchase genuine TallyPrime software
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/tally-support"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Tally Prime Support</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Customization, cloud, training, and technical support
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            href="https://tallysolutions.com/download/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Download</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Download TallyPrime software from official Tally Solutions
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Business Solutions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-foreground/80 hover:text-foreground data-[state=open]:bg-transparent">
                    Business Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/crm-solutions"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">CRM Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Customer Relationship Management systems
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/erp-solutions"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">ERP Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Enterprise Resource Planning systems
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/hrms-solutions"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">HRMS Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Human Resource Management systems
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to="/pos-billing-solutions"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">POS Billing Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast counter billing software for supermarkets and retail stores
                            </p>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink
              to="/softskills-training"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Softskills Training
            </NavLink>
            <NavLink
              to="/about"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              FAQ
            </NavLink>
            <Button asChild className="ml-4 bg-hero-gradient hover:opacity-90 transition-opacity shadow-lg">
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Home
            </NavLink>

            {/* Tally Prime Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('tally')}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              >
                Tally Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen === 'tally' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'tally' && (
                <div className="pl-4 space-y-1 animate-fade-in">
                  <NavLink
                    to="/tally-sales"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    Tally Prime Sales
                  </NavLink>
                  <NavLink
                    to="/tally-support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    Tally Prime Support
                  </NavLink>
                  <a
                    href="https://tallysolutions.com/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>

            {/* Business Solutions Mobile Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('business')}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              >
                Business Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen === 'business' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen === 'business' && (
                <div className="pl-4 space-y-1 animate-fade-in">
                  <NavLink
                    to="/crm-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    CRM Solutions
                  </NavLink>
                  <NavLink
                    to="/erp-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    ERP Solutions
                  </NavLink>
                  <NavLink
                    to="/hrms-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    HRMS Solutions
                  </NavLink>
                  <NavLink
                    to="/pos-billing-solutions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted"
                  >
                    POS Billing Solutions
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/softskills-training"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Softskills Training
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
              activeClassName="text-primary bg-muted"
            >
              FAQ
            </NavLink>
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-hero-gradient hover:opacity-90 transition-opacity">
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
