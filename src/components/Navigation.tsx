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
    <nav className="absolute w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-white text-lg md:text-xl font-bold">AINO PEKKARINEN</h1>
          </div>

          <div className="hidden md:flex gap-6 items-center text-white">
            <Link to="/" className="hover:text-[#c0c0c0] transition-colors">
              Koti
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-[#c0c0c0] transition-colors focus:outline-none">
                Palvelut
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link to="/palvelut" className="w-full">
                    Kaikki palvelut
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/yhteydenotto" className="hover:text-[#c0c0c0] transition-colors">
              Yhteydenotto
            </Link>
          </div>

          <div className="md:hidden flex items-center">
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
          className="md:hidden bg-white/75 backdrop-blur-sm shadow-lg absolute top-16 left-0 right-0 mt-0 transition-opacity duration-200 ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          <div className="px-2 pt-4 pb-6 space-y-3 sm:px-3 flex flex-col items-center">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-black block px-3 py-3 rounded-md text-lg font-medium w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Koti
            </Link>
            
            <Link 
              to="/palvelut" 
              className="text-gray-700 hover:text-black block px-3 py-3 rounded-md text-lg font-medium w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Palvelut
            </Link>

            <Link 
              to="/yhteydenotto" 
              className="text-gray-700 hover:text-black block px-3 py-3 rounded-md text-lg font-medium w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Yhteydenotto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
