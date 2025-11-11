
import React, { useState, useMemo } from 'react';
import { EXAM_DATA } from '../constants';
import { DashboardItem } from '../types';
import { BookmarkIcon } from './icons';

interface ExamGuidePageProps {
  addToDashboard: (item: Omit<DashboardItem, 'id'>) => void;
}

const ExamGuidePage: React.FC<ExamGuidePageProps> = ({ addToDashboard }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const examCategories = useMemo(() => ['All', ...Array.from(new Set(EXAM_DATA.map(e => e.category)))], []);

  const filteredExams = useMemo(() => {
    if (activeFilter === 'All') return EXAM_DATA;
    return EXAM_DATA.filter(e => e.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins">Exam & College Guide</h1>
        <p className="mt-2 text-lg text-slate-600">Your roadmap to getting into your dream college.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-2">
        {examCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === category ? 'bg-violet-600 text-white shadow' : 'bg-white text-slate-600 hover:bg-violet-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredExams.map(exam => (
          <div key={exam.id} className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800">{exam.title}</h3>
              <p className="text-slate-600 mt-1">{exam.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <span className="font-semibold">Key Dates: <span className="font-normal text-violet-700">{exam.dates}</span></span>
                <a href={exam.syllabusLink} className="font-semibold text-blue-600 hover:underline">Syllabus Link</a>
              </div>
            </div>
            <button 
              onClick={() => addToDashboard({ type: 'exam', title: exam.title })}
              className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 flex items-center px-3 py-1.5 bg-violet-100 text-violet-700 rounded-lg text-xs font-medium hover:bg-violet-200 transition-colors"
            >
              <BookmarkIcon className="h-4 w-4 mr-2" /> Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamGuidePage;
