
import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, CheckCircleIcon, RocketLaunchIcon, FlagIcon } from './icons';

const roadmapData: { [key: string]: { title: string; stages: { icon: React.ReactNode; title: string; description: string }[] } } = {
    'Software Engineering': {
        title: 'Roadmap to Becoming a Software Engineer',
        stages: [
            { icon: <AcademicCapIcon className="h-6 w-6"/>, title: 'High School (Grades 11-12)', description: 'Focus on Math, Physics, and Computer Science. Participate in coding clubs and competitions.' },
            { icon: <CheckCircleIcon className="h-6 w-6"/>, title: 'Entrance Exams', description: 'Prepare for exams like JEE (India) or SAT/ACT (US) for admission to top computer science programs.' },
            { icon: <AcademicCapIcon className="h-6 w-6"/>, title: 'Undergraduate Degree', description: 'Pursue a B.Tech/B.S. in Computer Science. Build a strong foundation in data structures, algorithms, and system design.' },
            { icon: <BriefcaseIcon className="h-6 w-6"/>, title: 'Internships', description: 'Gain practical experience through 2-3 internships. Build projects and contribute to open source.' },
            { icon: <RocketLaunchIcon className="h-6 w-6"/>, title: 'Entry-Level Role', description: 'Secure a role as a Software Development Engineer (SDE 1). Focus on learning the codebase and shipping features.' },
            { icon: <FlagIcon className="h-6 w-6"/>, title: 'Advanced Career', description: 'Specialize in areas like AI/ML, DevOps, or Cybersecurity. Pursue leadership roles or advanced degrees.' },
        ]
    },
    'Default': {
        title: 'Generic Career Roadmap',
        stages: [
            { icon: <AcademicCapIcon className="h-6 w-6"/>, title: 'Foundation Building (High School)', description: 'Choose relevant subjects and explore your interests through extracurricular activities.' },
            { icon: <CheckCircleIcon className="h-6 w-6"/>, title: 'Higher Education & Exams', description: 'Appear for relevant entrance exams and enroll in a suitable undergraduate program.' },
            { icon: <BriefcaseIcon className="h-6 w-6"/>, title: 'Skill Acquisition & Internships', description: 'Develop core competencies and gain hands-on experience in your chosen field.' },
            { icon: <RocketLaunchIcon className="h-6 w-6"/>, title: 'First Job & Early Career', description: 'Start your professional journey, focusing on learning and making an impact.' },
        ]
    }
};

interface CareerRoadmapProps {
    careerTitle: string;
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ careerTitle }) => {
    const data = roadmapData[careerTitle] || roadmapData['Default'];

    return (
        <div className="mt-6">
            <h4 className="font-semibold text-lg">{data.title}</h4>
            <div className="mt-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                <div className="space-y-8">
                    {data.stages.map((stage, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center z-10">
                                {stage.icon}
                            </div>
                            <div className="ml-6">
                                <h5 className="font-semibold text-slate-800">{stage.title}</h5>
                                <p className="text-sm text-slate-600 mt-1">{stage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerRoadmap;
