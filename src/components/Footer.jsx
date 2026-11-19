import React from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const { navigateTo, selectSubjectAndExplore, setFilters, replayIntro } = useApp();

  return (
    <footer className="mt-20 border-t border-[#E8E8EE] bg-white text-[#737386] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#24243A] text-white flex items-center justify-center font-bold text-base">
                <span className="bg-gradient-to-tr from-[#E9E1FF] via-[#DCEEFF] to-[#FFF0C9] bg-clip-text text-transparent">
                  S
                </span>
              </div>
              <span className="text-lg font-extrabold text-[#24243A] tracking-tight">
                STUDO
              </span>
            </div>
            <p className="font-medium text-[#24243A]">Think. Discover. Achieve.</p>
            <p className="leading-relaxed text-[#737386]">
              Modern learning & study material vault for Class 9–12 students. Simple,
              focused, and distraction-free.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-[#24243A] uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateTo('dashboard')}
                  className="hover:text-[#24243A] transition-colors"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('explore')}
                  className="hover:text-[#24243A] transition-colors"
                >
                  Explore Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('saved')}
                  className="hover:text-[#24243A] transition-colors"
                >
                  My Saved Resources
                </button>
              </li>
              <li>
                <button
                  onClick={replayIntro}
                  className="hover:text-[#4919A4] text-[#6941C6] font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Replay Intro Animation</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-bold text-[#24243A] uppercase tracking-wider text-[11px] mb-3">
              Core Subjects
            </h4>
            <ul className="space-y-2">
              {Object.keys(SUBJECT_CONFIG).slice(0, 5).map((subj) => (
                <li key={subj}>
                  <button
                    onClick={() => selectSubjectAndExplore(subj)}
                    className="hover:text-[#24243A] transition-colors"
                  >
                    {subj}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Boards & Classes */}
          <div>
            <h4 className="font-bold text-[#24243A] uppercase tracking-wider text-[11px] mb-3">
              Classes & Boards
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, classLevel: cls }));
                    navigateTo('explore');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#FAFAFC] border border-[#E8E8EE] hover:border-[#D0BFFF] text-[#24243A] font-medium"
                >
                  {cls}
                </button>
              ))}
              {['CBSE', 'ICSE'].map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setFilters((prev) => ({ ...prev, board: b }));
                    navigateTo('explore');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-[#FAFAFC] border border-[#E8E8EE] hover:border-[#D0BFFF] text-[#24243A] font-medium"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#F1F1F4] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 STUDO. Designed for school students. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#737386]">
            Crafted for pure focus and learning excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
