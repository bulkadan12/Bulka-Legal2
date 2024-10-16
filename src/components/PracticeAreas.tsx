import React, { useState } from 'react';
import { Briefcase, Building, FileText, Store, Cpu, Users, Home, ChevronDown, ChevronUp, GitMerge } from 'lucide-react';

const practiceAreas = [
  { 
    name: 'Securities Law', 
    icon: Briefcase, 
    description: 'Private companies, capital raising, funds',
    details: 'Our Securities Law practice provides comprehensive legal services for private companies, capital raising initiatives, and fund formation & management. We guide clients through complex regulatory landscapes, ensuring compliance with SEC regulations and facilitating smooth transactions.'
  },
  { 
    name: 'Business & Corporate Law', 
    icon: Building, 
    description: 'Comprehensive legal solutions for businesses',
    details: 'From startups to established corporations, our Business & Corporate Law practice offers tailored legal strategies. We handle entity formation, mergers and acquisitions, corporate governance, and regulatory compliance to support your business growth and success.'
  },
  { 
    name: 'Mergers & Acquisitions', 
    icon: GitMerge, 
    description: 'Strategic guidance for M&A transactions',
    details: 'Our M&A practice provides expert guidance through all stages of mergers, acquisitions, and divestitures. We offer strategic advice on deal structuring, due diligence, negotiation, and post-merger integration, ensuring smooth transactions that maximize value for our clients.'
  },
  { 
    name: 'Contract Drafting', 
    icon: FileText, 
    description: 'Expert contract creation and review',
    details: 'Our Contract Drafting services ensure that your agreements are clear, enforceable, and protect your interests. We specialize in crafting and reviewing a wide range of contracts, from simple agreements to complex multi-party deals.'
  },
  { 
    name: 'Small Business Law', 
    icon: Store, 
    description: 'Legal support tailored for small businesses',
    details: 'We understand the unique challenges faced by small businesses. Our Small Business Law practice offers affordable, practical legal solutions covering areas such as business formation, employment law, intellectual property protection, and day-to-day operational issues.'
  },
  { 
    name: 'Tech & Startup Law', 
    icon: Cpu, 
    description: 'Navigating legal challenges in the tech industry',
    details: 'Our Tech & Startup Law practice is at the forefront of legal innovation. We assist technology companies and startups with IP protection, licensing agreements, privacy laws, funding rounds, and navigating the unique regulatory challenges in the tech sector.'
  },
  { 
    name: 'Fractional Counsel Services', 
    icon: Users, 
    description: 'Flexible legal counsel for your needs',
    details: 'Our Fractional Counsel Services provide on-demand legal expertise without the overhead of a full-time in-house counsel. We offer flexible, scalable legal support tailored to your business needs and budget.'
  },
  { 
    name: 'Real Estate Law', 
    icon: Home, 
    description: 'Comprehensive real estate legal services',
    details: 'Our Real Estate Law practice covers all aspects of property transactions. From residential to complex commercial property deals and everything in between, we provide expert guidance to protect execute on your real estate strategy.'
  },
];

const PracticeAreas = () => {
  const [expandedArea, setExpandedArea] = useState(null);

  const toggleArea = (index) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="relative">
              <div 
                className={`bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out ${
                  expandedArea === index ? 'z-20' : 'z-10'
                }`}
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleArea(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <area.icon className="h-12 w-12 text-blue-700 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                    {expandedArea === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-700" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-blue-700" />
                    )}
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedArea === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-700">{area.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;