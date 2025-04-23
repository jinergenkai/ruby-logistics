
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
