import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ParallaxSection } from "@/components/ParallaxSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const FAQ = () => {
  return (
    <div className="page-enter min-h-screen bg-background">
      <SEOHead
        page="faq"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is Tally Prime and why do businesses need it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tally Prime is comprehensive business management software for accounting, inventory, GST, payroll and reporting. NnovityWorks provides Tally Prime sales, support and training in Chennai.",
                },
              },
              {
                "@type": "Question",
                name: "Who is the best soft skills trainer in Chennai at NnovityWorks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mr. Samshul Millath is an ACTD & UKIQ certified soft skills trainer and Tally Prime Implementation Expert with 15+ years of experience, leading soft skills and corporate training programs at NnovityWorks in Anna Nagar, Chennai.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer soft skills training for corporates and colleges in Chennai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. NnovityWorks is a soft skills training institute in Chennai offering communication, leadership, personality development, public speaking and PoSH programs for corporates, campuses and individuals.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I buy Tally Prime in Chennai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can buy genuine Tally Prime licenses from NnovityWorks in Anna Nagar, Chennai, with expert installation and ongoing support from Mr. Samshul Millath.",
                },
              },
            ],
          },
        ]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      {/* Hero Section */}
        <section className="bright-mini-hero">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="section-lead mx-auto">
                Answers about Tally Prime, CRM, ERP, HRMS, training programs, pricing, and support.
              </p>
            </div>
          </div>
        </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          {/* Tally Prime Questions */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-display text-foreground">Tally Prime Solutions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="tally-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What is Tally Prime, and why do businesses need it?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Tally Prime is a comprehensive business management software that handles accounting, inventory, 
                  taxation (GST), payroll, and financial reporting. Businesses need Tally Prime to streamline operations, 
                  ensure compliance with Indian tax laws, reduce manual errors, and get real-time insights into 
                  their financial health. It's especially crucial for SMEs looking to scale efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tally-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Which Tally Prime version should I choose - TallyPrime or Tally Prime on Cloud?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  TallyPrime is ideal if you want software installed on your local system with one-time licensing. 
                  Tally Prime on Cloud is perfect for businesses needing remote access, multi-location operations, or 
                  automatic backups. We help you assess your business needs and recommend the best option based on 
                  your team size, locations, and operational requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tally-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  How long does Tally Prime implementation take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Basic Tally Prime setup can be completed in 1-2 days. However, complete implementation including data 
                  migration, customization, and user training typically takes 1-2 weeks depending on your business 
                  complexity and data volume. We provide a detailed timeline after understanding your specific requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tally-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Do you provide Tally Prime training for our staff?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer comprehensive Tally Prime training programs from basic to advanced levels. Training covers 
                  accounting fundamentals, GST compliance, inventory management, payroll processing, and report generation. 
                  We provide both on-site and online training options customized to your team's skill level.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tally-5" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Can you migrate data from my old software to Tally Prime?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! We specialize in data migration from Excel, Busy, Marg, or any other accounting software 
                  to Tally Prime. We ensure all your historical data, ledgers, transactions, and inventory records are 
                  accurately transferred without any loss or corruption. The process is secure and includes validation checks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tally-6" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What Tally Prime support services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide 24/7 technical support, annual maintenance contracts (AMC), remote troubleshooting, 
                  on-site visits, software updates, data backup solutions, and performance optimization. Our support 
                  includes GST filing assistance, report customization, and resolution of any Tally Prime-related issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CRM Questions */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">CRM Solutions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="crm-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What is CRM and how does it benefit my business?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  CRM (Customer Relationship Management) is software that helps you manage all customer interactions, 
                  sales pipelines, marketing campaigns, and service requests in one place. Benefits include improved 
                  customer retention, increased sales conversion, better team collaboration, automated follow-ups, 
                  and data-driven insights for business growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crm-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Which CRM platform do you recommend for small businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We primarily implement Vtiger CRM, which is perfect for small to medium businesses. It's cost-effective, 
                  highly customizable, and includes sales automation, email marketing, inventory management, and project 
                  management modules. We assess your specific needs and configure the right modules for your business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crm-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Can CRM integrate with my existing Tally Prime software?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We specialize in integrating CRM systems with Tally Prime. This integration ensures seamless 
                  data flow between sales (CRM) and accounting (Tally Prime), eliminating duplicate data entry and providing 
                  a complete view of customer transactions, invoicing, and payments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="crm-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  How long does CRM implementation take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  CRM implementation typically takes 2-4 weeks depending on customization requirements. This includes 
                  system setup, data migration, workflow configuration, team training, and testing. We follow a phased 
                  approach to ensure smooth adoption with minimal disruption to your operations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* ERP Questions */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">ERP Solutions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="erp-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What is ERP and how is it different from Tally Prime?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ERP (Enterprise Resource Planning) is a comprehensive system that integrates all business processes 
                  including accounting, manufacturing, supply chain, HR, CRM, and more into one unified platform. 
                  While Tally Prime focuses primarily on accounting and inventory, ERP solutions handle end-to-end business 
                  operations suitable for manufacturing, distribution, and multi-location enterprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="erp-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  When should a business move from Tally Prime to ERP?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Consider upgrading to ERP when your business experiences: multiple locations requiring centralized 
                  control, manufacturing operations needing production planning, complex supply chain requirements, 
                  departmental silos affecting efficiency, or when Tally Prime's capabilities no longer meet your growing 
                  business needs. We provide consultation to assess if ERP is right for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="erp-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Which ERP systems do you implement?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement leading ERP solutions including Biz Analyst ERP, which is specifically designed for 
                  Indian businesses. We also provide consultation on other ERP platforms based on your industry, 
                  business size, and specific requirements. Our team has expertise in manufacturing, retail, and 
                  distribution ERP implementations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="erp-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What's the typical cost and timeline for ERP implementation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  ERP implementation typically takes 2-6 months depending on business complexity, customization needs, 
                  and modules implemented. Costs vary based on user licenses, modules, customization, and training 
                  requirements. We provide detailed project plans and cost estimates after understanding your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* HRMS Questions */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">HRMS Solutions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="hrms-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What is HRMS and what functions does it handle?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  HRMS (Human Resource Management System) automates and manages all HR functions including employee 
                  data management, attendance tracking, leave management, payroll processing, performance appraisals, 
                  recruitment, training management, and compliance reporting. It replaces manual HR processes with 
                  automated workflows, saving time and reducing errors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hrms-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Can HRMS integrate with our Tally Prime payroll?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We can integrate HRMS with Tally Prime to ensure seamless payroll data flow. Attendance, leave, and 
                  salary components from HRMS can be synced with Tally Prime for final payroll processing and accounting. 
                  This eliminates duplicate data entry and ensures accuracy in salary disbursement and accounting records.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hrms-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Which HRMS solution do you recommend for small businesses?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement greytHR and Pagarbook, both excellent for small to medium businesses. greytHR offers 
                  comprehensive HR features with mobile apps for employees. Pagarbook is particularly popular for 
                  its simplicity and compliance features. We help you choose based on your company size, budget, 
                  and specific HR requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hrms-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Does HRMS support biometric and mobile attendance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Modern HRMS solutions integrate with biometric devices and support mobile-based attendance 
                  marking with GPS tracking. Employees can mark attendance, apply for leave, view payslips, and 
                  access HR services through mobile apps. We configure these features during implementation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Training Programs */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Softskills Training Programs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="training-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What softskills training programs do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer comprehensive training in Personality Development, Public Speaking, Business English 
                  Communication, Leadership Skills, Interview Preparation, Entrepreneurship Development, Management 
                  Skills, Sales & Negotiation, and Train-the-Trainer programs. All programs are conducted by 
                  internationally accredited trainer Mr. Samshul Millath (ACTD, UKIQ certified).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Are your training programs available online or only in-person?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer both online and in-person training options to suit your convenience. Online sessions are 
                  conducted via interactive platforms with live demonstrations and practice sessions. In-person training 
                  is available at our Chennai location or at your office premises for corporate batches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Can you provide customized corporate training for our team?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! We design customized corporate training programs based on your organization's specific 
                  needs and challenges. Whether it's leadership development for managers, communication skills for 
                  customer-facing teams, or sales training for your sales force, we create tailored content and 
                  delivery methods to achieve your objectives.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What is the duration and batch size for training programs?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Training duration varies by program - ranging from 2-day intensive workshops to 3-month comprehensive 
                  courses. We maintain small batch sizes (typically 15-20 participants) to ensure personalized attention 
                  and maximum participation. Corporate batches can be customized based on your team size and schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training-5" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Do participants receive certificates after training completion?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, all participants receive certificates of completion from Nnovity Works upon successfully 
                  completing the training program. For specialized programs, we also facilitate internationally 
                  recognized certifications when applicable. Certificates add value to participants' professional profiles.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Pricing & Payment */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Pricing & Payment</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="pricing-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  How is pricing determined for software implementation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Pricing depends on several factors: software licenses required, number of users, customization 
                  complexity, data migration volume, training requirements, and ongoing support needs. We provide 
                  transparent, detailed quotations after understanding your specific requirements. Contact us for 
                  a free consultation and customized pricing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Do you offer Annual Maintenance Contracts (AMC)?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer comprehensive AMC plans covering technical support, software updates, troubleshooting, 
                  data backup, and periodic system health checks. AMC plans ensure your systems run smoothly with 
                  priority support and preventive maintenance. We have flexible AMC packages to suit different 
                  business needs and budgets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What payment options do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept various payment methods including bank transfers, cheques, UPI, and online payments. 
                  For larger implementations, we offer flexible payment terms with milestone-based invoicing. 
                  Software licenses can be purchased annually or as perpetual licenses based on the product and 
                  your preference.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Is there any hidden cost involved in implementation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  No, we believe in complete transparency. Our quotations include all costs for software licenses, 
                  implementation, data migration, training, and initial support. Any additional requirements that 
                  emerge during the project are discussed and approved before proceeding. We ensure you know exactly 
                  what you're paying for with no surprise charges.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Support & Services */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Support & Services</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="support-1" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  What are your support hours and response times?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our support team is available Monday to Saturday, 9:30 AM to 6:30 PM. For AMC customers, we provide 
                  priority support with 24-hour response time for critical issues. We also offer remote support for 
                  quick issue resolution and scheduled on-site visits for complex problems. Emergency support can be 
                  arranged for business-critical situations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support-2" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  How do I contact support when I face an issue?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can reach our support team through multiple channels: phone support at our Chennai office, 
                  WhatsApp support (see the floating WhatsApp button on our website), email support, or through our 
                  support portal. We also provide remote desktop support for quick troubleshooting. Choose the method 
                  most convenient for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support-3" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Do you provide training after software implementation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, comprehensive user training is included in our implementation package. We provide hands-on 
                  training covering all features relevant to different user roles. We also offer refresher training 
                  sessions, video tutorials, and user manuals. Additional advanced training and new employee training 
                  can be arranged as needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support-4" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Can you help with GST compliance and filing?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We provide comprehensive GST support including Tally Prime configuration for GST compliance, 
                  invoice formatting as per GST rules, GSTR-1, GSTR-3B preparation and filing assistance, 
                  e-way bill generation, and GST reconciliation. Our team stays updated with latest GST changes 
                  and ensures your software is always compliant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support-5" className="bg-card rounded-lg px-6 border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  Do you serve clients outside Chennai?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While we're based in Chennai and primarily serve businesses in Tamil Nadu, we do work with clients 
                  across India through our online implementation and remote support services. We can provide online 
                  training, remote implementations, and virtual support regardless of your location. For major 
                  implementations, on-site visits can be arranged.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Still Have Questions Section */}
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-xl p-8 md:p-12 text-center animate-fade-in border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions 
              about our services, pricing, or implementation process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a 
                href="tel:+919841115769" 
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call Now: +91 98411 15769
              </a>
            </div>
          </div>
        </div>
      </section>
      <RelatedServices exclude={["/faq"]} title="Go deeper into our services" />


      <Footer />
    </div>
  );
};

export default FAQ;
