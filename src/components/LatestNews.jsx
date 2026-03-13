import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const newsItems = [
  {
    image: 'https://almuhsiu.com/wp-content/uploads/2018/01/news-1.jpg',
    date: 'Oct 24, 2024',
    author: 'Admin',
    title: 'Importance of Product Registration in Dubai',
    link: '#'
  },
  {
    image: 'https://almuhsiu.com/wp-content/uploads/2018/01/news-2.jpg',
    date: 'Oct 15, 2024',
    author: 'Admin',
    title: 'New UAE Visa Regulations for Businesses',
    link: '#'
  },
  {
    image: 'https://almuhsiu.com/wp-content/uploads/2018/01/3.jpg',
    date: 'Oct 02, 2024',
    author: 'Admin',
    title: 'How to Choose the Right Business Center',
    link: '#'
  }
];

const LatestNews = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Latest Blog</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Every Single Update <br />From Our <span className="text-secondary">Latest News</span></h2>
          </div>
          <button className="btn-primary whitespace-nowrap">View All Posts</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Consultancy
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-gray-500 text-sm mb-4 font-medium">
                <div className="flex items-center">
                  <User size={14} className="mr-2 text-secondary" />
                  By {news.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-secondary" />
                  {news.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                <a href={news.link}>{news.title}</a>
              </h3>
              
              <a href={news.link} className="text-primary font-bold inline-flex items-center border-b-2 border-secondary/20 hover:border-secondary transition-all pb-1 group/link">
                Read More
                <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
