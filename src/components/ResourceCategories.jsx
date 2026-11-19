import React from 'react';
import { useApp } from '../context/AppContext';
import { RESOURCE_CATEGORIES } from '../data/resources';
import {
  FileText,
  Video,
  Clock,
  Layers,
  HelpCircle,
  Zap,
  ArrowRight
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
  const { filters, setFilters, navigateTo } = useApp();

  const handleCategoryClick = (categoryId) => {
    // Toggle or activate category
    setFilters((prev) => ({
      ...prev,
      resourceType: prev.resourceType === categoryId ? 'All' : categoryId
    }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
      {RESOURCE_CATEGORIES.map((category) => {
        const Icon = CATEGORY_ICONS[category.icon] || FileText;
        const isSelected = filters.resourceType === category.id;

        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`group text-left p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover focus:outline-none ${
              isSelected
                ? 'ring-2 ring-[#24243A] shadow-md border-transparent scale-[1.02]'
                : 'border-[#E8E8EE] hover:border-[#D0BFFF]'
            }`}
            style={{
              backgroundColor: category.color
            }}
          >
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-xl bg-white/80 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ color: category.textColor }}
              >
                <Icon className="w-5 h-5" />
              </div>
              {isSelected && (
                <span className="w-2 h-2 rounded-full bg-[#24243A]" />
              )}
            </div>

            <h4 className="text-sm font-bold text-[#24243A] mt-3 group-hover:text-black">
              {category.title}
            </h4>
            <p className="text-[11px] text-[#737386] mt-1 line-clamp-2 leading-snug">
              {category.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
