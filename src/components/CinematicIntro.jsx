import React, { useState, useEffect } from 'react';

export default function CinematicIntro({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [stage, setStage] = useState(0); // 0: joined brain, 1: opening, 2: trophy & symbols, 3: logo & finish

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Sequence of animation stages
    const timerStage1 = setTimeout(() => setStage(1), 700);  // Brain starts parting
    const timerStage2 = setTimeout(() => setStage(2), 1200); // Trophy emerges & symbols float
    const timerStage3 = setTimeout(() => setStage(3), 1800); // Logo & tagline reveal
    const timerFade = setTimeout(() => setIsFadingOut(true), 2800); // Start fade to dashboard
    const timerEnd = setTimeout(() => onComplete(), 3400); // Complete & unmount

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
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070A14] select-none overflow-hidden transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 45%, #181236 0%, #0C0F22 55%, #060812 100%)'
      }}
    >
      {/* Background Subtle Stars / Space Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-300/40 top-[18%] left-[22%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-amber-200/50 top-[30%] left-[80%] animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-purple-400/30 top-[75%] left-[15%] animate-pulse" />
        <div className="absolute w-1 h-1 rounded-full bg-blue-200/40 top-[65%] left-[85%] animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-amber-100/40 top-[20%] left-[65%]" />
        {/* Deep ambient purple bloom behind the brain */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-purple-700/20 blur-[120px] pointer-events-none" />
        {/* Golden core aura that appears when brain opens */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-amber-500/25 blur-[90px] pointer-events-none transition-all duration-1000 ${
            stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* Skip Intro Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/15 text-xs font-semibold backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-lg cursor-pointer"
        aria-label="Skip introductory animation"
      >
        <span>Skip Intro</span>
        <svg className="w-3.5 h-3.5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Cinematic Animation Stage */}
      <div className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center">
        {/* SVG Container with Brain Halves, Golden Trophy & Floating Symbols */}
        <svg
          viewBox="0 0 600 500"
          className="w-full h-full overflow-visible drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
          style={{ perspective: '1000px' }}
        >
          <defs>
            {/* Purple Brain Halves Gradient */}
            <linearGradient id="brainLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="45%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>

            <linearGradient id="brainRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E9D5FF" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#3B0764" />
            </linearGradient>

            {/* Brain Neon Glow Filter */}
            <filter id="purpleGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Golden Trophy Gradient */}
            <linearGradient id="goldTrophyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="30%" stopColor="#FBBF24" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            {/* Trophy Pedestal Gradient */}
            <linearGradient id="trophyBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            {/* Gold Shine Filter */}
            <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="10" result="goldBlur" />
              <feComposite in="SourceGraphic" in2="goldBlur" operator="over" />
            </filter>
          </defs>

          {/* 1. Golden Aura Beams erupting when brain opens */}
          <g
            className={`transition-all duration-1000 ${
              stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{ transformOrigin: '300px 240px' }}
          >
            <circle cx="300" cy="240" r="70" fill="url(#goldTrophyGrad)" opacity="0.18" filter="url(#goldGlow)" />
            {/* Radiating micro rays */}
            <line x1="300" y1="160" x2="300" y2="135" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
            <line x1="360" y1="190" x2="385" y2="170" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <line x1="240" y1="190" x2="215" y2="170" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <line x1="375" y1="240" x2="405" y2="240" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <line x1="225" y1="240" x2="195" y2="240" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* 2. THE GOLDEN TROPHY (Appears in Center between brain halves) */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 1
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-50 translate-y-12'
            }`}
            style={{ transformOrigin: '300px 240px' }}
            filter="url(#goldGlow)"
          >
            {/* Trophy Cup Body */}
            <path
              d="M 268 185 C 268 238, 332 238, 332 185 L 332 180 L 268 180 Z"
              fill="url(#goldTrophyGrad)"
              stroke="#FFFBEB"
              strokeWidth="2"
            />
            {/* Cup Lip */}
            <ellipse cx="300" cy="180" rx="32" ry="7" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.5" />
            {/* Left Handle */}
            <path
              d="M 268 190 C 244 190, 244 216, 272 222"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Right Handle */}
            <path
              d="M 332 190 C 356 190, 356 216, 328 222"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Trophy Stem */}
            <path
              d="M 295 235 L 305 235 L 303 260 L 297 260 Z"
              fill="#D97706"
              stroke="#FBBF24"
              strokeWidth="1.5"
            />
            {/* Pedestal Top Tier */}
            <path
              d="M 286 260 L 314 260 L 316 268 L 284 268 Z"
              fill="url(#trophyBaseGrad)"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            {/* Pedestal Bottom Base */}
            <rect
              x="278"
              y="268"
              width="44"
              height="16"
              rx="4"
              fill="url(#trophyBaseGrad)"
              stroke="#FEF08A"
              strokeWidth="1.5"
            />
            {/* Center Star on Trophy */}
            <path
              d="M 300 196 L 302.5 204 L 310 204.5 L 304 209 L 306.5 217 L 300 212.5 L 293.5 217 L 296 209 L 290 204.5 L 297.5 204 Z"
              fill="#FFFFFF"
            />
            {/* Trophy Sparkle glint */}
            <circle cx="276" cy="184" r="3" fill="#FFFFFF" className="animate-ping" />
          </g>

          {/* 3. LEFT 3D BRAIN HEMISPHERE */}
          <g
            className={`transition-all duration-1000 ease-in-out cursor-default ${
              stage >= 1
                ? '-translate-x-24 -rotate-6'
                : 'translate-x-0 rotate-0'
            }`}
            style={{ transformOrigin: '230px 240px' }}
            filter="url(#purpleGlow)"
          >
            {/* Cerebral Cortex Outer Silhouette - Left */}
            <path
              d="M 292 140
                 C 255 130, 205 130, 175 160
                 C 145 190, 145 230, 160 260
                 C 145 280, 150 315, 175 335
                 C 200 355, 240 355, 265 345
                 C 285 338, 292 315, 292 295
                 L 292 140 Z"
              fill="url(#brainLeftGrad)"
              stroke="#D8B4FE"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Gyri Folds (Inner Cortex 3D details) - Left */}
            <path
              d="M 230 148 C 210 165, 185 165, 178 185
                 M 270 170 C 235 180, 215 205, 175 210
                 M 288 208 C 255 210, 230 238, 185 242
                 M 285 248 C 255 248, 235 275, 195 285
                 M 255 288 C 240 315, 205 320, 195 332
                 M 215 245 C 195 260, 170 265, 160 280"
              fill="none"
              stroke="#E9D5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Neural Bioluminescent Nodes */}
            <circle cx="215" cy="180" r="3.5" fill="#E9D5FF" />
            <circle cx="178" cy="245" r="3" fill="#C084FC" />
            <circle cx="245" cy="285" r="3.5" fill="#E9D5FF" />
            <circle cx="205" cy="315" r="2.5" fill="#A855F7" />
          </g>

          {/* 4. RIGHT 3D BRAIN HEMISPHERE */}
          <g
            className={`transition-all duration-1000 ease-in-out cursor-default ${
              stage >= 1
                ? 'translate-x-24 rotate-6'
                : 'translate-x-0 rotate-0'
            }`}
            style={{ transformOrigin: '370px 240px' }}
            filter="url(#purpleGlow)"
          >
            {/* Cerebral Cortex Outer Silhouette - Right (Horizontally mirrored) */}
            <path
              d="M 308 140
                 C 345 130, 395 130, 425 160
                 C 455 190, 455 230, 440 260
                 C 455 280, 450 315, 425 335
                 C 400 355, 360 355, 335 345
                 C 315 338, 308 315, 308 295
                 L 308 140 Z"
              fill="url(#brainRightGrad)"
              stroke="#D8B4FE"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Gyri Folds (Inner Cortex 3D details) - Right */}
            <path
              d="M 370 148 C 390 165, 415 165, 422 185
                 M 330 170 C 365 180, 385 205, 425 210
                 M 312 208 C 345 210, 370 238, 415 242
                 M 315 248 C 345 248, 365 275, 405 285
                 M 345 288 C 360 315, 395 320, 405 332
                 M 385 245 C 405 260, 430 265, 440 280"
              fill="none"
              stroke="#E9D5FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Neural Bioluminescent Nodes */}
            <circle cx="385" cy="180" r="3.5" fill="#E9D5FF" />
            <circle cx="422" cy="245" r="3" fill="#C084FC" />
            <circle cx="355" cy="285" r="3.5" fill="#E9D5FF" />
            <circle cx="395" cy="315" r="2.5" fill="#A855F7" />
          </g>

          {/* 5. FLOATING EDUCATIONAL SYMBOLS (Cap, Book, Atom, Math Sigma) */}
          {/* Top-Left: Graduation Cap (Mortarboard) */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2
                ? 'opacity-100 -translate-x-8 -translate-y-6 scale-100'
                : 'opacity-0 translate-x-12 translate-y-12 scale-50'
            }`}
            style={{ transformOrigin: '140px 110px' }}
          >
            {/* Mortarboard Rhombus Top */}
            <polygon
              points="140,85 180,102 140,118 100,102"
              fill="#24243A"
              stroke="#D8B4FE"
              strokeWidth="2"
            />
            {/* Skullcap underneath */}
            <path d="M 120 110 Q 140 128 160 110" fill="#18182E" stroke="#D8B4FE" strokeWidth="1.5" />
            {/* Golden Button & Hanging Tassel */}
            <circle cx="140" cy="102" r="2.5" fill="#FBBF24" />
            <path d="M 140 102 C 145 110, 162 118, 164 132" fill="none" stroke="#FBBF24" strokeWidth="2" />
            <rect x="162" y="132" width="4" height="7" rx="1.5" fill="#F59E0B" />
          </g>

          {/* Top-Right: Floating Open Study Book */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2
                ? 'opacity-100 translate-x-8 -translate-y-6 scale-100'
                : 'opacity-0 -translate-x-12 translate-y-12 scale-50'
            }`}
            style={{ transformOrigin: '460px 110px' }}
          >
            {/* Left Page */}
            <path
              d="M 460 115 C 445 105, 425 108, 412 112 L 412 135 C 425 130, 445 128, 460 138 Z"
              fill="#E9E1FF"
              stroke="#7C3AED"
              strokeWidth="1.8"
            />
            {/* Right Page */}
            <path
              d="M 460 115 C 475 105, 495 108, 508 112 L 508 135 C 495 130, 475 128, 460 138 Z"
              fill="#DCEEFF"
              stroke="#7C3AED"
              strokeWidth="1.8"
            />
            {/* Book Spine */}
            <line x1="460" y1="115" x2="460" y2="138" stroke="#4C1D95" strokeWidth="2.5" />
            {/* Text lines on pages */}
            <line x1="422" y1="120" x2="448" y2="117" stroke="#9333EA" strokeWidth="1.2" opacity="0.7" />
            <line x1="422" y1="126" x2="445" y2="123" stroke="#9333EA" strokeWidth="1.2" opacity="0.7" />
            <line x1="472" y1="117" x2="498" y2="120" stroke="#0284C7" strokeWidth="1.2" opacity="0.7" />
            <line x1="475" y1="123" x2="498" y2="126" stroke="#0284C7" strokeWidth="1.2" opacity="0.7" />
          </g>

          {/* Bottom-Left: Science Atom Orbiting Rings */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2
                ? 'opacity-100 -translate-x-10 translate-y-6 scale-100'
                : 'opacity-0 translate-x-8 -translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '120px 380px' }}
          >
            <ellipse cx="120" cy="380" rx="26" ry="10" fill="none" stroke="#38BDF8" strokeWidth="1.8" transform="rotate(-30 120 380)" opacity="0.85" />
            <ellipse cx="120" cy="380" rx="26" ry="10" fill="none" stroke="#F472B6" strokeWidth="1.8" transform="rotate(30 120 380)" opacity="0.85" />
            <circle cx="120" cy="380" r="4.5" fill="#FBBF24" />
            <circle cx="140" cy="370" r="2.5" fill="#38BDF8" />
            <circle cx="102" cy="392" r="2.5" fill="#F472B6" />
          </g>

          {/* Bottom-Right: Mathematics Sigma & Calculus Integral */}
          <g
            className={`transition-all duration-1000 ease-out ${
              stage >= 2
                ? 'opacity-100 translate-x-10 translate-y-6 scale-100'
                : 'opacity-0 -translate-x-8 -translate-y-8 scale-50'
            }`}
            style={{ transformOrigin: '480px 380px' }}
          >
            {/* Sigma Symbol Σ */}
            <path
              d="M 488 365 L 468 365 L 478 378 L 468 392 L 488 392"
              fill="none"
              stroke="#34D399"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Tiny Integral Symbol ∫ */}
            <path
              d="M 504 362 C 500 362 497 364 497 368 L 497 388 C 497 392 494 394 490 394"
              fill="none"
              stroke="#FDE047"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* Golden Glinting Stars in Space */}
          <g
            className={`transition-all duration-700 ${
              stage >= 2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Top star */}
            <path
              d="M 300 120 L 302 126 L 308 128 L 302 130 L 300 136 L 298 130 L 292 128 L 298 126 Z"
              fill="#FFF0C9"
            />
            {/* Left star */}
            <path
              d="M 180 280 L 181.5 284 L 186 285.5 L 181.5 287 L 180 291 L 178.5 287 L 174 285.5 L 178.5 284 Z"
              fill="#FDE047"
            />
            {/* Right star */}
            <path
              d="M 420 280 L 421.5 284 L 426 285.5 L 421.5 287 L 420 291 L 418.5 287 L 414 285.5 L 418.5 284 Z"
              fill="#FDE047"
            />
          </g>
        </svg>
      </div>

      {/* 6. STUDO BRAND NAME & TAGLINE */}
      <div
        className={`text-center mt-2 transition-all duration-700 ease-out z-10 ${
          stage >= 2
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-6 scale-95'
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
            <span className="font-extrabold text-xl bg-gradient-to-tr from-[#E9E1FF] via-[#DCEEFF] to-[#FFF0C9] bg-clip-text text-transparent">
              S
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9E1FF] to-[#DCEEFF]">
            STUDO
          </h1>
        </div>

        <p className="mt-3 text-sm sm:text-base font-semibold tracking-widest text-[#FFF0C9] uppercase">
          Think. Discover. Achieve.
        </p>

        <p className="mt-1 text-xs text-purple-300/80 tracking-wide font-normal">
          Empowering school minds with high-yield learning resources
        </p>
      </div>
    </div>
  );
}
