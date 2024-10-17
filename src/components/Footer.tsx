import React from 'react';
import { Link } from 'react-router-dom';
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
          <p>&copy; {new Date().getFullYear()} Bulka Law PLLC. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-blue-400 ml-2">Terms of Service</Link>
          </p>
        </div>
        <div className="mt-8 text-xs text-gray-500 text-center">
          <p>This website is operated by Bulka Law PLLC, licensed to practice law in the State of Florida.</p>
          <p className="mt-2">The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.</p>
          <p className="mt-2">This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;