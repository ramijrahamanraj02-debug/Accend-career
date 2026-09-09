import React, { useState, useRef } from 'react';
import { CareerTrackItem } from '../data/tracksData';
import { TrackVisual3D } from './TrackVisual3D';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  RotateCw,
  ExternalLink,
  ChevronRight,
  Compass
} from 'lucide-react';

interface TrackFlipCard3DProps {
  track: CareerTrackItem;
  onExploreService: (serviceId: string) => void;
  onBookConsultation: () => void;
}

export const TrackFlipCard3D: React.FC<TrackFlipCard3DProps> = ({
  track,
  onExploreService,
  onBookConsultation
}) => {
  // Mobile tap flip toggle & desktop hover flip state
  const [isFlippedManual, setIsFlippedManual] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D mouse parallax tilt
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Card flips if hovered on desktop OR manually tapped/toggled (mobile/tablet or keyboard)
  const isFlipped = isHovered || isFlippedManual;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrain subtle tilt between -6 and +6 degrees
    const tiltX = -((y - centerY) / centerY) * 6;
    const tiltY = ((x - centerX) / centerX) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // If the click is on a button or link, let that trigger
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    // Otherwise toggle flip state (especially useful for touch/mobile)
    setIsFlippedManual((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlippedManual((prev) => !prev);
    }
  };

  const isFeaturedStudyAbroad = track.id === 'track-09';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`Track ${track.trackNumber}: ${track.title}. Press Enter or tap to flip card.`}
      className="group relative w-full h-[470px] select-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-3xl"
      style={{
        perspective: '1200px'
      }}
      id={`track-card-${track.trackNumber}`}
    >
      {/* 3D Rotating Core Container */}
      <div
        className="w-full h-full relative rounded-3xl transition-transform duration-700 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped
            ? `rotateY(180deg) rotateX(${tilt.x * 0.5}deg)`
            : `rotateY(${tilt.y * 0.5}deg) rotateX(${tilt.x * 0.5}deg)`,
          transition: 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* ========================================================= */}
        {/* FRONT FACE (rotateY: 0deg)                                */}
        {/* ========================================================= */}
        <div
          className={`absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border backdrop-blur-xl transition-all duration-300 ${
            isFeaturedStudyAbroad
              ? 'bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-[#0c1a2e]/95 border-teal-500/40 shadow-[0_20px_45px_-12px_rgba(20,184,166,0.25)]'
              : 'bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border-slate-800/90 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          {/* Front Ambient Specular Glow */}
          <div
            className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none transition-opacity ${
              isFeaturedStudyAbroad
                ? 'bg-teal-500/20 opacity-90'
                : 'bg-teal-500/10 opacity-40 group-hover:opacity-80'
            }`}
          />

          {/* Top Header: Track Number & Category */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs font-black tracking-widest uppercase">
                  TRACK {track.trackNumber}
                </span>
                {isFeaturedStudyAbroad && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-teal-500/20 border border-teal-400/50 text-[10px] font-mono font-black text-teal-300 uppercase tracking-wider animate-pulse">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                    FEATURED
                  </span>
                )}
              </div>

              {/* Status / Category tag */}
              <span className="text-[11px] font-mono font-medium text-slate-400">
                {track.category}
              </span>
            </div>

            {/* Featured Opportunity Banner (Study in Italy highlight for Track 09) */}
            {isFeaturedStudyAbroad && track.featuredOpportunity && (
              <div className="mt-3 px-3 py-2 rounded-xl bg-teal-950/50 border border-teal-500/40 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-teal-400/40 text-teal-300 font-mono text-[10px] font-bold">
                    {track.featuredOpportunity.countryCode}
                  </span>
                  <span className="text-xs font-bold text-white truncate">
                    {track.featuredOpportunity.campaign}
                  </span>
                </div>
                <span className="text-[10px] text-teal-400 font-mono font-semibold shrink-0">
                  Admissions Open
                </span>
              </div>
            )}
          </div>

          {/* Center 3D Icon Container */}
          <div className="my-auto py-2 flex flex-col items-center justify-center text-center">
            <div
              className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                isFeaturedStudyAbroad
                  ? 'bg-gradient-to-br from-teal-900/40 via-slate-900 to-slate-950 border border-teal-400/50 shadow-[0_10px_30px_rgba(20,184,166,0.3)]'
                  : 'bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950 border border-slate-700/60 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group-hover:border-teal-500/50 group-hover:shadow-[0_10px_25px_rgba(20,184,166,0.15)]'
              }`}
            >
              {/* Decorative Corner Metallic Accents */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-teal-400/40 rounded-tl" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-teal-400/40 rounded-tr" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-teal-400/40 rounded-bl" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-teal-400/40 rounded-br" />

              {/* 3D Vector Visual */}
              <TrackVisual3D
                iconType={track.iconType}
                className="w-18 h-18 sm:w-20 sm:h-20"
                isHovered={isHovered}
                highlightItaly={isFeaturedStudyAbroad}
              />
            </div>

            {/* Service Title */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-4 group-hover:text-teal-300 transition-colors">
              {track.title}
            </h3>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mt-2 leading-relaxed max-w-sm px-1">
              {track.shortDesc}
            </p>
          </div>

          {/* Bottom Flip / Explore Indicator */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-teal-400 font-bold group-hover:text-teal-300 transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
            </div>

            <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
              <RotateCw className="w-3 h-3 text-slate-500" />
              <span>Hover / Tap to flip</span>
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BACK FACE (rotateY: 180deg)                               */}
        {/* ========================================================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-teal-500/50 bg-gradient-to-b from-[#0f172a] via-[#0b1329] to-[#070d1d] shadow-[0_25px_50px_-12px_rgba(20,184,166,0.3)] backdrop-blur-xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Subtle teal perimeter accent light */}
          <div className="absolute inset-0 rounded-3xl bg-teal-500/5 pointer-events-none" />

          {/* Top Header of Back Face */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-teal-500/20 text-teal-300 font-mono text-xs font-black">
                  TRACK {track.trackNumber}
                </span>
                <span className="text-xs font-mono text-teal-400 font-bold uppercase">
                  {track.category}
                </span>
              </div>

              {/* Quick flip-back button for mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlippedManual(false);
                  setIsHovered(false);
                }}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Flip back to front"
                aria-label="Flip back to front"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Title & Detailed Overview */}
            <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {track.title}
            </h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2">
              {track.details}
            </p>
          </div>

          {/* Center: Key Deliverables & Sub-Services Checklist */}
          <div className="my-auto py-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-teal-400">
                Key Deliverables & Sub-Services
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {track.deliverables.length} Modules
              </span>
            </div>

            <div className="space-y-1.5 max-h-[190px] overflow-y-auto pr-1">
              {track.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/60 border border-slate-800/80 rounded-lg px-2.5 py-1.5 hover:border-teal-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Special Highlight for Study Abroad Track 09 */}
            {isFeaturedStudyAbroad && (
              <div className="mt-2.5 px-3 py-1.5 rounded-lg bg-teal-950/70 border border-teal-500/40 text-[11px] text-teal-300 font-medium flex items-center justify-between">
                <span>Featured: Italy Public University Admissions</span>
                <span className="font-mono text-[10px] text-teal-400 font-bold">DSU Grant Guidance</span>
              </div>
            )}
          </div>

          {/* Bottom Actions CTA */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExploreService(track.serviceId);
              }}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-black text-xs shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-2"
              id={`track-${track.trackNumber}-explore-cta`}
            >
              <span>Explore Service</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onBookConsultation();
              }}
              className="px-3 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-teal-300 text-xs font-bold border border-slate-700 hover:border-teal-500/40 transition-colors shrink-0"
              title="Book 1-on-1 Consultation"
              aria-label="Book 1-on-1 Consultation"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
