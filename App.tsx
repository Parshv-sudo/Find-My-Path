
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CareerExplorerPage from './components/CareerExplorerPage';
import ExamGuidePage from './components/ExamGuidePage';
import SkillDevPage from './components/SkillDevPage';
import PathFinderPage from './components/PathFinderPage';
import DashboardPage from './components/DashboardPage';
import Chatbot from './components/Chatbot';
import { Page, DashboardItem } from './types';
import { CAREER_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Mock authentication
  const [dashboardItems, setDashboardItems] = useState<DashboardItem[]>([
    { id: 'career-1', type: 'career', title: CAREER_DATA[0].title, notes: 'Looks very interesting!' },
    { id: 'exam-2', type: 'exam', title: 'JEE Advanced', notes: 'Start preparing from next month.' },
  ]);

  const handleNavigation = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);
  
  const addToDashboard = useCallback((item: Omit<DashboardItem, 'id'>) => {
    setDashboardItems(prev => [...prev, { ...item, id: `${item.type}-${Date.now()}` }]);
    alert(`${item.title} added to your dashboard!`);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigate={handleNavigation} />;
      case Page.CareerExplorer:
        return <CareerExplorerPage addToDashboard={addToDashboard} />;
      case Page.Exams:
        return <ExamGuidePage addToDashboard={addToDashboard} />;
      case Page.Skills:
        return <SkillDevPage addToDashboard={addToDashboard} />;
      case Page.PathFinder:
        return <PathFinderPage />;
      case Page.Dashboard:
        return <DashboardPage items={dashboardItems} setItems={setDashboardItems} />;
      default:
        return <HomePage navigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-blue-50 to-violet-100 text-slate-800">
      <Header
        currentPage={currentPage}
        navigate={handleNavigation}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
