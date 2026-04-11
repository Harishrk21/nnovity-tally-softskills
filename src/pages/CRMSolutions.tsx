import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
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
      <Helmet>
        <title>CRM Solutions Chennai - Customer Relationship Management Software | NnovityWorks</title>
        <meta name="description" content="Best CRM software solutions in Chennai, Anna Nagar by NnovityWorks. Professional customer management, boost sales & enhance relationships. CRM software Chennai. Expert CRM implementation & support." />
        <meta name="description" content="Best CRM software solutions in Chennai, Anna Nagar by NnovityWorks. Professional customer management, boost sales  enhance relationships. CRM software Chennai. Expert CRM implementation  support." />
        <meta name="keywords" content="CRM software Chennai, CRM software Anna Nagar, customer relationship management Chennai, CRM solutions Chennai, best CRM Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/crm-solutions" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/crm-solutions" />
        <meta property="og:title" content="CRM Solutions Chennai - Customer Relationship Management Software | NnovityWorks" />
        <meta property="og:description" content="Professional CRM software solutions in Chennai. Streamline customer management and boost sales." />
        <meta property="og:image" content="https://nnovityworks.com/crm-solutions-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CRM Solutions Chennai - NnovityWorks" />
        <meta name="twitter:description" content="Professional CRM software for customer relationship management" />
      </Helmet>


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "CRM Solutions", url: "/crm-solutions" }
  ]} />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0" style={{ transform: 'none' }}>
            <img 
              src={heroCRM} 
              alt="CRM software solutions for customer relationship management in Chennai"
              className="w-full h-full object-cover object-center"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85"></div>
          </div>
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customer Relationship Management</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Transform Customer Relationships with Powerful CRM Solutions
              </h1>
              <p className="text-sm md:text-base mb-8 text-white/95 font-medium">
                Streamline sales, marketing, and customer service with our comprehensive CRM platform. 
                Increase revenue, improve customer satisfaction, and grow your business faster.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-sm md:text-base px-6 py-3 shadow-xl transition-all duration-300">
                  <NavLink to="/contact">Request Demo</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-sm md:text-base px-6 py-3 transition-all duration-300">
                  <a href="tel:+919841115769">Call: +91 98411 15769</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is CRM Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
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
                        <Icon className="w-10 h-10 text-accent-foreground" />
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
                        <span className="text-secondary mr-2">✓</span>
                        <span>Advanced customization and integration options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span>Multi-department and multi-location support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Revolutionize Your Customer Management?</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Join hundreds of businesses in Chennai who have transformed their customer relationships with our CRM solutions. 
              Schedule a free demo today and see the difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Schedule Free Demo</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call Sales: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CRMSolutions;
