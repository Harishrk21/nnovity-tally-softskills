import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Cloud, Smartphone, Database, GraduationCap, Link2, HeadphonesIcon, Users, PhoneCall } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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
      <SEOHead
        page="tallySupport"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Tally Prime Support & AMC",
            name: "Tally Prime Support Services Chennai",
            provider: { "@type": "Organization", name: "NnovityWorks" },
            areaServed: { "@type": "City", name: "Chennai" },
          },
        ]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Tally Prime Support", url: "/tally-support" }
  ]} />
      <Navigation />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Tally Solutions"
          title={<>Tally Support <span className="text-accent-italic">& AMC</span></>}
          description="Installation, troubleshooting, customization, cloud access, and annual maintenance — online and onsite."
          image={"/tallylogonew.png"}
          imageAlt="Tally Prime support and AMC services"
          primaryCta={{ label: "Request Support", to: "/contact" }}
          secondaryCta={{ label: "Buy Tally Prime", to: "/tally-sales" }}
          badge="Priority Technical Support"
          stats={[{ value: "24/7", label: "Assistance Path" }, { value: "Onsite", label: "& Online" }, { value: "AMC", label: "Plans" }]}
        />

        {/* Understanding Tally Prime Support */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center font-display text-foreground">Why Tally Prime Support Matters?</h2>
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-display text-foreground">Our Tally Prime Support Services</h2>
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
                            <span className="text-primary mr-2">•</span>
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
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Certified Tally Prime Experts</h3>
                      <p className="text-sm text-muted-foreground">Our team consists of Tally Prime-certified professionals with years of hands-on experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Quick Response Time</h3>
                      <p className="text-sm text-muted-foreground">We understand downtime costs money. Our average response time is under 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Cost-Effective Solutions</h3>
                      <p className="text-sm text-muted-foreground">Flexible support packages tailored to your business size and requirements</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Local Chennai Presence</h3>
                      <p className="text-sm text-muted-foreground">Based in Chennai with on-site support capabilities across the city</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Comprehensive Training</h3>
                      <p className="text-sm text-muted-foreground">Not just fixing issues - we empower your team to use Tally Prime more effectively</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">6</span>
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
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24 animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white">Need Tally Prime Support? We're Here to Help!</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Whether it's a technical issue, customization need, or training requirement - our expert team is ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Get Support Now</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call Support: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/tally-support"]} title="Buy Tally, train teams & grow soft skills" />


      <Footer />
    </>
  );
};

export default TallySupport;
