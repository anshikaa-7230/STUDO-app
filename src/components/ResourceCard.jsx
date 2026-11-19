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
    Beginner: 'bg-[#DDF3E7] text-[#05603A]',
    Intermediate: 'bg-[#DCEEFF] text-[#025482]',
    Advanced: 'bg-[#FFE6DC] text-[#93370D]'
  };

  return (
    <div
      onClick={() => openResource(resource.id)}
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E8E8EE] p-5 shadow-subtle hover:shadow-card-hover hover:border-[#D0BFFF] transition-all duration-200 cursor-pointer"
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
            <span className="flex items-center gap-1 text-[11px] font-semibold text-[#737386] bg-slate-100 px-2 py-0.5 rounded-md">
              <TypeIcon className="w-3 h-3 text-[#24243A]" />
              {resource.resourceType}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => toggleSaveResource(resource.id, e)}
            aria-label={isSaved ? 'Remove from saved' : 'Save resource'}
            className={`p-2 rounded-xl transition-all ${
              isSaved
                ? 'bg-[#E9E1FF] text-[#4919A4]'
                : 'text-[#A0A0B2] hover:text-[#24243A] hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#4919A4]' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#24243A] group-hover:text-[#4919A4] transition-colors mt-3 leading-snug line-clamp-2">
          {resource.title}
        </h3>

        {/* Chapter / Topic & Short summary */}
        <p className="text-xs font-medium text-[#737386] mt-1.5 flex items-center gap-1.5">
          <span className="text-[#24243A] font-semibold">{resource.chapter}</span>
        </p>

        {!compact && (
          <p className="text-xs text-[#737386] mt-2 line-clamp-2 leading-relaxed">
            {resource.shortDescription}
          </p>
        )}
      </div>

      {/* Bottom meta row: Class, Board, Difficulty & Action */}
      <div className="mt-4 pt-3.5 border-t border-[#F1F1F4] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap text-[11px]">
          <span className="font-semibold text-[#24243A] bg-slate-100 px-2 py-0.5 rounded-md">
            {resource.classLevel}
          </span>
          <span className="font-semibold text-[#737386] bg-slate-100 px-2 py-0.5 rounded-md">
            {resource.board}
          </span>
          <span
            className={`font-semibold px-2 py-0.5 rounded-md text-[10px] ${
              difficultyColors[resource.difficulty] || 'bg-slate-100 text-[#737386]'
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
          className="flex items-center gap-1 text-xs font-bold text-[#4919A4] group-hover:translate-x-0.5 transition-transform"
        >
          <span>View</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
