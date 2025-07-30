
import React from 'react';
import Card from '../components/ui/Card';

const FaqItem: React.FC<{ question: string, children: React.ReactNode }> = ({ question, children }) => (
    <div className="py-5">
        <dt className="text-lg font-medium text-dark">{question}</dt>
        <dd className="mt-2 text-base text-slate-600">{children}</dd>
    </div>
);


const FaqPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-dark text-center mb-8">Frequently Asked Questions</h1>
          <Card>
            <dl className="divide-y divide-slate-200">
                <FaqItem question="How do I apply for a job?">
                    You can browse our open positions on the "Find a Job" page. Once you find a role you're interested in, click the "Apply Now" button and fill out the application form.
                </FaqItem>
                <FaqItem question="What kind of jobs do you offer?">
                    We offer a wide range of positions including temporary, contract, and direct-hire roles across various industries like Technology, Administrative, Marketing, and more.
                </FaqItem>
                <FaqItem question="Is there a fee for job seekers?">
                    No, our services are completely free for job seekers. Our fees are paid by the employers who hire our candidates.
                </FaqItem>
                <FaqItem question="How can my company partner with PrimeTemp?">
                    We'd love to help with your staffing needs! Please visit the "For Employers" page and fill out the contact form. One of our specialists will get in touch with you promptly.
                </FaqItem>
            </dl>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
