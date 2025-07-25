
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-elegant-blue dark:bg-elegant-blue text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 animate-fade-in tracking-tight">
          Let's Connect
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed font-body font-light">
          I'm actively seeking iOS development opportunities worldwide. 
          Let's discuss how I can contribute to your team!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <a
            href="mailto:sagarrai9893@gmail.com"
            className="flex flex-col items-center p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-300"
            title="Send me an email"
          >
            <Mail className="w-10 h-10 text-white mb-6 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-xl font-display font-semibold mb-3">Email</h3>
            <p className="text-white/80 text-sm font-body">sagarrai9893@gmail.com</p>
          </a>
          
          <a
            href="https://linkedin.com/in/sagar-rai-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-400"
            title="Connect on LinkedIn"
          >
            <Linkedin className="w-10 h-10 text-white mb-6 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-xl font-display font-semibold mb-3">LinkedIn</h3>
            <p className="text-white/80 text-sm font-body">sagar-rai-ios</p>
          </a>
          
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 contact-card animate-fade-in-up animation-delay-500"
            title="View my GitHub profile"
          >
            <Github className="w-10 h-10 text-white mb-6 transition-transform duration-200 hover:scale-110 hover:bounce" />
            <h3 className="text-xl font-display font-semibold mb-3">GitHub</h3>
            <p className="text-white/80 text-sm font-body">sagarrai21802</p>
          </a>
        </div>
        
        <div className="flex items-center justify-center space-x-3 text-white/80 animate-fade-in-up animation-delay-600 mb-16">
          <MapPin className="w-6 h-6" />
          <span className="font-body text-lg">Open to relocate globally • Ready for new opportunities worldwide 🌍</span>
        </div>
        
        <div className="pt-8 border-t border-white/20 animate-fade-in-up animation-delay-700">
          <p className="text-white/60 font-body">
            © 2024 Sagar Rai. Built with passion for clean code and beautiful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
