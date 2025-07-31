
import React, { useState } from 'react';
import { Job } from '../types';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Select from './ui/Select';
import Button from './ui/Button';
import { JOB_CATEGORIES, EMPLOYMENT_TYPES } from '../constants';

interface JobFormProps {
  job: Job;
  onSubmit: (job: Job) => void;
  onCancel: () => void;
}

const JobForm: React.FC<JobFormProps> = ({ job, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    ...job,
    responsibilities: job.responsibilities.join('\n'),
    requirements: job.requirements.join('\n'),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name.startsWith('salary.')) {
        const field = name.split('.')[1];
        setFormData(prev => ({ ...prev, salary: { ...prev.salary!, [field]: type === 'checkbox' ? checked : value } }));
    } else {
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalJob: Job = {
        ...formData,
        responsibilities: formData.responsibilities.split('\n').filter(r => r.trim() !== ''),
        requirements: formData.requirements.split('\n').filter(r => r.trim() !== ''),
        salary: formData.salary ? {
            ...formData.salary,
            min: Number(formData.salary.min),
            max: Number(formData.salary.max),
        } : undefined,
    };
    onSubmit(finalJob);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Job Title" name="title" value={formData.title} onChange={handleChange} required />
        <Input label="Company" name="company" value={formData.company} onChange={handleChange} required />
        <Input label="Location" name="location" value={formData.location} onChange={handleChange} required />
        <Select label="Employment Type" name="employmentType" value={formData.employmentType} onChange={handleChange} required>
          {EMPLOYMENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
        </Select>
        <Select label="Category" name="category" value={formData.category} onChange={handleChange} required>
          {JOB_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </Select>
      </div>
      <Textarea label="Description" name="description" value={formData.description} onChange={handleChange} rows={5} required />
      <Textarea label="Responsibilities (one per line)" name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={5} required />
      <Textarea label="Requirements (one per line)" name="requirements" value={formData.requirements} onChange={handleChange} rows={5} required />
      
      <fieldset className="border p-4 rounded-md">
        <legend className="text-lg font-medium text-dark px-2">Salary Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <Input label="Min Salary/Rate" name="salary.min" type="number" value={formData.salary?.min ?? ''} onChange={handleChange} />
            <Input label="Max Salary/Rate" name="salary.max" type="number" value={formData.salary?.max ?? ''} onChange={handleChange} />
            <Input label="Currency (e.g., CAD, CAD/hr)" name="salary.currency" value={formData.salary?.currency ?? ''} onChange={handleChange} />
        </div>
        <div className="flex items-center mt-4">
            <input type="checkbox" id="salary.visible" name="salary.visible" checked={formData.salary?.visible ?? false} onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"/>
            <label htmlFor="salary.visible" className="ml-2 block text-sm text-slate-900">Salary visible to applicants</label>
        </div>
      </fieldset>

      <div className="flex items-center">
        <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"/>
        <label htmlFor="featured" className="ml-2 block text-sm text-slate-900">Featured Job</label>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
};

export default JobForm;
