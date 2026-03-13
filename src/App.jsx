import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import WelcomeSection from './components/WelcomeSection';
import DetailedServices from './components/DetailedServices';
import GrowthCTA from './components/GrowthCTA';
import CaseStudy from './components/CaseStudy';
import Testimonials from './components/Testimonials';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  useEffect(() => {
    // Page Title
    document.title = "Almuhsiu - Provide Best Quality Consultancy";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSlider />
        <WelcomeSection />
        <GrowthCTA />
        <DetailedServices />
        <CaseStudy />
        <Testimonials />
        <LatestNews />
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
