
import React from 'react';
import { SKILL_DATA, MOTIVATIONAL_QUOTES } from '../constants';
import { DashboardItem } from '../types';
import { BookmarkIcon } from './icons';

interface SkillDevPageProps {
  addToDashboard: (item: Omit<DashboardItem, 'id'>) => void;
}

const SkillDevPage: React.FC<SkillDevPageProps> = ({ addToDashboard }) => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-poppins">Skill & Personality Development</h1>
        <p className="mt-2 text-lg text-slate-600">Invest in yourself. The returns are priceless.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content: Skills */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold font-poppins">Boost Your Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILL_DATA.map(skill => (
              <div key={skill.id} className="bg-white rounded-xl shadow p-6 flex flex-col">
                <div className="flex-grow">
                    <div className="flex items-start justify-between">
                    <div>
                        <div className="p-3 bg-violet-100 text-violet-600 rounded-lg inline-block">
                            <skill.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold mt-4">{skill.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{skill.description}</p>
                    </div>
                    <button onClick={() => addToDashboard({ type: 'skill', title: skill.title })} className="p-1.5 text-slate-400 hover:text-violet-600 flex-shrink-0">
                        <BookmarkIcon className="h-5 w-5" />
                    </button>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-700">Related Careers:</h4>
                        <p className="text-sm text-slate-500 mt-1">{skill.relatedCareers.join(', ')}</p>
                    </div>
                </div>
                <button className="mt-4 w-full text-sm font-semibold text-violet-600 bg-violet-100 hover:bg-violet-200 rounded-md py-2 transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold font-poppins">Daily Growth Challenge</h3>
            <p className="text-sm text-slate-500 mt-2">Spend 15 minutes today learning about a new technology trend. Summarize it in three sentences.</p>
            <button className="mt-4 w-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-md py-2 transition-colors">
              I did it!
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold font-poppins">Motivational Articles</h3>
            <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#" className="text-blue-600 hover:underline">How to Build Confidence</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">The Power of a Growth Mindset</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">5 Ways to Improve Focus</a></li>
            </ul>
          </div>
        </div>
      </div>
       <section className="text-center py-10 border-t border-slate-200">
          <p className="text-xl italic text-slate-500">
             "{MOTIVATIONAL_QUOTES[1]}"
          </p>
      </section>
    </div>
  );
};

export default SkillDevPage;