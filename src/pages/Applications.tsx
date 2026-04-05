import { Download, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationsPage = () => {
  const applications = [
    {
      id: 'orbit-ai',
      name: 'Orbit AI: AI Notetaker',
      description: 'An AI-powered meeting assistant that joins meetings and provides comprehensive summaries. Built for enterprise use, it automatically transcribes, analyzes, and extracts key insights from meetings.',
      version: '',
      size: 'Live Website',
      liveUrl: 'https://orbit-ai-orbit.vercel.app/',
      icon: null,
    },
    {
      id: 'kahaniyan',
      name: 'Kahaniyan: Hindi Stories Platform',
      description: 'A beautiful platform where users can read engaging Hindi stories (kahaniyan). Features a curated collection of classic and contemporary tales with elegant reading experience.',
      version: '',
      size: 'Live Website',
      liveUrl: 'https://kahaniyan-swart.vercel.app',
      icon: 'https://i.pinimg.com/1200x/b0/b0/7c/b0b07c44cfb61aa521b01b2dbd8c090a.jpg',
    },
    {
      id: 'raidental-clinic',
      name: 'Raidental Dental Clinic',
      description: 'A professional dental clinic website featuring appointment booking, services showcase, team introduction, and patient testimonials. Built with modern web technologies for a seamless user experience.',
      version: '',
      size: 'Live Website',
      liveUrl: 'https://raidentalclinic.com/',
      icon: null,
    },
    {
      id: 'whatsapp-scraper',
      name: 'WhatsApp Scraper Extension',
      description: 'A Chrome extension that helps scrape WhatsApp contacts from WhatsApp Web. Extract contact information efficiently for business and personal use.',
      version: '1.0.0',
      size: '2.1 MB',
      downloadUrl: '/apps/whatsapp-scraper/whatsapp-scraper-v1.0.0.zip',
      icon: '/apps/whatsapp-scraper/icon128.png',
    },
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
