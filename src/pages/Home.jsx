import React from 'react';
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import DetailedServices from '../components/DetailedServices';
import GrowthCTA from '../components/GrowthCTA';
import CaseStudy from '../components/CaseStudy';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <GrowthCTA />
      <DetailedServices />
      <CaseStudy />
      <Testimonials />
      <LatestNews />
    </>
  );
};

export default Home;
