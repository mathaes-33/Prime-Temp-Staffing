
import React from 'react';
import Card from '../components/ui/Card';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-dark text-center mb-8">Privacy Policy</h1>
          <Card>
            <div className="space-y-4 text-slate-600 prose">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <h2 className="text-2xl font-bold text-dark pt-4">Information Collection and Use</h2>
                <p>While using Our Service, we may ask You to provide us with certain personally identifiable information that can be used to contact or identify You. This may include, but is not limited to: email address, full name, phone number, and resume data.</p>
                <h2 className="text-2xl font-bold text-dark pt-4">Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes: to provide and maintain our Service, to manage Your account, to contact You, and for the purpose of recruitment and matching You with potential employers.</p>
                <h2 className="text-2xl font-bold text-dark pt-4">Security of Your Personal Data</h2>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                <p>This is a placeholder privacy policy. For a real website, consult a legal professional.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
