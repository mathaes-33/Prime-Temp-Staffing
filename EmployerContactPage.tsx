import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import Notification from '../components/ui/Notification';
import { EmployerFormData, NotificationType } from '../types';
import { useForm } from '../hooks/useForm';
import { MailIcon, PhoneIcon } from '../components/ui/icons';

const INITIAL_VALUES: EmployerFormData = {
  companyName: '',
  contactPerson: '',
  email: '',
  phone: '',
  staffingNeed: '',
};

const validate = (values: EmployerFormData): Partial<Record<keyof EmployerFormData, string>> => {
  const newErrors: Partial<Record<keyof EmployerFormData, string>> = {};
  if (!values.companyName.trim()) newErrors.companyName = 'Company name is required.';
  if (!values.contactPerson.trim()) newErrors.contactPerson = 'Contact person is required.';
  if (!values.email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    newErrors.email = 'Email is invalid.';
  }
  if (!values.staffingNeed.trim()) newErrors.staffingNeed = 'Please describe your staffing needs.';
  return newErrors;
};

const EmployerContactPage: React.FC = () => {
  const [notification, setNotification] = useState<NotificationType | null>(null);
  
  const { values, errors, handleChange, handleSubmit, resetForm } = useForm({
    initialValues: INITIAL_VALUES,
    validate,
    onSubmit: (vals) => {
      console.log('Form submitted:', vals);
      
      // Save to localStorage
      const submissions = JSON.parse(localStorage.getItem('employerInquiries') || '[]');
      submissions.push({ ...vals, submittedAt: new Date().toISOString() });
      localStorage.setItem('employerInquiries', JSON.stringify(submissions));

      setNotification({
          message: 'Thank you for your inquiry. A specialist will contact you shortly.',
          type: 'success',
      });
      resetForm();
    },
  });

  return (
    <>
      <Notification notification={notification} onDismiss={() => setNotification(null)} />
      <div className="bg-light py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
              <h1 className="text-3xl font-extrabold text-dark">Find Your Next Great Hire</h1>
              <p className="mt-4 text-slate-600 flex-grow">Let us know what you're looking for, and we'll find the perfect talent for your team. Fill out the form or contact us directly.</p>
              
               <div className="mt-8 space-y-4">
                  <a href="mailto:primetempstaffing@gmail.com" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                      <MailIcon className="h-5 w-5" />
                      <span>primetempstaffing@gmail.com</span>
                  </a>
                  <a href="tel:+16474500225" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                      <PhoneIcon className="h-5 w-5" />
                      <span>+1 (647) 450-0225</span>
                  </a>
              </div>

              <div className="mt-8">
                  <img 
                      src="https://plus.unsplash.com/premium_photo-1675349302983-4d7c77c4f673?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Two professionals shaking hands, signifying a successful partnership."
                      className="rounded-lg shadow-md w-full h-auto object-cover max-w-sm mx-auto"
                      loading="lazy"
                  />
              </div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 bg-slate-50 flex items-center">
              <div className="w-full">
                <h2 className="text-2xl font-bold text-dark mb-6">Request Staff</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <Input label="Company Name" name="companyName" value={values.companyName} onChange={handleChange} error={errors.companyName} required />
                    <Input label="Contact Person" name="contactPerson" value={values.contactPerson} onChange={handleChange} error={errors.contactPerson} required />
                    <Input label="Work Email" type="email" name="email" value={values.email} onChange={handleChange} error={errors.email} required />
                    <Input label="Phone Number" type="tel" name="phone" value={values.phone} onChange={handleChange} error={errors.phone} />
                    <Textarea label="Describe Your Staffing Needs" name="staffingNeed" value={values.staffingNeed} onChange={handleChange} error={errors.staffingNeed} required />
                    <Button type="submit" className="w-full">Request Talent</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerContactPage;