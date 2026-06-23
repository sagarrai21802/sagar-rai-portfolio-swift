import { Github, Linkedin, Mail, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';
import BlurReveal from './BlurReveal';
import LiquidGlassCard from './ui/LiquidGlassCard';

const Header = ({ introCompleted }: { introCompleted?: boolean }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [imageSlideComplete, setImageSlideComplete] = useState(false);
  const fullText = "Software Developer Engineer";
  const { parallax } = useMouseParallax(1);

  const { scrollY } = useScroll();
  const leftX = useTransform(scrollY, [0, 800], [0, -500]);
  const rightX = useTransform(scrollY, [0, 800], [0, 500]);
  const elementOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    // Start animation sequence when intro completes
    if (introCompleted) {
      setAnimationStarted(true);
      // Give the browser time to paint the initial state before applying the animation class
      const slideTimer = setTimeout(() => {
        setImageSlideComplete(true);
      }, 100);
      
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
    { value: '50+', label: 'GitHub Repos', delay: '0.5s' },
  ];

  return (
    <header className="min-h-[100dvh] pt-16 flex flex-col relative overflow-hidden">
      {/* Background image - slides from full screen to centered */}
      <motion.div 
        style={{ x: rightX, opacity: elementOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className={`header-image-container ${imageSlideComplete ? 'image-slide-complete' : ''}`} />
      </motion.div>


      {/* Rest of the content with relative positioning */}
      <div className="relative z-10 flex-1 flex items-center justify-start pt-8 md:pt-16 pl-0 lg:pl-12">
        <div className="z-10 px-4 w-full max-w-6xl mx-auto">
          {/* Two-column layout - text on left, image on right */}
          <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-16 header-content ${imageSlideComplete ? 'content-visible' : ''}`}>

            {/* Left side - Text content */}
            <motion.div style={{ x: leftX, opacity: elementOpacity }} className="flex-1 text-left order-2 lg:order-1">
              {/* Name with gradient - using TextReveal */}
              <TextReveal
                text="Sagar Rai"
                as="h1"
                className="text-[clamp(2.2rem,11vw,4.75rem)] md:text-6xl lg:text-7xl font-display font-bold mb-4 tracking-tight"
                delay={0.2}
                duration={1}
                revealDirection="left"
                startTrigger={imageSlideComplete}
              />

              {/* Subtitle with TextReveal - two color effect */}
              <div className="min-h-[3rem] md:h-14 mb-8">
                <TextReveal
                  text={fullText}
                  className="text-[clamp(1rem,4.2vw,1.5rem)] md:text-2xl text-white/90 font-body font-light"
                  delay={0.5}
                  duration={0.8}
                  revealDirection="left"
                  startTrigger={imageSlideComplete}
                  twoColor
                />
              </div>

              {/* Stats - horizontal spread */}
              <div className="flex flex-wrap justify-start lg:justify-start gap-6 md:gap-12 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`transition-all duration-700 ${imageSlideComplete ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50px]'}`}
                    style={{ transitionDelay: stat.delay }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
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
                  className="flex items-center gap-2 min-h-11 px-5 sm:px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 touch-manipulation"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>

              {/* Secondary actions */}
              <div className="flex flex-wrap justify-start lg:justify-start gap-4">
              </div>
            </motion.div>

          </div>
        </div>
      </div>


    </header>
  );
};

export default Header;
