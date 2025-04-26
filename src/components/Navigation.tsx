import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-50 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <Link to="/" className="text-white text-2xl md:text-3xl tracking-wider font-light">
              AINO PEKKARINEN
            </Link>
          </div>

          <div className="hidden md:flex gap-12 items-center text-white uppercase text-xs tracking-widest">
            <Link to="/" className="hover:text-gray-300 transition-colors py-2">
              Koti
            </Link>
            
            <Link to="/palvelut" className="hover:text-gray-300 transition-colors py-2">
              Palvelut
            </Link>
            
            <Link to="/minusta" className="hover:text-gray-300 transition-colors py-2">
              Minusta
            </Link>
            
            <Link to="/yhteydenotto" className="hover:text-gray-300 transition-colors py-2">
              Yhteydenotto
            </Link>

            <a 
              href="https://vello.fi/lav-coaching" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white px-6 py-2 hover:bg-white/10 transition-all ml-4"
            >
              VARAA AIKA
            </a>
          </div>

          <div className="md:hidden flex items-center absolute right-4 top-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="md:hidden bg-white/95 shadow-lg absolute top-16 left-0 right-0 mt-0 transition-opacity duration-200 ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          <div className="px-2 pt-4 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-black block px-3 py-3 text-sm font-light w-full text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Koti
            </Link>
            
            <Link 
              to="/palvelut" 
              className="text-gray-800 hover:text-black block px-3 py-3 text-sm font-light w-full text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Palvelut
            </Link>
            
            <Link 
              to="/minusta" 
              className="text-gray-800 hover:text-black block px-3 py-3 text-sm font-light w-full text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Minusta
            </Link>

            <Link 
              to="/yhteydenotto" 
              className="text-gray-800 hover:text-black block px-3 py-3 text-sm font-light w-full text-center uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Yhteydenotto
            </Link>

            <a 
              href="https://vello.fi/lav-coaching" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 border border-gray-800 px-6 py-2 text-sm font-light text-gray-800 hover:bg-gray-800/5 transition-all uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Varaa aika
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
