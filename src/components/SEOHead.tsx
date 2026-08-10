import { Helmet } from "react-helmet";
import SEO_CONFIG from "@/config/seo.config";

type PageKey = keyof typeof SEO_CONFIG.pages;

type SEOHeadProps = {
  page: PageKey;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

const SEOHead = ({
  page,
  title,
  description,
  keywords,
  image,
  type = "website",
  jsonLd,
  noIndex = false,
}: SEOHeadProps) => {
  const meta = SEO_CONFIG.pages[page];
  const finalTitle = title || meta.title;
  const finalDescription = description || meta.description;
  const finalKeywords = keywords || meta.keywords;
  const url = `${SEO_CONFIG.site.url}${meta.path === "/" ? "" : meta.path}`;
  const ogImage = image || SEO_CONFIG.site.defaultImage;

  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="NnovityWorks - Mr. Samshul Millath" />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0827;80.2707" />
      <meta name="ICBM" content="13.0827, 80.2707" />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SEO_CONFIG.site.locale} />
      <meta property="og:site_name" content={SEO_CONFIG.site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={url} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
