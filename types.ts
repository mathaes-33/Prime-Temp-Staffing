
export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Temporary';
export type JobCategory = 'Technology' | 'Design' | 'Administrative' | 'Management' | 'Marketing' | 'Finance' | 'Healthcare';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: EmploymentType;
  category: JobCategory;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
    visible: boolean;
  };
  featured: boolean;
  postedDate: string; // ISO 8601 date string
  applicationDeadline: string; // ISO 8601 date string
}

export interface EmployeeFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  availability: string[];
  desiredIndustries: string;
  skills: string;
  workHistory: string;
  resume: FileList | null;
  coverLetter: string;
  jobTitle: string;
  dataConsent: boolean;
}

export interface EmployerFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  staffingNeed: string;
}

export type NotificationType = {
  message: string;
  type: 'success' | 'error';
};
