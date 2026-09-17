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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] max-w-[95vw] rounded-none bg-[#161616] border border-[#262626] cred-box-white z-50 overflow-hidden"
          onMouseLeave={onClose}
          id="services-dropdown-panel"
        >
          {/* Subtle top Neo Paccha line */}
          <div className="h-1 w-full bg-[#E5FE40]" />

          <div className="p-4 bg-[#161616]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#262626] mb-2">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-widest">
                Programs & Services
              </span>
              <span className="text-[10px] font-mono text-[#8A8A8A]">
                All Verticals
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-[420px] overflow-y-auto pr-1">
              {services.map((service) => {
                const isFirst = service.id === 'career-guidance';
                const isGraphic = service.id === 'graphic-design';
                const isWeb = service.id === 'web-services';

                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className="group flex items-start gap-3.5 p-3 rounded-none hover:bg-[#1F1F1F] transition-all duration-150 text-left border border-transparent hover:border-[#333333] cursor-pointer"
                    id={`dropdown-item-${service.id}`}
                  >
                    <div className={`w-8 h-8 rounded-none border flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-all ${
                      isFirst 
                        ? 'bg-[#E5FE40] text-[#0D0D0D] border-[#E5FE40]' 
                        : isGraphic
                        ? 'bg-[#6A35FF] text-white border-[#6A35FF]'
                        : isWeb
                        ? 'bg-[#3BFFAD] text-[#0D0D0D] border-[#3BFFAD]'
                        : 'bg-[#1F1F1F] text-white border-[#333333] group-hover:border-[#E5FE40]'
                    }`}>
                      {service.numericCode}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white group-hover:text-[#E5FE40] transition-colors truncate">
                          {service.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                      </div>
                      <p className="text-xs text-[#8A8A8A] truncate mt-0.5 font-light">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-mono text-[#8A8A8A]">
                          {service.subServices.length} MODULES
                        </span>
                        <span className="text-[#333333] text-[10px]">•</span>
                        <span className={`text-[10px] font-mono font-semibold ${
                          isFirst ? 'text-[#E5FE40]' : isGraphic ? 'text-[#a27bff]' : isWeb ? 'text-[#3BFFAD]' : 'text-neutral-400'
                        }`}>
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer banner */}
          <div className="px-5 py-3.5 bg-[#0D0D0D] border-t border-[#262626] flex items-center justify-between">
            <span className="text-xs font-mono text-[#8A8A8A]">
              Full 3D physical card deck & blueprints
            </span>
            <button
              onClick={() => {
                onViewAllServices();
                onClose();
              }}
              className="text-xs font-mono uppercase font-bold text-[#E5FE40] hover:text-[#f0ff66] flex items-center gap-1.5 transition-colors cursor-pointer"
              id="view-all-services-link"
            >
              <span>Explore All 09</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
