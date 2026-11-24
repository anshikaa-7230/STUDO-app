import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import WelcomeHero from './WelcomeHero';
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
  Compass,
  CheckCircle2,
  AlertCircle,
  Flame,
  Award,
  Zap,
  Trophy,
  ExternalLink,
  Target,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const {
    studentProfile,
    resources,
    savedResourceIds,
    savedResources,
    recentlyViewedResources,
    learningHours,
    activeSubjectsLearning,
    smartPlan,
    navigateTo,
    selectSubjectAndExplore,
    setAuthModalMode,
    isLoggedIn
  } = useApp();

  // 4. Upcoming Examination Countdown Timer (CBSE Board Exam Target)
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 20
  });

  useEffect(() => {
    // Target date: March 1st or calculated exam date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // 3. Animated Study Progress calculation
  const targetGoalHours = 30;
  const progressPercent = Math.min(Math.round((learningHours / targetGoalHours) * 100), 100);

  // 5 & 6. Subject-Wise Progress & Chapter Completion stats
  const subjectProgressStats = [
    { name: 'Mathematics', completed: 8, inProgress: 3, notStarted: 3, percent: 72 },
    { name: 'Physics', completed: 6, inProgress: 4, notStarted: 4, percent: 60 },
    { name: 'Chemistry', completed: 7, inProgress: 2, notStarted: 3, percent: 70 },
    { name: 'Biology', completed: 9, inProgress: 2, notStarted: 2, percent: 81 },
    { name: 'English', completed: 5, inProgress: 1, notStarted: 2, percent: 75 },
    { name: 'Computer Science', completed: 4, inProgress: 2, notStarted: 1, percent: 66 }
  ];

  // 9. Recommended Opportunities for School Students (Olympiads, Science Fairs, Scholarships)
  const opportunities = [
    {
      id: 1,
      title: 'National Science Olympiad (NSO 2026-27)',
      organizer: 'Science Olympiad Foundation (SOF)',
      deadline: 'Dec 15, 2026',
      badge: 'Olympiad',
      tagColor: '#38BDF8'
    },
    {
      id: 2,
      title: 'INSPIRE Awards — MANAK Scheme',
      organizer: 'Department of Science and Technology (DST)',
      deadline: 'Jan 20, 2027',
      badge: 'Innovation',
      tagColor: '#A855F7'
    },
    {
      id: 3,
      title: 'CBSE Expression Series: National Heritage',
      organizer: 'Central Board of Secondary Education',
      deadline: 'Dec 28, 2026',
      badge: 'Academic',
      tagColor: '#34D399'
    }
  ];

  // 11. Achievement Badges
  const badges = [
    { id: 'b1', name: 'Pioneer', desc: 'Joined STUDO Learning Space', unlocked: isLoggedIn, icon: Zap },
    { id: 'b2', name: 'Resource Vault', desc: 'Saved 2+ Study Materials', unlocked: savedResourceIds.length >= 2, icon: Bookmark },
    { id: 'b3', name: 'Smart Planner', desc: 'Created an AI Timetable', unlocked: !!smartPlan, icon: Target },
    { id: 'b4', name: 'Deep Focus', desc: 'Recorded 10+ Study Hours', unlocked: learningHours >= 10, icon: Flame },
    { id: 'b5', name: 'Curious Mind', desc: 'Explored 3+ Core Subjects', unlocked: activeSubjectsLearning.length >= 3, icon: Trophy }
  ];

  // Recently added resources
  const recentlyAdded = [...resources]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* 1 & 2. Personalised Welcome & Profile Hero */}
      <WelcomeHero />

      {/* METRICS & COUNTDOWN ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 3. Animated Study Progress Ring */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 flex items-center gap-5">
          <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-white/10"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-cyan-500 dark:text-cyan-400 transition-all duration-1000 ease-out"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-sm font-black text-slate-900 dark:text-white">{progressPercent}%</span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">Target Pace</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{learningHours}h of {targetGoalHours}h Done</h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Weekly study milestone tracking</p>
          </div>
        </div>

        {/* 4. Upcoming Examination Countdown */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                CBSE Board Exam Countdown
              </span>
            </div>
            <span className="text-[10px] font-semibold text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-200 dark:border-cyan-500/20">
              Live
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-center pt-1">
            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-2 border border-slate-200/70 dark:border-white/5">
              <span className="text-lg font-black text-slate-900 dark:text-white block">{timeLeft.days}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Days</span>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-2 border border-slate-200/70 dark:border-white/5">
              <span className="text-lg font-black text-slate-900 dark:text-white block">{timeLeft.hours}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Hours</span>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-2 border border-slate-200/70 dark:border-white/5">
              <span className="text-lg font-black text-slate-900 dark:text-white block">{timeLeft.minutes}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Mins</span>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-2 border border-slate-200/70 dark:border-white/5">
              <span className="text-lg font-black text-cyan-600 dark:text-cyan-300 block">{timeLeft.seconds}</span>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Secs</span>
            </div>
          </div>
        </div>

        {/* 7. SmartPlan AI Highlight Section */}
        <div className="glass-card rounded-3xl p-6 border border-cyan-400/40 relative overflow-hidden flex flex-col justify-between shadow-md dark:shadow-glow-cyan bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 dark:bg-transparent">
          <div className="space-y-1 z-10">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">STUDO SmartPlan AI</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              {smartPlan ? 'Your AI Plan is Active' : 'Generate Exam Timetable'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {smartPlan
                ? `${smartPlan.dailyPlans.length} days organized with weak-subject prioritization.`
                : 'Adaptive AI planning based on verified NCERT/CBSE weightages.'}
            </p>
          </div>

          <button
            onClick={() => navigateTo('smartplan')}
            className="mt-4 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-between shadow-sm hover:opacity-95 transition-all z-10"
          >
            <span>{smartPlan ? 'Open SmartPlan' : 'Launch AI Planner'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5 & 6. Subject-Wise Progress Cards with Chapter Completion Indicators */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Subject-Wise Preparation</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chapter completion indicators & verified question banks
            </p>
          </div>
          <button
            onClick={() => navigateTo('explore')}
            className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>Explore All Materials</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectProgressStats.map((item) => {
            const config = SUBJECT_CONFIG[item.name] || {};
            return (
              <div
                key={item.name}
                onClick={() => selectSubjectAndExplore(item.name)}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 cursor-pointer space-y-3.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: config.text || '#06B6D4' }}
                    />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  </div>
                  <span className="text-xs font-black text-cyan-700 dark:text-cyan-300">{item.percent}%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 transition-all duration-700"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                {/* Chapter Completion Indicators */}
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100 dark:border-white/5">
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> {item.completed} Done
                  </span>
                  <span className="flex items-center gap-1 text-amber-700 dark:text-amber-300 font-semibold">
                    <Clock className="w-3 h-3" /> {item.inProgress} In-Progress
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {item.notStarted} Remaining
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Saved Study Materials Shelf (Live User Bookmarks) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Saved Study Materials</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Quick access to your revision vault
            </p>
          </div>
          <button
            onClick={() => navigateTo('saved')}
            className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>View Vault ({savedResources.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {savedResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedResources.slice(0, 3).map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <EmptyState
            type="saved"
            title="No resources saved yet"
            description="Click the bookmark icon on any chapter notes, question papers or practice sheets to save them here for offline review."
            actionText="Discover Resources"
            onAction={() => navigateTo('explore')}
          />
        )}
      </section>

      {/* 9 & 10. Recommended Opportunities & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 9. Recommended Opportunities for Students */}
        <section className="lg:col-span-2 glass-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Recommended Academic Opportunities</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified scholarships, science olympiads and national contests for Classes 9–12
              </p>
            </div>
            <Award className="w-5 h-5 text-amber-500 dark:text-amber-300" />
          </div>

          <div className="space-y-3">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${opp.tagColor}20`, color: opp.tagColor }}
                    >
                      {opp.badge}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Deadline: {opp.deadline}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1.5">{opp.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{opp.organizer}</p>
                </div>

                <button
                  type="button"
                  onClick={() => window.open('https://cbseacademic.nic.in', '_blank')}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-cyan-700 dark:text-cyan-300 text-xs font-semibold self-start sm:self-auto flex items-center gap-1.5"
                >
                  <span>Guidelines</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Recent Activity Timeline */}
        <section className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-3">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Recent Activity</h3>
            <History className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          </div>

          {recentlyViewedResources.length > 0 ? (
            <div className="space-y-3">
              {recentlyViewedResources.slice(0, 4).map((res) => (
                <div
                  key={res.id}
                  onClick={() => navigateTo('details', res.id)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5 hover:border-cyan-400/40 transition-all cursor-pointer"
                >
                  <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-300 block">{res.subject}</span>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">{res.title}</h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{res.classLevel} • {res.resourceType}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400 py-4 text-center">
              No recent activity recorded yet. Explore resources to start tracking!
            </p>
          )}
        </section>
      </div>

      {/* 11. Achievement Badges */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Milestone Achievements</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Unlock badges as you study, bookmark resources and plan exams
            </p>
          </div>
          <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300">
            {badges.filter((b) => b.unlocked).length} / {badges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  badge.unlocked
                    ? 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-300 dark:border-cyan-400/40 shadow-sm dark:shadow-glow-cyan'
                    : 'bg-slate-50 dark:bg-white/5 border-slate-200/80 dark:border-white/5 opacity-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-2.5 ${
                    badge.unlocked ? 'bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-950 shadow-sm' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{badge.name}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{badge.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
