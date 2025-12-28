import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cloud, Smartphone, Database, GraduationCap, Link2, HeadphonesIcon, Users, PhoneCall } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";

const TallySupport = () => {
  const services = [
    {
      icon: Wrench,
      title: "Tally Prime Customization",
      description: "Tailor Tally Prime to your unique business processes with custom reports, invoice formats, and workflows",
      features: ["Custom Reports & Formats", "Invoice Customization", "Workflow Automation", "Industry-specific Solutions"],
    },
    {
      icon: GraduationCap,
      title: "Tally Prime Training",
      description: "Comprehensive training programs for individuals and teams to master Tally Prime operations",
      features: ["Beginner to Advanced Courses", "On-site & Online Training", "Certification Programs", "Hands-on Practice Sessions"],
    },
    {
      icon: Cloud,
      title: "Tally Prime on Cloud",
      description: "Cloud access services provides a powerful option for businesses to access TallyPrime from anywhere",
      features: ["Access from Anywhere", "Secure Cloud Hosting", "Multi-user Collaboration", "Automatic Backups"],
    },
    {
      icon: Smartphone,
      title: "Tally Prime on Mobile Application",
      description: "Stay connected to your business. Always. Track your business anytime, anywhere",
      features: ["Real-time Data Access", "Mobile Reporting", "Business Tracking", "iOS & Android Support"],
    },
    {
      icon: Database,
      title: "Tally Prime Customization Services",
      description: "Addressing Specific Business requirements for reporting and ease of data posting through Customization & Cross Platform Automatic API based Data Porting services",
      features: ["Custom Reports & Formats", "Cross Platform API Integration", "Business-specific Solutions", "Data Porting Services"],
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Round-the-clock technical assistance for all your Tally Prime-related issues",
      features: ["24/7 Support Helpline", "Remote Troubleshooting", "Software Updates", "Performance Optimization"],
    },
    {
      icon: Link2,
      title: "Data Integration",
      description: "Seamless integration of Tally Prime with other business systems and applications for unified data management",
      features: ["System Integration", "API Integration", "Data Synchronization", "Cross-platform Connectivity", "Real-time Data Sync"],
    },
    {
      icon: Users,
      title: "Corporate Training",
      description: "Comprehensive corporate training programs designed for teams and organizations to enhance Tally Prime proficiency",
      features: ["Team Training Programs", "Customized Curriculum", "On-site Corporate Training", "Group Sessions", "Post-training Support"],
    },
    {
      icon: PhoneCall,
      title: "Tally Expert Support Helpline",
      description: "Direct access to Tally Prime experts via dedicated helpline for immediate assistance and guidance",
      features: ["Expert Consultation", "Quick Problem Resolution", "Direct Expert Access", "Priority Support", "24/7 Helpline Availability"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tally Prime Support Services Chennai - Customization, Cloud, Training | NnovityWorks</title>
        <meta name="description" content="Best Tally Prime support services in Chennai. Expert customization, Tally Prime on cloud, mobile access, training, data integration, and 24/7 technical support by NnovityWorks." />
        <meta name="keywords" content="Tally Prime support Chennai, Tally Prime customization Chennai, Tally Prime cloud Chennai, Tally Prime training Chennai, best Tally Prime support, Tally Prime on mobile, Tally Prime integration, Tally Prime technical support, ERP solutions Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/tally-support" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/tally-support" />
        <meta property="og:title" content="Tally Prime Support Services Chennai - Customization, Cloud, Training | NnovityWorks" />
        <meta property="og:description" content="Best Tally Prime support services in Chennai. Expert customization, cloud solutions, and training." />
        <meta property="og:image" content="https://nnovityworks.com/tally-support-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tally Prime Support Services Chennai" />
        <meta name="twitter:description" content="Expert Tally Prime customization, cloud, and training services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tally Prime Support Services",
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
              "name": "Tally Prime Support Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Prime Customization" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Prime Cloud Solutions" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tally Prime Training" } }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient text-primary-foreground py-20 animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ transform: 'none' }}>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Tally Prime Support & AMC Services
              </h1>
              <p className="text-sm md:text-base mb-8 text-primary-foreground/90">
                Installation & Implementation, Troubleshooting & error fixing, Annual maintenance and priority support. 
                Online & Onsite support available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-xl">
                  <NavLink to="/contact">Request Support</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <NavLink to="/tally-sales">Buy Tally Prime Software</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Tally Prime Support */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Why Tally Prime Support Matters?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Buying Tally Prime software is just the beginning. To truly leverage its power, you need proper customization, 
                  training, and ongoing support. Most businesses use only 30-40% of Tally Prime's capabilities because they lack 
                  proper guidance and support.
                </p>
                <p>
                  Our comprehensive Tally Prime support services ensure you get maximum ROI from your investment. From initial setup 
                  to advanced customizations, cloud deployment to ongoing maintenance - we've got you covered at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Our Tally Prime Support Services</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Expert support services designed to help you get the most out of your Tally Prime investment
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
                      <CardTitle className="text-base md:text-lg">{service.title}</CardTitle>
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
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 animate-fade-in">Why Choose Nnovity Works for Tally Prime Support?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fade-in">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certified Tally Prime Experts</h3>
                      <p className="text-sm text-muted-foreground">Our team consists of Tally Prime-certified professionals with years of hands-on experience</p>
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
                      <p className="text-sm text-muted-foreground">Not just fixing issues - we empower your team to use Tally Prime more effectively</p>
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden text-white animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Need Tally Prime Support? We're Here to Help!</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Whether it's a technical issue, customization need, or training requirement - our expert team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Get Support Now</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
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
