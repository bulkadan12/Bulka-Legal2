import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Scale className="h-8 w-8 text-blue-700 mr-2" />
          <span className="text-2xl font-bold text-gray-800">Bulka Law</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {location.pathname === '/' ? (
              <>
                <li><button onClick={() => scrollToSection('practice-areas')} className="text-gray-600 hover:text-blue-700">Practice Areas</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-700">About</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-700">Contact</button></li>
              </>
            ) : (
              <>
                <li><Link to="/#practice-areas" className="text-gray-600 hover:text-blue-700">Practice Areas</Link></li>
                <li><Link to="/#about" className="text-gray-600 hover:text-blue-700">About</Link></li>
                <li><Link to="/#contact" className="text-gray-600 hover:text-blue-700">Contact</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;