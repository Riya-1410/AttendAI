import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { processSteps } from '../../data';

const ProcessDetails: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = LucideIcons[iconName as keyof typeof LucideIcons];
    return IconComponent ? <IconComponent size={36} className="text-blue-600" /> : null;
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="System Architecture & Process"
          subtitle="A detailed look at how our AI-powered attendance system processes and verifies student presence."
        />

        <div className="mt-16 space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {renderIcon(step.icon)}
                  </div>
                  <span className="text-3xl font-bold text-blue-600">Step {step.id}</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Technical Details</h3>
                  <ul className="space-y-3">
                    {[
                      'High-definition cameras with 1080p resolution for clear image capture',
                      'Real-time image processing using optimized edge computing',
                      'Secure data transmission using end-to-end encryption',
                      'Multi-factor verification to prevent spoofing attempts'
                    ].map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-blue-600 mr-2 mt-1">
                          <LucideIcons.CheckCircle size={16} />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img 
                    src={`https://images.pexels.com/photos/${[8566473, 7947541, 8566497, 3861969, 4050388][index % 5]}/pexels-photo-${[8566473, 7947541, 8566497, 3861969, 4050388][index % 5]}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                    alt={step.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-50 p-8 rounded-xl border border-blue-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">System Requirements</h3>
            <p className="text-gray-700 mt-2">Recommended hardware and software specifications for optimal performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-full mr-3">
                  <LucideIcons.Camera size={24} className="text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900">Camera Hardware</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• HD Camera (1080p minimum)</li>
                <li>• 90° field of view or greater</li>
                <li>• Low-light performance</li>
                <li>• Multiple cameras for large rooms</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <LucideIcons.Server size={24} className="text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900">Server Requirements</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Quad-core processor or better</li>
                <li>• 8GB RAM minimum</li>
                <li>• 1TB SSD storage</li>
                <li>• Internet connection (10Mbps+)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 rounded-full mr-3">
                  <LucideIcons.Globe size={24} className="text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-900">Network Setup</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Secure Wi-Fi or Ethernet</li>
                <li>• Isolated network segment (VLAN)</li>
                <li>• Firewall protection</li>
                <li>• SSL certificates for web portal</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProcessDetails;