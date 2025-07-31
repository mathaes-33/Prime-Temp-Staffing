
import { Job, JobCategory, EmploymentType } from './types';

// Helper to get future/past dates
const getDate = (days: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

export const EMPLOYMENT_TYPES: EmploymentType[] = ['Full-time', 'Part-time', 'Contract', 'Temporary'];
export const JOB_CATEGORIES: JobCategory[] = ['Technology', 'Design', 'Administrative', 'Management', 'Marketing', 'Finance', 'Healthcare'];


export const INITIAL_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Innovatech Solutions',
    location: 'Toronto, ON',
    employmentType: 'Full-time',
    category: 'Technology',
    description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building the "client-side" of our web applications.',
    responsibilities: ['Develop new user-facing features', 'Build reusable code and libraries for future use', 'Ensure the technical feasibility of UI/UX designs'],
    requirements: ['React', 'TypeScript', 'Tailwind CSS', '5+ years of experience'],
    salary: { min: 120000, max: 150000, currency: 'CAD', visible: true },
    featured: true,
    postedDate: getDate(-3),
    applicationDeadline: getDate(27),
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Creative Minds Inc.',
    location: 'Mississauga, ON',
    employmentType: 'Contract',
    category: 'Design',
    description: 'Seeking a talented UX/UI designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design.',
    responsibilities: ['Gather and evaluate user requirements in collaboration with product managers and engineers', 'Illustrate design ideas using storyboards, process flows and sitemaps', 'Design graphic user interface elements, like menus, tabs and widgets'],
    requirements: ['Figma', 'Sketch', 'Prototyping', 'User Research'],
    salary: { min: 75, max: 95, currency: 'CAD/hr', visible: true },
    featured: false,
    postedDate: getDate(-5),
    applicationDeadline: getDate(25),
  },
  {
    id: '3',
    title: 'Data Entry Clerk',
    company: 'Global Logistics',
    location: 'Brampton, ON',
    employmentType: 'Temporary',
    category: 'Administrative',
    description: 'A detail-oriented Data Entry Clerk is needed for a 3-month project. Accuracy and speed are essential for this role.',
    responsibilities: ['Insert customer and account data by inputting text based and numerical information from source documents within time limits', 'Compile, verify accuracy and sort information according to priorities to prepare source data for computer entry', 'Review data for deficiencies or errors, correct any incompatibilities if possible and check output'],
    requirements: ['Microsoft Excel', 'Typing speed of 60+ WPM', 'High school diploma'],
    salary: { min: 22, max: 28, currency: 'CAD/hr', visible: true },
    featured: false,
    postedDate: getDate(-10),
    applicationDeadline: getDate(20),
  },
  {
    id: '4',
    title: 'Project Manager',
    company: 'DevLaunch',
    location: 'Vaughan, ON',
    employmentType: 'Full-time',
    category: 'Management',
    description: 'Lead our software development projects from conception to launch. You will coordinate with cross-functional teams to ensure timely delivery.',
    responsibilities: ['Coordinate internal resources and third parties/vendors for the flawless execution of projects', 'Ensure that all projects are delivered on-time, within scope and within budget', 'Develop a detailed project plan to track progress'],
    requirements: ['Agile methodologies', 'PMP certification', 'Excellent communication skills'],
    salary: { min: 110000, max: 140000, currency: 'CAD', visible: false },
    featured: true,
    postedDate: getDate(-2),
    applicationDeadline: getDate(28),
  },
  {
    id: '5',
    title: 'Graphic Designer',
    company: 'MarketBoost',
    location: 'Markham, ON',
    employmentType: 'Part-time',
    category: 'Marketing',
    description: 'Create visually stunning graphics for our marketing campaigns, social media, and website. A strong portfolio is a must.',
    responsibilities: ['Study design briefs and determine requirements', 'Conceptualize visuals based on requirements', 'Prepare rough drafts and present ideas'],
    requirements: ['Adobe Creative Suite (Photoshop, Illustrator)', 'Branding', '2+ years of experience'],
    featured: false,
    postedDate: getDate(-15),
    applicationDeadline: getDate(15),
  },
  {
    id: '6',
    title: 'Administrative Assistant',
    company: 'Executive Solutions',
    location: 'Toronto, ON',
    employmentType: 'Full-time',
    category: 'Administrative',
    description: 'Provide administrative support to our executive team. Responsibilities include scheduling meetings, managing correspondence, and organizing files.',
    responsibilities: ['Answer and direct phone calls', 'Organize and schedule appointments and meetings', 'Maintain contact lists'],
    requirements: ['Microsoft Office Suite', 'Organizational skills', 'Discretion'],
    salary: { min: 60000, max: 70000, currency: 'CAD', visible: true },
    featured: false,
    postedDate: getDate(-25),
    applicationDeadline: getDate(5),
  },
];
