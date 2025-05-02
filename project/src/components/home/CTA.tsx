import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 py-16">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Attendance Taking?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join educational institutions already benefiting from our AI-powered attendance system. Request a demonstration today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-blue text-white-700 hover:bg-white/10 border-white/30"
              >
                Request a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;