import React, { useState } from 'react';
import { CareerTrackItem } from '../data/tracksData';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Compass,
  Calendar,
  Users,
  GraduationCap,
  Layers
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
  // Tab state: 'overview' or 'deliverables'
  const [activeCardTab, setActiveCardTab] = useState<'overview' | 'deliverables'>('overview');
  const [isHovered, setIsHovered] = useState(false);

  const isFeaturedStudyAbroad = track.id === 'track-09';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id={`track-card-${track.trackNumber}`}
      className={`relative w-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 backdrop-blur-xl ${
        isHovered
          ? 'border-teal-500/60 shadow-[0_20px_45px_-12px_rgba(20,184,166,0.25)] bg-slate-900/95 -translate-y-1'
          : 'border-slate-800/90 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.7)] bg-slate-900/85'
      } ${isFeaturedStudyAbroad ? 'ring-1 ring-teal-500/40' : ''}`}
    >
      {/* Ambient background glow */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-30 bg-teal-500' : 'opacity-10 bg-slate-700'
        }`}
      />

      <div>
        {/* Top Header: Track Number & Category */}
        <div className="flex items-center justify-between gap-2 mb-3">
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

          <span className="text-[11px] font-mono font-medium text-slate-400">
            {track.category}
          </span>
        </div>

        {/* Featured Opportunity Banner (Study in Italy highlight for Track 09) */}
        {isFeaturedStudyAbroad && track.featuredOpportunity && (
          <div className="mb-3 px-3 py-2 rounded-xl bg-teal-950/50 border border-teal-500/40 flex items-center justify-between gap-2">
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

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-teal-300 transition-colors">
          {track.title}
        </h3>

        {/* Interactive View Tabs: Overview vs Deliverables */}
        <div className="mt-3.5 inline-flex p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-bold">
          <button
            onClick={() => setActiveCardTab('overview')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeCardTab === 'overview'
                ? 'bg-teal-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveCardTab('deliverables')}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeCardTab === 'deliverables'
                ? 'bg-teal-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Deliverables ({track.deliverables.length})
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mt-4 min-h-[140px]">
          {activeCardTab === 'overview' ? (
            <div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {track.shortDesc}
              </p>

              {/* Deliverables / modules preview tags */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Key Modules & Deliverables:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {((track.subServices as string[] | undefined) || track.deliverables || []).slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      {sub}
                    </span>
                  ))}
                  {((track.subServices as string[] | undefined) || track.deliverables || []).length > 3 && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-teal-950/40 border border-teal-500/30 text-teal-300 font-mono">
                      +{((track.subServices as string[] | undefined) || track.deliverables || []).length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-teal-400 uppercase tracking-wider mb-1 font-bold">
                Verified Outcomes & Roadmap:
              </div>
              {track.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Strip */}
      <div className="pt-4 border-t border-slate-800/80 mt-5 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => onExploreService(track.serviceId)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-xs tracking-wide uppercase transition-all shadow-md shadow-teal-500/20 flex items-center gap-1.5 group/btn"
        >
          <span>Explore Track</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onBookConsultation}
          className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 hover:border-teal-500/40 transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-400" />
          <span>Book Guidance</span>
        </button>
      </div>
    </div>
  );
};
