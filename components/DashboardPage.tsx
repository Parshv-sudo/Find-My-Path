
import React, { useState } from 'react';
import { DashboardItem } from '../types';
import { BriefcaseIcon, BookOpenIcon, LightBulbIcon, TrashIcon, PencilIcon } from './icons';

const typeToIcon = {
    career: <BriefcaseIcon className="h-5 w-5 text-blue-500" />,
    exam: <BookOpenIcon className="h-5 w-5 text-green-500" />,
    skill: <LightBulbIcon className="h-5 w-5 text-yellow-500" />,
    resource: <LightBulbIcon className="h-5 w-5 text-purple-500" />,
};

const DashboardCard: React.FC<{
    item: DashboardItem;
    onDelete: (id: string) => void;
    onEditNote: (id: string, note: string) => void;
}> = ({ item, onDelete, onEditNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [note, setNote] = useState(item.notes || '');

    const handleSaveNote = () => {
        onEditNote(item.id, note);
        setIsEditing(false);
    }

    return (
        <div className="bg-white rounded-xl shadow p-5 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3">
                    {typeToIcon[item.type]}
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.type}</span>
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <div className="mt-3 text-sm text-slate-600">
                    {isEditing ? (
                        <div>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                className="w-full border-slate-300 rounded-md text-sm"
                                rows={2}
                            />
                        </div>
                    ) : (
                        <p className="italic">{item.notes || "No notes added."}</p>
                    )}
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center border-t pt-3">
                {isEditing ? (
                     <button onClick={handleSaveNote} className="text-sm font-medium text-green-600 hover:text-green-800">Save</button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-violet-600">
                        <PencilIcon className="h-4 w-4" /> Edit Note
                    </button>
                )}
                <button onClick={() => onDelete(item.id)} className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

interface DashboardPageProps {
    items: DashboardItem[];
    setItems: React.Dispatch<React.SetStateAction<DashboardItem[]>>;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ items, setItems }) => {
    
    const handleDelete = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const handleEditNote = (id:string, note: string) => {
        setItems(prev => prev.map(item => item.id === id ? {...item, notes: note} : item));
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold font-poppins">My Dashboard</h1>
                <p className="mt-2 text-lg text-slate-600">Your personalized space to track your career journey.</p>
            </div>

            {items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                        <DashboardCard key={item.id} item={item} onDelete={handleDelete} onEditNote={handleEditNote}/>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-xl shadow">
                    <p className="text-slate-500">Your dashboard is empty.</p>
                    <p className="mt-2 text-sm text-slate-400">Save careers, exams, and skills to see them here.</p>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
