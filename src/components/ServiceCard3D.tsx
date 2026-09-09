import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { ServiceVisual3D } from './ServiceVisual3D';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max ±6.5 degrees)
    const rx = ((y - centerY) / centerY) * -6.5;
    const ry = ((x - centerX) / centerX) * 6.5;

    // Percentage coordinates for the specular light sheen
    const xPercent = Math.round((x / rect.width) * 100);
    const yPercent = Math.round((y / rect.height) * 100);

    setTilt({ rx, ry });
    setMousePos({ x: xPercent, y: yPercent });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        perspective: '1200px'
      }}
      className="cursor-pointer group relative select-none h-full"
      id={`service-card-${service.id}`}
    >
      {/* 3D Card Surface with CSS Transforms and preserve-3d */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(12px) scale3d(1.02, 1.02, 1.02)`
            : 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
          transition: isHovered
            ? 'transform 0.12s ease-out, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease'
            : 'transform 0.45s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.45s ease, border-color 0.45s ease, background-color 0.45s ease'
        }}
        className={`relative h-full rounded-2xl p-6 md:p-7 flex flex-col justify-between backdrop-blur-xl border overflow-hidden ${
          isHovered
            ? 'border-teal-400/70 shadow-[0_22px_45px_-12px_rgba(20,184,166,0.38),0_0_25px_2px_rgba(45,212,191,0.18)] bg-slate-900/95'
            : 'border-slate-800/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] bg-slate-900/75'
        } ${featured ? 'ring-1 ring-teal-500/40' : ''}`}
      >
        {/* Futuristic High-Tech Micro-Grid Background Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.22 : 0.04,
            backgroundImage:
              'linear-gradient(to right, rgba(45, 212, 191, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 212, 191, 0.18) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Dynamic Specular Sheen (Follows Mouse Coordinates via CSS Radial Gradient) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(45, 212, 191, 0.18), transparent 75%)`
          }}
        />

        {/* High-Tech Precision Corner Reticle Brackets */}
        <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-teal-500/30 group-hover:border-teal-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-teal-500/30 group-hover:border-teal-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-teal-500/30 group-hover:border-teal-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-teal-500/30 group-hover:border-teal-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300 pointer-events-none" />

        {/* Ambient Top Glow Orbs */}
        <div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
            isHovered ? 'opacity-35 bg-teal-400' : 'opacity-10 bg-slate-600'
          }`}
        />

        {/* Main Content Body with Multi-Depth CSS translateZ layers */}
        <div>
          {/* Top Meta Row: 3D Icon & Track Code (3D Z-Depth: 36px) */}
          <div
            className="flex items-center justify-between mb-5"
            style={{
              transform: isHovered ? 'translateZ(36px)' : 'translateZ(0px)',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="flex items-center gap-3">
              {/* 3D Vector Icon Display Container with Dynamic Lift & Specular Rim */}
              <div
                style={{
                  transform: isHovered
                    ? 'translateZ(38px) scale(1.08)'
                    : 'translateZ(0px) scale(1)',
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 via-slate-900 to-slate-950 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-lg shadow-black/60 select-none group-hover:border-teal-400 group-hover:text-teal-200 group-hover:shadow-teal-500/20"
              >
                <ServiceIcon id={service.id} className="w-6 h-6" />
              </div>
            </div>

            {/* Vertical Index & Badge (3D Z-Depth: 28px) */}
            <div
              className="text-right"
              style={{
                transform: isHovered ? 'translateZ(28px)' : 'translateZ(0px)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span className="text-[10px] font-mono tracking-widest text-teal-400/80 block uppercase font-bold">
                TRACK #{service.numericCode}
              </span>
              <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-teal-500/15 text-teal-300 border border-teal-500/30 group-hover:border-teal-400/60 group-hover:bg-teal-500/25 transition-all">
                {service.badge}
              </span>
            </div>
          </div>

          {/* Dedicated 3D Interactive Service Object Visual (3D Z-Depth: 32px) */}
          <div
            className="mb-4 rounded-xl bg-slate-950/60 border border-slate-800/80 group-hover:border-teal-500/30 overflow-hidden transition-all duration-300 shadow-inner"
            style={{
              transform: isHovered ? 'translateZ(32px)' : 'translateZ(0px)',
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <ServiceVisual3D verticalId={service.id} isHovered={isHovered} className="w-full h-32" />
          </div>

          {/* Title & Tagline (3D Z-Depth: 24px) */}
          <div
            style={{
              transform: isHovered ? 'translateZ(24px)' : 'translateZ(0px)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-200 tracking-tight">
              {service.title}
            </h3>

            <p className="text-xs text-teal-400/90 font-medium mt-1 mb-3">
              {service.tagline}
            </p>
          </div>

          {/* Short Description (3D Z-Depth: 18px) */}
          <p
            style={{
              transform: isHovered ? 'translateZ(18px)' : 'translateZ(0px)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="text-sm text-slate-300/90 leading-relaxed mb-5"
          >
            {service.shortDesc}
          </p>

          {/* Sub-services Preview chips (3D Z-Depth: 22px) */}
          <div
            style={{
              transform: isHovered ? 'translateZ(22px)' : 'translateZ(0px)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="space-y-1.5 pt-3 border-t border-slate-800/80"
          >
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Included Modules ({service.subServices.length})</span>
              </span>
              <span className="text-teal-400 text-[10px] font-mono">ASCEND VERIFIED</span>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-hidden">
              {service.subServices.slice(0, 4).map((sub) => (
                <span
                  key={sub.id}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-950/80 text-slate-200 border border-slate-700/60 whitespace-nowrap group-hover:border-teal-500/40 group-hover:text-teal-200 transition-colors shadow-sm"
                >
                  {sub.title}
                </span>
              ))}
              {service.subServices.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-md bg-teal-950/60 text-teal-300 border border-teal-500/40 font-medium">
                  +{service.subServices.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Action (3D Z-Depth: 26px) */}
        <div
          style={{
            transform: isHovered ? 'translateZ(26px)' : 'translateZ(0px)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between"
        >
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Document Aligned</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-400 group-hover:text-teal-300 transition-all duration-200">
            <span>Explore Track</span>
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-200 ${
                isHovered ? 'translate-x-1.5' : 'translate-x-0'
              }`}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

