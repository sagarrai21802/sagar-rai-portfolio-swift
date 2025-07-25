
const Achievements = () => {
  const achievements = [
    {
      title: "200+ DSA Problems Solved",
      description: "Active problem solver on LeetCode, GeeksforGeeks, and HackerRank",
      icon: "🧠",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Tech Event Leadership",
      description: "Led a college tech event as Major Coordinator",
      icon: "🎯",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "iOS App Development",
      description: "Developed multiple iOS apps using Swift + UIKit",
      icon: "📱",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-elegant-gray dark:bg-elegant-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight animate-fade-in">
          Key Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover-scale text-center backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-3xl shadow-lg`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
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
