import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { CheckCircleIcon } from '../components/ui/icons';

const HeroSection: React.FC = () => (
    <div className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A diverse team of professionals collaborating in a modern office." 
                className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-dark/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                <span className="block">Connecting <span className="text-primary">Employment</span> With Opportunity</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Prime Temp is your strategic partner in sourcing exceptional temporary and permanent employment to drive your business forward.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Link to="/jobs">
                    <Button variant="primary">Find a Job</Button>
                </Link>
                <Link to="/employers">
                    <Button variant="secondary">Find Employment</Button>
                </Link>
            </div>
        </div>
    </div>
);

const ServiceCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <Card className="text-center">
        <h3 className="text-xl font-bold text-dark">{title}</h3>
        <p className="mt-2 text-slate-600">{description}</p>
    </Card>
);

const ServicesSection: React.FC = () => (
    <div className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Our Services</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
                    We offer a comprehensive range of staffing solutions.
                </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard 
                    title="Temporary Staffing"
                    description="Flexible, skilled professionals to cover short-term needs, seasonal peaks, and special projects."
                />
                <ServiceCard 
                    title="Direct Hire"
                    description="We find, screen, and present top-tier candidates for your permanent positions, saving you time and resources."
                />
                <ServiceCard 
                    title="Specialized Placements"
                    description="Expertise in sourcing employment for niche industries including IT, finance, and healthcare."
                />
            </div>
        </div>
    </div>
);

const EmployerBenefitSection: React.FC = () => (
    <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">Your Strategic Staffing Partner</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Finding the right employment is crucial for your success. We streamline the hiring process, connecting you with vetted professionals who fit your company culture and meet your technical needs.
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                            <span><strong>Access to Top Employment:</strong> Tap into our extensive network of skilled candidates.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                            <span><strong>Time and Cost Savings:</strong> We handle the sourcing, screening, and interviewing, so you can focus on your business.</span>
                        </li>
                         <li className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
                            <span><strong>Flexible Solutions:</strong> From temporary staff to permanent hires, we offer services tailored to your needs.</span>
                        </li>
                    </ul>
                     <div className="mt-8">
                        <Link to="/employers">
                            <Button variant="primary">Learn More</Button>
                        </Link>
                    </div>
                </div>
                 <div className="order-1 md:order-2">
                    <img 
                        src="https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="A professional using a smartphone, showing how we connect you with talent."
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </div>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <EmployerBenefitSection />
        </div>
    );
};

export default HomePage;