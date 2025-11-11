
import React, { useState } from 'react';
import { getCareerRecommendations } from '../services/geminiService';
import { PathFinderResult } from '../types';
import { SparklesIcon, LightBulbIcon } from './icons';

const ResultCard: React.FC<{ result: PathFinderResult }> = ({ result }) => (
    <div className="bg-white rounded-lg shadow p-6 border border-violet-100">
        <h3 className="text-xl font-bold text-violet-700 font-poppins">{result.careerName}</h3>
        <p className="text-slate-600 mt-2 text-sm">{result.description}</p>
        <div className="mt-4">
            <h4 className="font-semibold text-sm">Skills Needed:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
                {result.requiredSkills.map(skill => <span key={skill} className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">{skill}</span>)}
            </div>
        </div>
        <p className="text-sm font-semibold mt-4">Average Salary: <span className="font-normal text-green-600">{result.averageSalary}</span></p>
    </div>
);

const PathFinderPage: React.FC = () => {
    const [formData, setFormData] = useState({ interests: '', skills: '', subjects: '' });
    const [results, setResults] = useState<PathFinderResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setResults([]);
        
        try {
            const recommendations = await getCareerRecommendations(formData.interests, formData.skills, formData.subjects);
            if(recommendations && recommendations.length > 0) {
                 setResults(recommendations);
            } else {
                setError("Sorry, I couldn't generate recommendations. Please try again with more detailed answers.");
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center p-6 bg-white rounded-xl shadow">
                <SparklesIcon className="mx-auto h-12 w-12 text-violet-500" />
                <h1 className="text-4xl font-bold font-poppins mt-2">PathFinder AI</h1>
                <p className="mt-2 text-lg text-slate-600">Answer a few questions and let our AI find the perfect career path for you.</p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="interests" className="block text-sm font-medium text-slate-700">What are your hobbies and interests? (e.g., video games, painting, reading books)</label>
                        <textarea id="interests" name="interests" rows={3} value={formData.interests} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-slate-700">What are you good at? (e.g., public speaking, solving puzzles, leading teams)</label>
                        <textarea id="skills" name="skills" rows={3} value={formData.skills} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm" required />
                    </div>
                    <div>
                        <label htmlFor="subjects" className="block text-sm font-medium text-slate-700">What are your favorite subjects in school?</label>
                        <input type="text" id="subjects" name="subjects" value={formData.subjects} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm" required />
                    </div>
                    <div>
                        <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:bg-slate-400">
                            {isLoading ? 'Finding Your Path...' : 'Discover My Career'}
                        </button>
                    </div>
                </form>
            </div>

            {isLoading && (
                 <div className="text-center py-10">
                    <div role="status" className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-violet-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                    <p className="mt-2 text-slate-600">Our AI is analyzing your answers...</p>
                 </div>
            )}
            {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
            {results.length > 0 && (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-center font-poppins">Your Recommended Career Paths</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((res, index) => <ResultCard key={index} result={res} />)}
                    </div>
                     <div className="mt-4 text-center text-xs text-slate-500 italic flex items-center justify-center gap-2">
                        <LightBulbIcon className="h-4 w-4" />
                        <span>Powered by Google Gemini</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PathFinderPage;
