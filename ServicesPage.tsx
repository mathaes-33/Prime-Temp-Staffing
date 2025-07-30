
import React from 'react';
import Card from '../components/ui/Card';

const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <Card className="text-center">
        <h3 className="text-xl font-bold text-dark">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
    </Card>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-dark sm:text-5xl">Our Staffing Services</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
                    We offer a comprehensive range of staffing solutions tailored to your business needs.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard 
                    title="Temporary Staffing"
                    description="Flexible, skilled professionals to cover short-term needs, seasonal peaks, and special projects."
                />
                <ServiceCard 
                    title="Temp-to-Hire"
                    description="Evaluate a candidate on-the-job before making a long-term commitment. It's the perfect way to ensure a great fit."
                />
                <ServiceCard 
                    title="Direct Hire"
                    description="We find, screen, and present top-tier candidates for your permanent positions, saving you time and resources."
                />
                <ServiceCard 
                    title="Specialized Placements"
                    description="Expertise in sourcing employment for niche industries including IT, finance, and healthcare."
                />
                 <ServiceCard 
                    title="Payroll Services"
                    description="Streamline your operations by letting us handle payroll for your temporary or contract employees."
                />
                <ServiceCard 
                    title="Consulting"
                    description="Strategic advice on workforce management, talent acquisition strategies, and market trends."
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
