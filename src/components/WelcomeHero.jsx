import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, UserPlus, LogIn, Compass, ShieldCheck } from 'lucide-react';
const PASTEL_SUBJECTS = [
  { name: 'Physics', style: 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/15 dark:text-sky-200 dark:border-sky-400/30' },
  { name: 'Chemistry', style: 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-500/15 dark:text-purple-200 dark:border-purple-400/30' },
  { name: 'Mathematics', style: 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-500/15 dark:text-rose-200 dark:border-rose-400/30' },
  { name: 'Biology', style: 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-400/30' },
  { name: 'Computer Science', style: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/15 dark:text-amber-200 dark:border-amber-400/30' },
];


export default function WelcomeHero() {
  const { isLoggedIn, currentUser, studentProfile, setAuthModalMode, navigateTo } = useApp();

  // If user is logged in, show personalized greeting with actual user name
  if (isLoggedIn && currentUser) {
    return (
      <section className="relative overflow-hidden rounded-3xl glass-card text-slate-900 dark:text-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/80 dark:border-white/10">
        {/* Glow backdrop blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/70 dark:bg-white/10 backdrop-blur-md text-cyan-800 dark:text-cyan-300 text-xs font-semibold border border-cyan-200/70 dark:border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
              <span>Personalized Student Space</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
  Welcome back,{' '}
  <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-cyan-300 dark:via-violet-300 dark:to-pink-300 bg-clip-text text-transparent">
    {currentUser.name}!
  </span>{' '}
  👋
</h1>



            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-normal max-w-xl leading-relaxed">
              Ready to continue your learning journey? Explore curriculum-aligned CBSE & State Board notes,
              active problem sheets and your SmartPlan AI timetable.
            </p>
          </div>

          {/* Student Profile Snapshot Card */}
          <div className="flex items-center gap-4 bg-slate-50/90 dark:bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 dark:border-white/10 self-start md:self-auto min-w-[260px]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                {currentUser.school || 'Secondary School'}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 mt-1">
                <span className="font-semibold text-amber-600 dark:text-amber-300">{currentUser.currentClass}</span>
                <span>•</span>
                <span>{currentUser.board}</span>
              </div>
              <p className="text-[11px] text-cyan-700 dark:text-cyan-300 mt-0.5 font-medium">{currentUser.stream}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If user is NOT logged in: Requirement Part 3
  return (
    <section className="relative overflow-hidden rounded-3xl glass-card text-slate-900 dark:text-white p-6 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 dark:border-white/10 text-center sm:text-left">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/70 dark:bg-white/10 backdrop-blur-md text-cyan-800 dark:text-cyan-300 text-xs font-bold border border-cyan-200/70 dark:border-white/10 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
          <span>STUDO Intelligence Platform</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
  Welcome,{' '}
  <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 dark:from-cyan-300 dark:via-violet-300 dark:to-pink-300 bg-clip-text text-transparent">
    Buddy!
  </span>
</h1>


        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-semibold">
          Your space to learn, explore and achieve.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
          Discover verified Class 9–12 notes, practice questions, board exams blueprint papers,
          and generate personalized day-by-day examination preparation schedules with SmartPlan AI.
        </p>

        {/* TWO ATTRACTIVE BUTTONS: Get Started & Log In */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-3">
          <button
            onClick={() => setAuthModalMode('signup')}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setAuthModalMode('login')}
            className="px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
          >
            <LogIn className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
            <span>Log In</span>
          </button>

          <button
            onClick={() => navigateTo('explore')}
            className="px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4" />
            <span>Explore as Guest</span>
          </button>
        </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              Subjects:
            </span>
            {PASTEL_SUBJECTS.map((subj) => (
              <button
                key={subj.name}
                onClick={() => navigateTo('explore')}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-transform hover:scale-105 ${subj.style}`}
              >
                {subj.name}
              </button>
            ))}
          </div>

      </div>
    </section>
  );
}
