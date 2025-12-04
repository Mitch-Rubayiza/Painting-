import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Concord, ON",
    service: "Interior Painting",
    text: "Condo Paints transformed our entire condo in just one day! The attention to detail was incredible, and the team was so professional. They moved furniture carefully, covered everything, and left our place spotless. The colour consultation service helped us pick the perfect shades. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    location: "Vaughan, ON",
    service: "Exterior Painting",
    text: "We've used Condo Paints for both interior and exterior work. Every time, they exceed expectations. Fair pricing, outstanding results, and they really care about doing the job right. Our house looks brand new after the exterior repaint. The neighbours have all been asking who did the work!",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    location: "Richmond Hill, ON",
    service: "Colour Consultation",
    text: "The colour consultation service was a game-changer. We were stuck between so many options, but the consultant helped us choose the perfect shades for our new home. Beautiful work and the team was a pleasure to work with. They even did sample patches on the wall so we could see the colours in our lighting.",
    rating: 5,
  },
  {
    name: "David Chen",
    location: "Markham, ON",
    service: "Commercial Painting",
    text: "Our office needed a refresh and Condo Paints delivered beyond our expectations. They worked around our business hours, finished on time, and the quality is exceptional. Our clients have commented on how professional the space looks now. Will definitely use them for our next location.",
    rating: 5,
  },
  {
    name: "Amanda Williams",
    location: "Toronto, ON",
    service: "Cabinet Refinishing",
    text: "Instead of spending a fortune on new kitchen cabinets, we had Condo Paints refinish them. The result is stunning! They look better than new, and we saved thousands. The prep work was meticulous and the finish is smooth and durable. It's been six months and they still look perfect.",
    rating: 5,
  },
  {
    name: "Robert Garcia",
    location: "Concord, ON",
    service: "Residential Painting",
    text: "Moving into our new home, we wanted fresh paint throughout. Condo Paints handled everything—walls, ceilings, trim, doors—everything. The team was respectful, efficient, and the results are flawless. They even helped us choose a cohesive colour palette for the whole house.",
    rating: 5,
  },
  {
    name: "Lisa Patel",
    location: "Vaughan, ON",
    service: "Wallpaper Removal",
    text: "We had decades-old wallpaper that we thought would be impossible to remove. Condo Paints not only removed it completely but repaired the walls underneath and painted them beautifully. The transformation is incredible. What a difference it makes!",
    rating: 5,
  },
  {
    name: "James Wilson",
    location: "Richmond Hill, ON",
    service: "Interior Painting",
    text: "As a property manager, I've worked with many painting contractors. Condo Paints stands out for their reliability, quality, and professionalism. They handle our turnover painting efficiently and the results consistently impress our tenants. They're now our go-to for all properties.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    location: "Concord, ON",
    service: "Exterior Painting",
    text: "The team at Condo Paints repainted our townhouse exterior and the results are amazing. They pressure washed, repaired some wood rot we didn't even know about, and applied a beautiful finish that should last for years. Great communication throughout the project.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Don't just take our word for it. Read what homeowners and businesses across the Greater Toronto Area have to say about their experience with Condo Paints.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-1">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-1">5.0</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-1">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-accent mb-1">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  <p className="text-accent text-sm mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the Condo Paints difference for yourself. Get started with a free, no-obligation quote today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
