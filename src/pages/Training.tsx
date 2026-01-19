import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
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
      <Helmet>
        <title>Tally Prime & MS Office Training Chennai - Professional Training Programs | NnovityWorks</title>
        <meta name="description" content="Best Tally Prime & MS Office training in Chennai, Anna Nagar. Individual & corporate programs by Mr. Samshul Millath. Hands-on sessions, certification & job-oriented curriculum. Tally training Chennai." />
        <meta name="description" content="Best Tally Prime  MS Office training in Chennai, Anna Nagar. Individual  corporate programs by Mr. Samshul Millath. Hands-on sessions, certification  job-oriented curriculum. Tally training Chennai." />
        <meta name="keywords" content="Tally Prime training Chennai, Tally Prime training Anna Nagar, MS Office training Chennai, Excel training Chennai, corporate training Chennai, Tally Prime certification Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/training" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/training" />
        <meta property="og:title" content="Tally Prime & MS Office Training Chennai - NnovityWorks" />
        <meta property="og:description" content="Professional Tally Prime and MS Office training programs in Chennai. Expert training by Mr. Samshul Millath." />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Tally Prime & MS Office Training Chennai" />
        <meta name="twitter:description" content="Comprehensive training programs for Tally Prime and MS Office in Chennai" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Tally Prime & MS Office Training",
            "description": "Comprehensive training programs for Tally Prime accounting software and Microsoft Office suite",
            "provider": {
              "@type": "Organization",
              "name": "NnovityWorks",
              "url": "https://nnovityworks.com"
            },
            "instructor": {
              "@type": "Person",
              "name": "Mr. Samshul Millath",
              "jobTitle": "Tally Prime Implementation & Training Expert"
            },
            "courseCode": "TP-MSO-TRAINING",
            "educationalLevel": "Professional",
            "teaches": [
              "Tally Prime",
              "Microsoft Word",
              "Microsoft Excel",
              "Microsoft PowerPoint",
              "Microsoft Outlook",
              "Accounting Software",
              "Office Productivity"
            ]
          })}
        </script>
      </Helmet>


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Training", url: "/training" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85"></div>
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
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 mx-auto">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Tally Prime & MS Office Training
              </h1>
              <p className="text-sm md:text-base text-white/95 font-medium mb-6">
                Professional training programs for individuals, students, and corporate teams. Master Tally Prime accounting software and Microsoft Office suite with hands-on practical sessions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                  <NavLink to="/contact">Enroll Now</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                  <a href="tel:+919841115769">Call: +91 98411 15769</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
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

      <Footer />
    </>
  );
};

export default Training;

