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
  CheckCircle2,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const {
    currentScreen,
    navigateTo,
    savedResourceIds,
    studentProfile,
    mobileMenuOpen,
    setMobileMenuOpen,
    setProfileModalOpen,
    replayIntro
  } = useApp();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const notifications = [
    {
      id: 1,
      title: 'New CBSE Class 12 Sample Paper added',
      time: '2 hours ago',
      read: false,
      badge: 'Mathematics',
      badgeColor: '#E9E1FF'
    },
    {
      id: 2,
      title: 'Revision checkpoint: Electrostatics formulas',
      time: 'Yesterday',
      read: false,
      badge: 'Physics',
      badgeColor: '#DCEEFF'
    },
    {
      id: 3,
      title: 'Weekly study goal reached: 40+ hours!',
      time: '3 days ago',
      read: true,
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
    {
      id: 'saved',
      label: 'My Saved Resources',
      icon: Bookmark,
      badgeCount: savedResourceIds.length
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E8E8EE] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Left: STUDO Brand */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('dashboard')}
                className="flex items-center gap-3 group text-left focus:outline-none"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#24243A] text-white flex items-center justify-center font-bold text-xl shadow-subtle group-hover:scale-105 transition-transform">
                  <span className="bg-gradient-to-tr from-[#E9E1FF] via-[#DCEEFF] to-[#FFF0C9] bg-clip-text text-transparent">
                    S
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold tracking-tight text-[#24243A]">
                      STUDO
                    </span>
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-[#E9E1FF] text-[#4919A4]">
                      CBSE 9–12
                    </span>
                  </div>
                  <p className="text-[11px] text-[#737386] font-medium tracking-wide">
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
                    className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-[#24243A] text-white shadow-subtle'
                        : 'text-[#737386] hover:text-[#24243A] hover:bg-slate-100/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#E9E1FF]' : 'text-current'}`} />
                    <span>{item.label}</span>
                    {typeof item.badgeCount === 'number' && item.badgeCount > 0 && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#E9E1FF] text-[#4919A4]'
                        }`}
                      >
                        {item.badgeCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Intro Replay, Notifications & Profile */}
            <div className="flex items-center gap-2.5">
              {/* Cinematic Intro Replay Button */}
              <button
                onClick={replayIntro}
                title="Play Cinematic Opening"
                aria-label="Play Cinematic Opening Animation"
                className="p-2.5 rounded-xl border border-[#E8E8EE] bg-white text-[#737386] hover:text-[#4919A4] hover:bg-[#E9E1FF]/40 transition-colors focus:outline-none"
              >
                <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              </button>

              {/* Notification Bell Dropdown */}
              <div className="relative">
                <button
                  onClick={handleNotificationClick}
                  aria-label="View notifications"
                  className="relative p-2.5 rounded-xl border border-[#E8E8EE] bg-white text-[#24243A] hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B6B] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Panel */}
                {notificationOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-popover border border-[#E8E8EE] p-4 z-50 animate-fade-in">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E8E8EE]">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-[#24243A]" />
                        <h4 className="text-sm font-bold text-[#24243A]">Notifications</h4>
                      </div>
                      <span className="text-xs text-[#737386]">3 updates</span>
                    </div>

                    <div className="divide-y divide-[#F1F1F4] mt-2 max-h-72 overflow-y-auto">
                      {notifications.map((n) => (
                        <div key={n.id} className="py-2.5 px-2 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="flex items-start justify-between gap-2">
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                              style={{ backgroundColor: n.badgeColor, color: '#24243A' }}
                            >
                              {n.badge}
                            </span>
                            <span className="text-[10px] text-[#737386]">{n.time}</span>
                          </div>
                          <p className="text-xs font-semibold text-[#24243A] mt-1.5">{n.title}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#E8E8EE] text-center">
                      <button
                        onClick={() => {
                          setNotificationOpen(false);
                          navigateTo('explore');
                        }}
                        className="text-xs font-bold text-[#4919A4] hover:underline"
                      >
                        Explore all newly added resources →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Student Profile Pill */}
              <button
                onClick={() => setProfileModalOpen(true)}
                className="hidden sm:flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-xl border border-[#E8E8EE] bg-white hover:border-[#D0BFFF] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E9E1FF] text-[#4919A4] font-bold text-xs flex items-center justify-center">
                  {studentProfile.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#24243A] group-hover:text-[#4919A4] leading-tight">
                    {studentProfile.name.split(' ')[0]}
                  </p>
                  <p className="text-[10px] text-[#737386] font-medium leading-tight">
                    {studentProfile.currentClass} • {studentProfile.board}
                  </p>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2.5 rounded-xl border border-[#E8E8EE] bg-white text-[#24243A] hover:bg-slate-50"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E8E8EE] bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            {/* Student quick info in mobile menu */}
            <div
              onClick={() => {
                setMobileMenuOpen(false);
                setProfileModalOpen(true);
              }}
              className="flex items-center gap-3 p-3 mb-3 bg-[#FAFAFC] rounded-2xl border border-[#E8E8EE] cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E9E1FF] text-[#4919A4] font-bold text-sm flex items-center justify-center">
                {studentProfile.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#24243A]">{studentProfile.name}</p>
                <p className="text-xs text-[#737386]">
                  {studentProfile.currentClass} • {studentProfile.board} • {studentProfile.stream}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#737386]" />
            </div>

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
                        ? 'bg-[#24243A] text-white shadow-subtle'
                        : 'text-[#24243A] hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-[#E9E1FF]' : 'text-[#737386]'}`} />
                      <span>{item.label}</span>
                    </div>
                    {typeof item.badgeCount === 'number' && item.badgeCount > 0 && (
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-[#E9E1FF] text-[#4919A4]'
                        }`}
                      >
                        {item.badgeCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Navigation Bar for quick thumb navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E8EE] px-4 py-2 flex items-center justify-around shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className="flex flex-col items-center gap-1 py-1 px-3 relative focus:outline-none"
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? 'bg-[#24243A] text-white' : 'text-[#737386]'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`text-[10px] font-bold tracking-tight ${
                  isActive ? 'text-[#24243A]' : 'text-[#737386]'
                }`}
              >
                {item.id === 'dashboard'
                  ? 'Home'
                  : item.id === 'explore'
                  ? 'Explore'
                  : 'Saved'}
              </span>
              {typeof item.badgeCount === 'number' && item.badgeCount > 0 && item.id === 'saved' && (
                <span className="absolute top-0.5 right-2 w-4 h-4 bg-[#6941C6] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {item.badgeCount}
                </span>
              )}
            </button>
          );
        })}

        <button
          onClick={() => setProfileModalOpen(true)}
          className="flex flex-col items-center gap-1 py-1 px-3 focus:outline-none"
        >
          <div className="p-1.5 rounded-xl text-[#737386]">
            <User className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-[#737386]">Profile</span>
        </button>
      </nav>
    </>
  );
}
