import Navigation from "@/components/Navigation";
import SEOHead from "@/components/SEOHead";
import RelatedServices from "@/components/RelatedServices";
import SEO_CONFIG from "@/config/seo.config";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactForm from "@/components/ContactForm";
import { BrightHero } from "@/components/BrightUI";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Contact = () => {
  return (
    <>
      <SEOHead
        page="contact"
        jsonLd={[
          SEO_CONFIG.structuredData.organization,
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact NnovityWorks Chennai",
            mainEntity: SEO_CONFIG.structuredData.organization,
          },
        ]}
      />

      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ]} />
      <Navigation />
      <WhatsAppFloat />

      <main className="page-enter">
        <BrightHero
          eyebrow="Contact"
          title="Get in Touch"
          description="Have questions about our services? We're here to help you find the right solution."
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-1">
                <Card className="rounded-[1.5rem] border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">Contact Information</CardTitle>
                    <CardDescription>Reach out through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-3 border-b border-border pb-4">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          13, 1st Main Road, R.V. Nagar, Block 1, Anna Nagar East, Chennai - 600102
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-b border-border pb-4">
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919841115769" className="mt-1 block text-sm text-muted-foreground hover:text-primary">
                          +91 98411 15769
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 border-b border-border pb-4">
                      <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:smillath@nnovityworks.com" className="mt-1 block break-all text-sm text-muted-foreground hover:text-primary">
                          smillath@nnovityworks.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Mon - Sat: 9:00 AM - 6:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-[1.5rem] border-border bg-muted/40 shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Quick Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all enquiries within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="rounded-[1.75rem] border-border shadow-md">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-display text-3xl font-semibold md:text-4xl">Find Us in Chennai</h2>
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=13,1st+Main+Road,R.V.Nagar,Block+1,+Anna+Nagar+East,chennai-600102&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="NnovityWorks Location"
                />
              </div>
              <div className="mt-6 space-y-4 text-center">
                <p className="text-muted-foreground">
                  13, 1st Main Road, R.V. Nagar, Block 1, Anna Nagar East, Chennai - 600102
                </p>
                <a
                  href="https://maps.app.goo.gl/Wti9D7waUN8LYSFc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
                >
                  <MapPin className="h-5 w-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <RelatedServices exclude={["/contact"]} title="Browse services while you wait" />


      <Footer />
    </>
  );
};

export default Contact;
