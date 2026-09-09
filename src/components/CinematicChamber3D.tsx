import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCw,
  Globe2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Award,
  ChevronRight,
  ExternalLink,
  Users,
  Building2,
  Plane,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Film,
  Video
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';
import { AscendVideoPlayer, DialogueLine } from './AscendVideoPlayer';

interface CinematicChamber3DProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  onNavigateToServicesHub: () => void;
  ambientVideoSrc?: string;
  isAmbientVideoPlaying?: boolean;
  onToggleAmbientVideo?: () => void;
  ambientVideoPreset?: 'chamber' | 'compass';
  onSelectAmbientVideoPreset?: (preset: 'chamber' | 'compass') => void;
}

interface Chapter {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  humanHeadline: string;
  humanSubtext: string;
  ctaText: string;
  ctaAction: 'consultation' | 'service';
  serviceId?: string;
  transitionType: 'compass' | 'steel-monolith' | 'learning-console' | 'briefcase' | 'globe' | 'quad' | 'corporate';
  dialogue?: {
    mentor: string;
    student: string;
    mentorReply: string;
  };
  humanPhoto: string;
  humanTag: string;
  whatYouGet: string[];
  spotlight?: {
    flag?: string;
    title: string;
    benefit: string;
    tag: string;
  };
}

const CHAPTERS: Chapter[] = [
  {
    id: 'hero',
    stepNumber: '00',
    title: 'ASCEND CAREER',
    subtitle: 'Your Next Chapter Starts Here',
    humanHeadline: 'Your Career. Our Mission. Global Opportunities.',
    humanSubtext: 'Empowering students and professionals with the right guidance, practical skills, and verified placements to build successful careers in India and worldwide.',
    ctaText: 'Start Your Journey (01 Counselling)',
    ctaAction: 'consultation',
    transitionType: 'compass',
    humanPhoto: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    humanTag: 'Welcome to Ascend',
    whatYouGet: [
      'Expert 1-on-1 Mentorship',
      'Strong Industry Tie-Ups',
      'Guaranteed Career Roadmaps',
      'Global Admissions & Scholarships'
    ]
  },
  {
    id: 'career-guidance',
    stepNumber: '01',
    title: 'Career Counselling',
    subtitle: 'Find Your True Direction',
    humanHeadline: "You don't have to figure it out alone.",
    humanSubtext: "Not sure what comes next? Feeling stuck between paths? Let's uncover your natural strengths and map out the exact steps to your dream career.",
    ctaText: 'Talk to a Career Mentor →',
    ctaAction: 'consultation',
    serviceId: 'career-guidance',
    transitionType: 'steel-monolith',
    dialogue: {
      mentor: 'You have great potential.',
      student: 'Thank you.',
      mentorReply: 'We will find the way together.'
    },
    humanPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    humanTag: '1-on-1 Mentorship',
    whatYouGet: [
      'Deep Psychometric & Aptitude Discovery',
      'Honest, Unbiased Career Stream Mapping',
      'Personalized Action Plan with Real Deadlines'
    ]
  },
  {
    id: 'skill-development',
    stepNumber: '02',
    title: 'Skill Development',
    subtitle: 'Hands-On Industry Mastery',
    humanHeadline: 'Learn skills that create opportunities.',
    humanSubtext: 'Theoretical degrees are no longer enough. Build high-demand technical and executive capabilities through live projects, code sprints, and mentor reviews.',
    ctaText: 'Start Learning Skills →',
    ctaAction: 'service',
    serviceId: 'skill-development',
    transitionType: 'learning-console',
    humanPhoto: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    humanTag: 'Practical Learning',
    whatYouGet: [
      '100% Practical Project-Driven Sprints',
      'Generative AI, Full-Stack & Business Analytics',
      'Recognized Certifications & Job-Ready Portfolio'
    ]
  },
  {
    id: 'jobs-placement',
    stepNumber: '03',
    title: 'Jobs & Placement (HTD)',
    subtitle: 'Hire • Train • Deploy',
    humanHeadline: 'Turn preparation into opportunity.',
    humanSubtext: "Ready for your next step? From executive resume crafting to technical mock interviews, we connect you directly with 50+ hiring partners who trust our graduates.",
    ctaText: 'Explore Jobs & Placement →',
    ctaAction: 'service',
    serviceId: 'jobs-placement',
    transitionType: 'briefcase',
    humanPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
    humanTag: '50+ Hiring Partners',
    whatYouGet: [
      'Hire-Train-Deploy (HTD) Direct Placement Support',
      'ATS-Optimized Resumes & Real-World Mock Drills',
      'Continuous Interview Assistance till Onboarding'
    ]
  },
  {
    id: 'study-abroad',
    stepNumber: '04',
    title: 'Study Abroad & Scholarships',
    subtitle: 'Global Campus Admissions',
    humanHeadline: 'Where will your journey take you?',
    humanSubtext: "Your world is bigger than one destination. Unlock prestigious universities across Italy, Europe, North America, and Australia with high-value scholarship backing.",
    ctaText: 'Explore Global Admissions →',
    ctaAction: 'service',
    serviceId: 'study-abroad',
    transitionType: 'globe',
    humanPhoto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    humanTag: 'Global Admissions',
    whatYouGet: [
      'University Shortlisting & 100% Scholarship Mentorship',
      'Complete Visa Dossier & Embassy Interview Preparation',
      'IELTS / PTE / TOEFL Preparation & Pre-Departure Briefings'
    ],
    spotlight: {
      flag: '🇮🇹',
      title: 'Study in Italy 2026',
      benefit: 'Up to 100% Tuition Waiver + Regional DSU Scholarship Stipend (~€7,000/yr)',
      tag: 'Featured Admissions Drive'
    }
  },
  {
    id: 'study-in-india',
    stepNumber: '05',
    title: 'Study in India',
    subtitle: 'Premier National Institutions',
    humanHeadline: 'Excellence within reach.',
    humanSubtext: 'Navigate competitive entrance exams (CUET, JEE, NEET, CAT) and secure merit seats at top central universities and premier professional institutes across India.',
    ctaText: 'Plan Your Study in India →',
    ctaAction: 'service',
    serviceId: 'study-in-india',
    transitionType: 'quad',
    humanPhoto: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
    humanTag: 'Premier Indian Colleges',
    whatYouGet: [
      'Competitive Exam Strategic Scoring Roadmap',
      'Central & Top Private University Admissions',
      'Direct Merit Seat Advisory & Cut-Off Guidance'
    ]
  },
  {
    id: 'school-college-programs',
    stepNumber: '06',
    title: 'School & College Ecosystem',
    subtitle: 'Institutional Excellence',
    humanHeadline: 'Building future-ready campuses.',
    humanSubtext: 'Partnering with schools, colleges, and universities to establish vibrant career counseling cells, experiential bootcamps, and faculty development programs.',
    ctaText: 'Partner for Your Campus →',
    ctaAction: 'consultation',
    serviceId: 'school-college-programs',
    transitionType: 'quad',
    humanPhoto: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    humanTag: 'Campus Ecosystem',
    whatYouGet: [
      'In-Campus Career Guidance Cells',
      'Psychometric Audits for Batch Batches',
      'Campus Recruitment Training & Industry Drives'
    ]
  },
  {
    id: 'corporate-training',
    stepNumber: '07',
    title: 'Corporate HR Solutions',
    subtitle: 'Talent Acquisition & Upskilling',
    humanHeadline: "Talent tailored to your company's vision.",
    humanSubtext: 'Custom Hire-Train-Deploy pipelines, leadership development labs, and executive upskilling programs aligned with your enterprise technology stack.',
    ctaText: 'Request Corporate Solutions →',
    ctaAction: 'consultation',
    serviceId: 'corporate-training',
    transitionType: 'corporate',
    humanPhoto: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    humanTag: 'Corporate Tie-Ups',
    whatYouGet: [
      'Tailored Hire-Train-Deploy Talent Pipelines',
      'Zero-Ramp-Up Ready Fresh Graduates',
      'Executive Leadership & Technology Upskilling'
    ]
  }
];

const MENTORSHIP_DIALOGUE_LINES: DialogueLine[] = [
  { speaker: 'MENTOR', text: 'You have great potential.', start: 0.5, end: 4.2 },
  { speaker: 'STUDENT', text: 'Thank you.', start: 4.4, end: 6.2 },
  { speaker: 'MENTOR', text: 'We will find the way.', start: 6.4, end: 8.8 }
];

export const CinematicChamber3D: React.FC<CinematicChamber3DProps> = ({
  services,
  onSelectService,
  onOpenConsultation,
  onNavigateToServicesHub,
  ambientVideoSrc,
  isAmbientVideoPlaying,
  onToggleAmbientVideo,
  ambientVideoPreset,
  onSelectAmbientVideoPreset
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeDialogueStep, setActiveDialogueStep] = useState<0 | 1 | 2>(0);
  const [autoTour, setAutoTour] = useState(false);
  const [heroMediaMode, setHeroMediaMode] = useState<'video' | 'compass'>('video');
  const [counsellingMediaMode, setCounsellingMediaMode] = useState<'video' | 'photo'>('video');

  // Ambient 3D video backdrop state
  const [internalAmbientPlaying, setInternalAmbientPlaying] = useState(true);
  const [internalAmbientPreset, setInternalAmbientPreset] = useState<'chamber' | 'compass'>('chamber');

  const activeAmbientPlaying = isAmbientVideoPlaying !== undefined ? isAmbientVideoPlaying : internalAmbientPlaying;
  const activeAmbientPreset = ambientVideoPreset !== undefined ? ambientVideoPreset : internalAmbientPreset;
  const activeAmbientSrc =
    ambientVideoSrc ||
    (activeAmbientPreset === 'chamber'
      ? '/videos/ascend-3d-ambient-chamber.mp4'
      : '/videos/ascend-compass-hero.mp4');

  const toggleAmbientVideo = onToggleAmbientVideo || (() => setInternalAmbientPlaying((prev) => !prev));
  const changeAmbientPreset =
    onSelectAmbientVideoPreset || ((preset: 'chamber' | 'compass') => setInternalAmbientPreset(preset));

  const ambientVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ambientVideoRef.current) {
      if (activeAmbientPlaying) {
        ambientVideoRef.current.play().catch(() => {});
      } else {
        ambientVideoRef.current.pause();
      }
    }
  }, [activeAmbientPlaying, activeAmbientSrc]);

  const chapter = CHAPTERS[currentChapterIndex];

  // Advance or retreat chapters
  const goToChapter = (index: number) => {
    if (index === currentChapterIndex || isFlipping) return;
    setFlipDirection(index > currentChapterIndex ? 'next' : 'prev');
    setIsFlipping(true);
    setCurrentChapterIndex(index);
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  const handleNext = () => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      goToChapter(currentChapterIndex + 1);
    } else {
      goToChapter(0);
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      goToChapter(currentChapterIndex - 1);
    } else {
      goToChapter(CHAPTERS.length - 1);
    }
  };

  // Dialogue animation ticker for Career Counselling chapter
  useEffect(() => {
    if (currentChapterIndex === 1) {
      const t1 = setTimeout(() => setActiveDialogueStep(0), 400);
      const t2 = setTimeout(() => setActiveDialogueStep(1), 2200);
      const t3 = setTimeout(() => setActiveDialogueStep(2), 3800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [currentChapterIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterIndex, isFlipping]);

  const handleCtaClick = () => {
    if (chapter.ctaAction === 'consultation') {
      onOpenConsultation();
    } else if (chapter.serviceId) {
      const s = services.find((srv) => srv.id === chapter.serviceId);
      if (s) {
        onSelectService(s);
      } else {
        onOpenConsultation();
      }
    } else {
      onOpenConsultation();
    }
  };

  return (
    <div
      ref={containerRef}
      id="cinematic-chamber-3d"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#050811] text-white flex flex-col justify-between overflow-hidden select-none border-b border-slate-800/80"
    >
      {/* ─────────────────────────────────────────────────────────────
          ATMOSPHERIC 3D BACKGROUND VIDEO & LIGHTING ENVIRONMENT
          - Seamless high-quality 3D cinematic chamber video playing in background
          - Visible behind all hero text, 3D monolith, chapter cards, and navigation
          - Semi-transparent gradient & radial vignette for WCAG AA readability
          - Deep obsidian floor reflections and cyan light rails
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Living Cinematic 3D Background Video */}
        {activeAmbientPlaying && (
          <video
            ref={ambientVideoRef}
            key={activeAmbientSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.14] transition-opacity duration-1000 scale-[1.02]"
          >
            <source src={activeAmbientSrc} type="video/mp4" />
          </video>
        )}

        {/* Soft atmospheric gradient & darkness overlay for crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/80 via-[#050811]/60 to-[#050811]/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050811_85%)] opacity-80" />

        {/* Ambient 3D architectural back wall lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-teal-500/10 blur-[130px] rounded-full" />

        {/* Floating 3D "ASCEND CAREER" letters on rear architectural wall */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-[0.08] font-black text-6xl sm:text-8xl md:text-9xl tracking-[0.25em] text-teal-200 pointer-events-none whitespace-nowrap">
          ASCEND CAREER
        </div>

        {/* Ground Floor Perspective Plane (Dark Metallic Ground) */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#02050a] via-[#081220]/60 to-transparent border-t border-teal-500/20" />

        {/* Dual Cyan Architectural Floor Light Strips */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[35%] flex justify-between px-12 sm:px-24 pointer-events-none opacity-45">
          <div className="w-[2px] h-full bg-gradient-to-t from-teal-400 via-teal-500/40 to-transparent shadow-[0_0_15px_#14b8a6]" />
          <div className="w-[2px] h-full bg-gradient-to-t from-cyan-400 via-cyan-500/40 to-transparent shadow-[0_0_15px_#06b6d4]" />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          TOP BRAND STRIP & ENVIRONMENT HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
        {/* Step Indicator & Official Motto */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-teal-500/30 flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-teal-300 uppercase">
              CHAPTER {chapter.stepNumber} / 07
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest border-l border-slate-700/60 pl-3">
            <span>ELEVATE TODAY, ACHIEVE TOMORROW</span>
          </div>
        </div>

        {/* Video Backdrop & Action Controls */}
        <div className="flex items-center gap-2">
          {/* Atmospheric 3D Video Backdrop Controller */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/85 border border-slate-700/80 backdrop-blur-md">
            <button
              onClick={toggleAmbientVideo}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeAmbientPlaying
                  ? 'bg-teal-500/15 text-teal-300 border border-teal-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={activeAmbientPlaying ? 'Pause 3D Video Backdrop' : 'Play 3D Video Backdrop'}
            >
              <Video className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">3D Backdrop</span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeAmbientPlaying ? 'bg-teal-400 animate-pulse' : 'bg-slate-500'
                }`}
              />
            </button>

            {activeAmbientPlaying && (
              <button
                onClick={() =>
                  changeAmbientPreset(activeAmbientPreset === 'chamber' ? 'compass' : 'chamber')
                }
                className="px-2 py-1 rounded-lg text-[10px] font-mono font-bold text-slate-300 hover:text-teal-300 bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60"
                title="Switch 3D background atmosphere preset"
              >
                {activeAmbientPreset === 'chamber' ? 'Chamber' : 'Monolith'}
              </button>
            )}
          </div>

          {chapter.dialogue && (
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>Real Mentor Dialogue</span>
            </div>
          )}

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-800/80 hover:bg-teal-600/30 border border-slate-700 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
            <span>Consultation</span>
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MAIN 3D ARCHITECTURAL STAGE (70% VISUAL / 20% TYPO / 10% UI)
          - Central physical steel panel that rotates / flips in 3D
          - Inside the aperture is the REAL human scene + dialogue
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 my-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={chapter.id}
            initial={{
              opacity: 0,
              rotateY: flipDirection === 'next' ? -80 : 80,
              scale: 0.92,
              filter: 'blur(4px)'
            }}
            animate={{
              opacity: 1,
              rotateY: 0,
              scale: 1,
              filter: 'blur(0px)'
            }}
            exit={{
              opacity: 0,
              rotateY: flipDirection === 'next' ? 80 : -80,
              scale: 0.92,
              filter: 'blur(4px)'
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-full max-w-5xl"
            style={{ perspective: 1200 }}
          >
            {/* ═══════════════════════════════════════════════════════════
                CASE 0: HERO COMPASS CHAMBER (From Video 1)
            ═══════════════════════════════════════════════════════════ */}
            {chapter.id === 'hero' ? (
              <div className="flex flex-col items-center text-center py-6 sm:py-10">
                {/* Media Mode Selector: Official 3D Chamber Film vs Interactive 3D Compass */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 mb-6 backdrop-blur-md">
                  <button
                    onClick={() => setHeroMediaMode('video')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                      heroMediaMode === 'video'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md scale-105'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span>Official 3D Chamber Video (7s)</span>
                  </button>
                  <button
                    onClick={() => setHeroMediaMode('compass')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                      heroMediaMode === 'compass'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-md scale-105'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Interactive 3D Compass</span>
                  </button>
                </div>

                {heroMediaMode === 'video' ? (
                  /* 3D HERO VIDEO (Video 1) */
                  <div className="w-full max-w-2xl mb-8">
                    <AscendVideoPlayer
                      src="/videos/ascend-compass-hero.mp4"
                      title="Ascend 3D Compass Chamber"
                      subtitle="Physical Chamber • Reflective Marble • Glowing Cyan Ring"
                      badge="VIDEO 1 • OFFICIAL 3D HERO FILM"
                      autoPlay={true}
                      loop={true}
                      onOpenConsultation={onOpenConsultation}
                    />
                  </div>
                ) : (
                  /* 3D FLOATING COMPASS (Interactive Compass) */
                  <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-6 flex items-center justify-center">
                    {/* Glowing Cyan Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-teal-400/40 shadow-[0_0_40px_rgba(20,184,166,0.35)] animate-[spin_30s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-teal-500/30 border-dashed animate-[spin_50s_linear_infinite_reverse]" />
                    
                    {/* Chrome Monolith Ring */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-700 via-slate-900 to-[#091522] border-2 border-slate-600/80 shadow-2xl flex items-center justify-center">
                      {/* Compass North/South/East/West markers */}
                      <span className="absolute top-2 text-[10px] font-mono font-bold text-teal-300">N</span>
                      <span className="absolute bottom-2 text-[10px] font-mono font-bold text-slate-500">S</span>
                      <span className="absolute left-2 text-[10px] font-mono font-bold text-slate-500">W</span>
                      <span className="absolute right-2 text-[10px] font-mono font-bold text-slate-500">E</span>

                      {/* Oscillating 3D Magnetic Needle */}
                      <div className="relative w-full h-full flex items-center justify-center animate-[wiggle_6s_ease-in-out_infinite]">
                        {/* North Needle Tip (Vibrant Glowing Teal/Cyan) */}
                        <div className="absolute top-7 w-2 h-14 bg-gradient-to-t from-teal-500 to-cyan-300 clip-triangle shadow-[0_0_15px_#22d3ee]" />
                        {/* South Needle Tip (Deep Navy Metallic) */}
                        <div className="absolute bottom-7 w-2 h-14 bg-gradient-to-b from-slate-600 to-slate-800 clip-triangle-down" />
                        {/* Center Brass/Chrome Pivot */}
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white via-teal-300 to-teal-800 shadow-md border border-white/60" />
                      </div>
                    </div>

                    {/* Floor Reflection of Compass */}
                    <div className="absolute -bottom-8 w-36 h-4 bg-teal-400/20 blur-lg rounded-full" />
                  </div>
                )}

                {/* Editorial Typography & Human Message */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>ONE DESTINATION. ENDLESS OPPORTUNITIES.</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.08]">
                  Your Next Chapter <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-white bg-clip-text text-transparent">
                    Starts Here.
                  </span>
                </h1>

                <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                  Guide • Train • Place • Grow • Go Global. Experience career mentoring, practical skills, and global admissions built around real people.
                </p>

                {/* Primary Dual Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_4px_20px_rgba(20,184,166,0.4)] flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
                    id="hero-start-journey"
                  >
                    <span>Begin The Journey (01 Counselling)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 transition-all flex items-center justify-center gap-2"
                    id="hero-book-consultation"
                  >
                    <Users className="w-4 h-4 text-teal-400" />
                    <span>Book a Free 1-on-1 Session</span>
                  </button>
                </div>

                {/* Trust Pillars from the Official Wall Graphic */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl text-left">
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                    <p className="text-xs font-mono font-bold text-teal-400">01</p>
                    <p className="text-sm font-bold text-white mt-0.5">EXPERT MENTORS</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">1-on-1 personalized guidance</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                    <p className="text-xs font-mono font-bold text-teal-400">02</p>
                    <p className="text-sm font-bold text-white mt-0.5">INDUSTRY TIE-UPS</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">50+ hiring corporate partners</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                    <p className="text-xs font-mono font-bold text-teal-400">03</p>
                    <p className="text-sm font-bold text-white mt-0.5">PROVEN RESULTS</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">10,000+ alumni deployed</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                    <p className="text-xs font-mono font-bold text-teal-400">04</p>
                    <p className="text-sm font-bold text-white mt-0.5">GLOBAL ACCESS</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">100% scholarship assistance</p>
                  </div>
                </div>
              </div>
            ) : (
              /* ═══════════════════════════════════════════════════════════
                 CHAPTERS 01 TO 07: PHYSICAL STEEL MONOLITH & HUMAN MOMENT
                 - High-grade brushed steel panel with industrial beveled edge
                 - Inside aperture: REAL human footage / mentor moment
                 - Human copy + What You'll Get + Emotional CTA
              ═══════════════════════════════════════════════════════════ */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* LEFT SIDE: PHYSICAL STEEL MONOLITH WITH HUMAN MEDIA APERTURE */}
                <div className="lg:col-span-6 flex flex-col items-center justify-center">
                  {/* Chapter 01 Video/Photo Toggle Switch */}
                  {chapter.id === 'career-counselling' && (
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-700/80 mb-3 backdrop-blur-md self-center">
                      <button
                        onClick={() => setCounsellingMediaMode('video')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          counsellingMediaMode === 'video'
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-sm font-extrabold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Film className="w-3 h-3" />
                        <span>Watch Mentorship Video (9s)</span>
                      </button>
                      <button
                        onClick={() => setCounsellingMediaMode('photo')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                          counsellingMediaMode === 'photo'
                            ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 shadow-sm font-extrabold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Users className="w-3 h-3" />
                        <span>View Photo</span>
                      </button>
                    </div>
                  )}

                  {chapter.id === 'career-counselling' && counsellingMediaMode === 'video' ? (
                    /* VIDEO 2: REAL MENTORSHIP SESSION IN MONOLITH */
                    <div className="w-full max-w-md">
                      <AscendVideoPlayer
                        src="/videos/ascend-mentor-session.mp4"
                        title="Personal 1-on-1 Mentorship Consultation"
                        subtitle="Mentor & Student Dialogue"
                        badge="VIDEO 2 • REAL MENTORSHIP"
                        dialogue={MENTORSHIP_DIALOGUE_LINES}
                        autoPlay={true}
                        loop={true}
                        onOpenConsultation={onOpenConsultation}
                      />
                    </div>
                  ) : (
                    <div
                      className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] rounded-2xl p-2.5 bg-gradient-to-br from-slate-600 via-slate-800 to-slate-950 border border-slate-600/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(20,184,166,0.2)] transition-transform duration-500 hover:scale-[1.02]"
                      style={{
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Metallic Corner Rivets */}
                      <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-400/80 shadow-inner" />
                      <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-400/80 shadow-inner" />
                      <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-slate-400/80 shadow-inner" />
                      <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-slate-400/80 shadow-inner" />

                      {/* Recessed Inner Aperture Frame */}
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-inner group">
                        {/* REAL HUMAN PHOTOGRAPHY / VIDEO */}
                        <img
                          src={chapter.humanPhoto}
                          alt={chapter.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                        />

                        {/* Cinematic Color Wash */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                        {/* Human Moment Tag Badge */}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-teal-500/40 text-teal-300 text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          <span>{chapter.humanTag}</span>
                        </div>

                        {/* Video 2 Mentor-Student Dialogue Subtitles */}
                        {chapter.dialogue && (
                          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-teal-500/30">
                            <div className="text-[11px] font-mono text-teal-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                              <span>Live Mentor Session</span>
                              <span className="text-slate-400 text-[10px]">Ascend Studio</span>
                            </div>

                            <AnimatePresence mode="wait">
                              {activeDialogueStep === 0 && (
                                <motion.div
                                  key="step0"
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  className="text-sm font-semibold text-white flex items-center gap-2"
                                >
                                  <span className="text-teal-300 font-bold">Mentor:</span>
                                  <span>"{chapter.dialogue.mentor}"</span>
                                </motion.div>
                              )}
                              {activeDialogueStep === 1 && (
                                <motion.div
                                  key="step1"
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  className="text-sm font-semibold text-slate-200 flex items-center gap-2"
                                >
                                  <span className="text-cyan-300 font-bold">Student:</span>
                                  <span>"{chapter.dialogue.student}"</span>
                                </motion.div>
                              )}
                              {activeDialogueStep === 2 && (
                                <motion.div
                                  key="step2"
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -4 }}
                                  className="text-sm font-semibold text-teal-200 flex items-center gap-2"
                                >
                                  <span className="text-teal-400 font-bold">Mentor:</span>
                                  <span>"{chapter.dialogue.mentorReply}"</span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}

                      {/* Study Abroad Global Orbit Overlay */}
                      {chapter.transitionType === 'globe' && chapter.spotlight && (
                        <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/90 backdrop-blur-md border border-teal-500/40">
                          <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                            <span className="text-base">{chapter.spotlight.flag}</span>
                            <span>{chapter.spotlight.title}</span>
                            <span className="ml-auto text-[10px] uppercase px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono">
                              {chapter.spotlight.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1">
                            {chapter.spotlight.benefit}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                  {/* Floor Reflection */}
                  <div className="w-64 h-3 bg-teal-500/20 blur-md rounded-full mt-3" />
                </div>

                {/* RIGHT SIDE: HUMAN EDITORIAL STORY & ACTION */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left">
                  {/* Service Number & Category */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-sm font-mono font-bold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      {chapter.stepNumber}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      {chapter.title}
                    </span>
                  </div>

                  {/* Heartfelt Human Headline */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    {chapter.humanHeadline}
                  </h2>

                  {/* Empathetic Story Copy */}
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {chapter.humanSubtext}
                  </p>

                  {/* What You'll Get (Humanized Deliverables) */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-3">
                      How Ascend Helps You
                    </p>
                    <ul className="space-y-2">
                      {chapter.whatYouGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Human CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleCtaClick}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_4px_16px_rgba(20,184,166,0.35)] flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
                      id={`chamber-cta-${chapter.id}`}
                    >
                      <span>{chapter.ctaText}</span>
                    </button>

                    <button
                      onClick={handleNext}
                      className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs border border-slate-700/80 flex items-center gap-1.5 transition-colors"
                      title="Next Chapter"
                    >
                      <span>Flip to Next</span>
                      <RotateCw className="w-3.5 h-3.5 text-teal-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          BOTTOM PHYSICAL SCRUBBER & FLIP CONTROLS
          - Clean, human, elegant navigation
          - Previous / Next buttons with flip trigger
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6">
        <div className="p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Chapter Scrubber Pills */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full py-1 scrollbar-none">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => goToChapter(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  currentChapterIndex === idx
                    ? 'bg-teal-500 text-slate-950 shadow-[0_0_12px_rgba(20,184,166,0.4)] scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{ch.stepNumber}</span>
                <span className="hidden md:inline">{ch.title}</span>
              </button>
            ))}
          </div>

          {/* Flip Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              disabled={isFlipping}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors disabled:opacity-50"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              disabled={isFlipping}
              className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              aria-label="Next service"
            >
              <span>Next Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
