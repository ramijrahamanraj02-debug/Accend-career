import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CAREER_TRACKS,
  CareerTrackItem,
  DYNAMIC_STUDY_ABROAD_OPPORTUNITIES
} from '../data/tracksData';
import { ServiceVertical } from '../types';
import { TrackVisual3D } from './TrackVisual3D';
import {
  Users,
  Target,
  Key,
  Compass,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  Globe2,
  TrendingUp,
  Brain,
  Code2,
  Building2,
  Award
} from 'lucide-react';

interface VaultHeroChamber3DProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  onNavigateToServicesHub: () => void;
}

// Map each track's 6 specific offerings and icons to perfectly match the photo & ecosystem
const TRACK_OFFERINGS: Record<
  string,
  {
    tagline: string;
    items: { icon: any; label: string }[];
    summary: string;
  }
> = {
  '01': {
    tagline: 'Personalized guidance to discover the right career path for you.',
    items: [
      { icon: Users, label: '1-to-1 Counselling' },
      { icon: Target, label: 'Career Assessment' },
      { icon: Key, label: 'Strength Analysis' },
      { icon: Compass, label: 'Career Roadmap' },
      { icon: CheckCircle, label: 'Goal Planning' },
      { icon: Lightbulb, label: 'Expert Guidance' }
    ],
    summary: 'Helping you make informed career decisions.'
  },
  '02': {
    tagline: 'Multi-year trajectory mapping connecting competencies to high-growth industries.',
    items: [
      { icon: Compass, label: '5-Year Growth Matrix' },
      { icon: TrendingUp, label: 'Industry Trajectory Audit' },
      { icon: Target, label: 'Competency Benchmarking' },
      { icon: Layers, label: 'Milestone Milestones' },
      { icon: Key, label: 'Compensation Projections' },
      { icon: Lightbulb, label: 'Quarterly Review Triggers' }
    ],
    summary: 'Building a sustainable, future-proof career architecture.'
  },
  '03': {
    tagline: 'Diagnostic stream selection for Class 10 students across Science, Commerce & Arts.',
    items: [
      { icon: BookOpen, label: 'Stream Diagnostic Battery' },
      { icon: Brain, label: 'Aptitude & Logic Testing' },
      { icon: Layers, label: 'Subject Combination Fit' },
      { icon: Target, label: 'Future Degree Viability' },
      { icon: Users, label: 'Parent-Student Alignment' },
      { icon: CheckCircle, label: 'Actionable Academic Plan' }
    ],
    summary: 'Eliminating peer pressure with scientific stream clarity.'
  },
  '04': {
    tagline: 'Data-backed college and course selection matching academic scores and budgets.',
    items: [
      { icon: GraduationCap, label: 'Institution Shortlisting' },
      { icon: Target, label: 'Cutoff & Quota Feasibility' },
      { icon: Award, label: 'NAAC / NIRF Quality Audit' },
      { icon: TrendingUp, label: 'Campus ROI & Fees' },
      { icon: Users, label: 'Counseling Rounds Strategy' },
      { icon: CheckCircle, label: 'Seat Allotment Advisory' }
    ],
    summary: 'Securing the highest ROI university placement.'
  },
  '05': {
    tagline: 'Structured transition roadmaps for working professionals pivoting domains.',
    items: [
      { icon: Key, label: 'Transferable Capital Audit' },
      { icon: Target, label: 'Critical Skill Gap Analysis' },
      { icon: Layers, label: 'Bridge Training Curriculum' },
      { icon: Briefcase, label: 'Executive Portfolio Framing' },
      { icon: TrendingUp, label: 'Target Salary Benchmarking' },
      { icon: CheckCircle, label: 'Domain Placement Support' }
    ],
    summary: 'Pivoting industries with maximum confidence and minimal risk.'
  },
  '06': {
    tagline: 'Scientifically validated cognitive, behavioral and personality diagnostics.',
    items: [
      { icon: Brain, label: 'Psychometric Cognitive Test' },
      { icon: Target, label: 'RIASEC Career Code Profiling' },
      { icon: Layers, label: 'EQ & Stress Index Score' },
      { icon: BookOpen, label: 'Comprehensive Dossier' },
      { icon: Users, label: 'Psychologist Debrief' },
      { icon: CheckCircle, label: 'Career Fit Correlation' }
    ],
    summary: 'Unlocking deep psychological insights into your natural strengths.'
  },
  '07': {
    tagline: 'Hands-on skill acceleration in AI, Full-Stack, Data, and Emerging Tech.',
    items: [
      { icon: Code2, label: 'Live Capstone Projects' },
      { icon: Target, label: 'Modern Tech Stack Sprints' },
      { icon: Brain, label: 'AI & Data Engineering' },
      { icon: Users, label: 'Industry Expert Mentors' },
      { icon: Award, label: 'Verified Credentialing' },
      { icon: CheckCircle, label: 'Portfolio Architecture' }
    ],
    summary: 'Bridging academia with high-demand production engineering.'
  },
  '08': {
    tagline: 'Direct corporate placement, ATS resume optimization, and mock interview drills.',
    items: [
      { icon: Briefcase, label: 'Direct Employer Hiring' },
      { icon: Target, label: 'ATS Resume Engineering' },
      { icon: Users, label: 'Senior Mock Interviews' },
      { icon: Layers, label: 'LinkedIn Brand Profiling' },
      { icon: TrendingUp, label: 'Salary Negotiation Advisory' },
      { icon: CheckCircle, label: 'Onboarding Guarantee' }
    ],
    summary: 'Connecting vetted talent directly to premier corporate employers.'
  },
  '09': {
    tagline: 'Global admissions & scholarship guidance for Italy, Europe, USA, Canada & Australia.',
    items: [
      { icon: Globe2, label: 'Italy DSU Scholarships' },
      { icon: GraduationCap, label: 'University Shortlisting' },
      { icon: BookOpen, label: 'SOP & LOR Architecture' },
      { icon: Award, label: 'Universitaly & CIMEA Filing' },
      { icon: Target, label: 'Visa Interview Preparation' },
      { icon: CheckCircle, label: 'Pre-Departure Briefings' }
    ],
    summary: 'Opening world-class international education and scholarship opportunities.'
  },
  '10': {
    tagline: 'Premier domestic admissions for IITs, IIMs, Central & Autonomous Indian Universities.',
    items: [
      { icon: GraduationCap, label: 'JEE / NEET / CUET / CAT Strategy' },
      { icon: Target, label: 'Counseling & Seat Allocation' },
      { icon: Award, label: 'Government Quota Claims' },
      { icon: BookOpen, label: 'Merit Scholarship Advisory' },
      { icon: Layers, label: 'Document & Dossier Vetting' },
      { icon: CheckCircle, label: 'Final Admission Verification' }
    ],
    summary: 'Navigating competitive Indian entrance exams and seat matrix.'
  },
  '11': {
    tagline: 'Institutional partnerships establishing career cells, bootcamps and diagnostics.',
    items: [
      { icon: Building2, label: 'Campus Career Cell Setup' },
      { icon: Users, label: 'Bulk Psychometric Testing' },
      { icon: Layers, label: 'Faculty Training Workshops' },
      { icon: Target, label: 'Campus Placement Drives' },
      { icon: Award, label: 'Institutional Accreditation ROI' },
      { icon: CheckCircle, label: 'Alumni Mentorship Network' }
    ],
    summary: 'Empowering schools and colleges with world-class career infrastructure.'
  },
  '12': {
    tagline: 'Enterprise corporate training, leadership development, and strategic talent acquisition.',
    items: [
      { icon: Building2, label: 'Custom Corporate Curriculums' },
      { icon: Users, label: 'Leadership & Executive Labs' },
      { icon: Target, label: 'Talent Pipeline Acquisition' },
      { icon: Brain, label: 'Workplace Psychological Audits' },
      { icon: TrendingUp, label: 'Performance ROI Tracking' },
      { icon: CheckCircle, label: 'Workforce Upskilling At Scale' }
    ],
    summary: 'Strengthening corporate teams with elite talent and training.'
  }
};

export const VaultHeroChamber3D: React.FC<VaultHeroChamber3DProps> = ({
  services,
  onSelectService,
  onOpenConsultation,
  onNavigateToServicesHub
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [compassAngle, setCompassAngle] = useState<number>(35);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTrack: CareerTrackItem = CAREER_TRACKS[currentTrackIndex] || CAREER_TRACKS[0];
  const activeOffer = TRACK_OFFERINGS[activeTrack.trackNumber] || TRACK_OFFERINGS['01'];

  // Navigate tracks with direction
  const goToTrack = useCallback((index: number) => {
    setDirection(index > currentTrackIndex ? 'next' : 'prev');
    setCurrentTrackIndex(index);
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
      if (e.key === 'ArrowRight') {
        nextTrack();
      } else if (e.key === 'ArrowLeft') {
        prevTrack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTrack, prevTrack]);

  // Subtle compass needle float animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCompassAngle((prev) => {
        const offset = (Math.random() - 0.5) * 6;
        return 35 + offset;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreTrack = () => {
    const matched = services.find((s) => s.id === activeTrack.serviceId);
    if (matched) {
      onSelectService(matched);
    } else {
      onNavigateToServicesHub();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#070b14] overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 px-3 sm:px-6 lg:px-8 border-b border-slate-800/90 select-none"
      id="vault-hero-chamber"
    >
      {/* =========================================================================
          ATMOSPHERIC 3D LIGHTING & NEON COLUMNS IN THE BACKGROUND
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Far Background Vertical Neon Cyan Light Columns (Flanking the Chamber) */}
        <div className="absolute top-1/4 left-[18%] w-1.5 h-64 bg-cyan-400/30 blur-[6px] rounded-full shadow-[0_0_20px_#00f0ff]" />
        <div className="absolute top-1/4 right-[18%] w-1.5 h-64 bg-cyan-400/30 blur-[6px] rounded-full shadow-[0_0_20px_#00f0ff]" />

        {/* Ambient Overhead Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-teal-500/15 rounded-full blur-[120px]" />

        {/* Structural Dark Grid Line Reflections */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />

        {/* Reflective Metallic Floor Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#05080e] via-[#090f1b]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================================
            HEADER HEADLINE (Center Top)
            From Potential to Profession.
            From Ambition to Achievement.
            GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
            ========================================================================= */}
        <div className="text-center mb-6 sm:mb-8 pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.18]">
            From Potential to Profession. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-teal-200 drop-shadow-[0_2px_12px_rgba(45,212,191,0.35)]">
              From Ambition to Achievement.
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-extrabold text-teal-400/95 uppercase tracking-[0.28em] mt-3">
            GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
          </p>
        </div>

        {/* =========================================================================
            THE 3-PANEL 3D VAULT CHAMBER
            [ LEFT STEEL DOOR ]  [ CENTER 3D PEDESTAL & COMPASS ]  [ RIGHT STEEL DOOR ]
            ========================================================================= */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center min-h-[500px]"
          style={{ perspective: '1300px' }}
        >
          {/* =======================================================================
              1. LEFT 3D METALLIC VAULT DOOR
              Angled inward (rotateY: 12deg), heavy beveled steel, 3 cylindrical hinges
              ======================================================================= */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-panel-${activeTrack.id}`}
                initial={{
                  opacity: 0,
                  rotateY: direction === 'next' ? -25 : 25,
                  x: direction === 'next' ? -30 : 30
                }}
                animate={{
                  opacity: 1,
                  rotateY: 12,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction === 'next' ? 25 : -25,
                  x: direction === 'next' ? 30 : -30
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[320px] rounded-2xl p-5 sm:p-6 relative overflow-visible border-2 border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] group"
                style={{
                  background: 'linear-gradient(155deg, #162035 0%, #0d1526 50%, #080d18 100%)',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center'
                }}
              >
                {/* 3 Heavy Cylindrical Industrial Hinges on the Left Edge */}
                <div className="absolute -left-3.5 top-10 w-4 h-11 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-800 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-4 h-11 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-800 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>
                <div className="absolute -left-3.5 bottom-10 w-4 h-11 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-800 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>

                {/* 4 Corner Metallic Rivets */}
                <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />

                {/* Left Teal Beveled Rim Highlight */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

                {/* Internal Beveled Border Frame */}
                <div className="h-full flex flex-col justify-between rounded-xl border border-slate-700/50 p-4 bg-slate-950/40 relative z-10">
                  {/* Top: TRACK 01 */}
                  <div>
                    <div className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-teal-400/90">
                      TRACK
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-cyan-400 font-mono tracking-tight leading-none my-1 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                      {activeTrack.trackNumber}
                    </div>

                    <div className="w-10 h-[2px] bg-cyan-500/50 rounded-full my-2.5" />

                    {/* Track Title (e.g. Career Counselling) */}
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mt-1">
                      {activeTrack.title}
                    </h3>
                  </div>

                  {/* Center: Glowing Cyan Line Icon / Visual (Mentor & Candidate at Table) */}
                  <div className="my-5 flex items-center justify-center py-4">
                    <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.2)] group-hover:border-cyan-400/60 transition-colors">
                      {/* Ambient Inner Cyan Glow */}
                      <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur-md pointer-events-none" />

                      {/* Render glowing illustration */}
                      {activeTrack.iconType === 'counselling' ? (
                        <svg
                          viewBox="0 0 64 64"
                          className="w-16 h-16 text-cyan-400 filter drop-shadow-[0_0_8px_#00f0ff]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {/* Chat bubble above table */}
                          <path d="M26 14 H38 C42 14 44 16 44 20 C44 23 42 25 38 25 H33 L29 29 V25 H26 C22 25 20 23 20 20 C20 16 22 14 26 14 Z" />
                          <circle cx="28" cy="20" r="1" fill="currentColor" />
                          <circle cx="32" cy="20" r="1" fill="currentColor" />
                          <circle cx="36" cy="20" r="1" fill="currentColor" />
                          {/* Left Person (Mentor) */}
                          <circle cx="16" cy="28" r="4.5" />
                          <path d="M10 44 C10 38 13 36 16 36 C19 36 22 38 22 44" />
                          {/* Right Person (Student) */}
                          <circle cx="48" cy="28" r="4.5" />
                          <path d="M42 44 C42 38 45 36 48 36 C51 36 54 38 54 44" />
                          {/* Center Table */}
                          <path d="M22 42 H42" strokeWidth="2.5" />
                          <path d="M27 42 V52" strokeWidth="2" />
                          <path d="M37 42 V52" strokeWidth="2" />
                        </svg>
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center">
                          <TrackVisual3D
                            iconType={activeTrack.iconType}
                            className="w-16 h-16"
                            isHovered={true}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Description & Explore link */}
                  <div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeOffer.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={handleExploreTrack}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors group/btn"
                        id={`vault-left-explore-${activeTrack.trackNumber}`}
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[10px] font-mono text-slate-500">
                        {activeTrack.trackNumber} / 12
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =======================================================================
              2. CENTER 3D MAIN STAGE / PEDESTAL & ILLUMINATED COMPASS
              Circular metallic platform with glowing cyan LED ring & 3D Compass
              ======================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center relative px-2">
            {/* The 3D Compass & Glowing Pedestal Object */}
            <div className="relative w-full max-w-[380px] h-[280px] sm:h-[310px] flex items-center justify-center my-2">
              {/* Radial Cyan Glow Spotlight behind compass */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[70px] pointer-events-none" />

              {/* ===================================================================
                  THE DUAL-TIER METALLIC PEDESTAL WITH NEON CYAN LED RING
                  =================================================================== */}
              {/* Lower Tier Base */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-72 sm:w-80 h-14 rounded-[100%] bg-gradient-to-b from-[#162035] via-[#0c1424] to-[#05080e] border border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.9)]" />

              {/* Lower Glowing Cyan Neon LED Ring (Around Lower Perimeter) */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 sm:w-72 h-8 rounded-[100%] pointer-events-none"
                style={{
                  border: '2.5px solid #00f0ff',
                  boxShadow: '0 0 15px #00f0ff, 0 0 35px rgba(0,240,255,0.6), inset 0 0 15px #00f0ff'
                }}
              />

              {/* Upper Metallic Disc Tier */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 sm:w-64 h-12 rounded-[100%] bg-gradient-to-b from-[#222e48] via-[#131c2e] to-[#080e1a] border border-slate-600/90 shadow-inner" />

              {/* ===================================================================
                  THE 3D CHROME COMPASS WITH GLOWING CYAN NEEDLE
                  =================================================================== */}
              <motion.div
                key={`compass-${activeTrack.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-20 -translate-y-3"
              >
                {/* 3D Realistic Chrome Compass */}
                <div
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #475569 0%, #1e293b 40%, #0f172a 70%, #334155 100%)',
                    border: '3px solid #64748b'
                  }}
                >
                  {/* Beveled Chrome Outer Ring */}
                  <div
                    className="w-full h-full rounded-full p-2 flex items-center justify-center relative shadow-inner"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #334155 0%, #0f172a 70%, #020617 100%)',
                      border: '2px solid #00f0ff'
                    }}
                  >
                    {/* Tick Marks & Degree Graduations */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Degree Ticks Every 30 Deg */}
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                        <line
                          key={deg}
                          x1="50"
                          y1="6"
                          x2="50"
                          y2={deg % 90 === 0 ? '11' : '9'}
                          stroke={deg % 90 === 0 ? '#00f0ff' : '#64748b'}
                          strokeWidth={deg % 90 === 0 ? '1.8' : '1'}
                          transform={`rotate(${deg} 50 50)`}
                        />
                      ))}
                      {/* Cardinal Letters */}
                      <text x="50" y="19" textAnchor="middle" fill="#00f0ff" fontSize="6" fontWeight="bold" fontFamily="monospace">N</text>
                      <text x="85" y="52" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="bold" fontFamily="monospace">E</text>
                      <text x="50" y="86" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="bold" fontFamily="monospace">S</text>
                      <text x="16" y="52" textAnchor="middle" fill="#94a3b8" fontSize="5" fontWeight="bold" fontFamily="monospace">W</text>
                    </svg>

                    {/* Dark Sunburst 8-Pointed Star Dial */}
                    <svg viewBox="0 0 100 100" className="w-[78%] h-[78%] pointer-events-none">
                      {/* Star Facets in Brushed Silver and Gunmetal */}
                      <polygon points="50,15 53,47 50,50" fill="#cbd5e1" opacity="0.9" />
                      <polygon points="50,15 47,47 50,50" fill="#475569" opacity="0.9" />
                      <polygon points="50,85 53,53 50,50" fill="#475569" opacity="0.9" />
                      <polygon points="50,85 47,53 50,50" fill="#1e293b" opacity="0.9" />
                      <polygon points="85,50 53,53 50,50" fill="#94a3b8" opacity="0.9" />
                      <polygon points="85,50 53,47 50,50" fill="#334155" opacity="0.9" />
                      <polygon points="15,50 47,53 50,50" fill="#334155" opacity="0.9" />
                      <polygon points="15,50 47,47 50,50" fill="#1e293b" opacity="0.9" />
                      {/* Diagonal Points */}
                      <polygon points="75,25 52,48 50,50" fill="#64748b" opacity="0.8" />
                      <polygon points="25,75 48,52 50,50" fill="#1e293b" opacity="0.8" />
                      <polygon points="75,75 52,52 50,50" fill="#334155" opacity="0.8" />
                      <polygon points="25,25 48,48 50,50" fill="#64748b" opacity="0.8" />
                    </svg>

                    {/* 3D Dynamic Needle with Glowing Cyan Arrow */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-out"
                      style={{
                        transform: `rotate(${compassAngle}deg)`,
                        transformOrigin: '50% 50%'
                      }}
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <filter id="cyanNeedleGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        {/* North Arrow Point (Vibrant Cyan with Specular Light) */}
                        <polygon
                          points="50,14 55,50 50,44"
                          fill="#00f0ff"
                          filter="url(#cyanNeedleGlow)"
                        />
                        <polygon points="50,14 45,50 50,44" fill="#0891b2" />
                        {/* South Tail (Dark Chrome Steel) */}
                        <polygon points="50,86 54,50 50,56" fill="#64748b" />
                        <polygon points="50,86 46,50 50,56" fill="#334155" />
                        {/* Center Chrome Screw/Cap */}
                        <circle cx="50" cy="50" r="5" fill="#f8fafc" stroke="#0e7490" strokeWidth="1.5" />
                        <circle cx="50" cy="50" r="2.5" fill="#00f0ff" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Subtitle Under Pedestal */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mt-1">
              Empowering students and professionals with the right guidance, skills and global opportunities.
            </p>

            {/* Explore Our Services CTA Button (Exact styling from photo) */}
            <div className="mt-4">
              <button
                onClick={onNavigateToServicesHub}
                className="px-6 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
                id="vault-center-explore-btn"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>

          {/* =======================================================================
              3. RIGHT 3D METALLIC VAULT DOOR
              Angled inward (rotateY: -12deg), heavy beveled steel, 3 cylindrical hinges
              ======================================================================= */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-panel-${activeTrack.id}`}
                initial={{
                  opacity: 0,
                  rotateY: direction === 'next' ? 25 : -25,
                  x: direction === 'next' ? 30 : -30
                }}
                animate={{
                  opacity: 1,
                  rotateY: -12,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  rotateY: direction === 'next' ? -25 : 25,
                  x: direction === 'next' ? -30 : 30
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[320px] rounded-2xl p-5 sm:p-6 relative overflow-visible border-2 border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] group"
                style={{
                  background: 'linear-gradient(155deg, #162035 0%, #0d1526 50%, #080d18 100%)',
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'right center'
                }}
              >
                {/* 3 Heavy Cylindrical Industrial Hinges on the Right Edge */}
                <div className="absolute -right-3.5 top-10 w-4 h-11 bg-gradient-to-r from-slate-800 via-slate-400 to-slate-600 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-4 h-11 bg-gradient-to-r from-slate-800 via-slate-400 to-slate-600 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>
                <div className="absolute -right-3.5 bottom-10 w-4 h-11 bg-gradient-to-r from-slate-800 via-slate-400 to-slate-600 rounded-sm border border-slate-900 shadow-md flex flex-col justify-between py-1">
                  <span className="w-full h-1 bg-slate-900/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-auto" />
                  <span className="w-full h-1 bg-slate-900/60" />
                </div>

                {/* 4 Corner Metallic Rivets */}
                <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />
                <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-slate-500/80 border border-slate-800 shadow-inner" />

                {/* Right Teal Beveled Rim Highlight */}
                <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-cyan-400 via-teal-400 to-transparent shadow-[0_0_12px_#00f0ff]" />

                {/* Internal Beveled Border Frame */}
                <div className="h-full flex flex-col justify-between rounded-xl border border-slate-700/50 p-4 bg-slate-950/40 relative z-10">
                  {/* Top: WHAT WE OFFER Header */}
                  <div>
                    <div className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-cyan-400">
                      WHAT WE OFFER
                    </div>
                    <div className="w-8 h-[2px] bg-cyan-500/50 rounded-full my-2" />
                  </div>

                  {/* The 6 Offerings with Circular Glowing Cyan Icons */}
                  <div className="my-3 space-y-2.5">
                    {activeOffer.items.map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-slate-200 group-hover:text-white transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-slate-900/90 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.25)]">
                            <IconComponent className="w-3.5 h-3.5 text-cyan-400" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Subtext & Next Track Link */}
                  <div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {activeOffer.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={nextTrack}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-white transition-colors group/btn"
                        id="vault-next-track-btn"
                      >
                        <span>Next Track</span>
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[10px] font-mono text-slate-500">
                        Track {activeTrack.trackNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM 12-DOT TRACK PAGINATION SLIDER
            ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○
            ========================================================================= */}
        <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-3 py-2">
          {CAREER_TRACKS.map((t, idx) => {
            const isActive = idx === currentTrackIndex;
            return (
              <button
                key={t.id}
                onClick={() => goToTrack(idx)}
                aria-label={`Jump to Track ${t.trackNumber}: ${t.title}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_12px_#00f0ff] scale-125'
                    : 'w-2 h-2 bg-slate-600/80 hover:bg-slate-400 hover:scale-110'
                }`}
                id={`vault-dot-${t.trackNumber}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
