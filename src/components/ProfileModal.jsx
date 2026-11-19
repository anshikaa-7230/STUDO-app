import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, User, School, BookOpen, GraduationCap, Check, Clock } from 'lucide-react';

export default function ProfileModal() {
  const {
    studentProfile,
    setStudentProfile,
    profileModalOpen,
    setProfileModalOpen,
    learningHours,
    savedResourceIds,
    recentlyViewedResources,
    showToast
  } = useApp();

  const [formData, setFormData] = useState({ ...studentProfile });

  if (!profileModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentProfile(formData);
    setProfileModalOpen(false);
    showToast('Profile updated successfully', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#E8E8EE] shadow-2xl p-6 sm:p-7 relative space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F1F1F4]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E9E1FF] text-[#4919A4] font-extrabold flex items-center justify-center text-sm shadow-xs">
              {formData.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-bold text-[#24243A]">Student Profile</h3>
              <p className="text-xs text-[#737386]">Personalize your STUDO experience</p>
            </div>
          </div>

          <button
            onClick={() => setProfileModalOpen(false)}
            className="p-1.5 rounded-xl text-[#737386] hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick summary stats */}
        <div className="grid grid-cols-3 gap-2 bg-[#FAFAFC] p-3 rounded-2xl border border-[#E8E8EE] text-center">
          <div>
            <span className="text-[11px] text-[#737386] block">Class</span>
            <span className="text-xs font-extrabold text-[#24243A]">{formData.currentClass}</span>
          </div>
          <div className="border-x border-[#E8E8EE]">
            <span className="text-[11px] text-[#737386] block">Hours</span>
            <span className="text-xs font-extrabold text-[#025482]">{learningHours}h</span>
          </div>
          <div>
            <span className="text-[11px] text-[#737386] block">Saved</span>
            <span className="text-xs font-extrabold text-[#4919A4]">{savedResourceIds.length}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#24243A] mb-1.5">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#737386] absolute left-3 top-3" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6] focus:ring-2 focus:ring-[#E9E1FF]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#24243A] mb-1.5">School / Institution</label>
            <div className="relative">
              <School className="w-4 h-4 text-[#737386] absolute left-3 top-3" />
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6] focus:ring-2 focus:ring-[#E9E1FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-[#24243A] mb-1.5">Class</label>
              <select
                value={formData.currentClass}
                onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6]"
              >
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#24243A] mb-1.5">Board</label>
              <select
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6]"
              >
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#24243A] mb-1.5">Stream / Specialization</label>
            <input
              type="text"
              value={formData.stream}
              onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#FAFAFC] border border-[#E8E8EE] rounded-xl text-xs font-semibold text-[#24243A] focus:border-[#6941C6]"
              placeholder="e.g. Science (PCM + CS)"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setProfileModalOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-[#E8E8EE] text-xs font-bold text-[#737386] hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#24243A] text-white text-xs font-bold shadow-subtle hover:bg-black transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
