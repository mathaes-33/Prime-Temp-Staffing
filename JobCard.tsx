
import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';
import Card from './ui/Card';
import Button from './ui/Button';
import { MapPinIcon, ClockIcon, DollarSignIcon } from './ui/icons';

const formatDistanceToNow = (isoDate: string) => {
    const date = new Date(isoDate);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <Card className="flex flex-col h-full relative">
    {job.featured && (
      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
        Featured
      </div>
    )}
    <div className="flex flex-col h-full">
      <p className="text-sm font-medium text-secondary">{job.company}</p>
      <h3 className="text-xl font-bold text-dark mt-1">{job.title}</h3>
      
      <div className="mt-3 space-y-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
          <span>{job.employmentType}</span>
        </div>
        {job.salary?.visible && (
             <div className="flex items-center gap-2">
                <DollarSignIcon className="h-4 w-4 flex-shrink-0 text-slate-400" />
                <span>{job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()} {job.salary.currency}</span>
            </div>
        )}
      </div>

      <p className="mt-4 text-slate-500 text-sm flex-grow">{job.description.substring(0, 90)}...</p>
      
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col items-stretch">
         <p className="text-xs text-slate-400 text-center mb-4">Posted {formatDistanceToNow(job.postedDate)}</p>
         <Link to={`/jobs/${job.id}`}>
           <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  </Card>
);

export default JobCard;