
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
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
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
