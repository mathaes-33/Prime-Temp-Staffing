import React from 'react';
import { NavLink } from 'react-router-dom';
import { BriefcaseIcon, LinkedinIcon, TwitterIcon, MailIcon, PhoneIcon } from './ui/icons';

const FooterLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => (
    <li>
        <NavLink to={to} className="text-slate-300 hover:text-primary transition-colors duration-300">
            {children}
        </NavLink>
    </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
                <div className="flex items-center gap-2 text-2xl font-bold text-white">
                    <BriefcaseIcon className="h-8 w-8 text-primary" />
                    <span>PrimeTemp</span>
                </div>
                <p className="mt-4 text-slate-300 max-w-xs">
                    Connecting top employment with leading employers. Your strategic partner in staffing excellence.
                </p>
                <div className="mt-6 space-y-3">
                    <a href="mailto:primetempstaffing@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                        <MailIcon className="h-5 w-5" />
                        <span>primetempstaffing@gmail.com</span>
                    </a>
                    <a href="tel:+16474500225" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
                        <PhoneIcon className="h-5 w-5" />
                        <span>+1 (647) 450-0225</span>
                    </a>
                </div>
                 <div className="mt-6 flex space-x-4">
                    <a href="https://linkedin.com/company/primetemp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary"><span className="sr-only">LinkedIn</span><LinkedinIcon className="h-6 w-6" /></a>
                    <a href="https://twitter.com/primetemp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6" /></a>
                </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">For Job Seekers</h3>
                    <ul className="mt-4 space-y-3">
                        <FooterLink to="/jobs">Find a Job</FooterLink>
                        <FooterLink to="/application-tips">Application Tips</FooterLink>
                        <FooterLink to="/faq">FAQ</FooterLink>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">For Employers</h3>
                    <ul className="mt-4 space-y-3">
                        <FooterLink to="/employers">Request Staff</FooterLink>
                        <FooterLink to="/services">Our Services</FooterLink>
                        <FooterLink to="/employer-resources">Employer Resources</FooterLink>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">Company</h3>
                    <ul className="mt-4 space-y-3">
                        <FooterLink to="/about">About Us</FooterLink>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">Legal & Resources</h3>
                    <ul className="mt-4 space-y-3">
                        <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                        <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
                        <FooterLink to="/admin">Admin</FooterLink>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Prime Temp Temp Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;