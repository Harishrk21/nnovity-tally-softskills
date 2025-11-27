import { NavLink } from "./NavLink";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Nnovity Works
            </h3>
            <p className="text-sm text-muted-foreground">
              Premier Tally ERP solutions and professional softskills training in Chennai. 
              Empowering businesses and individuals since inception.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/tally-sales" className="text-muted-foreground hover:text-primary transition-colors">
                  Tally Sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/tally-support" className="text-muted-foreground hover:text-primary transition-colors">
                  Tally Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/tally-sales" className="text-muted-foreground hover:text-primary transition-colors">
                  Tally Sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/crm-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  CRM Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/erp-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  ERP Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/hrms-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  HRMS Solutions
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+91" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@nnovityworks.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@nnovityworks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nnovity Works. All rights reserved.</p>
          <p className="mt-2">
            Best Tally Provider in Chennai | Top Softskills Trainer in Chennai | Mr. Millath - ACTD & UKIQ Accredited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
