
const About = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Hey there! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Sagar</span>, 
            and I'm absolutely passionate about crafting beautiful iOS apps that people love to use. 
            Currently wrapping up my final year in Computer Science at Bansal College of Engineering, 
            I spend my days (and many nights!) diving deep into Swift and UIKit, turning ideas into elegant, 
            functional mobile experiences. What drives me? The thrill of solving real-world problems with clean, 
            efficient code and creating interfaces that just <em>feel right</em>. 
            I'm excited to take my skills to the global stage and contribute to innovative tech teams worldwide.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md">
              <span className="text-green-500 text-lg mr-2">🌟</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">Ready for My Next Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
