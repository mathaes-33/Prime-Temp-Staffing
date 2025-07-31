
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Job } from '../types';
import { INITIAL_JOBS } from '../constants';

interface JobContextType {
  jobs: Job[];
  deleteJob: (jobId: string) => void;
  updateJob: (updatedJob: Job) => void;
  loading: boolean;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedJobs = localStorage.getItem('jobs');
      if (storedJobs) {
        setJobs(JSON.parse(storedJobs));
      } else {
        setJobs(INITIAL_JOBS);
      }
    } catch (error) {
      console.error("Failed to load jobs from localStorage", error);
      setJobs(INITIAL_JOBS);
    } finally {
        setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    // This effect runs only when jobs state changes, to prevent saving on initial load before state is set.
    if(!loading) {
      try {
        localStorage.setItem('jobs', JSON.stringify(jobs));
      } catch (error) {
        console.error("Failed to save jobs to localStorage", error);
      }
    }
  }, [jobs, loading]);

  const deleteJob = (jobId: string) => {
    setJobs(currentJobs => currentJobs.filter(job => job.id !== jobId));
  };

  const updateJob = (updatedJob: Job) => {
    setJobs(currentJobs => currentJobs.map(job => job.id === updatedJob.id ? updatedJob : job));
  };

  return (
    <JobContext.Provider value={{ jobs, deleteJob, updateJob, loading }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};
