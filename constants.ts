import { Career, Exam, Skill, FinancialAidResource } from './types';
import { BriefcaseIcon, CodeBracketIcon, HeartIcon, LightBulbIcon, PencilIcon, UsersIcon } from './components/icons';

export const CAREER_DATA: Career[] = [
  {
    id: 'swe',
    title: 'Software Engineering',
    field: 'Technology',
    description: 'Design, develop, and maintain software systems and applications.',
    overview: 'Software engineering is a dynamic field that involves applying engineering principles to software development. It encompasses everything from mobile apps to large-scale enterprise systems, focusing on creating robust, efficient, and scalable software solutions.',
    skills: ['Programming (Python, Java, C++)', 'Data Structures & Algorithms', 'System Design', 'Version Control (Git)', 'Problem Solving'],
    roles: ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'DevOps Engineer', 'Mobile App Developer'],
    salary: '$80,000 - $150,000+',
    growth: 'High demand with 22% projected growth over the next decade.',
    personalities: ['Sundar Pichai', 'Satya Nadella', 'Margaret Hamilton']
  },
  {
    id: 'pm',
    title: 'Product Management',
    field: 'Business & Tech',
    description: 'Guide the success of a product and lead the cross-functional team that is responsible for improving it.',
    overview: 'Product Managers are the strategic drivers behind a product. They define the product vision, strategy, and roadmap. They work closely with engineering, design, marketing, and sales teams to build and launch products that customers love and that meet business goals.',
    skills: ['Market Research', 'User Experience (UX) Design Principles', 'Agile Methodologies', 'Communication', 'Leadership'],
    roles: ['Associate Product Manager', 'Product Manager', 'Senior Product Manager', 'Director of Product'],
    salary: '$90,000 - $170,000+',
    growth: 'Strong growth, as every tech company needs product leadership.',
    personalities: ['Steve Jobs', 'Marissa Mayer', 'Brian Chesky']
  },
  {
    id: 'ds',
    title: 'Data Science',
    field: 'Technology',
    description: 'Extract insights and knowledge from data using scientific methods, processes, and algorithms.',
    overview: 'Data Science combines statistics, computer science, and domain knowledge to analyze data and extract meaningful insights. Data scientists build machine learning models, create data visualizations, and use data to make strategic decisions for businesses.',
    skills: ['Statistics & Probability', 'Machine Learning', 'Python/R Programming', 'SQL', 'Data Visualization'],
    roles: ['Data Analyst', 'Data Scientist', 'Machine Learning Engineer', 'BI Analyst'],
    salary: '$100,000 - $180,000+',
    growth: 'Extremely high demand, considered one of the top jobs of the 21st century.',
    personalities: ['DJ Patil', 'Yann LeCun', 'Fei-Fei Li']
  },
  {
    id: 'uxd',
    title: 'UX/UI Design',
    field: 'Design',
    description: 'Create user-friendly interfaces that enable users to understand how to use complex technical products.',
    overview: 'UX/UI Design focuses on the user\'s experience and interaction with a product. UX (User Experience) designers focus on the overall feel and usability, while UI (User Interface) designers work on the visual elements and layout. The goal is to create intuitive, accessible, and aesthetically pleasing products.',
    skills: ['Wireframing & Prototyping', 'User Research', 'Visual Design', 'Figma/Sketch/Adobe XD', 'Interaction Design'],
    roles: ['UX Designer', 'UI Designer', 'Product Designer', 'Interaction Designer'],
    salary: '$70,000 - $130,000+',
    growth: 'Very strong growth as companies prioritize user-centric design.',
    personalities: ['Don Norman', 'Julie Zhuo', 'Alan Cooper']
  },
];

export const EXAM_DATA: Exam[] = [
  { id: 'jee', title: 'JEE (Main & Advanced)', category: 'Engineering', description: 'National level entrance exam for admission to top engineering colleges in India including IITs and NITs.', dates: 'Jan & April (Main), May (Advanced)', syllabusLink: '#' },
  { id: 'neet', title: 'NEET-UG', category: 'Medical', description: 'Single entrance exam for admission to medical (MBBS/BDS) and AYUSH courses in India.', dates: 'May', syllabusLink: '#' },
  { id: 'cat', title: 'CAT', category: 'Management', description: 'Entrance exam for admission into postgraduate management programs at IIMs and other top business schools.', dates: 'November', syllabusLink: '#' },
  { id: 'clat', title: 'CLAT', category: 'Law', description: 'Centralized national level entrance test for admissions to 22 National Law Universities in India.', dates: 'December', syllabusLink: '#' },
  { id: 'nda', title: 'NDA Exam', category: 'Defence', description: 'Exam conducted by UPSC for admission to the Army, Navy, and Air Force wings of the NDA.', dates: 'April & September', syllabusLink: '#' },
];

export const SKILL_DATA: Skill[] = [
  { id: 'comm', title: 'Effective Communication', category: 'Soft Skills', description: 'Learn to convey your ideas clearly and confidently in any setting.', icon: UsersIcon, relatedCareers: ['Product Management', 'Marketing', 'Law'] },
  { id: 'leader', title: 'Leadership', category: 'Soft Skills', description: 'Develop the skills to motivate and guide teams towards a common goal.', icon: BriefcaseIcon, relatedCareers: ['Product Management', 'Consulting', 'Entrepreneurship'] },
  { id: 'pm', title: 'Problem Solving', category: 'Analytical Skills', description: 'Master techniques to break down complex problems and find innovative solutions.', icon: LightBulbIcon, relatedCareers: ['Software Engineering', 'Data Science', 'Consulting'] },
  { id: 'creative', title: 'Creative Thinking', category: 'Personal Growth', description: 'Unlock your potential for innovation and thinking outside the box.', icon: PencilIcon, relatedCareers: ['UX/UI Design', 'Marketing', 'Content Creation'] },
  { id: 'emotional', title: 'Emotional Intelligence', category: 'Personal Growth', description: 'Understand and manage your own emotions, and recognize them in others.', icon: HeartIcon, relatedCareers: ['Human Resources', 'Sales', 'Healthcare'] },
  { id: 'coding', title: 'Intro to Coding', category: 'Technical Skills', description: 'Get started with the fundamentals of programming and computational thinking.', icon: CodeBracketIcon, relatedCareers: ['Software Engineering', 'Data Science', 'Web Development'] },
];

export const MOTIVATIONAL_QUOTES: string[] = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "The secret of getting ahead is getting started.",
    "Every path begins with one step."
];

export const FINANCIAL_AID_RESOURCES: FinancialAidResource[] = [
    {
        title: "Understanding Student Loans",
        content: "Student loans can be a crucial part of funding your education. There are two main types: federal and private. Federal loans, offered by the government, usually have fixed interest rates and more flexible repayment options. Private loans are offered by banks and credit unions and can have variable or fixed interest rates. Always exhaust federal loan options before considering private ones. Key terms to know: principal, interest, term, and APR."
    },
    {
        title: "How to Write a Winning Scholarship Essay",
        content: "A great scholarship essay can make your application stand out. Start by understanding the prompt and the sponsoring organization's values. Brainstorm ideas and create an outline. Your introduction should grab the reader's attention. Use specific stories and examples to showcase your personality and achievements. Be authentic and passionate. Finally, proofread meticulously for any grammar or spelling errors."
    },
    {
        title: "Navigating the FAFSA Application",
        content: "The Free Application for Federal Student Aid (FAFSA) is your gateway to federal grants, work-study funds, and loans. You'll need your Social Security number, tax records, and bank statements. The application opens on October 1st each year. It's best to file as early as possible, as some aid is awarded on a first-come, first-served basis. Double-check all information for accuracy before submitting."
    },
    {
        title: "Exploring Merit-Based vs. Need-Based Aid",
        content: "Financial aid comes in two primary forms. Need-based aid is determined by your family's financial situation, calculated from your FAFSA. It includes Pell Grants and subsidized loans. Merit-based aid is awarded for academic, athletic, or artistic achievements, regardless of financial need. These are often scholarships from universities or private organizations."
    }
];
