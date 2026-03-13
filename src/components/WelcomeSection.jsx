import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Landmark, ShieldCheck, FileText, BadgeCheck, Building2, Trash2 } from 'lucide-react';

const services = [
  {
    icon: <Settings size={40} className="text-secondary" />,
    title: 'Product Registration',
    description: 'We help you register your products with the relevant authorities in Dubai and the UAE, ensuring compliance with all regulations.',
    link: '#'
  },
  {
    icon: <Landmark size={40} className="text-secondary" />,
    title: 'Bank Account Assistance',
    description: 'Opening a business bank account in the UAE can be complex. We guide you through the process and help you choose the right bank.',
    link: '#'
  },
  {
    icon: <ShieldCheck size={40} className="text-secondary" />,
    title: 'PRO Services',
    description: 'Our Public Relations Officer services handle all your government-related tasks, visas, and documentation efficiently.',
    link: '#'
  }
];

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none bg-dots"></div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Welcome Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Welcome to Almuhsiu</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Your Trusted Partner for <span className="text-secondary">Business Success</span> in Dubai
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Almuhsiu Business Services is a leading consultancy firm in Dubai, dedicated to providing high-quality solutions for entrepreneurs and established businesses. Our expertise spans across multiple domains, ensuring your journey in the UAE market is smooth and successful.
              </p>
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-light transition-all duration-300">
                Read More About Us
              </button>
            </motion.div>
          </div>

          {/* Initial Service Cards */}
          <div className="lg:col-span-12 mt-12 grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 rounded-xl shadow-lg border-b-4 border-transparent hover:border-secondary transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <a href={service.link} className="text-secondary font-bold inline-flex items-center group-hover:underline">
                  Read More
                  <span className="ml-2">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
