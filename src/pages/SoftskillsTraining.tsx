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
      icon: Users,
      title: "Personality Development",
      description: "Build confidence, improve communication, and develop a winning personality",
      audience: "Students, Professionals, Job Seekers",
    },
    {
      icon: MessageSquare,
      title: "Public Speaking & Presentation Skills",
      description: "Master the art of engaging presentations and confident public speaking",
      audience: "Corporate, Educators, Leaders",
    },
    {
      icon: BookOpen,
      title: "Business English Communication",
      description: "Excel in professional English communication for global business success",
      audience: "Corporate Teams, Entrepreneurs",
    },
    {
      icon: Target,
      title: "Leadership Training",
      description: "Develop essential leadership qualities to inspire and manage teams effectively",
      audience: "Managers, Team Leaders, Executives",
    },
    {
      icon: Briefcase,
      title: "Interview Skills & Grooming",
      description: "Stand out in interviews with proven techniques and professional grooming",
      audience: "Students, Career Changers",
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship Training",
      description: "Learn the mindset, skills, and strategies to launch and grow your business",
      audience: "Aspiring Entrepreneurs, Startups",
    },
    {
      icon: TrendingUp,
      title: "Sales & Negotiation Skills",
      description: "Master persuasion techniques and negotiation strategies for business success",
      audience: "Sales Teams, Business Owners",
    },
    {
      icon: Award,
      title: "Advanced Management Skills",
      description: "Enhance strategic thinking, decision-making, and management capabilities",
      audience: "Senior Managers, Directors",
    },
  ];

  const certifications = [
    {
      name: "ACTD Accreditation",
      description: "Accredited Corporate Trainer & Developer - International Recognition",
    },
    {
      name: "UKIQ Certification",
      description: "UK Institute of Quality - Professional Training Excellence",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Softskills Training in Chennai - Mr. Millath | Nnovity Works</title>
        <meta name="description" content="Top softskills trainer in Chennai. Mr. Millath, ACTD & UKIQ accredited international trainer, offers personality development, leadership training, public speaking, business English, and corporate training programs for schools, colleges, and companies." />
        <meta name="keywords" content="softskills training Chennai, best softskills trainer Chennai, personality development Chennai, leadership training Chennai, public speaking Chennai, business English training, corporate training Chennai, interview skills, entrepreneurship training, sales training, Mr. Millath trainer, ACTD trainer, UKIQ trainer" />
        <link rel="canonical" href="https://nnovityworks.com/softskills-training" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Nnovity Works Softskills Training",
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
            "name": "Mr. Millath",
            "jobTitle": "International Softskills Trainer",
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
            <img src={heroSoftskills} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-8 h-8" />
                <span className="text-sm font-semibold uppercase tracking-wide">ACTD & UKIQ Accredited</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Lives Through Professional Softskills Training
              </h1>
              <p className="text-xl mb-6 text-secondary-foreground/90">
                Led by <strong>Mr. Millath</strong>, internationally accredited trainer (ACTD, UKIQ) specializing in 
                personality development, leadership, public speaking, and corporate training excellence.
              </p>
              <p className="text-lg mb-8 text-secondary-foreground/80">
                Empowering individuals and organizations across Chennai with world-class softskills training 
                for schools, colleges, and corporate events.
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
              <h2 className="text-3xl font-bold mb-6">Meet Mr. Millath - Your Expert Trainer</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mr. Millath is an internationally recognized softskills trainer with prestigious accreditations from 
                <strong> ACTD (Accredited Corporate Trainer & Developer)</strong> and <strong>UKIQ (UK Institute of Quality)</strong>.
              </p>
              <p className="text-muted-foreground">
                With extensive experience in corporate training, educational institutions, and personal development coaching, 
                Mr. Millath has transformed thousands of individuals and teams across Chennai and beyond. His dynamic training 
                methodology combines practical exercises, real-world scenarios, and interactive sessions to ensure lasting impact.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center border-primary/20">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Award className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{cert.description}</CardDescription>
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
              <h2 className="text-3xl font-bold mb-4">Comprehensive Softskills Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored programs for schools, colleges, corporate teams, and individuals seeking personal and professional growth
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
            <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Full Potential?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join hundreds of individuals and organizations in Chennai who have transformed their capabilities 
              through our world-class softskills training programs led by Mr. Millath.
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
