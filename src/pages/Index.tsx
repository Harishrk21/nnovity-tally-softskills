import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, GraduationCap } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroTally from "@/assets/hero-tally.jpg";
import heroSoftskills from "@/assets/hero-softskills.jpg";

const Index = () => {
  const tallyServices = [
    "TallyPrime & ERP Sales",
    "Cloud & Mobile Solutions",
    "Customization & Support",
    "Data Integration",
  ];

  const softskillsServices = [
    "Leadership Training",
    "Public Speaking",
    "Personality Development",
    "Corporate Training",
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
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                  <NavLink to="/contact">Get Started</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                  <a href="tel:+91">Call: +91 XXX XXX XXXX</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Dual Expertise, Complete Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We combine technology excellence with human development, offering both Tally ERP solutions 
                and world-class softskills training under one roof.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Tally Services Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-primary/20">
                <div className="h-48 overflow-hidden">
                  <img src={heroTally} alt="Tally ERP Solutions" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Tally ERP Solutions</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Authorized partner providing complete Tally sales, support, and customization services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {tallyServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3 pt-4">
                    <Button asChild className="flex-1 bg-hero-gradient hover:opacity-90">
                      <NavLink to="/tally-sales">
                        View Tally Sales <ArrowRight className="ml-2 w-4 h-4" />
                      </NavLink>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <NavLink to="/tally-support">Support Services</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Softskills Training Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-secondary/20">
                <div className="h-48 overflow-hidden">
                  <img src={heroSoftskills} alt="Softskills Training" className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-2xl">Softskills Training</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    International-standard training by ACTD & UKIQ accredited trainer Mr. Millath
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {softskillsServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full bg-warm-gradient hover:opacity-90">
                      <NavLink to="/softskills-training">
                        Explore Training Programs <ArrowRight className="ml-2 w-4 h-4" />
                      </NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Nnovity Works?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
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

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
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

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
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
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                <NavLink to="/contact">Schedule a Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8">
                <a href="tel:+91">Call Now: +91 XXX XXX XXXX</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
