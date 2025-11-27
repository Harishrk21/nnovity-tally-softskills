import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tally-sales", label: "Tally Sales" },
    { to: "/tally-support", label: "Tally Support" },
    { to: "/softskills-training", label: "Softskills Training" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Nnovity Works
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
                activeClassName="text-primary bg-muted"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="ml-4 bg-hero-gradient hover:opacity-90 transition-opacity">
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground rounded-md hover:bg-muted"
                activeClassName="text-primary bg-muted"
              >
                {link.label}
              </NavLink>
            ))}
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
