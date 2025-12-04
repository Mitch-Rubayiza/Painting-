import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Home as HomeIcon, 
  Building2, 
  Palette, 
  Clock, 
  Shield, 
  Award, 
  Users,
  Star,
  ChevronRight,
  Phone,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-painting.jpg";
import painterWorking from "@/assets/painter-working.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const services = [
  {
    icon: HomeIcon,
    title: "Interior Painting",
    description: "Transform your living spaces with premium interior painting. From accent walls to complete room makeovers.",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Boost your curb appeal with durable exterior finishes that withstand Canadian weather conditions.",
  },
  {
    icon: Paintbrush,
    title: "Residential Services",
    description: "Complete home painting solutions for condos, townhouses, and single-family homes.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description: "Professional painting for offices, retail spaces, and commercial properties with minimal disruption.",
  },
  {
    icon: Palette,
    title: "Colour Consultation",
    description: "Expert colour advice to help you choose the perfect palette for your space.",
  },
  {
    icon: Paintbrush,
    title: "Wall Prep & Repair",
    description: "Surface preparation, drywall repair, and wallpaper removal for flawless results.",
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Most projects completed in just 1-2 days without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete liability coverage for your peace of mind.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee on all our painting work.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled, trained professionals who treat your home with respect.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Concord, ON",
    text: "Condo Paints transformed our entire condo in just one day! The attention to detail was incredible, and the team was so professional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Vaughan, ON",
    text: "We've used Condo Paints for both interior and exterior work. Every time, they exceed expectations. Fair pricing and outstanding results.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "Richmond Hill, ON",
    text: "The colour consultation service was a game-changer. They helped us choose the perfect shades for our new home. Beautiful work!",
    rating: 5,
  },
];

const galleryImages = [
  { src: gallery1, alt: "Modern living room interior painting" },
  { src: gallery2, alt: "Kitchen cabinet painting" },
  { src: gallery3, alt: "Exterior house painting" },
  { src: gallery4, alt: "Commercial office painting" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional painting services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6 animate-fade-in">
              Concord's Premier Painting Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-slide-up">
              Professional Painting That
              <span className="block text-accent">Transforms Spaces</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up stagger-2">
              Expert residential and commercial painting services in Concord and the Greater Toronto Area. Quality craftsmanship, on-time delivery, and results that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="tel:647-854-9093">
                  <Phone className="w-5 h-5" />
                  Call 647-854-9093
                </a>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-in stagger-4">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Award className="w-5 h-5" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Fast Turnaround</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              The Condo Paints Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just painters — we're craftsmen dedicated to delivering exceptional results that transform your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Complete Painting Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From small touch-ups to complete transformations, we offer comprehensive painting services for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={painterWorking} 
                alt="Professional painter at work" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Condo Paints</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Your Trusted Local Painting Experts
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Concord, Ontario, Condo Paints has been delivering exceptional painting services to residential and commercial clients throughout the Greater Toronto Area. Our team of skilled professionals brings years of experience and a genuine passion for transforming spaces.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe that a fresh coat of paint can do more than change a room's appearance — it can change how you feel in your space. That's why we're committed to delivering not just a paint job, but a transformation you'll love for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/gallery">See Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              Recent Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent transformations. Every project showcases our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Link 
                key={index}
                to="/gallery"
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Gallery
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what homeowners and businesses in the GTA have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote today. Our team is ready to bring your vision to life with professional painting services you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Your Free Quote
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
