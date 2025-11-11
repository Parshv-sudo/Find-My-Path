import React from 'react';
import { Page } from '../types';
import { BookOpenIcon, BriefcaseIcon, LightBulbIcon, AcademicCapIcon, RocketLaunchIcon, CurrencyDollarIcon } from './icons';
import { MOTIVATIONAL_QUOTES } from '../constants';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const QuickNavCard: React.FC<{ title: string, page: Page, icon: React.ReactNode, navigate: (page: Page) => void }> = ({ title, page, icon, navigate }) => (
    <button onClick={() => navigate(page)} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center text-center">
        <div className="p-4 bg-violet-100 text-violet-600 rounded-full group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-800 font-poppins">{title}</h3>
    </button>
);

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-8">
        <div className="bg-gradient-to-r from-blue-500 to-violet-600 text-transparent bg-clip-text">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins tracking-tight">
                Discover. Learn. Evolve.
            </h1>
        </div>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Your journey to a fulfilling career starts here. Explore paths, build skills, and find the clarity you need to succeed.
        </p>
        <div className="mt-8 max-w-xl mx-auto flex items-center">
            <input 
                type="text" 
                placeholder="Find your career path..."
                className="w-full px-5 py-3 rounded-l-full border border-slate-300 focus:ring-violet-500 focus:border-violet-500 transition shadow-sm"
            />
            <button className="px-6 py-3 bg-violet-600 text-white rounded-r-full hover:bg-violet-700 transition-colors shadow-sm -ml-1">
                Search
            </button>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <QuickNavCard title="Career Explorer" page={Page.CareerExplorer} icon={<BriefcaseIcon className="h-8 w-8"/>} navigate={navigate} />
              <QuickNavCard title="Exams Guide" page={Page.Exams} icon={<BookOpenIcon className="h-8 w-8"/>} navigate={navigate} />
              <QuickNavCard title="Skill Boost" page={Page.Skills} icon={<LightBulbIcon className="h-8 w-8"/>} navigate={navigate} />
              <QuickNavCard title="Financial Aid" page={Page.FinancialAid} icon={<CurrencyDollarIcon className="h-8 w-8"/>} navigate={navigate} />
              <QuickNavCard title="PathFinder AI" page={Page.PathFinder} icon={<RocketLaunchIcon className="h-8 w-8"/>} navigate={navigate} />
          </div>
      </section>

      {/* Motivational Quote */}
      <section className="text-center py-10 border-t border-slate-200">
          <p className="text-xl italic text-slate-500">
             "{MOTIVATIONAL_QUOTES[0]}"
          </p>
      </section>
    </div>
  );
};

export default HomePage;
