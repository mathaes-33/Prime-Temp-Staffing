
import React from 'react';
import Card from './Card';

const SkeletonCard: React.FC = () => {
  return (
    <Card className="flex flex-col">
      <div className="animate-pulse">
        <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-4 w-4 bg-slate-200 rounded-full"></div>
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
        </div>
        <div className="space-y-2 mt-4">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        </div>
        <div className="mt-6 h-10 bg-slate-200 rounded w-full"></div>
      </div>
    </Card>
  );
};

export default SkeletonCard;
