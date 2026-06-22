import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Counters from './components/Counters.jsx';
import Problem from './components/Problem.jsx';
import Advantages from './components/Advantages.jsx';
import Services from './components/Services.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Portfolio from './components/Portfolio.jsx';
import Reviews from './components/Reviews.jsx';
import Faq from './components/Faq.jsx';
import CtaForm from './components/CtaForm.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';
import { initReveals } from './lib/reveal.js';

export default function App() {
  useEffect(() => {
    const id = requestAnimationFrame(() => initReveals(document));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 flex-1">
        <Hero />
        <Counters />
        <Problem />
        <Advantages />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Reviews />
        <Faq />
        <CtaForm />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
