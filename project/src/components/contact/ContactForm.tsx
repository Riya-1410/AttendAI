import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Building, Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import { faqs } from '../../data';

const ContactForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title="Get In Touch"
              subtitle="Have questions about implementing our system? Reach out to our team."
              centered={false}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24-48 hours.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="pl-10 w-full rounded-md border border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="pl-10 w-full rounded-md border border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                      Institution
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building size={18} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="institution"
                        name="institution"
                        className="pl-10 w-full rounded-md border border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="University or institution name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="pl-10 w-full rounded-md border border-gray-300 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your message or inquiry"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <Button type="submit" className="w-full flex items-center justify-center gap-2">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

            <div className="space-y-6">
              {faqs.slice(0, 4).map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Request a Demonstration</h4>
              <p className="text-gray-700 mb-4">
                Would you like to see the system in action? We offer live demonstrations for educational institutions.
              </p>
              <Button variant="primary">Schedule Demo</Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;