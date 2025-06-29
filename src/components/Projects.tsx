
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {index === 0 ? '?' : '🎵'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:shadow-lg transition-all duration-300 hover-scale"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
