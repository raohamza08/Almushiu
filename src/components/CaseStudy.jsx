import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Case Study</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              A Company Relation with <span className="text-secondary">Transparent Communication</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We believe that clear and open communication is the cornerstone of any successful partnership. Our approach is built on transparency, ensuring our clients are informed at every step of their business journey in Dubai.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-2 rounded-full mr-4 mt-1">
                  <div className="bg-secondary h-2 w-2 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Tailored Solutions</h4>
                  <p className="text-gray-500 text-sm">Every business is unique, and we customize our services to fit your specific goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary/10 p-2 rounded-full mr-4 mt-1">
                  <div className="bg-secondary h-2 w-2 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Expert Guidance</h4>
                  <p className="text-gray-500 text-sm">Our team of experienced consultants provides deep local market insights.</p>
                </div>
              </div>
            </div>
            
            <Link to="/contact-us" className="btn-primary inline-block">Get Appointment</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://almuhsiu.com/wp-content/uploads/2018/01/video-img.jpg" 
                alt="Case Study Video" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-125">
                  <Play size={32} className="text-secondary fill-secondary ml-1" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10 group-hover:bg-secondary/40 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
