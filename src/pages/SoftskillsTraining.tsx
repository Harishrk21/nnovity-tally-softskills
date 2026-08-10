import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import { PageHero } from "@/components/BrightUI";
import heroSoft from "@/assets/hero-softskills.jpg";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, TrendingUp, BookOpen, Briefcase, MessageSquare, Target, Lightbulb, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroSoftskills from "@/assets/hero-softskills.jpg";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const SoftskillsTraining = () => {
  const programs = [
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description: "Build effective communication skills for personal and professional success",
      audience: "Students, Professionals, Job Seekers",
    },
    {
      icon: Users,
      title: "Positive Mental Attitude",
      description: "Develop a positive mental attitude and winning mindset for personal and professional success",
      audience: "Students, Professionals, Corporate Teams",
    },
    {
      icon: Sparkles,
      title: "Personality Development",
      description: "Comprehensive personality development program to enhance confidence, presence, and overall personal growth",
      audience: "Students, Professionals, Job Seekers, Corporate Teams",
    },
    {
      icon: MessageSquare,
      title: "Public Speaking",
      description: "Master the art of confident public speaking and engaging presentations",
      audience: "Corporate, Educators, Leaders, Students",
    },
    {
      icon: Target,
      title: "Time Management & Productivity",
      description: "Learn effective time management techniques to maximize productivity",
      audience: "Professionals, Managers, Students",
    },
    {
      icon: TrendingUp,
      title: "Leadership & Teamwork",
      description: "Develop essential leadership qualities and effective teamwork skills",
      audience: "Managers, Team Leaders, Executives",
    },
    {
      icon: Briefcase,
      title: "Workplace Behavior",
      description: "Understand professional workplace behavior and etiquette",
      audience: "Corporate Teams, New Employees",
    },
    {
      icon: Award,
      title: "PoSH Training at Workplace",
      description: "The Prevention of Sexual Harassment (PoSH) Training at Workplace",
      audience: "Corporate Organizations, HR Teams",
    },
  ];

  const achievements = [
    {
      name: "15+ Years Experience",
      description: "Highly experienced in Accounting & Business Automation Support",
    },
    {
      name: "1000+ Students Trained",
      description: "Training young minds for Tally Prime Accounting & Soft Skills from prestigious Educational institutions and CSR & NGO Activities",
    },
  ];

  return (
    <>
      <SEOHead
        page="softSkills"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          SEO_CONFIG.structuredData.person,
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Soft Skills Training Programs - Chennai",
            description: "Best soft skills training institute in Chennai for communication, leadership, personality development, public speaking and PoSH.",
            provider: { "@type": "Organization", name: "NnovityWorks", url: "https://nnovityworks.com" },
            instructor: { "@type": "Person", name: "Mr. Samshul Millath" },
            areaServed: { "@type": "City", name: "Chennai" },
          },
        ]}
      />


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Soft Skills Training", url: "/softskills-training" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        {/* Hero Section */}
        <PageHero
          eyebrow="Training Programs"
          title={<>Best Soft Skills Training Institute in <span className="text-accent-italic">Chennai</span></>}
          description="Corporate soft skills, personality development, leadership, public speaking & PoSH — led by Mr. Samshul Millath, ACTD & UKIQ certified trainer."
          image={heroSoft}
          imageAlt="Best soft skills training institute in Chennai - NnovityWorks"
          primaryCta={{ label: "Enroll / Enquire", to: "/contact" }}
          secondaryCta={{ label: "Meet the Trainer", to: "/about" }}
          badge="Corporate & Campus Training"
          stats={[{ value: "10K+", label: "Training Hours" }, { value: "PoSH", label: "Programs" }, { value: "Custom", label: "Workshops" }]}
        />

        {/* About Mr. Millath */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 font-display text-foreground">
                Meet Mr. Samshul Millath — Best Soft Skills Trainer in Chennai
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                <strong>Mr. Samshul Millath</strong> is an ACTD & UKIQ certified soft skills trainer and Tally Prime Implementation Expert with
                <strong> 15+ years</strong> of experience in accounting, business automation, and people development.
              </p>
              <p className="text-muted-foreground mb-4">
                Beyond soft skills, he leads{" "}
                <NavLink to="/tally-sales" className="font-medium text-primary underline-offset-4 hover:underline">
                  Tally Prime sales
                </NavLink>
                ,{" "}
                <NavLink to="/tally-support" className="font-medium text-primary underline-offset-4 hover:underline">
                  support & AMC
                </NavLink>
                , and{" "}
                <NavLink to="/training" className="font-medium text-primary underline-offset-4 hover:underline">
                  hands-on Tally training
                </NavLink>{" "}
                for businesses across Chennai.
              </p>
              <p className="text-muted-foreground">
                Training <strong>1000+ learners</strong> in Tally Prime accounting and soft skills through educational institutions, CSR and NGO programs.
                Learn more on our{" "}
                <NavLink to="/about" className="font-medium text-primary underline-offset-4 hover:underline">
                  about page
                </NavLink>{" "}
                or{" "}
                <NavLink to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                  book a consultation
                </NavLink>
                .
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg">{achievement.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-display text-foreground">Comprehensive Soft Skills Training Programs</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Customized workshops focused on performance, communication, and professional development for schools, colleges, corporate teams, and individuals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{program.title}</CardTitle>
                      <CardDescription className="text-sm">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        <strong>Target Audience:</strong> {program.audience}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">Schools & Colleges</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Student workshops, career readiness programs, personality development sessions, and 
                    communication skills training for academic institutions across Chennai.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">Corporate Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leadership development, team building, sales training, management workshops, and 
                    communication enhancement programs for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">Individuals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    One-on-one coaching, interview preparation, public speaking mastery, and personalized 
                    development plans for professionals and job seekers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Get in touch with NnovityWorks today. Join 1000+ individuals and organizations in Chennai who have transformed their capabilities 
              through our comprehensive soft skills training programs led by Mr. Samshul Millath.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-primary hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Schedule a Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/softskills-training"]} title="Related Tally & training services" />


      <Footer />
    </>
  );
};

export default SoftskillsTraining;
