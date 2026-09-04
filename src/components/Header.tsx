import { Github, Linkedin, Mail, ChevronDown, Briefcase, Code2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useEffect, useState } from 'react';
import TextReveal from './TextReveal';
import BlurReveal from './BlurReveal';
import LiquidGlassCard from './ui/LiquidGlassCard';

const Header = ({ introCompleted }: { introCompleted?: boolean }) => {
  const navigate = useNavigate();
  const [isFirstVisit] = useState(() => {
    return !sessionStorage.getItem('hasSeenHeaderAnimation');
  });
  const [imageSlideComplete, setImageSlideComplete] = useState(() => {
    return Boolean(sessionStorage.getItem('hasSeenHeaderAnimation'));
  });

  useEffect(() => {
    // Start animation sequence when intro completes for the first time
    if (introCompleted && !sessionStorage.getItem('hasSeenHeaderAnimation')) {
      const slideTimer = setTimeout(() => {
        setImageSlideComplete(true);
        sessionStorage.setItem('hasSeenHeaderAnimation', 'true');
      }, 100);

      return () => clearTimeout(slideTimer);
    } else if (introCompleted) {
      setImageSlideComplete(true);
    }
  }, [introCompleted]);

  const buttonsReveal = useReveal();

  return (
    <header className="min-h-[100dvh] pt-16 flex flex-col relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className={`header-image-container ${imageSlideComplete ? 'image-slide-complete' : ''}`} />
      </div>

      {/* Rest of the content with relative positioning */}
      <div className="relative z-10 flex-1 flex items-center justify-start pt-8 md:pt-16 pl-0 lg:pl-12">
        <div className="z-10 px-4 w-full max-w-6xl mx-auto">
          {/* Two-column layout - text on left, image on right */}
          <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-start lg:gap-16 header-content ${imageSlideComplete ? 'content-visible' : ''}`}>

            {/* Left side - Text content */}
            <div className="flex-1 text-left order-2 lg:order-1">
              {/* Greeting */}
              <div className="mb-4">
                {isFirstVisit ? (
                  <TextReveal
                    text="Hey, I'm Sagar Rai"
                    as="p"
                    className="text-[clamp(1.1rem,4.2vw,1.5rem)] md:text-2xl text-white/90 font-body font-light tracking-normal"
                    delay={0.2}
                    duration={0.8}
                    revealDirection="left"
                    startTrigger={imageSlideComplete}
                  />
                ) : (
                  <p className="text-[clamp(1.1rem,4.2vw,1.5rem)] md:text-2xl text-white/90 font-body font-light tracking-normal">
                    Hey, I'm Sagar Rai
                  </p>
                )}
              </div>

              {/* Main Role Title */}
              <h1 className="mb-8 flex flex-col">
                {isFirstVisit ? (
                  <>
                    <TextReveal
                      text="Software"
                      as="span"
                      className="block text-[clamp(2.75rem,8vw,120px)] lg:text-[120px] leading-[0.95] lg:leading-[100px] font-display font-normal tracking-[-0.055em] text-white"
                      delay={0.4}
                      duration={1}
                      revealDirection="left"
                      startTrigger={imageSlideComplete}
                    />
                    <TextReveal
                      text="Engineer"
                      as="span"
                      className="block text-[clamp(2.75rem,8vw,120px)] lg:text-[120px] leading-[0.95] lg:leading-[100px] font-display font-normal tracking-[-0.055em] text-white"
                      delay={0.6}
                      duration={1}
                      revealDirection="left"
                      startTrigger={imageSlideComplete}
                    />
                  </>
                ) : (
                  <>
                    <span className="block text-[clamp(2.75rem,8vw,120px)] lg:text-[120px] leading-[0.95] lg:leading-[100px] font-display font-normal tracking-[-0.055em] text-white">
                      Software
                    </span>
                    <span className="block text-[clamp(2.75rem,8vw,120px)] lg:text-[120px] leading-[0.95] lg:leading-[100px] font-display font-normal tracking-[-0.055em] text-white">
                      Engineer
                    </span>
                  </>
                )}
              </h1>

              {/* Action buttons - even and professional */}
              <div
                ref={buttonsReveal.ref as any}
                className="flex flex-wrap justify-start lg:justify-start gap-3 reveal is-visible"
              >
                <button
                  onClick={() => navigate('/projects')}
                  className="flex items-center gap-2 min-h-11 px-5 sm:px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 touch-manipulation"
                >
                  <span>View My Work</span>
                </button>
              </div>

              {/* Secondary actions */}
              <div className="flex flex-wrap justify-start lg:justify-start gap-4">
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Bottom transition: 160px dark gradient & blur overlay blending seamlessly into the next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none z-20 bg-gradient-to-b from-transparent via-background/60 to-background backdrop-blur-[2px]"
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
