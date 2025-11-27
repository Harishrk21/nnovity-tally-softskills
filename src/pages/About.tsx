import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
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
        <title>About Nnovity Works - Mr. Millath | Tally & Softskills Training Chennai</title>
        <meta name="description" content="Learn about Nnovity Works and Mr. Millath, ACTD & UKIQ accredited trainer. Leading provider of Tally ERP solutions and professional softskills training in Chennai." />
        <meta name="keywords" content="about Nnovity Works, Mr. Millath, ACTD trainer Chennai, UKIQ trainer, Tally partner Chennai, softskills training company" />
        <link rel="canonical" href="https://nnovityworks.com/about" />
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient text-primary-foreground py-20 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Nnovity Works</h1>
              <p className="text-xl text-primary-foreground/90 animate-fade-in">
                Empowering businesses and individuals through technology solutions and skills development
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
                  Nnovity Works was founded with a vision to bridge the gap between technology and human potential. 
                  We recognized that while businesses need robust software solutions like Tally ERP to manage their operations, 
                  they equally need skilled, confident, and well-trained individuals to leverage these tools effectively.
                </p>
                <p>
                  Under the leadership of <strong>Mr. Millath</strong>, an internationally accredited softskills trainer 
                  (ACTD & UKIQ), we've grown into Chennai's trusted partner for both Tally ERP solutions and professional 
                  development training. Our unique combination of technical expertise and training excellence sets us apart 
                  in the market.
                </p>
                <p>
                  Today, we serve hundreds of businesses, educational institutions, and individuals across Chennai, 
                  helping them achieve operational efficiency through Tally and personal excellence through our comprehensive 
                  softskills training programs.
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

        {/* About Mr. Millath */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Meet Our Founder</h2>
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
                            alt="Mr. Millath - Founder & International Softskills Trainer" 
                            className="relative rounded-2xl shadow-2xl w-full max-w-xs object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="md:col-span-3 p-8 md:p-10 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">Mr. Millath</h3>
                        <p className="text-lg text-muted-foreground mb-3">Founder & International Softskills Trainer</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            ACTD Accredited
                          </span>
                          <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            UKIQ Certified
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Mr. Millath is the driving force behind Nnovity Works' success in both technical and training domains. 
                          With prestigious international accreditations from <strong>ACTD (Accredited Corporate Trainer & Developer)</strong> and 
                          <strong> UKIQ (UK Institute of Quality)</strong>, he brings world-class training methodologies to Chennai.
                        </p>
                        <p>
                          His expertise spans across personality development, leadership training, public speaking, business English, 
                          and corporate training. He has successfully trained thousands of students, professionals, and corporate teams, 
                          helping them unlock their full potential and achieve their career goals.
                        </p>
                        <p>
                          Beyond training, Mr. Millath's vision for Nnovity Works encompasses providing comprehensive business solutions, 
                          which is why the company also specializes in Tally ERP sales, support, and customization - ensuring businesses 
                          have both the right tools and the right skills to succeed.
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
                  <h3 className="text-2xl font-semibold text-primary">Tally ERP Solutions</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Authorized Tally sales and licensing</li>
                    <li>• Customization and implementation</li>
                    <li>• Tally on cloud and mobile solutions</li>
                    <li>• Data integration and migration</li>
                    <li>• 24/7 technical support</li>
                    <li>• Training and onboarding</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-accent">Business Solutions</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• CRM - Customer Relationship Management</li>
                    <li>• ERP - Enterprise Resource Planning</li>
                    <li>• HRMS - Human Resource Management</li>
                    <li>• Payroll processing systems</li>
                    <li>• Business process automation</li>
                    <li>• Custom software development</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-secondary">Softskills Training</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                    <li>• Personality development programs</li>
                    <li>• Leadership and management training</li>
                    <li>• Public speaking and presentation skills</li>
                    <li>• Business English communication</li>
                    <li>• Interview skills and career coaching</li>
                    <li>• Sales and negotiation training</li>
                    <li>• Entrepreneurship development</li>
                    <li>• Train the trainer certification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-success-gradient text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
              Whether you need Tally solutions for your business or training programs to enhance your team's capabilities, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <NavLink to="/contact">Get in Touch</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                <a href="tel:+91">Call: +91 XXX XXX XXXX</a>
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
