import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">Bulka Law PLLC ("us", "we", or "our") operates the website (the "Service").</p>
      <p className="mb-4">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information Collection and Use</h2>
      <p className="mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Types of Data Collected</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">Personal Data</h3>
      <p className="mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Cookies and Usage Data</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Data</h2>
      <p className="mb-4">Bulka Law PLLC uses the collected data for various purposes:</p>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our Service</li>
        <li>To monitor the usage of our Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Transfer of Data</h2>
      <p className="mb-4">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Disclosure of Data</h2>
      <p className="mb-4">Bulka Law PLLC may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Bulka Law PLLC</li>
        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
        <li>To protect the personal safety of users of the Service or the public</li>
        <li>To protect against legal liability</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Security of Data</h2>
      <p className="mb-4">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
      <ul className="list-disc list-inside mb-4">
        <li>By email: [Your contact email]</li>
        <li>By phone number: (801) 979-5548</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;