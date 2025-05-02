import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import TeamSection from '../components/home/TeamSection';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <TeamSection />
      <CTA />
    </>
  );
};

export default HomePage;