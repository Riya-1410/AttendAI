import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Container from '../ui/Container';
import { features } from '../../data';

const DetailedFeatures: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent ? <IconComponent size={36} className="text-blue-600" /> : null;
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <div className="inline-block bg-blue-100 p-3 rounded-lg mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{feature.description}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {[
                      'Enhances academic integrity through reliable verification',
                      'Reduces administrative overhead for teaching staff',
                      'Provides accurate data for academic analytics',
                      'Improves student accountability and engagement'
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-green-600 mr-2 mt-1">
                          <LucideIcons.CheckCircle size={16} />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img 
                    src={`https://images.pexels.com/photos/${[8566473, 7947541, 8566497, 3861969, 4050388, 4050315, 257897, 3861458][index % 8]}/pexels-photo-${[8566473, 7947541, 8566497, 3861969, 4050388, 4050315, 257897, 3861458][index % 8]}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                    alt={feature.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DetailedFeatures;