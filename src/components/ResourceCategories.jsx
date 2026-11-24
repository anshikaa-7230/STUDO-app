import React from 'react';
import { useApp } from '../context/AppContext';
import { RESOURCE_CATEGORIES } from '../data/resources';
import {
  FileText,
  Video,
  Clock,
  Layers,
  HelpCircle,
  Zap
} from 'lucide-react';

const CATEGORY_ICONS = {
  FileText,
  Video,
  Clock,
  Layers,
  HelpCircle,
  Zap
};

export default function ResourceCategories() {
  const { filters, setFilters, theme } = useApp();

  const handleCategoryClick = (categoryId) => {
    setFilters((prev) => ({
      ...prev,
      resourceType: prev.resourceType === categoryId ? 'All' : categoryId
    }));
  };

  const isCosmic = theme === 'cosmic';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {RESOURCE_CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] || FileText;
        const isSelected = filters.resourceType === category.id;

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`group text-left p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 focus:outline-none ${
              isSelected
                ? 'border-cyan-400 bg-cyan-500/15 shadow-glow-cyan ring-1 ring-cyan-400 scale-[1.02]'
                : isCosmic
                ? 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                : 'border-[#E8E8EE] hover:border-[#D0BFFF]'
            }`}
            style={
              !isCosmic && !isSelected
                ? { backgroundColor: category.color }
                : {}
            }
          >
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{
                  backgroundColor: isCosmic ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.8)',
                  color: isCosmic ? '#38BDF8' : category.textColor
                }}
              >
                <Icon className="w-5 h-5" />
              </div>
              {isSelected && (
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan" />
              )}
            </div>

            <h4 className={`text-sm font-bold mt-3 ${isCosmic ? 'text-white group-hover:text-cyan-300' : 'text-[#24243A]'}`}>
              {category.title}
            </h4>
            <p className={`text-[11px] mt-1 line-clamp-2 leading-snug ${isCosmic ? 'text-slate-400' : 'text-[#737386]'}`}>
              {category.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
