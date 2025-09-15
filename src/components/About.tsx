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
              I'm an <span className="text-primary font-semibold">iOS Developer</span> skilled in Swift, UIKit, and SwiftUI with hands-on experience in building apps using MVVM/MVC and REST APIs. Currently pursuing B.Tech in Computer Science and Engineering at Bansal College Of Engineering, Mandideep.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-body">
              I have delivered real-world projects like Todoey and Hacker News, showcasing my expertise in mobile app development. With <span className="text-primary font-semibold">300+ DSA questions solved</span>, I bring strong problem-solving skills to build scalable, maintainable mobile applications.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Currently working as an <span className="text-primary font-semibold">iOS Developer Intern at Brandsmashers Tech, Bhopal</span>, where I contribute to iOS builds in React Native projects, focusing on UI fixes and live deployment while applying industry-standard practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;