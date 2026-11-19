import React from 'react';
import { useApp } from '../context/AppContext';
import { Search, X } from 'lucide-react';

export default function SearchBar({ placeholder = "Search subjects, chapters or topics..." }) {
  const { searchQuery, setSearchQuery } = useApp();

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#737386]">
        <Search className="w-5 h-5 text-[#737386]" />
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3.5 bg-white border border-[#E8E8EE] rounded-2xl text-sm font-medium text-[#24243A] placeholder-[#737386] shadow-subtle hover:border-[#D0BFFF] focus:border-[#6941C6] focus:ring-4 focus:ring-[#E9E1FF] transition-all"
      />

      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          aria-label="Clear search query"
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#737386] hover:text-[#24243A]"
        >
          <div className="p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <X className="w-4 h-4" />
          </div>
        </button>
      )}
    </div>
  );
}
