import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, Cpu, ShieldCheck, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import FAQ from '@/components/FAQ';
import { projects } from '@/data/projects';
import LiquidGlassCard from '@/components/ui/LiquidGlassCard';

export default function IOSDevelopmentPage() {
  const navigate = useNavigate();

  // Filter iOS / Swift projects
  const iosProjects = projects.filter(p => 
    p.tech.some(t => ['swift', 'swiftui', 'uikit', 'ios'].includes(t.toLowerCase())) ||
    p.id.includes('duneshine') || p.id === 'dobbie' || p.id === 'todoey' || p.id === 'hackernews'
  ).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "iOS Native App Development Services",
    "provider": {
      "@type": "Person",
      "name": "Sagar Rai",
      "url": "https://sagarrai.tech"
    },
    "areaServed": ["Dubai", "Worldwide"],
    "description": "High-performance native iOS app development using Swift, SwiftUI, and UIKit with MVVM architecture, Core Data/Realm local persistence, and App Store optimization.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "iOS Development Offerings",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SwiftUI & UIKit App Architecture" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Store CI/CD & Publishing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Optimization & Profiling" } }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <SEO
        title="Native iOS App Development Services | Swift & SwiftUI Engineer - Sagar Rai"
        description="Hire Sagar Rai for expert native iOS app development using Swift, SwiftUI, and UIKit. Delivering 99.7% uptime, MVVM architecture, and App Store release management."
        url="https://sagarrai.tech/services/ios-development"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back Link */}
        <button
          onClick={() => navigate('/projects')}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <Zap className="w-4 h-4" />
            iOS Engineering Services
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-tight mb-6">
            Native iOS App Development in Swift & SwiftUI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I build high-performance, production-ready native iOS applications engineered for sub-200ms latency, zero-crash reliability, and App Store success.
          </p>
        </div>

        {/* Technical Deep Dive Grid */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Technical Architecture & Deep Dive
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">MVVM & Structured Concurrency</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clean separation of business logic using Swift's async/await, Combine, and strict unidirectional data flow for high testability and maintainability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Offline Data Persistence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Implementation of Core Data, Realm, and Keychain security ensuring 100% data integrity, offline access, and fast cache revalidation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/5 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl w-fit text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Instruments & Memory Profiling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rigorous memory leak detection, CPU profiling with Xcode Instruments, and rendering optimizations for 60fps/120fps Fluid UI responsiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Portfolio Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Featured iOS Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {iosProjects.map(project => (
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

        {/* Client Outcomes & Impact */}
        <div className="mb-20 p-10 rounded-3xl bg-[#111111] dark:bg-[#0a0a0a] border border-white/10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Proven Client Outcomes & Metrics
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-4 border-r border-white/10 last:border-0">
              <p className="text-4xl font-extrabold text-primary font-display">$300k+</p>
              <p className="text-sm text-muted-foreground mt-2">Saved client build pipelines by resolving Git dependency conflicts</p>
            </div>
            <div className="p-4 border-r border-white/10 last:border-0">
              <p className="text-4xl font-extrabold text-primary font-display">&lt; 200ms</p>
              <p className="text-sm text-muted-foreground mt-2">API latency achieved across production news feed and booking apps</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-extrabold text-primary font-display">99.7%</p>
              <p className="text-sm text-muted-foreground mt-2">Uptime maintained for native real-time sync systems</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
}
