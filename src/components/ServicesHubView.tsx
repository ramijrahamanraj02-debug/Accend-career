import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceCard3D } from './ServiceCard3D';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAudience, setFilterAudience] = useState<string>('all');

  const filteredServices = services.filter((s) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      if (filterAudience === 'all') return true;
      if (filterAudience === 'web-creative') {
        return ['web-services', 'graphic-design'].includes(s.id);
      }
      if (filterAudience === 'careers') {
        return ['career-guidance', 'skill-development', 'jobs-placement'].includes(s.id);
      }
      if (filterAudience === 'global') {
        return ['study-abroad', 'study-in-india'].includes(s.id);
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
    <div className="min-h-screen bg-[#050505] py-16 px-4 sm:px-6 lg:px-8 text-white">
      {/* Top Tagline & Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4 cred-box-dark">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          THE UNIFIED ASCEND DIRECTORY
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          the complete <span className="font-editorial italic font-normal text-neutral-300">blueprint.</span>
        </h1>

        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed font-light">
          Explore all 09 verticals sequentially — engineered from foundational psychometrics and career guidance to enterprise graphic design, web engineering, and maintenance.
        </p>
      </div>

      {/* 9 Verticals Grid View */}
      <div className="max-w-7xl mx-auto">
          {/* Search & Filter Bar */}
          <div className="mb-12 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-neutral-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search verticals or deliverables (e.g. ATS Resume, Visa, Next.js, Figma, Psychometric)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#0e0e12] border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-all font-mono"
                id="services-search-input"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 overflow-x-auto justify-center">
              {[
                { key: 'all', label: 'All 09' },
                { key: 'careers', label: '01–03 Career' },
                { key: 'global', label: '04–07 Global' },
                { key: 'web-creative', label: '08–09 Web & Design' },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilterAudience(f.key)}
                  className={`px-3.5 py-3 text-xs font-mono uppercase tracking-wider font-bold whitespace-nowrap transition-all cred-btn-tactile cursor-pointer ${
                    filterAudience === f.key
                      ? 'bg-white text-black border border-white cred-box-white'
                      : 'bg-[#121216] text-neutral-400 border border-neutral-800 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-[#0c0c0f] border border-neutral-800 cred-box-dark max-w-xl mx-auto">
              <p className="text-neutral-400 text-sm font-mono">
                No matching verticals found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterAudience('all');
                }}
                className="mt-4 px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider cred-btn-tactile cred-box-white"
              >
                Reset Search
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

      {/* Global CTA */}
      <div className="mt-20 text-center bg-[#0a0a0d] border border-neutral-800 p-8 sm:p-12 max-w-3xl mx-auto cred-box-dark">
        <h3 className="text-2xl font-bold text-white mb-2">
          not sure which track suits your goals?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto mb-6 font-light">
          Schedule an evaluation with a senior partner to determine your optimal career or digital architecture.
        </p>
        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 bg-white text-black font-bold text-sm tracking-wider uppercase cred-btn-tactile cred-box-white cursor-pointer"
          id="hub-request-consultation-btn"
        >
          Claim Priority Evaluation
        </button>
      </div>
    </div>
  );
};

