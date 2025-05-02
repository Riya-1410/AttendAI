import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-blue-800 pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              About Our Project
            </h1>
            <p className="text-xl text-blue-100">
              Learn about the team, technology, and vision behind our IoT-Based Attendance Taking System
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;