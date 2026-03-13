import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Almuhsiu Business Services made the entire process of setting up my company in Dubai incredibly smooth. Their team is professional, knowledgeable, and always available to answer questions.",
    author: "James Wilson",
    role: "Tech Entrepreneur"
  },
  {
    text: "I was worried about the complexity of product registration, but Almuhsiu handled everything. Their expertise saved me weeks of work and ensured we were compliant from day one.",
    author: "Sarah Ahmed",
    role: "Retail Director"
  },
  {
    text: "The best PRO service I've used in the UAE. Efficient, transparent, and reliable. Highly recommended for any serious business owner in Dubai.",
    author: "Mohammed Ibrahim",
    role: "SME Owner"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-8 border-secondary rounded-full"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Clients Feedback</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            loop
            className="testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="pb-16 px-6">
                  <div className="mb-8 flex justify-center">
                    <Quote size={60} className="text-secondary opacity-30 rotate-180" />
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed font-light">
                    "{item.text}"
                  </p>
                  <div className="h-1 w-12 bg-secondary mx-auto mb-6"></div>
                  <h5 className="text-white font-bold text-lg">{item.author}</h5>
                  <p className="text-secondary/80 text-sm font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
