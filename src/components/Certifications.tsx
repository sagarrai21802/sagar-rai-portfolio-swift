
const Certifications = () => {
  const certifications = [
    {
      title: "iOS Development",
      issuer: "Udemy",
      date: "May 2025",
      color: "bg-blue-500"
    },
    {
      title: "MySQL for Beginners",
      issuer: "Saylor.org",
      date: "2024",
      color: "bg-orange-500"
    },
    {
      title: "DSA – Advanced",
      issuer: "Geekster",
      date: "2024",
      color: "bg-purple-500"
    },
    {
      title: "Git & GitHub",
      issuer: "Geekster",
      date: "2024",
      color: "bg-gray-700"
    },
    {
      title: "Robotics Workshop",
      issuer: "Robonauts India",
      date: "2023",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-16 tracking-tight animate-fade-in">
          Certifications
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 hover-scale backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-4 h-16 ${cert.color} rounded-full mb-6 shadow-sm`}></div>
              
              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-3">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground mb-2 font-body">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-muted-foreground/70 font-medium">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
