import React from 'react';
import { SearchX, BookmarkX, History, Compass, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  search: SearchX,
  saved: BookmarkX,
  history: History,
  explore: Compass
};

export default function EmptyState({
  type = 'search',
  title = 'No resources found',
  description = 'Try adjusting your search terms or clearing some filters to find what you need.',
  actionText = 'Clear Filters',
  onAction = null
}) {
  const Icon = ICON_MAP[type] || SearchX;

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white rounded-3xl border border-[#E8E8EE] shadow-subtle my-4">
      <div className="w-16 h-16 rounded-2xl bg-[#E9E1FF] text-[#4919A4] flex items-center justify-center mb-4 shadow-sm">
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-lg font-bold text-[#24243A]">{title}</h3>
      <p className="text-sm text-[#737386] max-w-md mt-2 leading-relaxed">
        {description}
      </p>

      {actionText && onAction && (
        <button
          onClick={onAction}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#24243A] text-white rounded-xl text-xs font-bold shadow-subtle hover:bg-black transition-all"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
