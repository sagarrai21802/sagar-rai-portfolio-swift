import { useReveal } from '@/hooks/useReveal';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Zap, Award, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const headingReveal = useReveal();
  const cardReveal = useReveal();
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, value: '1M+', label: 'Users Impacted', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, value: '38%', label: 'Throughput Increase', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, value: '50%', label: 'Server Strain Reduced', color: 'from-orange-500 to-amber-500' },
    { icon: Award, value: '60k+', label: 'Library Stars Contributed', color: 'from-purple-500 to-pink-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...new Set([...prev, index])]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headingReveal.ref as any} className={`text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight reveal ${headingReveal.isVisible ? 'is-visible' : ''}`}>
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable iOS applications that impact millions of users worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative bg-card border border-border rounded-2xl p-6 text-center transition-all duration-700 hover:shadow-lg hover:border-primary/30 ${visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={cardReveal.ref as any} className={`bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm reveal-left ${cardReveal.isVisible ? 'is-visible' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-body">
              As a dedicated <span className="text-primary font-semibold">Software Developer Intern</span> at GrowthPurple Tech, I specialize in building globally-targeted, million-user products using SwiftUI, Java, and distributed services. My expertise spans full-stack development with iOS frontend and Java backend, focusing on system design, structured concurrency, and performance optimization.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 font-body">
              I've contributed to major open-source libraries including <span className="text-primary font-semibold">Alamofire</span> (40k+ stars) and <span className="text-primary font-semibold">Kingfisher</span> (22k+ stars), improving error handling and image rendering for millions of developers worldwide. My projects include SYRA (AI-powered marketing platform handling 1.2M+ concurrent sessions) and real-time feed applications with sub-1.4s render latency.
            </p>

            {/* Current Role Highlight */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">Currently at GrowthPurple Tech</h4>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 text-xs rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Software Developer Intern | Nov 2025 – Present</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Engineering system-design driven data flows with Redis-backed caching, supporting 1M+ concurrent sessions through fault-tolerant processing and latency-controlled routing.
              </p>
              <button
                onClick={() => navigate('/experience')}
                className="mt-4 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
              >
                View Full Experience
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: 'Built production apps handling 1M+ concurrent sessions', highlight: '1M+' },
                  { text: 'Reduced server strain by 50% with Redis caching', highlight: '50%' },
                  { text: 'Improved CI/CD reliability by 100% at BrandSmashers', highlight: '100%' },
                  { text: 'Achieved 35% faster API response times', highlight: '35%' },
                  { text: 'Contributed to libraries with 60k+ combined stars', highlight: '60k+' },
                  { text: 'Saved ₹4.2L annually through optimization', highlight: '₹4.2L' },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                  >
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;