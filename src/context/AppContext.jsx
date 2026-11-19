import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_RESOURCES, INITIAL_STUDENT_PROFILE } from '../data/resources';

const AppContext = createContext();

const STORAGE_KEY_SAVED = 'studo_saved_resources_v1';
const STORAGE_KEY_RECENT = 'studo_recently_viewed_v1';
const STORAGE_KEY_PROFILE = 'studo_student_profile_v1';
const STORAGE_KEY_STATS = 'studo_learning_stats_v1';

export function AppProvider({ children }) {
  // Screens: 'dashboard' | 'explore' | 'details' | 'saved'
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [activeResourceId, setActiveResourceId] = useState(null);

  // Resources state (allowing additions/updates if needed)
  const [resources] = useState(INITIAL_RESOURCES);

  // Saved resources (stored as an array of IDs in localStorage)
  const [savedResourceIds, setSavedResourceIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_SAVED);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading saved resources', e);
    }
    // Default initial saved resources for nice initial state
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

  // Student profile
  const [studentProfile, setStudentProfile] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error('Error loading profile', e);
    }
    return INITIAL_STUDENT_PROFILE;
  });

  // Learning stats
  const [learningHours, setLearningHours] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_STATS);
      if (stored) return Number(JSON.parse(stored).learningHours || 42.5);
    } catch (e) {
      console.error('Error loading stats', e);
    }
    return 42.5;
  });

  // Search & Filters for Screen 2 (Explore)
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    classLevel: 'All', // 'All' | 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12'
    board: 'All',      // 'All' | 'CBSE' | 'ICSE' | 'State Board'
    subject: 'All',    // 'All' | 'Mathematics' | 'Physics' | ...
    resourceType: 'All', // 'All' | 'Notes and PDFs' | 'Video Lectures' | ...
    difficulty: 'All'  // 'All' | 'Beginner' | 'Intermediate' | 'Advanced'
  });
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'az' | 'rating'

  // Mobile drawer / modal controls
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify(savedResourceIds));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [savedResourceIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(recentlyViewedIds));
    } catch (e) {
      console.error('Failed to save recent to localStorage', e);
    }
  }, [recentlyViewedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(studentProfile));
    } catch (e) {
      console.error('Failed to save profile to localStorage', e);
    }
  }, [studentProfile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_STATS, JSON.stringify({ learningHours }));
    } catch (e) {
      console.error('Failed to save stats to localStorage', e);
    }
  }, [learningHours]);

  // Show temporary toast
  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((current) => (current && current.message === message ? null : current));
    }, 3200);
  };

  // Navigation handlers
  const navigateTo = (screen, resourceId = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (screen === 'details' && resourceId) {
      setActiveResourceId(resourceId);
      // Track recently viewed
      setRecentlyViewedIds((prev) => {
        const filtered = prev.filter((id) => id !== resourceId);
        return [resourceId, ...filtered].slice(0, 8);
      });
      // Increment minor learning activity
      setLearningHours((h) => Number((h + 0.2).toFixed(1)));
    }
    setCurrentScreen(screen);
    setMobileMenuOpen(false);
  };

  // Open resource shortcut
  const openResource = (resourceId) => {
    navigateTo('details', resourceId);
  };

  // Toggle Save/Bookmark
  const toggleSaveResource = (resourceId, e) => {
    if (e) e.stopPropagation();
    const isSaved = savedResourceIds.includes(resourceId);
    const targetResource = resources.find((r) => r.id === resourceId);
    const resourceTitle = targetResource ? targetResource.title : 'Resource';

    if (isSaved) {
      setSavedResourceIds((prev) => prev.filter((id) => id !== resourceId));
      showToast(`Removed from My Saved Resources`, 'neutral');
    } else {
      setSavedResourceIds((prev) => [...prev, resourceId]);
      showToast(`Saved to My Resources`, 'success');
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

  // Select subject filter and jump to explore
  const selectSubjectAndExplore = (subjectName) => {
    clearFilters();
    setFilters((prev) => ({ ...prev, subject: subjectName }));
    navigateTo('explore');
  };

  // Select category filter and jump to explore
  const selectCategoryAndExplore = (categoryType) => {
    setFilters((prev) => ({ ...prev, resourceType: categoryType }));
    navigateTo('explore');
  };

  // Active resource object
  const activeResource = resources.find((r) => r.id === activeResourceId) || resources[0];

  // Saved resources objects
  const savedResources = resources.filter((r) => savedResourceIds.includes(r.id));

  // Recently viewed resources objects
  const recentlyViewedResources = recentlyViewedIds
    .map((id) => resources.find((r) => r.id === id))
    .filter(Boolean);

  // Distinct subjects currently learning based on saved + recently viewed
  const activeSubjectsLearning = Array.from(
    new Set([...savedResources, ...recentlyViewedResources].map((r) => r.subject))
  );

  return (
    <AppContext.Provider
      value={{
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
