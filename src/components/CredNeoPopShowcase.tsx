import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Code2,
  Palette,
  Compass,
  Briefcase
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';

interface CredNeoPopShowcaseProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const CredNeoPopShowcase: React.FC<CredNeoPopShowcaseProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'career' | 'global' | 'digital'>('all');

  const filteredServices = services.filter((srv) => {
    if (filterCategory === 'career') {
      return ['career-guidance', 'skill-development', 'jobs-placement'].includes(srv.id);
    }
    if (filterCategory === 'global') {
      return ['study-abroad', 'study-in-india', 'school-college-programs', 'corporate-training'].includes(srv.id);
    }
    if (filterCategory === 'digital') {
      return ['graphic-design', 'web-services'].includes(srv.id);
    }
    return true;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] text-white border-t border-[#1F1F1F] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial CRED Hero Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#262626] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#161616] border border-[#262626] text-xs font-mono uppercase tracking-widest text-[#E5FE40] mb-4 cred-box-dark">
              <span className="w-1.5 h-1.5 bg-[#E5FE40] rounded-none animate-ping" />
              THE NEOPOP 3D SERVICE ECOSYSTEM
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">
              experience <span className="font-editorial italic font-normal text-white/90">elevation.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8A8A8A] leading-relaxed font-light">
              Structured sequentially from foundational psychometric evaluation to enterprise-level web engineering and maintenance. Rigid geometry, tactile feedback, and unwavering quality.
            </p>
          </div>

          {/* CRED Category Filter Tabs (NeoPOP Hard-edged pills) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All 09 Verticals' },
              { id: 'career', label: '01–03 Career' },
              { id: 'global', label: '04–07 Global' },
              { id: 'digital', label: '08–09 Creative & Web' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold transition-all cred-btn-tactile cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-[#E5FE40] text-[#0D0D0D] border border-[#E5FE40] cred-box-white'
                    : 'bg-[#161616] text-[#8A8A8A] border border-[#262626] hover:text-white hover:border-[#444444]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 9 CRED 3D Service Slabs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const isFirst = service.id === 'career-guidance';
            const isGraphic = service.id === 'graphic-design';
            const isWeb = service.id === 'web-services';

            const getCardBorder = () => {
              if (isFirst) return 'border-[#E5FE40] cred-box-neopaccha hover:border-[#f0ff66]';
              if (isGraphic) return 'border-[#6A35FF] cred-box-purple hover:border-[#8557ff]';
              if (isWeb) return 'border-[#3BFFAD] cred-box-green hover:border-[#65ffc1]';
              return 'border-[#262626] cred-box-dark hover:border-[#444444]';
            };

            const getBadgeColors = () => {
              if (isFirst) return 'bg-[#E5FE40]/10 text-[#E5FE40] border-[#E5FE40]/40';
              if (isGraphic) return 'bg-[#6A35FF]/10 text-[#cbb6ff] border-[#6A35FF]/40';
              if (isWeb) return 'bg-[#3BFFAD]/10 text-[#3BFFAD] border-[#3BFFAD]/40';
              return 'bg-[#1F1F1F] text-[#F5F5F5] border-[#333333]';
            };

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 bg-[#161616] border transition-all duration-150 cursor-pointer cred-btn-tactile ${getCardBorder()}`}
                onClick={() => onSelectService(service)}
                id={`cred-card-${service.id}`}
              >
                {/* Top Bar: Numeric Index + Sequence Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#262626]">
                    <span className="font-mono text-xs tracking-widest font-bold text-[#8A8A8A] uppercase">
                      {isFirst ? 'STARTS WITH' : isWeb ? 'ENDS WITH' : 'VERTICAL'} // {service.numericCode}
                    </span>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border ${getBadgeColors()}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#F5F5F5] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-4">
                    {service.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-sm text-[#A3A3A3] font-light leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights / Sub-services */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#262626]">
                    {service.subServices.slice(0, 3).map((sub) => (
                      <div key={sub.id} className="flex items-center gap-2.5 text-xs text-[#D4D4D4]">
                        <span className={`w-1.5 h-1.5 ${isFirst ? 'bg-[#E5FE40]' : isGraphic ? 'bg-[#6A35FF]' : isWeb ? 'bg-[#3BFFAD]' : 'bg-[#8A8A8A]'} group-hover:bg-white transition-colors`} />
                        <span className="truncate">{sub.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] group-hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                    <span>SPECIFICATIONS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
                  </span>
                  <div className="w-8 h-8 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-white group-hover:bg-[#E5FE40] group-hover:text-[#0D0D0D] group-hover:border-[#E5FE40] transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CRED "not everyone gets it." Trust & Philosophy Banner */}
        <div className="mt-20 p-8 sm:p-12 lg:p-16 bg-[#161616] border border-[#262626] relative overflow-hidden cred-box-dark">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8A8A8A] font-bold block mb-3">
                THE ASCEND PHILOSOPHY
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                not everyone gets it. <br />
                <span className="font-editorial italic font-normal text-white/90">only the ambitious do.</span>
              </h3>
              <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Whether you need a scientific assessment to pivot your career, placement in a Fortune 500 company, or high-performance web engineering with 24/7 maintenance — we build systems that yield permanent competitive advantages.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 px-6 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase cred-btn-tactile cred-box-white text-center cursor-pointer hover:bg-[#d8f235]"
                id="cred-philosophy-cta"
              >
                Claim Priority Session
              </button>
              <div className="text-center sm:text-left lg:text-center text-xs text-[#8A8A8A] font-mono">
                100% Confidential • Direct Partner Consult
              </div>
            </div>
          </div>
        </div>

        {/* CRED 3D Design Principles Breakdown Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-[#161616] border border-[#262626]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E5FE40] mb-2 font-bold">01 // HARD GEOMETRY</div>
            <h4 className="text-lg font-bold text-white mb-2">Zero-Radius Engineered Precision</h4>
            <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
              Every card, button, and module employs crisp linear boundaries inspired by physical architecture and microchip substrate layouts.
            </p>
          </div>
          <div className="p-6 bg-[#161616] border border-[#262626]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#6A35FF] mb-2 font-bold">02 // 3D PLINTH ELEVATION</div>
            <h4 className="text-lg font-bold text-white mb-2">Non-Blurred Hard Shadows</h4>
            <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
              Components cast non-diffuse, solid 3D shadow blocks simulating physical extrusion on an obsidian canvas.
            </p>
          </div>
          <div className="p-6 bg-[#161616] border border-[#262626]">
            <div className="text-xs font-mono uppercase tracking-widest text-[#3BFFAD] mb-2 font-bold">03 // TACTILE FEEDBACK</div>
            <h4 className="text-lg font-bold text-white mb-2">Depressible NeoPOP Mechanics</h4>
            <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
              Buttons actively sink into the canvas upon click, translating down-right by 2px with instant shadow compression.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
