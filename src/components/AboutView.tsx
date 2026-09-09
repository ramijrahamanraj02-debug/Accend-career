import React from 'react';
import { Sparkles, Compass, ShieldCheck, Target, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceVertical } from '../types';

interface AboutViewProps {
  onNavigateToServices: () => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateToServices,
  onOpenConsultation
}) => {
  return (
    <div className="min-h-screen bg-[#0b1120] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Ascend Career</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering Careers Through Scientific Clarity & Industry Bridge
          </h1>

          <p className="text-base text-slate-300 mt-4 leading-relaxed">
            Ascend Career is a premier integrated education and career advisory organization. We dismantle the silos between schooling, higher education, skill acquisition, and corporate employment.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower every student, job seeker, and professional with objective psychometric assessment, career planning, high-impact skill training, and direct corporate recruitment pipelines, fostering genuine professional fulfillment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the most trusted unified career ecosystem globally, where students and working professionals seamlessly navigate from early stream choices to senior enterprise leadership without confusion, compromise, or lost opportunity.
            </p>
          </div>
        </div>

        {/* The 7-Vertical Ecosystem Concept */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0c1829] border border-teal-500/25 p-8 md:p-12 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
              THE ASCEND ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why All 7 Services Live in Harmony Under One Roof
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              A career is not a single one-time transaction; it is an evolving multi-decade journey. Most platforms offer either only study abroad, or only psychometric tests, or only recruitment. Ascend Career connects the full arc:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-teal-400 font-bold text-xs uppercase mb-1">Phase 1: School</div>
              <h4 className="text-white font-bold text-sm">Guidance & Assessments</h4>
              <p className="text-xs text-slate-400 mt-1">Stream and course selection grounded in psychometric aptitude data.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-cyan-400 font-bold text-xs uppercase mb-1">Phase 2: College</div>
              <h4 className="text-white font-bold text-sm">Study India & Abroad</h4>
              <p className="text-xs text-slate-400 mt-1">UG/PG admissions in premier domestic and global universities.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-blue-400 font-bold text-xs uppercase mb-1">Phase 3: Launch</div>
              <h4 className="text-white font-bold text-sm">Skills & Placement</h4>
              <p className="text-xs text-slate-400 mt-1">ATS resume optimization, interview mastery, and employer connect.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-indigo-400 font-bold text-xs uppercase mb-1">Phase 4: Scale</div>
              <h4 className="text-white font-bold text-sm">Campus & Corporate</h4>
              <p className="text-xs text-slate-400 mt-1">Institutional drives, executive coaching, and corporate staffing.</p>
            </div>
          </div>
        </div>

        {/* Advisory Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Core Commitments</h2>
            <p className="text-sm text-slate-400 mt-2">The ethical benchmarks governing every Ascend counsellor and mentor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Uncompromised Objectivity</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We recommend programs and institutions strictly based on student scores, aptitude fitment, and ROI—never commissioned quotas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Scientifically Backed Diagnostics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our psychometric batteries adhere to standard psychometric validity and reliability metrics recognized globally.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-teal-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">End-to-End Accountable Handover</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not abandon students after a test; we accompany them through university admissions, visas, and corporate placement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Speak to an Ascend Senior Counselor</h3>
          <p className="text-sm text-slate-400 mb-6">
            Book a 1-to-1 session to plan your education, skills, or international admissions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all"
            >
              Book a Consultation
            </button>
            <button
              onClick={onNavigateToServices}
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
