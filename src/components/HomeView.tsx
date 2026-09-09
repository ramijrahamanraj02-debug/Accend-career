import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  Users,
  Building2,
  Globe2,
  GraduationCap,
  Calendar,
  Layers,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  RotateCw,
  Star
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';
import { Physical3DMonolith } from './Physical3DMonolith';
import { MentorshipInActionDetails } from './MentorshipInActionDetails';
import { HomeFAQ } from './HomeFAQ';
import { FeaturedOpportunities } from './FeaturedOpportunities';
import { LearningExperienceReviews } from './LearningExperienceReviews';

interface HomeViewProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onNavigateToServicesHub: () => void;
  onOpenConsultation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  services,
  onSelectService,
  onNavigateToServicesHub,
  onOpenConsultation
}) => {
  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100 selection:bg-teal-500 selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (CLEAN & DISTRACTION-FREE)
          - Preserves core branding: ASCEND CAREER, Elevate Today, Achieve Tomorrow
          - High-contrast crisp typography with subtle ambient depth
          ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center pt-16 sm:pt-24 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800/60">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,184,166,0.18),rgba(6,11,20,0))] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Ambient Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(20,184,166,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.35) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Brand Mark & Official Motto Lockup */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_25px_rgba(20,184,166,0.2)]">
            <AscendLogoMark className="w-4 h-4 text-teal-400" />
            <span>ASCEND CAREER • ELEVATE TODAY, ACHIEVE TOMORROW</span>
          </div>

          {/* Core Slogan Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            ONE DESTINATION. <br />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(20,184,166,0.3)]">
              ENDLESS OPPORTUNITIES.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            Empowering students and working professionals with scientifically validated guidance, high-demand skill labs, corporate placement (HTD), and global university admissions.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE MAIN PHYSICAL 3D AUTO-FLIPPING MONOLITH (TRACKS 01 TO 12)
          - Automatic physical 3D panel rotating: Track 01 → flip → Track 02 → ... → Track 12
          - Visible panel thickness (28px extruded beveled metallic edges)
          - Realistic front/back surfaces & natural perspective
          - Shadows/reflections on the floor
          - Smooth rotation with pause
          - Inset intelligent image window with calibrated focal positions (no cut faces!)
          - Optional manual navigation controls
          ───────────────────────────────────────────────────────────── */}
      <section className="relative py-4 px-4 sm:px-6 lg:px-8">
        <Physical3DMonolith
          services={services}
          onSelectService={onSelectService}
          onOpenConsultation={onOpenConsultation}
          onNavigateToServicesHub={onNavigateToServicesHub}
        />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OFFICIAL WALL STATEMENT & 4 TRUST PILLARS
          From Ascend Career's authenticated brand document:
          - EXPERT MENTORS
          - STRONG INDUSTRY TIE-UPS
          - PROVEN RESULTS
          - GLOBAL OPPORTUNITIES
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040810] border-y border-slate-800/80 relative">
        <div className="max-w-6xl mx-auto">
          {/* Wall Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>ASCEND CAREER FOUNDATION</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
              YOUR CAREER. OUR MISSION. <br className="hidden sm:block" />
              <span className="text-teal-400">GLOBAL OPPORTUNITIES.</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              Empowering students and professionals with the right guidance, practical skills, and verified opportunities to build successful careers in India and around the world.
            </p>
          </div>

          {/* 4 Pillars from the Official Wall Graphic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-mono font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-base font-black text-white tracking-wider uppercase group-hover:text-teal-300 transition-colors">
                EXPERT MENTORS
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Certified career psychologists and senior industry leaders dedicated to your individual growth and milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-base font-black text-white tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
                STRONG INDUSTRY TIE-UPS
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Over 50+ corporate hiring partners providing direct interviews, internships, and hire-train-deploy pipelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-mono font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-base font-black text-white tracking-wider uppercase group-hover:text-teal-300 transition-colors">
                PROVEN RESULTS
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                More than 10,000+ students and professionals placed into prestigious colleges and corporate roles with 70%+ selection rate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                04
              </div>
              <h3 className="text-base font-black text-white tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
                GLOBAL OPPORTUNITIES
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Accredited university tie-ups across 22+ countries with full scholarship support and visa dossier assistance.
              </p>
            </div>
          </div>

          {/* Wall Quote Slogan Ribbon */}
          <div className="mt-12 text-center pt-8 border-t border-slate-800/60">
            <p className="text-xs font-mono font-bold tracking-[0.25em] text-teal-400 uppercase">
              TRANSFORMING CAREERS. CHANGING LIVES.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. EXPERIENCE REAL MENTORSHIP IN ACTION (IN-DEPTH DETAILS)
          - Replaced video with rich interactive details: 
            Compass, Campus Life, Mentorship Lab
          ───────────────────────────────────────────────────────────── */}
      <MentorshipInActionDetails
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onNavigateToServicesHub}
      />

      {/* ─────────────────────────────────────────────────────────────
          5. FEATURED GLOBAL OPPORTUNITIES (Study in Italy / Europe)
          ───────────────────────────────────────────────────────────── */}
      <FeaturedOpportunities
        onExplore={onNavigateToServicesHub}
        onBookConsultation={onOpenConsultation}
      />

      {/* ─────────────────────────────────────────────────────────────
          6. REAL TRANSFORMATIONS (Human Stories & Verified Outcomes)
          - Tested, properly framed photographic portraits
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#040810] border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
              REAL HUMAN STORIES & VERIFIED OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Guided with Care. Deployed with Pride.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Read how personalized guidance turned career uncertainty into confident achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    STUDY ABROAD
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;Ascend’s psychometric session resolved my confusion between Computer Science and Data Analytics in Class 12. Today I am studying at an accredited university in Italy with a full DSU scholarship!&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
                  alt="Aarav Sharma"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-teal-500/30"
                  style={{ objectPosition: 'center 15%' }}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Aarav Sharma</h4>
                  <p className="text-xs text-teal-400 font-medium">Study Abroad Alumnus (Politecnico di Milano)</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    CORPORATE ROLE
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;The ATS resume optimization and mock interviews were game-changers. My interview call rate went from zero to 5 calls in two weeks, landing my business intelligence role.&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Pooja Mukherjee"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/30"
                  style={{ objectPosition: 'center 15%' }}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Pooja Mukherjee</h4>
                  <p className="text-xs text-cyan-400 font-medium">Jobs & Placement Alumna (FinTech Corp)</p>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-teal-500/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-teal-400 font-bold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                    CAMPUS PARTNER
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;Ascend conducted campus bootcamps and career guidance across 600 students in our college. The individual psychometric reports gave our placement cell exact clarity.&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. R. K. Nair"
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-teal-500/30"
                  style={{ objectPosition: 'center 18%' }}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Dr. R. K. Nair</h4>
                  <p className="text-xs text-teal-400 font-medium">College Dean & Placement Head</p>
                </div>
              </div>
            </div>
          </div>

          {/* LOWER PART: Real Verified Google Reviews & Student Learning Experiences */}
          <LearningExperienceReviews onBookConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. STUDENT & PARENT FAQ SECTION
          - Real-world questions on Career Guidance & Study Abroad in Italy
          - Search filtering, categorized tabs, DSU regional scholarship guidance
          ───────────────────────────────────────────────────────────── */}
      <HomeFAQ onOpenConsultation={onOpenConsultation} />

      {/* ─────────────────────────────────────────────────────────────
          8. CLEAN CALL TO ACTION FOOTER BANNER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#040810] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-teal-950/60 via-[#0a1526] to-slate-900 border border-teal-500/30 p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(20,184,166,0.12)]">
          <AscendLogoMark className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready for Your Next Step? <br className="hidden sm:block" />
            <span className="text-teal-400">Let's Plan It Together.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Talk to an experienced mentor who listens to your goals. Whether it is stream selection, skill courses, job placement, or global admissions, your journey begins with a conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/25 transition-transform hover:scale-105 flex items-center gap-2"
              id="cta-schedule-consultation"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Free 1-on-1 Consultation</span>
            </button>
            <button
              onClick={onNavigateToServicesHub}
              className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 transition-colors"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
