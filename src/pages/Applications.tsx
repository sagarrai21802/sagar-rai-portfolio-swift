import { Download, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationsPage = () => {
  const applications = [
    {
      id: 'ocr-extension',
      name: 'OCR AutoFill Extension',
      description: 'A Chrome extension that extracts structured text from JPG images using Tesseract OCR and automatically fills 16 predefined text fields in ASP.NET WebForms pages.',
      version: '2.2.0',
      size: '1.8 MB',
      downloadUrl: '/apps/ocr-extension/ocr-extension-v2.2.0.zip',
      icon: '/apps/ocr-extension/icon128.png',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
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
                    <p className="text-sm text-muted-foreground">v{app.version}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">{app.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{app.size}</span>
                </div>

                <a
                  href={app.downloadUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </a>
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
