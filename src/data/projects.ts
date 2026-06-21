export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string | null;
  video: string | null;
  showVideo?: boolean;
  isYouTube?: boolean;
  isLoom?: boolean;
  achievements?: string;
  features?: string[];
  github?: string | null;
  liveUrl?: string | null;
  liveDemo?: string | null; // Keep liveDemo for compatibility with ProjectDetail
  
  // Applications-specific fields
  isApplication?: boolean;
  version?: string;
  size?: string;
  downloadUrl?: string;
  icon?: string | null;
}

export const projects: Project[] = [
  {
    id: 'kahaniyan',
    title: "Kahaniyan: Immersive Hindi Story Platform",
    description: "A beautiful platform where readers can engage with classic and contemporary Hindi horror and folk literature. Built from scratch with optimized SSR.",
    longDescription: "Kahaniyan is a beautiful platform designed for readers who love Hindi literature and storytelling. The platform offers an immersive reading experience with a curated collection of classic and contemporary Hindi horror stories.\n\nWhether you're looking for moral stories, folk tales, romantic narratives, or thrillers, Kahaniyan has something for everyone. The platform is designed with a focus on readability, featuring elegant typography, comfortable reading modes, and a distraction-free interface.\n\nThe project demonstrates expertise in modern web development with Next.js App Router and TypeScript, creating a responsive and accessible platform that works seamlessly across all devices. The clean UI design puts the focus on the stories while providing intuitive navigation and reading controls.\n\nKey features include curated story collections, elegant reading experience, responsive design for all devices, easy navigation and search, and regular content updates with new stories.",
    tech: ["Next.js 16", "React", "Tailwind CSS v4", "FastAPI", "Python", "Firestore", "Vercel", "Render"],
    image: "https://i.pinimg.com/1200x/b0/b0/7c/b0b07c44cfb61aa521b01b2dbd8c090a.jpg",
    video: null,
    showVideo: false,
    liveUrl: "https://kahaniyan-swart.vercel.app",
    liveDemo: "https://kahaniyan-swart.vercel.app",
    achievements: "Live platform, Hindi literature, 60+ published stories",
    features: [
      "Curated Hindi story collection",
      "Elegant reading interface",
      "Responsive design",
      "Easy navigation",
      "Regular content updates"
    ],
    github: "https://github.com/sagarrai21802/kahaniyan",
    isApplication: true,
    icon: "https://i.pinimg.com/1200x/b0/b0/7c/b0b07c44cfb61aa521b01b2dbd8c090a.jpg",
    size: "Live Website"
  },
  {
    id: 'dobbie',
    title: "Dobbie: AI-Powered LinkedIn Content Platform",
    description: "A revolutionary single-platform solution that empowers multiple users simultaneously with one-click LinkedIn posting, perfect hooks, and engaging content formatting.",
    longDescription: "Dobbie is a groundbreaking AI-powered platform that transforms the way professionals create and share LinkedIn content. Built to serve multiple users simultaneously, it eliminates the hours typically spent brainstorming, writing, and perfecting social media posts.\n\nThe platform leverages advanced AI to understand your raw ideas and transform them into polished, viral-ready LinkedIn posts complete with attention-grabbing hooks, professional formatting, and engaging calls-to-action.\n\nWith just one click, users can post their refined content directly to LinkedIn—no copy-pasting, no switching between apps, no stress. The platform's intelligent content engine understands LinkedIn's algorithm preferences and optimizes posts for maximum engagement and reach.\n\nKey innovations include multi-user support allowing teams to collaborate on content, AI-driven hook generation that captures attention in the first line, and seamless LinkedIn API integration for frictionless posting. The result is a 10x improvement in content creation speed.",
    tech: ["SwiftUI", "AI Integration", "REST APIs", "Content Generation", "Social Media Automation", "LinkedIn API"],
    image: "/dobbie-ios-app-preview.png",
    video: "https://www.youtube.com/embed/Xlt63G4e5Dw",
    showVideo: true,
    isYouTube: true,
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
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'visionassist',
    title: "VisionAssist: AI-Powered Accessibility Extension",
    description: "Built a browser extension for Kaggle DeepMind Hackathon that empowers visually impaired users by reading web pages aloud and describing all visual content.",
    longDescription: "VisionAssist is a browser extension developed for the Kaggle DeepMind Hackathon, designed to make the web accessible to visually impaired and blind users. The extension serves as a digital support companion that reads entire web pages aloud and provides detailed descriptions of visual content.\n\nThe project was created with the mission to serve people with disabilities and make a meaningful difference in their daily lives. By leveraging AI and text-to-speech technologies, VisionAssist transforms how blind users interact with the internet, giving them independence in navigating websites, reading articles, and understanding visual content.\n\nKey features include intelligent page parsing that identifies and prioritizes content, natural-sounding voice synthesis for comfortable listening, and AI-powered image description that explains photos, graphics, and visual elements. The extension seamlessly integrates into the browsing experience, activating with simple keyboard shortcuts.",
    tech: ["JavaScript", "Chrome Extension", "AI/ML", "Text-to-Speech", "Accessibility", "DeepMind API", "Web APIs"],
    image: null,
    video: "https://www.youtube.com/embed/Pup5lBzltIU",
    showVideo: true,
    isYouTube: true,
    achievements: "Kaggle DeepMind Hackathon, Full page description, Accessibility impact",
    features: [
      "Full web page reading aloud",
      "AI-powered image descriptions",
      "Natural text-to-speech synthesis",
      "Keyboard shortcut accessibility",
      "Intelligent content prioritization",
      "Seamless browser integration"
    ],
    github: "https://github.com/sagarrai21802/VisionAssist.git",
    liveUrl: "https://youtu.be/Pup5lBzltIU?si=miXn_N8PrzzHaHPs",
    liveDemo: "https://youtu.be/Pup5lBzltIU?si=miXn_N8PrzzHaHPs"
  },
  {
    id: 'ticket-booking',
    title: "Ticket Booking System: Full-Stack Java Application",
    description: "An end-to-end ticket booking system featuring a robust Java Spring Boot backend with RESTful APIs, database management, and secure JWT authentication.",
    longDescription: "The Ticket Booking System is a comprehensive full-stack application that showcases mastery in Java backend development and enterprise-level architecture. This project demonstrates the ability to build production-ready systems that handle real-world business requirements.\n\nThe backend is built using Spring Boot, leveraging its powerful ecosystem for creating RESTful APIs, managing database operations, and implementing secure authentication. The application follows industry best practices including layered architecture, dependency injection, and proper separation of concerns.\n\nKey technical achievements include implementing JWT-based authentication for secure user sessions, designing a normalized MySQL database schema for efficient data management, and creating a complete booking workflow that handles seat selection, availability checking, payment processing, and ticket generation.",
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT Auth", "Maven", "Hibernate"],
    image: null,
    video: "https://www.youtube.com/embed/eHzD_OHmX7c",
    showVideo: true,
    isYouTube: true,
    achievements: "Full-stack Java, RESTful architecture, Enterprise-grade backend",
    features: [
      "Complete booking workflow",
      "Seat selection and availability",
      "JWT-based authentication",
      "Payment processing integration",
      "Ticket generation system",
      "Admin dashboard"
    ],
    github: "https://github.com/sagarrai21802/ticket-booking",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'glasscast',
    title: "GlassCast: Advanced Weather Application",
    description: "An advanced weather application featuring a beautiful glassmorphism design, real-time tracking, Core Location support, and interactive forecasts.",
    longDescription: "GlassCast is a weather application that demonstrates advanced iOS development skills through its stunning glassmorphism UI design and weather tracking capabilities. It features a frosted glass design language that creates a modern, premium feel.\n\nEach weather element is rendered with attention to detail, including animated weather conditions, dynamic backgrounds that reflect current weather, and smooth transitions. The app integrates multiple weather APIs to provide accurate real-time data, including temperature, humidity, wind speed, UV index, and more.\n\nKey technical achievements include implementing Core Location for automatic location detection, creating custom SwiftUI components for the glassmorphism effect, and optimizing API calls for battery efficiency.",
    tech: ["Swift", "SwiftUI", "Weather APIs", "Glassmorphism UI", "Core Location", "MVVM", "REST APIs"],
    image: null,
    video: "https://www.loom.com/embed/d50aa1aa7ae14ce782bc62fc56c8606e",
    showVideo: true,
    isLoom: true,
    achievements: "Glassmorphism design, Real-time weather tracking, Interactive forecasts",
    features: [
      "Beautiful glassmorphism UI design",
      "Real-time weather data integration",
      "Hourly and weekly weather forecasts",
      "Interactive weather maps",
      "Severe weather alerts",
      "Core Location integration"
    ],
    github: "https://github.com/sagarrai21802/GlassCast.git",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'ocr-autofill',
    title: "OCR AutoFill Extension: Automated Data Entry Solution",
    description: "A Chrome extension that extracts structured text from JPG images using Tesseract OCR and automatically fills 16 predefined text fields in WebForms pages.",
    longDescription: "OCR AutoFill Extension is a powerful automation tool designed to streamline data entry workflows. This project addresses a common pain point in enterprise environments where manual data entry from scanned documents is time-consuming and prone to errors.\n\nThe solution consists of two main components: a Chrome Extension (Manifest V3) that runs in the browser and a FastAPI backend that handles the OCR processing. When a user navigates to a page containing a document image, the extension automatically sends it to the backend for processing and populates all 16 predefined fields with the extracted data.\n\nThe backend uses Tesseract OCR for text extraction and implements intelligent field mapping to correctly identify and categorize information. The system achieves 95%+ field accuracy while reducing manual typing time by 80%.",
    tech: ["Chrome Extension", "JavaScript", "Tesseract OCR", "FastAPI", "Python", "Web Scraping", "DOM Manipulation"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "80% typing time reduction, 16-field extraction, WebForms compatibility",
    features: [
      "Automatic image detection from pages",
      "Tesseract OCR text extraction",
      "16-field structured data extraction",
      "WebForms DOM manipulation",
      "MutationObserver for partial postbacks"
    ],
    github: "https://github.com/sagarrai21802/OCR.git",
    liveUrl: null,
    liveDemo: null,
    isApplication: true,
    name: "OCR AutoFill Extension",
    version: "2.2.0",
    size: "1.8 MB",
    downloadUrl: "/apps/ocr-extension/ocr-extension-v2.2.0.zip",
    icon: "/apps/ocr-extension/icon128.png"
  },
  {
    id: 'echominutes',
    title: "EchoMinutes: AI-Powered Meeting Summary Extension",
    description: "Chrome extension that uploads audio from meetings and generates structured meeting summaries, action items, and participants list using AI.",
    longDescription: "EchoMinutes is an innovative Chrome extension that transforms how professionals document and follow up on meetings. By uploading an audio recording of any meeting, the extension leverages AI to generate comprehensive, structured meeting summaries in seconds.\n\nKey features include intelligent extraction of action items with assigned owners and deadlines, identification of important decisions made, recognition of participants, highlighting of key discussion points, and generation of follow-up recommendations.\n\nThe project demonstrates expertise in audio processing, natural language processing, and Chrome extension development.",
    tech: ["Chrome Extension", "JavaScript", "AI/ML", "Audio Processing", "Speech-to-Text", "REST APIs", "Natural Language Processing"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Automated meeting documentation, AI summaries, Action item extraction",
    features: [
      "Audio file upload and processing",
      "AI-powered speech-to-text transcription",
      "Structured meeting summary generation",
      "Action items extraction with owners",
      "Decision tracking and documentation"
    ],
    github: "https://github.com/sagarrai21802/EchoMinutes.git",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'todoey',
    title: "Todoey: iOS Task Management App",
    description: "Built with Swift & UIKit using MVC architecture. Implemented 5+ data persistence methods (Realm, Core Data, SQLite, File Manager, Keychain) ensuring 100% data integrity.",
    longDescription: "Todoey is a comprehensive iOS task management application that demonstrates advanced Swift programming concepts and data persistence techniques. The app features a clean, intuitive interface built with UIKit and follows the Model-View-Controller (MVC) architectural pattern.\n\nKey highlights include the implementation of five different data persistence methods, each serving different use cases: Realm for complex relational data, Core Data for object graph management, SQLite for lightweight local storage, File Manager for document-based storage, and Keychain for secure credential storage.\n\nThe app achieved a 30% improvement in task management efficiency through optimized UI flows and responsive design principles.",
    tech: ["Swift", "UIKit", "Realm", "Core Data", "SQLite", "MVC"],
    image: "/todoey-task-app-ui.png",
    video: "/TodoList.mp4",
    showVideo: false,
    achievements: "30% efficiency improvement, 100% data integrity",
    features: [
      "Multiple data persistence methods",
      "Real-time task synchronization",
      "Advanced search and filtering",
      "Custom task categories and priorities",
      "Dark mode support"
    ],
    github: "https://github.com/sagarrai21802/todoey",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'hackernews',
    title: "Hacker News: Real-time iOS News Feed App",
    description: "SwiftUI iOS app featuring a real-time news feed powered by Y Combinator's API. Achieved <200ms data fetch latency and supports iOS 15-18.",
    longDescription: "Hacker News is a modern iOS application that brings the popular tech news aggregator to mobile devices with native performance. Built using SwiftUI and the Model-View-ViewModel (MVVM) architectural pattern, the app showcases best practices in reactive programming and API integration.\n\nThe application integrates seamlessly with the Hacker News API, utilizing URLSession for network requests and JSONDecoder for efficient data parsing. The app achieves sub-200ms data fetch latency through optimized caching strategies and background thread processing.\n\nWith adaptive UI components supporting iOS 15-18, the app provides a consistent experience across different device sizes and orientations.",
    tech: ["Swift", "SwiftUI", "URLSession", "JSON Decoding", "MVVM"],
    image: "/hackernews-ios-app-ui.png",
    video: "/HackerNews.mp4",
    showVideo: false,
    achievements: "<200ms latency, 40% faster loading, 99.7% uptime",
    features: [
      "Real-time news feed updates",
      "Advanced search and filtering",
      "Comment threading system",
      "User profile management",
      "Favorite articles bookmarking",
      "Share articles functionality"
    ],
    github: "https://github.com/sagarrai21802/hackernews",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'bitcoin-monitor',
    title: "Bitcoin Monitor: Real-time Cryptocurrency Tracker",
    description: "A comprehensive Bitcoin monitoring application that fetches real-time prices across multiple fiat currencies and displays historical trends.",
    longDescription: "Bitcoin Monitor is a comprehensive web application designed for cryptocurrency enthusiasts and traders who need real-time Bitcoin price tracking across multiple currencies. The application leverages modern web technologies to provide accurate, up-to-date market data.\n\nThe app integrates with multiple cryptocurrency APIs to ensure data accuracy and reliability. Real-time WebSocket connections provide live price updates without the need for manual refreshes. The historical data visualization feature uses Chart.js to display price trends and market analysis.",
    tech: ["React", "TypeScript", "Crypto APIs", "Real-time Data", "Chart.js"],
    image: null,
    video: "/Bitcoin.mp4",
    showVideo: true,
    achievements: "Real-time price tracking, Multi-currency support",
    features: [
      "Real-time price updates",
      "Multi-currency conversion",
      "Historical price charts",
      "Portfolio tracking",
      "Price alerts and notifications"
    ],
    github: "https://github.com/sagarrai21802/bitcoin-monitor",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'sira-website',
    title: "SIRA Website: AI Digital Marketing Agent",
    description: "An AI-powered digital marketing platform that serves as your intelligent marketing agent, automating content creation, scheduling, and strategy.",
    longDescription: "SIRA Website is a cutting-edge AI-powered digital marketing platform designed to revolutionize how businesses approach their marketing efforts. The platform serves as an intelligent marketing agent that automates content creation, campaign management, and strategy optimization.\n\nBuilt with modern web technologies, SIRA leverages advanced AI integration to understand brand voice, target audience, and marketing goals. The platform then generates tailored content, suggests campaign strategies, and provides actionable insights.",
    tech: ["React", "TypeScript", "AI Integration", "Vercel", "REST APIs", "Marketing Automation"],
    image: null,
    video: null,
    showVideo: false,
    liveUrl: "https://siraaaaaaa.vercel.app",
    liveDemo: "https://siraaaaaaa.vercel.app",
    achievements: "Live platform, AI-powered marketing, Full automation",
    features: [
      "AI-powered content generation",
      "Automated campaign management",
      "Social media scheduling",
      "Marketing analytics dashboard",
      "Brand voice customization"
    ],
    github: "https://github.com/sagarrai21802/sira-website"
  },
  {
    id: 'keyboard-extension',
    title: "AI Keyboard: Grok-Powered iOS Keyboard Extension",
    description: "Custom iOS keyboard extension that enhances user responses using the Grok API, bypassing iOS sandbox and 30MB memory restrictions.",
    longDescription: "AI Keyboard is an innovative iOS keyboard extension that brings the power of Grok AI directly to your fingertips. The extension enhances user responses in real-time, helping craft better messages, emails, and content across any app on iPhone.\n\nThis project presented unique technical challenges. Keyboard extensions operate within Apple's strict sandbox environment, which severely limits network access. Additionally, iOS imposes a 30MB memory limit on keyboard extensions. The solution involved implementing efficient data streaming and App Groups communication.",
    tech: ["Swift", "iOS Keyboard Extension", "Grok API", "REST APIs", "App Extension", "iOS Sandbox", "App Groups"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Grok API integration, iOS restrictions overcome, Real-time AI enhancement",
    features: [
      "Real-time AI response enhancement",
      "Grok API integration",
      "Works across all iOS apps",
      "Lightweight 30MB optimized design",
      "iOS sandbox restriction workarounds"
    ],
    github: "https://github.com/sagarrai21802/KeyboardExtention.git",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'sira',
    title: "SIRA: AI-Powered Marketing Platform (iOS)",
    description: "Converted a complex SaaS web platform into a fully native iOS experience using SwiftUI and REST APIs, improving user engagement by 40%.",
    longDescription: "SIRA represents a significant technological achievement in converting a complex web-based SaaS platform into a native iOS application. The application leverages SwiftUI's declarative UI paradigm to create an interactive dashboard that dynamically renders content based on user preferences and real-time data.\n\nKey technical achievements include modular component architecture, efficient state management, and optimized performance that resulted in a 40% improvement in user engagement compared to the web version.",
    tech: ["SwiftUI", "REST APIs", "Automation", "AI Integration"],
    image: "/sira-marketing-platform-ui.png",
    video: null,
    showVideo: false,
    achievements: "40% user engagement improvement, Native iOS conversion",
    features: [
      "Native iOS performance",
      "AI-powered content generation",
      "Interactive dashboard components",
      "Real-time data synchronization",
      "Advanced user analytics"
    ],
    github: "https://github.com/sagarrai21802/sira",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'inspoquotes',
    title: "Inspoquotes: Premium Quotes iOS App",
    description: "Developed a premium quotes app mastering in-app purchases, subscription models, App Store Connect, and deployment fundamentals.",
    longDescription: "Inspoquotes is a premium iOS application that delivers inspirational quotes and content to users worldwide. The app demonstrates expertise in App Store Connect, in-app purchases, and monetization strategies while maintaining high user satisfaction.\n\nThe application features a sophisticated subscription model with multiple tiers, enabling users to access premium content and advanced features. The onboarding flow is carefully designed to maximize user engagement and retention.",
    tech: ["Swift", "UIKit", "In-App Purchase", "App Store Connect", "Deployment"],
    image: "/inspoquotes-app-ui.png",
    video: null,
    showVideo: false,
    achievements: "95% user retention, Successful deployment",
    features: [
      "Premium content subscription",
      "Offline quote reading",
      "Personal quote collections",
      "Social sharing integration",
      "Custom notification system"
    ],
    github: "https://github.com/sagarrai21802/inspoquotes",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'raidental-clinic',
    title: "RaiDental Clinic Website",
    description: "A professional dental clinic business website featuring appointment booking, service showcases, and patient workflows that increased appointments by 50%.",
    longDescription: "RaiDental Clinic Website is a professional, modern healthcare web application designed specifically for a dental clinic. The website provides a comprehensive online presence with features that help patients learn about services, meet the team, and book appointments.\n\nThe website features an elegant, clean design that instills trust and professionalism. Its integration streamlined appointment workflows, increasing handled appointments by 50%. Built with React and TypeScript, the website offers responsive design ensuring optimal viewing on all devices.",
    tech: ["React", "TypeScript", "UI/UX Design", "Responsive Design", "Vercel"],
    image: null,
    video: null,
    showVideo: false,
    liveUrl: "https://raidentalclinic.com/",
    liveDemo: "https://raidentalclinic.com/",
    achievements: "Live platform, Appointment booking, Streamlined workflow (50% increase)",
    features: [
      "Appointment booking system",
      "Services showcase with detailed information",
      "Team introduction and qualifications",
      "Patient testimonials section",
      "Responsive design for all devices"
    ],
    github: null,
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'orbit-ai',
    title: "Orbit AI: AI Notetaker",
    description: "An AI-powered meeting assistant that automatically joins meetings, transcribes audio, and provides comprehensive summaries and action items.",
    longDescription: "Orbit AI is a powerful enterprise-grade AI notetaker application designed to revolutionize how organizations handle meetings. This innovative platform automatically joins scheduled meetings and provides comprehensive summaries, eliminating the need for manual note-taking.\n\nThe application leverages advanced AI capabilities to transcribe meeting conversations in real-time, analyze the content, and extract key insights including action items, decisions, and important discussion points.",
    tech: ["React", "TypeScript", "AI Integration", "Vercel", "Meeting APIs", "Enterprise"],
    image: null,
    video: null,
    showVideo: false,
    liveUrl: "https://orbit-ai-orbit.vercel.app/",
    liveDemo: "https://orbit-ai-orbit.vercel.app/",
    achievements: "Live platform, Enterprise AI notetaker, Meeting summarization",
    features: [
      "Automatic meeting joining",
      "Real-time transcription",
      "AI-powered summary generation",
      "Action item extraction",
      "Decision tracking",
      "Enterprise security and privacy"
    ],
    github: null,
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'twitter-sentiment',
    title: "Twitter Sentiment Analysis: ML Stock Prediction App",
    description: "A machine learning iOS app that scrapes tweets from Twitter (X) and analyzes sentiment for stock predictions. Utilizes on-device Core ML.",
    longDescription: "This innovative iOS application combines social media sentiment analysis with stock market prediction using machine learning. The app demonstrates advanced skills in Core ML integration, natural language processing, and financial data analysis.\n\nThe application processes Twitter/X data to analyze public sentiment around specific stocks and market trends. Using Core ML's on-device processing capabilities, the app maintains user privacy while providing real-time sentiment analysis with 85% accuracy.",
    tech: ["Swift", "Core ML", "Twitter API", "Machine Learning", "Natural Language Processing"],
    image: "/twitter-sentiment-ml-ui.png",
    video: null,
    showVideo: false,
    achievements: "85% accuracy, On-device ML processing",
    features: [
      "Real-time sentiment analysis",
      "Stock market trend predictions",
      "On-device ML processing",
      "Historical sentiment tracking",
      "Custom stock watchlists"
    ],
    github: "https://github.com/sagarrai21802/twitter-sentiment",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'image-recognition',
    title: "Image Recognition: On-Device Object Detection App",
    description: "An iOS app with built-in image recognition models for identifying objects in photos, leveraging Core ML and the Vision Framework.",
    longDescription: "This advanced iOS application showcases expertise in computer vision and machine learning model deployment. The app implements custom Core ML models for real-time object detection and classification, demonstrating deep understanding of mobile ML optimization.\n\nThe application utilizes Apple's Vision Framework to process images and identify objects with high accuracy. Custom model creation and optimization techniques ensure efficient performance on mobile devices without relying on cloud services.",
    tech: ["Swift", "Core ML", "Vision Framework", "Machine Learning", "Image Processing"],
    image: "/image-recognition-app-ui.png",
    video: null,
    showVideo: false,
    achievements: "High accuracy recognition, On-device processing",
    features: [
      "Real-time object detection",
      "Custom model training",
      "Photo library integration",
      "Camera capture functionality",
      "Detailed classification results"
    ],
    github: "https://github.com/sagarrai21802/image-recognition",
    liveUrl: null,
    liveDemo: null
  },
  
  // NEW ADDED PROJECTS FROM CONTEXT.MD
  {
    id: 'duneshine-customer',
    title: "DuneShine Customer Application (iOS)",
    description: "Car wash booking application for customers to schedule, pay, and track services in real-time.",
    longDescription: "DuneShine Customer Application is a full-stack native iOS app designed for customers to book and manage car wash services. The app offers a seamless booking workflow where users can choose from various car service packages, schedule appointments, track real-time booking status, view employee assignments, and complete payments securely. Built with SwiftUI and integrated with Firebase, it delivers a highly responsive mobile experience.",
    tech: ["SwiftUI", "URLSession", "Firebase", "Real-time updates", "Core Location"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "App Store release in progress, Native iOS UX",
    features: [
      "End-to-end car wash booking workflow",
      "Real-time booking status tracking",
      "Service scheduling and history",
      "Employee assignment visibility",
      "Secure payment integration"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'duneshine-employee',
    title: "DuneShine Employee Application (iOS)",
    description: "Companion application for car wash employees to view and manage assigned bookings with location services.",
    longDescription: "The DuneShine Employee Application is the companion mobile app to the DuneShine ecosystem. It allows service personnel and car wash technicians to manage their schedules, view assigned bookings in real-time, navigate to customer locations, and update service status. Built using SwiftUI and UIKit, it is fully synchronized with Firebase for instant notifications.",
    tech: ["SwiftUI", "UIKit", "Firebase", "Location Services", "Real-time updates"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Production ready, Companion workflow",
    features: [
      "View assigned car wash bookings",
      "Real-time status updates and notifications",
      "Task completion tracking",
      "Employee scheduling",
      "Service status updates"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'duneshine-web-portal',
    title: "DuneShine Web Portal / WebView Migration",
    description: "Complete migration from native Flutter app to Next.js web app wrapped in Flutter WebView shell.",
    longDescription: "This project involved migrating the native Flutter application to a Next.js web application wrapped in a Flutter WebView shell. The frontend is built using Next.js, React, Tailwind CSS, and Framer Motion, with real-time updates powered by Firebase and WebSockets. The mobile integration handles safe area constraints, intercepts external URLs in WebView, and persists tabs using the IndexedStack pattern.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Flutter", "Firebase", "WebSockets"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Complete web portal migration, native WebView experience",
    features: [
      "Real-time status polling",
      "Employee photo fields with base URL handling",
      "Before/after service photos upload",
      "Parking notes and special requests",
      "Transaction pagination",
      "Safe area CSS integration"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'snap-finance',
    title: "Snap Finance iOS App (Production Fix)",
    description: "Fixed major iOS build failure by resolving Git-based dependency conflicts, unblocking App Store deployment.",
    longDescription: "Snap Finance is a loan application for the US market. During development, a critical iOS build failure halted production deployment. Sagar diagnosed and resolved complex Git-based dependency conflicts in CocoaPods and Swift Package Manager (SPM). This intervention restored CI/CD stability, unblocked deployment, and saved the client over $300k in blocked revenue.",
    tech: ["Swift", "UIKit", "CocoaPods", "Swift Package Manager", "CI/CD"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Saved client $300k+, restored CI/CD stability",
    features: [
      "Git-based dependency resolution",
      "CocoaPods & SPM troubleshooting",
      "App Store deployment unblocking",
      "CI/CD pipeline stabilization"
    ],
    github: null,
    liveUrl: "https://apps.apple.com/us/app/snap-finance/id1580164214",
    liveDemo: "https://apps.apple.com/us/app/snap-finance/id1580164214"
  },
  {
    id: 'pulse-confession',
    title: "Pulse: Anonymous Q&A and Confession App",
    description: "Anonymous Q&A and confession platform for college students, inspired by Gas app.",
    longDescription: "Pulse is an anonymous Q&A and confession platform for college students. Inspired by Gas, the app allows students to vote on positive polls, post anonymous confessions, and chat anonymously. It includes real-time response moderation to prevent harassment and abuse, maintaining a safe and engaging community.",
    tech: ["SwiftUI", "Firebase Firestore", "Real-time Messaging", "Moderation Systems"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "In active development / testing, Gas-inspired Q&A",
    features: [
      "Anonymous confession posting",
      "Peer-to-peer anonymous Q&A",
      "Real-time response moderation",
      "Anonymous chat functionality",
      "Community engagement metrics"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'nudge-ai',
    title: "Nudge AI: LinkedIn Content Automation",
    description: "AI-powered LinkedIn content generation and auto-posting tool for marketing automation.",
    longDescription: "Nudge AI is a SaaS platform that automates LinkedIn content creation and posting. Users can generate posts using Claude AI, schedule them, and post them automatically via LinkedIn's OAuth 2.0 API. It features secure token rotation, a dark editorial design, autonomous cursor animations, and a freemium model.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Python", "FastAPI", "LinkedIn OAuth 2.0", "Claude API"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Freemium model, secure OAuth 2.0, AI content automation",
    features: [
      "AI-powered content generation",
      "One-click auto-posting to LinkedIn",
      "Content scheduling and calendar",
      "Secure HTTPOnly cookie token management",
      "Shimmer skeleton loaders",
      "Interactive custom animations"
    ],
    github: null,
    liveUrl: "https://neu-nudge.vercel.app/",
    liveDemo: "https://neu-nudge.vercel.app/",
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'uphaaar',
    title: "Uphaaar: E-Commerce Gift Platform",
    description: "E-commerce platform for a gift business doing ₹12 lakhs+ INR/month in sales, featuring Razorpay payment validation.",
    longDescription: "Uphaaar is a full-stack e-commerce platform built for a gifting business processing over ₹12 lakhs in monthly sales. It includes a dynamic product catalog, Zustand cart state with local storage persistence, Razorpay payment validation, and an admin dashboard for inventory and order management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Zustand", "Razorpay"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Serving ₹12L+/month sales, Secure payment validation",
    features: [
      "Product catalog with dynamic filtering",
      "Zustand cart state with localStorage persistence",
      "Razorpay server-side payment signature validation",
      "Order management dashboard",
      "JWT-based admin authentication"
    ],
    github: null,
    liveUrl: "https://uphaaar.vercel.app/",
    liveDemo: "https://uphaaar.vercel.app/",
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'ss-steel',
    title: "SS Steel and Fasteners E-Commerce Website",
    description: "B2B/B2C website for industrial steel and fasteners products.",
    longDescription: "SS Steel and Fasteners is a B2B/B2C website for industrial steel and fasteners. It features a complete product catalog categorized by industrial standards, pricing tables, dynamic order forms, and responsive design to support business clients on the go.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Live B2B/B2C catalog, streamlined order forms",
    features: [
      "Structured product categories",
      "Detailed pricing tables",
      "Industrial product catalog",
      "Dynamic contact and inquiry forms"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'swad-safari',
    title: "Swad Safari: Vendor Management Application",
    description: "Vendor management application for food delivery service, deployed in Rajasthan.",
    longDescription: "Swad Safari is a food vendor management application deployed in Heldone City, Rajasthan. It enables food vendors to manage menus, receive and track delivery orders in real-time, view revenue analytics, and receive automated payment settlements.",
    tech: ["Flutter", "Dart", "Firebase", "Real-time updates", "Mobile UI"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Live in Heldone City, Rajasthan",
    features: [
      "Vendor dashboard with sales charts",
      "Order management and tracking",
      "Menu customization",
      "Real-time delivery tracking",
      "Revenue analytics and payouts"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'zeno',
    title: "Zeno / Screen Guardian: Screen Time Monitor",
    description: "Gamified app blocker that helps users reduce screen time using character-based intervention.",
    longDescription: "Zeno / Screen Guardian is a gamified cross-platform app blocker. It monitors screen time on iOS and Android. It uses a character-based system that warning users at 50% threshold, switching screen to grayscale at 10%, and fully locking the screen above limits. It features custom Kotlin TouchBlockingFrameLayout overlays on Android and screen time monitoring on iOS.",
    tech: ["Flutter", "Kotlin", "Swift", "Next.js", "Firebase", "SharedPreferences"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Hackathon project, gamified app blocking",
    features: [
      "Gamified character-based UI",
      "Grayscale mode at 10% remaining limit",
      "Touch blocking lock screen overlay",
      "App usage tracking via SharedPreferences",
      "Local threshold notifications"
    ],
    github: null,
    liveUrl: "https://zeno-sandy.vercel.app/",
    liveDemo: "https://zeno-sandy.vercel.app/",
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'findmyschool',
    title: "FindMySchool.co: School Directory Platform",
    description: "Comprehensive school search and listing directory for all schools across India.",
    longDescription: "FindMySchool.co is a school directory listing platform for India. It includes nested hierarchical filtering (State -> District -> City -> Area) and detailed profiles containing fee structures, reviews, academic performance, and map locations.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Firebase", "PostgreSQL", "Google Analytics"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Active user base, India-wide school database",
    features: [
      "Nested location filtering",
      "Redesigned modern card layouts",
      "School comparison tool",
      "Reviews and academic grading",
      "Role-based access control"
    ],
    github: null,
    liveUrl: "https://findmyschool.co",
    liveDemo: "https://findmyschool.co",
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'audio-crm-pipeline',
    title: "Audio-to-CRM Data Pipeline",
    description: "Speech-to-text and AI pipeline that transcribes audio and automatically populates CRM forms.",
    longDescription: "This platform allows users to record audio once. The system automatically transcribes it using Whisper, extracts key details (names, numbers, issues) using Claude or Gemini, and auto-populates CRM forms, eliminating 100% of manual data entry.",
    tech: ["SwiftUI", "Next.js", "FastAPI", "Python", "Whisper", "Gemini API", "Claude API", "Twilio"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "10x faster CRM data entry, 90%+ AI extraction accuracy",
    features: [
      "Voice recording via AVFoundation / Web APIs",
      "Whisper speech-to-text transcription",
      "Gemini/Claude API field mapping",
      "Webhook-driven async queue",
      "Confidence-scored data validation"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'feed-application',
    title: "Feed Application: Society Updates",
    description: "Community feed application for society and community residents to view updates.",
    longDescription: "Feed Application is a real-time community announcement feed. It enables society management to post announcements, schedule updates, and push notifications to residents. It includes moderation controls and user comment sections.",
    tech: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Python", "Firebase", "FCM", "WebSockets"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Real-time society announcements, high engagement",
    features: [
      "Community announcement feed",
      "Push notifications via Firebase Cloud Messaging",
      "Real-time updates via WebSockets",
      "Admin moderation dashboard",
      "Post scheduling"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'ai-meeting-notetaker-internal',
    title: "AI Meeting Notetaker (Internal Tool)",
    description: "Fireflies-inspired AI meeting notetaker for internal company use.",
    longDescription: "This iOS application records meetings, transcribes audio locally or via API, and generates session summaries and action items. It was built as an internal productivity tool and reduced manual documentation time by 60%.",
    tech: ["SwiftUI", "Audio Recording APIs", "AI Integration", "FastAPI"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "60% manual documentation time reduction",
    features: [
      "Real-time audio recording",
      "Automatic meeting transcription",
      "AI session summaries",
      "Action item extraction"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'ac-service-sms-bot',
    title: "AC Service SMS Bot & Messaging Automation",
    description: "AI-powered SMS automation for AC service company customer interactions.",
    longDescription: "AC Service SMS Bot detects missed calls and automatically triggers an SMS workflow. Powered by Gemini 2.0 Flash, it guides the customer through problem description, address collection, and booking creation via a webhook-driven state machine.",
    tech: ["Python", "FastAPI", "Twilio SMS", "Gemini 2.0 Flash", "Ngrok"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Multi-tenant service automation, auto-scheduling",
    features: [
      "Missed call detection auto-SMS trigger",
      "State machine workflow management",
      "Address and urgency extraction via Gemini 2.0 Flash",
      "Twilio webhook integration"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'jarvis-macos',
    title: "Jarvis: macOS AI Agent",
    description: "Desktop macOS application for natural conversational interaction with AI.",
    longDescription: "Jarvis is a desktop macOS app providing offline-capable conversation storage, markdown rendering, and quick access from the macOS menu bar. It integrates with the Claude API to provide rapid, desktop-native AI assistance.",
    tech: ["Swift", "SwiftUI", "Claude API", "SQLite"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "System-level AI assistant, private local storage",
    features: [
      "Natural language chat with Claude",
      "Menu bar quick access",
      "Local history caching via SQLite",
      "Custom keyboard shortcuts"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'whatsapp-scraper',
    title: "WhatsApp Data Scraper",
    description: "Browser extension to scrape and export contacts and conversation data from WhatsApp Web.",
    longDescription: "A Chrome extension designed to help users export contacts and chat histories from WhatsApp Web for backup or customer relationship management. Features clean CSV/JSON exporting and respects user privacy.",
    tech: ["JavaScript", "Chrome Extension APIs", "DOM Manipulation"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Simplifies CRM lead backup from WhatsApp Web",
    features: [
      "Contact list exporting",
      "Conversation history backup",
      "Multiple format downloads",
      "Direct browser DOM scraping"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null,
    isApplication: true,
    version: "1.0.0",
    size: "2.1 MB",
    downloadUrl: "/apps/whatsapp-scraper/whatsapp-scraper-v1.0.0.zip",
    icon: "/apps/whatsapp-scraper/icon128.png"
  },
  {
    id: 'image-data-entry-ocr',
    title: "Image Data Entry OCR Extension",
    description: "Form auto-fill extension using OCR to extract data from scanned receipts and documents.",
    longDescription: "A lightweight Chrome extension that integrates Tesseract.js to perform on-device OCR on images, automatically detecting inputs and filling form fields. Extremely useful for invoice and receipt scanning workflows.",
    tech: ["JavaScript", "Tesseract.js", "Chrome Extension APIs", "DOM automation"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "On-device OCR, no external database dependencies",
    features: [
      "Screenshot OCR capture",
      "Form field auto-detection",
      "Local Tesseract remote model loading",
      "Speed-optimized processing"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null,
    isApplication: true,
    version: "1.0.0",
    size: "1.5 MB",
    downloadUrl: "/apps/image-data-entry-ocr/extension.zip",
    icon: "/apps/image-data-entry-ocr/icon128.png"
  },
  {
    id: 'portfolio-website',
    title: "Portfolio Website: sagarrai.tech",
    description: "Professional portfolio showcasing all projects, skills, and work experience.",
    longDescription: "This is the very portfolio website you are browsing. Built with React, TypeScript, Next.js page layouts, custom styling, and Vercel hosting, it presents 30+ projects, skills, certifications, and work experience in a modern stacked-card design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vercel"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Showcases 60+ projects, high-performance animations",
    features: [
      "Stacked-card page layouts",
      "Aesthetic micro-animations",
      "Applications download section",
      "Fully responsive layout"
    ],
    github: "https://github.com/sagarrai21802/sagar-rai-portfolio-swift",
    liveUrl: "https://sagarrai.tech",
    liveDemo: "https://sagarrai.tech"
  },
  {
    id: 'promptshop-mvp',
    title: "PromptShop iOS MVP",
    description: "iOS prototype for AI agent marketplace platform, showcasing search, details, and purchase flow.",
    longDescription: "An iOS MVP built for PromptShop, an AI agent marketplace. Features SwiftUI views for browsing agents, checking details, searching, bookmarking, and a complete purchase flow with Stripe payments.",
    tech: ["SwiftUI", "REST APIs", "Stripe payments", "MVVM"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Assignment completed, prototype demo",
    features: [
      "Browse and search AI agents",
      "Stripe payment integration",
      "Detailed agent metadata display",
      "Local favorites system"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'ambulance-tracker',
    title: "Ambulance Tracker App",
    description: "Dual-app system (Monitor + Driver) with real-time location tracking using Firebase.",
    longDescription: "A dual-application system for ambulance tracking. Features a Driver app that broadcasts location and a Monitor app for hospitals/users to track the ambulance in real-time, built with SwiftUI, Firebase, and location services.",
    tech: ["SwiftUI", "REST APIs", "Firebase", "Location Services"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Real-time dispatch, location tracking",
    features: [
      "Dual-app driver and monitor UI",
      "Real-time location sync via Firebase",
      "Urgency status toggling",
      "Push notifications"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null
  }
];
