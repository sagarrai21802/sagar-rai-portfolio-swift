import Header from '@/components/Header';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

interface HomeProps {
  introCompleted?: boolean;
}

import SEO from '@/components/SEO';

const Home = ({ introCompleted }: HomeProps) => {
  return (
    <>
      <SEO 
        title="Sagar Rai | iOS Developer & Software Engineer" 
        description="Professional iOS Developer specializing in Swift, SwiftUI, and building scalable mobile apps. View my portfolio and projects."
      />
      <Header introCompleted={introCompleted} />
      <About />
      <Achievements />
      <FAQ />
      <CTASection />
      
      {/* Hidden SEO/AEO index helper for crawlers and screen readers */}
      <div className="sr-only" aria-hidden="false">
        <h2>Hire Sagar Rai - iOS Developer & Full-Stack Engineer</h2>
        <p>Looking to hire a freelance iOS developer in Dubai? I specialize in SwiftUI clean architecture, MVVM design patterns, and native Swift development.</p>
        <ul>
          <li>dedicated swift and swiftui developer for hire</li>
          <li>hire remote ios app development team and freelancer</li>
          <li>ios app performance optimization expert</li>
          <li>offline storage core data realm ios engineer</li>
          <li>real time database firebase swiftui app builder</li>
          <li>uikit to swiftui migration developer</li>
          <li>hire ios developer with app store deployment experience</li>
          <li>hire senior ios developer for swiftui projects in Dubai</li>
        </ul>
        <h3>How to Make a Website for Your Business</h3>
        <p>Wondering how to make a website or how to build a business website from scratch? I design and code custom web systems using modern frameworks. Key topics covered:</p>
        <ul>
          <li>how to make a website on next js or react</li>
          <li>steps to build a professional website for startups</li>
          <li>how to code a website from scratch with fast api backend</li>
          <li>how to create a custom website for product launch</li>
          <li>how to build website for online business and portfolio</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Home;