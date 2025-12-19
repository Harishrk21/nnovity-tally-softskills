import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import founderImage from "@/assets/founder-millath.jpg";

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
      <Helmet>
        <title>About NnovityWorks - Samshul Millath | Tally & Soft Skills Training Chennai</title>
        <meta name="description" content="Learn about NnovityWorks and Samshul Millath, 15+ years experienced Tally Implementation & Training Expert. Leading provider of Tally ERP solutions and professional soft skills training in Chennai." />
        <meta name="keywords" content="about NnovityWorks, Samshul Millath, Tally expert Chennai, Tally training Chennai, soft skills training company Chennai, Tally implementation expert" />
        <link rel="canonical" href="https://nnovityworks.com/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/about" />
        <meta property="og:title" content="About NnovityWorks - Samshul Millath | Tally & Soft Skills Training Chennai" />
        <meta property="og:description" content="Learn about NnovityWorks and Samshul Millath, 15+ years experienced Tally Implementation & Training Expert in Chennai." />
        <meta property="og:image" content="https://nnovityworks.com/about-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About NnovityWorks - Samshul Millath" />
        <meta name="twitter:description" content="15+ years experienced Tally Implementation & Training Expert in Chennai" />
        <meta name="twitter:image" content="https://nnovityworks.com/about-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "NnovityWorks",
              "founder": {
                "@type": "Person",
                "name": "Samshul Millath",
                "jobTitle": "Tally Implementation & Training Expert",
                "description": "15+ years experienced in Accounting & Business Automation Support"
              },
              "description": "Empowering businesses with Tally solutions and professional soft skills training"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient text-primary-foreground py-20 animate-fade-in relative overflow-hidden">
          <ParallaxSection speed={0.3} className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </ParallaxSection>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About NnovityWorks</h1>
              <p className="text-xl text-primary-foreground/90 animate-fade-in">
                Innovate. Empower. Excel.
              </p>
              <p className="text-lg text-primary-foreground/80 animate-fade-in mt-2">
                Empowering businesses with Tally solutions and professional soft skills training.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center animate-fade-in">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 animate-fade-in">
                <p>
                  At NnovityWorks, we blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
                </p>
                <p>
                  We specialize in <strong>Tally Software Sales & Support</strong> and <strong>Soft Skills Training</strong>, offering practical solutions that improve both operational performance and human capability.
                </p>
                <p>
                  Under the leadership of <strong>Samshul Millath</strong>, a Tally Implementation & Training Expert with 15+ years of experience in Accounting & Business Automation Support, we've established ourselves as Chennai's trusted partner for both Tally ERP solutions and professional development training.
                </p>
                <p>
                  Our mission is to empower people and businesses with the right skills and systems to perform at their best. We've trained 1000+ young minds for Tally Prime Accounting & Soft Skills from prestigious Educational institutions and through CSR & NGO Activities.
                </p>
                <div className="mt-8 grid md:grid-cols-3 gap-6 not-prose">
                  <div className="text-center p-6 bg-primary/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Training Hours Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-accent/10 rounded-xl transition-all duration-300 hover:shadow-lg">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Samshul Millath */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">About the Founder</h2>
              <Card className="border-secondary/30 shadow-xl overflow-hidden animate-fade-in">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image Column */}
                    <div className="md:col-span-2 bg-gradient-to-br from-secondary/20 to-primary/10">
                      <div className="h-full flex items-center justify-center p-8">
                        <div className="relative">
                          <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-2xl blur-xl"></div>
                          <img 
                            src={founderImage} 
                            alt="Samshul Millath - Tally Implementation & Training Expert" 
                            className="relative rounded-2xl shadow-2xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="md:col-span-3 p-8 md:p-10 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">Samshul Millath</h3>
                        <p className="text-lg text-primary mb-3 font-semibold">Tally Implementation & Training Expert (Tally & SoftSkills)</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                            15+ Years Experience
                          </span>
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
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
                          Samshul Millath is the driving force behind NnovityWorks' success in both technical and training domains. 
                          His expertise spans across Tally implementation, customization, cloud solutions, and comprehensive soft skills training.
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Tally Software Sales & Licensing</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Official Tally licenses</li>
                    <li>• Version recommendations based on business needs</li>
                    <li>• Fast onboarding and setup</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-accent">Tally Support & AMC</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Installation & Implementation</li>
                    <li>• Troubleshooting & error fixing</li>
                    <li>• Annual maintenance and priority support</li>
                    <li>• Online & Onsite support</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-secondary">Tally on Cloud & Mobile</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Cloud access services for TallyPrime from anywhere</li>
                    <li>• Tally on Mobile Application</li>
                    <li>• Track your business anytime, anywhere</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Tally Customization Services</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Addressing specific business requirements</li>
                    <li>• Custom reporting and data posting</li>
                    <li>• Cross Platform Automatic API based Data Porting</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-accent">Tally & MS-Office Training</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Training for individuals, students, and professionals</li>
                    <li>• Corporate Tally training for accounting teams</li>
                    <li>• MS-Office Training for Office Teams, Jobseekers & Students</li>
                    <li>• Practical, hands-on sessions</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-secondary">Soft Skills Training</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Communication skills</li>
                    <li>• Personality Mental Attitude</li>
                    <li>• Public Speaking</li>
                    <li>• Time management & productivity</li>
                    <li>• Leadership & teamwork</li>
                    <li>• Workplace behavior</li>
                    <li>• The Prevention of Sexual Harassment (PoSH) Training at Workplace</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">Corporate Training Programs</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Customized workshops focused on performance</li>
                    <li>• Communication and professional development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-success-gradient text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Get in touch with NnovityWorks today. We blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <NavLink to="/contact">Get in Touch</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <a href="tel:+919841115769">Call: +91 98411 15769</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
