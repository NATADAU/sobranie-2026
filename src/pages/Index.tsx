import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Program from '@/components/Program';
import Place from '@/components/Place';
import CtaStrip from '@/components/CtaStrip';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import useReveal from '@/hooks/useReveal';

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Program />
        <Place />
        <CtaStrip />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;