import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: Tab.HOME, label: 'Home' },
    { id: Tab.PRODUCTS, label: 'Products' },
    { id: Tab.ABOUT, label: 'About' },
    { id: Tab.BLOG, label: 'Blog' },
    { id: Tab.CONTACT, label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab(Tab.HOME)}>
            <div className="flex items-center gap-3">
              <div className="bg-emerald-600 h-12 w-12 flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-2xl tracking-tighter">GX</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-wide uppercase">Global Ex</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-base font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-emerald-500'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-4 rounded-md text-lg font-medium ${
                  activeTab === item.id
                    ? 'text-emerald-500 bg-zinc-800'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;