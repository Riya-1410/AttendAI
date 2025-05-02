import React from 'react';
import AboutHero from '../components/about/AboutHero';
import ProjectOverview from '../components/about/ProjectOverview';
import ResearchSection from '../components/about/ResearchSection';
import TeamSection from '../components/home/TeamSection';
import CTA from '../components/home/CTA';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <ProjectOverview />
      <ResearchSection />
      <TeamSection />
      <CTA />
    </>
  );
};

export default AboutPage;