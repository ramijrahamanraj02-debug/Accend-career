import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Plane, Globe2, Award, Calendar, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { ServiceVertical } from '../types';

export interface FeaturedOpportunityItem {
  id: string;
  countryCode: string;
  country: string;
  tabLabel?: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  highlights: string[];
  intakeSeason: string;
  deadlineInfo: string;
  flightPath: {
    origin: string;
    destination: string;
    originCoords: { x: number; y: number };
    destCoords: { x: number; y: number };
    arcControl: { x: number; y: number };
  };
}

const DEFAULT_OPPORTUNITIES: FeaturedOpportunityItem[] = [
  {
    id: 'italy-dsu',
    countryCode: 'IT',
    country: 'Italy',
    tabLabel: 'Italy • Public & DSU',
    category: 'Study in Italy • Featured Campaign',
    title: 'Study in Italy — Public Universities & Regional Scholarships',
    subtitle: 'End-to-End European University Admissions, DSU/EDISU Government Grants & 100% English Programs',
    badge: 'DSU Scholarships Open',
    highlights: [
      'Regional scholarship guidance: Up to €7,200/year living stipend + full tuition waiver (DSU/ERGO)',
      'World-ranked public universities with 100% English-taught Bachelor’s & Master’s degrees',
      'Complete pre-enrollment, Universitaly portal filing, CIMEA comparability & Schengen visa support'
    ],
    intakeSeason: 'Upcoming Fall / Spring Cycles',
    deadlineInfo: 'Pre-Enrollment Open — Regional Quotas Filling',
    flightPath: {
      origin: 'New Delhi (DEL)',
      destination: 'Rome / Milan (FCO/MXP)',
      originCoords: { x: 260, y: 155 },
      destCoords: { x: 140, y: 110 },
      arcControl: { x: 200, y: 70 }
    }
  },
  {
    id: 'italy-politecnico',
    countryCode: 'IT',
    country: 'Italy',
    tabLabel: 'Italy • Politecnico STEM',
    category: 'Study in Italy • Featured Campaign',
    title: 'Study in Italy — Politecnico STEM & Engineering Excellence',
    subtitle: 'World-Renowned Engineering, Computer Science, AI & Architecture (Milano & Torino)',
    badge: 'Top-50 Global Engineering',
    highlights: [
      'Direct application curation for Politecnico di Milano & Politecnico di Torino',
      'English-taught Masters in AI, Robotics, Automotive, Mechanical & Sustainable Architecture',
      'Merit-based institutional waivers, cutting-edge labs & EU industry internship pipelines'
    ],
    intakeSeason: 'Semester 1 (Autumn) & Semester 2 (Spring)',
    deadlineInfo: 'Portfolio & GRE/TOLC Submissions Open',
    flightPath: {
      origin: 'New Delhi (DEL)',
      destination: 'Milan / Turin (MXP/TRN)',
      originCoords: { x: 260, y: 155 },
      destCoords: { x: 135, y: 105 },
      arcControl: { x: 195, y: 65 }
    }
  },
  {
    id: 'italy-business',
    countryCode: 'IT',
    country: 'Italy',
    tabLabel: 'Italy • Business & Design',
    category: 'Study in Italy • Featured Campaign',
    title: 'Study in Italy — Business, Management & Creative Design',
    subtitle: 'European Commercial Capitals, Luxury Brand Management, Economics & Industrial Design',
    badge: 'Business & Creative Arts',
    highlights: [
      'Top English-taught curricula in Global Management, Finance, and International Relations',
      'World capital of fashion & design (Milan, Florence & Rome) with direct industry immersions',
      '20 hours/week student work rights and 1-year post-study job seeker visa (Permesso di Soggiorno)'
    ],
    intakeSeason: 'Multiple Rolling Intakes',
    deadlineInfo: 'Early Evaluation & Scholarship Rounds Active',
    flightPath: {
      origin: 'New Delhi (DEL)',
      destination: 'Rome / Florence / Milan (FCO/FLR)',
      originCoords: { x: 260, y: 155 },
      destCoords: { x: 142, y: 112 },
      arcControl: { x: 202, y: 72 }
    }
  }
];

interface FeaturedOpportunitiesProps {
  onExplore: (serviceId?: string) => void;
  onBookConsultation: () => void;
}

export const FeaturedOpportunities: React.FC<FeaturedOpportunitiesProps> = ({
  onExplore,
  onBookConsultation
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  const activeOpp = DEFAULT_OPPORTUNITIES[selectedIndex];

  // Auto-cycle every 9 seconds if user hasn't manually hovered or clicked
  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % DEFAULT_OPPORTUNITIES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [isAutoCycling]);

  const { originCoords, destCoords, arcControl } = activeOpp.flightPath;
  const pathD = `M ${originCoords.x} ${originCoords.y} Q ${arcControl.x} ${arcControl.y} ${destCoords.x} ${destCoords.y}`;

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#090f1d] border-b border-slate-800/90 relative overflow-hidden"
      id="featured-opportunities-section"
      onMouseEnter={() => setIsAutoCycling(false)}
      onMouseLeave={() => setIsAutoCycling(true)}
    >
      {/* Background Soft Atmospheric Radiance */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            {/* Soft Animated Featured Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>✦ FEATURED OPPORTUNITY ✦</span>
              <span className="text-teal-600">•</span>
              <span className="text-teal-400 font-mono">Dynamic Spotlight</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Featured Global & Career Opportunities
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Real-time admission cycles, priority scholarships, and active corporate hiring pipelines highlighted by the Ascend Career Advisory Board.
            </p>
          </div>

          {/* Quick Destination Selectors (Demonstrating full reusability) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {DEFAULT_OPPORTUNITIES.map((opp, idx) => (
              <button
                key={opp.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setIsAutoCycling(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border shrink-0 ${
                  selectedIndex === idx
                    ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-extrabold ${
                  selectedIndex === idx ? 'bg-slate-950 text-teal-300' : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}>
                  {opp.countryCode}
                </span>
                <span>{opp.tabLabel || opp.country}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Card with 3D Trajectory Visualization */}
        <div className="rounded-3xl bg-slate-900/85 border border-teal-500/30 overflow-hidden shadow-[0_25px_60px_-15px_rgba(13,148,136,0.25)] backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column (7 cols on lg) */}
            <div className="p-6 sm:p-10 lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 border border-teal-500/30 font-mono text-xs font-black text-teal-300 tracking-wider">
                    {activeOpp.countryCode}
                  </span>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400">
                    {activeOpp.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/15 text-teal-300 border border-teal-500/40">
                    <Sparkles className="w-3 h-3 text-teal-400" />
                    {activeOpp.badge}
                  </span>
                </div>

                {/* Primary Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {activeOpp.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeOpp.subtitle}
                </p>

                {/* Key Benefits Checklist */}
                <div className="mt-6 space-y-2.5">
                  {activeOpp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Intake Deadlines */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    {activeOpp.intakeSeason}
                  </span>
                  <span className="text-xs font-semibold text-teal-300">
                    {activeOpp.deadlineInfo}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={onBookConsultation}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Apply / Book Consultation</span>
                  </button>

                  <button
                    onClick={() => onExplore('study-abroad')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
                  >
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 3D Flight Path & Interactive Map Canvas (5 cols on lg) */}
            <div className="p-6 sm:p-10 lg:col-span-5 bg-slate-950/70 border-t lg:border-t-0 lg:border-l border-slate-800/90 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Ascend Flight Trajectory
                  </span>
                </div>
                <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  Direct Pipeline
                </span>
              </div>

              {/* Visual 3D Trajectory Map */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#090d16] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* SVG Coordinate Grid Map */}
                <svg viewBox="0 0 340 220" className="w-full h-full" fill="none">
                  <defs>
                    <linearGradient id="flight-trail-active" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
                      <stop offset="60%" stopColor="#2dd4bf" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>

                    <filter id="destination-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Latitude / Longitude lines on canvas */}
                  <line x1="20" y1="60" x2="320" y2="60" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="20" y1="110" x2="320" y2="110" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="20" y1="160" x2="320" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="100" y1="20" x2="100" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />
                  <line x1="200" y1="20" x2="200" y2="200" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 4" />

                  {/* Continents Simplified Outlines */}
                  {/* Europe outline */}
                  <path
                    d="M 115 80 Q 140 70 155 85 Q 160 105 145 125 Q 130 115 120 100 Z"
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth="1"
                  />
                  {/* India subcontinent outline */}
                  <path
                    d="M 245 130 Q 260 135 275 145 Q 260 180 255 185 Q 240 160 245 130 Z"
                    fill="#1e293b"
                    stroke="#334155"
                    strokeWidth="1"
                  />

                  {/* Curved Flight Path from Origin to Destination */}
                  <path
                    d={pathD}
                    stroke="url(#flight-trail-active)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />

                  {/* Origin Point: India (New Delhi) */}
                  <g transform={`translate(${originCoords.x}, ${originCoords.y})`}>
                    <circle cx="0" cy="0" r="4" fill="#38bdf8" />
                    <text x="0" y="16" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                      India
                    </text>
                  </g>

                  {/* Destination Point: Destination with Soft Teal Glow Marker */}
                  <g transform={`translate(${destCoords.x}, ${destCoords.y})`}>
                    {/* Concentric Pulsing Rings */}
                    <circle cx="0" cy="0" r="14" fill="#2dd4bf" fillOpacity="0.2" className="animate-ping" />
                    <circle cx="0" cy="0" r="8" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" filter="url(#destination-glow)" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" />
                    <text x="0" y="-12" textAnchor="middle" fill="#2dd4bf" fontSize="10" fontWeight="bold" fontFamily="monospace">
                      {activeOpp.country.toUpperCase()}
                    </text>
                  </g>

                  {/* Airplane Position along the Flight Path */}
                  <g transform={`translate(${arcControl.x}, ${arcControl.y - 2}) rotate(-28)`}>
                    <path
                      d="M 0 -7 L 3 0 L 10 2 L 3 4 L 3 8 L 6 9 L 0 9 L -6 9 L -3 8 L -3 4 L -10 2 L -3 0 Z"
                      fill="#ffffff"
                    />
                  </g>
                </svg>

                {/* Floating Destination Card in bottom right */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-teal-500/40 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-teal-500/20 text-teal-300 font-mono text-[10px] font-bold flex items-center justify-center border border-teal-500/30">
                    {activeOpp.countryCode}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-white block leading-none">
                      {activeOpp.country}
                    </span>
                    <span className="text-[9px] font-mono text-teal-400 block">
                      Admissions Open
                    </span>
                  </div>
                </div>
              </div>

              {/* Route Trajectory Info */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>{activeOpp.flightPath.origin}</span>
                </div>
                <Plane className="w-3.5 h-3.5 text-teal-400 rotate-90" />
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeOpp.flightPath.destination}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
