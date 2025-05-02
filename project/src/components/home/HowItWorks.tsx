import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Container from '../ui/Container';
import { processSteps } from '../../data';

const HowItWorks: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent ? <IconComponent size={32} className="text-blue-600" /> : null;
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="Our AI-powered attendance system simplifies the entire process with a seamless workflow."
        />

        <div className="relative mt-16">
          {/* Connection Line */}
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-blue-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 border-2 border-blue-100">
                  {renderIcon(step.icon)}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="mx-auto max-w-5xl bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Input Layer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• HD Cameras</li>
                  <li>• IoT Sensors</li>
                  <li>• Mobile Devices</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Processing Layer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI Models</li>
                  <li>• Edge Computing</li>
                  <li>• Real-time Analysis</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Storage Layer</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cloud Database</li>
                  <li>• Encrypted Data</li>
                  <li>• Backup Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;