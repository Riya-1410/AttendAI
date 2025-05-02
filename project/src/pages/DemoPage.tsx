import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import DemoPortal from '../components/demo/DemoPortal';
import CTA from '../components/home/CTA';

const DemoPage: React.FC = () => {
  return (
    <>
      <FeatureHero />
      <DemoPortal />
      <CTA />
    </>
  );
};

export default DemoPage;