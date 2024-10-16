import React from 'react';
import { Scale } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Scale className="h-8 w-8 text-blue-700 mr-2" />
          <span className="text-2xl font-bold text-gray-800">Bulka Law</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#practice-areas" className="text-gray-600 hover:text-blue-700">Practice Areas</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-700">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-700">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;