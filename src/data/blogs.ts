import { BlogPost } from '../types/blog';

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'My iOS Development Journey: From Hello World to App Store',
    slug: 'my-ios-development-journey',
    author: 'Sagar Rai',
    created_at: '2026-05-10T10:00:00Z',
    tags: 'iOS, Swift, SwiftUI, Career',
    image_url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
    content: `When I first decided to dive into iOS development, I was instantly captivated by the elegance of Swift. Coming from a background of wrestling with more verbose languages, Swift felt like a breath of fresh air. 

My journey started three years ago. I remember staying up late to build my first calculator app. It was clunky and crashed if you pressed the equals button twice, but seeing it run on my physical iPhone was a magical feeling. 

Over the years, I transitioned from UIKit to SwiftUI. The declarative nature of SwiftUI fundamentally shifted how I think about UI state. I learned to appreciate the tight integration between Apple's hardware and software. Building production apps meant learning about Grand Central Dispatch, memory management with ARC, and the nuances of the App Store review guidelines. 

The biggest lesson I've learned? Patience. Apple's ecosystem moves fast, and APIs deprecate, but the fundamental design patterns remain the same. If you are starting your iOS journey today, my advice is to focus on the basics: understand value types vs reference types, master optionals, and don't rely too heavily on third-party libraries until you understand how to build the functionality yourself.`
  },
  {
    id: '2',
    title: 'Surviving and Thriving in My First Major Hackathon',
    slug: 'surviving-my-first-hackathon',
    author: 'Sagar Rai',
    created_at: '2026-04-15T14:30:00Z',
    tags: 'Hackathon, Teamwork, Rapid Prototyping',
    image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    content: `48 hours. Unlimited coffee. Zero sleep. That's the recipe for my first major hackathon.

I entered the venue with a vague idea and no team. By the time the kickoff presentation ended, I had joined forces with three complete strangers. We decided to build a platform that connected local food banks with restaurants that had surplus food at the end of the day.

The technical challenge was immense. We had to build a mobile client (my domain), a backend API, and a web dashboard, all while integrating real-time location services. I opted to use SwiftUI for the iOS app because it allowed for rapid UI iteration. 

At hour 36, disaster struck. Our database schema wasn't scaling with our location queries, and the backend was crashing. We had to pivot, simplifying our data model to ensure we had a working prototype for the judges. 

We didn't win first place, but we walked away with something more valuable: the realization that perfect is the enemy of shipped. Hackathons teach you how to prioritize ruthlessly. You learn to cut features that don't serve the core value proposition and focus entirely on the user experience. It was an exhausting weekend, but an incredibly formative experience in my tech career.`
  },
  {
    id: '3',
    title: '3 Years in Tech: Key Learnings and Takeaways',
    slug: '3-years-in-tech-learnings',
    author: 'Sagar Rai',
    created_at: '2026-06-01T09:15:00Z',
    tags: 'Career, Reflections, Software Engineering',
    image_url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
    content: `It's hard to believe it's been three years since I officially started my journey in software engineering. As I reflect on the projects I've built—from AI-powered marketing platforms to robust iOS applications—a few core themes stand out.

First, **communication is just as important as code**. You can write the most elegant, performant algorithm in the world, but if you can't explain its value or how it fits into the broader product vision, it won't matter. Documenting code, writing clear pull request descriptions, and being able to explain technical debt to non-technical stakeholders are superpowers.

Second, **technology is just a tool**. In my early days, I would obsess over which framework to use. Should I use React or Vue? UIKit or SwiftUI? What I eventually realized is that users don't care about the tech stack. They care about whether the app solves their problem efficiently and delightfully. 

Finally, **embrace failure**. I've introduced bugs into production. I've built features that nobody used. I've over-engineered solutions to simple problems. Every single one of those failures was a stepping stone. In tech, the landscape changes so rapidly that continuous learning is the only constant.

As I look forward to the next three years, I'm excited to dive deeper into AI integrations and continue building software that makes a tangible impact.`
  }
];
