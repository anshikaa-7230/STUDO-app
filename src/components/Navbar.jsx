import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Compass,
  Bookmark,
  User,
  Bell,
  Menu,
  X,
  Sparkles,
  Layers,
  ChevronRight,
  Sun,
  Moon,
  LogIn,
  UserPlus,
  Palette
} from 'lucide-react';

export default function Navbar() {
  const {
    currentScreen,
    navigateTo,
    savedResourceIds,
    studentProfile,
    currentUser,
    isLoggedIn,
    setAuthModalMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    setProfileModalOpen,
    theme,
    toggleTheme,
    replayIntro
  } = useApp();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const notifications = [
    {
      id: 1,
      title: 'New CBSE Class 12 Sample Paper added',
      time: '2 hours ago',
      badge: 'Mathematics',
      badgeColor: '#E9E1FF'
    },
    {
      id: 2,
      title: 'SmartPlan AI: Next session starts in 30 mins',
      time: 'Just now',
      badge: 'SmartPlan',
      badgeColor: '#DCEEFF'
    },
    {
      id: 3,
      title: 'Weekly study goal reached: 14+ hours recorded!',
      time: 'Yesterday',
      badge: 'Achievement',
      badgeColor: '#DDF3E7'
    }
  ];

  const handleNotificationClick = () => {
    setNotificationOpen(!notificationOpen);
    if (unreadCount > 0) setUnreadCount(0);
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Layers },
    { id: 'explore', label: 'Explore Resources', icon: Compass },
    { id: 'smartplan', label: 'SmartPlan AI', icon: Sparkles, isAi: true },
    {
      id: 'saved',
      label: 'My Saved',
      icon: Bookmark,
      badgeCount: savedResourceIds.length
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 glass-panel border-b border-slate-200/80 dark:border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Left: STUDO Brand */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('dashboard')}
                className="flex items-center gap-3 group text-left focus:outline-none"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 to-violet-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-glow-cyan group-hover:scale-105 transition-transform">
                  <span>S</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
                      STUDO
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                      AI Powered
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                    Think. Discover. Achieve.
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-slate-950 shadow-md dark:shadow-glow-cyan'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white dark:text-slate-950' : item.isAi ? 'text-violet-600 dark:text-cyan-400' : 'text-current'}`} />
                    <span>{item.label}</span>
                    {item.isAi && !isActive && (
                      <span className="px-1.5 py-0.2 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-400/20 dark:text-cyan-300 text-[9px] font-extrabold border border-cyan-200 dark:border-cyan-400/30">
                        AI
                      </span>
                    )}
                    {typeof item.badgeCount === 'number' && item.badgeCount > 0 && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                          isActive ? 'bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950' : 'bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-cyan-300'
                        }`}
                      >
                        {item.badgeCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Theme Switcher, Intro Replay, Notifications, Auth/Profile */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Theme Toggle Button (Cosmic vs Aurora) */}
              <button
                onClick={toggleTheme}
                title={`Switch Theme (Current: ${theme === 'cosmic' ? 'Cosmic' : 'Aurora'})`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white text-xs font-semibold transition-all focus:outline-none"
              >
                {theme === 'cosmic' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="hidden lg:inline text-[11px]">Cosmic</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span className="hidden lg:inline text-[11px] font-bold text-slate-800">Aurora</span>
                  </>
                )}
              </button>

              {/* Replay Opening Animation */}
              <button
                onClick={replayIntro}
                title="Watch Opening Hologram"
                aria-label="Replay Opening Hologram Animation"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus:outline-none"
              >
                <Sparkles className="w-4 h-4 text-violet-500 dark:text-violet-400" />
              </button>

              {/* Notification Bell */}
              <div className="relative">
                <button
                  onClick={handleNotificationClick}
                  aria-label="View notifications"
                  className="relative p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus:outline-none"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-950 text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Panel */}
                {notificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 glass-card rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 p-4 z-50 animate-fade-in text-slate-900 dark:text-white">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">Notifications</h4>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">3 updates</span>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-white/5 mt-2 max-h-72 overflow-y-auto">
                      {notifications.map((n) => (
                        <div key={n.id} className="py-2.5 px-2 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md text-slate-900 border border-slate-200/60"
                              style={{ backgroundColor: n.badgeColor }}
                            >
                              {n.badge}
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{n.time}</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1.5">{n.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-center">
                      <button
                        onClick={() => {
                          setNotificationOpen(false);
                          navigateTo('explore');
                        }}
                        className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:underline"
                      >
                        Explore all newly added resources →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* AUTH / PROFILE PILL */}
              {isLoggedIn && currentUser ? (
                <button
                  onClick={() => setProfileModalOpen(true)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 hover:bg-slate-200/80 dark:bg-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 text-white font-bold text-xs flex items-center justify-center">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 leading-tight">
                      {currentUser.name.split(' ')[0]}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                      {currentUser.currentClass} • {currentUser.board}
                    </p>
                  </div>
                </button>
              ) : (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setAuthModalMode('login')}
                    className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setAuthModalMode('signup')}
                    className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-slate-950 text-xs font-bold shadow-md dark:shadow-glow-cyan hover:opacity-95 transition-all"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Get Started</span>
                  </button>
                </div>
              )}

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-white/10 glass-panel px-4 pt-3 pb-6 shadow-2xl animate-fade-in text-slate-900 dark:text-white">
            {isLoggedIn && currentUser ? (
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  setProfileModalOpen(true);
                }}
                className="flex items-center gap-3 p-3 mb-3 bg-slate-100/80 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 text-white font-bold text-sm flex items-center justify-center">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{currentUser.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {currentUser.currentClass} • {currentUser.board}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            ) : (
              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalMode('login');
                  }}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white text-xs font-bold text-center"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalMode('signup');
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-slate-950 text-xs font-bold text-center"
                >
                  Get Started
                </button>
              </div>
            )}

            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-slate-950 font-bold shadow-md'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.isAi && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-400/20 dark:text-cyan-300 font-bold">
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Thumb Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-slate-200 dark:border-white/10 px-3 py-2 flex items-center justify-around shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="flex flex-col items-center gap-1 py-1 px-2.5 relative focus:outline-none"
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-950' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-[9px] font-bold tracking-tight ${
                  isActive ? 'text-cyan-700 dark:text-cyan-300' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {item.id === 'dashboard'
                  ? 'Home'
                  : item.id === 'explore'
                    ? 'Explore'
                  : item.id === 'smartplan'
                  ? 'SmartPlan'
                  : 'Saved'}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => (isLoggedIn ? setProfileModalOpen(true) : setAuthModalMode('login'))}
          className="flex flex-col items-center gap-1 py-1 px-2.5 focus:outline-none"
        >
          <div className="p-1.5 rounded-xl text-slate-500 dark:text-slate-400">
            <User className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400">
            {isLoggedIn ? 'Profile' : 'Log In'}
          </span>
        </button>
      </nav>
    </>
  );
}
