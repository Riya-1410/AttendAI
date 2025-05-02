import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'blue' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white' 
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-gray-50'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;