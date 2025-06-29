
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
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Key Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
