import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  User,
  School,
  BookOpen,
  LogOut,
  Palette,
  Check,
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function ProfileModal() {
  const {
    studentProfile,
    setStudentProfile,
    currentUser,
    profileModalOpen,
    setProfileModalOpen,
    learningHours,
    savedResourceIds,
    theme,
    setTheme,
    logout,
    showToast
  } = useApp();

  const [formData, setFormData] = useState({
    name: studentProfile.name || (currentUser ? currentUser.name : ''),
    school: studentProfile.school || (currentUser ? currentUser.school : ''),
    currentClass: studentProfile.currentClass || 'Class 12',
    board: studentProfile.board || 'CBSE',
    stream: studentProfile.stream || 'Science'
  });

  if (!profileModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentProfile((prev) => ({
      ...prev,
      ...formData
    }));
    setProfileModalOpen(false);
    showToast('Profile updated successfully!', 'success');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md glass-card rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/10 text-white space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-violet-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-glow-cyan">
              {formData.name ? formData.name.charAt(0).toUpperCase() : 'S'}
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Student Space Settings</h3>
              <p className="text-xs text-slate-400">Personalize your STUDO preferences</p>
            </div>
          </div>

          <button
            onClick={() => setProfileModalOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close profile modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Stats Badges */}
        <div className="grid grid-cols-3 gap-2 bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Class</span>
            <span className="text-xs font-black text-cyan-300">{formData.currentClass}</span>
          </div>
          <div className="border-x border-white/10">
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Study Time</span>
            <span className="text-xs font-black text-amber-300">{learningHours}h</span>
          </div>
          <div>
            <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Saved</span>
            <span className="text-xs font-black text-violet-300">{savedResourceIds.length}</span>
          </div>
        </div>

        {/* THEME SWITCHER (Requirement Part 4) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
            <Palette className="w-4 h-4" />
            <span>Select Platform Theme</span>
          </label>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setTheme('cosmic')}
              className={`p-3 rounded-xl border text-left transition-all ${
                theme === 'cosmic'
                  ? 'border-cyan-400 bg-cyan-500/15 text-white shadow-glow-cyan ring-1 ring-cyan-400'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300">Cosmic</span>
                {theme === 'cosmic' && <Check className="w-3.5 h-3.5 text-cyan-400 stroke-[3]" />}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Midnight & Neon</p>
            </button>

            <button
              type="button"
              onClick={() => setTheme('aurora')}
              className={`p-3 rounded-xl border text-left transition-all ${
                theme === 'aurora'
                  ? 'border-purple-300 bg-purple-500/15 text-white shadow-glow-violet ring-1 ring-purple-300'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-200">Aurora</span>
                {theme === 'aurora' && <Check className="w-3.5 h-3.5 text-purple-300 stroke-[3]" />}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Pastel & Glass</p>
            </button>
          </div>
        </div>

        {/* Profile Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-slate-300 mb-1">Student Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-white focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-300 mb-1">School / Institution</label>
            <div className="relative">
              <School className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                placeholder="e.g. Modern School"
                className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-white focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-300 mb-1">Class</label>
              <select
                value={formData.currentClass}
                onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-xs font-medium text-white focus:border-cyan-400"
              >
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-300 mb-1">Board</label>
              <select
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-xs font-medium text-white focus:border-cyan-400"
              >
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
              </select>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <button
              type="button"
              onClick={handleLogout}
              className="px-3 py-2 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="px-3.5 py-2 rounded-xl text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
