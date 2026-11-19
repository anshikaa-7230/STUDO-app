import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ExploreView from './components/ExploreView';
import ResourceDetails from './components/ResourceDetails';
import SavedResourcesView from './components/SavedResourcesView';
import ProfileModal from './components/ProfileModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import CinematicIntro from './components/CinematicIntro';

function MainLayout() {
  const { currentScreen, showIntro, setShowIntro } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-[#24243A] pb-16 md:pb-0">
      {/* 2-3s Cinematic Opening Animation */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      <Navbar />

      <main className="flex-1">
        {currentScreen === 'dashboard' && <Dashboard />}
        {currentScreen === 'explore' && <ExploreView />}
        {currentScreen === 'details' && <ResourceDetails />}
        {currentScreen === 'saved' && <SavedResourcesView />}
      </main>

      <Footer />
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
