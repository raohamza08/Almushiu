import React from 'react';

const partners = [
  { name: 'Dubai Chamber', url: 'https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png' }, // Placeholder logo for government entities
  { name: 'Dubai Health Authority', url: 'https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png' },
  { name: 'Tas-heel', url: 'https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png' },
  { name: 'Dubai Economy', url: 'https://almuhsiu.com/wp-content/uploads/2024/10/aaa1112.png' },
  { name: 'Relax Home', url: 'https://almuhsiu.com/wp-content/uploads/2024/12/Relax-Home-logo-dark-white-300x133.gif' }
];

const PartnerLogos = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 grayscale opacity-60 hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="h-16 w-32 flex items-center justify-center p-2 mb-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
