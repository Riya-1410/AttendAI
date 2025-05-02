import React from 'react';
import FeatureHero from '../components/features/FeatureHero';
import ContactForm from '../components/contact/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <FeatureHero />
      <ContactForm />
    </>
  );
};

export default ContactPage;