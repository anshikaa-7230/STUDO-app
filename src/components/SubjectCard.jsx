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
  const { selectSubjectAndExplore, theme } = useApp();
  const IconComponent = ICON_MAP[config.icon] || BookOpen;

  const isCosmic = theme === 'cosmic';

  return (
    <button
      onClick={() => selectSubjectAndExplore(subjectName)}
      className="group relative text-left w-full p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none"
      style={{
        backgroundColor: isCosmic ? 'rgba(255, 255, 255, 0.04)' : config.bg,
        borderColor: isCosmic ? 'rgba(255, 255, 255, 0.1)' : config.border
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110"
          style={{
            backgroundColor: isCosmic ? `${config.text}25` : 'rgba(255, 255, 255, 0.8)',
            color: isCosmic ? '#38BDF8' : config.text
          }}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-1">
          <h3 className={`text-base font-bold ${isCosmic ? 'text-white group-hover:text-cyan-300' : 'text-[#24243A]'}`}>
            {subjectName}
          </h3>
          {typeof count === 'number' && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: isCosmic ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
                color: isCosmic ? '#A5F3FC' : config.text
              }}
            >
              {count} {count === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>
        <p className={`text-xs mt-1.5 line-clamp-2 leading-relaxed ${isCosmic ? 'text-slate-400' : 'text-[#737386]'}`}>
          {config.description}
        </p>
      </div>
    </button>
  );
}
