import React from 'react';
import { PhoneCall } from 'lucide-react';

const GrowthCTA = () => {
  return (
    <section className="bg-accent py-12">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-6">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">We Help You for Growth Your Business</h2>
            <p className="text-white/80 text-lg">Contact our experts today for a free consultation and customized solutions.</p>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
            <div className="bg-secondary p-4 rounded-lg mr-6">
              <PhoneCall size={32} className="text-white" />
            </div>
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Call Us Anytime</p>
              <a href="tel:+971524552586" className="text-2xl md:text-3xl font-bold hover:text-secondary transition-colors">
                +971 50 189 4138
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthCTA;
