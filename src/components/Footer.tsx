import React from 'react';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Scale className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold">Bulka Law</span>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><a href="#practice-areas" className="hover:text-blue-400">Practice Areas</a></li>
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bulka Law. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a> | 
            <a href="#" className="hover:text-blue-400 ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;