import { useReveal } from '@/hooks/useReveal';

const About = () => {
  const headingReveal = useReveal();
  const cardReveal = useReveal();
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 ref={headingReveal.ref as any} className={`text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight reveal ${headingReveal.isVisible ? 'is-visible' : ''}`}>
          About Me
        </h2>
        
        <div ref={cardReveal.ref as any} className={`bg-card border border-border rounded-3xl p-8 md:p-16 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm reveal-left ${cardReveal.isVisible ? 'is-visible' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-body">
              As a dedicated <span className="text-primary font-semibold">iOS Developer</span> with expertise in Swift, UIKit, and SwiftUI, I specialize in creating robust, user-centric mobile applications. My experience encompasses full-stack iOS development, from concept to deployment, utilizing modern architectures like MVVM and MVC, alongside seamless integration of REST APIs and advanced frameworks.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-body">
              Throughout my journey, I've successfully developed and deployed multiple iOS applications, including Todoey (a comprehensive task management app with multi-persistence support), Hacker News (a real-time news feed with optimized API handling), and SIRA (an AI-powered marketing platform converting complex SaaS web experiences into native iOS apps with real-time content generation). My strong problem-solving skills enable me to craft scalable, maintainable solutions that perform under real-world conditions.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Key Achievements</h3>
              <ul className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Developed and launched 3+ production-ready iOS apps with 1000+ downloads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Optimized API performance resulting in 35% faster response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Reduced UI crashes by 60% through comprehensive debugging and testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Implemented adaptive UI components for seamless iPhone and iPad experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Integrated AI-powered features for real-time content generation in marketing apps</span>
                </li>
              </ul>
            </div>

            <div id="experience">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Professional Experience</h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
                During my <span className="text-primary font-semibold">iOS Developer Internship at Brandsmashers Tech, Bhopal (July - November 2025)</span>, I tackled critical production challenges including resolving build failures and dependency conflicts that restored full CI/CD functionality. I optimized data flows and API integrations, achieving 35% faster response times, and diagnosed UI crashes to reduce them by 60%. Additionally, I refined adaptive UI components across iPhone and iPad, ensuring consistent user experiences and successful live deployments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;