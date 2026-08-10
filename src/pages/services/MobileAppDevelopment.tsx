import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Smartphone, ShieldCheck, Layers, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { projects } from '@/data/projects';
import LiquidGlassCard from '@/components/ui/LiquidGlassCard';

export default function MobileAppDevelopmentPage() {
  const navigate = useNavigate();

  const mobileProjects = projects.filter(p => 
    p.isApplication || p.id.includes('duneshine') || p.id === 'dobbie'
  ).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile App Development Services (iOS & Android)",
    "provider": {
      "@type": "Person",
      "name": "Sagar Rai",
      "url": "https://sagarrai.tech"
    },
    "areaServed": ["Dubai", "Worldwide"],
    "description": "Full-lifecycle mobile app development for iOS and Android platforms, including Flutter WebView shells, React Native, and native Kotlin bridges.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Development Offerings",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cross-Platform & Hybrid Mobile Apps" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Play Console & App Store Deployment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-time Push Notifications & Tracking" } }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <SEO
        title="Mobile App Development Services (iOS & Android) - Sagar Rai"
        description="Hire Sagar Rai for mobile app development services across iOS, Android, and cross-platform hybrid apps (Flutter, React Native, SwiftUI). Published on Google Play and App Store."
        url="https://sagarrai.tech/services/mobile-app-development"
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
            <Smartphone className="w-4 h-4" />
            Mobile Engineering Services
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-tight mb-6">
            End-to-End Mobile App Development (iOS & Android)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From native Swift & Kotlin codebases to cross-platform WebView bridges, I build mobile applications published on the App Store and Google Play Console.
          </p>
        </div>

        {/* Technical Deep Dive */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Technical Architecture & Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Hybrid & WebView Bridges</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expertise wrapping high-speed Next.js web applications into Flutter and Kotlin mobile shells with native safe area handling and back-button navigation guards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Real-Time Sync & Notifications</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Integration of Firebase Realtime Database, Firestore, WebSockets, and FCM/APNs push notification pipelines for live order & service status updates.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">App Store & Play Store Publishing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Complete management of app submission pipelines, TestFlight distribution, Google Play Console requirements, privacy compliance, and store metadata.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Mobile Portfolio */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Featured Mobile Applications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mobileProjects.map(project => (
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
