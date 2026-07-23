import { Download, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import SEO from '@/components/SEO';

const ApplicationsPage = () => {
  const applications = projects
    .filter(p => p.isApplication)
    .map(p => ({
      id: p.id,
      name: p.title,
      description: p.description,
      version: p.version || '',
      size: p.size || 'Live Website',
      liveUrl: p.liveUrl || '',
      downloadUrl: p.downloadUrl || '',
      icon: p.icon || null,
    }));

  return (
    <div className="min-h-screen pt-20 pb-12">
      <SEO
        title="Applications & Browser Extensions | Sagar Rai"
        description="Download and explore the custom macOS apps, tools, and browser extensions built by Sagar Rai."
        url="https://sagarrai.tech/applications"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Applications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Download and explore the browser extensions and tools I've built.
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
              <div
                key={app.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  {app.icon ? (
                    <img 
                      src={app.icon} 
                      alt={app.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{app.name}</h3>
                    {app.version && <p className="text-sm text-muted-foreground">v{app.version}</p>}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">{app.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{app.size}</span>
                </div>

                {app.liveUrl ? (
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live App
                  </a>
                ) : (
                  <a
                    href={app.downloadUrl}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Download App
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            Have questions about an app? Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
