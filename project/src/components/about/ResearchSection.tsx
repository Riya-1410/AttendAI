import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart, Layers, AlertCircle } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card, { CardHeader, CardTitle, CardContent } from '../ui/Card';

const ResearchSection: React.FC = () => {
  const researchTopics = [
    {
      icon: <FileText size={24} className="text-blue-600" />,
      title: "Literature Review",
      description: "Extensive analysis of existing attendance systems and facial recognition technologies in educational settings."
    },
    {
      icon: <BarChart size={24} className="text-blue-600" />,
      title: "Comparative Analysis",
      description: "Benchmarking our system against existing manual and automated attendance solutions for performance and accuracy."
    },
    {
      icon: <Layers size={24} className="text-blue-600" />,
      title: "Technical Framework",
      description: "Development of a novel architecture combining edge computing and cloud processing for optimal performance."
    },
    {
      icon: <AlertCircle size={24} className="text-blue-600" />,
      title: "Challenges & Solutions",
      description: "Innovative approaches to overcome common facial recognition limitations in diverse classroom environments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeader
          title="Research & Development"
          subtitle="The academic foundation and technical innovation behind our system"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {researchTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-50 rounded-full mr-4">
                      {topic.icon}
                    </div>
                    <CardTitle>{topic.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Research Findings</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Accuracy Improvements</h4>
                <p className="text-gray-700">
                  Our hybrid approach combining convolutional neural networks with feature extraction algorithms achieved a 99% accuracy rate, significantly higher than the 85-90% industry standard.
                </p>
              </div>
              <div className="pb-4 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Efficiency Gains</h4>
                <p className="text-gray-700">
                  Implementation of our system reduced attendance-taking time by 60% compared to traditional methods, freeing up an average of 10 minutes per class session.
                </p>
              </div>
              <div className="pb-4 border-b border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">Proxy Elimination</h4>
                <p className="text-gray-700">
                  Field tests demonstrated a 95% reduction in proxy attendance cases, significantly improving academic integrity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">User Satisfaction</h4>
                <p className="text-gray-700">
                  Faculty satisfaction surveys indicated a 92% approval rating, with particular emphasis on the time savings and reliability of the system.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ResearchSection;