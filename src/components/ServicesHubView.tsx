import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, Filter, CheckCircle2, ArrowRight, RotateCw, Layers } from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceCard3D } from './ServiceCard3D';
import { CareerTracksSection } from './CareerTracksSection';

interface ServicesHubViewProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const ServicesHubView: React.FC<ServicesHubViewProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [hubViewMode, setHubViewMode] = useState<'12-tracks' | '7-verticals'>('12-tracks');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAudience, setFilterAudience] = useState<string>('all');

  const filteredServices = services.filter((s) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      if (filterAudience === 'all') return true;
      if (filterAudience === 'students') {
        return ['career-guidance', 'study-in-india', 'study-abroad'].includes(s.id);
      }
      if (filterAudience === 'professionals') {
        return ['skill-development', 'jobs-placement', 'career-guidance'].includes(s.id);
      }
      if (filterAudience === 'institutional') {
        return ['school-college-programs', 'corporate-training'].includes(s.id);
      }
      return true;
    }

    const matchesTitle = s.title.toLowerCase().includes(query);
    const matchesDesc = s.shortDesc.toLowerCase().includes(query);
    const matchesSubServices = s.subServices.some((sub) =>
      sub.title.toLowerCase().includes(query) || sub.description.toLowerCase().includes(query)
    );

    return matchesTitle || matchesDesc || matchesSubServices;
  });

  return (
    <div className="min-h-screen bg-[#0b1120] py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Tagline & Header */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The Unified Ascend Service Architecture
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          OUR SERVICES
        </h1>

        <p className="text-sm sm:text-base font-bold text-teal-400 uppercase tracking-[0.25em] mt-3">
          GUIDE • TRAIN • PLACE • GROW • GO GLOBAL
        </p>

        <p className="text-slate-300 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
          Explore our complete service directory. Flip any of the 12 Career Tracks in genuine 3D to uncover modules, deliverables, and customized roadmaps.
        </p>

        {/* View Mode Toggle */}
        <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-inner">
          <button
            onClick={() => setHubViewMode('12-tracks')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              hubViewMode === '12-tracks'
                ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 shadow-md shadow-teal-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
            id="hub-toggle-12-tracks"
          >
            <RotateCw className="w-4 h-4" />
            <span>12 Interactive Tracks (3D Flip Cards)</span>
          </button>

          <button
            onClick={() => setHubViewMode('7-verticals')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
              hubViewMode === '7-verticals'
                ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 shadow-md shadow-teal-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
            id="hub-toggle-7-verticals"
          >
            <Layers className="w-4 h-4" />
            <span>7 Institutional Verticals</span>
          </button>
        </div>
      </div>

      {hubViewMode === '12-tracks' ? (
        <CareerTracksSection
          services={services}
          onSelectService={onSelectService}
          onOpenConsultation={onOpenConsultation}
          title="Interactive 3D Career Tracks"
          subtitle="All 12 tracks feature realistic 3D Y-axis rotation with responsive perspective, depth shadows, and teal edge lighting. Hover on desktop or tap on mobile to flip."
        />
      ) : (
        /* 7 Institutional Verticals Grid View */
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter Bar */}
          <div className="mb-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programs (e.g. ATS Resume, Visa, Psychometric, AI, Admission)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                id="services-search-input"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto shrink-0 overflow-x-auto justify-center">
              {[
                { key: 'all', label: 'All 7' },
                { key: 'students', label: 'Students' },
                { key: 'professionals', label: 'Careers' },
                { key: 'institutional', label: 'Campuses & HR' }
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilterAudience(f.key)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterAudience === f.key
                      ? 'bg-teal-500 text-slate-950 shadow-sm'
                      : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
              <p className="text-slate-400 text-sm">
                No matching services found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterAudience('all');
                }}
                className="mt-3 px-4 py-2 rounded-lg bg-teal-500 text-slate-950 font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service, idx) => (
                <ServiceCard3D
                  key={service.id}
                  service={service}
                  onSelect={onSelectService}
                  featured={idx === 0}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Global CTA */}
      <div className="mt-16 text-center bg-slate-900/80 border border-slate-800 rounded-3xl p-8 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-2">
          Not sure which vertical suits your profile best?
        </h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto mb-6">
          Take a 5-minute complimentary profile assessment with an Ascend Career senior mentor to determine your ideal pathway.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-md shadow-teal-500/20 transition-all hover:scale-105"
          id="hub-request-consultation-btn"
        >
          Book Free Diagnostic Consultation
        </button>
      </div>
    </div>
  );
};

