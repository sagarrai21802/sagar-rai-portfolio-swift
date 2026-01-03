const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core iOS",
      skills: ["Swift", "SwiftUI", "UIKit", "Auto Layout", "Storyboards", "Core Animation", "Structured Concurrency"],
      icon: "📱"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Foundation", "AVFoundation", "CoreLocation", "CoreData", "UserNotifications", "CoreML"],
      icon: "🔧"
    },
    {
      title: "Data & APIs",
      skills: ["RESTful APIs", "GraphQL", "JSON Parsing", "MVVM", "URLSession", "Alamofire", "Firebase"],
      icon: "📡"
    },
    {
      title: "Persistence",
      skills: ["Core Data", "Realm", "UserDefaults", "SQLite"],
      icon: "💾"
    },
    {
      title: "Tools & Deployment",
      skills: ["Xcode", "TestFlight", "Git", "GitHub", "Sentry", "BitBucket", "Instruments", "StoreKit", "XCTest", "UI Testing", "App Store Deployment", "In-App Purchases"],
      icon: "🚀"
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
              className="stagger-item card-lift bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 backdrop-blur-sm"
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
                    className="badge-pop px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-105 border border-primary/20"
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
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