import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, DollarSign, FileText, TrendingUp, Award, Clock, UserCheck, BarChart3, Shield, Zap, Target } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroHRMS from "@/assets/hero-hrms.jpg";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const HRMSSolutions = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Centralized employee database with complete records, documents, and history",
    },
    {
      icon: Calendar,
      title: "Attendance & Leave",
      description: "Automated attendance tracking, leave management, and shift scheduling",
    },
    {
      icon: DollarSign,
      title: "Payroll Processing",
      description: "Accurate salary calculation with tax deductions, bonuses, and statutory compliance",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Goal setting, appraisals, KPI tracking, and continuous feedback systems",
    },
    {
      icon: FileText,
      title: "Recruitment",
      description: "End-to-end hiring process from job posting to onboarding automation",
    },
    {
      icon: Award,
      title: "Training & Development",
      description: "Plan, track, and manage employee training programs and skill development",
    },
    {
      icon: BarChart3,
      title: "HR Analytics",
      description: "Comprehensive reports and insights on workforce metrics and trends",
    },
    {
      icon: UserCheck,
      title: "Self-Service Portal",
      description: "Empower employees with self-service access to personal information and requests",
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Stay compliant with labor laws, ESI, PF, and other statutory requirements",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Save 50% Time",
      description: "Automate repetitive HR tasks and focus on strategic initiatives that drive business growth",
    },
    {
      icon: Target,
      title: "Reduce Errors",
      description: "Eliminate manual calculation errors in payroll and attendance with automated systems",
    },
    {
      icon: Clock,
      title: "Boost Productivity",
      description: "Streamline HR workflows and improve employee engagement with modern tools",
    },
  ];

  return (
    <>
      <SEOHead
        page="hrms"
        jsonLd={[SEO_CONFIG.structuredData.organization]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "HRMS Solutions", url: "/hrms-solutions" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Business Solutions"
          title={<>HRMS for <span className="text-accent-italic">people ops</span></>}
          description="Payroll, attendance, and people operations in one connected system designed for growing teams."
          image={heroHRMS}
          imageAlt="HRMS solutions for HR teams"
          primaryCta={{ label: "Book Consultation", to: "/contact" }}
          secondaryCta={{ label: "Explore POS", to: "/pos-billing-solutions" }}
          badge="People & Payroll Systems"
          stats={[{ value: "Payroll", label: "Simplified" }, { value: "HR", label: "Centralized" }, { value: "Teams", label: "Enabled" }]}
        />

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete HRMS Features</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                All the tools you need to manage your human resources efficiently and effectively
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader>
                      <div className="mb-4 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
                      </div>
                      <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Businesses Choose Our HRMS</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Measurable improvements in HR efficiency and employee satisfaction
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-shadow border-2">
                    <CardHeader>
                      <div className="mx-auto mb-4 w-20 h-20 rounded-2xl bg-warm-gradient flex items-center justify-center shadow-lg">
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

        {/* Payroll Spotlight */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">Advanced Payroll Management</h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Our HRMS includes a powerful payroll engine that handles complex salary structures, 
                    multiple payment modes, and full statutory compliance.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic tax calculations (TDS, Professional Tax)",
                      "ESI, PF, and gratuity management",
                      "Multiple salary components and allowances",
                      "Bank transfer integration",
                      "Salary slips and Form 16 generation",
                      "Arrears and bonus calculations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <DollarSign className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="border-2 border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Compliance Made Easy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-primary" />
                        Statutory Compliance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Stay compliant with all Indian labor laws including EPF, ESI, Professional Tax, and more
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-primary" />
                        Automated Reports
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Generate all statutory returns and reports automatically with a single click
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Size Options */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Solutions for Every Company Size</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-secondary text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Small Business</CardTitle>
                    <CardDescription>10-50 Employees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Essential HR features with easy setup and affordable pricing for growing teams
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Medium Enterprise</CardTitle>
                    <CardDescription>50-500 Employees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Advanced features with multi-location support and detailed analytics
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Large Corporation</CardTitle>
                    <CardDescription>500+ Employees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-grade system with custom workflows and dedicated support
                    </p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Transform Your HR Operations Today</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
              Join hundreds of businesses in Chennai who have automated their HR processes with our HRMS. 
              Schedule a free demo and see how we can help streamline your HR operations.
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
      <RelatedServices exclude={["/hrms-solutions"]} title="Related business & training services" />


      <Footer />
    </>
  );
};

export default HRMSSolutions;
