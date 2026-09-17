import React, { useState, useRef } from 'react';
import { ShieldCheck, Wifi, ArrowRight, Sparkles, ChevronRight, Check } from 'lucide-react';
import { ServiceVertical } from '../types';

interface Cred3DCardDeckProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const Cred3DCardDeck: React.FC<Cred3DCardDeckProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });
  const cardRef = useRef<HTMLDivElement>(null);

  const activeService = services[activeIdx] || services[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y, isHovered: true });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0, isHovered: false });
  };

  // 3D rotation angles based on mouse
  const rotateY = mousePos.isHovered ? mousePos.x * 24 : -8;
  const rotateX = mousePos.isHovered ? -mousePos.y * 24 : 10;
  const glareX = (mousePos.x + 0.5) * 100;
  const glareY = (mousePos.y + 0.5) * 100;

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background ambient radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_50%_20%,rgba(229,254,64,0.03),rgba(255,255,255,0.01)_40%,transparent_75%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header with CRED's editorial typography */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#161616] border border-[#262626] text-[#E5FE40] text-[11px] uppercase tracking-[0.25em] font-mono font-bold mb-4 cred-box-dark">
            <Sparkles className="w-3.5 h-3.5 text-[#E5FE40]" />
            <span>CRED NEOPOP 3D PHYSICAL CARDS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            the craft of <span className="font-editorial italic font-normal text-white/90">perfection.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8A8A8A] font-light leading-relaxed">
            From <span className="text-[#E5FE40] font-mono font-semibold">01 Career Guidance</span> to{' '}
            <span className="text-[#6A35FF] font-mono font-semibold">08 Graphic Design</span> and{' '}
            <span className="text-[#3BFFAD] font-mono font-semibold">09 Web Services & Maintenance</span>. Experience each vertical as an engineered 3D tactile card.
          </p>
        </div>

        {/* 3D Stage & Interactive Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: The 3D Interactive Physical Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[440px] h-[270px] sm:h-[285px] cursor-pointer perspective-1200 group"
              style={{ perspective: '1200px' }}
              onClick={() => onSelectService(activeService)}
            >
              {/* Secondary stacked shadow card in 3D depth */}
              <div 
                className="absolute inset-0 bg-[#161616] border border-[#262626] pointer-events-none transition-transform duration-300 -z-10 opacity-80"
                style={{
                  transform: 'translate3d(14px, 14px, -30px) rotateZ(-3deg)',
                  boxShadow: '8px 8px 0px #000000'
                }}
              />
              <div 
                className="absolute inset-0 bg-[#0F0F0F] border border-[#222222] pointer-events-none transition-transform duration-300 -z-20 opacity-50"
                style={{
                  transform: 'translate3d(26px, 26px, -60px) rotateZ(-6deg)',
                  boxShadow: '14px 14px 0px #000000'
                }}
              />

              {/* Primary 3D Physical Card */}
              <div
                className="w-full h-full p-6 sm:p-7 relative flex flex-col justify-between transition-transform duration-150 ease-out border border-[#333333] preserve-3d overflow-hidden"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
                  background: 'linear-gradient(135deg, #1C1C1C 0%, #0D0D0D 60%, #161616 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 6px 6px 0px #E5FE40'
                }}
              >
                {/* Real-time Dynamic Specular Glare */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-200 z-10"
                  style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)`
                  }}
                />

                {/* Service 01 Career Guidance & Aptitude Assessment Visual Backing */}
                {activeService.numericCode === '01' && (
                  <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen overflow-hidden">
                    <img
                      src="/images/discover-your-strengths-assessment.jpg"
                      alt="01 Career Guidance & Aptitude Assessment"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#161616]/40 to-transparent" />
                  </div>
                )}

                {/* Service 03 Jobs & Placement Readiness Visual Backing */}
                {activeService.numericCode === '03' && (
                  <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
                    <img
                      src="/images/jobs-placement-readiness.jpg"
                      alt="03 Jobs & Placement Readiness 3D Campus"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#161616]/40 to-transparent" />
                  </div>
                )}

                {/* Service 04 Study Abroad Visual Backing */}
                {activeService.numericCode === '04' && (
                  <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
                    <img
                      src="/images/study-abroad-global-pathways.jpg"
                      alt="04 Study Abroad 3D Global Campus"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#161616]/40 to-transparent" />
                  </div>
                )}

                {/* Service 05 Study in India & Direct Admissions Visual Backing */}
                {activeService.numericCode === '05' && (
                  <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
                    <img
                      src="/images/study-in-india-direct-admissions.jpg"
                      alt="05 Study in India & Direct Admissions 3D Campus"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#161616]/40 to-transparent" />
                  </div>
                )}

                {/* Card Top: Brand + EMV Chip + Contactless */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-white text-lg tracking-wider">ASCEND</span>
                    <span className="text-[10px] tracking-[0.2em] font-mono uppercase px-2 py-0.5 bg-[#E5FE40]/15 text-[#E5FE40] border border-[#E5FE40]/30 font-bold">
                      0{activeIdx + 1} // {activeService.numericCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-5 h-5 text-[#8A8A8A] rotate-90" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#8A8A8A]">NEOPOP</span>
                  </div>
                </div>

                {/* Card Middle: Metallic Gold Microchip & Hologram */}
                <div className="flex items-center justify-between my-auto relative z-10">
                  {/* EMV Gold Microchip */}
                  <div className="w-12 h-9 bg-gradient-to-br from-[#FFD700] via-[#FFCB45] to-[#B8860B] border border-amber-200/60 p-1 relative shadow-inner overflow-hidden">
                    <div className="w-full h-full border border-amber-800/40 flex flex-col justify-between">
                      <div className="h-[1px] bg-amber-800/40 w-full mt-2" />
                      <div className="h-[1px] bg-amber-800/40 w-full mb-2" />
                    </div>
                  </div>

                  {/* Holographic foil insignia */}
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#8A8A8A]">DELIVERABLE SLA</div>
                    <div className="text-xs font-mono font-bold text-[#3BFFAD] tracking-wider">99.9% UPTIME / VERIFIED</div>
                  </div>
                </div>

                {/* Card Bottom: Embossed Service Title & Code */}
                <div className="relative z-10">
                  <div className="font-mono text-[13px] tracking-[0.25em] text-[#8A8A8A] uppercase mb-1">
                    {activeService.numericCode} • {activeService.badge}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight flex items-center justify-between">
                    <span>{activeService.title}</span>
                    <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hint below card */}
            <p className="text-xs text-[#8A8A8A] mt-4 tracking-wider uppercase font-mono text-center flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-[#E5FE40] animate-pulse" />
              Hover & move cursor to test live 3D specular physics
            </p>
          </div>

          {/* RIGHT: Service Details & 3D NeoPOP Selector */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="bg-[#161616] border border-[#262626] p-6 sm:p-8 rounded-none cred-box-dark relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E5FE40] font-bold">
                  VERTICAL 0{activeIdx + 1} OF 0{services.length}
                </span>
                <span className="text-xs font-mono text-[#8A8A8A]">
                  {activeService.numericCode === '01' ? 'STARTS WITH CAREER GUIDE' : activeService.numericCode === '09' ? 'ENDS WITH WEB & MAINTENANCE' : 'CORE VERTICAL'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeService.title}
              </h3>
              <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed mb-6 font-light">
                {activeService.fullDesc}
              </p>

              {/* Deliverables with CRED-style checks */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-[#262626]">
                <div className="text-xs uppercase font-mono tracking-wider text-[#8A8A8A] mb-2">KEY DELIVERABLES:</div>
                {activeService.subServices.slice(0, 3).map((sub) => (
                  <div key={sub.id} className="flex items-start gap-2.5 text-sm text-[#D4D4D4]">
                    <div className="w-4 h-4 rounded-none bg-[#E5FE40] text-[#0D0D0D] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">{sub.title}:</strong> {sub.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons: CRED 3D Tactile Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#262626]">
                <button
                  onClick={() => onSelectService(activeService)}
                  className="px-6 py-3.5 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center gap-2 cursor-pointer hover:bg-[#d8f235]"
                  id={`cred-explore-${activeService.id}`}
                >
                  <span>Explore 0{activeIdx + 1} Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3.5 bg-[#1F1F1F] text-white border border-[#333333] font-mono text-xs uppercase tracking-wider hover:bg-[#262626] transition-colors cred-btn-tactile cred-box-dark cursor-pointer"
                  id="cred-deck-consult"
                >
                  Claim Consultation
                </button>
              </div>
            </div>

            {/* 9-Slot Selector Strip (Starts with 01 Career Guidance, ends with 09 Web Services & Maintenance) */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase text-[#8A8A8A] mb-3">
                <span>Select Service Card</span>
                <span>{activeIdx + 1} / {services.length}</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
                {services.map((srv, idx) => (
                  <button
                    key={srv.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-2.5 text-left border transition-all cursor-pointer cred-btn-tactile ${
                      activeIdx === idx
                        ? 'bg-[#E5FE40] text-[#0D0D0D] border-[#E5FE40] cred-box-white font-bold'
                        : 'bg-[#161616] text-[#8A8A8A] border-[#262626] hover:border-[#444444] hover:text-white'
                    }`}
                    id={`cred-slot-${srv.id}`}
                  >
                    <div className="font-mono text-[10px] font-bold">
                      0{idx + 1}
                    </div>
                    <div className="text-[11px] font-semibold truncate mt-0.5">
                      {srv.navTitle.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
