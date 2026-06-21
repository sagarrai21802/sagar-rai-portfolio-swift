import Header from '@/components/Header';
import About from '@/components/About';
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
      <Footer />
    </>
  );
};

export default Home;