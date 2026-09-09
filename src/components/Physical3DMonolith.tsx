import React, { useState, useEffect, useRef } from 'react';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  RotateCw,
  CheckCircle2,
  Calendar,
  Sparkles,
  Award,
  Layers,
  Eye
} from 'lucide-react';
import { ASCEND_TRACKS, AscendTrack } from '../data/ascendTracksData';
import { ServiceVertical } from '../types';

interface Physical3DMonolithProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  onNavigateToServicesHub: () => void;
}

export const Physical3DMonolith: React.FC<Physical3DMonolithProps> = ({
  services,
  onSelectService,
  onOpenConsultation,
  onNavigateToServicesHub
}) => {
  // Track indices
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  // Rotation degrees around Y axis: increments by 180deg for each flip
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  // We have a front face and a back face.
  // When rotation is an even multiple of 180deg (0, 360, 720...), front face is facing front.
  // When rotation is an odd multiple of 180deg (180, 540, 900...), back face is facing front.
  const isFrontFacing = Math.round(rotationDegrees / 180) % 2 === 0;

  // Compute which track goes to front and which goes to back
  const [frontTrack, setFrontTrack] = useState<AscendTrack>(ASCEND_TRACKS[0]);
  const [backTrack, setBackTrack] = useState<AscendTrack>(ASCEND_TRACKS[1]);

  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const FLIP_INTERVAL = 5500; // 5.5s pause between automatic 3D flips

  // Handler to flip to next track
  const handleFlipNext = () => {
    const nextIdx = (currentTrackIndex + 1) % ASCEND_TRACKS.length;
    const nextRotation = rotationDegrees + 180;

    // If currently front-facing, back face will become visible, so prepare backTrack
    if (isFrontFacing) {
      setBackTrack(ASCEND_TRACKS[nextIdx]);
    } else {
      setFrontTrack(ASCEND_TRACKS[nextIdx]);
    }

    setRotationDegrees(nextRotation);
    setCurrentTrackIndex(nextIdx);
    setProgressPercent(0);
  };

  // Handler to flip to previous track
  const handleFlipPrev = () => {
    const prevIdx = (currentTrackIndex - 1 + ASCEND_TRACKS.length) % ASCEND_TRACKS.length;
    const prevRotation = rotationDegrees - 180;

    if (isFrontFacing) {
      setBackTrack(ASCEND_TRACKS[prevIdx]);
    } else {
      setFrontTrack(ASCEND_TRACKS[prevIdx]);
    }

    setRotationDegrees(prevRotation);
    setCurrentTrackIndex(prevIdx);
    setProgressPercent(0);
  };

  // Direct jump to a track by index
  const handleJumpToTrack = (index: number) => {
    if (index === currentTrackIndex) return;

    const targetTrack = ASCEND_TRACKS[index];
    const nextRotation = rotationDegrees + 180;

    if (isFrontFacing) {
      setBackTrack(targetTrack);
    } else {
      setFrontTrack(targetTrack);
    }

    setRotationDegrees(nextRotation);
    setCurrentTrackIndex(index);
    setProgressPercent(0);
  };

  // Automatic flip timer and progress bar
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      return;
    }

    const startTime = Date.now();
    const intervalMs = 50;

    progressTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / FLIP_INTERVAL) * 100);
      setProgressPercent(pct);
    }, intervalMs);

    autoTimerRef.current = setTimeout(() => {
      handleFlipNext();
    }, FLIP_INTERVAL);

    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isAutoPlaying, isHovered, currentTrackIndex, rotationDegrees]);

  const activeTrack = ASCEND_TRACKS[currentTrackIndex];

  // Helper to open the full service
  const handleActionClick = (track: AscendTrack) => {
    const matchedService = services.find((s) => s.id === track.serviceId);
    if (matchedService) {
      onSelectService(matchedService);
    } else {
      onOpenConsultation();
    }
  };

  // Render content of a single panel face (front or back)
  const renderPanelFace = (track: AscendTrack, isBack: boolean) => (
    <div
      className={`absolute inset-0 rounded-3xl bg-[#09111e] border-2 border-slate-700/80 shadow-[0_25px_60px_rgba(2,6,15,0.9)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden select-none backface-hidden ${
        isBack ? '[transform:rotateY(180deg)_translateZ(14px)]' : '[transform:translateZ(14px)]'
      }`}
      style={{
        background: 'linear-gradient(145deg, #0e1726 0%, #080e18 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.8)'
      }}
    >
      {/* Top Specular Rim Light */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/80 to-transparent" />

      {/* Top Header Row of the Panel */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-mono font-black tracking-widest uppercase">
            TRACK {track.trackNumber}
          </span>
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
            Ascend Comprehensive Pathway
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        </div>
      </div>

      {/* 
        SPECIALIZED SERVICE IMAGE LAYOUT
        - Dedicated aspect ratio container maintaining proportions across viewports without stretching
        - Uses object-position: center top for portraits so human faces/eyes are never cropped
      */}
      <div className="my-4">
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-inner group">
          {/* Inner Image Frame Container maintaining aspect ratio */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-56 sm:max-h-60 overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src={track.image.url}
              alt={track.image.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{
                objectPosition: 'center top',
                objectFit: 'cover'
              }}
              loading="eager"
            />

            {/* Subtle Gradient Vignette to frame the photograph naturally */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

            {/* Verified Photo Caption Pill */}
            <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-teal-300 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>{track.image.caption}</span>
              </span>

              <span className="px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-slate-300">
                Ascend Authentic Record
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Storytelling & Human Description */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
            {track.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-teal-400 mt-1 italic">
            {track.humanQuote}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
            {track.description}
          </p>

          {/* Key Deliverables Checkmarks */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {track.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 mt-3">
          <button
            onClick={() => handleActionClick(track)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-teal-500/25 transition-transform hover:scale-105 flex items-center gap-2"
          >
            <span>{track.actionText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-400" />
            <span>Book 1-on-1 Guidance</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full relative py-6 select-none">
      {/* Top Minimal Controls (No text labels or numbers) */}
      <div className="max-w-4xl mx-auto mb-3 px-4 flex items-center justify-end gap-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/40 text-slate-200 transition-colors"
          title={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
          aria-label={isAutoPlaying ? 'Pause rotation' : 'Resume rotation'}
        >
          {isAutoPlaying ? (
            <Pause className="w-3.5 h-3.5 text-teal-400" />
          ) : (
            <Play className="w-3.5 h-3.5 text-amber-400" />
          )}
        </button>

        <button
          onClick={handleFlipPrev}
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-slate-300 hover:text-white transition-colors"
          title="Previous Track"
          aria-label="Previous Track"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleFlipNext}
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 text-slate-300 hover:text-white transition-colors"
          title="Next Track"
          aria-label="Next Track"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Subtle Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-75"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 
        3D STAGE & PERSPECTIVE CONTAINER
        - perspective: 1400px creates realistic focal depth
        - 3D slab dimensions: max-w-4xl, height 640px - 680px
      */}
      <div
        className="max-w-4xl mx-auto px-4 relative [perspective:1400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 
          THE PHYSICAL 3D SLAB
          Rotates smoothly around Y-axis.
          Includes:
          - Front Face
          - Back Face
          - Left Extrusion Edge (28px)
          - Right Extrusion Edge (28px)
          - Top Extrusion Edge (28px)
          - Bottom Extrusion Edge (28px)
        */}
        <div
          className="relative w-full h-[620px] sm:h-[640px] [transform-style:preserve-3d] transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `rotateY(${rotationDegrees}deg)`
          }}
        >
          {/* FRONT FACE (Shown on even multiples of 180deg) */}
          {renderPanelFace(frontTrack, false)}

          {/* BACK FACE (Shown on odd multiples of 180deg) */}
          {renderPanelFace(backTrack, true)}

          {/* 
            PHYSICAL 3D EDGES FOR VISIBLE PANEL THICKNESS (28px)
            When the slab rotates, you clearly see the solid metallic slab thickness!
          */}

          {/* Right Edge (Width: 28px, positioned on right side) */}
          <div
            className="absolute top-0 bottom-0 right-[-14px] w-[28px] rounded-r-sm [transform:rotateY(90deg)] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #09121f 0%, #1e293b 50%, #09121f 100%)',
              borderTop: '1px solid rgba(20,184,166,0.3)',
              borderBottom: '1px solid rgba(20,184,166,0.3)'
            }}
          />

          {/* Left Edge (Width: 28px, positioned on left side) */}
          <div
            className="absolute top-0 bottom-0 left-[-14px] w-[28px] rounded-l-sm [transform:rotateY(-90deg)] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #09121f 0%, #1e293b 50%, #09121f 100%)',
              borderTop: '1px solid rgba(20,184,166,0.3)',
              borderBottom: '1px solid rgba(20,184,166,0.3)'
            }}
          />

          {/* Top Edge (Height: 28px, positioned on top) */}
          <div
            className="absolute top-[-14px] left-0 right-0 h-[28px] rounded-t-sm [transform:rotateX(90deg)] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #1e293b 0%, #0b1322 100%)',
              borderLeft: '1px solid rgba(20,184,166,0.3)',
              borderRight: '1px solid rgba(20,184,166,0.3)'
            }}
          />

          {/* Bottom Edge (Height: 28px, positioned on bottom) */}
          <div
            className="absolute bottom-[-14px] left-0 right-0 h-[28px] rounded-b-sm [transform:rotateX(-90deg)] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #0b1322 0%, #040810 100%)',
              borderLeft: '1px solid rgba(20,184,166,0.3)',
              borderRight: '1px solid rgba(20,184,166,0.3)'
            }}
          />
        </div>

        {/* Realistic Floor Shadow & Specular Ground Reflection */}
        <div className="relative mt-8 flex flex-col items-center pointer-events-none">
          {/* Radial Shadow that responds to depth */}
          <div
            className="w-[85%] h-8 rounded-full bg-black/80 blur-xl transition-all duration-700"
            style={{
              transform: `scaleX(${Math.abs(Math.cos((rotationDegrees * Math.PI) / 180)) * 0.4 + 0.6})`
            }}
          />
          {/* Subtle cyan floor glow */}
          <div className="w-[60%] h-4 rounded-full bg-teal-500/10 blur-lg -mt-4" />
        </div>
      </div>

      {/* 
        TRACK SELECTOR SCRUBBER (01 through 12)
        Allows visitors to optionally click any specific track while preserving automatic rotation
      */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2">
          {ASCEND_TRACKS.map((track, idx) => (
            <button
              key={track.id}
              onClick={() => handleJumpToTrack(idx)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1 ${
                idx === currentTrackIndex
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700'
              }`}
              title={`Jump to Track ${track.trackNumber}: ${track.title}`}
            >
              <span>{track.trackNumber}</span>
              <span className="hidden md:inline font-sans text-[11px] font-normal text-slate-300">
                {idx === currentTrackIndex ? track.title.split(' ')[0] : ''}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
