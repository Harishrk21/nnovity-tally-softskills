import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShoppingCart, Award, TrendingUp, Shield, Clock } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroTally from "@/assets/hero-tally.jpg";

const TallySales = () => {
  const features = [
    { icon: Award, title: "Authorized Partner", description: "Official Tally Solutions partner with certified expertise" },
    { icon: TrendingUp, title: "Latest Versions", description: "Always offering the most current Tally ERP releases" },
    { icon: Shield, title: "Genuine Licenses", description: "100% authentic Tally software with full warranty" },
    { icon: Clock, title: "Quick Activation", description: "Instant setup and activation support" },
  ];

  const products = [
    {
      name: "TallyPrime",
      description: "Complete business management solution for small to medium enterprises",
      features: ["Accounting & Finance", "Inventory Management", "GST Compliance", "Banking Integration", "Multi-location Support"],
      popular: true,
    },
    {
      name: "Tally ERP 9",
      description: "Robust ERP solution for growing businesses",
      features: ["Financial Accounting", "Inventory & Stock", "Statutory Compliance", "Payroll Management", "Manufacturing Features"],
      popular: false,
    },
    {
      name: "Tally Silver/Gold",
      description: "Enhanced editions with advanced features and multi-user support",
      features: ["Multi-user Access", "Data Synchronization", "Remote Access", "Enhanced Security", "Priority Support"],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tally Sales Chennai - Buy TallyPrime & Tally ERP 9 | Nnovity Works</title>
        <meta name="description" content="Purchase genuine Tally software in Chennai from authorized partner Nnovity Works. Get TallyPrime, Tally ERP 9, and enterprise solutions with expert installation and support." />
        <meta name="keywords" content="buy Tally Chennai, Tally sales Chennai, TallyPrime price, Tally ERP 9 Chennai, Tally software dealer Chennai, authorized Tally partner, Tally license Chennai" />
        <link rel="canonical" href="https://nnovityworks.com/tally-sales" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Tally ERP Software",
            "description": "Genuine Tally software sales and licensing in Chennai",
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
                "name": "Nnovity Works"
              }
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-hero-gradient text-primary-foreground py-20 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 opacity-10">
            <img src={heroTally} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Purchase Genuine Tally Software in Chennai
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                As an authorized Tally partner, we provide authentic Tally solutions with competitive pricing, 
                instant activation, and comprehensive post-sales support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-xl">
                  <NavLink to="/contact">Request a Quote</NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                  <a href="tel:+91">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Tally Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-center">What is Tally?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  <strong>Tally</strong> is India's most popular business management software, trusted by millions of businesses worldwide. 
                  It's a comprehensive ERP (Enterprise Resource Planning) solution designed specifically for small to medium enterprises.
                </p>
                <p>
                  Whether you're a startup, growing SME, or established enterprise, Tally simplifies complex business processes like 
                  accounting, inventory management, GST compliance, payroll, and banking - all in one integrated platform. No more 
                  juggling multiple software or maintaining manual registers!
                </p>
                <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                  <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Perfect For Beginners</CardTitle>
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
                      <CardTitle className="text-lg">Powerful For Experts</CardTitle>
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
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Why Buy Tally from Nnovity Works?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
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
              <h2 className="text-3xl font-bold mb-4">Our Tally Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect Tally solution for your business needs. All products come with genuine licenses and full support.
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
                    <CardTitle className="text-2xl">{product.name}</CardTitle>
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
        <section className="py-16 bg-hero-gradient text-primary-foreground animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Business?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch with our sales team for personalized product recommendations and competitive pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-xl">
                <NavLink to="/contact">Contact Sales Team</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                <NavLink to="/tally-support">View Support Services</NavLink>
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
