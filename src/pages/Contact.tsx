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
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New Contact Form Submission from NnovityWorks Website');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      // Submit to formsubmit.co using fetch
      const response = await fetch('https://formsubmit.co/ajax/smillath@nnovityworks.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          toast({
            title: "Message Sent Successfully!",
            description: "Thank you for contacting us. We'll get back to you within 24 hours.",
            variant: "default",
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        } else {
          throw new Error('Submission failed');
        }
      } else {
        throw new Error('Network error');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact NnovityWorks - Tally Prime & Soft Skills Training Enquiries Chennai</title>
        <meta name="description" content="Contact NnovityWorks for Tally Prime solutions & soft skills training in Chennai, Anna Nagar. Reach Mr. Samshul Millath for expert consultation. Call +91 98411 15769. Best Tally Prime & training services." />
        <meta name="description" content="Contact NnovityWorks for Tally Prime solutions  soft skills training in Chennai, Anna Nagar. Reach Mr. Samshul Millath for expert consultation. Call +91 98411 15769. Best Tally Prime  training services." />
        <meta name="keywords" content="contact NnovityWorks, Tally Prime enquiry Chennai, soft skills training contact Chennai, Mr. Samshul Millath contact, Chennai training contact, Anna Nagar training contact" />
        <link rel="canonical" href="https://nnovityworks.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/contact" />
        <meta property="og:title" content="Contact NnovityWorks - Tally Prime & Soft Skills Training Chennai" />
        <meta property="og:description" content="Get in touch with NnovityWorks for Tally Prime solutions and soft skills training. Contact Mr. Samshul Millath for expert consultation." />
        <meta property="og:image" content="https://nnovityworks.com/contact-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact NnovityWorks" />
        <meta name="twitter:description" content="Tally Prime & Soft Skills Training Enquiries in Chennai" />
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
              "email": "smillath@nnovityworks.com"
            }
          })}
        </script>
      </Helmet>


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85"></div>
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
          </div>
          {/* Floating Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Get in Touch</h1>
              <p className="text-sm md:text-base text-white/95 font-medium">
                Have questions about our services? We're here to help you find the right solution.
              </p> Learn more about <a href="/tally-sales" className="text-blue-600 hover:text-blue-800 underline">Tally Prime services</a>.
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform pb-4 border-b border-border/50">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East,chennai-600102
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform pb-4 border-b border-border/50">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <a href="tel:+919841115769" className="text-sm text-muted-foreground hover:text-primary mt-1 block">
                            +91 98411 15769
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform pb-4 border-b border-border/50">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <a href="mailto:smillath@nnovityworks.com" className="text-sm text-muted-foreground hover:text-primary mt-1 block">
                            smillath@nnovityworks.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 hover:translate-x-1 transition-transform">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Business Hours</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Mon - Sat: 9:00 AM - 6:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">Quick Response</CardTitle>
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
                    {isSuccess && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3 animate-fade-in">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</p>
                          <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                            Thank you for contacting us. We'll get back to you within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}
                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
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
                            name="phone"
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
                          name="email"
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
                            <SelectItem value="tally-sales">Tally Prime Sales</SelectItem>
                            <SelectItem value="tally-customization">Tally Prime Customization</SelectItem>
                            <SelectItem value="tally-cloud">Tally Prime on Cloud</SelectItem>
                            <SelectItem value="tally-support">Tally Prime Technical Support</SelectItem>
                            <SelectItem value="tally-training">Tally Prime Training</SelectItem>
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
                          name="message"
                          placeholder="Tell us about your requirements..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-hero-gradient hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Find Us in Chennai</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-muted rounded-lg overflow-hidden shadow-xl border border-border/50">
                <iframe
                  src="https://www.google.com/maps?q=13,1st+Main+Road,R.V.Nagar,Block+1,+Anna+Nagar+East,chennai-600102&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
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
