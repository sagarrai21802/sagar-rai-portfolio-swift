import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Globe, Server, Gauge, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { projects } from '@/data/projects';
import LiquidGlassCard from '@/components/ui/LiquidGlassCard';

export default function WebDevelopmentPage() {
  const navigate = useNavigate();

  const webProjects = projects.filter(p => 
    p.tech.some(t => ['next.js 16', 'react', 'fastapi', 'javascript', 'python', 'tailwind css'].includes(t.toLowerCase())) ||
    p.id === 'kahaniyan' || p.id === 'visionassist' || p.id === 'ticket-booking' || p.id === 'ocr-autofill'
  ).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Stack Web & SaaS Engineering Services",
    "provider": {
      "@type": "Person",
      "name": "Sagar Rai",
      "url": "https://sagarrai.tech"
    },
    "areaServed": ["Dubai", "Worldwide"],
    "description": "High-speed full-stack web development using Next.js App Router, React, TypeScript, FastAPI (Python), and technical SEO optimizations for sub-1.4s render speeds.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Offerings",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js SSR & Server Components Architecture" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FastAPI & Python RESTful API Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical SEO, GEO, & AEO Optimization" } }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <SEO
        title="Full-Stack Web Development & SaaS Engineering (Next.js & Python) - Sagar Rai"
        description="Hire Sagar Rai for full-stack web development services using Next.js App Router, React, Tailwind CSS, FastAPI, and technical SEO/AEO optimizations for maximum speed."
        url="https://sagarrai.tech/services/web-development"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/projects')}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Globe className="w-4 h-4" />
            Full-Stack Web Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-tight mb-6">
            Full-Stack Web & SaaS Development (Next.js & Python)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I design and build ultra-fast, SEO-optimized web applications with modern Next.js Server Components, FastAPI backends, and responsive UI systems.
          </p>
        </div>

        {/* Technical Deep Dive */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Technical Architecture & Deep Dive
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Next.js SSR & Server Components</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizing Next.js App Router for Server-Side Rendering (SSR) and Static Site Generation (SSG), delivering pre-rendered HTML straight to search engines and visitors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">FastAPI & Python Microservices</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building scalable RESTful APIs with Python FastAPI and Uvicorn, integrated with Firestore, PostgreSQL, and Cloudinary for high-concurrency throughput.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Technical SEO & AEO Optimizations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Implementation of JSON-LD schemas, automated sitemap.xml, robots.txt, and render latency optimizations targeting &lt;1.4s load times and 95+ Lighthouse scores.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Web Portfolio */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Featured Web Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {webProjects.map(project => (
              <LiquidGlassCard
                key={project.id}
                variant="light"
                onClick={() => navigate(`/projects/${project.id}`)}
                className="p-6 cursor-pointer hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
}
