import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    category: "Interior",
    location: "Concord, ON",
    description: "Complete interior repaint of a modern living room with custom accent wall and premium finishes.",
    image: gallery1,
  },
  {
    id: 2,
    title: "Kitchen Cabinet Refinishing",
    category: "Interior",
    location: "Vaughan, ON",
    description: "Navy blue cabinet transformation bringing new life to a dated kitchen without full renovation.",
    image: gallery2,
  },
  {
    id: 3,
    title: "Exterior Home Refresh",
    category: "Exterior",
    location: "Richmond Hill, ON",
    description: "Complete exterior repaint including siding, trim, and shutters for enhanced curb appeal.",
    image: gallery3,
  },
  {
    id: 4,
    title: "Modern Office Space",
    category: "Commercial",
    location: "Toronto, ON",
    description: "Commercial office painting project with minimal business disruption and professional finish.",
    image: gallery4,
  },
  {
    id: 5,
    title: "Condo Unit Makeover",
    category: "Residential",
    location: "Concord, ON",
    description: "Full condo repaint including all rooms, trim, and ceiling for a move-in ready finish.",
    image: gallery5,
  },
  {
    id: 6,
    title: "Restaurant Interior",
    category: "Commercial",
    location: "Markham, ON",
    description: "Restaurant refresh with custom colours to match brand identity and enhance dining atmosphere.",
    image: gallery6,
  },
  {
    id: 7,
    title: "Townhouse Exterior",
    category: "Exterior",
    location: "Concord, ON",
    description: "Weather-resistant exterior coating application protecting against harsh Canadian winters.",
    image: gallery3,
  },
  {
    id: 8,
    title: "Medical Office Update",
    category: "Commercial",
    location: "Vaughan, ON",
    description: "Clean, calming colour scheme for a dental office creating a welcoming patient environment.",
    image: gallery4,
  },
];

const categories = ["All", "Interior", "Exterior", "Commercial", "Residential"];

export default function Gallery() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              See Our Work in Action
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Browse through our portfolio of completed projects. Each transformation showcases our commitment to quality, attention to detail, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-accent text-sm mb-3">{project.location}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Want Results Like These?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss your project and how we can transform your space with our professional painting services.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
