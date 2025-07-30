
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MapPinIcon, ClockIcon, DollarSignIcon, CalendarIcon, BriefcaseIcon } from '../components/ui/icons';

const InfoPill: React.FC<{ icon: React.ReactNode; text: string; }> = ({ icon, text }) => (
    <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-3 py-2 rounded-full text-sm">
        {icon}
        <span>{text}</span>
    </div>
);

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { jobs } = useJobs();
  const job = jobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="bg-light py-20 min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Job Not Found</h1>
        <p className="text-slate-500 mt-4">The job you are looking for may have been filled or removed.</p>
        <Button onClick={() => navigate('/jobs')} className="mt-8">Back to Listings</Button>
      </div>
    );
  }
  
  const formatDate = (isoDate: string) => new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <Link to="/jobs" className="text-primary hover:underline">&larr; Back to all jobs</Link>
            </div>
            
            <Card className="!p-0">
                <div className="p-8">
                    <p className="text-base font-medium text-secondary">{job.company}</p>
                    <h1 className="text-4xl font-extrabold text-dark mt-1">{job.title}</h1>
                    <div className="mt-4 flex flex-wrap gap-4">
                        <InfoPill icon={<MapPinIcon className="h-4 w-4" />} text={job.location} />
                        <InfoPill icon={<BriefcaseIcon className="h-4 w-4" />} text={job.category} />
                        <InfoPill icon={<ClockIcon className="h-4 w-4" />} text={job.employmentType} />
                        {job.salary?.visible && (
                            <InfoPill icon={<DollarSignIcon className="h-4 w-4" />} text={`${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} ${job.salary.currency}`} />
                        )}
                        <InfoPill icon={<CalendarIcon className="h-4 w-4" />} text={`Apply by ${formatDate(job.applicationDeadline)}`} />
                    </div>
                </div>

                <div className="p-8 grid md:grid-cols-3 gap-8 border-t border-slate-100">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-dark mb-3">Job Description</h2>
                            <p className="text-slate-600 leading-relaxed">{job.description}</p>
                        </div>
                         <div>
                            <h2 className="text-2xl font-bold text-dark mb-3">Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-2 text-slate-600">
                                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-dark mb-3">Requirements</h2>
                             <ul className="list-disc list-inside space-y-2 text-slate-600">
                                {job.requirements.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                    <aside className="md:col-span-1">
                        <div className="sticky top-28">
                             <Card className="bg-slate-50 shadow-inner">
                                <h3 className="text-xl font-bold text-dark text-center">Ready to Apply?</h3>
                                <p className="text-center text-slate-500 text-sm mt-2 mb-6">Don't miss this opportunity. Apply now to be considered.</p>
                                <Link to={`/apply?jobId=${job.id}`}>
                                    <Button className="w-full">Apply Now</Button>
                                </Link>
                                <p className="text-xs text-slate-400 text-center mt-4">Posted on {formatDate(job.postedDate)}</p>
                            </Card>
                        </div>
                    </aside>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;