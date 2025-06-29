
import ThemeToggle from '@/components/ThemeToggle';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
