import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, X } from 'lucide-react';

export default function SearchBar({ placeholder = "Search subjects, chapters or topics..." }) {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5 text-cyan-400" />
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3.5 glass-card border border-slate-200 dark:border-white/10 rounded-2xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm dark:shadow-glass focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all"
      />

      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          aria-label="Clear search query"
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-700 dark:hover:text-white"
        >
          <div className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 transition-colors">
            <X className="w-4 h-4" />
          </div>
        </button>
      )}
    </div>
  );
}
