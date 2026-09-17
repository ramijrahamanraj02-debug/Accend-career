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
    <footer className="bg-[#0D0D0D] text-[#8A8A8A] border-t border-[#1F1F1F] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1: Brand & Mission (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5 select-none">
              <AscendLogoMark className="w-11 h-11" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white">ASCEND</span>
                  <span
                    className="text-xl sm:text-2xl font-black tracking-tight text-[#00828A]"
                    style={{
                      textShadow: '0 2px 8px rgba(0, 130, 138, 0.45)'
                    }}
                  >
                    CAREER
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold text-[#8A8A8A] tracking-[0.22em] uppercase mt-1">
                  ELEVATE TODAY, ACHIEVE TOMORROW
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8A8A8A] leading-relaxed max-w-sm font-light">
              Ascend operates an elite ecosystem starting with <strong className="text-white font-semibold">01 Career Guidance</strong> and culminating in <strong className="text-[#6A35FF] font-semibold">08 Graphic Design</strong> and <strong className="text-[#3BFFAD] font-semibold">09 Web Development & Maintenance</strong>.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-4 py-2 bg-[#E5FE40] text-[#0D0D0D] font-mono text-xs uppercase font-bold cred-btn-tactile cred-box-white"
              >
                Schedule Assessment
              </button>
            </div>

            <div className="pt-2 space-y-1.5 text-[11px] font-mono text-[#8A8A8A]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5FE40]" />
                <a href="tel:+919901999720" className="hover:text-white transition-colors">
                  +91 99019 99720
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5FE40] shrink-0 mt-0.5" />
                <span>Zam zam Layout, 6th Cross Rd, RK Hegde Nagar, Bengaluru 560077</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services 01 to 05 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              01–05 Blueprint
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {(services || []).slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s)}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="text-[10px] text-[#E5FE40] group-hover:underline">{s.numericCode}</span>
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services 06 to 09 */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              06–09 Creative & Tech
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {(services || []).slice(5).map((s) => {
                const isGraphic = s.id === 'graphic-design';
                const isWeb = s.id === 'web-services';

                return (
                  <li key={s.id}>
                    <button
                      onClick={() => onSelectService(s)}
                      className="hover:text-white transition-colors text-left flex items-center gap-2 group cursor-pointer"
                    >
                      <span className={`text-[10px] ${
                        isGraphic ? 'text-[#6A35FF]' : isWeb ? 'text-[#3BFFAD]' : 'text-[#8A8A8A]'
                      }`}>
                        {s.numericCode}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4: Navigation & Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              System
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
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
                  onClick={() => onNavigate('services-hub')}
                  className="hover:text-white transition-colors"
                >
                  3D Services Deck
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
              <li className="pt-2 border-t border-[#1F1F1F]">
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#E5FE40] transition-colors text-[#8A8A8A]"
                  id="footer-terms-btn"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#E5FE40] transition-colors text-[#8A8A8A]"
                  id="footer-privacy-btn"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8A8A8A]">
          <p>© 2026 Ascend Career. All Rights Reserved. // DEVELOPED BY MD Ramij Raj Rahaman</p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
              id="footer-bottom-terms-btn"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-[#404040]">|</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
              id="footer-bottom-privacy-btn"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
