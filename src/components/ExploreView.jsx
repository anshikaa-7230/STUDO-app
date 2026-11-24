import React, { useMemo } from 'react';
import { useApp } from '../context/AppContext';
import SearchBar from './SearchBar';
import ResourceCategories from './ResourceCategories';
import FilterPanel from './FilterPanel';
import ResourceCard from './ResourceCard';
import EmptyState from './EmptyState';
import {
  SlidersHorizontal,
  ArrowUpDown,
  RotateCcw,
  BookOpen,
  Sparkles,
  X
} from 'lucide-react';

export default function ExploreView() {
  const {
    resources,
    searchQuery,
    filters,
    sortBy,
    setSortBy,
    clearFilters,
    mobileFilterOpen,
    setMobileFilterOpen
  } = useApp();

  // Multi-attribute filtering
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      // 1. Search Query across title, subject, chapter, shortDescription, whatItCovers
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchSubject = item.subject.toLowerCase().includes(query);
        const matchChapter = item.chapter.toLowerCase().includes(query);
        const matchDesc = item.shortDescription.toLowerCase().includes(query);
        const matchCovers = item.whatItCovers
          ? item.whatItCovers.some((c) => c.toLowerCase().includes(query))
          : false;

        if (!matchTitle && !matchSubject && !matchChapter && !matchDesc && !matchCovers) {
          return false;
        }
      }

      // 2. Class Level
      if (filters.classLevel !== 'All' && item.classLevel !== filters.classLevel) {
        return false;
      }

      // 3. Board
      if (filters.board !== 'All' && item.board !== filters.board) {
        return false;
      }

      // 4. Subject
      if (filters.subject !== 'All' && item.subject !== filters.subject) {
        return false;
      }

      // 5. Resource Type
      if (filters.resourceType !== 'All' && item.resourceType !== filters.resourceType) {
        return false;
      }

      // 6. Difficulty
      if (filters.difficulty !== 'All' && item.difficulty !== filters.difficulty) {
        return false;
      }

      return true;
    });
  }, [resources, searchQuery, filters]);

  // Sorting
  const sortedResources = useMemo(() => {
    const list = [...filteredResources];
    if (sortBy === 'newest') {
      return list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }
    if (sortBy === 'az') {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === 'rating') {
      return list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [filteredResources, sortBy]);

  const hasActiveFilters =
    filters.classLevel !== 'All' ||
    filters.board !== 'All' ||
    filters.subject !== 'All' ||
    filters.resourceType !== 'All' ||
    filters.difficulty !== 'All' ||
    searchQuery.trim().length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in text-slate-900 dark:text-white">
      {/* Page Header */}
      <div className="text-center sm:text-left space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-500/10 dark:border dark:border-cyan-500/20 dark:text-cyan-300 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Curated Resource Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Explore Study Resources
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Find the right material for every subject and topic. High quality NCERT notes,
          step-by-step practice sets, previous-year board questions, and chapter previews.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl">
        <SearchBar />
      </div>

      {/* Resource Categories Quick Switcher */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Browse by Resource Format
          </h2>
          {filters.resourceType !== 'All' && (
            <button
              onClick={() => clearFilters()}
              className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:underline"
            >
              Show all formats
            </button>
          )}
        </div>
        <ResourceCategories />
      </div>

      {/* Main Content Layout: Filters on Left (desktop), Grid on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start pt-4">
        {/* Desktop Filter Column */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24">
          <FilterPanel />
        </aside>

        {/* Resource Listing Column */}
        <div className="lg:col-span-3 space-y-5">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-glass">
            <div className="flex items-center justify-between sm:justify-start gap-3">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Showing {sortedResources.length}{' '}
                {sortedResources.length === 1 ? 'material' : 'materials'}
              </span>

              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-bold text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                )}
              </button>
            </div>

            {/* Active filter tags & Sort control */}
            <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-300 py-1 px-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear All Filters</span>
                </button>
              )}

              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium hidden sm:inline">
                  Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold text-slate-900 dark:text-white focus:border-cyan-400"
                >
                  <option value="newest">Newest Added</option>
                  <option value="az">Title (A – Z)</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filters Badges Row */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="text-slate-400 font-medium text-[11px]">Applied:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 px-2.5 py-1 rounded-lg font-bold">
                  "{searchQuery}"
                </span>
              )}
              {filters.classLevel !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg font-semibold">
                  {filters.classLevel}
                </span>
              )}
              {filters.board !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded-lg font-semibold">
                  {filters.board}
                </span>
              )}
              {filters.subject !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-violet-500/15 text-violet-300 border border-violet-500/30 px-2.5 py-1 rounded-lg font-bold">
                  {filters.subject}
                </span>
              )}
              {filters.resourceType !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-lg font-bold">
                  {filters.resourceType}
                </span>
              )}
              {filters.difficulty !== 'All' && (
                <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold">
                  {filters.difficulty}
                </span>
              )}
            </div>
          )}

          {/* Resource Listing Grid */}
          {sortedResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedResources.map((res) => (
                <ResourceCard key={res.id} resource={res} />
              ))}
            </div>
          ) : (
            <EmptyState
              type="search"
              title="No study resources match your criteria"
              description="We couldn't find any resources matching your active search and filter combination. Try clearing some filters or searching for another topic."
              actionText="Reset All Filters"
              onAction={clearFilters}
            />
          )}
        </div>
      </div>

      {/* Mobile Filters Slide-Out Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm glass-card h-full shadow-2xl p-4 overflow-y-auto z-10 animate-fade-in border-l border-white/10">
            <FilterPanel
              isMobileDrawer={true}
              onCloseMobile={() => setMobileFilterOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
