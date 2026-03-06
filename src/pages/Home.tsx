import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

interface HomeProps {
  introCompleted?: boolean;
}

const Home = ({ introCompleted }: HomeProps) => {
  return (
    <>
      <Header introCompleted={introCompleted} />
      <About />
      <Footer />
    </>
  );
};

export default Home;