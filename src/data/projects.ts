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
    id: 'duneshine-employee',
    title: "DuneShine Employee Application",
    description: "Official companion application for DuneShine car wash employees and technicians to manage shift schedules, view assigned bookings, and update service status in real-time.",
    longDescription: "The DuneShine Employee Application is an essential companion mobile app published on the Google Play Store for car wash technicians. It enables field staff to check shift availability, view assigned job bookings in real-time, navigate to customer locations, and update service progress on the go.",
    tech: ["Android", "Kotlin", "Flutter", "Firebase"],
    image: "/duneshine-employee-poster.webp",
    video: null,
    showVideo: false,
    liveUrl: "https://play.google.com/store/apps/details?id=ae.duneshine.employeeapp&pcampaignid=web_share",
    liveDemo: "https://play.google.com/store/apps/details?id=ae.duneshine.employeeapp&pcampaignid=web_share",
    achievements: "Published on Google Play Store, Shift availability & job assignment management",
    features: [
      "Shift check-in and availability calendar management",
      "Real-time assigned booking notifications and updates",
      "Customer location navigation and task completion tracking",
      "On-demand job acceptance and service status management"
    ],
    github: null,
    isApplication: true,
    icon: "/duneshine-employee-poster.png",
    size: "Google Play Store",
    version: "1.0.0",
    downloadUrl: "https://play.google.com/store/apps/details?id=ae.duneshine.employeeapp&pcampaignid=web_share"
  },
  {
    id: 'duneshine-android',
    title: "DuneShine: Doorstep Waterless Carwash App",
    description: "On-demand waterless carwash booking application for scheduling and managing doorstep cleaning services.",
    longDescription: "DuneShine is an on-demand waterless carwash booking platform live on the Google Play Store. It allows customers to schedule doorstep carwashes, track assigned washers in real-time, manage subscriptions, and process secure payments through an eco-friendly service model.",
    tech: ["Android", "Kotlin", "React Native", "Firebase"],
    image: "/duneshine-app-poster.webp",
    video: null,
    showVideo: false,
    liveUrl: "https://play.google.com/store/apps/details?id=ae.duneshine.car&pcampaignid=web_share",
    liveDemo: "https://play.google.com/store/apps/details?id=ae.duneshine.car&pcampaignid=web_share",
    achievements: "Published on Google Play Store, 100+ downloads, eco-friendly waterless formula",
    features: [
      "Doorstep waterless carwash scheduling",
      "Real-time tracking of service status",
      "Subscription and on-demand wash bookings",
      "Secure payment gateway integration",
      "Push notifications for washer milestones"
    ],
    github: null,
    isApplication: true,
    icon: "https://i.pinimg.com/736x/80/e8/75/80e87573def76cb5c893fbd2ff0f8e1f.jpg",
    size: "Google Play Store",
    version: "1.2.0",
    downloadUrl: "https://play.google.com/store/apps/details?id=ae.duneshine.car&pcampaignid=web_share"
  },
  {
    id: 'swad-safari',
    title: "SwadSafari: Vendor Management Application Redesign",
    description: "Redesigned and rebuilt vendor management application for food-service client, modernizing outdated workflows.",
    longDescription: "SwadSafari is a modernized vendor management mobile app built for food-service client operations in Rajasthan. It provides an end-to-end interface overhaul for vendor onboarding, order tracking, inventory management, and real-time status updates.",
    tech: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    image: "/swadsafari-vendor-app.webp",
    video: null,
    showVideo: false,
    achievements: "Live deployment in Heldone City, Rajasthan, end-to-end vendor workflow modernization",
    features: [
      "Redesigned and rebuilt vendor management application for food-service client, modernized outdated workflows",
      "End-to-end interface overhaul: vendor onboarding, order tracking, inventory management",
      "Deployed and actively used in Heldone City, Rajasthan"
    ],
    github: null,
    liveUrl: null,
    liveDemo: null,
    isApplication: false,
    icon: "/swadsafari-vendor-app.webp"
  },
  {
    id: 'zeno',
    title: "Zeno: Gamified Screen Time Tracker",
    description: "Native Swift screen time monitoring system that gamifies daily usage limits and reinforces focus.",
    longDescription: "Zeno is a gamified native Swift screen time monitoring system that helps users build lasting habits. It features core iOS app-blocking logic using queryIntentActivities and a custom lock-screen intervention layer to reinforce daily usage limits without disrupting usability.",
    tech: ["Swift", "SwiftUI", "iOS", "ScreenTime API", "queryIntentActivities"],
    image: null,
    video: null,
    showVideo: false,
    achievements: "Live Gamified Screen Time Tracker, Native Swift app blocking & intervention layer",
    features: [
      "Native Swift screen time monitoring system, gamifies daily usage limits, helps build lasting habits via engaging reward-driven experience",
      "Core iOS app-blocking logic using queryIntentActivities, custom lock-screen intervention layer, reinforces limits without disrupting usability"
    ],
    github: null,
    liveUrl: "https://zeno-sandy.vercel.app/",
    liveDemo: "https://zeno-sandy.vercel.app/",
    isApplication: true,
    size: "Live Website"
  },
  {
    id: 'alamofire-open-source',
    title: "Alamofire: Open Source Contribution",
    description: "Open source contribution to Alamofire enhancing AFError.url accuracy for millions of iOS developers.",
    longDescription: "Open source contribution to Alamofire, the premier Swift networking library with 40k+ stars. Sagar enhanced the AFError.url property to correctly extract failingURL instances in sessionTaskFailed cases, improving error handling and debugging reliability across the global iOS developer community.",
    tech: ["Swift", "Alamofire", "Error Handling", "Unit Testing", "Open Source"],
    image: "/open-source-projects-preview.webp",
    video: "/Alomofire.mp4",
    showVideo: true,
    features: [
      "Open source contribution to Alamofire (40k+ stars)",
      "Enhanced AFError.url property accuracy",
      "Proper URLError extraction for failingURL in sessionTaskFailed",
      "Added comprehensive test coverage (PR #3965)"
    ],
    github: "https://github.com/Alamofire/Alamofire/pull/3965",
    liveUrl: "https://github.com/Alamofire/Alamofire/pull/3965",
    liveDemo: "https://github.com/Alamofire/Alamofire/pull/3965"
  },
  {
    id: 'kingfisher-open-source',
    title: "Kingfisher: Open Source Contribution",
    description: "Open source contribution to Kingfisher stabilizing failure image rendering attributes for 22k+ Swift projects.",
    longDescription: "Open source contribution to Kingfisher, the popular iOS image downloading and caching library with 22k+ stars. Sagar resolved the .onFailureImage modifier configuration application bug, ensuring clean separation between success and failure image rendering attributes while maintaining backward compatibility.",
    tech: ["Swift", "SwiftUI", "Kingfisher", "Image Processing", "Open Source"],
    image: "/open-source-contributions-preview.webp",
    video: "/Kingfisher.mp4",
    showVideo: true,
    features: [
      "Open source contribution to Kingfisher (22k+ stars)",
      "Fixed .onFailureImage modifier configuration application issue",
      "Ensured clean separation of success and failure image rendering",
      "Maintained complete backward compatibility"
    ],
    github: "https://github.com/onevcat/Kingfisher",
    liveUrl: "https://github.com/onevcat/Kingfisher",
    liveDemo: "https://github.com/onevcat/Kingfisher"
  },
  {
    id: 'kahaniyan',
    title: "Kahaniyan: Immersive Hindi Story Platform",
    description: "A beautiful platform where readers can engage with classic and contemporary Hindi horror and folk literature. Built from scratch with optimized SSR.",
    longDescription: "Kahaniyan is a Hindi literature and storytelling platform offering a curated collection of classic and folk horror stories. Built with Next.js App Router and TypeScript, it delivers an immersive, distraction-free reading experience with fast server-side rendering.",
    tech: ["Next.js", "React", "FastAPI", "Python"],
    image: "https://i.pinimg.com/1200x/b0/b0/7c/b0b07c44cfb61aa521b01b2dbd8c090a.jpg",
    video: null,
    showVideo: false,
    liveUrl: "https://kahaniyan.page",
    liveDemo: "https://kahaniyan.page",
    achievements: "Live platform, Hindi literature, 60+ published stories",
    features: [
      "Curated Hindi story collection",
      "Elegant reading interface",
      "Responsive design",
      "Easy navigation",
      "Regular content updates"
    ],
    github: null,
    isApplication: true,
    icon: "https://i.pinimg.com/1200x/b0/b0/7c/b0b07c44cfb61aa521b01b2dbd8c090a.jpg",
    size: "Live Website"
  },
  {
    id: 'dobbie',
    title: "Dobbie: AI-Powered LinkedIn Content Platform",
    description: "A revolutionary single-platform solution that empowers multiple users simultaneously with one-click LinkedIn posting, perfect hooks, and engaging content formatting.",
    longDescription: "Dobbie is an AI-powered LinkedIn content platform that enables multi-user teams to craft viral posts, generate attention-grabbing hooks, and auto-format text. Integrated directly with the LinkedIn API, it empowers users to publish optimized posts with one click.",
    tech: ["SwiftUI", "AI Integration", "REST APIs", "Content Generation", "Social Media Automation", "LinkedIn API"],
    image: "/dobbie-ios-app-preview.webp",
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
    longDescription: "VisionAssist is an AI accessibility browser extension developed for the Kaggle DeepMind Hackathon. It assists visually impaired users by parsing web pages, synthesizing natural speech to read content aloud, and providing AI-generated descriptions of images and visual elements.",
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
    longDescription: "Ticket Booking System is an enterprise-grade full-stack Java Spring Boot application. It features a complete booking workflow with seat selection, RESTful APIs, MySQL database management, payment integration, and secure JWT authentication.",
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
    github: null,
    liveUrl: "https://ticketbookingsystem-nu.vercel.app/",
    liveDemo: "https://ticketbookingsystem-nu.vercel.app/"
  },
  {
    id: 'glasscast',
    title: "GlassCast: Advanced Weather Application",
    description: "An advanced weather application featuring a beautiful glassmorphism design, real-time tracking, Core Location support, and interactive forecasts.",
    longDescription: "GlassCast is an advanced iOS weather application crafted with a frosted glassmorphism UI. It utilizes Core Location and weather APIs to deliver real-time forecasts, animated conditions, and hourly weather metrics with smooth SwiftUI visual effects.",
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
    longDescription: "OCR AutoFill Extension is an automated web data entry solution combining a Chrome Extension with a FastAPI backend. Powered by Tesseract OCR, it automatically extracts 16 predefined fields from document images and populates WebForms with 95%+ accuracy.",
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
    version: "2.2.0",
    size: "1.8 MB",
    downloadUrl: "/apps/ocr-extension/ocr-extension-v2.2.0.zip",
    icon: "/apps/ocr-extension/icon128.png"
  },
  {
    id: 'echominutes',
    title: "EchoMinutes: AI-Powered Meeting Summary Extension",
    description: "Chrome extension that uploads audio from meetings and generates structured meeting summaries, action items, and participants list using AI.",
    longDescription: "EchoMinutes is an AI-powered Chrome extension for automated meeting documentation. By uploading meeting audio recordings, it transcribes speech, generates structured meeting summaries, extracts action items with deadlines, and tracks key decisions.",
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
    longDescription: "Todoey is a native iOS task management app built with Swift and UIKit following the MVC architecture. It showcases 5+ data persistence strategies—including Realm, Core Data, SQLite, File Manager, and Keychain—achieving 100% data integrity.",
    tech: ["Swift", "UIKit", "Realm", "Core Data", "SQLite", "MVC"],
    image: "/todoey-task-app-ui.webp",
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
    github: "https://github.com/sagarrai21802/To_Do_List.git",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'hackernews',
    title: "Hacker News: Real-time iOS News Feed App",
    description: "SwiftUI iOS app featuring a real-time news feed powered by Y Combinator's API. Achieved <200ms data fetch latency and supports iOS 15-18.",
    longDescription: "Hacker News is a real-time iOS news feed app built with SwiftUI and MVVM. Powered by Y Combinator's API via URLSession and JSONDecoder, it delivers sub-200ms fetch latency and an adaptive interface supporting iOS 15–18.",
    tech: ["Swift", "SwiftUI", "URLSession", "JSON Decoding", "MVVM"],
    image: "/hackernews-ios-app-ui.webp",
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
    github: "https://github.com/sagarrai21802/Hacker-News",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'bitcoin-monitor',
    title: "Bitcoin Monitor: Real-time Cryptocurrency Tracker",
    description: "A comprehensive Bitcoin monitoring application that fetches real-time prices across multiple fiat currencies and displays historical trends.",
    longDescription: "Bitcoin Monitor is a real-time cryptocurrency tracking web app. It fetches live market prices across multiple fiat currencies using WebSockets and visualizes historical price trends with interactive Chart.js graphs.",
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
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'sira-website',
    title: "SIRA Website: AI Digital Marketing Agent",
    description: "An AI-powered digital marketing platform that serves as your intelligent marketing agent, automating content creation, scheduling, and strategy.",
    longDescription: "SIRA Website is an AI digital marketing agent platform. It automates brand content creation, social media campaign scheduling, and marketing analytics through advanced AI models and a modern web dashboard.",
    tech: ["React", "TypeScript", "AI Integration", "Vercel", "REST APIs", "Marketing Automation"],
    image: null,
    video: null,
    showVideo: false,
    liveUrl: null,
    liveDemo: null,
    achievements: "Live platform, AI-powered marketing, Full automation",
    features: [
      "AI-powered content generation",
      "Automated campaign management",
      "Social media scheduling",
      "Marketing analytics dashboard",
      "Brand voice customization"
    ],
    github: "https://github.com/sagarrai21802/SIRA.git"
  },
  {
    id: 'keyboard-extension',
    title: "AI Keyboard: Grok-Powered iOS Keyboard Extension",
    description: "Custom iOS keyboard extension that enhances user responses using the Grok API, bypassing iOS sandbox and 30MB memory restrictions.",
    longDescription: "AI Keyboard is a Grok-powered custom iOS keyboard extension that enhances messages in real-time across any iOS app. It bypasses Apple's strict extension sandbox and 30MB memory constraints using App Groups and streaming data.",
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
    longDescription: "SIRA is a native iOS marketing platform built with SwiftUI. Migrated from a SaaS web application, it delivers dynamic content dashboards, real-time analytics, and AI content generation, resulting in a 40% boost in user engagement.",
    tech: ["SwiftUI", "REST APIs", "Automation", "AI Integration"],
    image: "/sira-marketing-platform-ui.webp",
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
    longDescription: "Inspoquotes is a premium iOS quote application featuring in-app purchases and subscription tiers. Built with UIKit and App Store Connect, it delivers inspirational content with custom notification scheduling and offline access.",
    tech: ["Swift", "UIKit", "In-App Purchase", "App Store Connect", "Deployment"],
    image: "/inspoquotes-app-ui.webp",
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
    longDescription: "RaiDental Clinic Website is a modern healthcare web application for a dental clinic. It features appointment booking, service showcases, and patient workflows that streamlined clinic operations and increased booked appointments by 50%.",
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
    longDescription: "Orbit AI is an enterprise AI meeting notetaker app. It transcribes meeting audio in real-time, extracts key discussion points and action items, and generates automated summaries that reduce documentation overhead by 60%.",
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
    longDescription: "Twitter Sentiment Analysis is an iOS machine learning app that scrapes tweets to evaluate market sentiment for stock predictions. Utilizing on-device Core ML processing, it achieves 85% prediction accuracy while maintaining data privacy.",
    tech: ["Swift", "Core ML", "Twitter API", "Machine Learning", "Natural Language Processing"],
    image: "/twitter-sentiment-ml-ui.webp",
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
    github: null,
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'image-recognition',
    title: "Image Recognition: On-Device Object Detection App",
    description: "An iOS app with built-in image recognition models for identifying objects in photos, leveraging Core ML and the Vision Framework.",
    longDescription: "Image Recognition is an on-device computer vision iOS app built with Core ML and Apple's Vision Framework. It performs real-time object detection and photo classification directly on the device with high accuracy.",
    tech: ["Swift", "Core ML", "Vision Framework", "Machine Learning", "Image Processing"],
    image: "/image-recognition-app-ui.webp",
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
    github: "https://github.com/sagarrai21802/ImageRecognzationML.git",
    liveUrl: null,
    liveDemo: null
  },
  {
    id: 'duneshine-customer',
    title: "DuneShine Customer Application (iOS)",
    description: "Car wash booking application for customers to schedule, pay, and track services in real-time.",
    longDescription: "DuneShine Customer Application is a native iOS carwash booking app built with SwiftUI and Firebase. It offers doorstep wash scheduling, real-time status tracking, employee assignment visibility, and secure payment processing.",
    tech: ["SwiftUI", "Firebase", "iOS"],
    image: "/duneshine-app-poster.webp",
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
    id: 'duneshine-web-portal',
    title: "DuneShine Web Portal / WebView Migration",
    description: "Complete migration from native Flutter app to Next.js web app wrapped in Flutter WebView shell.",
    longDescription: "DuneShine Web Portal is a web-to-app migration wrapping a Next.js web application inside a Flutter WebView shell. It features safe area handling, safe URL interception, IndexedStack tab persistence, and real-time service status updates.",
    tech: ["Next.js", "React", "Flutter", "Firebase"],
    image: "/duneshine-app-poster.webp",
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
    longDescription: "Snap Finance iOS App is a US market loan application where Sagar resolved critical Git-based dependency conflicts in CocoaPods and SPM. This restored CI/CD pipeline stability, unblocked App Store deployment, and saved $300k in client revenue.",
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
    longDescription: "Pulse is a Gas-inspired anonymous Q&A and confession iOS app for college students. Built with SwiftUI and Firebase, it enables students to post confessions and participate in positive polls with real-time response moderation.",
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
    longDescription: "Nudge AI is a LinkedIn content automation platform built with Next.js, FastAPI, and Claude AI. It features one-click auto-posting via LinkedIn OAuth 2.0, post scheduling, secure token management, and animated dark UI elements.",
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
    longDescription: "Uphaaar is a full-stack e-commerce platform processing ₹12L+/month in sales. Built with Next.js, Python, and Zustand, it features product catalog filtering, local cart storage, and Razorpay server-side payment signature validation.",
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
    longDescription: "SS Steel and Fasteners is a B2B/B2C industrial steel website featuring categorized product catalogs, industrial standard specifications, pricing tables, and dynamic inquiry forms.",
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
    id: 'findmyschool',
    title: "FindMySchool.co: School Directory Platform",
    description: "Comprehensive school search and listing directory for all schools across India.",
    longDescription: "FindMySchool.co is a school directory platform for India. It provides hierarchical location filtering (State -> District -> City -> Area), school profiles, fee structures, academic ratings, and comparison tools.",
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
    longDescription: "Audio-to-CRM Data Pipeline is a voice automation tool that transcribes recorded audio using Whisper and maps extracted fields into CRM forms via Gemini/Claude AI, eliminating manual data entry.",
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
    longDescription: "Feed Application is a real-time community announcement feed for residential societies. Built with Next.js and Firebase Cloud Messaging, it lets admins post updates, push notifications, and moderate resident comments.",
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
    longDescription: "AI Meeting Notetaker is an internal iOS productivity tool inspired by Fireflies. It transcribes meeting conversations, generates action items, and creates automated summaries that cut documentation time by 60%.",
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
    longDescription: "AC Service SMS Bot is an automated customer service messaging workflow. Triggered by missed calls via Twilio, it uses Gemini 2.0 Flash to gather customer problem details, address info, and auto-create service appointments.",
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
    longDescription: "Jarvis is a desktop macOS AI assistant app built with SwiftUI and the Claude API. Accessible directly from the menu bar, it provides rapid natural language chat, SQLite history caching, and custom keyboard shortcuts.",
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
    longDescription: "WhatsApp Scraper is a Chrome extension that enables users to export contacts and chat histories from WhatsApp Web into CSV/JSON formats for backup and CRM management.",
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
    longDescription: "Image Data Entry OCR Extension is an automated browser tool using Tesseract.js to scan document images and invoices, automatically populating web form fields on-device.",
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
    isApplication: false,
    version: "1.0.0",
    size: "1.5 MB",
    downloadUrl: "/apps/image-data-entry-ocr/extension.zip",
    icon: "/apps/image-data-entry-ocr/icon128.png"
  },
  {
    id: 'portfolio-website',
    title: "Portfolio Website: sagarrai.tech",
    description: "Professional portfolio showcasing all projects, skills, and work experience.",
    longDescription: "Portfolio Website is the portfolio platform for sagarrai.tech. Built with React, TypeScript, and Tailwind CSS, it showcases Sagar Rai's projects, applications, and work experience in a stacked-card layout.",
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
    longDescription: "PromptShop iOS MVP is a SwiftUI prototype for an AI agent marketplace. It features agent browsing, detailed metadata display, bookmarking, and Stripe payment integration.",
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
    longDescription: "Ambulance Tracker App is a dual-app system for emergency services. Built with SwiftUI and Firebase, it connects a Driver location broadcast app with a Monitor app for hospitals to track ambulances in real-time.",
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
