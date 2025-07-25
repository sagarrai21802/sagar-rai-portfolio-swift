
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Swift", "Core Java"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Databases & Tools",
      skills: ["MySQL", "Git", "GitHub"],
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Development Tools",
      skills: ["Xcode", "VS Code"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOPS", "Software Engineering", "Computer Fundamentals"],
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-elegant-gray dark:bg-elegant-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight animate-fade-in">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover-scale backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 shadow-md`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="px-4 py-3 bg-elegant-light dark:bg-elegant-gray rounded-xl text-sm font-medium text-foreground hover:bg-primary/5 transition-colors duration-300 border border-border/50"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
