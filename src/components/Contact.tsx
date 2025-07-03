
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 animate-fade-in">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          I'm actively seeking iOS development opportunities worldwide. 
          Let's discuss how I can contribute to your team!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:sagarrai9893@gmail.com"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-300"
            title="Send me an email"
          >
            <Mail className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm">sagarrai9893@gmail.com</p>
          </a>
          
          <a
            href="https://linkedin.com/in/sagar-rai-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-400"
            title="Connect on LinkedIn"
          >
            <Linkedin className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">sagar-rai-ios</p>
          </a>
          
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-500"
            title="View my GitHub profile"
          >
            <Github className="w-8 h-8 text-blue-400 mb-4 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">sagarrai21802</p>
          </a>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-gray-400 animate-fade-in-up animation-delay-600">
          <MapPin className="w-5 h-5" />
          <span>Open to relocate globally • Ready for new opportunities worldwide 🌍</span>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 animate-fade-in-up animation-delay-700">
          <p className="text-gray-500">
            © 2024 Sagar Rai. Built with passion for clean code and beautiful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
