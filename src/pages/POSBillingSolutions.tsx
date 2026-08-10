import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Zap, BarChart3, Receipt, CreditCard, Package, TrendingUp, Users, Clock, Shield, CheckCircle2, Store, Calculator, Printer, Smartphone, Database } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import teamSuccess from "@/assets/team-success.jpg";

const POSBillingSolutions = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Fast Counter Billing",
      description: "Lightning-fast billing for supermarkets and retail stores with quick checkout processing",
    },
    {
      icon: Receipt,
      title: "Invoice Generation",
      description: "Instant invoice generation with customizable formats and automatic numbering",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Modes",
      description: "Accept cash, cards, UPI, digital wallets, and other payment methods seamlessly",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking with automatic stock updates and low stock alerts",
    },
    {
      icon: BarChart3,
      title: "Sales Reports & Analytics",
      description: "Comprehensive sales reports, daily summaries, and business analytics dashboard",
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Support multiple counters and users with role-based access control",
    },
    {
      icon: Printer,
      title: "Receipt Printing",
      description: "Thermal printer support for instant receipt printing and duplicate copies",
    },
    {
      icon: Smartphone,
      title: "Mobile POS",
      description: "Mobile billing solution for on-the-go sales and delivery operations",
    },
    {
      icon: Database,
      title: "Data Backup & Security",
      description: "Automatic data backup and secure storage for business continuity",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Speed Up Checkout",
      description: "Reduce billing time by 70% with fast counter billing and quick product scanning",
    },
    {
      icon: TrendingUp,
      title: "Increase Sales",
      description: "Faster checkout means more customers served and higher revenue potential",
    },
    {
      icon: Shield,
      title: "Error Reduction",
      description: "Minimize billing errors and calculation mistakes with automated systems",
    },
  ];

  const useCases = [
    {
      icon: Store,
      title: "Supermarkets & Retail Stores",
      description: "Perfect for supermarkets, grocery stores, and retail outlets with high transaction volumes",
      features: ["Fast Counter Billing", "Barcode Scanning", "Multiple Payment Options", "Inventory Tracking"]
    },
    {
      icon: ShoppingCart,
      title: "Counter Billing Shops",
      description: "Ideal for small to medium shops requiring quick and efficient billing solutions",
      features: ["Quick Billing", "Receipt Printing", "Sales Reports", "Customer Management"]
    },
    {
      icon: Package,
      title: "Wholesale & Distribution",
      description: "Comprehensive billing solution for wholesale businesses and distribution centers",
      features: ["Bulk Billing", "Credit Management", "Multi-location Support", "Advanced Reports"]
    },
  ];

  return (
    <>
      <SEOHead
        page="pos"
        jsonLd={[SEO_CONFIG.structuredData.organization]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "POS Billing Solutions", url: "/pos-billing-solutions" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Business Solutions"
          title={<>POS Billing <span className="text-accent-italic">built for retail</span></>}
          description="Fast counter billing for stores and supermarket chains — speed, accuracy, and inventory control at checkout."
          image={teamSuccess}
          imageAlt="POS billing solutions for retail stores and supermarket counters"
          primaryCta={{ label: "Request a Demo", to: "/contact" }}
          secondaryCta={{ label: "Contact Sales", to: "/contact" }}
          badge="Retail Billing Systems"
          stats={[{ value: "Fast", label: "Checkout" }, { value: "Stock", label: "Synced" }, { value: "Reports", label: "Ready" }]}
        />

        {/* What is POS Billing Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">What is POS Billing and Why Do You Need It?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>POS (Point of Sale) Billing Software</strong> is a comprehensive system designed for fast and efficient 
                  billing at retail counters, supermarkets, and shops. It automates the entire billing process from product 
                  scanning to receipt generation, making transactions quick and error-free.
                </p>
                <p>
                  For supermarkets and retail stores handling hundreds of transactions daily, manual billing is time-consuming 
                  and error-prone. Our POS billing software speeds up checkout, reduces errors, manages inventory automatically, 
                  and provides real-time sales insights.
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                  <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">Manual Billing (Problems)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Slow checkout process, long customer queues</p>
                      <p>• Manual calculation errors and mistakes</p>
                      <p>• No real-time inventory tracking</p>
                      <p>• Time-consuming daily sales reports</p>
                      <p>• Difficulty managing multiple payment modes</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-secondary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">POS Billing Software (Solutions)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                      <p>• Fast counter billing, reduced waiting time</p>
                      <p>• Automatic calculations, zero errors</p>
                      <p>• Real-time inventory updates and alerts</p>
                      <p>• Instant sales reports and analytics</p>
                      <p>• Support for all payment methods</p>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Comprehensive POS Billing Features</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Everything you need for fast, efficient billing and complete business management
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our POS Billing Solutions?</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Proven benefits that transform your billing operations and boost business efficiency
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
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
              <div className="grid md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => {
                  const Icon = useCase.icon;
                  return (
                    <Card key={index} className="border-l-4 border-l-primary hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                        <CardDescription>{useCase.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {useCase.features.map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Detail */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Key Features Explained</h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <ShoppingCart className="w-8 h-8 text-blue-600" />
                      <CardTitle className="text-xl">Fast Counter Billing</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our POS billing software is optimized for speed. With barcode scanning, quick product search, 
                      and one-click billing, you can process transactions in seconds. Perfect for supermarkets with 
                      high customer footfall where every second counts.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Barcode scanning for instant product lookup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Quick product search by name or code</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Keyboard shortcuts for faster operations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cyan-500">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Package className="w-8 h-8 text-cyan-600" />
                      <CardTitle className="text-xl">Real-time Inventory Management</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Automatic inventory updates with every sale. Get low stock alerts, track product movement, 
                      and maintain optimal stock levels without manual intervention.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automatic stock deduction on billing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Low stock alerts and notifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Stock reports and movement tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-500">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-8 h-8 text-indigo-600" />
                      <CardTitle className="text-xl">Sales Reports & Analytics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive sales reports and analytics to understand your business better. Daily, weekly, 
                      monthly reports with insights on top-selling products, peak hours, and revenue trends.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Daily, weekly, monthly sales summaries</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Top-selling products and category analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Revenue trends and profit margins</span>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Ready to Speed Up Your Billing Process?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Transform your billing operations with our fast POS billing software. Perfect for supermarkets, 
              retail stores, and shops. Get started today and see the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Request Demo</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call Sales: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/pos-billing-solutions"]} title="Related business & training services" />


      <Footer />
    </>
  );
};

export default POSBillingSolutions;



