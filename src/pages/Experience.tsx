import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';

const Experience = () => {
  const experience = {
    position: "iOS Developer Intern",
    company: "Brandsmashers Tech",
    location: "Bhopal",
    period: "Jul 2024 – Nov 2025",
    responsibilities: [
      "Resolved recurring build and dependency issues that blocked deployment; performed root-cause analysis, refactored configuration files, and stabilised pipelines — restoring full production functionality and improving CI/CD reliability by 100%.",
      "Optimised data flow and REST API integrations suffering from performance delays; restructured URLSession tasks and implemented async/await concurrency — resulting in 35% faster response handling and smoother UI state transitions.",
      "Diagnosed frequent UI thread crashes and unsafe memory access; introduced concurrency-safe data binding and view model refactors — reducing crash frequency by 60% and improving overall user experience.",
      "Refined SwiftUI and UIKit components for consistent adaptive layouts across iPhone and iPad; collaborated with design and backend teams under Agile sprints to ensure visual consistency and reliable API integration."
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight fade-in">
            Work Experience
          </h1>
          
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-500 backdrop-blur-sm scale-in">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                  {experience.position}
                </h2>
                
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {experience.company}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;