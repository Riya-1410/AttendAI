import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { team } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import Container from '../ui/Container';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <Container>
        <SectionHeader
          title="Meet Our Team"
          subtitle="The talented individuals behind this innovative attendance system."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{member.name}</h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} className="text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} className="text-gray-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;