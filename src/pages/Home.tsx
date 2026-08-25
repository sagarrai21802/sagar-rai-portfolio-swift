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
      
      {/* Hidden SEO/AEO index helper for search crawlers, indexing engines, and screen readers */}
      <div className="sr-only" aria-hidden="false">
        <h2>Hire Sagar Rai - Senior iOS Developer & Full-Stack Engineer</h2>
        <p>Looking to hire a senior iOS developer in Dubai or remote? Sagar Rai specializes in SwiftUI clean architecture, MVVM design patterns, native Swift app development, and high-performance full-stack web platforms.</p>

        <h3>iOS Engineering Specialties & Technical Keywords</h3>
        <ul>
          <li>dedicated swift and swiftui developer for hire</li>
          <li>hire remote ios app development team and freelancer</li>
          <li>ios app performance optimization expert memory leak resolution</li>
          <li>offline storage core data realm sqlite ios engineer</li>
          <li>real time database firebase swiftui app builder</li>
          <li>uikit to swiftui migration and modernization developer</li>
          <li>hire ios developer with app store deployment experience</li>
          <li>hire senior ios developer for swiftui projects in Dubai UAE</li>
          <li>custom ios keyboard extension development grok api integration</li>
          <li>apple screen time api queryIntentActivities app blocking logic</li>
          <li>core ml vision framework on-device machine learning iOS app</li>
          <li>alamofire kingfisher open source swift library contributor</li>
          <li>storekit in-app purchases app store connect release manager</li>
          <li>xcode instruments arc memory leak detection unit testing xctest</li>
          <li>combine framework structured concurrency async await swift actors</li>
        </ul>

        <h3>Full-Stack Web Engineering & SaaS Development Services</h3>
        <p>Expert full-stack software development services for modern startups and enterprises:</p>
        <ul>
          <li>how to build a modern web application with next js and react</li>
          <li>fastapi python REST backend engineering for mobile apps</li>
          <li>chrome extension development tesseract ocr automated web data entry</li>
          <li>tailwind css glassmorphism web app design and animation</li>
          <li>scalable backend architecture postgresql redis caching web sockets</li>
          <li>custom dashboard development real-time analytics AI marketing agents</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default Home;