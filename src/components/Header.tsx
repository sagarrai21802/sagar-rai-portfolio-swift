
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-bounce-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 hover:scale-105 transition-transform duration-300">
            <img 
              src="/lovable-uploads/c9190dca-57cc-4899-80dc-fe52e2f2a8f3.png" 
              alt="Sagar Rai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
          Sagar Rai
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          iOS Developer | Final Year CSE Student | Passionate about Clean UI & Smart Code
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-400">
          <a
            href="mailto:sagarrai9893@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg animated-button"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com/in/sagar-rai-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 social-icon"
          >
            <Linkedin className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 social-icon"
          >
            <Github className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span>GitHub</span>
          </a>
        </div>
        
        <div 
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={scrollToAbout}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600 mx-auto mt-2 animate-bounce" />
        </div>
      </div>
    </header>
  );
};

export default Header;
