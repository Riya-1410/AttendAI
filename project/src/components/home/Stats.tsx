import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { stats } from '../../data';
import Container from '../ui/Container';

const Stats: React.FC = () => {
  return (
    <section className="bg-blue-700 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2 flex justify-center">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;