
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleReveal = useReveal();
  const subtitleReveal = useReveal();
  const buttonsReveal = useReveal();

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-elegant-light to-elegant-gray dark:from-elegant-light dark:to-elegant-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <div className="mb-12 scale-in">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:ring-white/40">
            <img 
              src="/lovable-uploads/c9190dca-57cc-4899-80dc-fe52e2f2a8f3.png" 
              alt="Sagar Rai"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 ref={titleReveal.ref as any} className={`text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight reveal ${titleReveal.isVisible ? 'is-visible' : ''}`}>
          Sagar Rai
        </h1>
        
        <p ref={subtitleReveal.ref as any} className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-body font-light reveal ${subtitleReveal.isVisible ? 'is-visible' : ''}`}>
          iOS Developer | Final Year CSE Student | Passionate about Clean UI & Smart Code
        </p>
        
        <div ref={buttonsReveal.ref as any} className={`flex justify-center space-x-4 md:space-x-6 mb-16 reveal ${buttonsReveal.isVisible ? 'is-visible' : ''}`}>
          <a
            href="mailto:sagarrai9893@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 social-icon backdrop-blur-sm"
          >
            <Mail className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://linkedin.com/in/sagar-rai-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 social-icon backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/sagarrai21802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 social-icon backdrop-blur-sm"
          >
            <Github className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-6" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
        
        <div 
          className="cursor-pointer hover:scale-110 transition-transform duration-300 group"
          onClick={scrollToAbout}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center relative group-hover:border-primary transition-colors duration-300 will-change-transform">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 group-hover:bg-primary transition-colors duration-300"></div>
          </div>
          <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto mt-2 group-hover:text-primary transition-colors duration-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
