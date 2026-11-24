import React from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import {
  Bookmark,
  FileText,
  Video,
  Clock,
  Layers,
  HelpCircle,
  Zap,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';

const TYPE_ICONS = {
  'Notes and PDFs': FileText,
  'Video Lectures': Video,
  'Previous-Year Questions': Clock,
  'Sample Papers': Layers,
  'Practice Questions': HelpCircle,
  'Short Notes': Zap
};

export default function ResourceCard({ resource, compact = false }) {
  const { openResource, toggleSaveResource, savedResourceIds } = useApp();
  const isSaved = savedResourceIds.includes(resource.id);

  const subjectConfig = SUBJECT_CONFIG[resource.subject] || {
    bg: '#FAFAFC',
    text: '#24243A',
    border: '#E8E8EE'
  };

  const TypeIcon = TYPE_ICONS[resource.resourceType] || BookOpen;

  // Difficulty badge colors
  const difficultyColors = {
    Beginner: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/25',
    Intermediate: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25',
    Advanced: 'bg-amber-500/15 text-amber-300 border border-amber-500/25'
  };

  return (
    <div
      onClick={() => openResource(resource.id)}
      className="group relative flex flex-col justify-between glass-card glass-card-hover rounded-2xl p-5 border border-white/10 cursor-pointer text-white"
    >
      <div>
        {/* Top meta row: Subject badge, Resource Type, Save bookmark button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-lg"
              style={{
                backgroundColor: subjectConfig.bg,
                color: subjectConfig.text
              }}
            >
              {resource.subject}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
              <TypeIcon className="w-3 h-3 text-cyan-300" />
              {resource.resourceType}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => toggleSaveResource(resource.id, e)}
            aria-label={isSaved ? 'Remove from saved' : 'Save resource'}
            className={`p-2 rounded-xl transition-all ${
              isSaved
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-cyan-300' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-3 leading-snug line-clamp-2">
          {resource.title}
        </h3>

        {/* Chapter / Topic */}
        <p className="text-xs font-medium text-slate-400 mt-1.5 flex items-center gap-1.5">
          <span className="text-slate-200 font-semibold">{resource.chapter}</span>
        </p>

        {!compact && (
          <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {resource.shortDescription}
          </p>
        )}
      </div>

      {/* Bottom meta row: Class, Board, Difficulty & Action */}
      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
          <span className="font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">
            {resource.classLevel}
          </span>
          <span className="font-semibold text-slate-300 bg-white/5 px-2 py-0.5 rounded-md">
            {resource.board}
          </span>
          <span
            className={`font-semibold px-2 py-0.5 rounded-md text-[10px] ${
              difficultyColors[resource.difficulty] || 'bg-white/10 text-slate-300'
            }`}
          >
            {resource.difficulty}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            openResource(resource.id);
          }}
          className="flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
