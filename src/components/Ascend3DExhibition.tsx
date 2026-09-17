import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';

export interface ExhibitionTrack {
  trackNumber: string;
  emotionalHeadline: string;
  serviceName: string;
  serviceId: string;
  shortPromise: string;
  visualType: 'image';
  fallbackImage: string;
  focalPoint: string;
  tag: string;
  accentColor: string;
}

export const EXHIBITION_TRACKS: ExhibitionTrack[] = [
  {
    trackNumber: '01',
    emotionalHeadline: 'Find Your Direction',
    serviceName: 'Career Guidance',
    serviceId: 'career-guidance',
    shortPromise: 'Scientific psychometric assessment and 1-to-1 senior career roadmap counseling.',
    visualType: 'image',
    fallbackImage: '/images/discover-your-strengths-assessment.jpg',
    focalPoint: 'center 45%',
    tag: 'DIRECTION',
    accentColor: '#E5FE40'
  },
  {
    trackNumber: '02',
    emotionalHeadline: 'Build Your Edge',
    serviceName: 'Skill Development',
    serviceId: 'skill-development',
    shortPromise: 'Industry-aligned technical masterclasses, practical portfolio projects, and soft skill labs.',
    visualType: 'image',
    fallbackImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    tag: 'MASTERY',
    accentColor: '#3BFFAD'
  },
  {
    trackNumber: '03',
    emotionalHeadline: 'Find Your Opportunity',
    serviceName: 'Jobs & Placement',
    serviceId: 'jobs-placement',
    shortPromise: 'Direct corporate interview pipelines, ATS resume refinement, and executive salary negotiation.',
    visualType: 'image',
    fallbackImage: '/images/jobs-placement-readiness.jpg',
    focalPoint: 'center 40%',
    tag: 'PLACEMENT',
    accentColor: '#6A35FF'
  },
  {
    trackNumber: '04',
    emotionalHeadline: 'Go Beyond Borders',
    serviceName: 'Study Abroad',
    serviceId: 'study-abroad',
    shortPromise: 'Global university admissions, full scholarship profiling, and end-to-end visa filing.',
    visualType: 'image',
    fallbackImage: '/images/study-abroad-global-pathways.jpg',
    focalPoint: 'center 40%',
    tag: 'GLOBAL',
    accentColor: '#00828A'
  },
  {
    trackNumber: '05',
    emotionalHeadline: 'Find Your University',
    serviceName: 'Study in India',
    serviceId: 'study-in-india',
    shortPromise: 'Premier Indian institutional shortlisting, entrance exam strategy, and quota counseling.',
    visualType: 'image',
    fallbackImage: '/images/study-in-india-direct-admissions.jpg',
    focalPoint: 'center 40%',
    tag: 'CAMPUS',
    accentColor: '#E5FE40'
  },
  {
    trackNumber: '06',
    emotionalHeadline: 'Grow Through Learning',
    serviceName: 'School & College Programs',
    serviceId: 'school-college-programs',
    shortPromise: 'Campus career assessment drives, faculty orientation, and institutional skill hubs.',
    visualType: 'image',
    fallbackImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    tag: 'ACADEMIA',
    accentColor: '#3BFFAD'
  },
  {
    trackNumber: '07',
    emotionalHeadline: 'Build Better Teams',
    serviceName: 'Corporate Training & HR',
    serviceId: 'corporate-training-hr',
    shortPromise: 'Workforce capability enhancement, managerial workshops, and tailored corporate hiring.',
    visualType: 'image',
    fallbackImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 20%',
    tag: 'ENTERPRISE',
    accentColor: '#6A35FF'
  },
  {
    trackNumber: '08',
    emotionalHeadline: 'Design Your Identity',
    serviceName: 'Graphic Design & Creative Studio',
    serviceId: 'graphic-design',
    shortPromise: 'Bespoke corporate identity systems, marketing collateral, pitch decks, and Figma UI design.',
    visualType: 'image',
    fallbackImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    tag: 'CREATIVE',
    accentColor: '#00828A'
  },
  {
    trackNumber: '09',
    emotionalHeadline: 'Scale Your Platform',
    serviceName: 'Website Design & Maintenance',
    serviceId: 'web-services',
    shortPromise: 'High-performance web architecture, modern responsive UI engineering, and 24/7 SLA maintenance.',
    visualType: 'image',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    tag: 'ENGINEERING',
    accentColor: '#3BFFAD'
  }
];

interface Ascend3DExhibitionProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const Ascend3DExhibition: React.FC<Ascend3DExhibitionProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipAngle, setFlipAngle] = useState(0);

  const totalTracks = EXHIBITION_TRACKS.length;
  const currentTrack = EXHIBITION_TRACKS[currentIndex];

  // Map track to service vertical object
  const matchedService =
    services.find((s) => s.id === currentTrack.serviceId) || services[0];

  // Auto-flip timer (6 seconds per track)
  useEffect(() => {
    if (isFlipping) return;

    const timer = setInterval(() => {
      triggerFlip((currentIndex + 1) % totalTracks);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, isFlipping, totalTracks]);

  // Physical 3D Flip function
  const triggerFlip = (nextIndex: number) => {
    if (isFlipping || nextIndex === currentIndex) return;

    setIsFlipping(true);

    // Rotate the 3D monolithic slab
    setFlipAngle((prev) => prev + 180);

    // Midway: update the data
    setTimeout(() => {
      setCurrentIndex(nextIndex);
    }, 280);

    // Complete flip
    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-b border-[#1F1F1F] overflow-hidden"
      id="ascend-3d-exhibition"
    >
      {/* Background Architectural Ambient Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle_at_50%_30%,rgba(0,130,138,0.06),rgba(229,254,64,0.02)_40%,transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Exhibition Architectural Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            YOUR JOURNEY STARTS HERE
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono text-[#8A8A8A] uppercase tracking-[0.2em]">
            Stand inside the gallery. Each track physically turns to reveal its identity.
          </p>
        </div>

        {/* 3D Exhibition Stage: Two-column architectural layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Clean, minimalist service identity (Only Service Name & Emotional Promise) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Human / Emotional Message (Line 1) + Service Name (Line 2) */}
            <div className="space-y-2 min-h-[130px] flex flex-col justify-center">
              <p
                className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300"
                style={{ color: currentTrack.accentColor }}
              >
                {currentTrack.emotionalHeadline}
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {currentTrack.serviceName}
              </h3>

              <p className="text-sm text-[#8A8A8A] leading-relaxed font-light pt-1">
                {currentTrack.shortPromise}
              </p>
            </div>

            {/* Action CTA & Navigation Controls */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectService(matchedService)}
                className="px-6 py-3.5 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center gap-2.5 cursor-pointer hover:bg-[#d8f235]"
                id={`explore-track-${currentTrack.serviceId}`}
              >
                <span>Explore {currentTrack.serviceName}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3.5 bg-[#161616] text-white font-mono text-xs uppercase tracking-wider border border-[#262626] hover:border-[#444444] transition-colors cred-btn-tactile cred-box-dark cursor-pointer"
              >
                Book Session
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: The Physical 3D Monolithic Exhibition Slab (The Image is the Service) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div
              className="relative w-full max-w-[620px] aspect-[16/10] sm:aspect-[16/10.5]"
              style={{ perspective: '1600px' }}
            >
              {/* 3D Monolithic Rotating Slab Container */}
              <div
                className="w-full h-full relative cursor-pointer group"
                onClick={() => onSelectService(matchedService)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${flipAngle}deg)`,
                  transition: 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                {/* Visual Front Face */}
                <div
                  className="absolute inset-0 bg-[#161616] border-2 border-[#262626] overflow-hidden cred-box-dark flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    boxShadow: '16px 16px 0px #000000'
                  }}
                >
                  {/* Designed Visual Frame */}
                  <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={currentTrack.fallbackImage}
                      alt={currentTrack.serviceName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: currentTrack.focalPoint }}
                    />

                    {/* Subtle Cinematic Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none" />

                    {/* Top Watermark Plate */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 p-1.5 bg-[#0D0D0D]/80 backdrop-blur-md border border-[#262626]">
                      <AscendLogoMark className="w-4 h-4" />
                    </div>

                    {/* Interactive Inspect Cue */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#0D0D0D]/90 backdrop-blur-md border border-[#262626] text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Click to Enter</span>
                      <Maximize2 className="w-3.5 h-3.5 text-[#E5FE40]" />
                    </div>

                    {/* Physical Bevel Highlight Line */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-white/20 pointer-events-none" />
                  </div>

                  {/* Slab Bottom Label Bar (Only Service Name & Identity) */}
                  <div className="p-4 bg-[#141414] border-t border-[#262626] flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {currentTrack.serviceName}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#E5FE40] group-hover:translate-x-1 transition-transform">
                      <span>View Full Track</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Reverse Backside (Visible momentarily during the 180° physical turn) */}
                <div
                  className="absolute inset-0 bg-[#161616] border-2 border-[#262626] overflow-hidden cred-box-dark flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    boxShadow: '16px 16px 0px #000000'
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={currentTrack.fallbackImage}
                      alt={currentTrack.serviceName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: currentTrack.focalPoint }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none" />
                  </div>

                  <div className="p-4 bg-[#141414] border-t border-[#262626] flex items-center justify-between">
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {currentTrack.serviceName}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E5FE40]">
                      <span>View Full Track</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
