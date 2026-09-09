import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  Sparkles,
  Subtitles,
  CheckCircle2,
  Calendar,
  MessageSquare
} from 'lucide-react';

export interface DialogueLine {
  speaker: 'MENTOR' | 'STUDENT' | 'SYSTEM';
  text: string;
  start: number; // in seconds
  end: number;
}

interface AscendVideoPlayerProps {
  src: string;
  title: string;
  subtitle?: string;
  badge?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  dialogue?: DialogueLine[];
  onOpenConsultation?: () => void;
  className?: string;
  showControls?: boolean;
  hideOnError?: boolean;
}

export const AscendVideoPlayer: React.FC<AscendVideoPlayerProps> = ({
  src,
  title,
  subtitle,
  badge,
  poster,
  autoPlay = false,
  loop = true,
  dialogue,
  onOpenConsultation,
  className = '',
  showControls = true,
  hideOnError = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [activeDialogue, setActiveDialogue] = useState<DialogueLine | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const cur = video.currentTime;
      setCurrentTime(cur);

      if (dialogue && dialogue.length > 0) {
        const found = dialogue.find((d) => cur >= d.start && cur <= d.end);
        setActiveDialogue(found || null);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setHasError(true);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [dialogue]);

  // If no source is available, cleanly hide the component
  if (!src || src.trim() === '') {
    return null;
  }

  // If the video is broken or encounters an error, replace with clean high-quality poster image, or hide if no poster
  if (hasError) {
    if (poster) {
      return (
        <div className={`relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl ${className}`}>
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
            <img
              src={poster}
              alt={title || 'Ascend Overview'}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

            {/* Header Overlay */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              {badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-[10px] font-mono font-bold text-teal-300 uppercase tracking-widest">
                  {badge}
                </span>
              )}
              <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700/80 text-[10px] font-mono text-slate-300 ml-auto">
                Ascend Visual Record
              </span>
            </div>

            {/* Bottom Title & Subtitle */}
            {(title || subtitle) && (
              <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
                {title && (
                  <p className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                    {title}
                  </p>
                )}
                {subtitle && (
                  <p className="text-xs text-slate-300 drop-shadow-sm mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
    // No source or broken without poster: cleanly hide
    return null;
  }

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/30 shadow-[0_20px_50px_rgba(4,10,20,0.8)] group ${className}`}
    >
      {/* Outer Cyan Neon Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-80 z-20" />

      {/* Top Header Overlay */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-[10px] font-mono font-bold text-teal-300 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>{badge}</span>
            </span>
          )}
          {title && (
            <span className="text-xs font-bold text-white tracking-wide drop-shadow-md hidden sm:inline">
              {title}
            </span>
          )}
        </div>

        {/* Audio Mute/Unmute Quick Badge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="pointer-events-auto px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-colors flex items-center gap-1.5 backdrop-blur-md"
          title={isMuted ? 'Click to unmute sound' : 'Mute sound'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px] text-slate-300">Unmute Audio</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span className="text-[11px] text-teal-300">Sound ON</span>
            </>
          )}
        </button>
      </div>

      {/* Main Video Element */}
      <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Big Center Play Icon (Shown when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.5)] transform hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>
        )}

        {/* Subtitles Overlay (Particularly for dialogue in Video 2) */}
        {showSubtitles && activeDialogue && (
          <div className="absolute bottom-14 left-4 right-4 z-20 flex justify-center pointer-events-none">
            <div className="px-4 py-2 rounded-xl bg-slate-950/85 border border-teal-500/40 backdrop-blur-md text-center max-w-lg shadow-2xl animate-fade-in">
              <span
                className={`text-[10px] font-mono font-bold tracking-widest uppercase block mb-0.5 ${
                  activeDialogue.speaker === 'MENTOR' ? 'text-teal-400' : 'text-cyan-300'
                }`}
              >
                {activeDialogue.speaker}:
              </span>
              <p className="text-sm sm:text-base font-bold text-white tracking-wide">
                &ldquo;{activeDialogue.text}&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* Live Audio Waves Animation (when unmuted & playing) */}
        {!isMuted && isPlaying && (
          <div className="absolute bottom-16 right-4 z-10 flex items-end gap-1 px-2.5 py-1.5 rounded-lg bg-slate-950/70 border border-teal-500/30 backdrop-blur-sm pointer-events-none">
            <span className="w-1 h-3 bg-teal-400 rounded-full animate-[bounce_0.6s_infinite]" />
            <span className="w-1 h-5 bg-cyan-400 rounded-full animate-[bounce_0.8s_infinite_0.1s]" />
            <span className="w-1 h-2 bg-teal-400 rounded-full animate-[bounce_0.5s_infinite_0.2s]" />
            <span className="w-1 h-4 bg-cyan-400 rounded-full animate-[bounce_0.7s_infinite_0.15s]" />
            <span className="text-[10px] font-mono font-bold text-teal-300 ml-1">AUDIO LIVE</span>
          </div>
        )}
      </div>

      {/* Bottom Controls Bar */}
      {showControls && (
        <div className="p-3 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent border-t border-slate-800/80 flex flex-col gap-2">
          {/* Progress Scrubber */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-400 w-10 text-right">
              {formatTime(currentTime)}
            </span>

            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="0"
                max={duration || 100}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 hover:accent-teal-300 transition-all"
              />
            </div>

            <span className="text-[11px] font-mono text-slate-400 w-10">
              {formatTime(duration)}
            </span>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
              </button>

              {dialogue && dialogue.length > 0 && (
                <button
                  onClick={() => setShowSubtitles(!showSubtitles)}
                  className={`p-1.5 rounded-lg text-xs font-mono font-bold transition-colors flex items-center gap-1 ${
                    showSubtitles
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  title="Toggle Subtitles"
                >
                  <Subtitles className="w-4 h-4" />
                  <span className="hidden sm:inline text-[10px]">CC</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-extrabold text-xs shadow-sm transition-transform hover:scale-105 flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
