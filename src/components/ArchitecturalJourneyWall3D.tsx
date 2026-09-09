import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CAREER_TRACKS,
  CareerTrackItem,
  DYNAMIC_STUDY_ABROAD_OPPORTUNITIES,
  DynamicCountryOpportunity
} from '../data/tracksData';
import { ServiceVertical } from '../types';
import { TrackVisual3D } from './TrackVisual3D';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  RotateCw,
  Globe2,
  ExternalLink,
  GraduationCap,
  Award,
  Layers,
  Compass
} from 'lucide-react';

interface ArchitecturalJourneyWall3DProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  initialTrackIndex?: number;
}

export const ArchitecturalJourneyWall3D: React.FC<ArchitecturalJourneyWall3DProps> = ({
  services,
  onSelectService,
  onOpenConsultation,
  initialTrackIndex = 0
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(initialTrackIndex);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAutoTour, setIsAutoTour] = useState<boolean>(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState<number>(0);
  const [mobileTab, setMobileTab] = useState<'center' | 'left' | 'right'>('center');
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  const activeTrack: CareerTrackItem = CAREER_TRACKS[currentTrackIndex];
  const activeCountry: DynamicCountryOpportunity = DYNAMIC_STUDY_ABROAD_OPPORTUNITIES[selectedCountryIndex];

  // Navigate to track with boundary wrap and direction tracking
  const goToTrack = useCallback((index: number) => {
    setDirection(index > currentTrackIndex ? 'next' : 'prev');
    setCurrentTrackIndex((prev) => {
      if (index < 0) return CAREER_TRACKS.length - 1;
      if (index >= CAREER_TRACKS.length) return 0;
      return index;
    });
  }, [currentTrackIndex]);

  const nextTrack = useCallback(() => {
    setDirection('next');
    setCurrentTrackIndex((prev) => (prev + 1) % CAREER_TRACKS.length);
  }, []);

  const prevTrack = useCallback(() => {
    setDirection('prev');
    setCurrentTrackIndex((prev) => (prev - 1 + CAREER_TRACKS.length) % CAREER_TRACKS.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextTrack();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevTrack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTrack, prevTrack]);

  // Auto-tour timer
  useEffect(() => {
    if (!isAutoTour) return;
    const interval = setInterval(() => {
      nextTrack();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoTour, nextTrack]);

  // Handle wheel scroll inside the journey wall
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    // Throttle wheel events so one swipe advances by 1 track
    if (now - lastScrollTime.current < 550) return;

    if (Math.abs(e.deltaY) > 35 || Math.abs(e.deltaX) > 35) {
      lastScrollTime.current = now;
      if (e.deltaY > 0 || e.deltaX > 0) {
        nextTrack();
      } else {
        prevTrack();
      }
    }
  };

  // Find linked parent service
  const handleExploreParentService = () => {
    const matched = services.find((s) => s.id === activeTrack.serviceId);
    if (matched) {
      onSelectService(matched);
    } else if (services.length > 0) {
      onSelectService(services[0]);
    }
  };

  // Stage pipeline steps per track
  const getStagePipeline = (track: CareerTrackItem) => {
    switch (track.iconType) {
      case 'placement':
        return ['Talent Profiling', 'ATS Engineering', 'Mock Interview Drills', 'Employer Matching', 'Direct Placement'];
      case 'study-abroad':
        return ['Profile Assessment', 'University Shortlisting', 'SOP / LOR Crafting', 'Visa & Scholarship', 'Pre-Departure'];
      case 'counselling':
        return ['Diagnostic Intake', 'RIASEC Battery', '1-on-1 Consultation', 'Parent Alignment', 'Action Roadmap'];
      case 'roadmap':
        return ['Competency Audit', 'Market Opportunity Analysis', '5-Year Growth Matrix', 'Milestone Setting', 'Quarterly Reviews'];
      case 'stream':
        return ['Aptitude Discovery', 'Subject Compatibility', 'Career Viability', 'Stream Selection', 'Academic Plan'];
      case 'psychometric':
        return ['Cognitive Battery', 'Behavioral Mapping', 'Domain Scoring', 'Dossier Generation', 'Psychologist Review'];
      case 'skill-dev':
        return ['Foundational Sprints', 'Live Project Labs', 'Code & Architecture Review', 'Industry Capstone', 'Credentialing'];
      case 'course-college':
        return ['Cutoff Benchmarking', 'NIRF/NAAC Evaluation', 'Campus ROI Analysis', 'Counseling Rounds', 'Seat Allotment'];
      case 'career-change':
        return ['Transferable Skills', 'Gap Analysis', 'Bridge Training', 'Compensation Target', 'Domain Transition'];
      case 'study-india':
        return ['Entrance Exam Prep', 'Quota Strategy', 'College Selection', 'Scholarship Claim', 'Document Filing'];
      case 'school-college':
        return ['Campus Audit', 'In-House Counseling Cell', 'Bulk Psychometrics', 'Soft-Skill Bootcamps', 'Campus Recruitment'];
      case 'corporate-hr':
        return ['Capability Diagnostic', 'Curriculum Customization', 'Leadership Lab', 'Executive Search', 'Impact Assessment'];
      default:
        return ['Discovery', 'Strategy', 'Execution', 'Verification', 'Growth'];
    }
  };

  const stagePipeline = getStagePipeline(activeTrack);

  return (
    <section
      ref={containerRef}
      onWheel={handleWheel}
      className="relative py-12 md:py-16 px-3 sm:px-6 lg:px-8 bg-[#090e1a] border-b border-slate-800/90 select-none overflow-hidden"
      id="3d-journey-wall"
    >
      {/* Background Architectural Mesh & Subtle Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Spheres */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[150px]" />
        {/* Structural Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Architectural Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wider uppercase mb-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>3D Career Journey Wall</span>
              <span className="text-teal-600">•</span>
              <span className="text-teal-400 font-mono">Architectural Sequential System</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
              <span>Ascend Ecosystem: 12 Moving 3D Tracks</span>
            </h2>
          </div>

          {/* Navigation & Auto-tour Controls */}
          <div className="flex items-center gap-2.5">
            {/* Auto-tour Toggle */}
            <button
              onClick={() => setIsAutoTour(!isAutoTour)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                isAutoTour
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/50 shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border-slate-700/80'
              }`}
              id="wall-auto-tour-btn"
              title="Toggle automatic sequence progression"
            >
              {isAutoTour ? <Pause className="w-3.5 h-3.5 text-teal-400" /> : <Play className="w-3.5 h-3.5 text-teal-400" />}
              <span className="hidden sm:inline">{isAutoTour ? 'Pause Tour' : 'Auto Tour'}</span>
            </button>

            {/* Stepper buttons */}
            <button
              onClick={prevTrack}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-teal-500/40 shadow-sm transition-all"
              aria-label="Previous Track"
              id="wall-prev-track-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-teal-300 font-bold">
              {activeTrack.trackNumber} <span className="text-slate-600">/</span> 12
            </div>

            <button
              onClick={nextTrack}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-teal-500/40 shadow-sm transition-all"
              aria-label="Next Track"
              id="wall-next-track-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 12-Track Architectural Dial / Scrubber */}
        <div className="py-4 border-b border-slate-800/60 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1.5 min-w-[760px] sm:min-w-full justify-between">
            {CAREER_TRACKS.map((t, idx) => {
              const isActive = idx === currentTrackIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => goToTrack(idx)}
                  className={`flex-1 group relative py-2 px-1.5 rounded-lg border text-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-b from-teal-500/25 to-slate-900 border-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.35)] -translate-y-0.5'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90'
                  }`}
                  id={`scrub-track-${t.trackNumber}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className={`text-[11px] font-mono font-black ${
                        isActive ? 'text-teal-300' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {t.trackNumber}
                    </span>
                    {idx === 8 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" title="Featured Opportunity" />
                    )}
                  </div>
                  <p
                    className={`text-[10px] truncate max-w-[80px] mx-auto font-medium mt-0.5 ${
                      isActive ? 'text-white font-bold' : 'text-slate-400 group-hover:text-slate-300'
                    }`}
                  >
                    {t.title.split(' ')[0]}
                  </p>
                  {/* Bottom Active Glow Accent */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-teal-400 rounded-full shadow-[0_0_8px_#2dd4bf]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile View Tab Switcher (Visible only on small screens) */}
        <div className="flex lg:hidden items-center justify-between gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl my-4">
          <button
            onClick={() => setMobileTab('left')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              mobileTab === 'left' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Track Info ({activeTrack.trackNumber})
          </button>
          <button
            onClick={() => setMobileTab('center')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              mobileTab === 'center' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            3D Scene
          </button>
          <button
            onClick={() => setMobileTab('right')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              mobileTab === 'right' ? 'bg-teal-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Key Services ({activeTrack.deliverables.length})
          </button>
        </div>

        {/* The 3D Architectural Wall Grid (Left Steel Panel | Center Stage | Right Steel Panel) */}
        <div
          className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-[580px]"
          style={{ perspective: '1400px' }}
        >
          {/* =========================================================================
              LEFT 3D STEEL PANEL (Track Number, Category, 3D Emblem, Progress)
              ========================================================================= */}
          <div
            className={`lg:col-span-3 ${
              mobileTab === 'left' ? 'block' : 'hidden lg:block'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${activeTrack.id}`}
                initial={{
                  opacity: 0,
                  rotateY: direction === 'next' ? -35 : 35,
                  x: direction === 'next' ? -40 : 40,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction === 'next' ? 35 : -35,
                  x: direction === 'next' ? 40 : -40,
                  scale: 0.95
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group border border-slate-700/80 shadow-[0_20px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]"
                style={{
                  background: 'linear-gradient(145deg, #131d33 0%, #0c1424 55%, #070c17 100%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Brushed Steel Horizontal Sheen */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                  }}
                />

                {/* Left Teal Emissive Edge Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-teal-400 via-cyan-400 to-transparent shadow-[0_0_15px_#2dd4bf]" />

                {/* Top Section: Architectural Numerals & Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-teal-400/90 px-2.5 py-1 rounded bg-slate-900/90 border border-teal-500/30">
                      STEEL PANEL {activeTrack.trackNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {activeTrack.audience === 'students' && '🎓 Students'}
                      {activeTrack.audience === 'professionals' && '💼 Professionals'}
                      {activeTrack.audience === 'institutions' && '🏛️ Institutions'}
                      {activeTrack.audience === 'both' && '⭐ All Pathways'}
                    </span>
                  </div>

                  {/* Gigantic Steel Etched Track Number */}
                  <div className="relative my-2">
                    <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 via-slate-400 to-slate-700 font-mono tracking-tighter leading-none select-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]">
                      {activeTrack.trackNumber}
                    </span>
                    <span className="absolute left-20 bottom-2 text-xs font-mono font-bold text-teal-400/80 uppercase tracking-widest">
                      / 12 TRACKS
                    </span>
                  </div>

                  {/* Category Title */}
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-300 mt-2">
                    {activeTrack.category}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-tight tracking-tight">
                    {activeTrack.title}
                  </h3>
                </div>

                {/* Center: 3D Object Emblem */}
                <div className="relative z-10 my-6 flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner group-hover:border-teal-500/30 transition-colors">
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <TrackVisual3D
                      iconType={activeTrack.iconType}
                      className="w-24 h-24 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                      isHovered={true}
                      highlightItaly={activeTrack.iconType === 'study-abroad'}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-2 tracking-wider uppercase">
                    3D Interactive Asset • 360°
                  </span>
                </div>

                {/* Bottom Section: Quick Progress & Navigation */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                    <span>PROGRESSION</span>
                    <span className="text-teal-400 font-bold">{Math.round((Number(activeTrack.trackNumber) / 12) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-500"
                      style={{ width: `${(Number(activeTrack.trackNumber) / 12) * 100}%` }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <button
                      onClick={prevTrack}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold py-1.5 px-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Prev Track</span>
                    </button>
                    <button
                      onClick={nextTrack}
                      className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-bold py-1.5 px-2.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 transition-colors"
                    >
                      <span>Next Track</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================================================
              CENTER 3D MAIN EXPERIENCE (Stage, Narrative, Dynamic Opportunity)
              ========================================================================= */}
          <div
            className={`lg:col-span-6 ${
              mobileTab === 'center' ? 'block' : 'hidden lg:block'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`center-${activeTrack.id}`}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  z: -100
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  z: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.94,
                  z: -100
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-teal-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)]"
                style={{
                  background: 'radial-gradient(ellipse at center, #111a2f 0%, #0c1424 60%, #060b14 100%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Radial Glow Spotlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[360px] bg-teal-500/15 rounded-full blur-[130px] pointer-events-none" />

                {/* Top Badge & Slogan */}
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-400/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                      <span>Track {activeTrack.trackNumber} Main Stage</span>
                    </div>

                    <span className="text-xs font-bold text-slate-400 font-mono">
                      GUIDE • TRAIN • PLACE • GROW
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                    {activeTrack.title}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    {activeTrack.shortDesc}
                  </p>
                </div>

                {/* Center Content: Dynamic Highlight depending on track */}
                <div className="relative z-10 my-6">
                  {/* IF TRACK 09: STUDY ABROAD -> Dynamic Featured Opportunity Experience */}
                  {activeTrack.iconType === 'study-abroad' ? (
                    <div className="rounded-2xl bg-slate-900/90 border border-teal-500/40 p-5 sm:p-6 shadow-xl relative overflow-hidden">
                      {/* Ambient corner light */}
                      <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

                      {/* Header with Featured Opportunity Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-black tracking-wider uppercase shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                          <span>FEATURED OPPORTUNITY</span>
                        </div>

                        <span className="text-xs font-bold text-teal-300 font-mono">
                          {activeCountry.intakeNote}
                        </span>
                      </div>

                      {/* Dynamic Country Selector Tabs */}
                      <div className="mb-4">
                        <p className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                          Select Featured Destination (Dynamic System):
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {DYNAMIC_STUDY_ABROAD_OPPORTUNITIES.map((country, cIdx) => {
                            const isSelected = selectedCountryIndex === cIdx;
                            return (
                              <button
                                key={country.countryCode}
                                onClick={() => setSelectedCountryIndex(cIdx)}
                                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                                  isSelected
                                    ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30 scale-105'
                                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700'
                                }`}
                              >
                                <span>{country.flag}</span>
                                <span>{country.country}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Campaign Title & Highlights */}
                      <div className="p-4 rounded-xl bg-slate-950/70 border border-teal-500/30">
                        <h4 className="text-lg font-black text-white flex items-center gap-2">
                          <span>{activeCountry.flag}</span>
                          <span>{activeCountry.campaign}</span>
                        </h4>
                        <p className="text-xs font-bold text-teal-400 mt-1 font-mono">
                          🎁 {activeCountry.scholarshipNote}
                        </p>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeCountry.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* For other tracks: Structured Stage Visualization & Pipeline */
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-inner">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                          5-Stage Architectural Progression
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          Milestones 01 → 05
                        </span>
                      </div>

                      {/* 5-Step Visual Flow */}
                      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
                        {stagePipeline.map((stepName, stepIdx) => (
                          <div
                            key={stepIdx}
                            className="p-2 sm:p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 text-center hover:border-teal-500/40 transition-colors"
                          >
                            <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-mono text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                              {stepIdx + 1}
                            </div>
                            <p className="text-[10px] sm:text-[11px] font-semibold text-slate-300 leading-tight line-clamp-2">
                              {stepName}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeTrack.details}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Action CTAs */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                    id="stage-book-track-btn"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Book Track {activeTrack.trackNumber} Consultation →</span>
                  </button>

                  <button
                    onClick={handleExploreParentService}
                    className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs border border-slate-700/80 hover:border-teal-500/40 transition-colors flex items-center gap-2"
                    id="stage-explore-category-btn"
                  >
                    <span>View Service Category</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================================================
              RIGHT 3D STEEL PANEL (Key Deliverables, Checklist, Action Items)
              ========================================================================= */}
          <div
            className={`lg:col-span-3 ${
              mobileTab === 'right' ? 'block' : 'hidden lg:block'
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${activeTrack.id}`}
                initial={{
                  opacity: 0,
                  rotateY: direction === 'next' ? 35 : -35,
                  x: direction === 'next' ? 40 : -40,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction === 'next' ? -35 : 35,
                  x: direction === 'next' ? -40 : 40,
                  scale: 0.95
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden border border-slate-700/80 shadow-[0_20px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]"
                style={{
                  background: 'linear-gradient(145deg, #131d33 0%, #0c1424 55%, #070c17 100%)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Brushed Steel Horizontal Sheen */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                  }}
                />

                {/* Right Teal Emissive Edge Highlight */}
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-teal-400 via-cyan-400 to-transparent shadow-[0_0_15px_#2dd4bf]" />

                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-teal-400/90 px-2.5 py-1 rounded bg-slate-900/90 border border-teal-500/30">
                      DELIVERABLES SPEC
                    </span>
                    <span className="text-xs font-bold text-teal-400 font-mono">
                      {activeTrack.deliverables.length} Verified Items
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white">
                    Key Services & Outputs
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct components included in Track {activeTrack.trackNumber}:
                  </p>
                </div>

                {/* Deliverables Checklist with Micro-interactions */}
                <div className="relative z-10 my-4 space-y-2.5">
                  {activeTrack.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 hover:bg-slate-900 transition-all flex items-start gap-2.5 group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold text-slate-200 leading-snug group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Spec Badge & Inquiry Action */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        STATUS CODE
                      </p>
                      <p className="text-xs font-bold text-white mt-0.5">
                        Active Admissions & Intake
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-500/40 text-teal-300 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
                    id="right-panel-inquire-btn"
                  >
                    <span>Inquire for Track {activeTrack.trackNumber}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Supporting Slogan Banner at the Bottom of Wall */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
          <p className="text-xs sm:text-sm font-extrabold text-teal-400 uppercase tracking-[0.25em]">
            GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
          </p>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Scroll inside the wall or use the track dial above to navigate through all 12 sequential tracks.
          </p>
        </div>
      </div>
    </section>
  );
};
