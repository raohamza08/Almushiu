import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://almuhsiu.com/wp-content/uploads/2018/01/image-1.jpg',
    title: 'Provide Best Quality Consultancy',
    description: 'For over +1 years, we\'ve been enthusiastic about accomplishing better outcomes for our customers, comes about that go past budgetary and are extraordinarily customized.',
    primaryBtn: 'Know More',
    secondaryBtn: 'Contact'
  },
  {
    image: 'https://almuhsiu.com/wp-content/uploads/2018/01/image-2.jpg',
    title: 'Expert Business Solutions in Dubai',
    description: 'We provide comprehensive PRO services, product registration, and business setup assistance tailored to your specific needs in the UAE market.',
    primaryBtn: 'Our Services',
    secondaryBtn: 'Get Started'
  }
];

const HeroSlider = () => {
  return (
    <section className="relative h-[600px] md:h-[750px] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-primary/40"></div>
              </div>
              
              {/* Content */}
              <div className="relative h-full container-custom flex items-center">
                <div className="max-w-2xl text-white">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-7xl font-bold leading-tight mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="btn-outline">
                      {slide.primaryBtn}
                    </button>
                    <button className="btn-primary">
                      {slide.secondaryBtn}
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
