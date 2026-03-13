import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  return (
    <a 
      href="https://wa.me/971524552586" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce hover:animate-none"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
    </a>
  );
};

export default WhatsAppWidget;
