import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Interior Painting", path: "/services#interior" },
    { name: "Exterior Painting", path: "/services#exterior" },
    { name: "Commercial Painting", path: "/services#commercial" },
    { name: "Garage Door Refacing", path: "/services#consultation" },
    { name: "Baseboard Refacing", path: "/services#consultation" },
    { name: "Window Refacing", path: "/services#consultation" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Work", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-paint-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">CP</span>
              </div>
              <span className="font-heading font-bold text-xl">Condo Paints</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Professional painting services for residential and commercial properties in Concord and the Greater Toronto Area. Quality craftsmanship, guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:647-854-9093"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>647-854-9093</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@condopaints.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>info@condopaints.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>191 Bowes Road, L4K 1H9<br />Concord, ON</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Condo Paints. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-primary-foreground/60">Serving Concord & GTA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
