import React, { useState } from 'react';
import { Page } from '../types';
import { CompassIcon, MenuIcon, XIcon, UserCircleIcon } from './icons';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuth: boolean) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigate, children }) => (
  <button
    onClick={() => navigate(page)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      currentPage === page
        ? 'bg-violet-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-violet-100 hover:text-violet-800'
    }`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, navigate, isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { page: Page.Home, label: 'Home' },
    { page: Page.CareerExplorer, label: 'Career Explorer' },
    { page: Page.Exams, label: 'Exams' },
    { page: Page.Skills, label: 'Skill Boost' },
    { page: Page.FinancialAid, label: 'Financial Aid' },
    { page: Page.PathFinder, label: 'PathFinder AI' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <CompassIcon className="h-8 w-8 text-violet-600" />
            <span className="ml-2 text-xl font-bold font-poppins text-slate-800">FindMyPath</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} navigate={navigate}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             {isAuthenticated ? (
                <NavLink page={Page.Dashboard} currentPage={currentPage} navigate={navigate}>
                    <div className="flex items-center">
                        <UserCircleIcon className="h-5 w-5 mr-2" /> My Dashboard
                    </div>
                </NavLink>
            ) : (
                <button onClick={() => setIsAuthenticated(true)} className="px-4 py-2 bg-violet-600 text-white rounded-md text-sm font-medium hover:bg-violet-700 transition-colors">
                    Login
                </button>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map(item => (
                <button key={item.page} onClick={() => { navigate(item.page); setIsMenuOpen(false); }} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${ currentPage === item.page ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-violet-100'}`}>
                  {item.label}
                </button>
              ))}
               {isAuthenticated ? (
                <button onClick={() => { navigate(Page.Dashboard); setIsMenuOpen(false); }} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${ currentPage === Page.Dashboard ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-violet-100'}`}>
                    My Dashboard
                </button>
            ) : (
                <button onClick={() => { setIsAuthenticated(true); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-violet-600 text-white">
                    Login
                </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
