import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  BookOpen,
  Code2,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  BookOpen,
  Code2
};

export default function SubjectCard({ subjectName, config, count }) {
  const { selectSubjectAndExplore } = useApp();
  const IconComponent = ICON_MAP[config.icon] || BookOpen;

  return (
    <button
      onClick={() => selectSubjectAndExplore(subjectName)}
      className="group relative text-left w-full p-5 rounded-2xl border border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-[#24243A]/20"
      style={{
        backgroundColor: config.bg,
        borderColor: config.border
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/70 shadow-sm transition-transform group-hover:scale-110"
          style={{ color: config.text }}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/60 text-[#24243A] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-base font-bold text-[#24243A] group-hover:text-black">
            {subjectName}
          </h3>
          {typeof count === 'number' && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70"
              style={{ color: config.text }}
            >
              {count} {count === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>
        <p className="text-xs text-[#737386] mt-1.5 line-clamp-2 leading-relaxed">
          {config.description}
        </p>
      </div>
    </button>
  );
}
