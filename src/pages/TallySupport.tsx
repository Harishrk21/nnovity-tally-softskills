import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cloud, Smartphone, Database, GraduationCap, Cog, Link2, HeadphonesIcon } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const TallySupport = () => {
  const services = [
    {
      icon: Wrench,
      title: "Tally Customization",
      description: "Tailor Tally to your unique business processes with custom reports, invoice formats, and workflows",
      features: ["Custom Reports & Formats", "Invoice Customization", "Workflow Automation", "Industry-specific Solutions"],
    },
    {
      icon: GraduationCap,
      title: "Tally Training",
      description: "Comprehensive training programs for individuals and teams to master Tally operations",
      features: ["Beginner to Advanced Courses", "On-site & Online Training", "Certification Programs", "Hands-on Practice Sessions"],
    },
    {
      icon: Cloud,
      title: "Tally on Cloud",
      description: "Access your Tally data anytime, anywhere with secure cloud hosting solutions",
      features: ["Remote Access 24/7", "Automatic Backups", "Multi-user Collaboration", "Enhanced Security & Encryption"],
    },
    {
      icon: Smartphone,
      title: "Tally on Mobile",
      description: "Manage your business on the go with mobile access to critical Tally functions",
      features: ["Real-time Data Access", "Mobile Reporting", "Expense Management", "iOS & Android Support"],
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate Tally with other business systems and applications",
      features: ["ERP Integration", "E-commerce Sync", "Banking Integration", "API Development"],
    },
    {
      icon: Cog,
      title: "CRP-ERP-HRMS Solutions",
      description: "Comprehensive resource planning and human resource management systems",
      features: ["Customer Relationship Management", "Enterprise Resource Planning", "HR & Payroll Management", "Project Management Tools"],
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Round-the-clock technical assistance for all your Tally-related issues",
      features: ["24/7 Support Helpline", "Remote Troubleshooting", "Software Updates", "Performance Optimization"],
    },
    {
      icon: Link2,
      title: "Data Migration",
      description: "Safe and accurate migration of your existing data to Tally systems",
      features: ["Legacy System Migration", "Data Validation & Cleanup", "Zero Downtime Transfer", "Post-migration Support"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tally Support Services Chennai - Customization, Cloud, Training | Nnovity Works</title>
        <meta name="description" content="Best Tally support services in Chennai. Expert customization, Tally on cloud, mobile access, training, data integration, and 24/7 technical support by Nnovity Works." />
        <meta name="keywords" content="Tally support Chennai, Tally customization Chennai, Tally cloud Chennai, Tally training Chennai, best Tally support, Tally on mobile, Tally integration, Tally technical support, ERP solutions Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/tally-support" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tally Support Services",
            "provider": {
              "@type": "Organization",
              "name": "Nnovity Works",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Chennai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tally Support Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Customization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Cloud Solutions" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Training" } }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Tally Support Services in Chennai
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                From customization to cloud hosting, training to technical support - we provide end-to-end 
                Tally solutions to maximize your business efficiency.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <NavLink to="/contact">Request Support</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Tally Support Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert support services designed to help you get the most out of your Tally investment
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nnovity Works for Tally Support?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certified Tally Experts</h3>
                      <p className="text-sm text-muted-foreground">Our team consists of Tally-certified professionals with years of hands-on experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Quick Response Time</h3>
                      <p className="text-sm text-muted-foreground">We understand downtime costs money. Our average response time is under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Cost-Effective Solutions</h3>
                      <p className="text-sm text-muted-foreground">Flexible support packages tailored to your business size and requirements</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Local Chennai Presence</h3>
                      <p className="text-sm text-muted-foreground">Based in Chennai with on-site support capabilities across the city</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Training</h3>
                      <p className="text-sm text-muted-foreground">Not just fixing issues - we empower your team to use Tally more effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Long-term Partnership</h3>
                      <p className="text-sm text-muted-foreground">We build lasting relationships, growing with your business needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-success-gradient text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Tally Support? We're Here to Help!</h2>
            <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Whether it's a technical issue, customization need, or training requirement - our expert team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <NavLink to="/contact">Get Support Now</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <a href="tel:+91">Call Support: +91 XXX XXX XXXX</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TallySupport;
