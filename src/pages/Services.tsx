import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Home, 
  Building2, 
  Palette, 
  Hammer,
  Scroll,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";

const services = [
  {
    id: "interior",
    icon: Home,
    title: "Interior Painting",
    description: "Transform your indoor living spaces with our expert interior painting services. From bedrooms to living rooms, kitchens to bathrooms, we deliver flawless finishes that bring your vision to life.",
    features: [
      "Walls, ceilings, and trim painting",
      "Accent walls and feature walls",
      "Cabinet and door refinishing",
      "Closet and storage area painting",
      "Basement finishing",
      "Stairwell and hallway painting",
    ],
    image: "🏠",
  },
  {
    id: "exterior",
    icon: Building2,
    title: "Exterior Painting",
    description: "Boost your property's curb appeal and protect it from the elements with our professional exterior painting services. We use premium, weather-resistant paints designed for Canadian climates.",
    features: [
      "Siding and stucco painting",
      "Trim, fascia, and soffit painting",
      "Deck and fence staining",
      "Garage door painting",
      "Window frame painting",
      "Power washing and prep work",
    ],
    image: "🏡",
  },
  {
    id: "residential",
    icon: Paintbrush,
    title: "Residential Painting",
    description: "Complete painting solutions for condos, townhouses, apartments, and single-family homes. We work around your schedule to minimize disruption while maximizing results.",
    features: [
      "Full home repaints",
      "New construction painting",
      "Move-in/move-out painting",
      "Condo and apartment painting",
      "Rental property refresh",
      "Custom colour matching",
    ],
    image: "🏘️",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Painting",
    description: "Professional painting services for offices, retail spaces, restaurants, and commercial buildings. We work efficiently to minimize business disruption while delivering exceptional results.",
    features: [
      "Office and workspace painting",
      "Retail and storefront painting",
      "Restaurant and hospitality",
      "Medical and dental offices",
      "Warehouse and industrial",
      "After-hours and weekend scheduling",
    ],
    image: "🏢",
  },
  {
    id: "prep",
    icon: Hammer,
    title: "Wall Prep & Repair",
    description: "Proper preparation is the foundation of a flawless paint job. Our comprehensive prep services ensure your surfaces are perfectly ready for painting.",
    features: [
      "Drywall repair and patching",
      "Crack and hole filling",
      "Sanding and smoothing",
      "Priming and sealing",
      "Mold and mildew treatment",
      "Surface cleaning and degreasing",
    ],
    image: "🔧",
  },
  {
    id: "wallpaper",
    icon: Scroll,
    title: "Wallpaper Removal",
    description: "Ready for a fresh start? Our wallpaper removal service safely and thoroughly removes old wallpaper without damaging your walls, preparing them for a beautiful new finish.",
    features: [
      "Complete wallpaper removal",
      "Adhesive residue removal",
      "Wall smoothing and repair",
      "Multiple layer removal",
      "Textured wall preparation",
      "Ready-to-paint surface finish",
    ],
    image: "📜",
  },
  {
    id: "consultation",
    icon: Palette,
    title: "Colour Consultation",
    description: "Not sure which colours will work best? Our expert colour consultation service helps you choose the perfect palette that complements your space, lighting, and personal style.",
    features: [
      "In-home colour consultations",
      "Sample application and testing",
      "Colour palette development",
      "Trend and style guidance",
      "Coordination with existing décor",
      "Light and space optimization",
    ],
    image: "🎨",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Professional Painting Services for Every Need
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From interior refreshes to complete exterior transformations, we offer comprehensive painting solutions for residential and commercial properties in Concord and the GTA.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="accent" asChild>
                    <Link to="/contact">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                    <span className="text-8xl">{service.image}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from first contact to final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", description: "Contact us for a free on-site estimate. We'll assess your project and discuss your vision." },
              { step: "02", title: "Detailed Quote", description: "Receive a comprehensive quote with no hidden fees. We explain everything in detail." },
              { step: "03", title: "Professional Execution", description: "Our skilled team arrives on time, prepares the space, and delivers exceptional results." },
              { step: "04", title: "Final Walkthrough", description: "We walk through the completed project together to ensure your complete satisfaction." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl bg-card shadow-card">
                <div className="text-5xl font-heading font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free, no-obligation quote. We're ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:647-854-9093">
                <Phone className="w-5 h-5" />
                647-854-9093
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
