import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Header section - stays in place initially
      if (headerRef.current) {
        // Header stays at the bottom, moves up slightly as we scroll
        const headerProgress = Math.min(scrollY / viewportHeight, 1);
        headerRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        headerRef.current.style.opacity = String(1 - headerProgress * 0.5);
      }

      // About section - starts below, moves up to cover header
      if (aboutRef.current) {
        const aboutStart = viewportHeight * 0.3;
        const aboutProgress = Math.max(0, Math.min((scrollY - aboutStart) / viewportHeight, 1));
        
        // About slides up from below and overlaps header
        const translateY = viewportHeight - (scrollY - aboutStart);
        aboutRef.current.style.transform = `translateY(${translateY * 0.8}px)`;
        aboutRef.current.style.zIndex = String(10 + Math.floor(aboutProgress * 10));
      }

      // Achievements section - starts below about, moves up to cover about
      if (achievementsRef.current) {
        const achievementsStart = viewportHeight * 1.3;
        const achievementsProgress = Math.max(0, Math.min((scrollY - achievementsStart) / viewportHeight, 1));
        
        // Achievements slides up from below and overlaps about
        const translateY = viewportHeight - (scrollY - achievementsStart);
        achievementsRef.current.style.transform = `translateY(${translateY * 0.8}px)`;
        achievementsRef.current.style.zIndex = String(20 + Math.floor(achievementsProgress * 10));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Header - Card 1 */}
      <div 
        ref={headerRef}
        className="stacked-card stacked-card-1 !bg-[#1a1a2e] min-h-screen"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          willChange: 'transform, opacity'
        }}
      >
        <Header />
      </div>
      
      {/* About - Card 2 */}
      <div 
        ref={aboutRef}
        className="stacked-card stacked-card-2 !bg-[#0f0f23] min-h-screen"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          willChange: 'transform, opacity'
        }}
      >
        <About />
      </div>
      
      {/* Regular sections - will be covered by the stacked cards */}
      <div className="relative z-1">
        <Skills />
        <Projects />
        <OpenSource />
      </div>
      
      {/* Achievements - Card 3 */}
      <div 
        ref={achievementsRef}
        className="stacked-card stacked-card-3 !bg-[#0a0a1a] min-h-screen"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 15,
          willChange: 'transform, opacity'
        }}
      >
        <Achievements />
      </div>
      
      <div className="relative z-1">
        <Education />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
