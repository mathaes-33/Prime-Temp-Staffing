
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, id, name, error, ...props }) => {
  const inputId = id || name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary focus:border-primary'
        }`}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...props}
      />
      {error && <p id={errorId} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
