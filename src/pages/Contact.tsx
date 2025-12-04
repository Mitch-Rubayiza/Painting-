import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "647-854-9093",
    href: "tel:647-854-9093",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@condopaints.com",
    href: "mailto:info@condopaints.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "191 Bowes Road, L4K 1H9, Concord, ON",
    href: "https://maps.google.com/?q=191+Bowes+Road+Concord+ON",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 8am-6pm",
    href: null,
  },
];

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Wall Repair & Prep",
  "Wallpaper Removal",
  "Colour Consultation",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen flex items-center bg-background">
          <div className="container text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-muted-foreground mb-8">
                Your quote request has been submitted successfully. Our team will review your information and get back to you within 24 hours.
              </p>
              <Button variant="accent" onClick={() => setIsSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to transform your space? Fill out the form below or contact us directly. We typically respond within 24 hours with a detailed, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-foreground font-medium hover:text-accent transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <div className="mt-10 p-6 rounded-2xl bg-muted">
                <h3 className="font-heading font-bold text-foreground mb-3">Service Areas</h3>
                <p className="text-muted-foreground text-sm">
                  We proudly serve Concord, Vaughan, Richmond Hill, Markham, Toronto, and the surrounding Greater Toronto Area.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-card shadow-card">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Request a Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(647) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Project Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Address or area (e.g., Concord, ON)"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project - what rooms need painting, approximate square footage, any special requirements, etc."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about your project.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.8456789012345!2d-79.5234567!3d43.7876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e1234567890%3A0x1234567890abcdef!2s191%20Bowes%20Rd%2C%20Concord%2C%20ON%20L4K%201H9!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Condo Paints Location"
        />
      </section>
    </Layout>
  );
}
