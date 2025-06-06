import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactCTA />
      </ScrollAnimation>
    </Layout>
  );
};

export default Index;
