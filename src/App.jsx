import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';

function App() {
  useEffect(() => {
    // Page Title
    document.title = "Almuhsiu - Provide Best Quality Consultancy";
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<GenericPage title="About Us" />} />
            <Route path="/about-us/company-overview" element={<GenericPage title="Company Overview" />} />
            <Route path="/about-us/mission-vision" element={<GenericPage title="Mission & Vision" />} />
            <Route path="/about-us/our-team" element={<GenericPage title="Our Team" />} />
            
            <Route path="/services" element={<GenericPage title="Services" />} />
            <Route path="/services/product-registration" element={<GenericPage title="Product Registration" />} />
            <Route path="/services/bank-account-assistance" element={<GenericPage title="Bank Account Assistance" />} />
            <Route path="/services/pro-services" element={<GenericPage title="PRO Services" />} />
            <Route path="/services/golden-visa" element={<GenericPage title="Golden Visa" />} />
            <Route path="/services/business-centers" element={<GenericPage title="Business Centers" />} />
            <Route path="/services/company-liquidation" element={<GenericPage title="Company Liquidation" />} />
            
            <Route path="/dubai-freelance" element={<GenericPage title="Dubai Freelance" />} />
            <Route path="/contact-us" element={<GenericPage title="Contact Us" />} />
            <Route path="/latest-news" element={<GenericPage title="Latest News" />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
