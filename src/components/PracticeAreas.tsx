import React, { useState } from 'react';
import { Briefcase, Building, FileText, Store, Cpu, Users, Home, ChevronDown, ChevronUp, GitMerge } from 'lucide-react';

const practiceAreas = [
  { 
    name: 'Securities Law', 
    icon: Briefcase, 
    description: 'Expert guidance for private companies in capital raising and fund formation.',
    details: 'We provide comprehensive legal services that simplify the complexities of securities regulations. Our team ensures your capital-raising efforts and fund formations are compliant and efficient, allowing you to focus on growth. **Contact us to learn more.**'
  },
  { 
    name: 'Business & Corporate Law', 
    icon: Building, 
    description: 'Tailored legal strategies for your business success.',
    details: 'From startup to expansion, we offer customized legal solutions for entity formation, mergers and acquisitions, and corporate governance. Let us be your partner in navigating the legal landscape to drive your business forward. **Schedule a consultation today.**'
  },
  { 
    name: 'Mergers & Acquisitions', 
    icon: GitMerge, 
    description: 'Strategic support for seamless M&A transactions.',
    details: 'Our experts guide you through every stage of mergers and acquisitions, from due diligence to post-merger integration. We focus on maximizing value and ensuring a smooth transition. **Reach out to our M&A team.**'
  },
  { 
    name: 'Contract Drafting', 
    icon: FileText, 
    description: 'Precise contracts that protect your interests.',
    details: 'We specialize in drafting and reviewing contracts that are clear and enforceable. Our attention to detail minimizes risks and safeguards your business relationships. **Get started with us today.**'
  },
  { 
    name: 'Small Business Law', 
    icon: Store, 
    description: 'Affordable legal solutions for small businesses.',
    details: 'Understanding the unique challenges you face, we offer practical legal advice on formation, compliance, and daily operations, helping your small business thrive without the hefty price tag. **Contact us for a free consultation.**'
  },
  { 
    name: 'Tech & Startup Law', 
    icon: Cpu, 
    description: 'Legal expertise for tech innovators and startups.',
    details: 'Stay ahead in the fast-paced tech industry with our specialized understanding of bleeding-edge fields. We help you navigate regulations so you can innovate freely. **Learn more about our tech law services.**'
  },
  { 
    name: 'Fractional Counsel Services', 
    icon: Users, 
    description: 'On-demand legal counsel tailored to your needs.',
    details: 'Access top-tier legal expertise without the full-time commitment. Our flexible services scale with your business, providing support exactly when you need it. **Find out how we can assist you.**'
  },
  { 
    name: 'Real Estate Law', 
    icon: Home, 
    description: 'Comprehensive services for all your real estate needs.',
    details: 'From every day residential to complex commercial transactions, we ensure your deals are executed flawlessly, aligning with your strategic goals. **Leverage us today.**'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={area.name} className="relative">
              <div
                className={`bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out ${
                  expandedArea === index ? 'z-20' : 'z-10'
                }`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => toggleArea(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedArea === index}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggleArea(index);
                    }
                  }}
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
