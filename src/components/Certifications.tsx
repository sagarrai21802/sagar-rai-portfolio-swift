
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
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-3 h-12 ${cert.color} rounded-full mb-4`}></div>
              
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-gray-500 dark:text-gray-500">
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
