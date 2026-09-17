import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Code2,
  Palette,
  ExternalLink,
  Laptop,
  Compass,
  Briefcase,
  Globe2,
  Star,
  ShieldCheck,
  Zap,
  Clock,
  Award,
  Check
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';

interface ValidThemesServicesShowcaseProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onNavigateToServicesHub: () => void;
  onOpenConsultation: (serviceId?: string) => void;
}

type FilterCategory = 'all' | 'web-creative' | 'career-skills' | 'global-institutional';

export const ValidThemesServicesShowcase: React.FC<ValidThemesServicesShowcaseProps> = ({
  services,
  onSelectService,
  onNavigateToServicesHub,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredServices = services.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web-creative') {
      return ['web-services', 'graphic-design'].includes(service.id);
    }
    if (activeCategory === 'career-skills') {
      return ['career-guidance', 'skill-development', 'jobs-placement'].includes(service.id);
    }
    if (activeCategory === 'global-institutional') {
      return ['study-abroad', 'study-in-india', 'school-college-programs', 'corporate-training'].includes(service.id);
    }
    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070d19] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ─────────────────────────────────────────────────────────────
            1. SECTION HEADER (VALIDTHEMES TEMPLATE STYLE)
            ───────────────────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE PROVIDE • COMPREHENSIVE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            High-Impact Web Services, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
              Creative Design & Global Solutions
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            From modern responsive web engineering and distinctive brand identity systems to certified 1-on-1 career guidance and corporate placement. Explore our full suite of professional services.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (9)' },
              { id: 'web-creative', label: '💻 Web & Graphic Design' },
              { id: 'career-skills', label: '🎯 Career & Tech Skills' },
              { id: 'global-institutional', label: '🌍 Global Study & Enterprise' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as FilterCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 border ${
                  activeCategory === tab.id
                    ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. SERVICES GRID (VALIDTHEMES AGENCY CARDS)
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const isWeb = service.id === 'web-services';
            const isGraphic = service.id === 'graphic-design';

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl bg-slate-900/85 backdrop-blur-xl border p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl ${
                  isWeb
                    ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]'
                    : isGraphic
                    ? 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)]'
                    : 'border-slate-800 hover:border-teal-500/40 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.25)]'
                }`}
              >
                {/* Top Accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isWeb
                      ? 'bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
                      : isGraphic
                      ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-teal-400 to-transparent'
                  }`}
                />

                <div>
                  {/* Card Header: Icon + Badge + Code */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                        isWeb
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400'
                          : isGraphic
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400'
                          : 'bg-teal-500/10 border-teal-500/30 text-teal-400 group-hover:bg-teal-500/20 group-hover:border-teal-400'
                      }`}
                    >
                      <ServiceIcon id={service.id} className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono font-bold text-slate-500 block">
                        #{service.numericCode}
                      </span>
                      <span
                        className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          isWeb
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                            : isGraphic
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                            : 'bg-teal-500/10 text-teal-300 border-teal-500/30'
                        }`}
                      >
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-teal-300 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables / Highlights */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
                      Key Deliverables:
                    </span>
                    {service.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isWeb
                              ? 'text-cyan-400'
                              : isGraphic
                              ? 'text-amber-400'
                              : 'text-teal-400'
                          }`}
                        />
                        <span className="line-clamp-1">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 group/link transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold border border-slate-700 hover:border-teal-500/30 transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToServicesHub}
            className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-teal-400 text-slate-100 font-bold text-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Explore All 9 Services & Programs</span>
            <ChevronRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. VALIDTHEMES 4-STEP AGILE WORK PROCESS
            - ValidThemes iconic 4-step agency workflow
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-28 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3 h-3" />
              <span>HOW WE DELIVER EXCELLENCE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our 4-Step Agency & Advisory Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              From the initial discovery call to final deployment and ongoing support, we follow a transparent, milestone-driven framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Discovery & Needs Audit',
                desc: 'Deep-dive consultation to understand your project goals, technical constraints, or personal career ambitions.',
                badge: 'Phase 1'
              },
              {
                step: '02',
                title: 'Strategy & Wireframing',
                desc: 'Formulating comprehensive system blueprints, Figma interactive prototypes, and personalized milestone roadmaps.',
                badge: 'Phase 2'
              },
              {
                step: '03',
                title: 'Agile Engineering & Mentorship',
                desc: 'Pixel-perfect development, modern clean code implementation, and 1-on-1 certified coaching sessions.',
                badge: 'Phase 3'
              },
              {
                step: '04',
                title: 'QA Launch & Continuous Growth',
                desc: 'Rigorous cross-platform testing, cloud production deployment, and direct placement or maintenance support.',
                badge: 'Phase 4'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-teal-400/90 group-hover:text-teal-300">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. VALIDTHEMES IMPACT METRICS COUNTER
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-[#0a1324] to-slate-950 border border-slate-800/90 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-teal-400">
                500+
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-2">
                Projects & Placements
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Delivered across tech & industry</p>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-cyan-400">
                99.4%
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-2">
                Client Satisfaction
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Verified reviews & feedback</p>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-amber-400">
                25+
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-2">
                Global Countries
              </div>
              <p className="text-[11px] text-slate-400 mt-1">University & corporate tie-ups</p>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight text-emerald-400">
                24/7
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mt-2">
                Expert Support
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Direct mentor & engineer access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
