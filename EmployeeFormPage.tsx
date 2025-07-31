import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import Notification from '../components/ui/Notification';
import { EmployeeFormData, NotificationType } from '../types';
import { useForm } from '../hooks/useForm';
import { useJobs } from '../context/JobContext';

const AVAILABILITY_OPTIONS = ['Full-time', 'Part-time', 'Contract', 'Temporary'];

const INITIAL_VALUES: EmployeeFormData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  availability: [],
  desiredIndustries: '',
  skills: '',
  workHistory: '',
  coverLetter: '',
  jobTitle: '',
  resume: null,
  dataConsent: false,
};

const validate = (values: EmployeeFormData): Partial<Record<keyof EmployeeFormData, string>> => {
  const newErrors: Partial<Record<keyof EmployeeFormData, string>> = {};
  if (!values.fullName.trim()) newErrors.fullName = 'Full name is required.';
  if (!values.email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    newErrors.email = 'Email is invalid.';
  }
  if (!values.jobTitle.trim()) newErrors.jobTitle = 'Desired job title is required.';
  if (!values.resume || values.resume.length === 0) newErrors.resume = 'A resume file is required.';
  if (values.availability.length === 0) newErrors.availability = 'Please select at least one availability option.';
  if (!values.dataConsent) newErrors.dataConsent = 'You must consent to data processing to apply.';
  return newErrors;
};


const EmployeeFormPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [notification, setNotification] = useState<NotificationType | null>(null);
  const { jobs } = useJobs();
  
  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm } = useForm({
    initialValues: INITIAL_VALUES,
    validate,
    onSubmit: (vals) => {
      console.log('Form submitted:', vals);
      
      // Save to localStorage
      const submissions = JSON.parse(localStorage.getItem('employeeApplications') || '[]');
      submissions.push({ ...vals, resume: vals.resume ? vals.resume[0].name : 'No file', submittedAt: new Date().toISOString() });
      localStorage.setItem('employeeApplications', JSON.stringify(submissions));

      setNotification({
        message: "Thank you for applying. We'll be in touch shortly!",
        type: 'success',
      });
      resetForm();
    },
  });

  useEffect(() => {
    const jobId = searchParams.get('jobId');
    if (jobId) {
        const job = jobs.find(j => j.id === jobId);
        if (job) {
            setFieldValue('jobTitle', job.title);
        }
    }
  }, [searchParams, setFieldValue, jobs]);
  
  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const currentAvailability = values.availability || [];
    if(checked) {
        setFieldValue('availability', [...currentAvailability, value]);
    } else {
        setFieldValue('availability', currentAvailability.filter(item => item !== value));
    }
  };


  return (
    <>
      <Notification notification={notification} onDismiss={() => setNotification(null)} />
      <div className="bg-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold text-dark text-center">Apply for a Position</h1>
            <p className="mt-2 text-slate-500 text-center">Fill out the form below to join our employment pool.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
              <Input label="Full Name" name="fullName" value={values.fullName} onChange={handleChange} error={errors.fullName} required />
              <Input label="Email Address" type="email" name="email" value={values.email} onChange={handleChange} error={errors.email} required />
              <Input label="Phone Number" type="tel" name="phone" value={values.phone} onChange={handleChange} error={errors.phone} />
              <Input label="Address (Optional)" name="address" value={values.address} onChange={handleChange} error={errors.address} />
              <Input label="Desired Job Title" name="jobTitle" value={values.jobTitle} onChange={handleChange} error={errors.jobTitle} required />
              <Textarea label="Key Skills (e.g., React, Figma, MS Office)" name="skills" value={values.skills} onChange={handleChange} error={errors.skills} />
              <Textarea label="Work History (Optional)" name="workHistory" value={values.workHistory} onChange={handleChange} error={errors.workHistory} placeholder="Briefly describe your last few roles."/>
              <Textarea label="Desired Industries (Optional)" name="desiredIndustries" value={values.desiredIndustries} onChange={handleChange} error={errors.desiredIndustries} placeholder="e.g., Technology, Healthcare, Finance"/>
              <Textarea label="Cover Letter (Optional)" name="coverLetter" value={values.coverLetter} onChange={handleChange} />
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {AVAILABILITY_OPTIONS.map(option => (
                        <div key={option} className="flex items-center">
                            <input 
                                id={`availability-${option}`} 
                                name="availability" 
                                type="checkbox" 
                                value={option}
                                checked={values.availability.includes(option)}
                                onChange={handleAvailabilityChange}
                                className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
                            />
                            <label htmlFor={`availability-${option}`} className="ml-3 block text-sm text-slate-700">{option}</label>
                        </div>
                    ))}
                  </div>
                   {errors.availability && <p className="mt-1 text-sm text-red-600">{errors.availability}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Resume</label>
                <input 
                    type="file" 
                    name="resume" 
                    onChange={handleChange}
                    aria-describedby={errors.resume ? 'resume-error' : undefined}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-primary hover:file:bg-cyan-100"
                    required
                />
                {errors.resume && <p id="resume-error" className="mt-1 text-sm text-red-600">{errors.resume}</p>}
              </div>
               <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="dataConsent"
                      name="dataConsent"
                      type="checkbox"
                      checked={values.dataConsent}
                      onChange={handleChange}
                      className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="dataConsent" className="font-medium text-gray-700">
                      I consent to the processing of my data as described in the <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </label>
                     {errors.dataConsent && <p className="mt-1 text-sm text-red-600">{errors.dataConsent}</p>}
                  </div>
              </div>
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeFormPage;
