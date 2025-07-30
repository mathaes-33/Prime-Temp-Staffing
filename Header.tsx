
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BriefcaseIcon, MenuIcon, XIcon } from './ui/icons';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `text-base font-medium transition-colors ${
        isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
      }`
    }
  >
    {children}
  </NavLink>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-dark">
              <BriefcaseIcon className="h-8 w-8 text-primary" />
              <span>PrimeTemp</span>
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/jobs">Job Listings</NavItem>
            <NavItem to="/employers">For Employers</NavItem>
          </nav>
          <div className="hidden md:block">
            <NavLink
              to="/apply"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover"
            >
              Apply Now
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <NavItem to="/" onClick={closeMenu}>Home</NavItem>
            <NavItem to="/jobs" onClick={closeMenu}>Job Listings</NavItem>
            <NavItem to="/employers" onClick={closeMenu}>For Employers</NavItem>
            <NavLink
              to="/apply"
              onClick={closeMenu}
              className="block w-full text-center mt-4 px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover"
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;