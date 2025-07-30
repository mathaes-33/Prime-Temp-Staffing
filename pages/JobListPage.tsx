
import React, { useState, useMemo, useEffect } from 'react';
import { useJobs } from '../context/JobContext';
import JobCard from '../components/JobCard';
import SkeletonCard from '../components/ui/SkeletonCard';
import { Job } from '../types';

const JobListPage: React.FC = () => {
  const { jobs, loading: jobsLoading } = useJobs();
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This timeout is purely for demonstrating the skeleton loader's UI effect.
    // The actual data loading is handled by the JobContext.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const types = useMemo(() => ['all', ...Array.from(new Set(jobs.map(j => j.employmentType)))], [jobs]);
  const locations = useMemo(() => ['all', ...Array.from(new Set(jobs.map(j => j.location)))], [jobs]);

  const filteredJobs = useMemo(() => {
    let jobList: Job[] = jobs;

    if (remoteOnly) {
      jobList = jobList.filter(job => job.location.toLowerCase().includes('remote'));
    }

    if (typeFilter !== 'all') {
      jobList = jobList.filter(job => job.employmentType === typeFilter);
    }
    
    if (locationFilter !== 'all') {
      jobList = jobList.filter(job => job.location === locationFilter);
    }

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      jobList = jobList.filter(job =>
        job.title.toLowerCase().includes(lowercasedTerm) ||
        job.description.toLowerCase().includes(lowercasedTerm) ||
        job.company.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    return jobList;
  }, [searchTerm, typeFilter, remoteOnly, locationFilter, jobs]);
  
  const displayLoading = jobsLoading || isLoading;

  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-dark">Find Your Next Opportunity</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">Browse our current openings and find your perfect fit.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <input
            type="text"
            placeholder="Search by title, company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary md:col-span-2"
          />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            {types.map(type => <option key={type} value={type}>{type === 'all' ? 'All Types' : type}</option>)}
          </select>
          <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="all">All Locations</option>
            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
          <div className="flex items-center justify-start md:col-span-4 mt-2">
            <input 
              type="checkbox"
              id="remote-only"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"
            />
            <label htmlFor="remote-only" className="ml-2 block text-sm text-slate-900">
              Show remote jobs only
            </label>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayLoading ? (
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="text-center py-16 col-span-full">
              <h2 className="text-2xl font-bold text-dark">No Jobs Found</h2>
              <p className="mt-2 text-slate-500">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListPage;