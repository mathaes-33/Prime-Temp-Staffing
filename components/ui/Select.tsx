
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, id, name, error, children, ...props }) => {
  const selectId = id || name;
  const errorId = error ? `${selectId}-error` : undefined;

  return (
    <div>
      <label htmlFor={selectId} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <select
        id={selectId}
        name={name}
        className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary focus:border-primary'
        }`}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...props}
      >
        {children}
      </select>
      {error && <p id={errorId} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
