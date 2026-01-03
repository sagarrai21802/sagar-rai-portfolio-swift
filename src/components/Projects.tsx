import { Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const timeouts: { [key: string]: NodeJS.Timeout } = {};

    timeouts['Dobbie'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'Dobbie': true }));
    }, 1000);

    // Set timeout for specific projects to show video after 1 second
    timeouts['Todoey'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'Todoey': true }));
    }, 1000);

    timeouts['HackerNews'] = setTimeout(() => {
      setShowVideo(prev => ({ ...prev, 'HackerNews': true }));
    }, 1000);

    return () => {
      Object.values(timeouts).forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const projects = [
    {
      id: 'dobbie',
      title: "Dobbie: AI-Powered LinkedIn Content Platform",
      description: "Built a revolutionary single-platform solution that empowers multiple users simultaneously with one-click LinkedIn posting. Simply share your idea and Dobbie refines it with perfect hooks, professional formatting, and engaging content—then posts directly to LinkedIn. Eliminates hours of content brainstorming and writing, transforming raw ideas into polished, viral-ready posts in seconds.",
      tech: ["SwiftUI", "AI Integration", "REST APIs", "Content Generation", "Social Media Automation"],
      image: "/Dobbie.png",
      video: "https://drive.google.com/file/d/1_qBQ5u7UnlH3kkvBs9iJDQk6gd4w-gWl/view?usp=sharing",
      showVideo: showVideo['Dobbie'] || false,
      achievements: "One-click posting, AI content refinement, Multi-user support"
    },
    {
      id: 'visionassist',
      title: "VisionAssist: AI-Powered Accessibility Extension",
      description: "Built a browser extension for Kaggle DeepMind Hackathon that empowers visually impaired users by reading web pages aloud and describing all visual content. Acts as a digital assistant that makes the web accessible to everyone, transforming how blind users interact with online content.",
      tech: ["JavaScript", "Chrome Extension", "AI/ML", "Text-to-Speech", "Accessibility", "DeepMind API"],
      image: null,
      video: "https://www.youtube.com/embed/Pup5lBzltIU",
      showVideo: true,
      isYouTube: true,
      achievements: "Kaggle DeepMind Hackathon, Full page description, Accessibility impact"
    },
    {
      id: 'ticket-booking',
      title: "Ticket Booking System: Full-Stack Java Application",
      description: "Built an end-to-end ticket booking system featuring a robust Java backend with RESTful APIs, database management, and secure authentication. Implements complete booking workflow with seat selection, payment processing, and ticket generation. Demonstrates mastery in Java backend architecture, Spring Boot, and enterprise-level application development.",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT Auth", "Maven"],
      image: null,
      video: null,
      showVideo: false,
      achievements: "Full-stack Java, RESTful architecture, Enterprise-grade backend"
    },
    {
      id: 'sira-website',
      title: "SIRA Website: AI Digital Marketing Agent",
      description: "Built a comprehensive AI-powered digital marketing platform that serves as your intelligent marketing agent. Automates content creation, campaign management, and marketing strategies using advanced AI integration. Features a modern web interface for seamless marketing automation and real-time analytics.",
      tech: ["React", "TypeScript", "AI Integration", "Vercel", "REST APIs", "Marketing Automation"],
      image: null,
      video: null,
      showVideo: false,
      liveUrl: "https://siraaaaaaa.vercel.app",
      achievements: "Live platform, AI-powered marketing, Full automation"
    },
    {
      id: 'keyboard-extension',
      title: "AI Keyboard: Grok-Powered iOS Keyboard Extension",
      description: "Built a custom iOS keyboard extension that enhances user responses using the Grok API. Overcame significant iOS restrictions on API calls from keyboard extensions and the 30MB data transfer limit—challenges that required deep understanding of iOS sandbox limitations and creative architectural solutions.",
      tech: ["Swift", "iOS Keyboard Extension", "Grok API", "REST APIs", "App Extension", "iOS Sandbox"],
      image: null,
      video: null,
      showVideo: false,
      achievements: "Grok API integration, iOS restrictions overcome, Real-time AI enhancement"
    },
    {
      id: 'todoey',
      title: "Todoey: iOS Task Management App",
      description: "Built with Swift & UIKit using MVC architecture. Implemented 5+ data persistence methods (Realm, Core Data, SQLite, File Manager, Keychain) ensuring 100% data integrity across sessions. Improved task management efficiency by 30% via optimised UI flows.",
      tech: ["Swift", "UIKit", "Realm", "Core Data", "SQLite", "MVC"],
      image: "/todolistapp.png",
      video: "/TodoList.mp4",
      showVideo: showVideo['Todoey'] || false,
      achievements: "30% efficiency improvement, 100% data integrity"
    },
    {
      id: 'hackernews',
      title: "Hacker News: Real-time iOS News Feed App",
      description: "Built with Swift & SwiftUI using MVVM architecture. Integrated Hacker News API with URLSession & JSONDecoder delivering <200ms data fetch latency. Developed SwiftUI adaptive UI supporting iOS 15–18 with 40% faster data loading.",
      tech: ["Swift", "SwiftUI", "URLSession", "JSON Decoding", "MVVM"],
      image: "/HackerNews.png",
      video: "/HackerNews.mp4",
      showVideo: showVideo['HackerNews'] || false,
      achievements: "<200ms latency, 40% faster loading"
    },
    {
      id: 'bitcoin-monitor',
      title: "Bitcoin Monitor: Real-time Cryptocurrency Tracker",
      description: "Built a comprehensive Bitcoin monitoring application that fetches real-time Bitcoin prices across multiple currencies. Utilizes live API integration for accurate price tracking and historical data visualization. Features responsive design with real-time updates and customizable currency conversion.",
      tech: ["React", "TypeScript", "Crypto APIs", "Real-time Data", "Chart.js"],
      image: null, // No image for Bitcoin project
      video: "/Bitcoin.mp4",
      showVideo: true, // Always show video for Bitcoin project
      achievements: "Real-time price tracking, Multi-currency support"
    },
    {
      id: 'sira',
      title: "SIRA: AI-Powered Marketing Platform",
      description: "Converted a complex SaaS web platform into a fully native iOS experience using SwiftUI and REST APIs. Implemented automation and AI integration for real-time content generation. Built modular SwiftUI components for interactive dashboard rendering, improving user engagement by 40% through seamless native performance.",
      tech: ["SwiftUI", "REST APIs", "Automation", "AI Integration"],
      image: "/Sira.png",
      video: null,
      showVideo: false,
      achievements: "40% user engagement improvement, Native iOS conversion"
    },
    {
      id: 'inspoquotes',
      title: "Inspoquotes: Premium Quotes iOS App",
      description: "Developed a premium quotes app mastering in-app purchases, App Store Connect, and deployment fundamentals. Implemented subscription models and clean UIKit interface for quote discovery. Achieved 95% user retention through optimized onboarding flows and premium content delivery systems.",
      tech: ["Swift", "UIKit", "In-App Purchase", "App Store Connect", "Deployment"],
      image: "/InspoQuote.png",
      video: null,
      showVideo: false,
      achievements: "95% user retention, Successful deployment"
    },
    {
      id: 'twitter-sentiment',
      title: "Twitter Sentiment Analysis: ML Stock Prediction App",
      description: "Built a machine learning iOS app that scrapes tweets from Twitter (X) and analyzes sentiment for stock market predictions. Utilizes Core ML for on-device processing to determine positive/negative trends. Achieved 85% accuracy in sentiment classification, providing valuable insights for market analysis without external API dependencies.",
      tech: ["Swift", "Core ML", "Twitter API", "Machine Learning", "Natural Language Processing"],
      image: "/Twitter.png",
      video: null,
      showVideo: false,
      achievements: "85% accuracy, On-device ML processing"
    },
    {
      id: 'image-recognition',
      title: "Image Recognition: On-Device Object Detection App",
      description: "Created an iOS app with built-in image recognition models for identifying objects in photos without hosted services. Implemented custom Core ML models for accurate classification using Vision Framework. Gained deep understanding of model creation and optimization for mobile applications, achieving high recognition accuracy through on-device processing.",
      tech: ["Swift", "Core ML", "Vision Framework", "Machine Learning", "Image Processing"],
      image: "/ImageRecognization.png",
      video: null,
      showVideo: false,
      achievements: "High accuracy recognition, On-device processing"
    }
  ];

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
              alt={project.title}
              className="w-full h-full object-contain"
              style={{ objectFit: 'contain' }}
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
          alt={project.title}
          className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
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
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] project-card scale-in backdrop-blur-sm cursor-pointer`}
            >
              <div className="h-80 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <MediaComponent project={project} />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10"></div>
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
