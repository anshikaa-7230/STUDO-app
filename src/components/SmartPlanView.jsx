import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SYLLABUS_DATA, generateSmartPlan } from '../data/syllabus';
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Target,
  BookOpen,
  Filter,
  Check,
  ChevronRight,
  ChevronDown,
  Layers,
  ArrowRight,
  Flame,
  Award,
  Zap,
  Printer
} from 'lucide-react';

export default function SmartPlanView() {
  const { studentProfile, smartPlan, setSmartPlan, showToast, navigateTo } = useApp();

  // Wizard or Active Plan View
  const [isConfiguring, setIsConfiguring] = useState(!smartPlan);

  // Form State
  const [classLevel, setClassLevel] = useState(studentProfile.currentClass || 'Class 12');
  const [board, setBoard] = useState(studentProfile.board || 'CBSE');
  const [selectedSubjects, setSelectedSubjects] = useState(['Mathematics', 'Physics', 'Chemistry']);
  const [examDate, setExamDate] = useState(() => {
    // Default to ~45 days from today
    const d = new Date();
    d.setDate(d.getDate() + 45);
    return d.toISOString().split('T')[0];
  });
  const [dailyHours, setDailyHours] = useState(4);
  const [prepLevel, setPrepLevel] = useState('Intermediate');
  const [mode, setMode] = useState('Balanced Preparation'); // 'Balanced Preparation' | 'High-Priority Preparation' | 'Last-Minute Revision'
  const [studyTimePreference, setStudyTimePreference] = useState('Evening');
  const [weakSubjects, setWeakSubjects] = useState(['Physics']);
  const [chapterStatus, setChapterStatus] = useState({}); // { [chapId]: 'completed' | 'in_progress' | 'not_started' }

  // Active filter tab in schedule view: 'all' | 'today' | 'upcoming'
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  // Available subjects for selected class
  const availableSubjects = Object.keys(SYLLABUS_DATA[classLevel] || SYLLABUS_DATA['Class 12']);

  const toggleSubject = (subj) => {
    if (selectedSubjects.includes(subj)) {
      if (selectedSubjects.length === 1) return;
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subj));
    } else {
      setSelectedSubjects([...selectedSubjects, subj]);
    }
  };

  const toggleWeakSubject = (subj) => {
    if (weakSubjects.includes(subj)) {
      setWeakSubjects(weakSubjects.filter((s) => s !== subj));
    } else {
      setWeakSubjects([...weakSubjects, subj]);
    }
  };

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    const newPlan = generateSmartPlan({
      classLevel,
      board,
      selectedSubjects,
      examDate,
      chapterStatus,
      weakSubjects,
      dailyHours,
      prepLevel,
      mode,
      studyTimePreference
    });

    setSmartPlan(newPlan);
    setIsConfiguring(false);
    setActiveDayIndex(0);
    showToast('STUDO SmartPlan AI generated your personalized timetable!', 'success');
  };

  // Toggle task completion
  const handleToggleTask = (dayIdx, taskId) => {
    if (!smartPlan) return;
    const updatedDays = smartPlan.dailyPlans.map((day, dIdx) => {
      if (dIdx !== dayIdx) return day;
      return {
        ...day,
        tasks: day.tasks.map((task) => {
          if (task.id !== taskId) return task;
          return { ...task, completed: !task.completed };
        })
      };
    });

    const updatedPlan = {
      ...smartPlan,
      dailyPlans: updatedDays
    };

    setSmartPlan(updatedPlan);
  };

  // Print or export plan
  const handlePrint = () => {
    window.print();
  };

  // Calculate overall completion
  const totalTasks = smartPlan ? smartPlan.dailyPlans.reduce((acc, d) => acc + d.tasks.length, 0) : 0;
  const completedTasks = smartPlan ? smartPlan.dailyPlans.reduce((acc, d) => acc + d.tasks.filter((t) => t.completed).length, 0) : 0;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-500/10 dark:border dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-300" />
            <span>AI Examination Planner</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            STUDO SmartPlan AI
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Generate personalized, curriculum-aligned preparation timetables. Prioritize weak chapters,
            track daily practice sessions, and stay ready for your board examinations.
          </p>
        </div>

        {smartPlan && (
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsConfiguring(!isConfiguring)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{isConfiguring ? 'View Active Plan' : 'Adjust / Regenerate'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-white/15 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Print / Save Timetable"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* CONFIGURATION / GENERATOR FORM */}
      {isConfiguring ? (
        <form onSubmit={handleGenerate} className="glass-card rounded-3xl p-6 sm:p-8 space-y-8 border border-slate-200/80 dark:border-white/10">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Configure Your Target Schedule</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Provide your study parameters so our AI engine can balance concept mastery, revision and timed question sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Class & Board */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                <span>1. Academic Target</span>
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Class Level</label>
                <select
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold focus:border-cyan-400"
                >
                  <option value="Class 12">Class 12 (Board Prep)</option>
                  <option value="Class 11">Class 11 (Foundations)</option>
                  <option value="Class 10">Class 10 (Board Prep)</option>
                  <option value="Class 9">Class 9 (Foundations)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Education Board</label>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold focus:border-cyan-400"
                >
                  <option value="CBSE">CBSE (NCERT Blueprint)</option>
                  <option value="ICSE">ICSE / ISC</option>
                  <option value="State Board">State Board</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Examination Date</label>
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold focus:border-cyan-400"
                />
              </div>
            </div>

            {/* 2. Subjects & Weak Areas */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>2. Subjects & Priorities</span>
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subjects to Include</label>
                <div className="flex flex-wrap gap-1.5">
                  {availableSubjects.map((subj) => {
                    const isSelected = selectedSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => toggleSubject(subj)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-950 shadow-sm'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-cyan-400/30'
                        }`}
                      >
                        {subj}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Weak Subjects / Areas <span className="text-amber-600 dark:text-amber-300 text-[10px]">(Gets 40% more revision time)</span>
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSubjects.map((subj) => {
                    const isWeak = weakSubjects.includes(subj);
                    return (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => toggleWeakSubject(subj)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                          isWeak
                            ? 'bg-amber-400 text-slate-950 font-bold'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                        }`}
                      >
                        {subj}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Planning Mode & Preferences */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
                <Flame className="w-4 h-4" />
                <span>3. Study Modes & Hours</span>
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Daily Available Study Time: <strong className="text-cyan-600 dark:text-cyan-300">{dailyHours} hours/day</strong>
                </label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  step="0.5"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span>2 hrs (Light)</span>
                  <span>4 hrs (Ideal)</span>
                  <span>8 hrs (Intense)</span>
                </div>
              </div>

              {/* THREE PLANNING MODES (Requirement Part 6) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Planning Mode</label>
                <div className="space-y-2">
                  {[
                    {
                      id: 'Balanced Preparation',
                      title: 'Balanced Preparation',
                      desc: 'Steady coverage of concepts, derivations, and regular practice.'
                    },
                    {
                      id: 'High-Priority Preparation',
                      title: 'High-Priority Preparation',
                      desc: 'Focuses heavily on high-weightage chapters and weak areas first.'
                    },
                    {
                      id: 'Last-Minute Revision',
                      title: 'Last-Minute Revision',
                      desc: 'Fast formula sheets, past 5-year PYQs, and high-yield mocks.'
                    }
                  ].map((m) => {
                    const isSelected = mode === m.id;
                    return (
                      <div
                        key={m.id}
                        onClick={() => setMode(m.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 text-slate-900 dark:text-white'
                            : 'border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{m.title}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{m.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Generator Button */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              * Official chapter weightage estimates based on verified CBSE/NCERT guidelines.
            </p>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate SmartPlan AI Timetable</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        /* ACTIVE SMARTPLAN SCHEDULE DISPLAY */
        <div className="space-y-6">
          {/* Plan Meta Banner & Progress */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* 1. Progress Ring Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 flex items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200 dark:text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-cyan-500 dark:text-cyan-400 transition-all duration-700 ease-out"
                    strokeDasharray={`${progressPercent}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-xs font-black text-slate-900 dark:text-white">{progressPercent}%</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-700 dark:text-cyan-400">Plan Progress</span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {completedTasks} of {totalTasks} Tasks
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Completed on schedule</p>
              </div>
            </div>

            {/* 2. Mode Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Strategy Mode</span>
                <Flame className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mt-2">{smartPlan.meta.mode}</h4>
              <p className="text-[11px] text-cyan-700 dark:text-cyan-300 mt-1">{smartPlan.meta.dailyHours}h daily allocated</p>
            </div>

            {/* 3. Examination Countdown */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Exam Countdown</span>
                <Clock className="w-4 h-4 text-violet-500 dark:text-violet-400" />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mt-2">{smartPlan.meta.daysRemaining} Days</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{smartPlan.meta.board} • {smartPlan.meta.classLevel}</p>
            </div>

            {/* 4. Priority Chapters Focus */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">High-Yield Units</span>
                <Award className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mt-2">{smartPlan.chapterPriorities.length} Chapters</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Prioritized with syllabus weight</p>
            </div>
          </div>

          {/* Day Selector Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {smartPlan.dailyPlans.map((day, idx) => {
              const dayCompletedTasks = day.tasks.filter((t) => t.completed).length;
              const isAllDone = dayCompletedTasks === day.tasks.length && day.tasks.length > 0;
              const isSelected = activeDayIndex === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md'
                      : 'glass-card border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  <span>{day.dateString}</span>
                  {isAllDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-300" />
                  ) : (
                    <span className="text-[10px] opacity-70">
                      {dayCompletedTasks}/{day.tasks.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ACTIVE DAY TASKS LIST */}
          {smartPlan.dailyPlans[activeDayIndex] && (
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {smartPlan.dailyPlans[activeDayIndex].dateString}
                    </h3>
                    {smartPlan.dailyPlans[activeDayIndex].isToday && (
                      <span className="px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-400/20 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30 text-[10px] font-bold">
                        Today's Plan
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Check off completed sessions to keep your AI schedule adaptive.
                  </p>
                </div>

                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300">
                  {smartPlan.dailyPlans[activeDayIndex].tasks.filter((t) => t.completed).length} /{' '}
                  {smartPlan.dailyPlans[activeDayIndex].tasks.length} completed
                </span>
              </div>

              {/* Task Cards Grid */}
              <div className="space-y-3.5">
                {smartPlan.dailyPlans[activeDayIndex].tasks.map((task) => {
                  return (
                    <div
                      key={task.id}
                      onClick={() => handleToggleTask(activeDayIndex, task.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                        task.completed
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-500/30 opacity-75'
                          : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-cyan-400/40 hover:bg-slate-100 dark:hover:bg-white/10'
                      }`}
                    >
                      {/* Checkbox */}
                      <button
                        type="button"
                        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          task.completed
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'border border-slate-300 dark:border-white/20 hover:border-cyan-400'
                        }`}
                      >
                        {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                      </button>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                              task.type.includes('Practice')
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-300 border border-amber-200 dark:border-amber-400/30'
                                : task.type.includes('Formula')
                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-400/20 dark:text-purple-300 border border-purple-200 dark:border-purple-400/30'
                                : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-400/20 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-400/30'
                            }`}
                          >
                            {task.type}
                          </span>

                          <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {task.duration}
                          </span>
                        </div>

                        <h4
                          className={`text-sm sm:text-base font-bold mt-2 transition-all ${
                            task.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {task.title}
                        </h4>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{task.subtitle}</p>

                        {/* Verified Syllabus Topics */}
                        {task.keyTopics && task.keyTopics.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-slate-100 dark:border-white/5">
                            <span className="text-[10px] text-slate-500">Core Focus:</span>
                            {task.keyTopics.map((topic, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* High Priority Chapter Roadmap */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Curriculum Priority & Weightage Matrix</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Calculated based on verified CBSE / NCERT blueprints.
                </p>
              </div>
              <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">Official Estimates</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {smartPlan.chapterPriorities.map((ch, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-cyan-700 dark:text-cyan-300">{ch.subject}</span>
                    <span className="font-semibold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-400/10 px-1.5 py-0.5 rounded">
                      {ch.weightage}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{ch.name}</h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2">
                    {ch.topics.join(' • ')}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 italic pt-2">
              {smartPlan.disclaimer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
