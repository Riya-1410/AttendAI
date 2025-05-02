import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';
import { features } from '../../data';

const Features: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent ? <IconComponent size={28} className="text-blue-600" /> : null;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Powerful Features"
          subtitle="Our system combines cutting-edge technology with user-friendly interfaces to deliver a comprehensive attendance solution."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    {renderIcon(feature.icon)}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;