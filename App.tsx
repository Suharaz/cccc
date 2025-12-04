import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { Tab } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <Hero onCtaClick={() => setActiveTab(Tab.PRODUCTS)} />;
      case Tab.PRODUCTS:
        return <Products onContactClick={() => setActiveTab(Tab.CONTACT)} />;
      case Tab.ABOUT:
        return <About />;
      case Tab.BLOG:
        return <Blog />;
      case Tab.CONTACT:
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setActiveTab(Tab.PRODUCTS)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 font-sans text-slate-200">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};