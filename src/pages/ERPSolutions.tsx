import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, Users, BarChart3, Settings, Database, ShoppingCart, Truck, FileText, Clock, Zap, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroERP from "@/assets/hero-erp.jpg";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const ERPSolutions = () => {
  const modules = [
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete accounting, budgeting, and financial reporting in real-time",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage warehouses, and automate reordering",
    },
    {
      icon: ShoppingCart,
      title: "Purchase & Procurement",
      description: "Streamline vendor management, purchase orders, and procurement processes",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Optimize logistics, shipping, and distribution operations",
    },
    {
      icon: Settings,
      title: "Manufacturing",
      description: "Production planning, work orders, and quality control management",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting for data-driven decision making",
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Employee data, attendance, payroll, and performance management",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized document storage with version control and access management",
    },
    {
      icon: Database,
      title: "Multi-Company Support",
      description: "Manage multiple business entities from a single unified platform",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Streamlined Operations",
      description: "Integrate all business processes into one system, eliminating data silos and manual work",
    },
    {
      icon: Clock,
      title: "Real-Time Insights",
      description: "Make informed decisions with live data and comprehensive analytics dashboards",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your business data with enterprise-grade security and compliance features",
    },
  ];

  return (
    <>
      <SEOHead
        page="erp"
        jsonLd={[SEO_CONFIG.structuredData.organization]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "ERP Solutions", url: "/erp-solutions" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Business Solutions"
          title={<>ERP for <span className="text-accent-italic">operations clarity</span></>}
          description="Unify finance, inventory, and workflows so your enterprise runs with fewer silos and better visibility."
          image={heroERP}
          imageAlt="ERP solutions implementation"
          primaryCta={{ label: "Talk to an Expert", to: "/contact" }}
          secondaryCta={{ label: "Explore HRMS", to: "/hrms-solutions" }}
          badge="Enterprise Operations"
          stats={[{ value: "One", label: "Connected Stack" }, { value: "Live", label: "Visibility" }, { value: "Scale", label: "Ready" }]}
        />

        {/* Modules Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Comprehensive ERP Modules</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Complete business management suite with integrated modules for every department
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/25 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7 transition-transform group-hover:rotate-6" />
                      </div>
                      <CardTitle className="text-base md:text-lg transition-colors group-hover:text-primary">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{module.description}</CardDescription>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Business Operations</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Experience measurable improvements across your entire organization
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-lg">
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

        {/* Industries Served */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Industry-Specific Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">Manufacturing & Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Production planning and scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Bill of materials and work order management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Quality control and shop floor management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">Retail & Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Multi-location inventory tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>POS integration and sales analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Supplier and customer relationship management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">Service Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Project management and time tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Resource allocation and scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>Billing and invoicing automation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">Trading & Import-Export</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Multi-currency and multi-company support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Customs and compliance management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span>Logistics and shipping integration</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Our Implementation Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Analysis", description: "Understand your business needs and processes" },
                  { step: "02", title: "Customization", description: "Configure ERP to match your workflows" },
                  { step: "03", title: "Training", description: "Comprehensive team training and documentation" },
                  { step: "04", title: "Support", description: "Ongoing support and continuous improvement" },
                ].map((phase, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="text-5xl font-bold text-primary/20 mb-2">{phase.step}</div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{phase.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Integrate Your Business Operations?</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Let our experts help you implement the perfect ERP solution for your business. 
              Schedule a consultation to discuss your requirements and see how ERP can transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Schedule Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call Sales: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/erp-solutions"]} title="Related business & training services" />


      <Footer />
    </>
  );
};

export default ERPSolutions;
