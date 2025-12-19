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
import React from "react";
import { ArrowRight, CheckCircle2, Award, Users, Briefcase, GraduationCap, Settings, TrendingUp, Sparkles, Phone, Target, Cloud, Star, Zap, Shield, Globe, BarChart3, Clock, Smartphone } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LazyImage } from "@/components/LazyImage";
import { useParallaxTransform } from "@/hooks/useParallax";
import heroTally from "@/assets/hero-tally.jpg";
import heroSoftskills from "@/assets/hero-softskills.jpg";
import heroCRM from "@/assets/hero-crm.jpg";
import heroERP from "@/assets/hero-erp.jpg";
import heroHRMS from "@/assets/hero-hrms.jpg";
import teamSuccess from "@/assets/team-success.jpg";
import tallyLogo from "@/assets/partners/tally-logo.jpg";
import awsLogo from "@/assets/partners/aws-logo.jpg";
import bizanalystLogo from "@/assets/partners/bizanalyst-logo.jpg";
import greytLogo from "@/assets/partners/greyt-logo.jpg";
import vtigerLogo from "@/assets/partners/vtiger-logo.jpg";
import pagarbookLogo from "@/assets/partners/pagarbook-logo.jpg";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [currentHeroImage, setCurrentHeroImage] = React.useState(0);
  const heroImages = [heroTally, heroSoftskills, heroCRM, heroERP, heroHRMS];
  const heroParallax = useParallaxTransform(0.3);
  const servicesParallax = useParallaxTransform(0.2);
  const successParallax = useParallaxTransform(0.25);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const allServices = [
    {
      icon: Briefcase,
      title: "Tally Software Sales & Licensing",
      description: "Official Tally licenses with version recommendations based on business needs. Fast onboarding and setup.",
      link: "/tally-sales",
      color: "primary"
    },
    {
      icon: Settings,
      title: "Tally Support & AMC",
      description: "Installation & Implementation, Troubleshooting & error fixing, Annual maintenance and priority support, Online & Onsite support",
      link: "/tally-support",
      color: "primary"
    },
    {
      icon: Cloud,
      title: "Tally on Cloud",
      description: "Cloud access services provides a powerful option for businesses to access TallyPrime from anywhere.",
      link: "/tally-support",
      color: "accent"
    },
    {
      icon: Smartphone,
      title: "Tally on Mobile Application",
      description: "Stay connected to your business. Always. Track your business anytime, anywhere.",
      link: "/tally-support",
      color: "accent"
    },
    {
      icon: Sparkles,
      title: "Tally Customization Services",
      description: "Addressing Specific Business requirements for reporting and ease of data posting through Customization & Cross Platform Automatic API based Data Porting services.",
      link: "/tally-support",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Tally & MS-Office Training",
      description: "Training for individuals, students, and professionals. Corporate Tally training for accounting teams. MS-Office Training for Office Teams, Jobseekers & Students. Practical, hands-on session.",
      link: "/tally-support",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Soft Skills Training",
      description: "Communication skills, Personality Mental Attitude, Public Speaking, Time management & productivity, Leadership & teamwork, Workplace behavior, The Prevention of Sexual Harassment (PoSH) Training at Workplace",
      link: "/softskills-training",
      color: "secondary"
    },
    {
      icon: Briefcase,
      title: "Corporate Training Programs",
      description: "Customized workshops focused on performance, communication, and professional development.",
      link: "/softskills-training",
      color: "secondary"
    },
  ];

  return (
    <>
      <Helmet>
        <title>NnovityWorks - Innovate. Empower. Excel. | Tally Solutions & Soft Skills Training Chennai</title>
        <meta name="description" content="NnovityWorks empowers businesses with Tally solutions and professional soft skills training. Led by Samshul Millath, 15+ years experienced Tally Implementation & Training Expert. Tally sales, support, cloud, mobile, customization, and comprehensive soft skills training in Chennai." />
        <meta name="keywords" content="NnovityWorks, Tally Chennai, Tally sales Chennai, Tally support Chennai, Tally cloud Chennai, Tally mobile Chennai, soft skills training Chennai, Samshul Millath, Tally training Chennai, MS Office training Chennai, corporate training Chennai, personality development Chennai" />
        <link rel="canonical" href="https://nnovityworks.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com" />
        <meta property="og:title" content="NnovityWorks - Innovate. Empower. Excel. | Tally Solutions & Soft Skills Training Chennai" />
        <meta property="og:description" content="NnovityWorks empowers businesses with Tally solutions and professional soft skills training. Led by Samshul Millath, 15+ years experienced Tally Implementation & Training Expert." />
        <meta property="og:image" content="https://nnovityworks.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="NnovityWorks" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nnovityworks.com" />
        <meta name="twitter:title" content="NnovityWorks - Innovate. Empower. Excel." />
        <meta name="twitter:description" content="Tally Solutions & Soft Skills Training in Chennai. Led by Samshul Millath, 15+ years experienced expert." />
        <meta name="twitter:image" content="https://nnovityworks.com/twitter-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="NnovityWorks - Samshul Millath" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NnovityWorks",
            "alternateName": "Nnovity Works",
            "url": "https://nnovityworks.com",
            "logo": "https://nnovityworks.com/logo.png",
            "description": "Empowering businesses with Tally solutions and professional soft skills training in Chennai",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
              "addressLocality": "Chennai",
              "postalCode": "600102",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98411-15769",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["en", "ta"]
            },
            "founder": {
              "@type": "Person",
              "name": "Samshul Millath",
              "jobTitle": "Tally Implementation & Training Expert"
            },
            "sameAs": [
              "https://www.facebook.com/nnovityworks",
              "https://www.linkedin.com/company/nnovityworks"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Chennai"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Business Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tally Software Sales & Licensing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tally Support & AMC"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Soft Skills Training"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-hero-gradient text-primary-foreground py-24 md:py-32 overflow-hidden">
          {/* Background Images with Smooth Transition */}
          <div className="absolute inset-0" style={heroParallax.style}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Hero background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-cyan-800/70 to-teal-900/80"></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-float"></div>
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="fade" delay={0}>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 animate-scale-in">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold">Chennai's Leading Business Solutions Provider</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-up">
                  <span className="gradient-text">Innovate. Empower. Excel.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-white font-semibold animate-slide-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                  Empowering businesses with Tally solutions and professional soft skills training.
                </p>
                <p className="text-lg md:text-xl mb-8 text-white/95 font-medium animate-slide-in-up drop-shadow-lg" style={{ animationDelay: '0.3s' }}>
                  Led by <strong className="text-white font-bold">Samshul Millath</strong> - Tally Implementation & Training Expert with <strong className="text-white font-bold">15+ Years</strong> of Experience
                </p>
                <div className="flex flex-wrap justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                  <Button asChild size="lg" variant="cta" className="text-lg px-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <NavLink to="/contact">Get Started <ArrowRight className="ml-2 w-5 h-5" /></NavLink>
                  </Button>
                  <Button asChild size="lg" variant="call" className="text-lg px-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                    <NavLink to="/contact">Contact Us</NavLink>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iaHNsKDI2MiA4MyUgNTglIC8gMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30" style={servicesParallax.style}></div>
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="fade" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-blue-gradient text-white px-6 py-3 rounded-full mb-4 shadow-lg animate-scale-in">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold">Complete Business Solutions</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Transform Your Business & People
                </h2>
                <p className="text-xl text-gray-800 font-medium max-w-3xl mx-auto">
                  From software solutions to skills development, we provide everything you need to grow and succeed. 
                  Our comprehensive approach ensures both your technology and team are optimized for maximum performance.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                const colorClass = service.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' 
                  : service.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20'
                  : 'bg-accent/10 group-hover:bg-accent/20';
                const iconColor = service.color === 'primary' ? 'text-primary' 
                  : service.color === 'secondary' ? 'text-secondary'
                  : 'text-accent';
                
                const gradientBg = service.color === 'primary' ? 'bg-gradient-to-br from-blue-50 to-blue-100/50' 
                  : service.color === 'secondary' ? 'bg-gradient-to-br from-orange-50 to-pink-50'
                  : 'bg-gradient-to-br from-teal-50 to-cyan-50';
                const iconGradient = service.color === 'primary' ? 'bg-blue-gradient' 
                  : service.color === 'secondary' ? 'bg-coral-gradient'
                  : 'bg-teal-gradient';
                
                return (
                  <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 cursor-pointer animate-fade-in ${gradientBg} border-blue-200/30 hover:border-blue-400/50`} style={{animationDelay: `${index * 0.1}s`}}>
                    <NavLink to={service.link} className="block">
                      <CardHeader>
                        <div className={`mb-4 w-16 h-16 rounded-2xl ${iconGradient} flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4 text-gray-700">{service.description}</CardDescription>
                        <div className="flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
        <section className="py-20 bg-sunset-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" style={successParallax.style}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in ring-4 ring-white/50 parallax">
                  <img src={teamSuccess} alt="NnovityWorks team empowering Chennai businesses with Tally solutions and soft skills training" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-cyan-800/50 to-transparent" />
                </div>
                <div className="space-y-6 animate-fade-in text-white">
                  <h2 className="text-4xl font-bold">Empowering Chennai Businesses Since Inception</h2>
                  <p className="text-lg text-white/90">
                    We've helped hundreds of organizations streamline their operations with cutting-edge software 
                    and develop their workforce through world-class training programs.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/30">
                      <div className="text-4xl font-bold text-white mb-2">500+</div>
                      <div className="text-sm text-white/90">Happy Clients</div>
                    </div>
                    <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/30">
                      <div className="text-4xl font-bold text-white mb-2">10K+</div>
                      <div className="text-sm text-white/90">Training Hours</div>
                    </div>
                  </div>
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 shadow-xl transition-all duration-300 hover:shadow-2xl font-bold">
                    <NavLink to="/about">Our Story <ArrowRight className="ml-2" /></NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 bg-gradient-to-b from-teal-50 via-blue-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(180,100%,50%,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">How We Transform Your Business</h2>
                <p className="text-xl text-gray-800 font-medium max-w-3xl mx-auto">
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
                  const stepGradients = [
                    'bg-gradient-to-br from-blue-500 to-blue-600',
                    'bg-gradient-to-br from-cyan-500 to-cyan-600',
                    'bg-gradient-to-br from-teal-500 to-teal-600',
                    'bg-gradient-to-br from-blue-600 to-blue-700',
                  ];
                  
                  return (
                    <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/80 backdrop-blur-sm border-2 border-gray-200/50" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardHeader>
                        <div className={`mx-auto mb-4 w-16 h-16 rounded-full ${stepGradients[index]} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`text-5xl font-bold bg-gradient-to-r ${stepGradients[index]} bg-clip-text text-transparent mb-2`}>{phase.step}</div>
                        <CardTitle className="text-lg text-gray-800">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">{phase.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Channel Partners */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,91%,60%,0.05)_25%,rgba(217,91%,60%,0.05)_50%,transparent_50%,transparent_75%,rgba(217,91%,60%,0.05)_75%)] bg-[length:20px_20px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Trusted Partners</h2>
                <p className="text-xl text-gray-800 font-medium max-w-2xl mx-auto">
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
                        <Card className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-300">
                          <CardContent className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
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

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-xl text-gray-800 font-medium leading-relaxed">
                To empower people and businesses with the right skills and systems to perform at their best.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-ocean-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in text-white">Why Choose NnovityWorks?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Trusted Tally Partner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Official Tally partner with certified expertise and genuine software licenses
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50" style={{animationDelay: "0.1s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-coral-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Experienced Trainers & Industry Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    15+ years of experience in Accounting & Business Automation Support
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50" style={{animationDelay: "0.2s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-teal-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Structured Professional Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Well-organized training programs and systematic business solutions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50" style={{animationDelay: "0.3s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Practical, Real-World Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Solutions that work in real business environments, not just theory
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50" style={{animationDelay: "0.4s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-coral-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Personalized Support & Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Tailored solutions and one-on-one support for your unique needs
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-white/95 backdrop-blur-sm border-2 border-white/50" style={{animationDelay: "0.5s"}}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-teal-gradient flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-800">Reliable Service You Can Count On</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Consistent, dependable service with ongoing support and maintenance
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "NnovityWorks helped streamline our accounting with Tally and trained our staff with clarity."
                    </p>
                    <p className="text-sm font-semibold text-foreground">- Satisfied Client</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Professional training that improved team communication and productivity."
                    </p>
                    <p className="text-sm font-semibold text-foreground">- Corporate Client</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Reliable support and excellent service."
                    </p>
                    <p className="text-sm font-semibold text-foreground">- Business Owner</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About NnovityWorks */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">About NnovityWorks</h2>
              </div>
              <Card className="border-2 border-blue-200/50 bg-white/90 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>
                      At NnovityWorks, we blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
                    </p>
                    <p>
                      We specialize in <strong>Tally Software Sales & Support</strong> and <strong>Soft Skills Training</strong>, offering practical solutions that improve both operational performance and human capability.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button asChild className="bg-hero-gradient hover:opacity-90">
                        <NavLink to="/about">Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></NavLink>
                      </Button>
                      <Button asChild variant="outline">
                        <NavLink to="/contact">Contact Us</NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Samshul Millath */}
        <section className="py-20 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">About the Founder</h2>
                <p className="text-xl text-gray-700 font-semibold">
                  Samshul Millath - Tally Implementation & Training Expert
                </p>
              </div>
              <Card className="border-2 border-blue-200/50 bg-white/90 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-32 h-32 rounded-full bg-blue-gradient flex items-center justify-center flex-shrink-0 shadow-xl ring-4 ring-blue-200/50">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Samshul Millath</h3>
                        <p className="text-lg text-primary mb-3 font-semibold">Tally Implementation & Training Expert (Tally & SoftSkills)</p>
                        <div className="space-y-3 text-muted-foreground mb-4">
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
                        </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Skills or Streamline Your Business Systems?</h2>
            <p className="text-xl mb-10 text-accent-foreground font-medium max-w-3xl mx-auto">
              Get in touch with NnovityWorks today. We blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8 shadow-2xl">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 shadow-2xl">
                <NavLink to="/contact">Request a Demo</NavLink>
              </Button>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 shadow-2xl">
                <NavLink to="/softskills-training">Enroll Now</NavLink>
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
