import React from 'react';
import { Sparkles, Compass, ShieldCheck, Target, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendOfficialWallLockup, Ascend3DWallDisplay } from './AscendLogo';

interface AboutViewProps {
  onNavigateToServices: () => void;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateToServices,
  onOpenConsultation
}) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#f2f2f2] py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#E5FE40] selection:text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Empowering Careers Through Scientific Rigor & Creative Engineering
          </h1>

          <p className="text-base text-[#8A8A8A] mt-4 leading-relaxed font-light">
            Ascend Career is a premier integrated education, design, and web technology ecosystem. We dismantle the silos between schooling, higher education, creative branding, and enterprise engineering.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#161616] border border-[#262626] cred-box-dark relative">
            <div className="w-10 h-10 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#E5FE40] mb-6">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight font-mono">Our Mission</h2>
            <p className="text-sm text-[#8A8A8A] leading-relaxed font-light">
              To empower every student, job seeker, and enterprise with objective psychometric assessment, career planning, high-impact skill training, state-of-the-art graphic design, and custom web application infrastructure.
            </p>
          </div>

          <div className="p-8 bg-[#161616] border border-[#262626] cred-box-dark relative">
            <div className="w-10 h-10 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#6A35FF] mb-6">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight font-mono">Our Vision</h2>
            <p className="text-sm text-[#8A8A8A] leading-relaxed font-light">
              To be the most trusted unified career ecosystem globally, where individuals smoothly transition from 01 Career Guidance to 08 Graphic Design and 09 Web Services & Maintenance with surgical precision.
            </p>
          </div>
        </div>

        {/* The 9-Vertical Ecosystem Concept */}
        <div className="bg-[#161616] border border-[#262626] p-8 md:p-12 mb-20 cred-box-dark">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#E5FE40] uppercase tracking-widest block mb-2">
              THE ASCEND ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              01–09 Unified Service Spectrum
            </h2>
            <p className="text-sm text-[#8A8A8A] mt-3 leading-relaxed font-light">
              A career is an evolving multi-decade journey. Ascend bridges the entire trajectory from early guidance to high-value digital execution:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            <div className="p-5 bg-[#121212] border border-[#262626] cred-box-dark">
              <div className="text-[#E5FE40] font-bold text-xs uppercase mb-1">01–02 Foundation</div>
              <h4 className="text-white font-bold text-sm">Guidance & Assessments</h4>
              <p className="text-xs text-[#8A8A8A] mt-1 font-sans font-light">Stream and course selection grounded in psychometric aptitude data.</p>
            </div>
            <div className="p-5 bg-[#121212] border border-[#262626] cred-box-dark">
              <div className="text-white font-bold text-xs uppercase mb-1">03–05 Academia & Prep</div>
              <h4 className="text-white font-bold text-sm">Admissions & Tests</h4>
              <p className="text-xs text-[#8A8A8A] mt-1 font-sans font-light">Domestic & global university admissions plus standard test coaching.</p>
            </div>
            <div className="p-5 bg-[#121212] border border-[#262626] cred-box-dark">
              <div className="text-[#6A35FF] font-bold text-xs uppercase mb-1">06–08 Creative</div>
              <h4 className="text-white font-bold text-sm">Skills & Graphic Design</h4>
              <p className="text-xs text-[#8A8A8A] mt-1 font-sans font-light">Industry-grade design, branding identity, and technical masterclasses.</p>
            </div>
            <div className="p-5 bg-[#121212] border border-[#262626] cred-box-dark">
              <div className="text-[#3BFFAD] font-bold text-xs uppercase mb-1">09 Web Engineering</div>
              <h4 className="text-white font-bold text-sm">Full-Stack & Maintenance</h4>
              <p className="text-xs text-[#8A8A8A] mt-1 font-sans font-light">Modern web apps, enterprise maintenance, and automated deployments.</p>
            </div>
          </div>
        </div>

        {/* Advisory Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A8A8A] font-bold block mb-1">
              BENCHMARKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Core Commitments</h2>
            <p className="text-sm text-[#8A8A8A] mt-2 font-light">The ethical benchmarks governing every Ascend mentor and engineer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#161616] border border-[#262626] cred-box-dark">
              <CheckCircle2 className="w-5 h-5 text-[#E5FE40] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">Uncompromised Objectivity</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
                We recommend programs and institutions strictly based on student scores, aptitude fitment, and ROI—never commissioned quotas.
              </p>
            </div>

            <div className="p-6 bg-[#161616] border border-[#262626] cred-box-dark">
              <CheckCircle2 className="w-5 h-5 text-[#6A35FF] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">Scientifically Backed Diagnostics</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
                Our psychometric batteries adhere to standard psychometric validity and reliability metrics recognized globally.
              </p>
            </div>

            <div className="p-6 bg-[#161616] border border-[#262626] cred-box-dark">
              <CheckCircle2 className="w-5 h-5 text-[#3BFFAD] mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">End-to-End Accountable Handover</h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed font-light">
                We do not abandon students after a test; we accompany them through university admissions, portfolio creation, and tech delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Official Brand Identity Showcase */}
        <div className="mb-20 py-12 px-6 bg-[#161616] border border-[#262626] cred-box-dark text-center max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#E5FE40] font-bold block mb-6">
            OFFICIAL BRAND IDENTITY
          </span>
          <Ascend3DWallDisplay size="md" className="my-2" />
          <p className="text-xs text-[#8A8A8A] mt-6 max-w-md mx-auto leading-relaxed font-light">
            Official 3D geometric emblem and dimensional typography. Guiding students, professionals, and enterprise partners across the globe.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#161616] border border-[#262626] cred-box-dark p-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Speak to an Ascend Senior Counselor</h3>
          <p className="text-sm text-[#8A8A8A] mb-6 font-light">
            Book a 1-to-1 session to plan your education, career pivot, design identity, or web architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold font-mono text-xs uppercase tracking-wider cred-btn-tactile cred-box-white cursor-pointer hover:bg-[#d8f235]"
            >
              Book a Consultation
            </button>
            <button
              onClick={onNavigateToServices}
              className="px-6 py-4 bg-[#1F1F1F] text-white font-mono text-xs uppercase tracking-wider border border-[#333333] cred-btn-tactile cred-box-dark hover:border-[#555555] transition-colors"
            >
              Explore 3D Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
