import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ExploreView from './components/ExploreView';
import ResourceDetails from './components/ResourceDetails';
import SavedResourcesView from './components/SavedResourcesView';
import SmartPlanView from './components/SmartPlanView';
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import CinematicIntro from './components/CinematicIntro';

function MainLayout() {
  const { currentScreen, showIntro, completeIntro } = useApp();

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      {/* 2-3s Cinematic Opening Holographic Brain Animation */}
      {showIntro && (
        <CinematicIntro onComplete={completeIntro} />
      )}

      <Navbar />

      <main className="flex-1">
        {currentScreen === 'dashboard' && <Dashboard />}
        {currentScreen === 'explore' && <ExploreView />}
        {currentScreen === 'details' && <ResourceDetails />}
        {currentScreen === 'saved' && <SavedResourcesView />}
        {currentScreen === 'smartplan' && <SmartPlanView />}
      </main>

      <Footer />
      <AuthModal />
      <ProfileModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
