import React from 'react';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 h-10 w-10 flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-base">GX</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">GLOBAL EX</span>
            </div>
            <p className="text-zinc-500 text-base leading-relaxed">
              Premium natural charcoal products from Vietnam's certified forests to ports worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-8 uppercase text-base tracking-wider">Products</h4>
            <ul className="space-y-5 text-base text-zinc-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">White Charcoal</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Black Charcoal</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Briquettes</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-8 uppercase text-base tracking-wider">Contact</h4>
            <ul className="space-y-5 text-base text-zinc-400">
              <li className="font-medium text-white">GLOBAL EX COMPANY LIMITED</li>
              <li className="flex items-start gap-3">
                <span>Ha Noi, Vietnam</span>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:global.ex888@gmail.com" className="hover:text-white">global.ex888@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span>Mon-Sat: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-base text-zinc-600">© 2024 GLOBAL EX. All rights reserved.</p>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-zinc-500 hover:text-blue-500 transition-colors transform hover:scale-110" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-pink-500 transition-colors transform hover:scale-110" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <span className="text-sm">Privacy Policy</span>
              </a>
              <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                <span className="text-sm">Terms of Service</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;