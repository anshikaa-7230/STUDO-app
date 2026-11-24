import React, { useState, useEffect } from 'react';

export default function CinematicIntro({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [stage, setStage] = useState(0); // 0: holographic brain materialized, 1: neural pulse, 2: brain opening, 3: logo & tagline reveal

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Sequence of holographic animation stages
    const timerStage1 = setTimeout(() => setStage(1), 500);  // Synaptic electric pulse
    const timerStage2 = setTimeout(() => setStage(2), 1100); // 3D Brain halves part
    const timerStage3 = setTimeout(() => setStage(3), 1800); // STUDO Logo & Tagline reveal
    const timerFade = setTimeout(() => setIsFadingOut(true), 2700); // Smooth dissolve
    const timerEnd = setTimeout(() => onComplete(), 3300); // Complete & unmount

    return () => {
      clearTimeout(timerStage1);
      clearTimeout(timerStage2);
      clearTimeout(timerStage3);
      clearTimeout(timerFade);
      clearTimeout(timerEnd);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060813] select-none overflow-hidden transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 45%, #131A36 0%, #080B18 60%, #03040A 100%)'
      }}
    >
      {/* Subtle Holographic Grid & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient neural blooms */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />

        {/* Golden core burst when brain opens */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-amber-400/20 blur-[80px] transition-all duration-1000 ${
            stage >= 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-50'
          }`}
        />

        {/* Floating cyber micro-particles */}
        <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/60 top-[18%] left-[22%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-violet-400/70 top-[28%] left-[78%] animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-purple-400/40 top-[72%] left-[16%] animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-300/60 top-[64%] left-[82%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-blue-300/50 top-[15%] left-[68%]" />

        {/* Subtle holographic concentric scanner rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-cyan-500/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-violet-500/15 border-dashed pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />
      </div>

      {/* Skip Intro Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 text-xs font-semibold backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg cursor-pointer"
        aria-label="Skip introductory animation"
      >
        <span>Skip Animation</span>
        <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>

      {/* 3D Holographic Brain & Floating Symbol Stage */}
      <div className="relative w-full max-w-[520px] h-[380px] flex items-center justify-center">
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full overflow-visible drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
          style={{ perspective: '1200px' }}
        >
          <defs>
            {/* Holographic Cyan & Electric Violet Gradients */}
            <linearGradient id="holoBrainLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="40%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>

            <linearGradient id="holoBrainRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>

            {/* Glowing Golden Trophy Gradient */}
            <linearGradient id="holoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="35%" stopColor="#FBBF24" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            {/* Holographic Cyan Glow Filter */}
            <filter id="holoGlowCyan" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="7" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>

            {/* Gold Shine Glow Filter */}
            <filter id="goldAura" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="9" result="goldGlow" />
              <feComposite in="SourceGraphic" in2="goldGlow" operator="over" />
            </filter>
          </defs>

          {/* Central Radiance Beam (Fires when brain opens) */}
          <g
            className={`transition-all duration-1000 ${
              stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transformOrigin: '300px 240px' }}
          >
            <circle cx="300" cy="240" r="75" fill="url(#holoGold)" opacity="0.22" filter="url(#goldAura)" />
            <line x1="300" y1="150" x2="300" y2="120" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <line x1="370" y1="180" x2="400" y2="160" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="230" y1="180" x2="200" y2="160" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          </g>

          {/* Center Golden Trophy / Achievement Core */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-50 translate-y-12'
            }`}
            style={{ transformOrigin: '300px 240px' }}
            filter="url(#goldAura)"
          >
            <path
              d="M 268 185 C 268 238, 332 238, 332 185 L 332 180 L 268 180 Z"
              fill="url(#holoGold)"
              stroke="#FFFBEB"
              strokeWidth="2"
            />
            <ellipse cx="300" cy="180" rx="32" ry="7" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
            {/* Handles */}
            <path d="M 268 190 C 244 190, 244 216, 272 222" fill="none" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 332 190 C 356 190, 356 216, 328 222" fill="none" stroke="#FBBF24" strokeWidth="4.5" strokeLinecap="round" />
            {/* Base */}
            <path d="M 295 235 L 305 235 L 303 260 L 297 260 Z" fill="#D97706" stroke="#FBBF24" strokeWidth="1.5" />
            <rect x="278" y="260" width="44" height="18" rx="4" fill="#78350F" stroke="#FBBF24" strokeWidth="1.5" />
            {/* Trophy Emblem Star */}
            <path d="M 300 196 L 302.5 204 L 310 204.5 L 304 209 L 306.5 217 L 300 212.5 L 293.5 217 L 296 209 L 290 204.5 L 297.5 204 Z" fill="#FFFFFF" />
          </g>

          {/* LEFT 3D HOLOGRAPHIC BRAIN HEMISPHERE */}
          <g
            className={`transition-all duration-1000 ease-in-out ${
              stage >= 2 ? '-translate-x-28 -rotate-6' : 'translate-x-0 rotate-0'
            }`}
            style={{ transformOrigin: '230px 240px' }}
            filter="url(#holoGlowCyan)"
          >
            {/* Cortex Outer Silhouette */}
            <path
              d="M 292 140
                 C 255 130, 205 130, 175 160
                 C 145 190, 145 230, 160 260
                 C 145 280, 150 315, 175 335
                 C 200 355, 240 355, 265 345
                 C 285 338, 292 315, 292 295
                 L 292 140 Z"
              fill="url(#holoBrainLeft)"
              stroke="#67E8F9"
              strokeWidth="3.5"
              strokeLinejoin="round"
              opacity="0.9"
            />

            {/* Neural Circuit Synapses & Gyral Lines */}
            <path
              d="M 230 148 C 210 165, 185 165, 178 185
                 M 270 170 C 235 180, 215 205, 175 210
                 M 288 208 C 255 210, 230 238, 185 242
                 M 285 248 C 255 248, 235 275, 195 285
                 M 255 288 C 240 315, 205 320, 195 332"
              fill="none"
              stroke="#CFFAFE"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity={stage >= 1 ? '1' : '0.6'}
            />

            {/* Glowing Synaptic Nodes */}
            <circle cx="215" cy="180" r="3.5" fill="#22D3EE" className="animate-pulse" />
            <circle cx="178" cy="245" r="3" fill="#A78BFA" />
            <circle cx="245" cy="285" r="3.5" fill="#67E8F9" className="animate-ping" style={{ animationDuration: '3s' }} />
          </g>

          {/* RIGHT 3D HOLOGRAPHIC BRAIN HEMISPHERE */}
          <g
            className={`transition-all duration-1000 ease-in-out ${
              stage >= 2 ? 'translate-x-28 rotate-6' : 'translate-x-0 rotate-0'
            }`}
            style={{ transformOrigin: '370px 240px' }}
            filter="url(#holoGlowCyan)"
          >
            {/* Cortex Outer Silhouette */}
            <path
              d="M 308 140
                 C 345 130, 395 130, 425 160
                 C 455 190, 455 230, 440 260
                 C 455 280, 450 315, 425 335
                 C 400 355, 360 355, 335 345
                 C 315 338, 308 315, 308 295
                 L 308 140 Z"
              fill="url(#holoBrainRight)"
              stroke="#A78BFA"
              strokeWidth="3.5"
              strokeLinejoin="round"
              opacity="0.9"
            />

            {/* Neural Circuit Synapses & Gyral Lines */}
            <path
              d="M 370 148 C 390 165, 415 165, 422 185
                 M 330 170 C 365 180, 385 205, 425 210
                 M 312 208 C 345 210, 370 238, 415 242
                 M 315 248 C 345 248, 365 275, 405 285
                 M 345 288 C 360 315, 395 320, 405 332"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity={stage >= 1 ? '1' : '0.6'}
            />

            {/* Glowing Synaptic Nodes */}
            <circle cx="385" cy="180" r="3.5" fill="#C084FC" className="animate-pulse" />
            <circle cx="422" cy="245" r="3" fill="#22D3EE" />
            <circle cx="355" cy="285" r="3.5" fill="#A78BFA" className="animate-ping" style={{ animationDuration: '3s' }} />
          </g>

          {/* FLOATING EDUCATIONAL SYMBOLS */}
          {/* Mortarboard Graduation Cap */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2 ? 'opacity-100 -translate-x-10 -translate-y-8 scale-100' : 'opacity-0 translate-x-8 translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '140px 105px' }}
          >
            <polygon points="140,85 180,102 140,118 100,102" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <path d="M 120 110 Q 140 128 160 110" fill="#0B0F19" stroke="#38BDF8" strokeWidth="1.5" />
            <circle cx="140" cy="102" r="2.5" fill="#FBBF24" />
            <path d="M 140 102 C 145 110, 162 118, 164 132" fill="none" stroke="#FBBF24" strokeWidth="2" />
          </g>

          {/* Floating Open Study Book */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2 ? 'opacity-100 translate-x-10 -translate-y-8 scale-100' : 'opacity-0 -translate-x-8 translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '460px 105px' }}
          >
            <path d="M 460 115 C 445 105, 425 108, 412 112 L 412 135 C 425 130, 445 128, 460 138 Z" fill="#1E293B" stroke="#A855F7" strokeWidth="2" />
            <path d="M 460 115 C 475 105, 495 108, 508 112 L 508 135 C 495 130, 475 128, 460 138 Z" fill="#0F172A" stroke="#22D3EE" strokeWidth="2" />
          </g>

          {/* Orbiting Science Atom */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2 ? 'opacity-100 -translate-x-12 translate-y-8 scale-100' : 'opacity-0 translate-x-8 -translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '120px 380px' }}
          >
            <ellipse cx="120" cy="380" rx="26" ry="10" fill="none" stroke="#22D3EE" strokeWidth="1.8" transform="rotate(-30 120 380)" opacity="0.85" />
            <ellipse cx="120" cy="380" rx="26" ry="10" fill="none" stroke="#A855F7" strokeWidth="1.8" transform="rotate(30 120 380)" opacity="0.85" />
            <circle cx="120" cy="380" r="4.5" fill="#FBBF24" />
          </g>

          {/* Mathematics Sigma Symbol */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2 ? 'opacity-100 translate-x-12 translate-y-8 scale-100' : 'opacity-0 -translate-x-8 -translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '480px 380px' }}
          >
            <path d="M 488 365 L 468 365 L 478 378 L 468 392 L 488 392" fill="none" stroke="#34D399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      {/* STUDO BRAND REVEAL & TAGLINE */}
      <div
        className={`text-center mt-3 transition-all duration-700 ease-out z-10 ${
          stage >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center shadow-glow-cyan">
            <span className="font-extrabold text-2xl bg-gradient-to-tr from-cyan-300 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
              S
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-violet-200 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            STUDO
          </h1>
        </div>

        <p className="mt-3 text-sm sm:text-base font-bold tracking-widest text-[#FFF0C9] uppercase">
          Think. Discover. Achieve.
        </p>

        <p className="mt-1 text-xs text-cyan-200/70 tracking-wide font-medium">
          Futuristic AI-Powered Student Learning & Discovery Platform
        </p>
      </div>
    </div>
  );
}
