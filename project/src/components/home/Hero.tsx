import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-600 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">Revolutionizing</span>
              <span className="text-blue-300">Attendance Tracking</span>
              <span className="block">with AI Technology</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Our IoT-based facial recognition system eliminates manual attendance, prevents proxy attendance, and provides real-time insights for educational institutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary"
                size="lg"
                className="bg-blue-500 hover:bg-blue-600"
              >
                Learn More
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Try Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['60% Time Savings', 'Tamper-Proof Records', 'Real-Time Analytics'].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-blue-700/30 bg-blue-800/30 backdrop-blur-sm p-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-blue-100 text-sm mb-1">Live Recognition</div>
                  <div className="text-white font-medium">Students identified and marked present in real-time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-blue-100 text-sm mb-1">Instant Processing</div>
                  <div className="text-white font-medium">Advanced AI algorithms ensure quick and accurate identification</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-blue-100 text-sm mb-1">Secure Storage</div>
                  <div className="text-white font-medium">All data encrypted and stored safely in the cloud</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;