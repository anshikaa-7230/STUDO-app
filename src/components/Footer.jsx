import React from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import { Heart, Sparkles, Compass, Target, Bookmark, Palette } from 'lucide-react';

export default function Footer() {
  const { navigateTo, selectSubjectAndExplore, setFilters, replayIntro, theme, toggleTheme } = useApp();

  return (
    <footer className="mt-20 border-t border-white/10 glass-panel text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-500 text-slate-950 flex items-center justify-center font-black text-base shadow-glow-cyan">
                <span>S</span>
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                STUDO
              </span>
            </div>
            <p className="font-bold text-cyan-300">Think. Discover. Achieve.</p>
            <p className="leading-relaxed text-slate-400">
              Futuristic student learning & study material discovery platform for Class 9–12.
              Adaptive AI examination planning and verified notes.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="hover:text-white transition-colors"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('explore')}
                  className="hover:text-white transition-colors"
                >
                  Explore Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('smartplan')}
                  className="text-cyan-400 font-bold hover:underline flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STUDO SmartPlan AI</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('saved')}
                  className="hover:text-white transition-colors"
                >
                  My Saved Vault
                </button>
              </li>
              <li>
                <button
                  onClick={replayIntro}
                  className="hover:text-violet-300 text-violet-400 font-semibold flex items-center gap-1.5 transition-colors pt-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Replay Holographic Intro</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Core Subjects
            </h4>
            <ul className="space-y-2">
              {Object.keys(SUBJECT_CONFIG).slice(0, 5).map((subj) => (
                <li key={subj}>
                  <button
                    onClick={() => selectSubjectAndExplore(subj)}
                    className="hover:text-white transition-colors"
                  >
                    {subj}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Boards & Classes */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Classes & Themes
            </h4>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {['Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, classLevel: cls }));
                    navigateTo('explore');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400 text-slate-300 font-medium"
                >
                  {cls}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold"
              >
                <Palette className="w-3.5 h-3.5 text-cyan-400" />
                <span>Theme: {theme === 'cosmic' ? 'Cosmic 🌌' : 'Aurora 🌸'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 STUDO. Built for school minds. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Powered by modern web technologies and verified syllabus datasets.
          </p>
        </div>
      </div>
    </footer>
  );
}
