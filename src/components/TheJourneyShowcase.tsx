import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, Users, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';

export interface JourneyScene {
  id: string;
  roomCode: string;
  emotionalHeadline: string;
  serviceName: string;
  serviceId: string;
  context: string;
  image: string;
  focalPoint: string;
  accent: string;
  keyOutcome: string;
}

export const JOURNEY_SCENES: JourneyScene[] = [
  {
    id: 'pathways-lab',
    roomCode: 'SPACE 01',
    emotionalHeadline: 'Find Your Direction',
    serviceName: 'Career Guidance',
    serviceId: 'career-guidance',
    context: 'Collaborative strategy session mapping multi-branch academic and professional trajectories across aptitude matrices.',
    image: '/images/career-guidance-compass.jpg',
    focalPoint: 'center center',
    accent: '#E5FE40',
    keyOutcome: '3-Year Personalized Career Pathway'
  },
  {
    id: 'admissions-desk',
    roomCode: 'SPACE 02',
    emotionalHeadline: 'Find Your University',
    serviceName: 'Study in India & Direct Admissions',
    serviceId: 'study-in-india',
    context: 'Direct student enrollment verification, entrance rank counseling, and quota allocation assistance.',
    image: '/images/study-in-india-direct-admissions.jpg',
    focalPoint: 'center 40%',
    accent: '#3BFFAD',
    keyOutcome: 'Verified Institutional Admission'
  },
  {
    id: 'study-abroad-space',
    roomCode: 'SPACE 03',
    emotionalHeadline: 'Go Beyond Borders',
    serviceName: 'Study Abroad',
    serviceId: 'study-abroad',
    context: 'Global university admissions, full scholarship profiling, visa filing, and pre-departure briefings.',
    image: '/images/study-abroad-global-pathways.jpg',
    focalPoint: 'center 40%',
    accent: '#00828A',
    keyOutcome: 'Global University Admission & Visa Approval'
  },
  {
    id: 'academic-advisory',
    roomCode: 'SPACE 04',
    emotionalHeadline: 'Choose Your Stream',
    serviceName: 'Stream & Course Selection',
    serviceId: 'career-guidance',
    context: 'Structured Class 10 & 12 stream selection bridging Science, Commerce, and Arts with future market demands.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    accent: '#00828A',
    keyOutcome: 'Clear Academic Specialization Fit'
  },
  {
    id: 'psychometric-lounge',
    roomCode: 'SPACE 05',
    emotionalHeadline: 'Discover Your Strengths',
    serviceName: 'Career & Aptitude Assessment',
    serviceId: 'career-guidance',
    context: 'In-depth behavioral, cognitive, and personality evaluation measuring RIASEC profile and analytical aptitudes.',
    image: '/images/discover-your-strengths-assessment.jpg',
    focalPoint: 'center 45%',
    accent: '#E5FE40',
    keyOutcome: '16-Page Scientific Diagnostic Report'
  },
  {
    id: 'placement-coaching',
    roomCode: 'SPACE 06',
    emotionalHeadline: 'Find Your Opportunity',
    serviceName: 'Jobs & Placement Readiness',
    serviceId: 'jobs-placement',
    context: 'Interview stress testing, ATS resume optimization, salary negotiation, and direct recruiter introductions.',
    image: '/images/jobs-placement-readiness.jpg',
    focalPoint: 'center 40%',
    accent: '#3BFFAD',
    keyOutcome: 'Direct Interview Call Pipeline'
  }
];

interface TheJourneyShowcaseProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const TheJourneyShowcase: React.FC<TheJourneyShowcaseProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [selectedScene, setSelectedScene] = useState<JourneyScene>(JOURNEY_SCENES[0]);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;
    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.warn('The Journey background video autoplay caught:', err);
      }
    };
    playVideo();

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        video.play().catch(() => {});
      }
    };

    const interval = setInterval(() => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    }, 2500);

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isMuted]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  const handleOpenService = (serviceId: string) => {
    const matched = services.find((s) => s.id === serviceId) || services[0];
    onSelectService(matched);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-b border-[#1F1F1F] relative overflow-hidden" id="the-journey">
      {/* ─────────────────────────────────────────────────────────────
          CONTINUOUS CONSULTATION CINEMATIC BACKGROUND VIDEO
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/ascend-consultation-journey.mp4"
          poster="/videos/ascend-consultation-journey-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 transition-opacity duration-700"
          style={{ objectPosition: 'center 45%' }}
        >
          <source src="/videos/ascend-consultation-journey.mp4" type="video/mp4" />
          <source src="/videos/ascend-mentor-session.mp4" type="video/mp4" />
        </video>

        {/* Cinematic dark scrims to ensure high contrast & legibility for the cards and text */}
        <div className="absolute inset-0 bg-[#0D0D0D]/75 backdrop-blur-[1px] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none" />
      </div>

      {/* Audio Mute/Unmute Toggle Button */}
      <div className="absolute top-6 sm:top-8 right-4 sm:right-8 z-20 pointer-events-auto">
        <button
          onClick={toggleMute}
          id="journey-sound-toggle-btn"
          aria-label={isMuted ? "Unmute consultation audio" : "Mute consultation audio"}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0D0D0D]/85 hover:bg-[#0D0D0D] backdrop-blur-md border border-white/20 hover:border-[#E5FE40]/60 text-white/90 text-xs font-mono transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-white/70" />
              <span className="hidden sm:inline text-[11px] text-white/70">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#E5FE40] animate-pulse" />
              <span className="hidden sm:inline text-[11px] text-[#E5FE40] font-bold">Sound On</span>
            </>
          )}
        </button>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: One destination. Endless opportunities. */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            One destination. <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-white/90">
              Endless opportunities.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#8A8A8A] font-light max-w-2xl mx-auto leading-relaxed">
            Real guidance happening inside our physical consultation spaces. Every journey begins with a dedicated mentor and an uncompromised roadmap.
          </p>
        </div>

        {/* The 6 Authentic Ascend Spaces — Grid of Designed Visual Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNEY_SCENES.map((scene) => (
            <div
              key={scene.id}
              onClick={() => handleOpenService(scene.serviceId)}
              className="group bg-[#161616]/90 backdrop-blur-md border-2 border-[#262626] hover:border-[#444444] transition-all duration-300 cred-box-dark flex flex-col justify-between cursor-pointer overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
              style={{
                boxShadow: '10px 10px 0px #000000'
              }}
            >
              {/* TOP PART: Designed Visual Frame (Properly composed, no cut faces) */}
              <div className="relative w-full aspect-[16/10.5] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={scene.image}
                  alt={scene.serviceName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: scene.focalPoint }}
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/30 pointer-events-none" />

                {/* Ascend Watermark Mark */}
                <div className="absolute top-3 left-3 flex items-center gap-2 p-1.5 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#262626]">
                  <AscendLogoMark className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono text-white/80 font-bold tracking-wider">{scene.roomCode}</span>
                </div>
              </div>

              {/* BOTTOM PART: Identity & Minimalist Copy */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#161616]/95">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: scene.accent }}
                    >
                      {scene.emotionalHeadline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#E5FE40] transition-colors">
                    {scene.serviceName}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {scene.context}
                  </p>
                </div>

                {/* Bottom interactive row */}
                <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                  <div className="text-[#D1D1D1] text-[11px] truncate max-w-[200px]">
                    Outcome: <span className="text-white font-semibold">{scene.keyOutcome}</span>
                  </div>

                  <span className="text-[#E5FE40] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            Every session is conducted in-person at our centers or via secure digital consultation rooms
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#161616] text-white font-mono text-xs uppercase tracking-wider border border-[#262626] hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors cred-btn-tactile cred-box-dark cursor-pointer inline-flex items-center gap-2"
          >
            <span>Reserve A 1-to-1 Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
