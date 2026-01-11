
import React, { useState } from 'react';
import { Task } from '../types';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Calendar, 
  CheckCircle2, 
  Circle,
  Clock,
  Filter
} from 'lucide-react';

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Redesign Landing Page', status: 'in-progress', priority: 'high' },
  { id: '2', title: 'API Integration with Gemini', status: 'completed', priority: 'medium' },
  { id: '3', title: 'Implement Authentication', status: 'todo', priority: 'high' },
  { id: '4', title: 'Unit Testing Suite', status: 'todo', priority: 'low' },
  { id: '5', title: 'Mobile Optimization', status: 'in-progress', priority: 'medium' },
];

const PriorityBadge: React.FC<{ priority: Task['priority'] }> = ({ priority }) => {
  const colors = {
    high: 'bg-red-50 text-red-600 border-red-100',
    medium: 'bg-amber-50 text-amber-600 border-amber-100',
    low: 'bg-green-50 text-green-600 border-green-100'
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${colors[priority]}`}>
      {priority}
    </span>
  );
};

const Projects: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        return { ...t, status: t.status === 'completed' ? 'todo' : 'completed' };
      }
      return t;
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Task Board</h1>
          <p className="text-slate-500">Manage and track your daily productivity items.</p>
        </div>
        <button className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-shadow shadow-lg shadow-blue-500/20">
          <Plus size={20} />
          <span>Add New Task</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center space-x-2 hover:bg-slate-50 transition-colors">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl flex items-center space-x-2 hover:bg-slate-50 transition-colors">
            <Calendar size={18} />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Task Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className={`transition-colors ${task.status === 'completed' ? 'text-green-500' : 'text-slate-300 hover:text-blue-500'}`}
                      >
                        {task.status === 'completed' ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                      </button>
                      <span className={`font-medium ${task.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {task.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {task.status === 'todo' && <Circle size={12} className="text-slate-400" />}
                      {task.status === 'in-progress' && <Clock size={12} className="text-blue-500" />}
                      {task.status === 'completed' && <CheckCircle2 size={12} className="text-green-500" />}
                      <span className="text-sm capitalize text-slate-600">{task.status.replace('-', ' ')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <PriorityBadge priority={task.priority} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTasks.length === 0 && (
          <div className="p-12 text-center text-slate-500">
            No tasks found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
