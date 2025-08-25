import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';
const Footer = () => {
  const handleNewsletterSubmit = e => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter signup isn't implemented yet—but don't worry! 🚀",
      duration: 4000
    });
  };
  const handleSocialClick = () => {
    toast({
      title: "🚧 Social media links aren't implemented yet—but don't worry! 🚀",
      duration: 4000
    });
  };
  return <footer className="bg-[var(--navy)] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[var(--red)] flex items-center justify-center">
                <span className="text-white font-bold text-xl serif">G</span>
              </div>
              <div>
                <span className="text-2xl font-bold serif">Gen Uprising</span>
                <p className="text-sm text-gray-300">Politics by the Next Generation</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Educating, questioning, and empowering young citizens worldwide through civic literacy and authentic youth perspectives on democracy and governance.
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-[var(--red)] p-6 rounded-lg">
              <span className="text-2xl font-bold serif block mb-2">JOIN THE UPRISING</span>
              <p className="text-sm mb-4 opacity-90">Get weekly insights delivered to your inbox</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-[var(--charcoal)] rounded focus:outline-none focus:ring-2 focus:ring-white" required />
                <button type="submit" className="activist-button bg-white text-[var(--red)] px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold serif mb-4 block">Chapters</span>
            <ul className="space-y-2">
              <li><Link to="/civic-literacy" className="text-gray-300 hover:text-white transition-colors underline-animation">Civic Literacy</Link></li>
              <li><Link to="/opinion" className="text-gray-300 hover:text-white transition-colors underline-animation">Opinion & Editorials</Link></li>
              <li><Link to="/global-democracy" className="text-gray-300 hover:text-white transition-colors underline-animation">Global Democracy</Link></li>
              <li><Link to="/culture-politics" className="text-gray-300 hover:text-white transition-colors underline-animation">Culture & Politics</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <span className="text-lg font-semibold serif mb-4 block">Connect</span>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors underline-animation">About Us</Link></li>
              <li><button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors underline-animation text-left">Twitter</button></li>
              <li><button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors underline-animation text-left">Instagram</button></li>
              <li><button onClick={handleSocialClick} className="text-gray-300 hover:text-white transition-colors underline-animation text-left">TikTok</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Gen Uprising. Empowering the next generation of civic leaders.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
