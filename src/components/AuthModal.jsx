import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  User,
  Mail,
  Lock,
  School,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Compass,
  Palette
} from 'lucide-react';

export default function AuthModal() {
  const { authModalMode, setAuthModalMode, login, register, theme, setTheme } = useApp();

  const [mode, setMode] = useState(authModalMode || 'login'); // 'login' | 'signup'
  const [step, setStep] = useState(1); // 1: credentials, 2: academics, 3: theme preview
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    school: '',
    currentClass: 'Class 12',
    board: 'CBSE',
    stream: 'Science (PCM + CS)',
    selectedTheme: theme || 'cosmic'
  });

  if (!authModalMode) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(formData.email, formData.password);
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setError('');

    if (step === 1) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        setError('Please enter your full name (minimum 2 characters).');
        return;
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!formData.password || formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSignupComplete = async () => {
    setError('');
    setLoading(true);
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        school: formData.school || 'Secondary High School',
        currentClass: formData.currentClass,
        board: formData.board,
        stream: formData.stream,
        theme: formData.selectedTheme
      });
    } catch (err) {
      setError(err.message || 'Registration failed.');
      setStep(1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 text-white overflow-hidden">
        {/* Glow decorative blobs */}
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-violet-600/15 blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={() => setAuthModalMode(null)}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 p-1 rounded-2xl bg-white/5 border border-white/10 w-fit">
          <button
            onClick={() => {
              setMode('login');
              setError('');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              mode === 'login'
                ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => {
              setMode('signup');
              setError('');
            }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              mode === 'signup'
                ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* LOGIN FORM */}
        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Access Your STUDO Space</h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your registered credentials to resume your personalized study plans.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="student@school.edu"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-cyan hover:opacity-95 transition-all disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Log In to STUDO'}
            </button>

            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">
                New to STUDO?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setStep(1);
                  }}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  Create an account
                </button>
              </p>
            </div>
          </form>
        ) : (
          /* ONBOARDING / SIGNUP MULTI-STEP WIZARD */
          <div>
            {/* Step Progress Pills */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-bold text-cyan-400">Step {step} of 3</span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      s === step ? 'w-6 bg-cyan-400' : s < step ? 'w-4 bg-emerald-400' : 'w-4 bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium">
                {error}
              </div>
            )}

            {/* STEP 1: Basic Identity */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">Create Your Student Account</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Your name will be displayed on your personal progress dashboard.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Diya Sengupta"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="diya@school.edu"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Create Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder="At least 6 characters"
                      required
                      className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan"
                >
                  <span>Continue to Academics</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* STEP 2: Academic Profile */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">Academic Details</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Customizes syllabus weightages and relevant resources.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">School / Institution</label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.school}
                      onChange={(e) => handleChange('school', e.target.value)}
                      placeholder="e.g. Kendriya Vidyalaya / Modern School"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Class</label>
                    <select
                      value={formData.currentClass}
                      onChange={(e) => handleChange('currentClass', e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-medium focus:border-cyan-400"
                    >
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Board</label>
                    <select
                      value={formData.board}
                      onChange={(e) => handleChange('board', e.target.value)}
                      className="w-full px-3 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs font-medium focus:border-cyan-400"
                    >
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Stream / Focus Area</label>
                  <input
                    type="text"
                    value={formData.stream}
                    onChange={(e) => handleChange('stream', e.target.value)}
                    placeholder="e.g. Science (PCM), Science (PCB), Commerce, General"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs font-medium focus:border-cyan-400"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-3 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/5"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan"
                  >
                    <span>Choose Visual Theme</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Theme Selection with Live Interactive Preview Cards */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">Select Your Visual Theme</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Choose your personalized aesthetic. You can change this anytime in Settings.
                  </p>
                </div>

                {/* THEME A: COSMIC PREVIEW CARD */}
                <div
                  onClick={() => handleChange('selectedTheme', 'cosmic')}
                  className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.selectedTheme === 'cosmic'
                      ? 'border-cyan-400 bg-slate-900/90 shadow-glow-cyan ring-1 ring-cyan-400'
                      : 'border-white/10 bg-slate-950/60 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-cyan-300">Theme A: Cosmic</span>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Futuristic
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Midnight navy, electric cyan, violet neon accents & dark glassmorphism.
                      </p>
                    </div>
                    {formData.selectedTheme === 'cosmic' && (
                      <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Micro color preview swatches */}
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
                    <span className="w-5 h-5 rounded-md bg-[#080B16] border border-white/20" title="Midnight Navy" />
                    <span className="w-5 h-5 rounded-md bg-[#06B6D4] shadow-sm" title="Electric Cyan" />
                    <span className="w-5 h-5 rounded-md bg-[#8B5CF6] shadow-sm" title="Violet Neon" />
                    <span className="text-[10px] text-slate-400 ml-1">Deep space contrast & neon glow</span>
                  </div>
                </div>

                {/* THEME B: AURORA PREVIEW CARD */}
                <div
                  onClick={() => handleChange('selectedTheme', 'aurora')}
                  className={`relative p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.selectedTheme === 'aurora'
                      ? 'border-violet-300 bg-slate-900/90 shadow-glow-violet ring-1 ring-violet-300'
                      : 'border-white/10 bg-slate-950/60 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-purple-200">Theme B: Aurora</span>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                          Soft Pastel
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Lavender, pastel pink, pearl white & elegant light glassmorphism.
                      </p>
                    </div>
                    {formData.selectedTheme === 'aurora' && (
                      <div className="w-5 h-5 rounded-full bg-purple-300 text-slate-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Micro color preview swatches */}
                  <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
                    <span className="w-5 h-5 rounded-md bg-[#FAFAFC] border border-slate-300" title="Pearl White" />
                    <span className="w-5 h-5 rounded-md bg-[#E9E1FF] border border-purple-300" title="Lavender" />
                    <span className="w-5 h-5 rounded-md bg-[#F8DFED] border border-pink-300" title="Pastel Pink" />
                    <span className="w-5 h-5 rounded-md bg-[#DDF3E7] border border-emerald-300" title="Mint" />
                    <span className="text-[10px] text-slate-400 ml-1">Light, calming & friendly</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-3 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold hover:bg-white/5"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSignupComplete}
                    disabled={loading}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-cyan hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Creating Space...' : 'Complete Setup & Launch'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
