import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, X, ChevronRight } from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';
import { ServiceIcon } from './ServiceIcons';

interface ServicesMegaMenuProps {
  isOpen: boolean;
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onViewAllServices: () => void;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  isOpen,
  services,
  onSelectService,
  onViewAllServices,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[980px] max-w-[96vw] rounded-3xl bg-[#090f1d]/95 backdrop-blur-2xl border border-slate-700/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8),0_0_35px_rgba(20,184,166,0.2)] z-50 overflow-hidden"
          onMouseLeave={onClose}
          id="services-mega-menu-panel"
        >
          {/* Top glowing bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />

          {/* Header section with ASCII-style separator from user prompt */}
          <div className="pt-6 pb-4 px-8 border-b border-slate-800 text-center relative">
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4">
              <AscendLogoMark className="w-12 h-12" />
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-semibold tracking-wider uppercase mb-1">
                  <Sparkles className="w-3 h-3" />
                  Unified Career Ecosystem
                </div>
                <h2 className="text-xl font-extrabold text-white tracking-wide">
                  OUR SERVICES
                </h2>
                <p className="text-xs font-semibold text-teal-400 uppercase tracking-[0.2em] mt-0.5">
                  Guide • Train • Place • Grow • Go Global
                </p>
              </div>
            </div>
          </div>

          {/* 7 Vertical Boxes Grid with 3D Icons */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => {
                // Determine display category label matching Structure 2
                let categoryLabel = 'CAREER';
                if (service.id === 'skill-development') categoryLabel = 'LEARNING';
                if (service.id === 'study-abroad') categoryLabel = 'GLOBAL';
                if (service.id === 'study-in-india') categoryLabel = 'INDIA';
                if (service.id === 'school-college-programs') categoryLabel = 'INSTITUTIONS';
                if (service.id === 'corporate-training') categoryLabel = 'CORPORATE';

                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className="group relative p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-teal-500/40 hover:shadow-[0_10px_25px_-5px_rgba(20,184,166,0.25)] transition-all duration-200 text-left flex flex-col justify-between"
                    id={`mega-item-${service.id}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:border-teal-400/60 transition-all shrink-0">
                            <ServiceIcon id={service.id} className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono tracking-widest text-teal-400 uppercase font-bold block">
                              {categoryLabel}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">
                              0{service.numericCode}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                          {service.subServices.length} Tracks
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                        {service.navTitle}
                      </h4>

                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-teal-400 group-hover:text-teal-300">
                      <span>Explore Tracks</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mega menu bottom bar */}
          <div className="px-8 py-4 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All 7 service areas directly mapped from Ascend Career Document</span>
            </div>

            <button
              onClick={() => {
                onViewAllServices();
                onClose();
              }}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center gap-1.5 transition-all"
              id="mega-view-all-hub"
            >
              Open Interactive 3D Service Gateway
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
