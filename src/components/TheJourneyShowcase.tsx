import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { ServiceVertical } from '../types';
import { AscendLogoMark } from './AscendLogo';

export interface JourneyScene {
  id: string;
  roomCode: string;
  emotionalHeadline: string;
  serviceName: string;
  serviceId: string;
  context: string;
  image: string;
  focalPoint: string;
  accent: string;
  keyOutcome: string;
}

export const JOURNEY_SCENES: JourneyScene[] = [
  {
    id: 'pathways-lab',
    roomCode: 'SPACE 01',
    emotionalHeadline: 'Find Your Direction',
    serviceName: 'Career Guidance',
    serviceId: 'career-guidance',
    context: 'Collaborative strategy session mapping multi-branch academic and professional trajectories across aptitude matrices.',
    image: '/images/career-guidance-compass.jpg',
    focalPoint: 'center center',
    accent: '#E5FE40',
    keyOutcome: '3-Year Personalized Career Pathway'
  },
  {
    id: 'admissions-desk',
    roomCode: 'SPACE 02',
    emotionalHeadline: 'Find Your University',
    serviceName: 'Study in India & Direct Admissions',
    serviceId: 'study-in-india',
    context: 'Direct student enrollment verification, entrance rank counseling, and quota allocation assistance.',
    image: '/images/study-in-india-direct-admissions.jpg',
    focalPoint: 'center 40%',
    accent: '#3BFFAD',
    keyOutcome: 'Verified Institutional Admission'
  },
  {
    id: 'study-abroad-space',
    roomCode: 'SPACE 03',
    emotionalHeadline: 'Go Beyond Borders',
    serviceName: 'Study Abroad',
    serviceId: 'study-abroad',
    context: 'Global university admissions, full scholarship profiling, visa filing, and pre-departure briefings.',
    image: '/images/study-abroad-global-pathways.jpg',
    focalPoint: 'center 40%',
    accent: '#00828A',
    keyOutcome: 'Global University Admission & Visa Approval'
  },
  {
    id: 'academic-advisory',
    roomCode: 'SPACE 04',
    emotionalHeadline: 'Choose Your Stream',
    serviceName: 'Stream & Course Selection',
    serviceId: 'career-guidance',
    context: 'Structured Class 10 & 12 stream selection bridging Science, Commerce, and Arts with future market demands.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    focalPoint: 'center 25%',
    accent: '#00828A',
    keyOutcome: 'Clear Academic Specialization Fit'
  },
  {
    id: 'psychometric-lounge',
    roomCode: 'SPACE 05',
    emotionalHeadline: 'Discover Your Strengths',
    serviceName: 'Career & Aptitude Assessment',
    serviceId: 'career-guidance',
    context: 'In-depth behavioral, cognitive, and personality evaluation measuring RIASEC profile and analytical aptitudes.',
    image: '/images/discover-your-strengths-assessment.jpg',
    focalPoint: 'center 45%',
    accent: '#E5FE40',
    keyOutcome: '16-Page Scientific Diagnostic Report'
  },
  {
    id: 'placement-coaching',
    roomCode: 'SPACE 06',
    emotionalHeadline: 'Find Your Opportunity',
    serviceName: 'Jobs & Placement Readiness',
    serviceId: 'jobs-placement',
    context: 'Interview stress testing, ATS resume optimization, salary negotiation, and direct recruiter introductions.',
    image: '/images/jobs-placement-readiness.jpg',
    focalPoint: 'center 40%',
    accent: '#3BFFAD',
    keyOutcome: 'Direct Interview Call Pipeline'
  }
];

interface TheJourneyShowcaseProps {
  services: ServiceVertical[];
  onSelectService: (service: ServiceVertical) => void;
  onOpenConsultation: () => void;
}

export const TheJourneyShowcase: React.FC<TheJourneyShowcaseProps> = ({
  services,
  onSelectService,
  onOpenConsultation
}) => {
  const [selectedScene, setSelectedScene] = useState<JourneyScene>(JOURNEY_SCENES[0]);

  const handleOpenService = (serviceId: string) => {
    const matched = services.find((s) => s.id === serviceId) || services[0];
    onSelectService(matched);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-b border-[#1F1F1F] relative overflow-hidden" id="the-journey">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle_at_50%_50%,rgba(0,130,138,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header: One destination. Endless opportunities. */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            One destination. <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-white/90">
              Endless opportunities.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#8A8A8A] font-light max-w-2xl mx-auto leading-relaxed">
            Real guidance happening inside our physical consultation spaces. Every journey begins with a dedicated mentor and an uncompromised roadmap.
          </p>
        </div>

        {/* The 6 Authentic Ascend Spaces — Grid of Designed Visual Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNEY_SCENES.map((scene) => (
            <div
              key={scene.id}
              onClick={() => handleOpenService(scene.serviceId)}
              className="group bg-[#161616] border-2 border-[#262626] hover:border-[#444444] transition-all duration-300 cred-box-dark flex flex-col justify-between cursor-pointer overflow-hidden"
              style={{
                boxShadow: '10px 10px 0px #000000'
              }}
            >
              {/* TOP PART: Designed Visual Frame (Properly composed, no cut faces) */}
              <div className="relative w-full aspect-[16/10.5] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={scene.image}
                  alt={scene.serviceName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: scene.focalPoint }}
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/30 pointer-events-none" />

                {/* Ascend Watermark Mark */}
                <div className="absolute top-3 left-3 flex items-center gap-2 p-1.5 bg-[#0D0D0D]/80 backdrop-blur-sm border border-[#262626]">
                  <AscendLogoMark className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono text-white/80 font-bold tracking-wider">{scene.roomCode}</span>
                </div>
              </div>

              {/* BOTTOM PART: Identity & Minimalist Copy */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#161616]">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: scene.accent }}
                    >
                      {scene.emotionalHeadline}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#E5FE40] transition-colors">
                    {scene.serviceName}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                    {scene.context}
                  </p>
                </div>

                {/* Bottom interactive row */}
                <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
                  <div className="text-[#D1D1D1] text-[11px] truncate max-w-[200px]">
                    Outcome: <span className="text-white font-semibold">{scene.keyOutcome}</span>
                  </div>

                  <span className="text-[#E5FE40] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-[#8A8A8A] uppercase tracking-widest mb-4">
            Every session is conducted in-person at our centers or via secure digital consultation rooms
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-[#161616] text-white font-mono text-xs uppercase tracking-wider border border-[#262626] hover:border-[#E5FE40] hover:text-[#E5FE40] transition-colors cred-btn-tactile cred-box-dark cursor-pointer inline-flex items-center gap-2"
          >
            <span>Reserve A 1-to-1 Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
