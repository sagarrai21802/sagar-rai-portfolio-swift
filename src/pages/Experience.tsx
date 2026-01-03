import { Briefcase, Calendar, MapPin, Check, TrendingUp, Zap, Building2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      position: "Software Developer Intern",
      company: "GrowthPurple Tech",
      location: "Remote",
      period: "Nov 2025 – Present",
      isCurrent: true,
      highlights: [
        { metric: "38%", label: "Delivery Throughput" },
        { metric: "50%", label: "Server Strain Reduced" },
        { metric: "1M+", label: "Concurrent Sessions" }
      ],
      responsibilities: [
        "Building a globally targeted million-user product using SwiftUI, Express.js, and distributed services, increasing delivery throughput by 38% and establishing scalable client–server patterns for sustained high-traffic growth worldwide.",
        "Engineering system-design driven data flows with structured concurrency, implementing Redis-backed caching that reduced server strain by 50%, improved response consistency by 31%, and enabled stable operation during heavy global usage peaks.",
        "Designing scalable full-stack pipelines for bursty workloads, supporting 1M+ concurrent sessions through latency-controlled routing, fault-tolerant processing, and performance tuning that strengthened reliability across critical workflows."
      ]
    },
    {
      position: "Software Developer Intern",
      company: "BrandSmashers Tech",
      location: "Bhopal",
      period: "Jul 2025 – Nov 2025",
      isCurrent: false,
      highlights: [
        { metric: "100%", label: "CI/CD Reliability" },
        { metric: "35%", label: "Faster Response" },
        { metric: "48%", label: "Cross-Device Perf." }
      ],
      responsibilities: [
        "Resolved major build and dependency issues, refactored configurations, and restored CI/CD stability improving deployment reliability by 100%, saving company resources valued at ₹4.2L annually through reduced hours and expense.",
        "Optimised REST API integrations using async/await, achieving 35% faster response time measured through Xcode Instruments and improving overall user experience by 28% based on interaction latency reduction.",
        "Rebuilt SwiftUI and UIKit layouts ensuring adaptive design consistency across iPhone and iPad, enhancing cross-device performance by 48% with improved interface scalability and visual rendering accuracy across 12+ usage workflows."
      ]
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
            }, index * 200);
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
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight animate-fade-in">
              Work Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Building scalable iOS applications with a focus on performance, reliability, and exceptional user experiences.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`relative transition-all duration-700 ease-out ${visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 hidden md:block">
                    {experience.isCurrent && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm group hover:border-primary/30">
                      {/* Current badge */}
                      {experience.isCurrent && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          Currently Working
                        </div>
                      )}

                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                          <Building2 className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-1">
                            {experience.position}
                          </h2>

                          <h3 className="text-lg font-semibold text-primary mb-3">
                            {experience.company}
                          </h3>

                          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {experience.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="text-center p-3 bg-primary/5 rounded-xl border border-primary/10 group-hover:bg-primary/10 transition-colors duration-300"
                          >
                            <div className="text-xl md:text-2xl font-bold text-primary">
                              {highlight.metric}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {highlight.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {experience.responsibilities.map((responsibility, rIndex) => (
                          <div
                            key={rIndex}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-1.5 flex-shrink-0">
                              <Check className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-muted-foreground leading-relaxed text-sm md:text-base">
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: TrendingUp, value: '2+', label: 'Companies' },
              { icon: Zap, value: '1M+', label: 'Users Impacted' },
              { icon: Briefcase, value: '6+', label: 'Months Experience' },
              { icon: Check, value: '100%', label: 'Project Success' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;