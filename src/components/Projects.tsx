import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LiquidGlassCard from './ui/LiquidGlassCard';
import { projects as centralizedProjects } from '@/data/projects';

const Projects = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const timeouts: { [key: string]: NodeJS.Timeout } = {};

    timeouts['dobbie'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'dobbie': true }));
    }, 1000);

    // Set timeout for specific projects to show video after 1 second
    timeouts['todoey'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'todoey': true }));
    }, 1000);

    timeouts['hackernews'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'hackernews': true }));
    }, 1000);

    return () => {
      Object.values(timeouts).forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const projects = centralizedProjects.map(project => {
    const needsTimeout = ['todoey', 'hackernews', 'dobbie'].includes(project.id);
    const isShown = needsTimeout ? (showVideo[project.id] || false) : (project.showVideo ?? false);
    return {
      ...project,
      showVideo: isShown
    };
  });

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const MediaComponent = ({ project }: { project: any }) => {
    const [fadeState, setFadeState] = useState<'image' | 'video'>('image');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      if (project.showVideo && !isTransitioning) {
        setIsTransitioning(true);
        // Start fade out after a short delay to ensure smooth transition
        setTimeout(() => {
          setFadeState('video');
          setTimeout(() => {
            setIsTransitioning(false);
          }, 600); // Allow fade transition to complete
        }, 100);
      }
    }, [project.showVideo, isTransitioning]);

    // YouTube embed
    if (project.isYouTube && project.video) {
      return (
        <iframe
          src={project.video}
          title={project.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    // Loom embed
    if (project.isLoom && project.video) {
      return (
        <iframe
          src={project.video}
          title={project.title}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      );
    }

    if (!project.image && project.video) {
      // Bitcoin project - show only video
      return (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        />
      );
    }

    if (project.video && project.image) {
      // Projects with fade transition
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${fadeState === 'image'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
              }`}
          >
            <img
              src={project.image}
              alt={`${project.title} - iOS app UI built with SwiftUI`}
              className="w-full h-full object-contain"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${fadeState === 'video'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
              }`}
          >
            {project.video.startsWith('http') ? (
              <div className="w-full h-full flex items-center justify-center bg-black/20">
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  View Demo Video
                </a>
              </div>
            ) : (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            )}
          </div>
        </div>
      );
    }

    // Default image only
    return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} - iOS app UI built with SwiftUI`}
          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 fade-in tracking-tight">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <LiquidGlassCard
              key={project.id}
              variant="light"
              onClick={() => handleProjectClick(project.id)}
              className="stagger-item overflow-hidden shadow-lg border border-white/10 dark:border-white/5 cursor-pointer flex flex-col h-full"
            >
              <div className="h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50/20 to-gray-100/10 dark:from-gray-850 dark:to-gray-950 image-zoom">
                <MediaComponent project={project} />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10"></div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed font-body">
                    {project.description}
                  </p>

                  {project.achievements && (
                    <div className="mb-6 p-3 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="text-primary text-sm font-medium">
                        🎯 {project.achievements}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-elegant-gray/50 dark:bg-elegant-gray/10 text-foreground rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 border border-border/50 hover:bg-primary/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                      View Live
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-600">
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 animated-button font-medium"
          >
            <Github className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
