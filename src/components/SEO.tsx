import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO_KEYWORDS, getPersonSchema, getProfessionalServiceSchema } from '@/data/seoKeywords';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  keywords?: string[];
}

export default function SEO({ 
  title, 
  description, 
  name = 'Sagar Rai', 
  type = 'website', 
  url = 'https://sagarrai.tech', 
  image = 'https://sagarrai.tech/sagar-rai-ios-developer-og.jpeg',
  keywords = DEFAULT_SEO_KEYWORDS
}: SEOProps) {
  const personSchema = getPersonSchema();
  const serviceSchema = getProfessionalServiceSchema();

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />

      {/* OpenGraph tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={name} />

      {/* Twitter tags */}
      <meta name='twitter:creator' content='@sagarrai' />
      <meta name='twitter:card' content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* JSON-LD Schema Injection for Search Engines & AI Crawlers */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}
