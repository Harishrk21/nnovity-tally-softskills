import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, GraduationCap, Settings, TrendingUp, Sparkles, Phone, Target } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroTally from "@/assets/hero-tally.jpg";
import heroSoftskills from "@/assets/hero-softskills.jpg";
import teamSuccess from "@/assets/team-success.jpg";
import tallyLogo from "@/assets/partners/tally-logo.jpg";
import awsLogo from "@/assets/partners/aws-logo.jpg";
import bizanalystLogo from "@/assets/partners/bizanalyst-logo.jpg";
import greytLogo from "@/assets/partners/greyt-logo.jpg";
import vtigerLogo from "@/assets/partners/vtiger-logo.jpg";
import pagarbookLogo from "@/assets/partners/pagarbook-logo.jpg";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const allServices = [
    {
      icon: Briefcase,
      title: "Tally Solutions",
      description: "Complete Tally ERP sales, support, and implementation",
      link: "/tally-sales",
      color: "primary"
    },
    {
      icon: Users,
      title: "CRM Solutions",
      description: "Customer Relationship Management systems",
      link: "/crm-solutions",
      color: "primary"
    },
    {
      icon: Settings,
      title: "ERP Solutions",
      description: "Enterprise Resource Planning systems",
      link: "/erp-solutions",
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "HRMS Solutions",
      description: "Human Resource Management systems",
      link: "/hrms-solutions",
      color: "secondary"
    },
    {
      icon: GraduationCap,
      title: "Softskills Training",
      description: "Professional development and corporate training",
      link: "/softskills-training",
      color: "secondary"
    },
  ];

  return (
    <>
      <Helmet>
        <title>Nnovity Works - Best Tally Provider & Softskills Trainer in Chennai</title>
        <meta name="description" content="Nnovity Works is Chennai's premier provider of Tally ERP solutions and professional softskills training. Led by Mr. Millath (ACTD & UKIQ accredited), we offer Tally sales, support, customization, cloud solutions, and world-class softskills training for corporate, schools, and individuals." />
        <meta name="keywords" content="Nnovity Works, Tally Chennai, best Tally provider Chennai, top Tally support Chennai, Tally sales Chennai, softskills training Chennai, best softskills trainer Chennai, Mr. Millath, ACTD trainer, UKIQ trainer, corporate training Chennai, personality development, leadership training Chennai" />
        <link rel="canonical" href="https://nnovityworks.com" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-hero-gradient text-primary-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] animate-pulse" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Business & Skills with Nnovity Works
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                Chennai's trusted partner for <strong>Tally ERP solutions</strong> and 
                <strong> professional softskills training</strong> by internationally accredited trainer <strong>Mr. Millath</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="cta" className="text-lg px-8 shadow-2xl">
                  <NavLink to="/contact">Get Started</NavLink>
                </Button>
                <Button asChild size="lg" variant="call" className="text-lg px-8 shadow-2xl">
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 987 654 3210
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Complete Business Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Business & People</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From software solutions to skills development, we provide everything you need to grow and succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                const colorClass = service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' 
                  : service.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20'
                  : 'bg-accent/10 group-hover:bg-accent/20';
                const iconColor = service.color === 'primary' ? 'text-primary' 
                  : service.color === 'secondary' ? 'text-secondary'
                  : 'text-accent';
                
                return (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <NavLink to={service.link} className="block">
                      <CardHeader>
                        <div className={`mb-4 w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center transition-all duration-300`}>
                          <Icon className={`w-8 h-8 ${iconColor}`} />
                        </div>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                        <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </CardContent>
                    </NavLink>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Image Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                  <img src={teamSuccess} alt="Team Success" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-4xl font-bold">Empowering Chennai Businesses Since Inception</h2>
                  <p className="text-lg text-muted-foreground">
                    We've helped hundreds of organizations streamline their operations with cutting-edge software 
                    and develop their workforce through world-class training programs.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="text-center p-6 bg-background rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="text-4xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 bg-background rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Training Hours</div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-hero-gradient hover:opacity-90 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <NavLink to="/about">Our Story <ArrowRight className="ml-2" /></NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Transform Your Business</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our proven 4-step process ensures successful implementation and lasting results
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { 
                    step: "01", 
                    title: "Consultation", 
                    description: "We understand your unique business needs and challenges",
                    icon: Target
                  },
                  { 
                    step: "02", 
                    title: "Solution Design", 
                    description: "Tailored software and training solutions designed for you",
                    icon: Sparkles
                  },
                  { 
                    step: "03", 
                    title: "Implementation", 
                    description: "Expert setup, configuration, and hands-on training",
                    icon: Settings
                  },
                  { 
                    step: "04", 
                    title: "Ongoing Support", 
                    description: "Continuous assistance to ensure your success",
                    icon: CheckCircle2
                  },
                ].map((phase, index) => {
                  const Icon = phase.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader>
                        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-5xl font-bold text-primary/20 mb-2">{phase.step}</div>
                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{phase.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Channel Partners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Our Trusted Partners</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We collaborate with industry-leading brands to deliver exceptional solutions
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {[
                    { logo: tallyLogo, name: "Tally" },
                    { logo: awsLogo, name: "AWS" },
                    { logo: bizanalystLogo, name: "Biz Analyst" },
                    { logo: greytLogo, name: "Greyt" },
                    { logo: vtigerLogo, name: "Vtiger" },
                    { logo: pagarbookLogo, name: "Pagarbook" },
                  ].map((partner, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-4">
                        <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                          <CardContent className="flex aspect-video items-center justify-center p-6 bg-white">
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} logo`} 
                              className="max-h-20 max-w-full object-contain transition-transform duration-300 hover:scale-110"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Why Choose Nnovity Works?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>International Accreditation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    ACTD & UKIQ certified trainer with proven expertise in professional development and business solutions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 hover:bg-secondary/20">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>Chennai's Trusted Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Local presence with deep understanding of Chennai business needs and training requirements
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center transition-all duration-300 hover:bg-accent/20">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Complete Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    From software implementation to skills development - everything you need under one roof
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Mr. Millath */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Meet Mr. Millath</h2>
                <p className="text-xl text-muted-foreground">
                  Internationally Accredited Softskills Trainer & Founder
                </p>
              </div>
              <Card className="border-secondary/30">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-16 h-16 text-secondary" />
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">ACTD Accredited</span>
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">UKIQ Certified</span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Mr. Millath is an internationally accredited softskills trainer with certifications from 
                          ACTD (Accredited Corporate Trainer & Developer) and UKIQ (UK Institute of Quality). 
                          With years of experience training professionals, students, and corporate teams, he has 
                          established himself as one of Chennai's most sought-after trainers.
                        </p>
                        <p className="text-muted-foreground">
                          His training methodology combines practical exercises, real-world scenarios, and engaging 
                          delivery to ensure participants not only learn but also apply their new skills effectively. 
                          Under his leadership, Nnovity Works has become a trusted name for both technology solutions 
                          and professional development in Chennai.
                        </p>
                      </div>
                      <Button asChild className="bg-warm-gradient hover:opacity-90">
                        <NavLink to="/about">Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-success-gradient text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business & Skills?</h2>
            <p className="text-xl mb-10 text-accent-foreground/90 max-w-3xl mx-auto">
              Whether you need Tally ERP solutions to streamline your operations or professional training 
              to enhance your team's capabilities, Nnovity Works is your trusted partner in Chennai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 shadow-2xl">
                <NavLink to="/contact">Schedule a Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="call" className="text-lg px-8 shadow-2xl">
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +91 987 654 3210
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
