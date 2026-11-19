import React from 'react';
import { useApp } from '../context/AppContext';
import ResourceCard from './ResourceCard';
import EmptyState from './EmptyState';
import { Bookmark, ArrowRight, Trash2 } from 'lucide-react';

export default function SavedResourcesView() {
  const { savedResources, navigateTo, setSavedResourceIds, showToast } = useApp();

  const handleClearAll = () => {
    if (savedResources.length > 0 && window.confirm('Clear all saved resources from your bookmarks?')) {
      // Clear saved IDs
      localStorage.removeItem('studo_saved_resources_v1');
      window.location.reload();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E8EE] pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E1FF] text-[#4919A4] text-xs font-bold">
            <Bookmark className="w-3.5 h-3.5 fill-[#4919A4]" />
            <span>Personal Revision Vault</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#24243A] tracking-tight">
            My Saved Resources
          </h1>
          <p className="text-sm text-[#737386]">
            All study guides, practice sets and video lectures you bookmarked for quick revision.
          </p>
        </div>

        {savedResources.length > 0 && (
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#737386]">
              {savedResources.length} {savedResources.length === 1 ? 'item saved' : 'items saved'}
            </span>
            <button
              onClick={() => navigateTo('explore')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#24243A] text-white rounded-xl text-xs font-bold shadow-subtle hover:bg-black transition-all"
            >
              <span>Explore More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      {savedResources.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))}
        </div>
      ) : (
        <EmptyState
          type="saved"
          title="No resources saved yet"
          description="Click the bookmark icon on any chapter notes, question papers or practice sheets while browsing to save them here for offline review and test prep."
          actionText="Browse Study Resources"
          onAction={() => navigateTo('explore')}
        />
      )}
    </div>
  );
}
