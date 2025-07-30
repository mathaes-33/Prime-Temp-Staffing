
import React from 'react';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-dark text-center mb-8">About PrimeTemp</h1>
          <Card>
            <div className="space-y-4 text-slate-600">
              <p>
                Founded on the principle of connecting exceptional employment with leading companies, PrimeTemp has grown into a trusted partner for businesses and professionals alike. We believe that the right person in the right role can transform a team, and the right opportunity can change a person's life.
              </p>
              <p>
                Our mission is simple: to provide seamless, efficient, and effective staffing solutions. Whether you're a company seeking top-tier employment or a professional looking for your next career move, we are here to guide you every step of the way.
              </p>
              <h2 className="text-2xl font-bold text-dark pt-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Integrity:</strong> We operate with transparency and honesty in all our interactions.</li>
                <li><strong>Excellence:</strong> We are committed to delivering the highest quality of service.</li>
                <li><strong>Partnership:</strong> We build long-lasting relationships with our clients and candidates.</li>
                <li><strong>Innovation:</strong> We leverage technology and industry insights to stay ahead of the curve.</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
