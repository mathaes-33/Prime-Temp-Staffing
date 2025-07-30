
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, name, error, ...props }) => {
  const textareaId = id || name;
  const errorId = error ? `${textareaId}-error` : undefined;
  
  return (
    <div>
      <label htmlFor={textareaId} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <textarea
        id={textareaId}
        name={name}
        rows={4}
        className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 transition ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-primary focus:border-primary'
        }`}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...props}
      ></textarea>
      {error && <p id={errorId} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Textarea;
