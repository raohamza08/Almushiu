import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white font-lato">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About Column */}
          <div className="space-y-8">
            <img 
              src="https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png" 
              alt="Almuhsiu Logo" 
              className="h-16 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              Almuhsiu Business Services is dedicated to providing exceptional PRO services in Dubai, tailored to meet the unique needs of businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Our Service
            </h4>
            <ul className="space-y-4">
              <FooterLink>PRO Services</FooterLink>
              <FooterLink>Bank Account Assistance</FooterLink>
              <FooterLink>Product Registration</FooterLink>
              <FooterLink>Golden VISA</FooterLink>
              <FooterLink>Business Centers</FooterLink>
              <FooterLink>Company Liquidation</FooterLink>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Useful Links
            </h4>
            <ul className="space-y-4">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Services</FooterLink>
              <FooterLink>Dubai Freelance</FooterLink>
              <FooterLink>Company Overview</FooterLink>
              <FooterLink>Latest News</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-secondary">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-secondary mr-4 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">Office No. 101, Business Center, Dubai, UAE</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-secondary mr-4 flex-shrink-0" size={20} />
                <a href="tel:+971524552586" className="text-gray-400 hover:text-white transition-colors">+971 52 455 2586</a>
              </div>
              <div className="flex items-center">
                <Mail className="text-secondary mr-4 flex-shrink-0" size={20} />
                <a href="mailto:contact@almuhsiutypingcenter.com" className="text-gray-400 hover:text-white transition-colors">contact@almuhsiutypingcenter.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2024 Almuhsiu Business Services. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-300">
    {React.cloneElement(icon, { size: 18 })}
  </a>
);

const FooterLink = ({ children }) => (
  <li>
    <a href="#" className="text-gray-400 hover:text-secondary flex items-center group transition-colors">
      <ArrowRight size={12} className="mr-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
      {children}
    </a>
  </li>
);

export default Footer;
