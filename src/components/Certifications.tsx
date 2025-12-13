import { Award, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const certifications = [
    {
      title: "iOS Development",
      issuer: "Udemy",
      date: "May 2025",
      color: "from-blue-500 to-blue-600",
      icon: "🍎",
      description: "Comprehensive iOS development with Swift and SwiftUI"
    },
    {
      title: "Git & GitHub Essentials",
      issuer: "Saylor.org",
      date: "May 2023",
      color: "from-gray-700 to-gray-800",
      icon: "📚",
      description: "Version control and collaborative development workflows"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight animate-fade-in">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professional certifications and continuous learning achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30 backdrop-blur-sm ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {cert.issuer}
                      </p>
                    </div>
                    <Award className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full text-sm text-muted-foreground border border-primary/10">
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
