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
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Index = () => {
  const [currentHeroImage, setCurrentHeroImage] = React.useState(0);
  const heroImages = [heroTally, heroSoftskills, heroCRM, heroERP, heroHRMS];
  const heroParallax = useParallaxTransform(0.3);
  const servicesParallax = useParallaxTransform(0.2);
  const successParallax = useParallaxTransform(0.25);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const allServices = [
    {
      icon: Briefcase,
      title: "Tally Prime Software Sales & Licensing",
      description: "Official Tally Prime licenses with version recommendations based on business needs. Fast onboarding and setup.",
      link: "/tally-sales",
      gradient: "from-blue-600 via-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Tally Prime Support & AMC",
      description: "Installation & Implementation, Troubleshooting & error fixing, Annual maintenance and priority support, Online & Onsite support",
      link: "/tally-support",
      gradient: "from-violet-600 via-purple-500 to-fuchsia-500"
    },
    {
      icon: Cloud,
      title: "Tally Prime on Cloud",
      description: "Cloud access services provides a powerful option for businesses to access TallyPrime from anywhere.",
      link: "/tally-support",
      gradient: "from-cyan-600 via-teal-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Tally Prime on Mobile Application",
      description: "Stay connected to your business. Always. Track your business anytime, anywhere.",
      link: "/tally-support",
      gradient: "from-orange-600 via-amber-500 to-yellow-500"
    },
    {
      icon: Sparkles,
      title: "Tally Prime Customization Services",
      description: "Addressing Specific Business requirements for reporting and ease of data posting through Customization & Cross Platform Automatic API based Data Porting services.",
      link: "/tally-support",
      gradient: "from-pink-600 via-rose-500 to-red-500"
    },
    {
      icon: GraduationCap,
      title: "Tally Prime & MS-Office Training",
      description: "Training for individuals, students, and professionals. Corporate Tally Prime training for accounting teams. MS-Office Training for Office Teams, Jobseekers & Students. Practical, hands-on session.",
      link: "/training",
      gradient: "from-indigo-600 via-blue-500 to-sky-500"
    },
    {
      icon: Users,
      title: "Soft Skills Training",
      description: "Communication skills, Positive Mental Attitude, Personality Development, Public Speaking, Time management & productivity, Leadership & teamwork, Workplace behavior, The Prevention of Sexual Harassment (PoSH) Training at Workplace",
      link: "/softskills-training",
      gradient: "from-emerald-600 via-green-500 to-lime-500"
    },
    {
      icon: Briefcase,
      title: "Corporate Training Programs",
      description: "Customized workshops focused on performance, communication, and professional development.",
      link: "/softskills-training",
      gradient: "from-purple-600 via-violet-500 to-indigo-500"
    },
  ];

  return (
    <>
      <Helmet>
        <title>NnovityWorks - Innovate. Empower. Excel. | Tally Prime Solutions & Soft Skills Training Chennai</title>
        <meta name="description" content="Best Tally Prime service provider & soft skills trainer in Chennai, Anna Nagar. Mr. Samshul Millath offers Tally Prime sales, support, cloud, training & corporate soft skills training. 15+ years expert experience." />
        
        <meta name="keywords" content="NnovityWorks, Tally Prime Chennai, Tally Prime Anna Nagar, soft skills training Chennai, soft skills training Anna Nagar, corporate training Chennai, best Tally Prime service provider Chennai, best soft skills trainer Chennai, Mr. Samshul Millath, Tally Prime training Chennai, Tally Prime support Chennai" />
        <link rel="canonical" href="https://nnovityworks.com" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nnovityworks.com" />
        <meta property="og:title" content="NnovityWorks - Innovate. Empower. Excel. | Tally Prime Solutions & Soft Skills Training Chennai" />
        <meta property="og:description" content="NnovityWorks empowers businesses with Tally Prime solutions and professional soft skills training. Led by Mr. Samshul Millath, 15+ years experienced Tally Prime Implementation & Training Expert." />
        <meta property="og:image" content="https://nnovityworks.com/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="NnovityWorks" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://nnovityworks.com" />
        <meta name="twitter:title" content="NnovityWorks - Innovate. Empower. Excel." />
        <meta name="twitter:description" content="Tally Prime Solutions & Soft Skills Training in Chennai. Led by Mr. Samshul Millath, 15+ years experienced expert." />
        <meta name="twitter:image" content="https://nnovityworks.com/twitter-image.jpg" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="NnovityWorks - Mr. Samshul Millath" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        
        {/* Enhanced Structured Data for Rich Results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NnovityWorks",
            "url": "https://nnovityworks.com",
            "logo": "https://nnovityworks.com/logo5.jpg",
            "description": "Leading Tally Prime Solutions & Professional Soft Skills Training provider in Chennai. Expert services by Mr. Samshul Millath with 15+ years experience.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600102",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98411-15769",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": "English"
            },
            "founder": {
              "@type": "Person",
              "name": "Mr. Samshul Millath",
              "jobTitle": "Tally Prime Implementation & Training Expert",
              "description": "15+ years experienced in Accounting & Business Automation Support. ACTD & UKIQ Certified Soft Skills Trainer."
            },
            "sameAs": [
              "https://www.facebook.com/nnovityworks",
              "https://www.linkedin.com/company/nnovityworks"
            ]
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NnovityWorks",
            "image": "https://nnovityworks.com/og-image.jpg",
            "@id": "https://nnovityworks.com",
            "url": "https://nnovityworks.com",
            "telephone": "+91-98411-15769",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13,1st Main Road,R.V.Nagar,Block 1, Anna Nagar East",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600102",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.0827,
              "longitude": 80.2707
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
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
            "@type": "WebSite",
            "name": "NnovityWorks",
            "url": "https://nnovityworks.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://nnovityworks.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>


      <BreadcrumbSchema items={[
    { name: "Home", url: "/" }
  ]} />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .card-glow {
          position: relative;
          overflow: hidden;
        }
        
        .card-glow::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .card-glow:hover::before {
          opacity: 1;
        }
        
        .stat-card {
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .stat-card:hover::after {
          opacity: 1;
        }
      `}</style>

      <Navigation />

      <main className="overflow-hidden">
        {/* Hero Section - Premium Design */}
        <section className="relative min-h-[80vh] md:min-h-screen flex items-center text-white overflow-hidden">
          {/* Dynamic Background with Smooth Transitions */}
          <div className="absolute inset-0" style={heroParallax.style}>
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                  index === currentHeroImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img
                  src={image}
                  alt={`Hero background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-cyan-900/85"></div>
              </div>
            ))}
          </div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-12 md:py-16 lg:py-24">
            <ScrollReveal direction="fade" delay={0}>
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Text Content */}
                  <div className="text-center lg:text-left space-y-4 md:space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-3 glass-morphism px-6 py-3 rounded-full animate-pulse-slow">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Chennai's Leading Business Solutions Provider
                      </span>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                      <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent text-shadow-glow gradient-animate">
                        Innovate.
                      </span>
                      <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent text-shadow-glow gradient-animate" style={{animationDelay: '2s'}}>
                        Empower.
                      </span>
                      <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent text-shadow-glow gradient-animate" style={{animationDelay: '4s'}}>
                        Excel.
                      </span>
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-sm md:text-base font-bold text-white/95 leading-relaxed">
                      Empowering businesses with{' '}
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Tally Prime solutions
                      </span>{' '}
                      and{' '}
                      <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        professional soft skills training
                      </span>
                    </p> Learn more about <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">contact NnovityWorks</a>.
                    
                    {/* Expert Info */}
                    <div className="glass-morphism p-6 rounded-2xl inline-block">
                      <p className="text-sm md:text-base text-white/90 mb-2">
                        Led by <span className="font-black text-sm md:text-base bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Mr. Samshul Millath</span>
                      </p>
                      <p className="text-cyan-300 text-sm md:text-base font-semibold">
                        Tally Prime expert and corporate trainer with 15+ years of experience
                      </p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                      <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 border-0 font-bold">
                        <NavLink to="/contact">
                          Get Started 
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </NavLink>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 font-bold">
                        <NavLink to="/contact">
                          Contact Us
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Right Side - Tally Prime Logo Frame */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      
                      {/* Card */}
                      <div className="relative glass-morphism rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                        <div className="bg-white rounded-2xl p-6 shadow-2xl">
                          <img 
                            src="/tallylogonew.png" 
                            alt="Tally Prime Logo - Power of Simplicity - Chennai, Anna Nagar" 
                            className="w-full h-auto max-w-[500px] object-contain"
                          />
                        </div>
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 rounded-3xl animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Overview - Modern Card Design */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.05)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal direction="fade" delay={0}>
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-base font-bold">Complete Business Solutions</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent leading-tight">
                  Transform Your Business & People
                </h2>
                <p className="text-sm md:text-base text-slate-700 font-medium max-w-4xl mx-auto leading-relaxed">
                  From software solutions to skills development, we provide everything you need to grow and succeed. 
                  Our comprehensive approach ensures both your technology and team are optimized for maximum performance.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                
                return (
                  <Card key={index} className="group hover-lift card-glow border-0 shadow-xl hover:shadow-2xl bg-white overflow-hidden" style={{animationDelay: `${index * 0.05}s`}}>
                    <NavLink to={service.link} className="block h-full">
                      {/* Gradient Top Bar */}
                      <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                      
                      <CardHeader className="space-y-4 pb-4">
                        {/* Icon with Gradient Background */}
                        <div className="relative">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        </div>
                        
                        <CardTitle className="text-base md:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base text-slate-600 leading-relaxed line-clamp-4">
                          {service.description}
                        </CardDescription>
                        
                        <div className={`flex items-center font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}>
                          Learn More 
                          <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
                        </div>
                      </CardContent>
                    </NavLink>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Success Image Section - Split Design */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.2)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <div className="relative group">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={teamSuccess} 
                      alt="NnovityWorks team empowering Chennai businesses"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-blue-900/40 to-transparent" />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-8 left-8 right-8 glass-morphism p-6 rounded-2xl">
                      <p className="text-white font-bold text-sm md:text-base">Trusted by 500+ Businesses</p>
                      <p className="text-cyan-300">Across Chennai and Tamil Nadu</p>
                    </div>
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="space-y-4 md:space-y-6 text-white">
                  <div>
                    <div className="inline-block px-6 py-3 bg-cyan-500/20 rounded-full mb-6">
                      <span className="font-bold text-cyan-300">Our Impact</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">
                      Empowering Chennai Businesses 
                      <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Since Inception
                      </span>
                    </h2>
                    <p className="text-sm md:text-base text-white/90 leading-relaxed">
                      We've helped hundreds of organizations streamline their operations with cutting-edge software 
                      and develop their workforce through world-class training programs.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="stat-card glass-morphism p-8 rounded-2xl hover-lift cursor-pointer">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                        500+
                      </div>
                      <div className="text-sm md:text-base font-semibold text-white/90">Happy Clients</div>
                      <div className="text-sm text-white/70 mt-1">Across Industries</div>
                    </div>
                    
                    <div className="stat-card glass-morphism p-8 rounded-2xl hover-lift cursor-pointer">
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                        10K+
                      </div>
                      <div className="text-sm md:text-base font-semibold text-white/90">Training Hours</div>
                      <div className="text-sm text-white/70 mt-1">Delivered</div>
                    </div>
                    
                    <div className="stat-card glass-morphism p-8 rounded-2xl hover-lift cursor-pointer">
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
                        15+
                      </div>
                      <div className="text-sm md:text-base font-semibold text-white/90">Years Experience</div>
                      <div className="text-sm text-white/70 mt-1">Industry Expertise</div>
                    </div>
                    
                    <div className="stat-card glass-morphism p-8 rounded-2xl hover-lift cursor-pointer">
                      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-3">
                        100%
                      </div>
                      <div className="text-sm md:text-base font-semibold text-white/90">Satisfaction</div>
                      <div className="text-sm text-white/70 mt-1">Guaranteed</div>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-white text-slate-900 hover:bg-white/90 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 font-bold">
                    <NavLink to="/about">
                      Our Story 
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help - Process Timeline */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  How We Transform Your Business
                </h2>
                <p className="text-sm md:text-base text-slate-600 font-medium max-w-3xl mx-auto">
                  Our proven 4-step process ensures successful implementation and lasting results
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                {/* Connection Line - Desktop Only */}
                <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200"></div>
                
                {[
                  { 
                    step: "01", 
                    title: "Consultation", 
                    description: "We understand your unique business needs and challenges through in-depth analysis",
                    icon: Target,
                    gradient: "from-blue-600 to-blue-400"
                  },
                  { 
                    step: "02", 
                    title: "Solution Design", 
                    description: "Tailored software and training solutions designed specifically for your requirements",
                    icon: Sparkles,
                    gradient: "from-cyan-600 to-cyan-400"
                  },
                  { 
                    step: "03", 
                    title: "Implementation", 
                    description: "Expert setup, configuration, and comprehensive hands-on training for your team",
                    icon: Settings,
                    gradient: "from-teal-600 to-teal-400"
                  },
                  { 
                    step: "04", 
                    title: "Ongoing Support", 
                    description: "Continuous assistance and maintenance to ensure your long-term success",
                    icon: CheckCircle2,
                    gradient: "from-emerald-600 to-emerald-400"
                  },
                ].map((phase, index) => {
                  const Icon = phase.icon;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Step Number Badge - Top Left */}
                      <div className="absolute -top-3 -left-3 z-30">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg border-2 border-white`}>
                          <span className="text-white font-black text-sm md:text-base leading-none">{phase.step}</span>
                        </div>
                      </div>
                      
                      <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-visible pt-4">
                        <CardHeader className="text-center pt-8 pb-4">
                          <div className={`mx-auto mb-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110`}>
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                          <CardTitle className="text-base md:text-lg font-bold text-slate-900 mb-2">{phase.title}</CardTitle>
                        </CardHeader>
                        
                        <CardContent className="text-center pb-6">
                          <CardDescription className="text-sm md:text-base text-slate-600 leading-relaxed">
                            {phase.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Channel Partners - Premium Carousel */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full mb-6 font-bold">
                Trusted Partnerships
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Our Trusted Partners
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-medium max-w-2xl mx-auto">
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
                    { logo: tallyLogo, name: "Tally Prime" },
                    { logo: awsLogo, name: "AWS" },
                    { logo: bizanalystLogo, name: "Biz Analyst" },
                    { logo: greytLogo, name: "Greyt" },
                    { logo: vtigerLogo, name: "Vtiger" },
                    { logo: pagarbookLogo, name: "Pagarbook" },
                  ].map((partner, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-4">
                        <Card className="hover-lift bg-white border-0 shadow-lg hover:shadow-2xl overflow-hidden group">
                          <CardContent className="flex aspect-video items-center justify-center p-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} logo`}
                              className="max-h-24 max-w-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0"
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

        {/* Why Choose Us - Feature Grid */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-12 md:mb-16 text-white">
              Why Choose 
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
                NnovityWorks?
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Trusted Tally Prime Partner",
                  description: "Official Tally Prime partner with certified expertise and genuine software licenses",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Award,
                  title: "Experienced Trainers & Industry Experts",
                  description: "15+ years of experience in Accounting & Business Automation Support",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Target,
                  title: "Structured Professional Framework",
                  description: "Well-organized training programs and systematic business solutions",
                  gradient: "from-teal-500 to-emerald-500"
                },
                {
                  icon: Zap,
                  title: "Practical, Real-World Solutions",
                  description: "Solutions that work in real business environments, not just theory",
                  gradient: "from-orange-500 to-yellow-500"
                },
                {
                  icon: Users,
                  title: "Personalized Support & Guidance",
                  description: "Tailored solutions and one-on-one support for your unique needs",
                  gradient: "from-rose-500 to-red-500"
                },
                {
                  icon: CheckCircle2,
                  title: "Reliable Service You Can Count On",
                  description: "Consistent, dependable service with ongoing support and maintenance",
                  gradient: "from-indigo-500 to-blue-500"
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                
                return (
                  <Card key={index} className="group hover-lift glass-morphism border border-white/10 overflow-hidden" style={{animationDelay: `${index * 0.05}s`}}>
                    <CardHeader className="text-center space-y-4">
                      <div className="relative mx-auto">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                      </div>
                      <CardTitle className="text-base md:text-lg font-bold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center pb-8">
                      <CardDescription className="text-sm md:text-base text-white/80 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials - Modern Cards */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  Client Testimonials
                </h2>
                <p className="text-sm md:text-base text-slate-600 font-medium">
                  What our satisfied clients say about us
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    text: "NnovityWorks helped streamline our accounting with Tally Prime and trained our staff with clarity.",
                    author: "Satisfied Client",
                    role: "Business Owner"
                  },
                  {
                    text: "Professional training that improved team communication and productivity.",
                    author: "Corporate Client",
                    role: "HR Manager"
                  },
                  {
                    text: "Reliable support and excellent service.",
                    author: "Business Owner",
                    role: "CEO"
                  }
                ].map((testimonial, index) => (
                  <Card key={index} className="hover-lift bg-white border-0 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-base md:text-lg text-slate-600 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="pt-4 border-t border-slate-200">
                        <p className="font-bold text-base md:text-lg text-slate-900">{testimonial.author}</p>
                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Sections */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* About NnovityWorks */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                  About NnovityWorks
                </h2>
              </div>
              
              <Card className="hover-lift border-0 shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"></div>
                <CardContent className="p-12">
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                      At NnovityWorks, we blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
                    </p>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                      We specialize in <strong className="text-blue-600">Tally Prime Software Sales & Support</strong> and <strong className="text-cyan-600">Soft Skills Training</strong>, offering practical solutions that improve both operational performance and human capability.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-6">
                      <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
                        <NavLink to="/about">
                          Learn More About Us 
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </NavLink>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold">
                        <NavLink to="/contact">Contact Us</NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Founder */}
              <Card className="hover-lift border-0 shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500"></div>
                <CardContent className="p-12">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    <div className="relative group flex-shrink-0">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 p-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src="/millath.png" 
                          alt="Mr. Samshul Millath - Tally Prime Implementation & Training Expert"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 text-slate-900">Mr. Samshul Millath</h3>
                        <p className="text-lg md:text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold mb-6">
                          Tally Prime Implementation & Training Expert
                        </p>
                      </div>
                      
                      <div className="space-y-4 text-base md:text-lg text-slate-700">
                        <p>
                          <strong className="text-blue-600">15+ Years</strong> of highly experienced in Accounting & Business Automation Support.
                        </p>
                        <p>
                          Performing <strong className="text-cyan-600">TallyPrime Sales - Service - Training & Implementation</strong> projects.
                        </p>
                        <p>
                          Providing <strong className="text-teal-600">Simple & Systematic solutions</strong> for Accounting needs beyond boundaries.
                        </p>
                        <p>
                          Training <strong className="text-blue-600">1000+ Young minds</strong> for Tally Prime Accounting & Soft Skills from prestigious Educational institutions and <strong className="text-cyan-600">CSR & NGO Activities</strong>.
                        </p>
                      </div>
                      
                      <Button asChild size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
                        <NavLink to="/about">
                          Learn More About Us 
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold & Impactful */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px]"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-5xl mx-auto space-y-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                Ready to Upgrade Your Skills or Streamline Your Business Systems?
              </h2>
              
              <p className="text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-4xl mx-auto">
                Get in touch with NnovityWorks today. We blend technology and talent development to help individuals and businesses grow with clarity, efficiency, and confidence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-white text-blue-600 hover:bg-white/90 shadow-2xl hover:shadow-white/20 hover:scale-110 transition-all duration-300 font-black">
                  <NavLink to="/contact">
                    Contact Us
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </NavLink>
                </Button>
                
                <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 glass-morphism text-white border-2 border-white/50 hover:bg-white/10 hover:border-white shadow-2xl hover:scale-110 transition-all duration-300 font-black">
                  <NavLink to="/contact">Request a Demo</NavLink>
                </Button>
                
                <Button asChild size="lg" className="text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 font-black">
                  <NavLink to="/softskills-training">Enroll Now</NavLink>
                </Button>
              </div>
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