import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { StatRow } from "@/components/BrightUI";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Cloud,
  GraduationCap,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import teamSuccess from "@/assets/team-success.jpg";
import bizanalystLogo from "@/assets/partners/bizanalyst-logo.jpg";
import greytLogo from "@/assets/partners/greyt-logo.jpg";
import vtigerLogo from "@/assets/partners/vtiger-logo.jpg";
import pagarbookLogo from "@/assets/partners/pagarbook-logo.jpg";
import wondersoftLogo from "@/assets/partners/wondersoft.png";
import tallyPrimeLogo from "@/assets/partners/tally_prime.png";
import busyLogo from "@/assets/partners/busy.png";

const programs = [
  { num: "01", title: "Tally Prime Sales & Licensing", description: "Genuine licenses with version guidance and fast onboarding.", link: "/tally-sales", icon: Briefcase },
  { num: "02", title: "Tally Support & AMC", description: "Installation, troubleshooting, AMC, online and onsite support.", link: "/tally-support", icon: Settings },
  { num: "03", title: "Tally on Cloud", description: "Access TallyPrime securely from anywhere, anytime.", link: "/tally-support", icon: Cloud },
  { num: "04", title: "Tally Mobile App", description: "Track business performance on the go.", link: "/tally-support", icon: Smartphone },
  { num: "05", title: "Customization Services", description: "Reports, workflows, and API-based data porting.", link: "/tally-support", icon: Sparkles },
  { num: "06", title: "Tally & MS-Office Training", description: "Hands-on training for teams, students, and professionals.", link: "/training", icon: GraduationCap },
  { num: "07", title: "Soft Skills Training", description: "Communication, leadership, PMA, PoSH, and workplace skills.", link: "/softskills-training", icon: Users },
  { num: "08", title: "Corporate Training", description: "Custom workshops for performance and professional growth.", link: "/softskills-training", icon: Briefcase },
  { num: "09", title: "CRM Solutions", description: "Customer relationship systems that convert and retain.", link: "/crm-solutions", icon: Target },
  { num: "10", title: "ERP Solutions", description: "Unified operations across finance, inventory, and more.", link: "/erp-solutions", icon: Settings },
  { num: "11", title: "HRMS Solutions", description: "Payroll, attendance, and people operations in one place.", link: "/hrms-solutions", icon: Users },
  { num: "12", title: "POS Billing", description: "Fast retail billing for stores and supermarket counters.", link: "/pos-billing-solutions", icon: Zap },
];

const methodSteps = [
  { step: "01", title: "Assess", description: "Understand your systems, people, and business goals." },
  { step: "02", title: "Design", description: "Recommend the right software and training path." },
  { step: "03", title: "Deliver", description: "Implement, configure, and train your teams hands-on." },
  { step: "04", title: "Measure", description: "Track adoption, accuracy, and operational clarity." },
  { step: "05", title: "Sustain", description: "Ongoing support, AMC, and capability reinforcement." },
];

const whyUs = [
  { icon: Shield, title: "Trusted Tally Expertise", description: "Genuine licenses with expert implementation support." },
  { icon: Award, title: "15+ Years Experience", description: "Accounting automation and people development depth." },
  { icon: Target, title: "Structured Frameworks", description: "Clear process for software and training delivery." },
  { icon: Zap, title: "Practical Solutions", description: "Built for real business environments, not theory." },
  { icon: Users, title: "Personal Guidance", description: "One-to-one support tailored to your needs." },
  { icon: CheckCircle2, title: "Reliable Service", description: "Consistent support you can count on." },
];

const Index = () => {
  const partners = [
    { logo: tallyPrimeLogo, name: "Tally Prime" },
    { logo: busyLogo, name: "Busy" },
    { logo: bizanalystLogo, name: "Biz Analyst" },
    { logo: greytLogo, name: "Greyt" },
    { logo: vtigerLogo, name: "Vtiger" },
    { logo: pagarbookLogo, name: "Pagarbook" },
    { logo: wondersoftLogo, name: "Wondersoft" },
  ];

  return (
    <>
      <SEOHead
        page="home"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          SEO_CONFIG.structuredData.person,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NnovityWorks",
            url: "https://nnovityworks.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://nnovityworks.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />

      <BreadcrumbSchema items={[{ name: "Home", url: "/" }]} />
      <Navigation />

      <main className="page-enter">
        {/* Hero */}
        <section className="relative overflow-hidden pb-8 pt-28 md:pb-12 md:pt-32 lg:pt-36">
          <div className="container relative z-10 mx-auto px-4">
            <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
              <ScrollReveal direction="left" delay={0} className="order-1">
              <div className="space-y-5 text-center sm:space-y-6 lg:text-left">
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                  Best Tally Prime Provider · Soft Skills Training Institute · Chennai
                </p>
                <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                  Best Tally Prime & Soft Skills Training in{" "}
                  <span className="text-accent-italic">Chennai</span>
                </h1>
                <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
                  NnovityWorks is a trusted Tally Prime service provider and soft skills training institute in Chennai — led by Mr. Samshul Millath, ACTD & UKIQ certified trainer with 15+ years of expertise.
                </p>
                {/* Desktop / laptop CTAs stay with the copy */}
                <div className="hidden flex-row flex-wrap justify-start gap-3 pt-1 lg:flex">
                  <Button asChild size="lg" className="rounded-full bg-hero-gradient px-6 text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:opacity-95">
                    <NavLink to="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-card px-6 transition-all duration-300 hover:scale-[1.03] hover:bg-muted">
                    <NavLink to="/tally-sales">Buy Tally Prime</NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-card px-6 transition-all duration-300 hover:scale-[1.03] hover:bg-muted">
                    <NavLink to="/softskills-training">Soft Skills Training</NavLink>
                  </Button>
                </div>
              </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={120} className="order-2">
              <div className="relative mx-auto w-full max-w-sm overflow-hidden px-1 sm:max-w-md lg:max-w-[400px] lg:justify-self-end">
                <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl transition-transform duration-700 hover:scale-[1.01] sm:rounded-[2rem]">
                  <img
                    src="/millath.png"
                    alt="Mr. Samshul Millath - Best soft skills trainer and Tally Prime expert in Chennai"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                </div>
              </div>
              </ScrollReveal>

              {/* Mobile / tablet CTAs after the portrait */}
              <ScrollReveal direction="up" delay={160} className="order-3 lg:hidden">
                <div className="flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:flex-wrap sm:justify-center">
                  <Button asChild size="lg" className="w-full rounded-full bg-hero-gradient px-6 text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:opacity-95 sm:w-auto">
                    <NavLink to="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full rounded-full border-border bg-card px-6 transition-all duration-300 hover:scale-[1.03] hover:bg-muted sm:w-auto">
                    <NavLink to="/tally-sales">Buy Tally Prime</NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full rounded-full border-border bg-card px-6 transition-all duration-300 hover:scale-[1.03] hover:bg-muted sm:w-auto">
                    <NavLink to="/softskills-training">Soft Skills Training</NavLink>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={200}>
            <div className="mt-16 border-t border-border/70 pt-10 md:mt-20">
              <StatRow
                items={[
                  { value: "500+", label: "Happy Clients" },
                  { value: "10K+", label: "Training Hours" },
                  { value: "15+", label: "Years Experience" },
                  { value: "12+", label: "Solution Programs" },
                ]}
              />
            </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Trusted by / partners */}
        <section className="overflow-hidden border-y border-border/60 bg-card/60 py-10">
          <div className="container mx-auto px-4">
            <p className="mb-6 text-center text-sm text-muted-foreground">Trusted by businesses and teams across Chennai</p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background/90 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background/90 to-transparent sm:w-20" />
            <div className="partners-marquee flex w-max items-center gap-10 sm:gap-14">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex h-20 w-28 flex-shrink-0 items-center justify-center sm:h-24 sm:w-36"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 w-auto max-w-full object-contain opacity-80 sm:max-h-16"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we help */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <ScrollReveal direction="left">
              <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
                <img src={teamSuccess} alt="NnovityWorks team empowering Chennai businesses" className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[520px]" />
                <div className="absolute bottom-6 right-6 max-w-[240px] rounded-2xl bg-foreground p-5 text-background shadow-xl">
                  <div className="font-display text-3xl font-semibold text-primary">15+</div>
                  <p className="mt-1 text-sm text-background/80">Years crafting practical business & people solutions.</p>
                </div>
              </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100}>
              <div>
                <p className="section-eyebrow">— How We Help —</p>
                <h2 className="section-title">A practical studio for modern businesses.</h2>
                <p className="section-lead">
                  We partner with owners, finance teams, and HR leaders to implement the right systems and develop the people who run them.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: "People-first design", desc: "Training built around real workplace behaviour." },
                    { title: "Practitioner expertise", desc: "15+ years in accounting automation & facilitation." },
                    { title: "Measured outcomes", desc: "Clear adoption and performance goals." },
                    { title: "Truly customised", desc: "Content and setup shaped to your maturity." },
                  ].map((item) => (
                    <div key={item.title} className="hover-lift rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="section-eyebrow">Solutions & Programs</p>
                <h2 className="section-title">From Tally systems to leadership skills.</h2>
                <p className="section-lead">A complete studio of solutions for operations and people performance.</p>
              </div>
              <Button asChild className="rounded-full">
                <NavLink to="/contact">Request a consultation</NavLink>
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {programs.map((program) => {
                const Icon = program.icon;
                return (
                  <NavLink
                    key={program.num}
                    to={program.link}
                    className="group hover-lift rounded-[1.5rem] border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-sm text-primary">{program.num}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{program.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dual solutions */}
        <section className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-border bg-background p-8 md:p-10">
                <p className="section-eyebrow">Tally & Business Systems</p>
                <h3 className="font-display text-3xl font-semibold">Systems that keep operations clear.</h3>
                <p className="mt-4 text-muted-foreground">
                  From licensing and cloud access to CRM, HRMS, and POS — we help you choose, implement, and support the right stack.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Tally sales, AMC & customization</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cloud & mobile access</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> CRM / ERP / HRMS / POS</li>
                </ul>
                <Button asChild className="mt-8 rounded-full">
                  <NavLink to="/tally-sales">Design a system</NavLink>
                </Button>
              </div>
              <div className="rounded-[2rem] bg-foreground p-8 text-background md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Soft Skills & Corporate Training</p>
                <h3 className="mt-3 font-display text-3xl font-semibold">People who communicate and lead better.</h3>
                <p className="mt-4 text-background/70">
                  Communication, leadership, personality development, PoSH, and placement-ready workshops for campuses and corporates.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-background/75">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Corporate soft skills programs</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> PoSH & workplace behaviour</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Campus & professional training</li>
                </ul>
                <Button asChild className="mt-8 rounded-full bg-primary hover:bg-primary/90">
                  <NavLink to="/softskills-training">Partner with us</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="section-eyebrow">Why NnovityWorks</p>
              <h2 className="section-title">Not another software vendor.</h2>
              <p className="section-lead mx-auto">
                We think like a consulting partner, deliver like a training studio, and support like a long-term technology ally.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-display text-sm text-primary">0{index + 1}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="section-eyebrow">Our Method</p>
              <h2 className="section-title">A five-part rhythm behind every engagement.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {methodSteps.map((step) => (
                <div key={step.step} className="rounded-[1.5rem] border border-border bg-background p-5 text-center">
                  <div className="font-display text-2xl font-semibold text-primary">{step.step}</div>
                  <h3 className="mt-3 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="section-eyebrow">Testimonials</p>
              <h2 className="section-title">Words from the teams we work with.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  text: "NnovityWorks helped streamline our accounting with Tally Prime and trained our staff with clarity.",
                  author: "Satisfied Client",
                  role: "Business Owner",
                },
                {
                  text: "Professional training that improved team communication and productivity.",
                  author: "Corporate Client",
                  role: "HR Manager",
                },
                {
                  text: "Reliable support and excellent service.",
                  author: "Business Owner",
                  role: "CEO",
                },
              ].map((t) => (
                <div key={t.author + t.role} className="rounded-[1.5rem] border border-border bg-card p-7 shadow-sm">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-display text-lg italic leading-relaxed text-foreground">"{t.text}"</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="bg-card py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">Frequently asked.</h2>
              <p className="section-lead mx-auto">Need clarity on Tally licensing, training formats, or PoSH programs?</p>
              <Button asChild className="mt-8 rounded-full" variant="outline">
                <NavLink to="/faq">
                  View all FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* SEO interlinks */}
        <section className="border-y border-border bg-card py-14 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-eyebrow">Why Chennai chooses NnovityWorks</p>
              <h2 className="section-title text-2xl sm:text-3xl">
                Tally Prime solutions & the best soft skills training institute in Chennai
              </h2>
              <p className="section-lead mx-auto">
                From{" "}
                <NavLink to="/tally-sales" className="font-medium text-primary underline-offset-4 hover:underline">
                  buying genuine Tally Prime
                </NavLink>{" "}
                and{" "}
                <NavLink to="/tally-support" className="font-medium text-primary underline-offset-4 hover:underline">
                  AMC support
                </NavLink>{" "}
                to{" "}
                <NavLink to="/training" className="font-medium text-primary underline-offset-4 hover:underline">
                  hands-on Tally training
                </NavLink>{" "}
                and{" "}
                <NavLink to="/softskills-training" className="font-medium text-primary underline-offset-4 hover:underline">
                  corporate soft skills programs
                </NavLink>
                , we help businesses and learners grow with clarity. Meet{" "}
                <NavLink to="/about" className="font-medium text-primary underline-offset-4 hover:underline">
                  Mr. Samshul Millath
                </NavLink>
                {" "}— one of Chennai&apos;s trusted soft skills trainers — or{" "}
                <NavLink to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                  book a free consultation
                </NavLink>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA + Contact form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 rounded-[2rem] bg-foreground px-8 py-12 text-center text-background md:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ready when you are</p>
              <h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">Your next step starts here.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-background/70">
                Book a consultation with NnovityWorks and walk away with a clear path for systems, training, or both.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                  <NavLink to="/contact">Book Consultation</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-background hover:bg-white/10">
                  <NavLink to="/softskills-training">Explore Soft Skills</NavLink>
                </Button>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-eyebrow">Contact</p>
                <h2 className="section-title">Talk to Chennai&apos;s Tally & soft skills expert.</h2>
                <p className="section-lead">
                  Share a little about your team and goals. We&apos;ll respond within one business day.
                </p>
                <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <p>smillath@nnovityworks.com</p>
                  <p>+91 98411 15769</p>
                  <p>Anna Nagar East, Chennai</p>
                </div>
              </div>
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-md md:p-8">
                <ContactForm
                  subject="New Home Page Enquiry from NnovityWorks Website"
                  compact
                />
              </div>
            </div>
          </div>
        </section>

        <RelatedServices exclude={["/"]} title="Popular services & training pages" />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
