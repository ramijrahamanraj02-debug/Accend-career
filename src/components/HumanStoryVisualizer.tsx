import React, { useState } from 'react';
import {
  Camera,
  Film,
  Box,
  CheckCircle2,
  Sparkles,
  Quote,
  Maximize2,
  X,
  Play,
  User,
  Calendar,
  Layers
} from 'lucide-react';
import { HumanStoryProfile } from '../data/humanStoryData';
import { AscendVideoPlayer } from './AscendVideoPlayer';

interface HumanStoryVisualizerProps {
  story: HumanStoryProfile;
  render3DElement?: () => React.ReactNode;
  initialMode?: 'hybrid' | 'photo' | 'video' | '3d';
  onOpenConsultation?: () => void;
  className?: string;
  showPerspectiveTabs?: boolean;
}

export const HumanStoryVisualizer: React.FC<HumanStoryVisualizerProps> = ({
  story,
  render3DElement,
  initialMode = 'hybrid',
  onOpenConsultation,
  className = '',
  showPerspectiveTabs = true
}) => {
  const [activeMode, setActiveMode] = useState<'hybrid' | 'photo' | 'video' | '3d'>(
    render3DElement ? initialMode : 'photo'
  );
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(-1); // -1 is heroPhoto
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Active photo source
  const currentPhoto =
    activePhotoIndex === -1
      ? story.heroPhoto
      : {
          url: story.fieldMoments[activePhotoIndex].url,
          alt: story.fieldMoments[activePhotoIndex].title,
          caption: story.fieldMoments[activePhotoIndex].description,
          badge: 'FIELD DOCUMENTATION'
        };

  return (
    <div
      className={`rounded-3xl bg-slate-900/90 border border-slate-800/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between ${className}`}
      id={`human-visualizer-${story.id}`}
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div>
        {/* Top Control Bar: Perspective Toggle (3D vs Human Photography vs Supplementary Video) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-teal-400 uppercase">
              AUTHENTIC HUMAN STORYTELLING
            </span>
          </div>

          {showPerspectiveTabs && (
            <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              {render3DElement && (
                <button
                  onClick={() => setActiveMode('3d')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                    activeMode === '3d'
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id={`mode-btn-3d-${story.id}`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Architecture</span>
                </button>
              )}

              <button
                onClick={() => setActiveMode('photo')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeMode === 'photo'
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                id={`mode-btn-photo-${story.id}`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Real Photography</span>
              </button>

              <button
                onClick={() => setActiveMode('video')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  activeMode === 'video'
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                id={`mode-btn-video-${story.id}`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Video Clip</span>
              </button>

              {render3DElement && (
                <button
                  onClick={() => setActiveMode('hybrid')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all hidden md:flex ${
                    activeMode === 'hybrid'
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  id={`mode-btn-hybrid-${story.id}`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Dual (3D + Human)</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Display Area Based on Selected Mode */}
        {activeMode === '3d' && render3DElement && (
          <div className="w-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#070d18] border border-slate-800 p-6">
            {render3DElement()}
          </div>
        )}

        {activeMode === 'video' && (
          <div className="w-full mb-4">
            <AscendVideoPlayer
              src={story.videoClip.src}
              poster={story.heroPhoto.url}
              title={story.videoClip.title}
              subtitle={story.videoClip.subtitle}
              badge={story.videoClip.badge}
              dialogue={story.videoClip.dialogue as any}
              autoPlay={true}
              loop={true}
              onOpenConsultation={onOpenConsultation}
              className="rounded-2xl shadow-xl border border-teal-500/20"
            />
          </div>
        )}

        {activeMode === 'photo' && (
          <div className="space-y-4">
            {/* Main Stage Photo with Glassmorphic Badge & Lightbox Trigger */}
            <div className="relative rounded-2xl overflow-hidden group border border-slate-700/80 bg-slate-950 aspect-[16/10] shadow-xl">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Photo Top Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                  {currentPhoto.badge}
                </span>
              </div>

              {/* Lightbox Zoom Trigger */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md"
                title="Expand photography"
              >
                <Maximize2 className="w-4 h-4 text-teal-400" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 border border-slate-800/90 backdrop-blur-md">
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  {currentPhoto.caption}
                </p>
              </div>
            </div>

            {/* Field Moments Filmstrip Thumbnails */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Field Documentation Gallery ({story.fieldMoments.length + 1} photos)
                </span>
                <span className="text-[10px] text-teal-400">Click to switch stage</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {/* Hero Photo Thumbnail */}
                <button
                  onClick={() => setActivePhotoIndex(-1)}
                  className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all group ${
                    activePhotoIndex === -1
                      ? 'border-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.4)] scale-102'
                      : 'border-slate-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={story.heroPhoto.url}
                    alt="Hero session"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent" />
                  <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/70 text-teal-300">
                    Main
                  </span>
                </button>

                {/* Additional Field Photos */}
                {story.fieldMoments.map((moment, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all group ${
                      activePhotoIndex === idx
                        ? 'border-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.4)] scale-102'
                        : 'border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={moment.url}
                      alt={moment.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent" />
                    <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/70 text-slate-200 truncate max-w-[90%]">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HYBRID MODE: Side-by-side or stacked 3D + Human Photography */}
        {activeMode === 'hybrid' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Left Column: 3D Render Element */}
            {render3DElement && (
              <div className="md:col-span-6 flex flex-col justify-center rounded-2xl bg-[#060b16] border border-slate-800 p-4 relative overflow-hidden group">
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 text-slate-300 text-[10px] font-mono font-bold uppercase">
                    3D Model / Concept
                  </span>
                </div>
                <div className="w-full py-4 flex items-center justify-center">
                  {render3DElement()}
                </div>
                <div className="text-center pt-2 border-t border-slate-800/60">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Theoretical & Scientific Framework
                  </span>
                </div>
              </div>
            )}

            {/* Right Column: Real Human Photography / Session */}
            <div className={render3DElement ? 'md:col-span-6' : 'md:col-span-12'}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 h-full min-h-[260px] flex flex-col justify-end p-4 group">
                <img
                  src={currentPhoto.url}
                  alt={currentPhoto.alt}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-[10px] font-mono font-bold uppercase">
                      Real Human Reality
                    </span>
                    <button
                      onClick={() => setActiveMode('video')}
                      className="px-2 py-1 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-[10px] font-bold border border-slate-700 flex items-center gap-1 transition-colors"
                    >
                      <Film className="w-3 h-3 text-teal-400" />
                      <span>Watch Video</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-200 font-medium leading-relaxed line-clamp-2">
                    {currentPhoto.caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mentor Credential & Quote Card */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative shrink-0">
            <img
              src={story.mentor.avatarUrl}
              alt={story.mentor.name}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full object-cover border-2 border-teal-400/80 shadow-md"
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              ✓
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-black text-white">{story.mentor.name}</h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold">
                {story.mentor.experience}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{story.mentor.role}</p>
            <p className="text-xs text-slate-300 italic mt-2 border-l-2 border-teal-500/50 pl-2.5">
              &ldquo;{story.mentor.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Student Impact Card */}
        <div className="mt-3 p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={story.studentSuccess.avatarUrl}
              alt={story.studentSuccess.studentName}
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full object-cover border border-teal-500/40 shrink-0"
            />
            <div className="truncate">
              <span className="text-xs font-bold text-white block truncate">
                {story.studentSuccess.studentName}
              </span>
              <span className="text-[11px] text-teal-300 block truncate">
                {story.studentSuccess.roleOrDestination}
              </span>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
              VERIFIED OUTCOME
            </span>
            <span className="text-xs font-black text-teal-300">
              {story.studentSuccess.metric}
            </span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for photography */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-teal-400 uppercase">
                  {currentPhoto.badge}
                </span>
                <p className="text-sm text-white font-medium mt-1">
                  {currentPhoto.caption}
                </p>
              </div>

              {onOpenConsultation && (
                <button
                  onClick={() => {
                    setLightboxOpen(false);
                    onOpenConsultation();
                  }}
                  className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shrink-0 transition-transform hover:scale-105"
                >
                  Book Consultation for this Track
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
