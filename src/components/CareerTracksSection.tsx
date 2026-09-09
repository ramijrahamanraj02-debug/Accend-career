import React, { useState } from 'react';
import { CAREER_TRACKS, CareerTrackItem } from '../data/tracksData';
import { TrackFlipCard3D } from './TrackFlipCard3D';
import { Sparkles, Layers, RotateCw, Filter, Search, CheckCircle2 } from 'lucide-react';
import { ServiceVertical } from '../types';

interface CareerTracksSectionProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  title?: string;
  subtitle?: string;
}

export const CareerTracksSection: React.FC<CareerTracksSectionProps> = ({
  services,
  onSelectService,
  onOpenConsultation,
  title = 'Interactive 3D Service Tracks',
  subtitle = 'Tracks 01 through 12 form our unified service experience. Hover or tap any card for a full 180° 3D flip with deep deliverables and sub-services.'
}) => {
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleExploreServiceId = (serviceId: string) => {
    const matchedService = services.find((s) => s.id === serviceId);
    if (matchedService) {
      onSelectService(matchedService);
    } else if (services.length > 0) {
      onSelectService(services[0]);
    }
  };

  const filteredTracks = CAREER_TRACKS.filter((track) => {
    // Audience filter
    if (selectedAudience !== 'all') {
      if (selectedAudience === 'students' && track.audience !== 'students' && track.audience !== 'both') {
        return false;
      }
      if (selectedAudience === 'professionals' && track.audience !== 'professionals' && track.audience !== 'both') {
        return false;
      }
      if (selectedAudience === 'institutions' && track.audience !== 'institutions') {
        return false;
      }
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = track.title.toLowerCase().includes(q);
      const matchNumber = track.trackNumber.includes(q);
      const matchDesc = track.shortDesc.toLowerCase().includes(q);
      const matchDeliverables = track.deliverables.some((d) => d.toLowerCase().includes(q));
      return matchTitle || matchNumber || matchDesc || matchDeliverables;
    }

    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="tracks-3d-section">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wider uppercase mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Full 3D Flip Experience</span>
            <span className="text-teal-600">•</span>
            <span className="font-mono text-teal-400">12 Structured Tracks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm font-extrabold text-teal-400 uppercase tracking-[0.25em] mt-3">
            GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
          </p>

          <p className="text-sm sm:text-base text-slate-300 mt-3.5 leading-relaxed">
            {subtitle}
          </p>

          {/* Interactive Mode & Filters */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Search Input */}
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 12 Tracks (e.g., Italy, Resume, Stream, AI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                id="tracks-search-input"
              />
            </div>

            {/* Audience Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto justify-center">
              {[
                { id: 'all', label: 'All 12 Tracks', count: 12 },
                { id: 'students', label: 'Students', count: 6 },
                { id: 'professionals', label: 'Professionals', count: 5 },
                { id: 'institutions', label: 'Campuses & HR', count: 2 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAudience(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 ${
                    selectedAudience === tab.id
                      ? 'bg-teal-500 text-slate-950 border-teal-400 font-bold shadow-md shadow-teal-500/25'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                  }`}
                  id={`track-filter-${tab.id}`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-md text-[10px] font-mono ${
                      selectedAudience === tab.id
                        ? 'bg-slate-950/20 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Flip Card Grid */}
        {filteredTracks.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No tracks matched &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedAudience('all');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTracks.map((track) => (
              <TrackFlipCard3D
                key={track.id}
                track={track}
                onExploreService={handleExploreServiceId}
                onBookConsultation={onOpenConsultation}
              />
            ))}
          </div>
        )}

        {/* Bottom Interaction Guide */}
        <div className="mt-14 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <RotateCw className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              <strong>Desktop:</strong> Hover over any card for instantaneous 3D Y-axis rotation (650ms easing)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
            <span>
              <strong>Mobile / Touch:</strong> Tap any card to flip and inspect full modules & deliverables
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
