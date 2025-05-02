import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scan } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Demo', path: '/demo' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <Container>
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Scan size={32} className="text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AttendAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors hover:text-blue-600 ${
                      location.pathname === item.path 
                      ? 'text-blue-600' 
                      : isScrolled ? 'text-gray-900' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/login">
              <Button variant="primary" size="sm">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block font-medium py-2 transition-colors hover:text-blue-600 ${
                      location.pathname === item.path ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/login">
                <Button variant="primary" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;