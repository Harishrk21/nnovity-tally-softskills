import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShoppingCart, Award, TrendingUp, Shield, HeadphonesIcon, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ParallaxSection } from "@/components/ParallaxSection";
import heroTally from "@/assets/hero-tally.jpg";

const TallySales = () => {
  const features = [
    { icon: Settings, title: "Expert Implementation", description: "Professional setup, configuration, and customization tailored to your business requirements" },
    { icon: TrendingUp, title: "Latest Versions", description: "Always offering the most current Tally Prime releases" },
    { icon: Shield, title: "Genuine Licenses", description: "100% authentic Tally Prime software with full warranty" },
    { icon: HeadphonesIcon, title: "Expert Support", description: "24/7 technical support and ongoing assistance for all your Tally Prime needs" },
  ];

  const products = [
    {
      name: "Tally Prime Silver (Single Use)",
      description: "New license for single-user businesses. Perfect for small businesses and startups with one user access.",
      features: ["Single User License", "Accounting & Finance", "Inventory Management", "GST Compliance", "Banking Integration", "Lifetime or Subscription Options"],
      popular: true,
    },
    {
      name: "Tally Prime Gold",
      description: "Multi-user license for growing businesses. Access from multiple PCs with enhanced collaboration features.",
      features: ["Multi-User Access", "Multiple PC Support", "Data Synchronization", "Advanced Reporting", "Remote Access", "Enhanced Security"],
      popular: false,
    },
    {
      name: "Tally Prime Software Subscription",
      description: "Flexible subscription plans with monthly, quarterly, or annual options. Stay updated with latest features and support.",
      features: ["Flexible Subscription Plans", "Regular Updates", "Cloud Access Options", "Priority Support", "Latest Features", "Cost-Effective Monthly Payments"],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tally Prime Sales Chennai - Buy TallyPrime | NnovityWorks</title>
        <meta name="description" content="Purchase genuine Tally Prime software in Chennai from authorized partner NnovityWorks. Get TallyPrime and enterprise solutions with expert installation and support." />
        <meta name="keywords" content="buy Tally Prime Chennai, Tally Prime sales Chennai, TallyPrime price, Tally Prime software dealer Chennai, authorized Tally Prime partner, Tally Prime license Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/tally-sales" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com/tally-sales" />
        <meta property="og:title" content="Tally Prime Sales Chennai - Buy TallyPrime | NnovityWorks" />
        <meta property="og:description" content="Purchase genuine Tally Prime software in Chennai. Official Tally Prime licenses with expert installation and support." />
        <meta property="og:image" content="https://nnovityworks.com/tally-sales-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tally Prime Sales Chennai - NnovityWorks" />
        <meta name="twitter:description" content="Buy genuine TallyPrime in Chennai" />
        <meta name="twitter:image" content="https://nnovityworks.com/tally-sales-image.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Tally Prime Software",
            "description": "Genuine Tally Prime software sales and licensing in Chennai",
            "brand": {
              "@type": "Brand",
              "name": "Tally Solutions"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "NnovityWorks"
              }
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-hero-gradient text-primary-foreground py-20 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 opacity-10" style={{ transform: 'none' }}>
            <img 
              src={heroTally} 
              alt="Genuine Tally Prime software sales and licensing in Chennai - TallyPrime"
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
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Tally Prime Software Sales & Licensing
              </h1>
              <p className="text-sm md:text-base mb-8 text-primary-foreground/90">
                Official Tally Prime licenses with version recommendations based on your business needs. 
                Fast onboarding and setup with expert guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-xl">
                  <NavLink to="/contact">Request a Quote</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <a href="tel:+919841115769">Call Now: +91 98411 15769</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Tally Prime Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 text-center bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">What is Tally Prime?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>Tally Prime</strong> is India's most popular business management software, trusted by millions of businesses worldwide. 
                  It's a comprehensive ERP (Enterprise Resource Planning) solution designed specifically for small to medium enterprises.
                </p>
                <p>
                  Whether you're a startup, growing SME, or established enterprise, Tally Prime simplifies complex business processes like 
                  accounting, inventory management, GST compliance, payroll, and banking - all in one integrated platform. No more 
                  juggling multiple software or maintaining manual registers!
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                  <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">Perfect For Beginners</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Simple, user-friendly interface</li>
                        <li>• No accounting knowledge required to start</li>
                        <li>• Step-by-step guided setup</li>
                        <li>• Extensive training resources available</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-secondary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-base md:text-lg">Powerful For Experts</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Advanced customization capabilities</li>
                        <li>• Multi-location & multi-company support</li>
                        <li>• Complex manufacturing features</li>
                        <li>• Extensive reporting & analytics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">Why Buy Tally Prime from Nnovity Works?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Tally Prime Products</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect Tally Prime solution for your business needs. All products come with genuine licenses and full support.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className={`relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in ${product.popular ? 'border-primary shadow-lg' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-hero-gradient hover:opacity-90 transition-all duration-300 shadow-lg">
                      <NavLink to="/contact">Get Pricing</NavLink>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden text-white animate-fade-in">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">Ready to Streamline Your Business?</h2>
            <p className="text-sm md:text-base mb-8 text-white/90 max-w-2xl mx-auto font-medium">
              Get in touch with our sales team for personalized product recommendations and competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                <NavLink to="/contact">Contact Sales Team</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                <NavLink to="/tally-support">View Support Services</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                <NavLink to="/about">About Our Team</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TallySales;
