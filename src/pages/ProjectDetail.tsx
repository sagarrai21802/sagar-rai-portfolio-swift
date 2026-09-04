import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import SEO from '@/components/SEO';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <SEO
          title="Project Not Found | Sagar Rai"
          description="The project you're looking for doesn't exist."
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 bg-background">
      <SEO
        title={`${project.title} | Sagar Rai`}
        description={project.description}
        image={project.image || 'https://sagarrai.tech/og-image.png'}
        url={`https://sagarrai.tech/projects/${project.id}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="mb-8 flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Media Section */}
        <div className="mb-12">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 h-96">
            {project.isYouTube && project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : project.isLoom && project.video ? (
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-full"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
              />
            ) : project.video ? (
              project.video.startsWith('http') ? (
                <div className="w-full h-full flex items-center justify-center bg-black/20">
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
                  >
                    View Demo Video
                  </a>
                </div>
              ) : (
                <video
                  src={project.video}
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  controls
                />
              )
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src="/placeholder.svg"
                  alt={project.title}
                  className="w-32 h-32 opacity-40 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                Project Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                Links
              </h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">View on GitHub</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md font-bold text-base"
                  >
                    <ExternalLink className="w-5 h-5 text-white stroke-[2.5]" />
                    <span className="font-bold text-white text-base">View Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;