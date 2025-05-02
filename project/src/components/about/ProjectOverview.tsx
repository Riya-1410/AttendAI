import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Code, Clock } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Card, { CardContent } from '../ui/Card';

const ProjectOverview: React.FC = () => {
  const milestones = [
    {
      icon: <Lightbulb size={24} className="text-blue-600" />,
      title: "Project Inception",
      date: "September 2024",
      description: "Initial concept development and research into AI-based attendance systems."
    },
    {
      icon: <Code size={24} className="text-blue-600" />,
      title: "System Development",
      date: "October 2024 - January 2025",
      description: "Design and development of facial recognition algorithms and IoT integration."
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      title: "Testing Phase",
      date: "February 2025 - March 2025",
      description: "Extensive testing in classroom environments to refine accuracy and performance."
    },
    {
      icon: <Award size={24} className="text-blue-600" />,
      title: "Deployment",
      date: "April 2025",
      description: "Full implementation at Adani University with ongoing monitoring and improvements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Background</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The IoT-Based Attendance Taking System was developed as a capstone project at Adani University, addressing the inefficiencies and vulnerabilities of traditional attendance methods in educational institutions.
              </p>
              <p>
                Led by a team of three talented students under the guidance of Mrs. Rucha Patel, the project combines artificial intelligence, IoT technology, and cloud computing to create a seamless, accurate, and tamper-proof attendance solution.
              </p>
              <p>
                The system employs advanced facial recognition algorithms that can identify students with high accuracy even under varying lighting conditions and appearance changes, solving the persistent problems of manual attendance taking and proxy attendance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-gray-100 rounded-xl p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">System Overview</h3>
            <p className="text-gray-700 mb-4">
              Our advanced facial recognition system combines cutting-edge hardware with sophisticated AI algorithms to provide accurate and efficient attendance tracking.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• High-precision facial detection</li>
              <li>• Real-time processing capabilities</li>
              <li>• Secure data encryption</li>
              <li>• Cloud-based storage solution</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-20">
          <SectionHeader
            title="Project Timeline"
            subtitle="The key milestones in our development journey"
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-50 rounded-full mr-3">
                        {milestone.icon}
                      </div>
                      <h3 className="font-bold text-gray-900">{milestone.title}</h3>
                    </div>
                    <div className="text-sm text-blue-600 font-medium mb-3">{milestone.date}</div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectOverview;