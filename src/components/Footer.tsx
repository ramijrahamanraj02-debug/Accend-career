import React from 'react';
import { ActivePage, ServiceVertical } from '../types';
import { Mail, Phone, MapPin, Sparkles, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { AscendLogoMark } from './AscendLogo';
import { ServiceIcon } from './ServiceIcons';

interface FooterProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onNavigate: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onOpenLegal: (tab: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  services,
  onSelectService,
  onNavigate,
  onOpenConsultation,
  onOpenLegal
}) => {
  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand & Mission (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5 select-none">
              <AscendLogoMark className="w-11 h-11" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-black tracking-tight text-white">ASCEND</span>
                  <span className="text-xl font-black tracking-tight text-teal-400">CAREER</span>
                </div>
                <span className="text-[10px] font-bold text-teal-300/90 tracking-[0.18em] uppercase mt-1">
                  Guide • Train • Place • Grow • Go Global
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ascend Career brings all career guidance, skill development, corporate placements, international studies, Indian college admissions, and enterprise training under one unified destination.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold transition-colors flex items-center gap-1.5"
                id="footer-book-consultation-btn"
              >
                <span>Book 1-to-1 Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Col 2: Services 1-4 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Services (Part 1)
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s)}
                    className="hover:text-teal-300 transition-colors text-left flex items-center gap-2 group"
                  >
                    <ServiceIcon id={s.id} className="w-3.5 h-3.5 text-teal-400 shrink-0 group-hover:text-teal-300" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services 5-7 + Hub */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Services (Part 2)
            </h4>
            <ul className="space-y-2.5 text-xs">
              {services.slice(4).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s)}
                    className="hover:text-teal-300 transition-colors text-left flex items-center gap-2 group"
                  >
                    <ServiceIcon id={s.id} className="w-3.5 h-3.5 text-teal-400 shrink-0 group-hover:text-teal-300" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => onNavigate('services-hub')}
                  className="text-teal-400 hover:text-teal-300 font-semibold flex items-center gap-1"
                >
                  <span>✦ 3D Services Gateway</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Outside Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              {/* Terms and Privacy in footer as requested */}
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                  id="footer-terms-btn"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                  id="footer-privacy-btn"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Ascend Career. All rights reserved. Document Verified.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-teal-500/80">Single-Menu Corporate Structure Executed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
