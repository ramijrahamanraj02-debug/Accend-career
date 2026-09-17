import React from 'react';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { ServiceVertical } from '../types';

interface ServiceCard3DProps {
  service: ServiceVertical;
  onSelect: (service: ServiceVertical) => void;
  featured?: boolean;
}

export const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  service,
  onSelect,
  featured = false
}) => {
  const isFirst = service.id === 'career-guidance';
  const isGraphic = service.id === 'graphic-design';
  const isWeb = service.id === 'web-services';

  // Authentic CRED NeoPOP color configurations
  const getCardStyle = () => {
    if (isFirst) {
      return 'border-[#E5FE40] cred-box-neopaccha hover:border-[#f0ff66]';
    }
    if (isGraphic) {
      return 'border-[#6A35FF] cred-box-purple hover:border-[#8557ff]';
    }
    if (isWeb) {
      return 'border-[#3BFFAD] cred-box-green hover:border-[#65ffc1]';
    }
    return 'border-[#262626] cred-box-dark hover:border-[#444444]';
  };

  const getBadgeStyle = () => {
    if (isFirst) {
      return 'bg-[#E5FE40]/10 text-[#E5FE40] border-[#E5FE40]/40';
    }
    if (isGraphic) {
      return 'bg-[#6A35FF]/10 text-[#cbb6ff] border-[#6A35FF]/40';
    }
    if (isWeb) {
      return 'bg-[#3BFFAD]/10 text-[#3BFFAD] border-[#3BFFAD]/40';
    }
    return 'bg-[#1F1F1F] text-[#F5F5F5] border-[#333333]';
  };

  return (
    <div
      onClick={() => onSelect(service)}
      className={`cursor-pointer group relative flex flex-col justify-between p-7 bg-[#161616] border transition-all duration-150 cred-btn-tactile h-full ${getCardStyle()}`}
      id={`service-card-${service.id}`}
    >
      {/* Top Meta Row */}
      <div>
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#262626]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#E5FE40]">
              {service.numericCode}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A8A8A]">
              {isFirst ? 'Foundation' : isWeb ? 'Web & Digital' : 'Track'}
            </span>
          </div>

          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border ${getBadgeStyle()}`}>
            {service.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#F5F5F5] transition-colors tracking-tight mb-1">
          {service.title}
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] mb-4">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-xs text-[#A3A3A3] leading-relaxed mb-5 line-clamp-3 font-light">
          {service.shortDesc}
        </p>

        {/* Deliverables / Sub-services */}
        <div className="space-y-2 pt-3 border-t border-[#262626]">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8A8A]">
            KEY MODULES:
          </div>
          {service.subServices.slice(0, 3).map((sub) => (
            <div key={sub.id} className="flex items-start gap-2 text-xs text-[#D4D4D4]">
              <div className={`w-3.5 h-3.5 flex items-center justify-center shrink-0 mt-0.5 ${
                isFirst 
                  ? 'bg-[#E5FE40] text-[#0D0D0D]' 
                  : isGraphic
                  ? 'bg-[#6A35FF] text-white'
                  : isWeb
                  ? 'bg-[#3BFFAD] text-[#0D0D0D]'
                  : 'bg-white text-black'
              }`}>
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="line-clamp-1">{sub.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Bottom CTA */}
      <div className="pt-4 border-t border-[#262626] flex items-center justify-between mt-6">
        <span className="text-xs font-mono uppercase tracking-wider text-[#8A8A8A] group-hover:text-white transition-colors flex items-center gap-1 font-bold">
          <span>SPECIFICATIONS</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="w-7 h-7 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-white group-hover:bg-[#E5FE40] group-hover:text-[#0D0D0D] group-hover:border-[#E5FE40] transition-colors">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};


