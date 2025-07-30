import React from 'react';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';

const ApplicationTipsPage: React.FC = () => {
  return (
    <div className="bg-light py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A clean and organized workspace, ready for job applications."
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
              <h1 className="text-4xl font-extrabold text-white text-center" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>Application Tips</h1>
            </div>
          </div>
          
          <Card>
            <div className="space-y-6 text-slate-600">
              <div>
                <h2 className="text-2xl font-bold text-dark">1. Tailor Your Resume</h2>
                <p className="mt-2">Customize your resume for each job you apply for. Highlight the skills and experiences that are most relevant to the job description. This shows the employer that you've read their requirements and are a good fit.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark">2. Write a Compelling Cover Letter</h2>
                <p className="mt-2">Even if it's optional, a cover letter is a great opportunity to showcase your personality and explain why you're passionate about the role. Keep it concise, professional, and targeted.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-dark">3. Proofread Everything</h2>
                <p className="mt-2">Typos and grammatical errors can give a negative impression. Carefully proofread your resume, cover letter, and any other application materials before you hit submit. Consider asking a friend to review it for you.</p>
              </div>
               <div>
                <h2 className="text-2xl font-bold text-dark">4. Prepare for the Interview</h2>
                <p className="mt-2">Research the company and the role. Prepare answers to common interview questions and have some questions of your own to ask the interviewer. This demonstrates your interest and preparedness.</p>
              </div>
              <div className="text-center pt-4">
                <Link to="/apply" className="text-primary hover:underline font-semibold">Ready to apply? Fill out our application form now!</Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTipsPage;