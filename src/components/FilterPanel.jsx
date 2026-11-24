import React from 'react';
import { useApp } from '../context/AppContext';
import { RotateCcw, X, Filter, Check } from 'lucide-react';

export default function FilterPanel({ isMobileDrawer = false, onCloseMobile = () => {} }) {
  const { filters, setFilters, clearFilters } = useApp();

  const classOptions = ['All', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
  const boardOptions = ['All', 'CBSE', 'ICSE', 'State Board'];
  const subjectOptions = [
    'All',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science'
  ];
  const typeOptions = [
    'All',
    'Notes and PDFs',
    'Video Lectures',
    'Previous-Year Questions',
    'Sample Papers',
    'Practice Questions',
    'Short Notes'
  ];
  const difficultyOptions = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const hasActiveFilters =
    filters.classLevel !== 'All' ||
    filters.board !== 'All' ||
    filters.subject !== 'All' ||
    filters.resourceType !== 'All' ||
    filters.difficulty !== 'All';

  const updateField = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className={`glass-card rounded-2xl border border-white/10 p-5 shadow-glass text-white ${
        isMobileDrawer ? 'h-full flex flex-col justify-between' : ''
      }`}
    >
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Filter Materials</h3>
          </div>

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1 px-2 rounded-lg hover:bg-white/5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
            {isMobileDrawer && (
              <button
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Body */}
        <div className="space-y-5 mt-4 text-xs">
          {/* Class Filter */}
          <div>
            <label className="block font-bold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
              Class Level
            </label>
            <div className="flex flex-wrap gap-1.5">
              {classOptions.map((opt) => {
                const isSelected = filters.classLevel === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => updateField('classLevel', opt)}
                    className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Board Filter */}
          <div>
            <label className="block font-bold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
              Education Board
            </label>
            <div className="flex flex-wrap gap-1.5">
              {boardOptions.map((opt) => {
                const isSelected = filters.board === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => updateField('board', opt)}
                    className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block font-bold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
              Subject
            </label>
            <select
              value={filters.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-xs font-semibold text-white focus:border-cyan-400"
            >
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'All' ? 'All Subjects' : opt}
                </option>
              ))}
            </select>
          </div>

          {/* Resource Type Filter */}
          <div>
            <label className="block font-bold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
              Resource Format
            </label>
            <select
              value={filters.resourceType}
              onChange={(e) => updateField('resourceType', e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-xs font-semibold text-white focus:border-cyan-400"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === 'All' ? 'All Formats' : opt}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block font-bold text-slate-300 mb-2 uppercase tracking-wider text-[11px]">
              Difficulty Level
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {difficultyOptions.map((opt) => {
                const isSelected = filters.difficulty === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => updateField('difficulty', opt)}
                    className={`py-1.5 px-2 rounded-xl text-center font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/30'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isMobileDrawer && (
        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={onCloseMobile}
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-xl font-bold text-sm shadow-glow-cyan"
          >
            Show Filtered Results
          </button>
        </div>
      )}
    </div>
  );
}
