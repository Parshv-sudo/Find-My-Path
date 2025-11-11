// Fix: Add React import to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum Page {
  Home = 'Home',
  CareerExplorer = 'CareerExplorer',
  Exams = 'Exams',
  Skills = 'Skills',
  PathFinder = 'PathFinder',
  Dashboard = 'Dashboard',
  MentorConnect = 'MentorConnect',
  Resources = 'Resources',
  Community = 'Community',
  About = 'About',
}

export interface Career {
  id: string;
  title: string;
  field: string;
  description: string;
  overview: string;
  skills: string[];
  roles: string[];
  salary: string;
  growth: string;
  personalities: string[];
}

export interface Exam {
  id: string;
  title: string;
  category: string;
  description: string;
  dates: string;
  syllabusLink: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface DashboardItem {
  id: string;
  type: 'career' | 'exam' | 'skill' | 'resource';
  title: string;
  notes?: string;
}

export interface PathFinderResult {
  careerName: string;
  description: string;
  requiredSkills: string[];
  averageSalary: string;
}

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  loading?: boolean;
}
