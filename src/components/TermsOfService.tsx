import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website (the "Service") operated by Bulka Law PLLC ("us", "we", or "our").</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of the Service</h2>
      <p className="mb-4">Our Service allows you to access information about our legal services. You are responsible for maintaining the confidentiality of any login information associated with any account you use to access the Service.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of Bulka Law PLLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Links To Other Web Sites</h2>
      <p className="mb-4">Our Service may contain links to third-party websites or services that are not owned or controlled by Bulka Law PLLC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Termination</h2>
      <p className="mb-4">We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Limitation of Liability</h2>
      <p className="mb-4">In no event shall Bulka Law PLLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
      <p className="mb-4">These Terms shall be governed and construed in accordance with the laws of Florida, United States, without regard to its conflict of law provisions.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">8. Changes</h2>
      <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">9. Contact Us</h2>
      <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>By email: [Your contact email]</li>
        <li>By phone number: (801) 979-5548</li>
      </ul>
    </div>
  );
};

export default TermsOfService;