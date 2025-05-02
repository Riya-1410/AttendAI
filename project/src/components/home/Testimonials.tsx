import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data';
import SectionHeader from '../ui/SectionHeader';
import Container from '../ui/Container';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader
          title="What Educators Are Saying"
          subtitle="Hear from faculty members who have experienced the benefits of our attendance system."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 relative"
            >
              <Quote size={40} className="absolute text-blue-100 -top-3 -left-3" />
              <div className="relative">
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;