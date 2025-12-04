import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target, CheckCircle, ArrowRight } from "lucide-react";
import painterWorking from "@/assets/painter-working.jpg";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never cut corners. Every brush stroke reflects our commitment to excellence and craftsmanship that lasts.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We listen, communicate, and deliver exactly what you envision.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time. Projects are completed on schedule without compromising on quality.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "From prep work to the final coat, we pay attention to every detail for flawless results.",
  },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "48hr", label: "Average Project Time" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Your Trusted Painting Partner in Concord
            </h1>
            <p className="text-xl text-primary-foreground/80">
              For years, Condo Paints has been transforming homes and businesses across the Greater Toronto Area with professional painting services that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Building Trust Through Quality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Condo Paints was founded on a simple principle: every home deserves a professional paint job that transforms not just the walls, but the entire living experience. What started as a small team with big dreams has grown into one of Concord's most trusted painting services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based at 191 Bowes Road in Concord, we've had the privilege of serving hundreds of homeowners and businesses throughout the GTA. Our growth has come from one thing: delivering results that speak for themselves and building relationships that last.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, our team of skilled painters brings the same passion and attention to detail to every project, whether it's a single accent wall or a complete commercial renovation.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-muted">
                    <div className="text-3xl font-heading font-bold text-accent mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={painterWorking} 
                alt="Condo Paints team at work" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-8">
              The Condo Paints Guarantee
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                "Free, detailed estimates with no hidden fees",
                "Premium quality paints and materials",
                "Clean, respectful work environment",
                "Thorough surface preparation",
                "On-time project completion",
                "100% satisfaction guarantee",
                "Fully licensed and insured team",
                "Post-project walkthrough and touch-ups",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join hundreds of satisfied customers who have trusted Condo Paints with their painting projects.
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
