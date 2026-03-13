import React, { useEffect } from 'react';

const GenericPage = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - Almuhsiu`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none bg-dots"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <div className="flex items-center justify-center space-x-2 text-white/80 text-sm font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-secondary">{title}</span>
          </div>
        </div>
      </div>

      {/* Page Content Placeholder */}
      <section className="section-padding min-h-[50vh]">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          <h2 className="text-3xl font-bold text-primary mb-6">Welcome to the {title} Page</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            This is a dedicated page for {title}. Content for this section will be updated soon. 
            Almuhsiu Business Services is committed to providing best-in-class consultancy.
          </p>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 italic text-gray-500">
            "We offer comprehensive PRO services, product registration, and business setup assistance tailored to your specific needs in the UAE market."
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
