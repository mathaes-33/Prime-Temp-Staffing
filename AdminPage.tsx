import React, { useState, useEffect } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { EditIcon, TrashIcon, UserIcon, LogOutIcon, BriefcaseIcon, InboxIcon } from '../components/ui/icons';
import { useJobs } from '../context/JobContext';
import { EmployeeFormData, EmployerFormData } from '../types';

type StoredApplication = Omit<EmployeeFormData, 'resume'> & { resume: string; submittedAt: string };
type StoredInquiry = EmployerFormData & { submittedAt: string };

const AdminPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [applications, setApplications] = useState<StoredApplication[]>([]);
    const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);
    
    const { jobs, deleteJob } = useJobs();

    useEffect(() => {
        if (isLoggedIn) {
            const storedApps = JSON.parse(localStorage.getItem('employeeApplications') || '[]');
            const storedInquiries = JSON.parse(localStorage.getItem('employerInquiries') || '[]');
            setApplications(storedApps.sort((a: StoredApplication, b: StoredApplication) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
            setInquiries(storedInquiries.sort((a: StoredInquiry, b: StoredInquiry) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
        }
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'admin@primetemp.com' && password === 'password') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };
    
    const handleDeleteJob = (jobId: string, jobTitle: string) => {
        if (window.confirm(`Are you sure you want to delete the job posting: "${jobTitle}"?`)) {
            deleteJob(jobId);
        }
    };

    const deleteApplication = (index: number) => {
        if(window.confirm('Are you sure you want to delete this application?')) {
            const updatedApplications = [...applications];
            updatedApplications.splice(index, 1);
            setApplications(updatedApplications);
            localStorage.setItem('employeeApplications', JSON.stringify(updatedApplications));
        }
    };

    const deleteInquiry = (index: number) => {
         if(window.confirm('Are you sure you want to delete this inquiry?')) {
            const updatedInquiries = [...inquiries];
            updatedInquiries.splice(index, 1);
            setInquiries(updatedInquiries);
            localStorage.setItem('employerInquiries', JSON.stringify(updatedInquiries));
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="bg-light min-h-[calc(100vh-10rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark">
                            Admin Dashboard Login
                        </h2>
                    </div>
                    <Card className="!shadow-2xl">
                        <form className="space-y-6" onSubmit={handleLogin}>
                             <Input 
                                label="Email Address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input 
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

                            <div>
                                <Button type="submit" className="w-full">
                                    Sign in
                                </Button>
                            </div>
                             <p className="text-xs text-slate-500 text-center">Use `admin@primetemp.com` and `password` to sign in.</p>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-light py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                     <h1 className="text-4xl font-extrabold text-dark">Admin Dashboard</h1>
                     <Button variant="secondary" onClick={handleLogout} className="!px-4 !py-2 flex items-center">
                        <LogOutIcon className="h-5 w-5 mr-2" />
                        Logout
                    </Button>
                </div>
                
                <div className="grid grid-cols-1 gap-10">
                    <Card>
                        <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2"><BriefcaseIcon className="h-6 w-6 text-primary"/> Job Management ({jobs.length})</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Company</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Type</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {jobs.map((job) => (
                                        <tr key={job.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark">{job.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{job.company}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{job.employmentType}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button onClick={() => alert(`Editing for "${job.title}" is not yet implemented.`)} className="text-primary hover:text-primary-dark p-1"><span className="sr-only">Edit</span><EditIcon className="h-5 w-5"/></button>
                                                <button onClick={() => handleDeleteJob(job.id, job.title)} className="text-red-600 hover:text-red-800 p-1"><span className="sr-only">Delete</span><TrashIcon className="h-5 w-5"/></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>

                     <Card>
                        <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2"><InboxIcon className="h-6 w-6 text-primary"/> Candidate Applications ({applications.length})</h2>
                        <div className="overflow-x-auto">
                            {applications.length > 0 ? (
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Applicant</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Applying For</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {applications.map((app, index) => (
                                        <tr key={index} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark">{app.fullName} <br/><span className="text-slate-500">{app.email}</span></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{app.jobTitle}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{new Date(app.submittedAt).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button onClick={() => alert(`Details for ${app.fullName}:\nSkills: ${app.skills}\nResume: ${app.resume}`)} className="text-primary hover:text-primary-dark p-1"><span className="sr-only">View</span><UserIcon className="h-5 w-5"/></button>
                                                <button onClick={() => deleteApplication(index)} className="text-red-600 hover:text-red-800 p-1"><span className="sr-only">Delete</span><TrashIcon className="h-5 w-5"/></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            ) : (<p className="text-slate-500">No new applications.</p>)}
                        </div>
                    </Card>

                    <Card>
                        <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2"><InboxIcon className="h-6 w-6 text-primary"/> Employer Inquiries ({inquiries.length})</h2>
                        <div className="overflow-x-auto">
                           {inquiries.length > 0 ? (
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Company</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {inquiries.map((inquiry, index) => (
                                        <tr key={index} className="hover:bg-slate-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-dark">{inquiry.companyName}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{inquiry.contactPerson}<br/><span className="text-slate-500">{inquiry.email}</span></td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{new Date(inquiry.submittedAt).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button onClick={() => alert(`Details for ${inquiry.companyName}:\nNeeds: ${inquiry.staffingNeed}`)} className="text-primary hover:text-primary-dark p-1"><span className="sr-only">View</span><BriefcaseIcon className="h-5 w-5"/></button>
                                                <button onClick={() => deleteInquiry(index)} className="text-red-600 hover:text-red-800 p-1"><span className="sr-only">Delete</span><TrashIcon className="h-5 w-5"/></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            ) : (<p className="text-slate-500">No new inquiries.</p>)}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
