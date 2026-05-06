import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
