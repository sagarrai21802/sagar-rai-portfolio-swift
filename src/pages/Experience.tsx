import { Briefcase, Calendar, MapPin, Check, TrendingUp, Zap, Building2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import LiquidGlassCard from '../components/ui/LiquidGlassCard';
import SEO from '@/components/SEO';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      position: "Software Developer Intern",
      company: "DuneShine, Dubai",
      location: "Dubai (Remote / On-site)",
      period: "Nov 2025 – Present",
      isCurrent: true,
      highlights: [
        { metric: "60%+", label: "Doc Time Saved" },
        { metric: "Live", label: "Play Store Apps" },
        { metric: "5+", label: "iOS App Flows" }
      ],
      responsibilities: [
        "Designed and built a SwiftUI-based meeting notetaker interface with pixel-perfect layouts and smooth micro-interactions, delivering automated summaries that cut documentation time over 60% across team workflows.",
        "Designed and engineered the SwiftUI interface for an on-door car service iOS app for customers and employees, crafting seamless booking, dispatch, and tracking flows, live on Play Store with App Store release launching soon.",
        "Deployed and single-handedly manage the DuneShine Service Partner app on Play Store, enabling internal employee dispatch and service fulfillment at scale.",
        "Designed SwiftUI interaction patterns for an anonymous confession iOS app inspired by Gas, crafting a polished, safe peer experience across the platform.",
        "Designed a voice-first iOS interaction flow letting users record once and auto-fill CRM forms."
      ]
    },
    {
      position: "Software Developer Intern",
      company: "BrandSmashers Tech",
      location: "Bhopal, India",
      period: "Jul 2025 – Nov 2025",
      isCurrent: false,
      highlights: [
        { metric: "$300k", label: "Client Saved" },
        { metric: "100%", label: "CI Restored" },
        { metric: "SaaS HR", label: "AI Automated" }
      ],
      responsibilities: [
        "Fixed a critical iOS build failure in Snap Finance app by resolving Git-based dependency conflicts, restored CI stability, unblocked App Store deployment, saved client $300k.",
        "Built internal SaaS HR management tool from scratch, automated day-to-day HR work via single-line prompts, easy for HR to manage everything."
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
    <div className="min-h-screen pt-32 bg-background">
      <SEO
        title="Professional Experience | Sagar Rai | iOS & Software Engineer"
        description="Check out the professional work experience, achievements, and contributions of Sagar Rai at DuneShine, Dubai and BrandSmashers Tech."
        url="https://sagarrai.tech/experience"
      />
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight animate-fade-in">
              Work Experience
            </h1>
          </div>

          {/* Two-part layout without vertical line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {experiences.map((experience, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ease-out ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <LiquidGlassCard variant="light" hoverLift={true} className="h-full p-6 md:p-8 border border-white/10 dark:border-white/5 shadow-glass group flex flex-col justify-between">
                  <div>
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
                          <div className="text-lg md:text-xl font-bold text-primary">
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
                </LiquidGlassCard>
              </div>
            ))}
          </div>

          {/* Stats summary */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: TrendingUp, value: '2', label: 'Companies' },
              { icon: Zap, value: '$300k+', label: 'Value Saved' },
              { icon: Briefcase, value: 'iOS / Swift', label: 'Core Expertise' },
              { icon: Check, value: '100%', label: 'Project Success' }
            ].map((stat, index) => (
              <LiquidGlassCard
                key={index}
                variant="subtle"
                className="text-center p-6 border border-white/10 dark:border-white/5 shadow-glass"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;