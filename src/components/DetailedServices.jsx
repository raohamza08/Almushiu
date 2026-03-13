import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BadgeCheck, Building2, Trash2, Globe, Users, Briefcase, Zap } from 'lucide-react';

const allServices = [
  { icon: <FileText />, title: 'Licensing Support', desc: 'Comprehensive assistance for obtaining all types of business licenses in the UAE.' },
  { icon: <BadgeCheck />, title: 'Golden Visa', desc: 'Expert guidance for long-term residency applications for investors and professionals.' },
  { icon: <Building2 />, title: 'Business Centers', desc: 'Premium workspace solutions in strategic locations across Dubai.' },
  { icon: <Trash2 />, title: 'Company Liquidation', desc: 'Professional handling of company cancellation and closure procedures.' },
  { icon: <Globe />, title: 'Global Mobility', desc: 'Seamless relocation and work permit processing for international talent.' },
  { icon: <Users />, title: 'Corporate Structuring', desc: 'Strategic advice on legal forms and ownership structures for your business.' },
  { icon: <Briefcase />, title: 'Dubai Freelance', desc: 'Solutions for independent professionals looking to work legally in the UAE.' },
  { icon: <Zap />, title: 'Urgent Processing', desc: 'Express PRO services for time-sensitive government applications.' }
];

const DetailedServices = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Our Comprehensive <span className="text-secondary">Services Offer</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 w-24 bg-secondary mx-auto mb-8"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-transparent hover:border-secondary flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <button className="text-primary font-bold text-xs uppercase tracking-tighter hover:text-secondary transition-colors">
                Explore More +
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
