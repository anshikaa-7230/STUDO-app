import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_RESOURCES, INITIAL_STUDENT_PROFILE } from '../data/resources';
import {
  getActiveSession,
  loginUser as apiLoginUser,
  registerUser as apiRegisterUser,
  logoutUser as apiLogoutUser
} from '../utils/auth';

const AppContext = createContext();

const STORAGE_KEY_SAVED = 'studo_saved_resources_v2';
const STORAGE_KEY_RECENT = 'studo_recently_viewed_v2';
const STORAGE_KEY_THEME = 'studo_theme_v2';
const STORAGE_KEY_STATS = 'studo_learning_stats_v2';
const STORAGE_KEY_SMARTPLAN = 'studo_smartplan_v2';
const STORAGE_KEY_BADGES = 'studo_badges_v2';

export function AppProvider({ children }) {
  // Theme state: 'cosmic' | 'aurora' (default: 'cosmic' for futuristic visual identity)
  const [theme, setThemeState] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_THEME);
      if (stored === 'aurora' || stored === 'cosmic') return stored;
    } catch (e) {
      console.error('Error loading theme', e);
    }
    return 'cosmic';
  });

  // Apply data-theme to HTML tag and sync dark class
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'cosmic') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error('Error setting theme', e);
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    if (newTheme === 'cosmic' || newTheme === 'aurora') {
      setThemeState(newTheme);
      showToast(`Switched to ${newTheme === 'cosmic' ? 'Cosmic Midnight' : 'Aurora Pastel'} Theme`, 'info');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'cosmic' ? 'aurora' : 'cosmic');
  };

  // Screens: 'dashboard' | 'explore' | 'details' | 'saved' | 'smartplan'
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [activeResourceId, setActiveResourceId] = useState(null);

  // Cinematic Intro state (runs on first visit in session, with replay capability)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const viewed = sessionStorage.getItem('studo_intro_viewed_v2');
      return !viewed;
    } catch (e) {
      return true;
    }
  });

  const completeIntro = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('studo_intro_viewed_v2', 'true');
    } catch (e) {}
  };

  const replayIntro = () => {
    setShowIntro(true);
  };

  // Authentication & Current User State
  const [currentUser, setCurrentUser] = useState(() => {
    return getActiveSession();
  });

  const isLoggedIn = !!currentUser;

  // Student Profile state (derived from authenticated user, or empty guest)
  const [studentProfile, setStudentProfile] = useState(() => {
    const session = getActiveSession();
    if (session) {
      return {
        name: session.name,
        school: session.school || 'Secondary School',
        currentClass: session.currentClass || 'Class 12',
        board: session.board || 'CBSE',
        stream: session.stream || 'Science',
        avatarColor: '#E9E1FF'
      };
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Resources state
  const [resources] = useState(INITIAL_RESOURCES);

  // Saved resources (stored as an array of IDs in localStorage)
  const [savedResourceIds, setSavedResourceIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading saved resources', e);
    }
    return ['res-math-12-cont-diff', 'res-phys-12-electrostatics'];
  });

  // Recently viewed resources (array of IDs)
  const [recentlyViewedIds, setRecentlyViewedIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_RECENT);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading recently viewed', e);
    }
    return ['res-math-12-cont-diff'];
  });

  // Learning stats
  const [learningHours, setLearningHours] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_STATS);
      if (stored) return Number(JSON.parse(stored).learningHours || 14.5);
    } catch (e) {
      console.error('Error loading stats', e);
    }
    return 14.5;
  });

  // SmartPlan AI saved schedule
  const [smartPlan, setSmartPlan] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SMARTPLAN);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading smart plan', e);
    }
    return null;
  });

  // Modals & Panels
  const [authModalMode, setAuthModalMode] = useState(null); // 'login' | 'signup' | null
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Search & Filters for Screen 2 (Explore)
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    classLevel: 'All',
    board: 'All',
    subject: 'All',
    resourceType: 'All',
    difficulty: 'All'
  });
  const [sortBy, setSortBy] = useState('newest');

  // Persist storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(savedResourceIds));
    } catch (e) {}
  }, [savedResourceIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(recentlyViewedIds));
    } catch (e) {}
  }, [recentlyViewedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify({ learningHours }));
    } catch (e) {}
  }, [learningHours]);

  useEffect(() => {
    if (smartPlan) {
      try {
        localStorage.setItem(STORAGE_KEY_SMARTPLAN, JSON.stringify(smartPlan));
      } catch (e) {}
    }
  }, [smartPlan]);

  // Toast helper
  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((cur) => (cur && cur.message === message ? null : cur));
    }, 3200);
  };

  // Auth Handlers
  const handleLogin = async (email, password) => {
    const user = await apiLoginUser(email, password);
    setCurrentUser(user);
    setStudentProfile({
      name: user.name,
      school: user.school || 'Secondary School',
      currentClass: user.currentClass || 'Class 12',
      board: user.board || 'CBSE',
      stream: user.stream || 'Science',
      avatarColor: '#E9E1FF'
    });
    if (user.theme) {
      setThemeState(user.theme);
    }
    setAuthModalMode(null);
    showToast(`Welcome back, ${user.name}!`, 'success');
    return user;
  };

  const handleRegister = async (details) => {
    const user = await apiRegisterUser(details);
    setCurrentUser(user);
    setStudentProfile({
      name: user.name,
      school: user.school || 'Secondary School',
      currentClass: user.currentClass || 'Class 12',
      board: user.board || 'CBSE',
      stream: user.stream || 'Science',
      avatarColor: '#E9E1FF'
    });
    if (details.theme) {
      setThemeState(details.theme);
    }
    setAuthModalMode(null);
    showToast(`Account created! Welcome to STUDO, ${user.name}!`, 'success');
    return user;
  };

  const handleLogout = () => {
    apiLogoutUser();
    setCurrentUser(null);
    setStudentProfile(INITIAL_STUDENT_PROFILE);
    setProfileModalOpen(false);
    showToast('Logged out successfully.', 'info');
  };

  // Navigation handlers
  const navigateTo = (screen, resourceId = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (screen === 'details' && resourceId) {
      setActiveResourceId(resourceId);
      setRecentlyViewedIds((prev) => {
        const filtered = prev.filter((id) => id !== resourceId);
        return [resourceId, ...filtered].slice(0, 8);
      });
      setLearningHours((h) => Number((h + 0.2).toFixed(1)));
    }
    setCurrentScreen(screen);
    setMobileMenuOpen(false);
  };

  const openResource = (resourceId) => {
    navigateTo('details', resourceId);
  };

  // Toggle Save/Bookmark
  const toggleSaveResource = (resourceId, e) => {
    if (e) e.stopPropagation();
    const isSaved = savedResourceIds.includes(resourceId);
    if (isSaved) {
      setSavedResourceIds((prev) => prev.filter((id) => id !== resourceId));
      showToast('Removed from My Saved Resources', 'neutral');
    } else {
      setSavedResourceIds((prev) => [...prev, resourceId]);
      showToast('Saved to My Resources', 'success');
    }
  };

  // Clear filters
  const clearFilters = () => {
    setFilters({
      classLevel: 'All',
      board: 'All',
      subject: 'All',
      resourceType: 'All',
      difficulty: 'All'
    });
    setSearchQuery('');
  };

  const selectSubjectAndExplore = (subjectName) => {
    clearFilters();
    setFilters((prev) => ({ ...prev, subject: subjectName }));
    navigateTo('explore');
  };

  const selectCategoryAndExplore = (categoryType) => {
    setFilters((prev) => ({ ...prev, resourceType: categoryType }));
    navigateTo('explore');
  };

  // Computed state
  const activeResource = resources.find((r) => r.id === activeResourceId) || resources[0];
  const savedResources = resources.filter((r) => savedResourceIds.includes(r.id));
  const recentlyViewedResources = recentlyViewedIds
    .map((id) => resources.find((r) => r.id === id))
    .filter(Boolean);

  const activeSubjectsLearning = Array.from(
    new Set([...savedResources, ...recentlyViewedResources].map((r) => r.subject))
  );

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        currentUser,
        isLoggedIn,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        authModalMode,
        setAuthModalMode,
        currentScreen,
        setCurrentScreen,
        navigateTo,
        activeResourceId,
        activeResource,
        openResource,
        resources,
        savedResourceIds,
        savedResources,
        toggleSaveResource,
        recentlyViewedResources,
        recentlyViewedIds,
        studentProfile,
        setStudentProfile,
        learningHours,
        activeSubjectsLearning,
        smartPlan,
        setSmartPlan,
        searchQuery,
        setSearchQuery,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        clearFilters,
        selectSubjectAndExplore,
        selectCategoryAndExplore,
        mobileMenuOpen,
        setMobileMenuOpen,
        mobileFilterOpen,
        setMobileFilterOpen,
        profileModalOpen,
        setProfileModalOpen,
        showIntro,
        setShowIntro,
        completeIntro,
        replayIntro,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
