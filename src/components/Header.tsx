import { Github, Linkedin, Mail, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useEffect, useState } from 'react';
import TextReveal from './TextReveal';
import BlurReveal from './BlurReveal';

const Header = ({ introCompleted }: { introCompleted?: boolean }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [imageSlideComplete, setImageSlideComplete] = useState(false);
  const fullText = "Software Developer Engineer";
  const { parallax } = useMouseParallax(1);

  useEffect(() => {
    // Start animation sequence when intro completes
    if (introCompleted) {
      setAnimationStarted(true);
      // After 200ms, start sliding the image to the right
      const slideTimer = setTimeout(() => {
        setImageSlideComplete(true);
      }, 10);
      
      return () => clearTimeout(slideTimer);
    }
  }, [introCompleted]);

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
  ];

  return (
    <header className="min-h-screen pt-16 flex flex-col relative overflow-hidden">
      {/* Background image - slides from full screen to centered */}
      <div 
        className={`header-image-container ${imageSlideComplete ? 'image-slide-complete' : ''}`}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Rest of the content with relative positioning */}
      <div className="relative z-10 flex-1 flex items-center justify-start pt-12 md:pt-16 pl-0 lg:pl-12">
        <div className="z-10 px-4 w-full max-w-6xl mx-auto">
          {/* Two-column layout - text on left, image on right */}
          <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-16 header-content ${imageSlideComplete ? 'content-visible' : ''}`}>

            {/* Left side - Text content */}
            <div className="flex-1 text-left order-2 lg:order-1">
              {/* Name with gradient - using TextReveal */}
              <TextReveal
                text="Sagar Rai"
                as="h1"
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight"
                delay={0.2}
                duration={1}
              />

              {/* Subtitle with TextReveal - two color effect */}
              <div className="h-12 md:h-14 mb-8">
                <TextReveal
                  text={fullText}
                  className="text-xl md:text-2xl text-white/90 font-body font-light"
                  delay={0.5}
                  duration={0.8}
                  twoColor
                />
              </div>

              {/* Stats - horizontal spread */}
              <div className="flex justify-start lg:justify-start gap-8 md:gap-12 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons - even and professional */}
              <div
                ref={buttonsReveal.ref as any}
                className="flex flex-wrap justify-start lg:justify-start gap-3 reveal is-visible"
              >
                <a
                  href="mailto:sagarrai9893@gmail.com"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/sagar-rai-ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sagarrai21802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Secondary actions */}
              <div className="flex flex-wrap justify-start lg:justify-start gap-4">
              </div>
            </div>

          </div>
        </div>
      </div>


    </header>
  );
};

export default Header;
