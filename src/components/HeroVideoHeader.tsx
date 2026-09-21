import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

interface HeroVideoHeaderProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
}

export const HeroVideoHeader: React.FC<HeroVideoHeaderProps> = ({
  onOpenConsultation,
  onExploreServices
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict configuration for 100% continuous uninterrupted autoplay & looping
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;

    const startPlayback = () => {
      if (!video) return;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Retry on user touch or interaction if browser initially delayed
        });
      }
    };

    startPlayback();

    // Prevent any stopping: if video pauses for ANY reason, immediately resume
    const handlePause = () => {
      startPlayback();
    };

    // If loop boundary is reached, force instant seamless restart
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        startPlayback();
      }
    };

    // Continuous watchdogs for visibility changes (tab switch, window resize, focus)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };

    const handleWindowFocus = () => {
      startPlayback();
    };

    const handleUserInteraction = () => {
      if (video && video.paused) {
        startPlayback();
      }
    };

    // Active heartbeat watchdog: checks every 600ms and guarantees continuous playback
    const watchdogTimer = setInterval(() => {
      if (video && video.paused) {
        startPlayback();
      }
    }, 600);

    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', startPlayback);
    video.addEventListener('canplay', startPlayback);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });

    return () => {
      clearInterval(watchdogTimer);
      if (video) {
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('loadeddata', startPlayback);
        video.removeEventListener('canplay', startPlayback);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  const scrollToExhibition = () => {
    const el = document.getElementById('ascend-3d-exhibition');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onExploreServices) {
      onExploreServices();
    }
  };

  return (
    <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden bg-[#0A0A0A] border-b border-[#1F1F1F]">
      {/* ─────────────────────────────────────────────────────────────
          1. CONTINUOUS CAMPUS CINEMATIC BACKGROUND VIDEO
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/ascend-campus-hero.mp4"
          poster="/videos/ascend-campus-hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-100 transition-opacity duration-700"
          style={{ objectPosition: 'center 40%' }}
        >
          <source src="/videos/ascend-campus-hero.mp4" type="video/mp4" />
          <source src="/videos/ascend-3d-wall-reveal.mp4" type="video/mp4" />
        </video>

        {/* Subtle contrast scrims so the exact video and on-screen typography are vividly visible */}
        <div className="absolute inset-0 bg-[#0D0D0D]/15 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/25 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent pointer-events-none" />
      </div>

      {/* Audio Mute/Unmute Toggle Button */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20 pointer-events-auto">
        <button
          onClick={toggleMute}
          id="hero-sound-toggle-btn"
          aria-label={isMuted ? "Unmute hero soundtrack" : "Mute hero soundtrack"}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#0D0D0D]/80 hover:bg-[#0D0D0D] backdrop-blur-md border border-white/20 hover:border-[#E5FE40]/60 text-white/90 text-xs font-mono transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
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

      {/* ─────────────────────────────────────────────────────────────
          2. CINEMATIC HERO STATEMENT (ELEGANT LOWER FRAMING)
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* High-contrast headline with crisp drop shadow */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
          Your next chapter <br />
          <span className="font-editorial italic font-normal text-white/95 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            starts here.
          </span>
        </h1>

        {/* Five pillars sub-headline */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.3em] uppercase text-[#E5FE40] max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
        </p>

        {/* Small, High-Impact CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToExhibition}
            id="hero-start-journey-btn"
            className="px-8 py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase cred-btn-tactile cred-box-white flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#d8f235] shadow-[0_12px_32px_rgba(229,254,64,0.3)]"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="px-7 py-4 bg-[#0D0D0D]/90 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider border border-white/30 hover:border-white/60 transition-colors cred-btn-tactile cred-box-dark cursor-pointer shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
          >
            Claim Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
