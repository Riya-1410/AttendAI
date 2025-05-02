import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import ProcessDetails from '../components/howItWorks/ProcessDetails';
import CTA from '../components/home/CTA';

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <FeatureHero />
      <ProcessDetails />
      <CTA />
    </>
  );
};

export default HowItWorksPage;