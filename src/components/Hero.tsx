import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Innovative Legal Solutions for the Modern World</h1>
        <p className="text-xl mb-8">Bulka Law: Top-tier legal expertise for the cutting edge.</p>
        <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition duration-300">
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;