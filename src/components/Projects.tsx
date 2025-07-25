
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Quizzler: Interactive MCQ Quiz App",
      description: "Built with Swift & UIKit using MVC architecture. Features dynamic question logic, animated UI, and comprehensive score tracking system.",
      tech: ["Swift", "UIKit", "MVC"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Xylophone: Colourful Music App",
      description: "Built with Swift & AVFoundation. Features responsive sound playback with animated keypress UI for an engaging musical experience.",
      tech: ["Swift", "AVFoundation", "UI Animation"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 animate-fade-in tracking-tight">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] project-card animate-fade-in-up backdrop-blur-sm`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-6xl font-bold opacity-15 hover:opacity-25 transition-opacity duration-300 relative z-10">
                  {index === 0 ? '?' : '🎵'}
                </div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-elegant-gray dark:bg-elegant-gray text-foreground rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 border border-border/50 hover:bg-primary/5"
                      style={{ animationDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
