
import React, { useState, useMemo } from 'react';
import { CAREER_DATA } from '../constants';
import { Career, DashboardItem } from '../types';
import { XIcon, BookmarkIcon } from './icons';
import CareerRoadmap from './CareerRoadmap';

interface CareerExplorerPageProps {
  addToDashboard: (item: Omit<DashboardItem, 'id'>) => void;
}

const CareerCard: React.FC<{ career: Career; onSelect: (career: Career) => void }> = ({ career, onSelect }) => (
  <div onClick={() => onSelect(career)} className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
    <h3 className="text-xl font-bold font-poppins text-violet-700">{career.title}</h3>
    <p className="text-sm font-medium text-slate-500 mt-1">{career.field}</p>
    <p className="text-slate-600 mt-3 text-sm">{career.description}</p>
  </div>
);

const CareerModal: React.FC<{ career: Career; onClose: () => void; addToDashboard: (item: Omit<DashboardItem, 'id'>) => void; }> = ({ career, onClose, addToDashboard }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors">
        <XIcon className="h-6 w-6" />
      </button>
      <div className="p-8">
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-3xl font-bold font-poppins text-slate-800">{career.title}</h2>
                <p className="text-md font-semibold text-violet-600 mt-1">{career.field}</p>
            </div>
            <button 
              onClick={() => addToDashboard({ type: 'career', title: career.title })}
              className="flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-lg text-sm font-medium hover:bg-violet-200 transition-colors"
            >
              <BookmarkIcon className="h-4 w-4 mr-2" /> Save to Dashboard
            </button>
        </div>

        <div className="mt-6 space-y-6 text-slate-700">
          <div>
            <h4 className="font-semibold text-lg">Overview</h4>
            <p className="mt-1 text-sm">{career.overview}</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Required Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {career.skills.map(skill => <span key={skill} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">{skill}</span>)}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Potential Roles</h4>
            <p className="mt-1 text-sm">{career.roles.join(', ')}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
                <h4 className="font-semibold text-lg">Average Salary</h4>
                <p className="mt-1 text-sm">{career.salary}</p>
            </div>
            <div>
                <h4 className="font-semibold text-lg">Career Growth</h4>
                <p className="mt-1 text-sm">{career.growth}</p>
            </div>
          </div>
          <CareerRoadmap careerTitle={career.title} />
        </div>
      </div>
    </div>
  </div>
);


const CareerExplorerPage: React.FC<CareerExplorerPageProps> = ({ addToDashboard }) => {
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const careerFields = useMemo(() => ['All', ...Array.from(new Set(CAREER_DATA.map(c => c.field)))], []);
  
  const filteredCareers = useMemo(() => {
    if (activeFilter === 'All') return CAREER_DATA;
    return CAREER_DATA.filter(c => c.field === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins">Career Explorer</h1>
        <p className="mt-2 text-lg text-slate-600">Find the path that's right for you. Click on a card to learn more.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-2">
        {careerFields.map(field => (
          <button
            key={field}
            onClick={() => setActiveFilter(field)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === field ? 'bg-violet-600 text-white shadow' : 'bg-white text-slate-600 hover:bg-violet-100'
            }`}
          >
            {field}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map(career => (
          <CareerCard key={career.id} career={career} onSelect={setSelectedCareer} />
        ))}
      </div>

      {selectedCareer && <CareerModal career={selectedCareer} onClose={() => setSelectedCareer(null)} addToDashboard={addToDashboard} />}
    </div>
  );
};

export default CareerExplorerPage;
