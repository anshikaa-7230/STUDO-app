import React from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import SubjectCard from './SubjectCard';
import ResourceCard from './ResourceCard';
import EmptyState from './EmptyState';
import {
  Bookmark,
  History,
  GraduationCap,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Calendar,
  Compass
} from 'lucide-react';

export default function Dashboard() {
  const {
    studentProfile,
    resources,
    savedResourceIds,
    recentlyViewedResources,
    learningHours,
    activeSubjectsLearning,
    navigateTo,
    selectSubjectAndExplore
  } = useApp();

  // Subjects list
  const subjects = Object.keys(SUBJECT_CONFIG);

  // Quick stats computed directly from user's state
  const stats = [
    {
      id: 'saved',
      label: 'Resources Saved',
      value: savedResourceIds.length,
      icon: Bookmark,
      bg: '#E9E1FF',
      textColor: '#4919A4',
      onClick: () => navigateTo('saved')
    },
    {
      id: 'recent',
      label: 'Recently Viewed',
      value: recentlyViewedResources.length,
      icon: History,
      bg: '#DCEEFF',
      textColor: '#025482',
      onClick: () => {
        const el = document.getElementById('continue-learning-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'subjects',
      label: 'Subjects Learning',
      value: Math.max(activeSubjectsLearning.length, 3),
      icon: GraduationCap,
      bg: '#DDF3E7',
      textColor: '#05603A',
      onClick: () => navigateTo('explore')
    },
    {
      id: 'hours',
      label: 'Learning Hours',
      value: `${learningHours}h`,
      icon: Clock,
      bg: '#FFF0C9',
      textColor: '#8F4B00',
      onClick: () => {}
    }
  ];

  // Recently added resources (e.g. sorted by dateAdded newest first)
  const recentlyAdded = [...resources]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* B. Welcome Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#24243A] to-[#363654] text-white p-6 sm:p-8 md:p-10 shadow-card">
        {/* Soft pastel decorative glow blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E9E1FF]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#DCEEFF]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#E9E1FF] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF0C9]" />
              <span>Personalized Student Space</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Welcome back, {studentProfile.name}! 👋
            </h1>
            <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
              Ready to continue your learning journey? Explore curriculum-aligned CBSE
              notes, practice problem sheets and question banks.
            </p>
          </div>

          {/* Profile snapshot badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 self-start md:self-auto min-w-[260px]">
            <div className="w-12 h-12 rounded-xl bg-[#E9E1FF] text-[#4919A4] font-extrabold text-lg flex items-center justify-center shadow-inner">
              {studentProfile.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-white leading-tight">
                {studentProfile.school}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                <span className="font-semibold text-[#FFF0C9]">{studentProfile.currentClass}</span>
                <span>•</span>
                <span>{studentProfile.board}</span>
              </div>
              <p className="text-[11px] text-[#DCEEFF] mt-0.5">{studentProfile.stream}</p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Quick Overview - 4 compact cards */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-[#24243A]">Your Study Overview</h2>
          <span className="text-xs text-[#737386]">Live activity stats</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.id}
                onClick={stat.onClick}
                className="text-left bg-white rounded-2xl border border-[#E8E8EE] p-4 sm:p-5 shadow-subtle hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#737386]">{stat.label}</span>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: stat.bg, color: stat.textColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#24243A] tracking-tight">
                    {stat.value}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* D. Explore by Subject */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#24243A]">Explore by Subject</h2>
            <p className="text-xs text-[#737386] mt-0.5">
              Select a subject to instantly view verified notes, videos and mock tests
            </p>
          </div>
          <button
            onClick={() => navigateTo('explore')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#4919A4] hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {subjects.map((subj) => {
            const count = resources.filter((r) => r.subject === subj).length;
            return (
              <SubjectCard
                key={subj}
                subjectName={subj}
                config={SUBJECT_CONFIG[subj]}
                count={count}
              />
            );
          })}
        </div>
      </section>

      {/* E. Recently Added Resources */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#24243A]">Recently Added Materials</h2>
            <p className="text-xs text-[#737386] mt-0.5">
              Freshly uploaded study sets curated for upcoming board and term exams
            </p>
          </div>
          <button
            onClick={() => navigateTo('explore')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#4919A4] hover:underline"
          >
            <span>Explore All ({resources.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyAdded.map((res) => (
            <ResourceCard key={res.id} resource={res} compact={true} />
          ))}
        </div>
      </section>

      {/* F. Continue Learning (Recently Opened) */}
      <section id="continue-learning-section">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#24243A]">Continue Learning</h2>
            <p className="text-xs text-[#737386] mt-0.5">
              Pick up right where you left off
            </p>
          </div>
        </div>

        {recentlyViewedResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentlyViewedResources.slice(0, 3).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <EmptyState
            type="history"
            title="No recently viewed resources yet"
            description="As you explore study guides, problem sheets and video lectures, they will appear here for easy continuation."
            actionText="Discover Resources"
            onAction={() => navigateTo('explore')}
          />
        )}
      </section>
    </div>
  );
}
