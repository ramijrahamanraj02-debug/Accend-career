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
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-[#1F1F1F] shadow-xl'
            : 'bg-[#0D0D0D]/50 backdrop-blur-md border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3.5 group text-left transition-transform duration-200 cursor-pointer"
            id="nav-brand-logo"
            aria-label="Ascend Career Home"
          >
            {/* 3D Ascend Logo on the LEFT SIDE */}
            <AscendLogoMark className="w-10 h-10 sm:w-11 sm:h-11" />

            {/* Writing on the RIGHT SIDE: ASCEND CAREER */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#E5FE40] transition-colors">
                  ASCEND
                </span>
                <span
                  className="text-xl sm:text-2xl font-black tracking-tight text-[#00828A] group-hover:text-[#2dd4bf] transition-colors"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 130, 138, 0.45)'
                  }}
                >
                  CAREER
                </span>
              </div>
              <span className="text-[9px] uppercase font-mono font-bold tracking-[0.22em] text-[#8A8A8A] group-hover:text-white transition-colors block mt-1">
                ELEVATE TODAY, ACHIEVE TOMORROW
              </span>
            </div>
          </button>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-semibold transition-colors cursor-pointer ${
                activePage === 'home'
                  ? 'text-white border-b-2 border-[#E5FE40]'
                  : 'text-[#8A8A8A] hover:text-white'
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
                className={`group flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-mono font-semibold transition-all cursor-pointer ${
                  isServicesOpen || activePage === 'services-hub' || activePage === 'service-detail'
                    ? 'text-white border-b-2 border-[#E5FE40]'
                    : 'text-[#8A8A8A] hover:text-white'
                }`}
                id="nav-link-services"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                {navStructure !== 'structure-3' && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180 text-white' : 'text-[#8A8A8A] group-hover:text-white'
                    }`}
                  />
                )}
                {navStructure === 'structure-3' && (
                  <span className="text-[9px] bg-[#161616] text-[#E5FE40] px-1.5 py-0.5 border border-[#262626]">
                    Hub
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
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-semibold transition-colors cursor-pointer ${
                activePage === 'about'
                  ? 'text-white border-b-2 border-[#E5FE40]'
                  : 'text-[#8A8A8A] hover:text-white'
              }`}
              id="nav-link-about"
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-semibold transition-colors cursor-pointer ${
                activePage === 'contact'
                  ? 'text-white border-b-2 border-[#E5FE40]'
                  : 'text-[#8A8A8A] hover:text-white'
              }`}
              id="nav-link-contact"
            >
              Contact Us
            </button>
          </nav>

          {/* Right Side CTA: Book a Consultation (CRED NeoPOP 3D Tactile Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center gap-2 cursor-pointer hover:bg-[#d8f235]"
              id="header-book-consultation-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#8A8A8A] hover:text-white cursor-pointer"
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
          className="md:hidden bg-[#161616] border-b border-[#262626] px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto cred-box-dark"
          id="mobile-drawer"
        >
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-[#1F1F1F]"
            >
              Home
            </button>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                className="w-full flex items-center justify-between px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-[#E5FE40] bg-[#1F1F1F] border border-[#333333]"
              >
                <div className="flex items-center gap-2">
                  <span>Services (01 Career to 09 Web)</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isMobileServicesExpanded && (
                <div className="mt-2 pl-3 space-y-1 border-l-2 border-[#E5FE40] ml-3">
                  <button
                    onClick={() => {
                      onNavigate('services-hub');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-[#E5FE40] bg-[#1F1F1F] flex items-center justify-between border border-[#333333]"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectService(s);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-[#A3A3A3] hover:text-white hover:bg-[#1F1F1F] flex items-center gap-2.5"
                    >
                      <span className="font-mono text-[10px] text-[#E5FE40]">{s.numericCode}</span>
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
              className="w-full text-left px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-[#1F1F1F]"
            >
              About Us
            </button>

            <button
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-[#1F1F1F]"
            >
              Contact Us
            </button>
          </div>

          <div className="pt-4 border-t border-[#262626] space-y-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3.5 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 cred-btn-tactile cred-box-white"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
