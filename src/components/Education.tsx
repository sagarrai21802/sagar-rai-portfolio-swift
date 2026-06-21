import LiquidGlassCard from './ui/LiquidGlassCard';

const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Bansal College Of Engineering",
      period: "2022 – 2026",
      status: "Final Year",
      color: "bg-blue-500"
    },
    {
      degree: "Secondary Education",
      institution: "Gurukul CBSE School",
      period: "2007 – 2021",
      status: "Completed",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight animate-fade-in">
          Education
        </h2>
        
        <div className="space-y-8 lg:space-y-12">
          {education.map((edu, index) => (
            <LiquidGlassCard
              key={edu.degree}
              variant="light"
              className="p-8 md:p-12 shadow-glass border border-white/10 dark:border-white/5 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl ${edu.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg`}>
                    {index + 1}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-lg md:text-xl text-primary font-semibold font-body">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground font-medium">
                      {edu.period}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0">
                  <span className={`inline-block px-6 py-3 rounded-full text-sm font-medium border ${
                    edu.status === 'Final Year' 
                      ? 'bg-primary/10 border-primary/20 text-primary' 
                      : 'bg-accent/10 border-accent/20 text-accent'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
