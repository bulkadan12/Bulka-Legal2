import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Bulka Law</h2>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt="Bulka Law Team"
              className="rounded-lg shadow-md w-full"
              loading="lazy"
            />
          </div>
          <div className="max-w-3xl text-center">
            <p className="text-lg mb-6">
              Founded on the principle that legal services should evolve with the rapidly changing business landscape, we've positioned ourselves at the intersection of law and technology.
            </p>
            <p className="text-lg mb-6">
              Our unique blend of forward-thinking solutions will address not just your current legal needs but also anticipate future challenges.
            </p>
            <p className="text-lg mb-6">
              We pride ourselves on our approachable nature and our ability to demystify complex challenges. Whether you're a tech startup navigating your first funding round, an established corporation considering a merger, or an individual seeking expert legal advice, we're here to guide you with clarity and confidence.
            </p>
            <p className="text-lg">
              At Bulka Law, we're more than your legal representatives – we're your partners in growth, innovation, and success. Let us help you turn your legal challenges into opportunities for advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;