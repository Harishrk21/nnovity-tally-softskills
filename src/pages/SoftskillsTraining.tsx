import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
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
      <Helmet>
        <title>Best Soft Skills Training in Chennai - Mr. Samshul Millath | NnovityWorks</title>
        <meta name="description" content="Best soft skills trainer in Chennai, Anna Nagar. Mr. Samshul Millath offers communication, leadership, personality development, public speaking & PoSH training for schools, colleges & companies. Corporate training Chennai." />
        <meta name="description" content="Best soft skills trainer in Chennai, Anna Nagar. Mr. Samshul Millath offers communication, leadership, personality development, public speaking  PoSH training for schools, colleges  companies. Corporate training Chennai." />
        <meta name="keywords" content="soft skills training Chennai, soft skills training Anna Nagar, best soft skills trainer Chennai, corporate training Chennai, personality development Chennai, leadership training Chennai, communication skills training Chennai, PoSH training Chennai, ACTD certified trainer Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/softskills-training" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/softskills-training" />
        <meta property="og:title" content="Best Soft Skills Training in Chennai - Mr. Samshul Millath | NnovityWorks" />
        <meta property="og:description" content="Professional soft skills training by Mr. Samshul Millath. Communication, leadership, public speaking, and corporate training in Chennai." />
        <meta property="og:image" content="https://nnovityworks.com/softskills-training-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soft Skills Training Chennai - NnovityWorks" />
        <meta name="twitter:description" content="Professional soft skills training by Mr. Samshul Millath" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "NnovityWorks Soft Skills Training",
            "description": "Premier softskills training institute in Chennai",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
              "addressLocality": "Chennai",
              "postalCode": "600102",
              "addressRegion": "TN",
              "addressCountry": "IN"
            },
            "instructor": {
              "@type": "Person",
              "name": "Mr. Samshul Millath",
              "jobTitle": "International Softskills Trainer",
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "ACTD Accredited" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "UKIQ Certified" }
              ]
            },
            "areaServed": {
              "@type": "City",
              "name": "Chennai"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mr. Samshul Millath",
            "jobTitle": "Tally Prime Implementation & Training Expert",
            "description": "ACTD & UKIQ accredited softskills trainer specializing in corporate training, leadership development, and personality enhancement",
            "knowsAbout": ["Leadership Training", "Public Speaking", "Business Communication", "Personality Development", "Sales Training"],
            "alumniOf": [
              { "@type": "Organization", "name": "ACTD - Accredited Corporate Trainer & Developer" },
              { "@type": "Organization", "name": "UKIQ - UK Institute of Quality" }
            ]
          })}
        </script>
      </Helmet>


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" },
    { name: "Soft Skills Training", url: "/softskills-training" }
  ]} />
      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center text-white overflow-hidden">
          <div className="absolute inset-0" style={{ transform: 'none' }}>
            <img 
              src={heroSoftskills} 
              alt="Professional soft skills training by Mr. Samshul Millath in Chennai - Communication, Leadership, and Personality Development"
              className="w-full h-full object-cover object-center"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85"></div>
          </div>
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
            <div className="max-w-3xl animate-fade-in">
              <div className="flex items-center space-x-2 mb-4 glass-morphism px-4 py-2 rounded-full w-fit">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ACTD & UKIQ Accredited</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Professional Soft Skills Training
               - Soft Skills Training Chennai</h1>
              <p className="text-sm md:text-base mb-6 text-white/95 font-medium">
                Led by <strong className="text-white">Mr. Samshul Millath</strong>, Tally Prime Implementation & Training Expert with 15+ years of experience, 
                specializing in communication skills, personality development, leadership, public speaking, and corporate training excellence.
              </p> Learn more about <a href="/training" className="text-blue-600 hover:text-blue-800 underline">Tally Prime training</a>.
              <p className="text-sm md:text-base mb-8 text-white/80">
                Empowering individuals and organizations across Chennai with comprehensive soft skills training 
                for schools, colleges, and corporate events. Training 1000+ young minds from prestigious Educational institutions and CSR & NGO Activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                  <NavLink to="/contact">Book a Training Session</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                  <NavLink to="/about">About Our Trainer</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                  <a href="tel:+919841115769">Call: +91 98411 15769</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Mr. Millath */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Meet Mr. Samshul Millath - Your Expert Trainer</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                <strong>Mr. Samshul Millath</strong> is a Tally Prime Implementation & Training Expert (Tally Prime & SoftSkills) with 
                <strong> 15+ Years</strong> of highly experienced in Accounting & Business Automation Support.
              </p>
              <p className="text-muted-foreground mb-4">
                Performing TallyPrime Sales - Service - Training & Implementation projects. Providing Simple & Systematic solutions 
                for Accounting needs beyond boundaries.
              </p>
              <p className="text-muted-foreground">
                Training <strong>1000+ Young minds</strong> for Tally Prime Accounting & Soft Skills from prestigious Educational 
                institutions and CSR & NGO Activities. With extensive experience in corporate training, educational institutions, 
                and personal development coaching, Mr. Samshul Millath has transformed thousands of individuals and teams across Chennai and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-secondary" />
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Comprehensive Soft Skills Training Programs</h2>
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
                      <div className="mb-4 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary" />
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Get in touch with NnovityWorks today. Join 1000+ individuals and organizations in Chennai who have transformed their capabilities 
              through our comprehensive soft skills training programs led by Mr. Samshul Millath.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Schedule a Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SoftskillsTraining;
