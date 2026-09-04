export const DEFAULT_SEO_KEYWORDS = [
  // Primary Skills & Services
  "software developer in Bhopal",
  "software developer in Madhya Pradesh",
  "best iOS developer in Bhopal",
  "best IOF developer in Bhopal",
  "best iOS developer in Madhya Pradesh",
  "best software developer in India",
  "Indian software developer",
  "Indian professional in software development",
  "software engineer",
  "software engineer who knows iOS skill",
  "iPhone app maker",
  "iOS app maker",
  "mobile application developer",
  "Flutter developer",
  "website developer",
  "mobile Swift developer",
  "Apple developer",
  "Swift UI developer",
  "UI kit developer",
  "Liquid GF developer",
  "Mac OS developer",
  "Watch OS developer",

  // Location & Niche Search Tails
  "developer in Bhopal",
  "developer in Indore",
  "developer in Bhopal area",
  "developer in Prabhat",
  "developer in Naidra",
  "developer in Nadra",
  "software developer in MP Nagar",
  "software developer in Minal",
  "software developer in Indore",
  "software developers",
  "mobile developer",
  "mobile developer in Minal",
  "mobile developer in Prabhat",
  "mobile developer in Nadra",
  "mobile developer in MP Nagar",
  "mobile developer in Anduburi",
  "mobile developer in Anandpuri",
  "mobile developer in Indore",
  "mobile developer in Jabalpur",
  "iOS developer India",
  "iOS developer professional",
  "iOS developer with experience",
  "App Store developer",
  "application",
  "app",
  "how to make iOS applications",
  "how to publish applications",
  "how mobile application developer",
  "Xcode developer"
];

export const SERVICE_LOCATIONS = [
  "Bhopal",
  "Madhya Pradesh",
  "MP Nagar",
  "Minal",
  "Prabhat",
  "Nadra",
  "Naidra",
  "Anandpuri",
  "Anduburi",
  "Indore",
  "Jabalpur",
  "India"
];

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sagar Rai",
  "url": "https://sagarrai.tech",
  "jobTitle": "Software Developer & iOS Application Engineer",
  "knowsAbout": [
    "iOS Development", "Swift", "SwiftUI", "UIKit", "Flutter", "Mac OS", "Watch OS",
    "Xcode", "Mobile Application Development", "Web Development", "App Store Publishing"
  ],
  "areaServed": SERVICE_LOCATIONS.map(loc => ({
    "@type": "AdministrativeArea",
    "name": loc
  })),
  "keywords": DEFAULT_SEO_KEYWORDS.join(", ")
});

export const getProfessionalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sagar Rai - Software & Mobile App Development Services",
  "image": "https://sagarrai.tech/sagar-rai-ios-developer-og.jpeg",
  "url": "https://sagarrai.tech",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "addressCountry": "IN"
  },
  "areaServed": SERVICE_LOCATIONS.map(name => ({ "@type": "Place", "name": name })),
  "keywords": DEFAULT_SEO_KEYWORDS.join(", "),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software & Mobile App Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "iOS & iPhone Application Development (Swift, SwiftUI, Xcode)",
          "description": "Custom mobile application development, publishing to App Store, Apple developer services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software & Web Development Services",
          "description": "Website development, Flutter apps, backend integration for clients in Bhopal, Indore, MP Nagar, Minal, Prabhat, Nadra, and across India."
        }
      }
    ]
  }
});
