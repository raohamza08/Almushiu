import React, { useState, useEffect } from 'react';
import { Phone, Mail, Search, Facebook, Instagram, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-2 hidden lg:block">
      <div className="container-custom flex justify-between items-center text-sm font-medium text-gray-600">
        <div className="flex items-center space-x-6">
          <a href="tel:+971524552586" className="flex items-center hover:text-secondary transition-colors">
            <Phone size={16} className="mr-2 text-secondary" />
            +971 52 455 2586
          </a>
          <a href="mailto:contact@almuhsiutypingcenter.com" className="flex items-center hover:text-secondary transition-colors">
            <Mail size={16} className="mr-2 text-secondary" />
            Free Enquiry
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary-dark transition-all duration-300 font-bold text-xs uppercase tracking-wider">
            Request a Call back
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { 
      name: 'About Us', 
      href: '#',
      dropdown: ['Company Overview', 'Mission & Vision', 'Our Team']
    },
    { 
      name: 'Services', 
      href: '#',
      dropdown: ['Product Registration', 'Bank Account Assistance', 'PRO Services', 'Golden Visa', 'Business Centers', 'Company Liquidation']
    },
    { name: 'Dubai Freelance', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="relative w-full z-50">
      <TopBar />
      <nav className={cn(
        "bg-primary py-4 transition-all duration-300 w-full",
        isSticky ? "fixed top-0 left-0 shadow-lg" : "relative"
      )}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png" 
              alt="Almuhsiu Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="nav-link flex items-center py-2"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                </a>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 w-64 bg-secondary mt-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl rounded-b-md">
                    {link.dropdown.map((item) => (
                      <a 
                        key={item} 
                        href="#" 
                        className="block px-6 py-3 text-white hover:bg-white hover:text-primary transition-colors text-sm font-semibold border-b border-white/10 last:border-0"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/20">
              <button className="text-white hover:text-secondary transition-colors">
                <Search size={20} />
              </button>
              <div className="flex items-center space-x-3 text-white">
                <a href="#" className="hover:text-secondary transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-secondary transition-colors"><Instagram size={18} /></a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-primary border-t border-white/10 transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}>
          {navLinks.map((link) => (
            <div key={link.name} className="px-6 py-2">
              <div className="flex justify-between items-center text-white font-medium py-2">
                <span>{link.name}</span>
                {link.dropdown && <ChevronDown size={18} />}
              </div>
              {link.dropdown && mobileMenuOpen && (
                <div className="pl-4 mt-1 border-l border-secondary/50">
                  {link.dropdown.map((item) => (
                    <a key={item} href="#" className="block py-2 text-gray-300 text-sm">{item}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
