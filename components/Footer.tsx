
import React from 'react';
import { CompassIcon, GithubIcon, TwitterIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
                <CompassIcon className="h-8 w-8 text-violet-600" />
                <span className="ml-2 text-xl font-bold font-poppins text-slate-800">FindMyPath</span>
            </div>
            <p className="text-slate-500 text-sm">Helping students find clarity and courage in their journey.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-violet-600"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-slate-400 hover:text-violet-600"><GithubIcon className="h-6 w-6" /></a>
              <a href="#" className="text-slate-400 hover:text-violet-600"><LinkedinIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">Career Explorer</a></li>
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">Exams</a></li>
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">Skill Boost</a></li>
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">PathFinder AI</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">About Us</a></li>
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">Mentor Connect</a></li>
              <li><a href="#" className="text-base text-slate-500 hover:text-violet-600">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p className="mt-4 text-base text-slate-500">Get the latest career tips and updates.</p>
            <form className="mt-4 flex sm:max-w-md">
              <input type="email" placeholder="Enter your email" className="appearance-none min-w-0 w-full bg-white border border-slate-300 rounded-md shadow-sm py-2 px-4 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-violet-500 focus:border-violet-500" />
              <button type="submit" className="ml-2 flex-shrink-0 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500 text-center">
          <p>&copy; {new Date().getFullYear()} FindMyPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
