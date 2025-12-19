import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cloud, Smartphone, Database, GraduationCap, Link2, HeadphonesIcon } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";

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
      description: "Cloud access services provides a powerful option for businesses to access TallyPrime from anywhere",
      features: ["Access from Anywhere", "Secure Cloud Hosting", "Multi-user Collaboration", "Automatic Backups"],
    },
    {
      icon: Smartphone,
      title: "Tally on Mobile Application",
      description: "Stay connected to your business. Always. Track your business anytime, anywhere",
      features: ["Real-time Data Access", "Mobile Reporting", "Business Tracking", "iOS & Android Support"],
    },
    {
      icon: Database,
      title: "Tally Customization Services",
      description: "Addressing Specific Business requirements for reporting and ease of data posting through Customization & Cross Platform Automatic API based Data Porting services",
      features: ["Custom Reports & Formats", "Cross Platform API Integration", "Business-specific Solutions", "Data Porting Services"],
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
        <title>Tally Support Services Chennai - Customization, Cloud, Training | NnovityWorks</title>
        <meta name="description" content="Best Tally support services in Chennai. Expert customization, Tally on cloud, mobile access, training, data integration, and 24/7 technical support by NnovityWorks." />
        <meta name="keywords" content="Tally support Chennai, Tally customization Chennai, Tally cloud Chennai, Tally training Chennai, best Tally support, Tally on mobile, Tally integration, Tally technical support, ERP solutions Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/tally-support" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/tally-support" />
        <meta property="og:title" content="Tally Support Services Chennai - Customization, Cloud, Training | NnovityWorks" />
        <meta property="og:description" content="Best Tally support services in Chennai. Expert customization, cloud solutions, and training." />
        <meta property="og:image" content="https://nnovityworks.com/tally-support-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tally Support Services Chennai" />
        <meta name="twitter:description" content="Expert Tally customization, cloud, and training services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tally Support Services",
            "provider": {
              "@type": "Organization",
              "name": "NnovityWorks",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
                "addressLocality": "Chennai",
                "postalCode": "600102",
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
        <section className="bg-hero-gradient text-primary-foreground py-20 animate-fade-in relative overflow-hidden">
          <ParallaxSection speed={0.3} className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </ParallaxSection>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tally Support & AMC Services
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Installation & Implementation, Troubleshooting & error fixing, Annual maintenance and priority support. 
                Online & Onsite support available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-xl">
                  <NavLink to="/contact">Request Support</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <NavLink to="/tally-sales">Buy Tally Software</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Tally Support */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Tally Support Matters?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Buying Tally software is just the beginning. To truly leverage its power, you need proper customization, 
                  training, and ongoing support. Most businesses use only 30-40% of Tally's capabilities because they lack 
                  proper guidance and support.
                </p>
                <p>
                  Our comprehensive Tally support services ensure you get maximum ROI from your investment. From initial setup 
                  to advanced customizations, cloud deployment to ongoing maintenance - we've got you covered at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Tally Support Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert support services designed to help you get the most out of your Tally investment
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Why Choose Nnovity Works for Tally Support?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certified Tally Experts</h3>
                      <p className="text-sm text-muted-foreground">Our team consists of Tally-certified professionals with years of hands-on experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Quick Response Time</h3>
                      <p className="text-sm text-muted-foreground">We understand downtime costs money. Our average response time is under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
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
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Local Chennai Presence</h3>
                      <p className="text-sm text-muted-foreground">Based in Chennai with on-site support capabilities across the city</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Training</h3>
                      <p className="text-sm text-muted-foreground">Not just fixing issues - we empower your team to use Tally more effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
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
        <section className="py-16 bg-success-gradient text-accent-foreground animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Tally Support? We're Here to Help!</h2>
            <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Whether it's a technical issue, customization need, or training requirement - our expert team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 shadow-xl">
                <NavLink to="/contact">Get Support Now</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent transition-all duration-300">
                <a href="tel:+919841115769">Call Support: +91 98411 15769</a>
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
