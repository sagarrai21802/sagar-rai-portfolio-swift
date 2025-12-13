
import ThemeToggle from '@/components/ThemeToggle';
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
  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <ThemeToggle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Achievements />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
