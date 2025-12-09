import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, DollarSign, Users, BarChart3, Settings, Database, ShoppingCart, Truck, FileText, Clock, Zap, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroERP from "@/assets/hero-erp.jpg";

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
      <Helmet>
        <title>ERP Solutions Chennai - Enterprise Resource Planning Software | NnovityWorks</title>
        <meta name="description" content="Professional ERP software solutions in Chennai by NnovityWorks. Integrate and automate your business processes with comprehensive Enterprise Resource Planning systems." />
        <meta name="keywords" content="ERP Chennai, ERP software Chennai, enterprise resource planning Chennai, ERP solutions, business ERP, manufacturing ERP, best ERP Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/erp-solutions" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/erp-solutions" />
        <meta property="og:title" content="ERP Solutions Chennai - Enterprise Resource Planning Software | NnovityWorks" />
        <meta property="og:description" content="Professional ERP software solutions in Chennai. Integrate and automate your business processes." />
        <meta property="og:image" content="https://nnovityworks.com/erp-solutions-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ERP Solutions Chennai - NnovityWorks" />
        <meta name="twitter:description" content="Enterprise Resource Planning software for business automation" />
      </Helmet>

      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative bg-success-gradient text-accent-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-15 animate-fade-in">
            <img src={heroERP} alt="ERP software solutions for enterprise resource planning in Chennai" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in">
                <Settings className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">Enterprise Resource Planning</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Unify Your Business with Powerful ERP Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-accent-foreground/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Integrate finance, operations, sales, and HR into one seamless platform. 
                Boost efficiency, reduce costs, and drive growth with our comprehensive ERP systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-xl hover:scale-105 transition-all duration-300">
                  <NavLink to="/contact">Request Consultation</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8 hover:scale-105 transition-all duration-300">
                  <a href="tel:+917299817996">Call: +91 72998 17996</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Comprehensive ERP Modules</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete business management suite with integrated modules for every department
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="mb-4 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-accent group-hover:rotate-12 transition-transform" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">{module.title}</CardTitle>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Transform Your Business Operations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                      <CardTitle className="text-2xl">{benefit.title}</CardTitle>
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Industry-Specific Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="text-xl">Manufacturing & Production</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Production planning and scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Bill of materials and work order management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Quality control and shop floor management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-xl">Retail & Distribution</CardTitle>
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
                <Card className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">Service Industries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Project management and time tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Resource allocation and scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Billing and invoicing automation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardHeader>
                    <CardTitle className="text-xl">Trading & Import-Export</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Multi-currency and multi-company support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span>Customs and compliance management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
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
        <section className="py-20 bg-muted/30">
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
        <section className="py-20 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Integrate Your Business Operations?</h2>
            <p className="text-xl mb-10 text-primary-foreground/90 max-w-3xl mx-auto">
              Let our experts help you implement the perfect ERP solution for your business. 
              Schedule a consultation to discuss your requirements and see how ERP can transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 shadow-xl">
                <NavLink to="/contact">Schedule Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8">
                <a href="tel:+917299817996">Call Sales: +91 72998 17996</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ERPSolutions;
