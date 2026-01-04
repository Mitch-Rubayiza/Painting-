import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
            <span className="text-accent-foreground font-heading font-bold text-lg">MP</span>
          </div>
          <span className={cn(
            "font-heading font-bold text-xl transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            Mitch Painting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                location.pathname === link.path
                  ? "text-accent"
                  : isScrolled
                  ? "text-foreground/80 hover:text-foreground hover:bg-muted"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:647-854-9093" className={cn(
            "flex items-center gap-2 font-medium transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}>
            <Phone className="w-4 h-4" />
            647-854-9093
          </a>
          <Button variant="accent" asChild>
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-3 rounded-lg font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-accent/10 text-accent"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border mt-2">
            <Button variant="accent" className="w-full" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
