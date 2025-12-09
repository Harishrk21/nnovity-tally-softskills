import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, TrendingUp, BookOpen, Briefcase, MessageSquare, Target, Lightbulb } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroSoftskills from "@/assets/hero-softskills.jpg";

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
      title: "Personality Mental Attitude",
      description: "Develop a positive mental attitude and winning personality",
      audience: "Students, Professionals, Corporate Teams",
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
        <title>Best Soft Skills Training in Chennai - Samshul Millath | NnovityWorks</title>
        <meta name="description" content="Top soft skills trainer in Chennai. Samshul Millath, 15+ years experienced Tally Implementation & Training Expert, offers communication skills, personality development, public speaking, time management, leadership, workplace behavior, and PoSH training for schools, colleges, and companies." />
        <meta name="keywords" content="soft skills training Chennai, best soft skills trainer Chennai, personality development Chennai, leadership training Chennai, public speaking Chennai, PoSH training Chennai, corporate training Chennai, communication skills training, Samshul Millath trainer" />
        <link rel="canonical" href="https://nnovityworks.com/softskills-training" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/softskills-training" />
        <meta property="og:title" content="Best Soft Skills Training in Chennai - Samshul Millath | NnovityWorks" />
        <meta property="og:description" content="Professional soft skills training by Samshul Millath. Communication, leadership, public speaking, and corporate training in Chennai." />
        <meta property="og:image" content="https://nnovityworks.com/softskills-training-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soft Skills Training Chennai - NnovityWorks" />
        <meta name="twitter:description" content="Professional soft skills training by Samshul Millath" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "NnovityWorks Soft Skills Training",
            "description": "Premier softskills training institute in Chennai",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "TN",
              "addressCountry": "IN"
            },
            "instructor": {
              "@type": "Person",
              "name": "Mr. Millath",
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
            "name": "Samshul Millath",
            "jobTitle": "Tally Implementation & Training Expert",
            "description": "ACTD & UKIQ accredited softskills trainer specializing in corporate training, leadership development, and personality enhancement",
            "knowsAbout": ["Leadership Training", "Public Speaking", "Business Communication", "Personality Development", "Sales Training"],
            "alumniOf": [
              { "@type": "Organization", "name": "ACTD - Accredited Corporate Trainer & Developer" },
              { "@type": "Organization", "name": "UKIQ - UK Institute of Quality" }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />
      <WhatsAppFloat />

      <main>
        {/* Hero Section */}
        <section className="relative bg-warm-gradient text-secondary-foreground py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={heroSoftskills} alt="Professional soft skills training by Samshul Millath in Chennai - Communication, Leadership, and Personality Development" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-8 h-8" />
                <span className="text-sm font-semibold uppercase tracking-wide">ACTD & UKIQ Accredited</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Soft Skills Training
              </h1>
              <p className="text-xl mb-6 text-secondary-foreground/90">
                Led by <strong>Samshul Millath</strong>, Tally Implementation & Training Expert with 15+ years of experience, 
                specializing in communication skills, personality development, leadership, public speaking, and corporate training excellence.
              </p>
              <p className="text-lg mb-8 text-secondary-foreground/80">
                Empowering individuals and organizations across Chennai with comprehensive soft skills training 
                for schools, colleges, and corporate events. Training 1000+ young minds from prestigious Educational institutions and CSR & NGO Activities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <NavLink to="/contact">Book a Training Session</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  <a href="tel:+917299817996">Call: +91 72998 17996</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Mr. Millath */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Meet Samshul Millath - Your Expert Trainer</h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Samshul Millath</strong> is a Tally Implementation & Training Expert (Tally & SoftSkills) with 
                <strong> 15+ Years</strong> of highly experienced in Accounting & Business Automation Support.
              </p>
              <p className="text-muted-foreground mb-4">
                Performing TallyPrime Sales - Service - Training & Implementation projects. Providing Simple & Systematic solutions 
                for Accounting needs beyond boundaries.
              </p>
              <p className="text-muted-foreground">
                Training <strong>1000+ Young minds</strong> for Tally Prime Accounting & Soft Skills from prestigious Educational 
                institutions and CSR & NGO Activities. With extensive experience in corporate training, educational institutions, 
                and personal development coaching, Samshul Millath has transformed thousands of individuals and teams across Chennai and beyond.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{achievement.name}</CardTitle>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Soft Skills Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                      <CardTitle className="text-lg">{program.title}</CardTitle>
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

        {/* Train the Trainer */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-secondary">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Train the Trainer Program</CardTitle>
                      <CardDescription className="text-base">Become a Certified Softskills Trainer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our comprehensive Train the Trainer program is designed for aspiring trainers, educators, and HR professionals 
                    who want to develop exceptional training delivery skills. Learn proven methodologies, facilitation techniques, 
                    and content development strategies from an internationally accredited expert.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Program Highlights:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Training methodology & techniques</li>
                        <li>• Content development & curriculum design</li>
                        <li>• Facilitation & engagement strategies</li>
                        <li>• Assessment & evaluation methods</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Benefits:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Certification upon completion</li>
                        <li>• Practical training assignments</li>
                        <li>• Ongoing mentorship support</li>
                        <li>• Industry-recognized credential</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="bg-warm-gradient hover:opacity-90">
                      <NavLink to="/contact">Enquire About Train the Trainer</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">Schools & Colleges</CardTitle>
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
                  <CardTitle className="text-xl">Corporate Organizations</CardTitle>
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
                  <CardTitle className="text-xl">Individuals</CardTitle>
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
        <section className="py-16 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch with NnovityWorks today. Join 1000+ individuals and organizations in Chennai who have transformed their capabilities 
              through our comprehensive soft skills training programs led by Samshul Millath.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <NavLink to="/contact">Schedule a Consultation</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
