import React, { useState } from 'react';
import { GraduationCap, Code, Briefcase, TrendingUp, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface JourneyStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  deliverables: string[];
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'student',
    stepNumber: '01',
    title: 'Student & Academic Clarity',
    subtitle: 'GUIDE',
    icon: <GraduationCap className="w-5 h-5" />,
    description: 'Diagnose innate cognitive strengths, academic interests, and psychometric profiles through certified RIASEC & aptitude frameworks.',
    deliverables: ['Psychometric report', 'Stream & subject selection', 'College admission strategy']
  },
  {
    id: 'skills',
    stepNumber: '02',
    title: 'Skill Development & Mastery',
    subtitle: 'TRAIN',
    icon: <Code className="w-5 h-5" />,
    description: 'Bridge classroom theory with corporate workplace readiness via intensive hands-on bootcamps in AI, full-stack tech, analytics, and leadership.',
    deliverables: ['Live production projects', 'Mentor code reviews', 'Industry credentialing']
  },
  {
    id: 'job',
    stepNumber: '03',
    title: 'Job Placement & Corporate Connect',
    subtitle: 'PLACE',
    icon: <Briefcase className="w-5 h-5" />,
    description: 'Direct pipeline to 500+ hiring partner companies with ATS-tailored resume engineering, 1-on-1 mock technical interviews, and salary negotiation.',
    deliverables: ['ATS resume overhaul', 'Direct recruiter referrals', 'Offer negotiation guidance']
  },
  {
    id: 'growth',
    stepNumber: '04',
    title: 'Professional Growth & Upskilling',
    subtitle: 'GROW',
    icon: <TrendingUp className="w-5 h-5" />,
    description: 'Mid-career acceleration for working professionals targeting senior managerial transitions, executive leadership, and strategic domain shifts.',
    deliverables: ['Executive mentorship', 'Transition roadmaps', 'Leadership workshops']
  },
  {
    id: 'global',
    stepNumber: '05',
    title: 'Global Opportunities & Education',
    subtitle: 'GO GLOBAL',
    icon: <Globe2 className="w-5 h-5" />,
    description: 'Unlock world-class international degrees and cross-border career mobility across 22+ countries with full scholarship and visa advisory.',
    deliverables: ['University shortlisting', 'SOP & LOR drafting', 'Visa & post-study work roadmap']
  }
];

interface CareerJourney3DProps {
  onOpenConsultation: () => void;
}

export const CareerJourney3D: React.FC<CareerJourney3DProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = JOURNEY_STEPS[activeStepIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b1120] relative border-b border-slate-800" id="career-journey-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>The Ascend Trajectory</span>
            <span className="text-teal-600">•</span>
            <span className="text-teal-400 font-mono">End-to-End Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Structured Career Journey
          </h2>
          <p className="text-base sm:text-lg font-bold text-teal-400 uppercase tracking-[0.2em] mt-3">
            Student → Skills → Job → Professional Growth → Global
          </p>
          <p className="text-sm text-slate-300 mt-2">
            Click each milestone below to explore how Ascend supports you at every crucial transition in your professional life.
          </p>
        </div>

        {/* Milestone Steps Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between select-none ${
                  isActive
                    ? 'bg-slate-900 border-teal-400 shadow-[0_10px_25px_rgba(20,184,166,0.3)] ring-1 ring-teal-400/50 -translate-y-1'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                      isActive ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'text-teal-300 bg-teal-500/20 border border-teal-400/40'
                        : 'text-slate-400 bg-slate-800/80 border border-slate-700/60'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                <div>
                  <span
                    className={`block text-[10px] font-mono tracking-wider uppercase font-bold ${
                      isActive ? 'text-teal-400' : 'text-slate-500'
                    }`}
                  >
                    {step.subtitle}
                  </span>
                  <h4
                    className={`text-xs sm:text-sm font-bold tracking-tight mt-0.5 leading-snug line-clamp-2 ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Focus Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-teal-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/40 flex items-center justify-center text-xl shadow-md">
                  {activeStep.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">
                      PHASE {activeStep.stepNumber} • {activeStep.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-6">
                {activeStep.description}
              </p>

              {/* Core Deliverables */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                  Stage Key Outcomes & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeStep.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-center">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/25 transition-all flex items-center gap-2 w-fit"
              >
                <span>Consult on This Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] font-mono text-slate-400 mt-2">
                Personalized 1-on-1 trajectory roadmap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
