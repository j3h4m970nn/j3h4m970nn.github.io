import React from 'react';
import { Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-50">
      <div className="flex items-center gap-2 text-2xl font-black italic">
        <Zap className="text-blue-500" size={28} /> 
        <span>SiteIQ</span>
      </div>
      
      <div className="hidden md:flex gap-8 font-medium">
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </div>

      <div className="flex items-center">
        <a href="#contact" className="bg-blue-600 px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition-all active:scale-95">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
