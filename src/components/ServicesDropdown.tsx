import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';

interface ServicesDropdownProps {
  isOpen: boolean;
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onViewAllServices: () => void;
  onClose: () => void;
}

export const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
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
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] max-w-[95vw] rounded-2xl bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-700/70 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_25px_rgba(20,184,166,0.15)] z-50 overflow-hidden"
          onMouseLeave={onClose}
          id="services-dropdown-panel"
        >
          {/* Subtle top teal glow line */}
          <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500" />

          <div className="p-4">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Ascend Career Services (All 7 Verticals)
              </span>
              <span className="text-[11px] text-teal-400 font-semibold bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/20">
                Document Aligned
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-[420px] overflow-y-auto pr-1">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    onSelectService(service);
                    onClose();
                  }}
                  className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-800/80 transition-all duration-150 text-left border border-transparent hover:border-teal-500/20"
                  id={`dropdown-item-${service.id}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:border-teal-500/40 group-hover:scale-105 transition-all">
                    <ServiceIcon id={service.id} className="w-5 h-5 text-teal-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors truncate">
                        {service.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {service.tagline}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-500">
                        {service.subServices.length} Programs
                      </span>
                      <span className="text-slate-600 text-[10px]">•</span>
                      <span className="text-[10px] text-teal-400/80 font-medium">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer banner */}
          <div className="px-5 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Need tailored advice for your goal?
            </span>
            <button
              onClick={() => {
                onViewAllServices();
                onClose();
              }}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
              id="view-all-services-link"
            >
              View Full 3D Services Hub
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
