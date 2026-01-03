import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const projects = [
    {
      id: 'dobbie',
      title: "Dobbie: AI-Powered LinkedIn Content Platform",
      description: "Built a revolutionary single-platform solution that empowers multiple users simultaneously with one-click LinkedIn posting. Simply share your idea and Dobbie refines it with perfect hooks, professional formatting, and engaging content—then posts directly to LinkedIn.",
      longDescription: "Dobbie is a groundbreaking AI-powered platform that transforms the way professionals create and share LinkedIn content. Built to serve multiple users simultaneously, it eliminates the hours typically spent brainstorming, writing, and perfecting social media posts.\n\nThe platform leverages advanced AI to understand your raw ideas and transform them into polished, viral-ready LinkedIn posts complete with attention-grabbing hooks, professional formatting, and engaging calls-to-action. Whether you're a busy entrepreneur, content creator, or professional looking to build your personal brand, Dobbie handles the heavy lifting.\n\nWith just one click, users can post their refined content directly to LinkedIn—no copy-pasting, no switching between apps, no stress. The platform's intelligent content engine understands LinkedIn's algorithm preferences and optimizes posts for maximum engagement and reach.\n\nKey innovations include multi-user support allowing teams to collaborate on content, AI-driven hook generation that captures attention in the first line, and seamless LinkedIn API integration for frictionless posting. The result is a 10x improvement in content creation speed while maintaining or exceeding the quality of manually crafted posts.",
      tech: ["SwiftUI", "AI Integration", "REST APIs", "Content Generation", "Social Media Automation", "LinkedIn API"],
      image: "/Dobbie.png",
      video: "https://drive.google.com/file/d/1_qBQ5u7UnlH3kkvBs9iJDQk6gd4w-gWl/view?usp=sharing",
      achievements: "One-click posting, AI content refinement, Multi-user support",
      features: [
        "One-click LinkedIn posting",
        "AI-powered content refinement",
        "Perfect hook generation",
        "Multi-user collaboration support",
        "Professional formatting automation",
        "Real-time content preview",
        "Engagement optimization algorithms",
        "Seamless LinkedIn API integration"
      ],
      github: "https://github.com/sagarrai21802/dobbie",
      liveDemo: null
    },
    {
      id: 'visionassist',
      title: "VisionAssist: AI-Powered Accessibility Extension",
      description: "Built a browser extension for Kaggle DeepMind Hackathon that empowers visually impaired users by reading web pages aloud and describing all visual content. Acts as a digital assistant that makes the web accessible to everyone.",
      longDescription: "VisionAssist is a groundbreaking browser extension developed for the Kaggle DeepMind Hackathon, designed to make the web accessible to visually impaired and blind users. The extension serves as a digital support companion that reads entire web pages aloud and provides detailed descriptions of visual content.\n\nThe project was created with the mission to serve people with disabilities and make a meaningful difference in their daily lives. By leveraging AI and text-to-speech technologies, VisionAssist transforms how blind users interact with the internet, giving them independence in navigating websites, reading articles, and understanding visual content.\n\nKey features include intelligent page parsing that identifies and prioritizes content, natural-sounding voice synthesis for comfortable listening, and AI-powered image description that explains photos, graphics, and visual elements. The extension seamlessly integrates into the browsing experience, activating with simple keyboard shortcuts for accessibility.\n\nThis project represents the intersection of technology and social impact—demonstrating how AI can be harnessed to create inclusive digital experiences and break down barriers for users with visual impairments.",
      tech: ["JavaScript", "Chrome Extension", "AI/ML", "Text-to-Speech", "Accessibility", "DeepMind API", "Web APIs"],
      image: null,
      video: "https://www.youtube.com/embed/Pup5lBzltIU",
      isYouTube: true,
      achievements: "Kaggle DeepMind Hackathon, Full page description, Accessibility impact",
      features: [
        "Full web page reading aloud",
        "AI-powered image descriptions",
        "Natural text-to-speech synthesis",
        "Keyboard shortcut accessibility",
        "Intelligent content prioritization",
        "Seamless browser integration",
        "Multi-language support",
        "Customizable reading speed"
      ],
      github: "https://github.com/sagarrai21802/VisionAssist.git",
      liveDemo: "https://youtu.be/Pup5lBzltIU?si=miXn_N8PrzzHaHPs"
    },
    {
      id: 'ticket-booking',
      title: "Ticket Booking System: Full-Stack Java Application",
      description: "Built an end-to-end ticket booking system featuring a robust Java backend with RESTful APIs, database management, and secure authentication. Implements complete booking workflow with seat selection, payment processing, and ticket generation.",
      longDescription: "The Ticket Booking System is a comprehensive full-stack application that showcases mastery in Java backend development and enterprise-level architecture. This project demonstrates the ability to build production-ready systems that handle real-world business requirements.\n\nThe backend is built using Spring Boot, leveraging its powerful ecosystem for creating RESTful APIs, managing database operations, and implementing secure authentication. The application follows industry best practices including layered architecture, dependency injection, and proper separation of concerns.\n\nKey technical achievements include implementing JWT-based authentication for secure user sessions, designing a normalized MySQL database schema for efficient data management, and creating a complete booking workflow that handles seat selection, availability checking, payment processing, and ticket generation.\n\nThe system demonstrates proficiency in core Java concepts, Spring Framework, database design, and API development—essential skills for backend engineering roles. The modular architecture ensures the codebase is maintainable, testable, and scalable.",
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT Auth", "Maven", "Hibernate"],
      image: null,
      video: null,
      achievements: "Full-stack Java, RESTful architecture, Enterprise-grade backend",
      features: [
        "Complete booking workflow",
        "Seat selection and availability",
        "JWT-based authentication",
        "Payment processing integration",
        "Ticket generation system",
        "Admin dashboard",
        "RESTful API design",
        "Database optimization"
      ],
      github: "https://github.com/sagarrai21802/ticket-booking",
      liveDemo: null
    },
    {
      id: 'sira-website',
      title: "SIRA Website: AI Digital Marketing Agent",
      description: "Built a comprehensive AI-powered digital marketing platform that serves as your intelligent marketing agent. Automates content creation, campaign management, and marketing strategies using advanced AI integration.",
      longDescription: "SIRA Website is a cutting-edge AI-powered digital marketing platform designed to revolutionize how businesses approach their marketing efforts. The platform serves as an intelligent marketing agent that automates content creation, campaign management, and strategy optimization.\n\nBuilt with modern web technologies, SIRA leverages advanced AI integration to understand brand voice, target audience, and marketing goals. The platform then generates tailored content, suggests campaign strategies, and provides actionable insights to maximize marketing ROI.\n\nKey features include automated content generation for social media, email campaigns, and blog posts; intelligent scheduling and posting automation; comprehensive analytics dashboard for tracking performance; and AI-driven recommendations for campaign optimization.\n\nThe platform demonstrates expertise in frontend development with React and TypeScript, API integration for AI services, and deployment with Vercel for optimal performance and reliability. SIRA represents the future of marketing—where AI works alongside marketers to achieve better results with less effort.",
      tech: ["React", "TypeScript", "AI Integration", "Vercel", "REST APIs", "Marketing Automation"],
      image: null,
      video: null,
      achievements: "Live platform, AI-powered marketing, Full automation",
      features: [
        "AI-powered content generation",
        "Automated campaign management",
        "Social media scheduling",
        "Marketing analytics dashboard",
        "Brand voice customization",
        "Multi-platform publishing",
        "Performance optimization",
        "Real-time insights"
      ],
      github: "https://github.com/sagarrai21802/sira-website",
      liveDemo: "https://siraaaaaaa.vercel.app"
    },
    {
      id: 'keyboard-extension',
      title: "AI Keyboard: Grok-Powered iOS Keyboard Extension",
      description: "Built a custom iOS keyboard extension that enhances user responses using the Grok API. Overcame significant iOS restrictions on API calls from keyboard extensions and the 30MB data transfer limit.",
      longDescription: "AI Keyboard is an innovative iOS keyboard extension that brings the power of Grok AI directly to your fingertips. The extension enhances user responses in real-time, helping craft better messages, emails, and content across any app on iPhone.\n\nThis project presented unique technical challenges that required deep expertise in iOS development. Keyboard extensions operate within Apple's strict sandbox environment, which severely limits network access and API calls. Additionally, iOS imposes a 30MB memory limit on keyboard extensions, making it challenging to integrate AI capabilities that typically require more resources.\n\nThe solution involved creative architectural decisions: implementing efficient data streaming, optimizing API request handling to work within sandbox restrictions, and developing a lightweight communication layer between the keyboard extension and the main app. These challenges pushed the boundaries of what's possible with iOS keyboard extensions.\n\nThe result is a seamless AI-powered typing experience that enhances responses, suggests improvements, and helps users communicate more effectively—all from within their keyboard.",
      tech: ["Swift", "iOS Keyboard Extension", "Grok API", "REST APIs", "App Extension", "iOS Sandbox", "App Groups"],
      image: null,
      video: null,
      achievements: "Grok API integration, iOS restrictions overcome, Real-time AI enhancement",
      features: [
        "Real-time AI response enhancement",
        "Grok API integration",
        "Works across all iOS apps",
        "Lightweight 30MB optimized design",
        "iOS sandbox restriction workarounds",
        "Seamless keyboard experience",
        "Smart suggestion system",
        "Privacy-focused architecture"
      ],
      github: "https://github.com/sagarrai21802/KeyboardExtention.git",
      liveDemo: null
    },
    {
      id: 'todoey',
      title: "Todoey: iOS Task Management App",
      description: "Built with Swift & UIKit using MVC architecture. Implemented 5+ data persistence methods (Realm, Core Data, SQLite, File Manager, Keychain) ensuring 100% data integrity across sessions. Improved task management efficiency by 30% via optimised UI flows.",
      longDescription: "Todoey is a comprehensive iOS task management application that demonstrates advanced Swift programming concepts and data persistence techniques. The app features a clean, intuitive interface built with UIKit and follows the Model-View-Controller (MVC) architectural pattern for maintainable code structure.\n\nKey highlights include the implementation of five different data persistence methods, each serving different use cases: Realm for complex relational data, Core Data for object graph management, SQLite for lightweight local storage, File Manager for document-based storage, and Keychain for secure credential storage.\n\nThe app achieved a 30% improvement in task management efficiency through optimized UI flows and responsive design principles. The modular architecture allows for easy feature additions and maintenance.",
      tech: ["Swift", "UIKit", "Realm", "Core Data", "SQLite", "MVC"],
      image: "/todolistapp.png",
      video: "/TodoList.mp4",
      achievements: "30% efficiency improvement, 100% data integrity",
      features: [
        "Multiple data persistence methods",
        "Real-time task synchronization",
        "Advanced search and filtering",
        "Custom task categories and priorities",
        "Data import/export functionality",
        "Dark mode support"
      ],
      github: "https://github.com/sagarrai21802/todoey",
      liveDemo: null
    },
    {
      id: 'hackernews',
      title: "Hacker News: Real-time iOS News Feed App",
      description: "Built with Swift & SwiftUI using MVVM architecture. Integrated Hacker News API with URLSession & JSONDecoder delivering <200ms data fetch latency. Developed SwiftUI adaptive UI supporting iOS 15–18 with 40% faster data loading.",
      longDescription: "Hacker News is a modern iOS application that brings the popular tech news aggregator to mobile devices with native performance and intuitive user experience. Built using SwiftUI and the Model-View-ViewModel (MVVM) architectural pattern, the app showcases best practices in reactive programming and API integration.\n\nThe application integrates seamlessly with the Hacker News API, utilizing URLSession for network requests and JSONDecoder for efficient data parsing. The app achieves sub-200ms data fetch latency through optimized caching strategies and background thread processing.\n\nWith adaptive UI components supporting iOS 15-18, the app provides a consistent experience across different device sizes and orientations. The SwiftUI implementation ensures 40% faster data loading compared to traditional approaches.",
      tech: ["Swift", "SwiftUI", "URLSession", "JSON Decoding", "MVVM"],
      image: "/HackerNews.png",
      video: "/HackerNews.mp4",
      achievements: "<200ms latency, 40% faster loading",
      features: [
        "Real-time news feed updates",
        "Advanced search and filtering",
        "Comment threading system",
        "User profile management",
        "Favorite articles bookmarking",
        "Share articles functionality"
      ],
      github: "https://github.com/sagarrai21802/hackernews",
      liveDemo: null
    },
    {
      id: 'bitcoin-monitor',
      title: "Bitcoin Monitor: Real-time Cryptocurrency Tracker",
      description: "Built a comprehensive Bitcoin monitoring application that fetches real-time Bitcoin prices across multiple currencies. Utilizes live API integration for accurate price tracking and historical data visualization. Features responsive design with real-time updates and customizable currency conversion.",
      longDescription: "Bitcoin Monitor is a comprehensive web application designed for cryptocurrency enthusiasts and traders who need real-time Bitcoin price tracking across multiple currencies. The application leverages modern web technologies to provide accurate, up-to-date market data with an intuitive user interface.\n\nThe app integrates with multiple cryptocurrency APIs to ensure data accuracy and reliability. Real-time WebSocket connections provide live price updates without the need for manual refreshes. The historical data visualization feature uses Chart.js to display price trends and market analysis.\n\nKey features include customizable currency conversion, portfolio tracking, price alerts, and detailed market analysis. The responsive design ensures optimal viewing experience across desktop and mobile devices.",
      tech: ["React", "TypeScript", "Crypto APIs", "Real-time Data", "Chart.js"],
      image: null,
      video: "/Bitcoin.mp4",
      achievements: "Real-time price tracking, Multi-currency support",
      features: [
        "Real-time price updates",
        "Multi-currency conversion",
        "Historical price charts",
        "Portfolio tracking",
        "Price alerts and notifications",
        "Market analysis dashboard"
      ],
      github: "https://github.com/sagarrai21802/bitcoin-monitor",
      liveDemo: null
    },
    {
      id: 'sira',
      title: "SIRA: AI-Powered Marketing Platform",
      description: "Converted a complex SaaS web platform into a fully native iOS experience using SwiftUI and REST APIs. Implemented automation and AI integration for real-time content generation. Built modular SwiftUI components for interactive dashboard rendering, improving user engagement by 40% through seamless native performance.",
      longDescription: "SIRA represents a significant technological achievement in converting a complex web-based SaaS platform into a native iOS application. This project showcases the ability to handle large-scale application migrations while maintaining feature parity and improving user experience.\n\nThe application leverages SwiftUI's declarative UI paradigm to create an interactive dashboard that dynamically renders content based on user preferences and real-time data. AI integration enables automated content generation and personalized user experiences.\n\nKey technical achievements include modular component architecture, efficient state management, and optimized performance that resulted in a 40% improvement in user engagement compared to the web version.",
      tech: ["SwiftUI", "REST APIs", "Automation", "AI Integration"],
      image: "/Sira.png",
      video: null,
      achievements: "40% user engagement improvement, Native iOS conversion",
      features: [
        "Native iOS performance",
        "AI-powered content generation",
        "Interactive dashboard components",
        "Real-time data synchronization",
        "Advanced user analytics",
        "Cross-platform data consistency"
      ],
      github: "https://github.com/sagarrai21802/sira",
      liveDemo: null
    },
    {
      id: 'inspoquotes',
      title: "Inspoquotes: Premium Quotes iOS App",
      description: "Developed a premium quotes app mastering in-app purchases, App Store Connect, and deployment fundamentals. Implemented subscription models and clean UIKit interface for quote discovery. Achieved 95% user retention through optimized onboarding flows and premium content delivery systems.",
      longDescription: "Inspoquotes is a premium iOS application that delivers inspirational quotes and content to users worldwide. The app demonstrates expertise in App Store Connect, in-app purchases, and monetization strategies while maintaining high user satisfaction.\n\nThe application features a sophisticated subscription model with multiple tiers, enabling users to access premium content and advanced features. The onboarding flow is carefully designed to maximize user engagement and retention.\n\nTechnical implementation includes robust content management, efficient caching strategies, and seamless integration with Apple's payment systems. The UIKit interface provides smooth animations and intuitive navigation.",
      tech: ["Swift", "UIKit", "In-App Purchase", "App Store Connect", "Deployment"],
      image: "/InspoQuote.png",
      video: null,
      achievements: "95% user retention, Successful deployment",
      features: [
        "Premium content subscription",
        "Offline quote reading",
        "Personal quote collections",
        "Social sharing integration",
        "Custom notification system",
        "Advanced search capabilities"
      ],
      github: "https://github.com/sagarrai21802/inspoquotes",
      liveDemo: null
    },
    {
      id: 'twitter-sentiment',
      title: "Twitter Sentiment Analysis: ML Stock Prediction App",
      description: "Built a machine learning iOS app that scrapes tweets from Twitter (X) and analyzes sentiment for stock market predictions. Utilizes Core ML for on-device processing to determine positive/negative trends. Achieved 85% accuracy in sentiment classification, providing valuable insights for market analysis without external API dependencies.",
      longDescription: "This innovative iOS application combines social media sentiment analysis with stock market prediction using machine learning. The app demonstrates advanced skills in Core ML integration, natural language processing, and financial data analysis.\n\nThe application processes Twitter/X data to analyze public sentiment around specific stocks and market trends. Using Core ML's on-device processing capabilities, the app maintains user privacy while providing real-time sentiment analysis.\n\nThe machine learning model achieves 85% accuracy in sentiment classification, making it a valuable tool for investors and traders seeking market insights. The app operates without external API dependencies for core ML functionality, ensuring reliability and data privacy.",
      tech: ["Swift", "Core ML", "Twitter API", "Machine Learning", "Natural Language Processing"],
      image: "/Twitter.png",
      video: null,
      achievements: "85% accuracy, On-device ML processing",
      features: [
        "Real-time sentiment analysis",
        "Stock market trend predictions",
        "On-device ML processing",
        "Historical sentiment tracking",
        "Custom stock watchlists",
        "Advanced analytics dashboard"
      ],
      github: "https://github.com/sagarrai21802/twitter-sentiment",
      liveDemo: null
    },
    {
      id: 'image-recognition',
      title: "Image Recognition: On-Device Object Detection App",
      description: "Created an iOS app with built-in image recognition models for identifying objects in photos without hosted services. Implemented custom Core ML models for accurate classification using Vision Framework. Gained deep understanding of model creation and optimization for mobile applications, achieving high recognition accuracy through on-device processing.",
      longDescription: "This advanced iOS application showcases expertise in computer vision and machine learning model deployment. The app implements custom Core ML models for real-time object detection and classification, demonstrating deep understanding of mobile ML optimization.\n\nThe application utilizes Apple's Vision Framework to process images and identify objects with high accuracy. Custom model creation and optimization techniques ensure efficient performance on mobile devices without relying on cloud services.\n\nKey achievements include comprehensive understanding of model training, conversion, and deployment processes. The app maintains user privacy by processing all data on-device while delivering accurate object recognition results.",
      tech: ["Swift", "Core ML", "Vision Framework", "Machine Learning", "Image Processing"],
      image: "/ImageRecognization.png",
      video: null,
      achievements: "High accuracy recognition, On-device processing",
      features: [
        "Real-time object detection",
        "Custom model training",
        "Photo library integration",
        "Camera capture functionality",
        "Detailed classification results",
        "Batch image processing"
      ],
      github: "https://github.com/sagarrai21802/image-recognition",
      liveDemo: null
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
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
    <div className="min-h-screen pt-20 bg-background">
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl">🚀</div>
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
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
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

            {/* Achievements */}
            {project.achievements && (
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Achievements
                </h3>
                <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                  <p className="text-primary font-medium">
                    🎯 {project.achievements}
                  </p>
                </div>
              </div>
            )}

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
                    className="flex items-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
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