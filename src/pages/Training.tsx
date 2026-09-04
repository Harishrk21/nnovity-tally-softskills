import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import heroTally from "@/assets/hero-tally.jpg";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Clock, Award, CheckCircle2, Laptop, FileText, Calculator, Database, BarChart3, Globe, Mail, Presentation, Table, FileCheck, Target, Zap, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Training = () => {
  const tallyTrainingModules = [
    {
      icon: BookOpen,
      title: "Tally Prime Fundamentals",
      description: "Master the basics of Tally Prime accounting software",
      topics: [
        "Introduction to Tally Prime",
        "Company Creation & Setup",
        "Chart of Accounts",
        "Ledger & Group Creation",
        "Voucher Entry Basics",
        "Day Book & Cash Book"
      ]
    },
    {
      icon: Calculator,
      title: "Accounting & Financial Management",
      description: "Comprehensive accounting principles and practices",
      topics: [
        "Accounts Receivable & Payable",
        "Bank Reconciliation",
        "Financial Statements (P&L, Balance Sheet)",
        "Trial Balance & Final Accounts",
        "Cost Centers & Cost Categories",
        "Budget & Scenario Management"
      ]
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Complete inventory control and stock management",
      topics: [
        "Stock Groups & Items",
        "Stock Categories & Units",
        "Godown/Location Management",
        "Inventory Valuation Methods",
        "Stock Reports & Analysis",
        "Batch & Serial Number Tracking"
      ]
    },
    {
      icon: FileText,
      title: "GST & Tax Compliance",
      description: "GST filing, tax compliance, and statutory reporting",
      topics: [
        "GST Setup & Configuration",
        "GST Invoice Formatting",
        "GSTR-1 Preparation & Filing",
        "GSTR-3B Preparation & Filing",
        "E-Way Bill Generation",
        "TDS & TCS Management",
        "Tax Reports & Compliance"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting & Analysis",
      description: "Advanced reporting, analytics, and business intelligence",
      topics: [
        "Custom Report Creation",
        "Financial Reports & Analysis",
        "Inventory Reports",
        "Sales & Purchase Reports",
        "Exception Reports",
        "ODBC & Export Features"
      ]
    },
    {
      icon: Users,
      title: "Multi-User & Remote Access",
      description: "Collaborative working and remote access setup",
      topics: [
        "Multi-User Configuration",
        "User Access Control",
        "Tally Prime on Cloud",
        "Remote Access Setup",
        "Data Synchronization",
        "Security & Backup"
      ]
    }
  ];

  const msOfficeModules = [
    {
      icon: FileText,
      title: "Microsoft Word",
      description: "Professional document creation and formatting",
      topics: [
        "Document Creation & Formatting",
        "Headers, Footers & Page Setup",
        "Tables, Charts & SmartArt",
        "Mail Merge & Templates",
        "Track Changes & Review",
        "Advanced Formatting Techniques",
        "Document Collaboration"
      ]
    },
    {
      icon: Table,
      title: "Microsoft Excel",
      description: "Advanced spreadsheet and data analysis",
      topics: [
        "Basic to Advanced Formulas",
        "Functions (VLOOKUP, HLOOKUP, INDEX, MATCH)",
        "Pivot Tables & Pivot Charts",
        "Data Validation & Conditional Formatting",
        "Charts & Graphs Creation",
        "Macros & VBA Basics",
        "Data Analysis & What-If Analysis",
        "Power Query & Power Pivot"
      ]
    },
    {
      icon: Presentation,
      title: "Microsoft PowerPoint",
      description: "Creating impactful presentations",
      topics: [
        "Slide Design & Layouts",
        "Animations & Transitions",
        "Master Slides & Templates",
        "Multimedia Integration",
        "Presentation Delivery Techniques",
        "Interactive Presentations",
        "Export & Sharing Options"
      ]
    },
    {
      icon: Mail,
      title: "Microsoft Outlook",
      description: "Email management and productivity",
      topics: [
        "Email Setup & Configuration",
        "Email Organization & Folders",
        "Calendar Management",
        "Contacts & Address Book",
        "Tasks & Notes",
        "Rules & Automation",
        "Meeting Scheduling"
      ]
    },
    {
      icon: FileCheck,
      title: "Microsoft Access (Optional)",
      description: "Database creation and management",
      topics: [
        "Database Design Basics",
        "Tables & Relationships",
        "Queries & Forms",
        "Reports Creation",
        "Basic Database Management"
      ]
    }
  ];

  const trainingFeatures = [
    {
      icon: Users,
      title: "Individual & Corporate Training",
      description: "Personalized training for individuals or customized programs for corporate teams"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose from weekday, weekend, or evening batches to suit your convenience"
    },
    {
      icon: Laptop,
      title: "Hands-on Practice",
      description: "Practical sessions with real-world examples and live projects"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive completion certificates recognized by industry"
    },
    {
      icon: Target,
      title: "Job-Oriented Curriculum",
      description: "Industry-relevant training designed to enhance employability"
    },
    {
      icon: Zap,
      title: "Expert Trainers",
      description: "Learn from experienced professionals with 15+ years of expertise"
    }
  ];

  return (
    <>
      <SEOHead
        page="training"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          SEO_CONFIG.structuredData.person,
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Tally Prime & MS Office Training Chennai",
            description: "Hands-on Tally Prime and MS Office training in Chennai by Mr. Samshul Millath",
            provider: { "@type": "Organization", name: "NnovityWorks", url: "https://nnovityworks.com" },
            instructor: { "@type": "Person", name: "Mr. Samshul Millath" },
          },
        ]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Training", url: "/training" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Training Programs"
          title={<>Tally & MS-Office <span className="text-accent-italic">Training</span></>}
          description="Hands-on accounting and office productivity training for professionals, students, and corporate teams."
          image={heroTally}
          imageAlt="Tally and MS Office training"
          primaryCta={{ label: "Join a Batch", to: "/contact" }}
          secondaryCta={{ label: "Soft Skills", to: "/softskills-training" }}
          badge="Practical Skill Building"
          stats={[{ value: "Hands-on", label: "Sessions" }, { value: "Corporate", label: "Ready" }, { value: "Campus", label: "Friendly" }]}
        />

        {/* Training Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-display text-foreground">
                Why Choose Our Training Programs?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Comprehensive, practical, and job-oriented training designed to enhance your skills and career prospects
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {trainingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tally Prime Training */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-display text-foreground">
                Tally Prime Training Program
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training covering all aspects of Tally Prime accounting software, from fundamentals to advanced features. Perfect for accounting professionals, students, and business owners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
              {tallyTrainingModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        {module.topics.map((topic, tIndex) => (
                          <li key={tIndex} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Training Duration & Format</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">Duration:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic Course: 30-40 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Advanced Course: 40-50 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete Course: 70-90 hours</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-900">Training Modes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Classroom Training (On-site)</span>
                    </li>
                    <li className="flex items-start">
                      <Laptop className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Online Training (Live Sessions)</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Corporate Training (Customized)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MS Office Training */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-display text-foreground">
                MS Office Training Program
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Master Microsoft Office suite including Word, Excel, PowerPoint, and Outlook. Essential skills for office professionals, job seekers, and students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
              {msOfficeModules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-indigo-500">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        {module.topics.map((topic, tIndex) => (
                          <li key={tIndex} className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-indigo-200">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-slate-900">Training Duration & Format</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-indigo-900">Duration:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MS Word: 8-10 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MS Excel: 15-20 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MS PowerPoint: 8-10 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>MS Outlook: 4-6 hours</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Complete Package: 35-46 hours</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-indigo-900">Training Modes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Classroom Training (On-site)</span>
                    </li>
                    <li className="flex items-start">
                      <Laptop className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Online Training (Live Sessions)</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Corporate Training (Customized)</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Job-Oriented Training for Job Seekers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center font-display text-foreground">
                Who Should Attend?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Tally Prime Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Accounting Professionals & Accountants</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Commerce & Accounting Students</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Business Owners & Entrepreneurs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Finance & Accounts Teams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Job Seekers in Accounting Field</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-indigo-500">
                  <CardHeader>
                    <CardTitle className="text-lg">MS Office Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Office Professionals & Executives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Job Seekers & Freshers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Students & Graduates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Corporate Teams & Departments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Anyone looking to enhance office skills</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white">
                Ready to Enhance Your Skills?
              </h2>
              <p className="text-sm md:text-base text-white/90 mb-8">
                Join our comprehensive training programs and take your career to the next level. Expert training by Mr. Samshul Millath with 15+ years of experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 bg-white text-slate-900 hover:bg-gray-100 shadow-2xl hover:scale-105 transition-all duration-300 font-bold">
                  <NavLink to="/contact">Enroll Now</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-6 md:px-8 py-4 md:py-5 border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-bold">
                  <a href="tel:+919841115769">Call: +91 98411 15769</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/training"]} title="Tally sales, support & soft skills" />


      <Footer />
    </>
  );
};

export default Training;

