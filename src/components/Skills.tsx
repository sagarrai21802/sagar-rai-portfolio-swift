const Skills = () => {
  const skillCategories = [
    {
      title: "Frameworks & Languages",
      skills: ["UIKit", "SwiftUI", "Swift", "Java"],
      icon: "💻"
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQLite", "Core Data", "User Defaults", "Realm"],
      icon: "🗃️"
    },
    {
      title: "Developer Tools",
      skills: ["Xcode", "VS Code", "Git", "GitHub", "Postman", "BitBucket"],
      icon: "🛠️"
    },
    {
      title: "Core Skills",
      skills: ["DSA", "OOPS", "Application Architecture Design", "Problem Solving"],
      icon: "🧠"
    }
  ];

  return (
    <section className="py-24 px-4 bg-elegant-gray dark:bg-elegant-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight fade-in">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover-scale backdrop-blur-sm scale-in"
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
                  >
                    {skill}
                  </span>
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