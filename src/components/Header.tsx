
import { Github, Linkedin, Mail, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "Software Developer | Building Scalable Apps for Millions";
  const { parallax } = useMouseParallax(1);

  useEffect(() => {
    setIsLoaded(true);
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleReveal = useReveal();
  const subtitleReveal = useReveal();
  const buttonsReveal = useReveal();

  const stats = [
    { value: '1M+', label: 'Users Impacted', delay: '0.3s' },
    { value: '2', label: 'Companies', delay: '0.4s' },
    { value: '60k+', label: 'Library Stars', delay: '0.5s' },
  ];

  return (
    <header className="min-h-screen pt-16 flex flex-col bg-gradient-to-br from-elegant-light via-background to-elegant-gray dark:from-elegant-light dark:via-background dark:to-elegant-gray relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"
          style={{
            animationDuration: '4s',
            transform: `translate(${parallax.x * 0.8}px, ${parallax.y * 0.8}px)`
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"
          style={{
            animationDuration: '6s',
            animationDelay: '1s',
            transform: `translate(${parallax.x * -0.6}px, ${parallax.y * -0.6}px)`
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full transition-transform duration-500 ease-out"
          style={{
            transform: `translate(calc(-50% + ${parallax.x * 0.3}px), calc(-50% + ${parallax.y * 0.3}px))`
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>

      <div className="flex-1 flex items-center justify-center pt-12 md:pt-16">
        <div className="z-10 px-4 w-full max-w-6xl mx-auto">
          {/* Two-column layout for larger screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">

            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Name with gradient */}
              <h1
                ref={titleReveal.ref as any}
                className={`text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight reveal ${titleReveal.isVisible ? 'is-visible' : ''}`}
              >
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  Sagar Rai
                </span>
              </h1>

              {/* Typing animation subtitle */}
              <div className="h-12 md:h-14 mb-8">
                <p className="text-xl md:text-2xl text-muted-foreground font-body font-light">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Stats - horizontal spread */}
              <div className="flex justify-center lg:justify-start gap-6 md:gap-10 mb-10">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center lg:text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons - spread layout */}
              <div
                ref={buttonsReveal.ref as any}
                className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-4 reveal ${buttonsReveal.isVisible ? 'is-visible' : ''}`}
              >
                <a
                  href="mailto:sagarrai9893@gmail.com"
                  className="group flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 font-medium"
                >
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/sagar-rai-ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 bg-card border border-border text-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50"
                >
                  <Linkedin className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sagarrai21802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 bg-card border border-border text-foreground rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50"
                >
                  <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>

              {/* Secondary actions */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/experience')}
                  className="group flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">View Experience</span>
                  <Sparkles className="w-3 h-3 text-primary" />
                </button>
                <button
                  onClick={() => navigate('/open-source')}
                  className="group flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Open Source</span>
                </button>
              </div>
            </div>

            {/* Right side - Profile Image with 3D tilt effect */}
            <div
              className={`flex-shrink-0 order-1 lg:order-2 mb-10 lg:mb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-spin" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-1 rounded-full bg-background" />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/lovable-uploads/80469C0F-FE49-454B-811B-08306F9C73DB_1_105_c.jpeg"
                    alt="Sagar Rai"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator - Animated Mouse */}
      <div className="pb-12 flex flex-col items-center gap-4">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300"
        >
          {/* Mouse outline with scroll wheel animation */}
          <div className="relative w-7 h-12 border-2 border-current rounded-full flex justify-center pt-2 hover:border-primary transition-colors duration-300">
            {/* Scroll wheel - animated */}
            <div className="w-1.5 h-3 bg-current rounded-full animate-scroll-wheel" />
          </div>

          {/* Scroll text */}
          <span className="text-xs font-medium tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>

          {/* Bouncing chevrons */}
          <div className="flex flex-col items-center -mt-1">
            <ChevronDown className="w-4 h-4 animate-bounce-slow opacity-80" style={{ animationDelay: '0ms' }} />
            <ChevronDown className="w-4 h-4 animate-bounce-slow opacity-50 -mt-2" style={{ animationDelay: '150ms' }} />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
