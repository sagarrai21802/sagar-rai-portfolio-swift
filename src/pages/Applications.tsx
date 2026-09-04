import { Download, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import SEO from '@/components/SEO';
import LiquidGlassCard from '@/components/ui/LiquidGlassCard';

const ApplicationsPage = () => {
  const navigate = useNavigate();

  const applications = projects
    .filter(p => p.isApplication)
    .map(p => ({
      id: p.id,
      name: p.title,
      version: p.version || '',
      size: p.size || 'Live Application',
      liveUrl: p.liveUrl || '',
      downloadUrl: p.downloadUrl || '',
      icon: p.icon || null,
      tech: p.tech || [],
    }));

  return (
    <div className="min-h-screen pt-32 pb-16 bg-background">
      <SEO
        title="Applications & Browser Extensions | Sagar Rai"
        description="Download and explore the custom applications, tools, and browser extensions built by Sagar Rai."
        url="https://sagarrai.tech/applications"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Applications & Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover applications, browser extensions, and software platforms.
          </p>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No applications available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <LiquidGlassCard
                key={app.id}
                variant="light"
                hoverLift={true}
                onClick={() => navigate(`/projects/${app.id}`)}
                className="p-6 border border-white/10 dark:border-white/10 shadow-glass flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Top Header: Icon & Metadata */}
                  <div className="flex items-center gap-4 mb-4">
                    {app.icon ? (
                      <img 
                        src={app.icon} 
                        alt={app.name}
                        loading="lazy"
                        decoding="async"
                        className="w-14 h-14 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-200 border border-white/10"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors duration-200">
                        <FileText className="w-7 h-7 text-primary" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-display font-bold text-foreground truncate group-hover:text-primary transition-colors">
                        {app.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {app.version && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                            v{app.version}
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground font-medium truncate">
                          {app.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-white/10 dark:border-white/5 mt-2" onClick={(e) => e.stopPropagation()}>
                  {app.liveUrl ? (
                    <a
                      href={app.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 w-full text-sm font-bold shadow-md"
                    >
                      <ExternalLink className="w-4 h-4 text-white stroke-[2.5]" />
                      <span className="text-white font-bold">View Live App</span>
                    </a>
                  ) : app.downloadUrl ? (
                    <a
                      href={app.downloadUrl}
                      download
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 w-full text-sm font-bold shadow-md"
                    >
                      <Download className="w-4 h-4 text-white stroke-[2.5]" />
                      <span className="text-white font-bold">Download App</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(`/projects/${app.id}`)}
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 w-full text-sm font-bold shadow-md"
                    >
                      <ExternalLink className="w-4 h-4 text-white stroke-[2.5]" />
                      <span className="text-white font-bold">View Details</span>
                    </button>
                  )}
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        )}

        <div className="mt-14 pt-8 border-t border-border/50 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4" />
            Have questions about an application? Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
