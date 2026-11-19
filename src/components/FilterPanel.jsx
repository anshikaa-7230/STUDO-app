import React from 'react';
import { useApp } from '../context/AppContext';
import { RotateCcw, X, Filter, Check } from 'lucide-react';

export default function FilterPanel({ isMobileDrawer = false, onCloseMobile = () => {} }) {
  const { filters, setFilters, clearFilters, resources } = useApp();

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

  // Check if any filter is active
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
    <div className={`bg-white rounded-2xl border border-[#E8E8EE] p-5 shadow-subtle ${isMobileDrawer ? 'h-full flex flex-col justify-between' : ''}`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F1F1F4]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#24243A]" />
            <h3 className="text-sm font-bold text-[#24243A]">Filter Materials</h3>
          </div>

          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold text-[#6941C6] hover:text-[#4919A4] transition-colors py-1 px-2 rounded-lg hover:bg-[#E9E1FF]/40"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
            {isMobileDrawer && (
              <button
                onClick={onCloseMobile}
                className="p-1.5 rounded-lg text-[#737386] hover:bg-slate-100"
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
            <label className="block font-bold text-[#24243A] mb-2 uppercase tracking-wider text-[11px]">
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
                        ? 'bg-[#24243A] text-white shadow-xs'
                        : 'bg-[#FAFAFC] text-[#737386] border border-[#E8E8EE] hover:border-[#D0BFFF]'
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
            <label className="block font-bold text-[#24243A] mb-2 uppercase tracking-wider text-[11px]">
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
                        ? 'bg-[#24243A] text-white shadow-xs'
                        : 'bg-[#FAFAFC] text-[#737386] border border-[#E8E8EE] hover:border-[#D0BFFF]'
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
            <label className="block font-bold text-[#24243A] mb-2 uppercase tracking-wider text-[11px]">
              Subject
            </label>
            <select
              value={filters.subject}
              onChange={(e) => updateField('subject', e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6] focus:ring-2 focus:ring-[#E9E1FF]"
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
            <label className="block font-bold text-[#24243A] mb-2 uppercase tracking-wider text-[11px]">
              Resource Format
            </label>
            <select
              value={filters.resourceType}
              onChange={(e) => updateField('resourceType', e.target.value)}
              className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6] focus:ring-2 focus:ring-[#E9E1FF]"
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
            <label className="block font-bold text-[#24243A] mb-2 uppercase tracking-wider text-[11px]">
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
                        ? 'bg-[#24243A] text-white shadow-xs'
                        : 'bg-[#FAFAFC] text-[#737386] border border-[#E8E8EE] hover:border-[#D0BFFF]'
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
        <div className="mt-6 pt-4 border-t border-[#F1F1F4]">
          <button
            onClick={onCloseMobile}
            className="w-full py-3 bg-[#24243A] text-white rounded-xl font-bold text-sm shadow-subtle"
          >
            Show Filtered Results
          </button>
        </div>
      )}
    </div>
  );
}
