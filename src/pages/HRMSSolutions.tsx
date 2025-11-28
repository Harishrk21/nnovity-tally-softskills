import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, DollarSign, FileText, TrendingUp, Award, Clock, UserCheck, BarChart3, Shield, Zap, Target } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroHRMS from "@/assets/hero-hrms.jpg";

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
      <Helmet>
        <title>HRMS Solutions Chennai - Human Resource Management Software | Nnovity Works</title>
        <meta name="description" content="Professional HRMS software solutions in Chennai by Nnovity Works. Streamline HR operations, payroll, attendance, and employee management with comprehensive HR systems." />
        <meta name="keywords" content="HRMS Chennai, HRMS software Chennai, human resource management Chennai, HR software, payroll software Chennai, attendance management, best HRMS Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/hrms-solutions" />
      </Helmet>

      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative bg-warm-gradient text-secondary-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-15 animate-fade-in">
            <img src={heroHRMS} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-scale-in">
                <Users className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">Human Resource Management System</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Simplify HR Operations with Intelligent HRMS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                From recruitment to retirement, manage your entire employee lifecycle with our comprehensive 
                HRMS platform. Automate payroll, track attendance, and empower your workforce.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-xl hover:scale-105 transition-all duration-300">
                  <NavLink to="/contact">Request Demo</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-8 hover:scale-105 transition-all duration-300">
                  <a href="tel:+917299817996">Call: +91 72998 17996</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Complete HRMS Features</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                      <div className="mb-4 w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-secondary group-hover:rotate-12 transition-transform" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-secondary transition-colors">{feature.title}</CardTitle>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Businesses Choose Our HRMS</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
                        <Icon className="w-10 h-10 text-secondary-foreground" />
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

        {/* Payroll Spotlight */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">Advanced Payroll Management</h2>
                  <p className="text-lg text-muted-foreground">
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
                        <DollarSign className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="border-2 border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Compliance Made Easy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-accent" />
                        Statutory Compliance
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Stay compliant with all Indian labor laws including EPF, ESI, Professional Tax, and more
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-accent" />
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Solutions for Every Company Size</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-secondary text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-secondary" />
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
                <Card className="border-l-4 border-l-accent text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
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
        <section className="py-20 bg-success-gradient text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Transform Your HR Operations Today</h2>
            <p className="text-xl mb-10 text-accent-foreground/90 max-w-3xl mx-auto">
              Join hundreds of businesses in Chennai who have automated their HR processes with our HRMS. 
              Schedule a free demo and see how we can help streamline your HR operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 shadow-xl">
                <NavLink to="/contact">Schedule Free Demo</NavLink>
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

export default HRMSSolutions;
