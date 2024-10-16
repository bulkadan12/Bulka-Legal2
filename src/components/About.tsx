import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Bulka Law</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt="Bulka Law Team"
              className="rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
          {/* Rest of the component remains the same */}
        </div>
      </div>
    </section>
  );
};

export default About;