import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ActivePage, NavStructure, ServiceVertical } from '../types';
import { ServicesDropdown } from './ServicesDropdown';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { AscendLogoMark } from './AscendLogo';
import { ServiceIcon } from './ServiceIcons';

interface HeaderProps {
  navStructure?: NavStructure;
  onSetNavStructure?: (structure: NavStructure) => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
  services: ServiceVertical[];
}

export const Header: React.FC<HeaderProps> = ({
  navStructure = 'structure-1',
  onSetNavStructure,
  activePage,
  onNavigate,
  onSelectService,
  onOpenConsultation,
  services
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesTriggerRef.current &&
        !servicesTriggerRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServicesClick = () => {
    if (navStructure === 'structure-3') {
      // In Structure 3: Direct navigation to full-page 3D Services Hub!
      onNavigate('services-hub');
      setIsServicesOpen(false);
    } else {
      setIsServicesOpen((prev) => !prev);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#0b1120]/95 backdrop-blur-md border-slate-800 shadow-lg'
            : 'bg-[#0b1120]/90 backdrop-blur-md border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 group text-left transition-transform duration-200 hover:scale-[1.02]"
            id="nav-brand-logo"
            aria-label="Ascend Career Home"
          >
            {/* 3D Ascend Logo on the LEFT SIDE */}
            <AscendLogoMark className="w-11 h-11 sm:w-12 sm:h-12" />

            {/* Writing on the RIGHT SIDE: ASCEND CAREER / Guide • Train • Place • Grow */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  ASCEND
                </span>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-teal-400">
                  CAREER
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 group-hover:text-teal-300/90 transition-colors block mt-1">
                ELEVATE TODAY, ACHIEVE TOMORROW
              </span>
            </div>
          </button>

          {/* Center Navigation: EXACTLY as requested: HOME | SERVICES ▾ | ABOUT US | CONTACT US */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'home'
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
              id="nav-link-home"
            >
              Home
            </button>

            {/* SERVICES TRIGGER */}
            <div
              ref={servicesTriggerRef}
              className="relative"
              onMouseEnter={() => {
                if (navStructure !== 'structure-3') {
                  setIsServicesOpen(true);
                }
              }}
            >
              <button
                onClick={handleServicesClick}
                className={`group flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isServicesOpen || activePage === 'services-hub' || activePage === 'service-detail'
                    ? 'text-teal-400 bg-teal-500/10'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
                id="nav-link-services"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                {navStructure !== 'structure-3' && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180 text-teal-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                )}
                {navStructure === 'structure-3' && (
                  <span className="text-[10px] bg-teal-950 text-teal-400 px-1.5 py-0.5 rounded border border-teal-500/30">
                    3D Hub
                  </span>
                )}
              </button>

              {/* Render structure dropdown or mega-menu */}
              {navStructure === 'structure-1' && (
                <ServicesDropdown
                  isOpen={isServicesOpen}
                  services={services}
                  onSelectService={onSelectService}
                  onViewAllServices={() => onNavigate('services-hub')}
                  onClose={() => setIsServicesOpen(false)}
                />
              )}

              {navStructure === 'structure-2' && (
                <ServicesMegaMenu
                  isOpen={isServicesOpen}
                  services={services}
                  onSelectService={onSelectService}
                  onViewAllServices={() => onNavigate('services-hub')}
                  onClose={() => setIsServicesOpen(false)}
                />
              )}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'about'
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
              id="nav-link-about"
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'contact'
                  ? 'text-teal-400 bg-teal-500/10'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
              }`}
              id="nav-link-contact"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Side CTA: Book a Consultation */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="relative group px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center gap-2"
              id="header-book-consultation-btn"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#090f1d] border-b border-slate-800 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
          id="mobile-drawer"
        >
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
            >
              Home
            </button>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg font-semibold text-teal-400 bg-slate-900 border border-slate-800"
              >
                <div className="flex items-center gap-2">
                  <span>Services (All 7 Verticals)</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMobileServicesExpanded && (
                <div className="mt-2 pl-3 space-y-1 border-l-2 border-teal-500/30 ml-3">
                  <button
                    onClick={() => {
                      onNavigate('services-hub');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-teal-300 bg-teal-950/40 rounded-lg flex items-center justify-between"
                  >
                    <span>✦ View All 7 in 3D Gateway</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectService(s);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-800/80 flex items-center gap-2.5"
                    >
                      <ServiceIcon id={s.id} className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{s.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onNavigate('about');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
            >
              About Us
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-lg font-semibold text-slate-200 hover:bg-slate-800"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-teal-500 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
