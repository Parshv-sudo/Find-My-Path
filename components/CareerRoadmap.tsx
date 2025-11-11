import React, { useState } from 'react';
import { AcademicCapIcon, BriefcaseIcon, CheckCircleIcon, RocketLaunchIcon, FlagIcon, ChevronDownIcon, LinkIcon } from './icons';

interface RoadmapStage {
    icon: React.ReactNode;
    title: string;
    description: string;
    details: string[];
    links?: { name: string; url: string }[];
}

interface RoadmapData {
    title: string;
    stages: RoadmapStage[];
}

const roadmapData: { [key: string]: RoadmapData } = {
    'Software Engineering': {
        title: 'Roadmap to Becoming a Software Engineer',
        stages: [
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'High School (Grades 11-12)', 
                description: 'Focus on Math, Physics, and Computer Science. Participate in coding clubs and competitions.',
                details: [
                    "Choose a science stream with Computer Science/Informatics Practices.",
                    "Build a strong foundation in algebra, calculus, and logic.",
                    "Start learning a programming language like Python or C++.",
                    "Participate in coding Olympiads (e.g., IOI) or hackathons."
                ],
                links: [
                    { name: "Codecademy", url: "#" },
                    { name: "HackerRank", url: "#" },
                ]
            },
            { 
                icon: <CheckCircleIcon className="h-6 w-6"/>, 
                title: 'Entrance Exams', 
                description: 'Prepare for exams like JEE (India) or SAT/ACT (US) for admission to top computer science programs.',
                details: [
                    "Target a high rank in JEE Main & Advanced for IITs/NITs.",
                    "For US universities, focus on SAT scores, essays, and letters of recommendation.",
                    "Other notable exams in India: BITSAT, VITEEE, SRMJEEE."
                ],
                links: [
                    { name: "JEE Advanced Official Site", url: "#" },
                    { name: "College Board (SAT)", url: "#" },
                ]
            },
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Undergraduate Degree (B.Tech/B.S.)', 
                description: 'Pursue a degree in Computer Science. Build a strong foundation in core subjects.',
                details: [
                    "Master core subjects: Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks.",
                    "Maintain a good GPA/CGPA.",
                    "Work on personal projects to build a portfolio.",
                    "Contribute to open-source software."
                ],
                links: [
                    { name: "GeeksforGeeks for DSA", url: "#" },
                ]
            },
            { 
                icon: <BriefcaseIcon className="h-6 w-6"/>, 
                title: 'Internships', 
                description: 'Gain practical experience through 2-3 internships. Build projects and contribute to open source.',
                details: [
                    "Start applying for internships from your second year.",
                    "Use platforms like LinkedIn, Internshala, or university career portals.",
                    "A successful internship can often lead to a full-time job offer (PPO)."
                ],
            },
            { 
                icon: <RocketLaunchIcon className="h-6 w-6"/>, 
                title: 'Entry-Level Role (SDE-1)', 
                description: 'Secure a role as a Software Development Engineer. Focus on learning the codebase and shipping features.',
                details: [
                    "Prepare a strong resume highlighting your skills and projects.",
                    "Practice coding interview questions extensively.",
                    "During your first year, focus on learning from senior engineers and understanding the company's tech stack."
                ],
            },
            { 
                icon: <FlagIcon className="h-6 w-6"/>, 
                title: 'Advanced Career', 
                description: 'Specialize in areas like AI/ML, DevOps, or Cybersecurity. Pursue leadership roles or advanced degrees.',
                details: [
                    "After 2-3 years, you can specialize in a high-demand field.",
                    "Career paths can lead to roles like Senior Engineer, Tech Lead, Engineering Manager, or Architect.",
                    "Consider a Master's or PhD for research-oriented roles."
                ],
            },
        ]
    },
    'Product Management': {
        title: 'Roadmap to Becoming a Product Manager',
        stages: [
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'High School Foundation', 
                description: 'Develop communication skills, business acumen, and a basic understanding of technology.',
                details: [
                    "Participate in debate, Model UN, or business clubs.",
                    "Take courses in Economics, Business Studies, and Psychology.",
                    "Start a small project or blog to understand user needs.",
                    "Learn basic coding or web design concepts."
                ],
                links: [
                    { name: "Product School Blog", url: "#" },
                ]
            },
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Undergraduate Degree', 
                description: 'Major in Business, Computer Science, Economics, or a related field. Focus on interdisciplinary learning.',
                details: [
                    "A technical background is helpful but not mandatory.",
                    "Focus on projects that involve cross-functional collaboration.",
                    "Take courses in marketing, user psychology, and data analysis.",
                    "Build strong communication and presentation skills."
                ],
            },
            { 
                icon: <BriefcaseIcon className="h-6 w-6"/>, 
                title: 'Internships', 
                description: 'Gain experience in product-adjacent roles like marketing, business analysis, or project management.',
                details: [
                    "Look for internships at tech companies, even in non-PM roles.",
                    "Show initiative by identifying user problems and proposing solutions during your internship.",
                    "Network with Product Managers within the company."
                ],
            },
            { 
                icon: <RocketLaunchIcon className="h-6 w-6"/>, 
                title: 'Entry-Level Role (APM/Jr. PM)', 
                description: 'Secure an Associate Product Manager role, often through dedicated APM programs.',
                details: [
                    "Prepare for PM interviews: product sense, execution, and behavioral questions.",
                    "Highlight your side projects and any leadership experience.",
                    "Famous APM programs: Google, Meta, Uber."
                ],
                links: [
                    { name: "Cracking the PM Interview (Book)", url: "#" },
                ]
            },
            { 
                icon: <FlagIcon className="h-6 w-6"/>, 
                title: 'Advanced Career', 
                description: 'Grow into a Senior PM, lead a product area, and move into leadership.',
                details: [
                    "Develop deep domain expertise in your product area.",
                    "Mentor junior PMs and lead cross-functional teams.",
                    "Career path: PM -> Senior PM -> Group PM -> Director of Product -> VP of Product."
                ],
            },
        ]
    },
    'Data Science': {
        title: 'Roadmap to Becoming a Data Scientist',
        stages: [
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'High School (Grades 11-12)', 
                description: 'Build a strong quantitative foundation in Math, Statistics, and Computer Science.',
                details: [
                    "Focus on Calculus, Linear Algebra, and Probability.",
                    "Learn programming in Python and its data science libraries (Pandas, NumPy).",
                    "Participate in math Olympiads or data analysis competitions."
                ],
                links: [
                    { name: "Kaggle for Beginners", url: "#" },
                ]
            },
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Undergraduate Degree', 
                description: 'Pursue a degree in Computer Science, Statistics, Mathematics, or a specialized Data Science program.',
                details: [
                    "Master concepts in statistics, machine learning, and algorithms.",
                    "Work on data-driven projects and build a strong portfolio on GitHub.",
                    "Learn SQL for database querying."
                ],
                links: [
                    { name: "Coursera - Andrew Ng's Machine Learning", url: "#" },
                ]
            },
            { 
                icon: <BriefcaseIcon className="h-6 w-6"/>, 
                title: 'Internships & Projects', 
                description: 'Gain practical experience as a Data Analyst or Data Science intern.',
                details: [
                    "Apply your skills to real-world datasets.",
                    "Compete in Kaggle competitions to hone your modeling skills.",
                    "Contribute to open-source data science tools."
                ],
            },
            { 
                icon: <RocketLaunchIcon className="h-6 w-6"/>, 
                title: 'Entry-Level Role (Data Analyst/Jr. Scientist)', 
                description: 'Start by analyzing data and generating insights, gradually moving to predictive modeling.',
                details: [
                    "Strong SQL and Python skills are essential.",
                    "Be proficient in data visualization tools like Tableau or Power BI.",
                    "Focus on communicating your findings effectively to non-technical stakeholders."
                ],
            },
            { 
                icon: <FlagIcon className="h-6 w-6"/>, 
                title: 'Advanced Career & Specialization', 
                description: 'Specialize in areas like Machine Learning Engineering, NLP, or Computer Vision. A Master\'s or PhD is often beneficial.',
                details: [
                    "Move into roles like Machine Learning Engineer, building and deploying models.",
                    "Pursue advanced degrees for research-focused or senior roles.",
                    "Keep up with the latest research papers and techniques."
                ],
            },
        ]
    },
    'UX/UI Design': {
        title: 'Roadmap to Becoming a UX/UI Designer',
        stages: [
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Foundation Building', 
                description: 'Develop an eye for design, empathy for users, and learn fundamental design principles.',
                details: [
                    "Study art, psychology, and graphic design principles.",
                    "Read design books like 'The Design of Everyday Things'.",
                    "Start observing and critiquing the user experience of apps you use daily.",
                    "Learn to use design tools like Figma or Sketch."
                ],
                links: [
                    { name: "Nielsen Norman Group Articles", url: "#" },
                    { name: "Figma Learn", url: "#" },
                ]
            },
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Formal Education / Self-Study', 
                description: 'Pursue a degree in Design, HCI, or complete reputable online bootcamps/certifications.',
                details: [
                    "A formal degree is helpful but a strong portfolio is more important.",
                    "Learn about user research, wireframing, prototyping, and usability testing.",
                    "Complete case studies for your portfolio, detailing your process from problem to solution."
                ],
            },
            { 
                icon: <BriefcaseIcon className="h-6 w-6"/>, 
                title: 'Build Your Portfolio & Intern', 
                description: 'Create 3-5 strong case studies in a professional portfolio website and gain real-world experience.',
                details: [
                    "Your portfolio is your most important asset.",
                    "Seek internships to work with a design team and understand the product development lifecycle.",
                    "Offer to do pro-bono work for non-profits to build experience."
                ],
            },
            { 
                icon: <RocketLaunchIcon className="h-6 w-6"/>, 
                title: 'Entry-Level Role (Junior Designer)', 
                description: 'Join a company as a Junior Product Designer, UX Designer, or UI Designer.',
                details: [
                    "Be prepared to explain your design decisions and process during interviews.",
                    "Focus on collaboration with PMs and Engineers.",
                    "Be open to feedback and iterate on your designs."
                ],
                links: [
                    { name: "Behance / Dribbble for Inspiration", url: "#" },
                ]
            },
            { 
                icon: <FlagIcon className="h-6 w-6"/>, 
                title: 'Advanced Career', 
                description: 'Specialize in an area like UX Research or Interaction Design, and grow into a leadership role.',
                details: [
                    "Career Path: Designer -> Senior Designer -> Design Lead -> Design Manager.",
                    "Develop expertise in a specific area (e.g., accessibility, design systems).",
                    "Mentor junior designers and contribute to the design community."
                ],
            },
        ]
    },
    'Default': {
        title: 'Generic Career Roadmap',
        stages: [
            { 
                icon: <AcademicCapIcon className="h-6 w-6"/>, 
                title: 'Foundation Building (High School)', 
                description: 'Choose relevant subjects and explore your interests through extracurricular activities.',
                details: [
                    "Identify subjects you enjoy and excel in.",
                    "Participate in activities that develop soft skills like teamwork and communication."
                ]
            },
            { 
                icon: <CheckCircleIcon className="h-6 w-6"/>, 
                title: 'Higher Education & Exams', 
                description: 'Appear for relevant entrance exams and enroll in a suitable undergraduate program.',
                details: [
                    "Research various colleges and their entrance criteria.",
                    "Prepare a timeline for applications and exam preparation."
                ]
            },
            { 
                icon: <BriefcaseIcon className="h-6 w-6"/>, 
                title: 'Skill Acquisition & Internships', 
                description: 'Develop core competencies and gain hands-on experience in your chosen field.',
                details: [
                    "Take online courses or certifications to supplement your degree.",
                    "Seek internships to apply your knowledge in a real-world setting."
                ]
            },
            { 
                icon: <RocketLaunchIcon className="h-6 w-6"/>, 
                title: 'First Job & Early Career', 
                description: 'Start your professional journey, focusing on learning and making an impact.',
                details: [
                    "Network with professionals in your field.",
                    "Be open to learning and adapt to the work environment."
                ]
            },
        ]
    }
};

const RoadmapStageItem: React.FC<{ stage: RoadmapStage, index: number, expandedStage: number | null, setExpandedStage: (index: number | null) => void }> = ({ stage, index, expandedStage, setExpandedStage }) => {
    const isExpanded = expandedStage === index;

    const handleToggle = () => {
        setExpandedStage(isExpanded ? null : index);
    };
    
    return (
        <div className="flex items-start">
            <div className="flex flex-col items-center mr-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center z-10">
                    {stage.icon}
                </div>
            </div>
            <div className="w-full">
                <button onClick={handleToggle} className="w-full text-left flex justify-between items-center">
                    <div>
                        <h5 className="font-semibold text-slate-800">{stage.title}</h5>
                        <p className="text-sm text-slate-600 mt-1">{stage.description}</p>
                    </div>
                    <ChevronDownIcon className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 pt-4' : 'max-h-0'}`}>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                            {stage.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                        {stage.links && (
                            <div className="mt-3">
                                <h6 className="font-semibold text-xs text-slate-600">Resources:</h6>
                                <div className="flex flex-col items-start mt-1">
                                    {stage.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                                           <LinkIcon className="h-3 w-3" /> {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


interface CareerRoadmapProps {
    careerTitle: string;
}

const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ careerTitle }) => {
    const data = roadmapData[careerTitle] || roadmapData['Default'];
    const [expandedStage, setExpandedStage] = useState<number | null>(0);

    return (
        <div className="mt-6">
            <h4 className="font-semibold text-lg">{data.title}</h4>
            <div className="mt-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                <div className="space-y-4">
                    {data.stages.map((stage, index) => (
                        <RoadmapStageItem 
                            key={index} 
                            stage={stage} 
                            index={index} 
                            expandedStage={expandedStage} 
                            setExpandedStage={setExpandedStage} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerRoadmap;