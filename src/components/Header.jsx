import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Civic Literacy', href: '/civic-literacy' },
    { name: 'Opinion & Editorials', href: '/opinion' },
    { name: 'Global Democracy', href: '/global-democracy' },
    { name: 'Culture & Politics', href: '/culture-politics' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>Gen Uprising - Politics by the Next Generation</title>
        <meta name="description" content="A powerful political blog educating, questioning, and empowering young citizens worldwide through civic literacy and youth perspectives." />
        <meta property="og:title" content="Gen Uprising - Politics by the Next Generation" />
        <meta property="og:description" content="A powerful political blog educating, questioning, and empowering young citizens worldwide through civic literacy and youth perspectives." />
      </Helmet>
      <header className="bg-white border-b-2 border-[var(--navy)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--red)] flex items-center justify-center">
                <span className="text-white font-bold text-xl serif">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold serif text-[var(--navy)]">Gen Uprising</h1>
                <p className="text-sm text-[var(--text-muted)] font-medium">Politics by the Next Generation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 underline-animation ${
                    isActive(item.href)
                      ? 'text-[var(--red)]'
                      : 'text-[var(--charcoal)] hover:text-[var(--red)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[var(--charcoal)] hover:text-[var(--red)] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-gray-200"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-[var(--red)]'
                      : 'text-[var(--charcoal)] hover:text-[var(--red)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
