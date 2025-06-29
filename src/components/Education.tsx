
const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Bansal College Of Engineering",
      period: "2022 – 2026",
      status: "Final Year",
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Secondary Education",
      institution: "Gurukul CBSE School",
      period: "2007 – 2021",
      status: "Completed",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {index + 1}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {edu.period}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    edu.status === 'Final Year' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                      : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
