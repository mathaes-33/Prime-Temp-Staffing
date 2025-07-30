
import React from 'react';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const EmployerResourcesPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-dark text-center mb-8">Employer Resources</h1>
          <Card>
            <div className="space-y-6 text-slate-600">
              <p>This page is under construction. Soon, you will find valuable resources here, including:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Interviewing best practices</li>
                <li>Tips for onboarding new hires</li>
                <li>Market insights and salary guides</li>
                <li>Legal compliance information for hiring</li>
              </ul>
              <p>In the meantime, please <Link to="/employers" className="text-primary hover:underline">contact us</Link> directly for any assistance.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployerResourcesPage;
