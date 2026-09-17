import React from 'react';
import { ArrowRight, Star, Compass, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';
import { HeroVideoHeader } from './HeroVideoHeader';
import { TheJourneyShowcase } from './TheJourneyShowcase';
import { Ascend3DExhibition } from './Ascend3DExhibition';
import { RealJourneysReviews } from './RealJourneysReviews';

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
    <div className="min-h-screen bg-[#0D0D0D] text-[#f2f2f2] selection:bg-[#E5FE40] selection:text-[#0D0D0D]">
      
      {/* ─────────────────────────────────────────────────────────────
          01 — HERO
          Cinematic background video, ASCEND CAREER, Your next chapter starts here.
          GUIDE • TRAIN • PLACE • GROW • GO GLOBAL.
          Small CTA: Start Your Journey →
          ───────────────────────────────────────────────────────────── */}
      <HeroVideoHeader
        onOpenConsultation={onOpenConsultation}
        onExploreServices={onNavigateToServicesHub}
      />

      {/* ─────────────────────────────────────────────────────────────
          02 — THE JOURNEY
          One destination. Endless opportunities.
          Real counseling spaces and authentic consultation environments.
          ───────────────────────────────────────────────────────────── */}
      <TheJourneyShowcase
        services={services}
        onSelectService={onSelectService}
        onOpenConsultation={onOpenConsultation}
      />

      {/* ─────────────────────────────────────────────────────────────
          03 — 3D SERVICE EXPERIENCE (THE MAIN ATTRACTION)
          Dark architectural environment.
          Automatic physical 3D flip (ROTATE → THICKNESS → BACKSIDE → NEW IMAGE).
          Shows ONLY the identity (Emotional line + Service name + Composed visual).
          When clicked, opens complete service detail page.
          Includes:
          01 Career Guidance
          02 Skill Development
          03 Jobs & Placement
          04 Study Abroad
          05 Study in India
          06 School & College Programs
          07 Corporate Training & HR
          08 Graphic Design
          09 Website Design & Maintenance
          ───────────────────────────────────────────────────────────── */}
      <Ascend3DExhibition
        services={services}
        onSelectService={onSelectService}
        onOpenConsultation={onOpenConsultation}
      />

      {/* ─────────────────────────────────────────────────────────────
          04 — ASCEND ECOSYSTEM
          GUIDE → TRAIN → PLACE → GROW → GO GLOBAL
          Very simple, disciplined CRED-style progression.
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212] border-b border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              A continuous path from ambition to global impact.
            </h3>
          </div>

          {/* Clean 5-Stage Minimal Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              {
                step: '01',
                title: 'GUIDE',
                desc: 'Aptitude & Psychological Clarity',
                accent: '#E5FE40'
              },
              {
                step: '02',
                title: 'TRAIN',
                desc: 'Practical Masterclasses & Labs',
                accent: '#3BFFAD'
              },
              {
                step: '03',
                title: 'PLACE',
                desc: 'Corporate Pipelines & Offers',
                accent: '#6A35FF'
              },
              {
                step: '04',
                title: 'GROW',
                desc: 'Leadership & Enterprise HR',
                accent: '#FFFFFF'
              },
              {
                step: '05',
                title: 'GO GLOBAL',
                desc: 'International Visas & Campuses',
                accent: '#00828A'
              }
            ].map((node, i) => (
              <div
                key={node.step}
                className="p-5 bg-[#161616] border border-[#262626] cred-box-dark flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#8A8A8A]">
                      {node.step}
                    </span>
                    <div
                      className="w-2 h-2"
                      style={{ backgroundColor: node.accent }}
                    />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {node.title}
                  </h4>
                </div>
                <p className="text-xs text-[#8A8A8A] font-light mt-3 leading-relaxed">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          05 — REAL PEOPLE & STUDENT REVIEWS
          Real journeys. Real guidance. Real opportunities.
          Verified Google Reviews & Student Testimonials
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-b border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Real journeys. <br className="hidden sm:inline" />
              <span className="font-editorial italic font-normal text-white/90">
                Real guidance. Real opportunities.
              </span>
            </h2>
          </div>

          {/* Authentic Google Reviews with Filter Pills & Owner Responses */}
          <RealJourneysReviews onBookSession={onOpenConsultation} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          06 — FINAL CTA
          Where do you want to go next?
          Start Your Journey →
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121212] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
            Where do you want <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-white/90">
              to go next?
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#8A8A8A] font-light max-w-lg mx-auto leading-relaxed">
            Your career, education, or digital platform deserves uncompromising execution. Speak directly with our leadership today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              id="final-cta-start-journey-btn"
              className="px-8 py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase cred-btn-tactile cred-box-white flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#d8f235]"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNavigateToServicesHub}
              className="px-7 py-4 bg-[#161616] text-white font-mono text-xs uppercase tracking-wider border border-[#262626] hover:border-[#444444] transition-colors cred-btn-tactile cred-box-dark cursor-pointer"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
