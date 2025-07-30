
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-slate-700 focus:ring-secondary',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
