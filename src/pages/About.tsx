import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Heart, TrendingUp, Briefcase, Settings, Cloud, Smartphone, Sparkles, GraduationCap, Users, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we deliver, maintaining the highest standards of quality and professionalism.",
    },
    {
      icon: Target,
      title: "Client Success",
      description: "Your success is our priority. We're committed to delivering solutions that drive real business results.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business relationships.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We believe in constant learning and improvement, staying ahead of industry trends and innovations.",
    },
  ];

  return (
    <>
      <SEOHead
        page="about"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          SEO_CONFIG.structuredData.person,
        ]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]} />
      <Navigation />

      <main className="page-enter">
        {/* Hero Section */}
        <section className="bright-mini-hero">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                About Mr. Samshul Millath & NnovityWorks
              </h1>
              <p className="section-lead mx-auto">
                Meet Chennai&apos;s trusted Tally Prime expert and soft skills trainer — building systems and people since 15+ years.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-center font-display text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 animate-fade-in">
                <p>
                  At NnovityWorks, we blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
                </p>
                <p>
                  We specialize in <strong>Tally Prime Software Sales & Support</strong> and <strong>Soft Skills Training</strong>, offering practical solutions that improve both operational performance and human capability.
                </p>
                <p>
                  Under the leadership of <strong>Mr. Samshul Millath</strong> — ACTD & UKIQ certified soft skills trainer and Tally Prime Implementation Expert with 15+ years of experience — we&apos;ve become a trusted{" "}
                  <NavLink to="/softskills-training" className="font-medium text-primary underline-offset-4 hover:underline">
                    soft skills training institute in Chennai
                  </NavLink>{" "}
                  and a reliable partner for{" "}
                  <NavLink to="/tally-sales" className="font-medium text-primary underline-offset-4 hover:underline">
                    Tally Prime sales
                  </NavLink>
                  ,{" "}
                  <NavLink to="/tally-support" className="font-medium text-primary underline-offset-4 hover:underline">
                    support
                  </NavLink>
                  , and{" "}
                  <NavLink to="/training" className="font-medium text-primary underline-offset-4 hover:underline">
                    training
                  </NavLink>
                  .
                </p>
                <p>
                  Our mission is to empower people and businesses with the right skills and systems to perform at their best. We've trained 1000+ young minds for Tally Prime Accounting & Soft Skills from prestigious Educational institutions and through CSR & NGO Activities.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6 not-prose">
                  <div className="text-center p-6 bg-primary/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Training Hours Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-primary/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Samshul Millath */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 font-display text-foreground">About the Founder</h2>
              <Card className="border-secondary/30 shadow-xl overflow-hidden animate-fade-in">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Column */}
                    <div className="relative min-h-[320px] overflow-hidden md:col-span-2 md:min-h-0">
                      <img
                        src="/millath.png"
                        alt="Mr. Samshul Millath - Tally Prime Implementation & Training Expert"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                    
                    {/* Content Column */}
                    <div className="md:col-span-3 p-8 md:p-10 space-y-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Mr. Samshul Millath</h3>
                        <p className="text-sm md:text-base text-primary mb-3 font-semibold">Tally Prime Implementation & Training Expert (Tally Prime & SoftSkills)</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            15+ Years Experience
                          </span>
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                            Accounting & Business Automation
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          <strong>15+ Years</strong> of highly experienced in Accounting & Business Automation Support.
                        </p>
                        <p>
                          Performing <strong>TallyPrime Sales - Service - Training & Implementation</strong> projects.
                        </p>
                        <p>
                          Providing <strong>Simple & Systematic solutions</strong> for Accounting needs beyond boundaries.
                        </p>
                        <p>
                          Training <strong>1000+ Young minds</strong> for Tally Prime Accounting & Soft Skills from prestigious Educational institutions and <strong>CSR & NGO Activities</strong>.
                        </p>
                        <p>
                          Mr. Samshul Millath is the driving force behind NnovityWorks' success in both technical and training domains. 
                          His expertise spans across Tally Prime implementation, customization, cloud solutions, and comprehensive soft skills training.
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <Button asChild className="bg-warm-gradient hover:opacity-90 shadow-lg transition-all duration-300">
                          <NavLink to="/softskills-training">Explore Training Programs</NavLink>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12 font-display text-foreground">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-base md:text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-full mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Sparkles className="w-6 h-6" />
                <span className="text-base font-bold">Our Services</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 font-display text-foreground leading-tight">
                What We Offer
              </h2>
              <p className="text-sm md:text-base text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions for your business and professional development needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
              {[
                {
                  icon: Briefcase,
                  title: "Tally Prime Software Sales & Licensing",
                  description: "Official Tally Prime licenses with version recommendations based on business needs. Fast onboarding and setup.",
                  features: ["Official Tally Prime licenses", "Version recommendations", "Fast onboarding and setup"],
                  gradient: "from-blue-600 via-blue-500 to-cyan-500",
                  link: "/tally-sales"
                },
                {
                  icon: Settings,
                  title: "Tally Prime Support & AMC",
                  description: "Installation & Implementation, Troubleshooting & error fixing, Annual maintenance and priority support.",
                  features: ["Installation & Implementation", "Troubleshooting & error fixing", "Annual maintenance", "Online & Onsite support"],
                  gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
                  link: "/tally-support"
                },
                {
                  icon: Cloud,
                  title: "Tally Prime on Cloud & Mobile",
                  description: "Cloud access services for TallyPrime from anywhere. Track your business anytime, anywhere.",
                  features: ["Cloud access services", "Tally Prime on Mobile", "Access from anywhere"],
                  gradient: "from-cyan-600 via-teal-500 to-emerald-500",
                  link: "/tally-support"
                },
                {
                  icon: Sparkles,
                  title: "Tally Prime Customization",
                  description: "Addressing specific business requirements for reporting and ease of data posting through Customization.",
                  features: ["Custom reporting", "Data posting solutions", "Cross Platform API Integration"],
                  gradient: "from-pink-600 via-rose-500 to-red-500",
                  link: "/tally-support"
                },
                {
                  icon: GraduationCap,
                  title: "Tally Prime & MS-Office Training",
                  description: "Training for individuals, students, and professionals. Corporate Tally Prime training for accounting teams.",
                  features: ["Individual & Corporate Training", "MS-Office Training", "Practical hands-on sessions"],
                  gradient: "from-indigo-600 via-blue-500 to-sky-500",
                  link: "/training"
                },
                {
                  icon: Users,
                  title: "Soft Skills Training",
                  description: "Communication skills, Positive Mental Attitude, Personality Development, Public Speaking, and more.",
                  features: ["Communication skills", "Personality Development", "Leadership & teamwork", "PoSH Training"],
                  gradient: "from-emerald-600 via-green-500 to-lime-500",
                  link: "/softskills-training"
                },
                {
                  icon: Target,
                  title: "Corporate Training Programs",
                  description: "Customized workshops focused on performance, communication and professional development.",
                  features: ["Customized workshops", "Performance focused", "Professional development"],
                  gradient: "from-purple-600 via-violet-500 to-indigo-500",
                  link: "/softskills-training"
                }
              ].map((service, index) => {
                const Icon = service.icon;
                
                return (
                  <Card key={index} className="group hover-lift border-0 shadow-xl hover:shadow-2xl bg-card overflow-hidden" style={{animationDelay: `${index * 0.05}s`}}>
                    <NavLink to={service.link} className="block h-full">
                      {/* Gradient Top Bar */}
                      <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                      
                      <CardHeader className="space-y-4 pb-4">
                        {/* Icon with Gradient Background */}
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        </div>
                        
                        <CardTitle className="text-base md:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base text-slate-600 leading-relaxed">
                          {service.description}
                        </CardDescription>
                        
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, fIndex) => (
                            <li key={fIndex} className="flex items-start text-sm text-slate-600">
                              <Check className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className={`flex items-center font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300 pt-2`}>
                          Learn More 
                          <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
                        </div>
                      </CardContent>
                    </NavLink>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Get in touch with NnovityWorks today. We blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">
                  Get in Touch 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300 font-bold">
                <a href="tel:+919841115769">Call: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/about"]} title="Explore our Tally & soft skills services" />


      <Footer />
    </>
  );
};

export default About;
