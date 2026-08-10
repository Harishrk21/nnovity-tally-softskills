import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Target, Mail, Phone, BarChart3, Calendar, MessageSquare, FileText, Globe, Zap, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroCRM from "@/assets/hero-tally.jpg";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const CRMSolutions = () => {
  const features = [
    {
      icon: Users,
      title: "Contact Management",
      description: "Centralized customer database with complete interaction history and contact details",
    },
    {
      icon: Target,
      title: "Lead Management",
      description: "Track and nurture leads through your sales pipeline with automated workflows",
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Real-time dashboards and reports to track sales performance and trends",
    },
    {
      icon: Mail,
      title: "Email Integration",
      description: "Seamlessly integrate with email platforms for automated communication",
    },
    {
      icon: Calendar,
      title: "Task & Calendar",
      description: "Schedule follow-ups, meetings, and automate reminders for your team",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor team performance with KPIs and sales metrics dashboards",
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      description: "Integrated ticketing system for efficient customer service management",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Store and access customer documents, contracts, and proposals easily",
    },
    {
      icon: Globe,
      title: "Multi-channel Support",
      description: "Manage customer interactions across email, phone, social media, and web",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Boost Productivity",
      description: "Automate repetitive tasks and streamline your sales process for 40% more efficiency",
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Convert more leads into customers with intelligent insights and follow-ups",
    },
    {
      icon: Shield,
      title: "Better Retention",
      description: "Improve customer satisfaction and retention with personalized engagement",
    },
  ];

  return (
    <>
      <SEOHead
        page="crm"
        jsonLd={[SEO_CONFIG.structuredData.organization]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "CRM Solutions", url: "/crm-solutions" }
  ]} />
      <Navigation />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Business Solutions"
          title={<>CRM that <span className="text-accent-italic">converts</span></>}
          description="Customer relationship systems that help your team track leads, close deals, and retain customers."
          image={heroCRM}
          imageAlt="CRM solutions for growing businesses"
          primaryCta={{ label: "Design a CRM Plan", to: "/contact" }}
          secondaryCta={{ label: "View All Solutions", to: "/erp-solutions" }}
          badge="Sales & Relationship Systems"
          stats={[{ value: "Leads", label: "Pipeline Clear" }, { value: "Teams", label: "Aligned" }, { value: "ROI", label: "Focused" }]}
        />

        {/* What is CRM Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is CRM and Why Do You Need It?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>CRM (Customer Relationship Management)</strong> is a technology system that helps businesses manage all interactions 
                  with current and potential customers. Think of it as a central hub where all customer information, communications, 
                  and activities are stored and accessible to your entire team.
                </p>
                <p>
                  Without a CRM, customer data is scattered across emails, spreadsheets, sticky notes, and team members' memories. 
                  This leads to missed follow-ups, duplicate efforts, and lost opportunities. A CRM system organizes everything in 
                  one place, ensuring no customer falls through the cracks.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                  <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">Before CRM (Common Problems)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Customer data spread across multiple systems</p>
                      <p>• Missed follow-ups and forgotten tasks</p>
                      <p>• No visibility into sales pipeline</p>
                      <p>• Duplicate data entry and wasted time</p>
                      <p>• Poor customer service due to lack of history</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-secondary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">After CRM (Solutions)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Single source of truth for all customer data</p>
                      <p>• Automated reminders and task management</p>
                      <p>• Complete sales pipeline visibility</p>
                      <p>• Streamlined workflows saving hours daily</p>
                      <p>• Personalized service with full customer history</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Comprehensive CRM Features</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Everything you need to manage customer relationships effectively, all in one powerful platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                    <CardHeader>
                      <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our CRM Solutions?</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Proven results that drive business growth and customer satisfaction
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-success-gradient flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Perfect For Every Business Type</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">Small & Medium Businesses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Affordable pricing with no hidden costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Easy to set up and use without IT expertise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Scale as your business grows</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">Enterprise Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Advanced customization and integration options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Multi-department and multi-location support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Enterprise-grade security and compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Revolutionize Your Customer Management?</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Join hundreds of businesses in Chennai who have transformed their customer relationships with our CRM solutions. 
              Schedule a free demo today and see the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Schedule Free Demo</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call Sales: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/crm-solutions"]} title="Related business & training services" />


      <Footer />
    </>
  );
};

export default CRMSolutions;
