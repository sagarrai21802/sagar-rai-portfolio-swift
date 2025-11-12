
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Todoey: iOS Task Management App",
      description: "Built with Swift & UIKit using MVC architecture. Implemented 5+ data persistence methods (Realm, Core Data, SQLite, File Manager, Keychain) ensuring 100% data integrity across sessions. Improved task management efficiency by 30% via optimised UI flows.",
      tech: ["Swift", "UIKit", "Realm", "Core Data", "SQLite", "MVC"],
      image: "/todolistapp.png",
      achievements: "30% efficiency improvement, 100% data integrity"
    },
    {
      title: "Hacker News: Real-time iOS News Feed App",
      description: "Built with Swift & SwiftUI using MVVM architecture. Integrated Hacker News API with URLSession & JSONDecoder delivering <200ms data fetch latency. Developed SwiftUI adaptive UI supporting iOS 15–18 with 40% faster data loading.",
      tech: ["Swift", "SwiftUI", "URLSession", "JSON Decoding", "MVVM"],
      image: "/HackerNews.png",
      achievements: "<200ms latency, 40% faster loading"
    },
    {
      title: "SIRA: AI-Powered Marketing Platform",
      description: "Converted a complex SaaS web platform into a fully native iOS experience using SwiftUI and REST APIs. Implemented automation and AI integration for real-time content generation. Built modular SwiftUI components for interactive dashboard rendering, improving user engagement by 40% through seamless native performance.",
      tech: ["SwiftUI", "REST APIs", "Automation", "AI Integration"],
      image: "/Sira.png",
      achievements: "40% user engagement improvement, Native iOS conversion"
    },
    {
      title: "Inspoquotes: Premium Quotes iOS App",
      description: "Developed a premium quotes app mastering in-app purchases, App Store Connect, and deployment fundamentals. Implemented subscription models and clean UIKit interface for quote discovery. Achieved 95% user retention through optimized onboarding flows and premium content delivery systems.",
      tech: ["Swift", "UIKit", "In-App Purchase", "App Store Connect", "Deployment"],
      image: "/InspoQuote.png",
      achievements: "95% user retention, Successful deployment"
    },
    {
      title: "Twitter Sentiment Analysis: ML Stock Prediction App",
      description: "Built a machine learning iOS app that scrapes tweets from Twitter (X) and analyzes sentiment for stock market predictions. Utilizes Core ML for on-device processing to determine positive/negative trends. Achieved 85% accuracy in sentiment classification, providing valuable insights for market analysis without external API dependencies.",
      tech: ["Swift", "Core ML", "Twitter API", "Machine Learning", "Natural Language Processing"],
      image: "/Twitter.png",
      achievements: "85% accuracy, On-device ML processing"
    },
    {
      title: "Image Recognition: On-Device Object Detection App",
      description: "Created an iOS app with built-in image recognition models for identifying objects in photos without hosted services. Implemented custom Core ML models for accurate classification using Vision Framework. Gained deep understanding of model creation and optimization for mobile applications, achieving high recognition accuracy through on-device processing.",
      tech: ["Swift", "Core ML", "Vision Framework", "Machine Learning", "Image Processing"],
      image: "/ImageRecognization.png",
      achievements: "High accuracy recognition, On-device processing"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 fade-in tracking-tight">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] project-card scale-in backdrop-blur-sm`}
            >
              <div className="h-56 relative overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              <div className="p-6 md:p-8">
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
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-elegant-gray dark:bg-elegant-gray text-foreground rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 border border-border/50 hover:bg-primary/5"
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
