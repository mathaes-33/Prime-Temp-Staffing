
import React from 'react';
import Card from '../components/ui/Card';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-dark text-center mb-8">Terms of Service</h1>
          <Card>
            <div className="space-y-4 text-slate-600 prose">
                <p>Welcome to PrimeTemp!</p>
                <p>These terms and conditions outline the rules and regulations for the use of PrimeTemp's Website.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use PrimeTemp if you do not agree to take all of the terms and conditions stated on this page.</p>
                <h2 className="text-2xl font-bold text-dark pt-4">License</h2>
                <p>Unless otherwise stated, PrimeTemp and/or its licensors own the intellectual property rights for all material on PrimeTemp. All intellectual property rights are reserved.</p>
                <h2 className="text-2xl font-bold text-dark pt-4">User Comments</h2>
                <p>This Agreement shall begin on the date hereof. Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. PrimeTemp does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of PrimeTemp, its agents or affiliates.</p>
                <p>This is a placeholder terms of service document. For a real website, consult a legal professional.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
