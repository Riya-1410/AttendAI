import React from 'react';
import { Link } from 'react-router-dom';
import { Scan, Mail, Phone, MapPin, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Demo', path: '/demo' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', path: '#' },
        { name: 'API Reference', path: '#' },
        { name: 'Research Paper', path: '#' },
        { name: 'Implementation Guide', path: '#' },
        { name: 'FAQ', path: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Data Protection', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Scan size={32} className="text-blue-400" />
              <span className="text-xl font-bold text-white">AttendAI</span>
            </Link>
            <p className="mb-4 max-w-md">
              Revolutionizing attendance tracking in educational institutions through advanced AI facial recognition technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contact@attendai.com" className="hover:text-white transition-colors">
                  contact@attendai.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <address className="not-italic">
                  Adani University, Ahmedabad, Gujarat, India
                </address>
              </div>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="transition-colors hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} AttendAI. All rights reserved.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <GitHub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;