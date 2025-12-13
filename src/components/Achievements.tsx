import { useEffect, useRef, useState } from 'react';

const Achievements = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      title: "200+ DSA Problems Solved",
      description: "Active problem solver on LeetCode, GeeksforGeeks, and HackerRank with strong algorithmic foundations",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600",
      metric: "200+"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to Alamofire (40k+ stars) and Kingfisher (22k+ stars), impacting millions of developers",
      icon: "🌟",
      color: "from-amber-500 to-orange-600",
      metric: "60k+"
    },
    {
      title: "Production Apps",
      description: "Built and deployed iOS apps handling 1M+ concurrent sessions with 99.7% uptime",
      icon: "📱",
      color: "from-green-500 to-teal-600",
      metric: "1M+"
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
    <section className="py-24 px-4 bg-elegant-gray dark:bg-elegant-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight animate-fade-in">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments that define my journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30 text-center backdrop-blur-sm ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">
                {achievement.metric}
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-body">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
