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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1020px] max-w-[96vw] rounded-none bg-[#161616] border border-[#262626] cred-box-white z-50 overflow-hidden"
          onMouseLeave={onClose}
          id="services-mega-menu-panel"
        >
          {/* Top Neo Paccha voltage bar */}
          <div className="h-1.5 w-full bg-[#E5FE40]" />

          {/* Header section with CRED branding */}
          <div className="pt-6 pb-4 px-8 border-b border-[#262626] relative bg-[#161616]">
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-1.5 rounded-none text-[#8A8A8A] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-4">
              <AscendLogoMark className="w-10 h-10" />
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Programs & Services Directory
                </h2>
                <p className="text-xs text-[#8A8A8A] mt-0.5">
                  Comprehensive educational, career, and digital advisory solutions.
                </p>
              </div>
            </div>
          </div>

          {/* 9 Vertical Boxes Grid */}
          <div className="p-6 md:p-8 bg-[#121212]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => {
                const isFirst = service.id === 'career-guidance';
                const isGraphic = service.id === 'graphic-design';
                const isWeb = service.id === 'web-services';

                let categoryLabel = 'CAREER';
                if (service.id === 'web-services') categoryLabel = 'DEVELOPMENT';
                if (service.id === 'graphic-design') categoryLabel = 'CREATIVE';
                if (service.id === 'skill-development') categoryLabel = 'LEARNING';
                if (service.id === 'study-abroad') categoryLabel = 'GLOBAL';
                if (service.id === 'study-in-india') categoryLabel = 'INDIA';
                if (service.id === 'school-college-programs') categoryLabel = 'INSTITUTIONS';
                if (service.id === 'corporate-training') categoryLabel = 'CORPORATE';

                const getCardBorder = () => {
                  if (isFirst) return 'border-[#E5FE40] hover:border-[#f0ff66]';
                  if (isGraphic) return 'border-[#6A35FF] hover:border-[#8557ff]';
                  if (isWeb) return 'border-[#3BFFAD] hover:border-[#65ffc1]';
                  return 'border-[#262626] hover:border-[#444444]';
                };

                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className={`group relative p-4 rounded-none bg-[#161616] border transition-all duration-150 text-left flex flex-col justify-between cursor-pointer cred-btn-tactile ${getCardBorder()}`}
                    id={`mega-item-${service.id}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-none border flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                            isFirst 
                              ? 'bg-[#E5FE40] text-[#0D0D0D] border-[#E5FE40]' 
                              : isGraphic 
                              ? 'bg-[#6A35FF] text-white border-[#6A35FF]' 
                              : isWeb 
                              ? 'bg-[#3BFFAD] text-[#0D0D0D] border-[#3BFFAD]' 
                              : 'bg-[#1F1F1F] text-white border-[#333333]'
                          }`}>
                            {service.numericCode}
                          </div>
                          <div>
                            <span className="text-[10px] font-mono tracking-widest text-[#8A8A8A] uppercase font-bold block">
                              {categoryLabel}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono px-2 py-0.5 bg-[#1F1F1F] text-[#8A8A8A] border border-[#333333]">
                          {service.badge}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-[#E5FE40] transition-colors">
                        {service.title}
                      </h4>

                      <p className="text-xs text-[#8A8A8A] mt-1 line-clamp-2 leading-relaxed font-light">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#262626] flex items-center justify-between text-xs font-mono uppercase font-bold text-[#8A8A8A] group-hover:text-white">
                      <span>Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mega menu bottom bar */}
          <div className="px-8 py-4 bg-[#0D0D0D] border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A]">
              <span className="w-2 h-2 rounded-none bg-[#E5FE40] animate-pulse" />
              <span>All 09 verticals engineered according to CRED NeoPOP specifications</span>
            </div>

            <button
              onClick={() => {
                onViewAllServices();
                onClose();
              }}
              className="text-xs font-mono uppercase font-bold px-4 py-2 bg-[#E5FE40] text-[#0D0D0D] cred-btn-tactile cred-box-white flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-[#d8f235]"
              id="mega-view-all-hub"
            >
              <span>Explore All 09 Verticals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
