import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact NnovityWorks - Tally & Soft Skills Training Enquiries Chennai</title>
        <meta name="description" content="Contact NnovityWorks for Tally ERP solutions and soft skills training enquiries in Chennai. Reach out to Samshul Millath for expert consultation and support." />
        <meta name="keywords" content="contact NnovityWorks, Tally enquiry Chennai, soft skills training contact, Samshul Millath contact, Chennai training contact" />
        <link rel="canonical" href="https://nnovityworks.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/contact" />
        <meta property="og:title" content="Contact NnovityWorks - Tally & Soft Skills Training Chennai" />
        <meta property="og:description" content="Get in touch with NnovityWorks for Tally solutions and soft skills training. Contact Samshul Millath for expert consultation." />
        <meta property="og:image" content="https://nnovityworks.com/contact-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact NnovityWorks" />
        <meta name="twitter:description" content="Tally & Soft Skills Training Enquiries in Chennai" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
            "@type": "Organization",
            "name": "NnovityWorks",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
                "addressLocality": "Chennai",
                "postalCode": "600102",
                "addressRegion": "TN",
                "addressCountry": "IN"
              },
              "telephone": "+91-98411-15769",
              "email": "millath@nnovityworks.com"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
          <ParallaxSection speed={0.3} className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </ParallaxSection>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-primary-foreground/90">
                Have questions about our services? We're here to help you find the right solution.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-sm text-muted-foreground">
                          13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East,chennai-600102
                        </p>
                      </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919841115769" className="text-sm text-muted-foreground hover:text-primary">
                          +91 98411 15769
                        </a>
                      </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:millath@nnovityworks.com" className="text-sm text-muted-foreground hover:text-primary">
                          millath@nnovityworks.com
                        </a>
                      </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Mon - Sat: 9:00 AM - 6:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all enquiries within 24 hours. For urgent matters, 
                      please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)} required>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tally-sales">Tally Sales</SelectItem>
                            <SelectItem value="tally-customization">Tally Customization</SelectItem>
                            <SelectItem value="tally-cloud">Tally on Cloud</SelectItem>
                            <SelectItem value="tally-support">Tally Technical Support</SelectItem>
                            <SelectItem value="tally-training">Tally Training</SelectItem>
                            <SelectItem value="softskills-corporate">Corporate Softskills Training</SelectItem>
                            <SelectItem value="softskills-personal">Personal Development Training</SelectItem>
                            <SelectItem value="train-trainer">Train the Trainer Program</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-hero-gradient hover:opacity-90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us in Chennai</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-lg overflow-hidden shadow-xl border border-border/50">
                <iframe
                  src="https://www.google.com/maps?q=13,1st+Main+Road,R.V.Nagar,Block+1,+Anna+Nagar+East,chennai-600102&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="NnovityWorks Location - 13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East,chennai-600102"
                ></iframe>
              </div>
              <div className="mt-6 text-center space-y-4">
                <p className="text-muted-foreground mb-4">
                  13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East,chennai-600102
                </p>
                <a
                  href="https://maps.app.goo.gl/Wti9D7waUN8LYSFc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
