import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import DetailedFeatures from '../components/features/DetailedFeatures';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const FeaturesPage: React.FC = () => {
  return (
    <>
      <FeatureHero />
      <DetailedFeatures />
      <Stats />
      <CTA />
    </>
  );
};

export default FeaturesPage;