import React, { useState } from 'react';
import { getScholarshipRecommendations } from '../services/geminiService';
import { Scholarship, FinancialAidResource } from '../types';
import { SparklesIcon, LightBulbIcon, ChevronDownIcon, LinkIcon } from './icons';
import { FINANCIAL_AID_RESOURCES } from '../constants';

const ScholarshipCard: React.FC<{ scholarship: Scholarship }> = ({ scholarship }) => (
    <div className="bg-white rounded-lg shadow p-6 border border-violet-100 flex flex-col">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-violet-700 font-poppins">{scholarship.scholarshipName}</h3>
            <p className="text-slate-600 mt-2 text-sm">{scholarship.description}</p>
            <div className="mt-4">
                <h4 className="font-semibold text-sm">Eligibility:</h4>
                <p className="text-sm text-slate-500 mt-1">{scholarship.eligibility}</p>
            </div>
            <p className="text-sm font-semibold mt-4">Award: <span className="font-normal text-green-600">{scholarship.awardAmount}</span></p>
        </div>
        <a 
            href={scholarship.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 block w-full text-center text-sm font-semibold text-violet-600 bg-violet-100 hover:bg-violet-200 rounded-md py-2 transition-colors"
        >
          Apply Now
        </a>
    </div>
);

const AccordionItem: React.FC<{ item: FinancialAidResource }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <ChevronDownIcon className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                <p className="text-slate-600 text-sm">{item.content}</p>
            </div>
        </div>
    );
};

const FinancialAidPage: React.FC = () => {
    const [formData, setFormData] = useState({ level: 'Undergraduate', field: '', keywords: '' });
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setScholarships([]);

        try {
            const results = await getScholarshipRecommendations(formData.level, formData.field, formData.keywords);
            if (results && results.length > 0) {
                setScholarships(results);
            } else {
                setError("Sorry, I couldn't find any scholarships matching your criteria. Try broadening your search.");
            }
        } catch (err) {
            setError('An error occurred while fetching scholarships. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-poppins">Financial Aid & Scholarships</h1>
                <p className="mt-2 text-lg text-slate-600">Your guide to funding your education and future.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow p-8">
                        <div className="flex items-center gap-3">
                            <SparklesIcon className="h-8 w-8 text-violet-500" />
                            <h2 className="text-2xl font-bold font-poppins">AI Scholarship Finder</h2>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">Fill in the details below to find scholarships tailored for you.</p>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="level" className="block text-sm font-medium text-slate-700">Academic Level</label>
                                    <select id="level" name="level" value={formData.level} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm">
                                        <option>High School</option>
                                        <option>Undergraduate</option>
                                        <option>Postgraduate</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="field" className="block text-sm font-medium text-slate-700">Field of Study (e.g., Engineering)</label>
                                    <input type="text" id="field" name="field" value={formData.field} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="keywords" className="block text-sm font-medium text-slate-700">Keywords (optional, e.g., women in tech)</label>
                                <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm" />
                            </div>
                            <div>
                                <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-slate-400">
                                    {isLoading ? 'Searching...' : 'Find Scholarships'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {isLoading && (
                        <div className="text-center py-10">
                            <div role="status" className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                            <p className="mt-2 text-slate-600">Our AI is searching for scholarships...</p>
                        </div>
                    )}
                    {error && <p className="mt-6 text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
                    {scholarships.length > 0 && (
                        <div className="mt-8 space-y-6">
                            <h2 className="text-2xl font-bold text-center font-poppins">Your Scholarship Matches</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {scholarships.map((s, index) => <ScholarshipCard key={index} scholarship={s} />)}
                            </div>
                            <div className="mt-4 text-center text-xs text-slate-500 italic flex items-center justify-center gap-2">
                                <LightBulbIcon className="h-4 w-4" />
                                <span>Powered by Google Gemini</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-2xl font-bold font-poppins">Financial Aid Guide</h2>
                        <p className="mt-2 text-sm text-slate-500">Key resources to get you started.</p>
                        <div className="mt-4">
                            {FINANCIAL_AID_RESOURCES.map(resource => (
                                <AccordionItem key={resource.title} item={resource} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialAidPage;
