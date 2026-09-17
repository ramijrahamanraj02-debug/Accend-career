import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { HUMAN_STORIES_DATA } from '../data/humanStoryData';

interface ServiceDetailViewProps {
  service: ServiceVertical;
  allServices?: ServiceVertical[];
  onSelectAnotherService?: (service: ServiceVertical) => void;
  onBackToHub: () => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  allServices,
  onSelectAnotherService,
  onBackToHub,
  onOpenConsultation
}) => {
  const story = HUMAN_STORIES_DATA[service.id];

  // Helper for stage photos
  const getStagePhoto = (stepNum: number) => {
    if (!story) return service.photoVisual?.hero || '';
    if (stepNum === 1) return story.fieldMoments?.[0]?.url || story.heroPhoto?.url || '';
    if (stepNum === 2) return story.fieldMoments?.[1]?.url || story.heroPhoto?.url || '';
    if (stepNum === 3) return story.heroPhoto?.url || '';
    return story.fieldMoments?.[2]?.url || story.studentSuccess?.avatarUrl || story.heroPhoto?.url || '';
  };

  const isFirst = service.id === 'career-guidance';
  const isGraphic = service.id === 'graphic-design';
  const isWeb = service.id === 'web-services';

  const accentColor = isFirst ? '#E5FE40' : isGraphic ? '#6A35FF' : isWeb ? '#3BFFAD' : '#FFFFFF';

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#f2f2f2] pb-24 selection:bg-[#E5FE40] selection:text-[#0D0D0D]" id={`service-page-${service.id}`}>
      {/* Top Breadcrumb & Switcher */}
      <div className="bg-[#121212] border-b border-[#1F1F1F] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8A8A8A]">
            <button
              onClick={onBackToHub}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-bold uppercase cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Services</span>
            </button>
            <span>/</span>
            <span className="text-white font-bold">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#1F1F1F] bg-[#121212]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-[#E5FE40] font-mono mt-3 font-semibold">
                {service.tagline}
              </p>

              <p className="text-base text-[#8A8A8A] mt-4 leading-relaxed max-w-2xl font-light">
                {service.fullDesc}
              </p>

              {/* Target Audience Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mr-1">
                  Target:
                </span>
                {service.targetAudience.map((audience, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 bg-[#161616] text-[#D1D1D1] border border-[#262626]"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Card on Right */}
            <div className="w-full lg:w-96 bg-[#161616] border border-[#262626] p-6 cred-box-dark shrink-0">
              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                Claim {service.title.split('&')[0].trim()} Plan
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed mb-5 font-light">
                Connect with senior strategists and engineers for an authoritative roadmap session.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-[#D1D1D1] font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FE40] shrink-0" />
                  <span>100% Document-aligned curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FE40] shrink-0" />
                  <span>Online video or in-person advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FE40] shrink-0" />
                  <span>Comprehensive reports & deliverables</span>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(service.id)}
                className="w-full py-4 px-4 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cred-btn-tactile cred-box-white cursor-pointer hover:bg-[#d8f235]"
                id="service-hero-cta-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        {/* SECTION 1: PROGRAMS & MODULES */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Program Modules
            </h2>
            <p className="text-sm text-[#8A8A8A] mt-1 font-light">
              Structured modules engineered to deliver tangible milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub) => (
              <div
                key={sub.id}
                className="bg-[#161616] border border-[#262626] p-6 flex flex-col justify-between cred-box-dark group"
                id={`subservice-${sub.id}`}
              >
                <div>
                  {sub.badge && (
                    <div className="mb-3">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 bg-[#1F1F1F] text-[#E5FE40] border border-[#333333] font-bold">
                        {sub.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-white group-hover:text-[#E5FE40] transition-colors">
                    {sub.title}
                  </h3>

                  <p className="text-xs text-[#8A8A8A] mt-2 leading-relaxed font-light">
                    {sub.description}
                  </p>

                  {sub.deliverables && (
                    <div className="mt-4 pt-3 border-t border-[#262626]">
                      <span className="text-[10px] uppercase font-mono font-bold text-[#8A8A8A] tracking-wider block mb-2">
                        Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {sub.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-xs text-[#D1D1D1] flex items-center gap-2 font-mono"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5FE40] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between">
                  <button
                    onClick={() => onOpenConsultation(service.id)}
                    className="text-xs font-mono uppercase font-bold text-[#E5FE40] hover:text-[#f0ff66] flex items-center gap-1.5 transition-colors cursor-pointer"
                    id={`enquire-track-${sub.id}`}
                  >
                    <span>Enquire Module</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: PROCESS STEPS */}
        {service.processSteps && service.processSteps.length > 0 && (
          <div className="max-w-4xl mx-auto pt-8 border-t border-[#1F1F1F]">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                How We Deliver {service.title}
              </h2>
              <p className="text-sm text-[#8A8A8A] mt-1 font-light">
                A structured, milestone-based methodology ensuring measurable outcomes.
              </p>
            </div>

            <div className="relative border-l-2 border-[#262626] ml-6 space-y-10 pl-8">
              {service.processSteps.map((step) => (
                <div key={step.step} className="relative group">
                  {/* Step Bubble */}
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-none bg-[#161616] border-2 border-[#E5FE40] flex items-center justify-center font-mono font-bold text-[#E5FE40] text-xs cred-box-dark">
                    {step.step}
                  </div>

                  <div className="bg-[#161616] p-6 border border-[#262626] cred-box-dark">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <div className="flex-1">
                        <span className="text-xs font-mono text-[#E5FE40] uppercase tracking-wider font-bold">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-[#8A8A8A] mt-2 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>

                      {/* Stage Photo Thumbnail */}
                      <div className="w-full sm:w-48 shrink-0 overflow-hidden border border-[#333333] aspect-[16/10] sm:aspect-square relative group bg-[#0D0D0D]">
                        <img
                          src={getStagePhoto(step.step)}
                          alt={`Stage ${step.step} in session`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#0D0D0D] text-[10px] font-mono text-[#E5FE40] font-bold border border-[#262626]">
                          Step {step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 3: OUTCOMES */}
        {service.outcomes && service.outcomes.length > 0 && (
          <div className="max-w-4xl mx-auto pt-8 border-t border-[#1F1F1F]">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Core Results & Impact
              </h2>
              <p className="text-sm text-[#8A8A8A] mt-1 font-light">
                What students, job seekers, and organizations achieve through this vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] p-6 border border-[#262626] cred-box-dark flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#E5FE40] shrink-0 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Outcome 0{idx + 1}
                    </h4>
                    <p className="text-xs text-[#8A8A8A] mt-1 leading-relaxed font-light">
                      {outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 4: FAQS */}
        {service.faq && service.faq.length > 0 && (
          <div className="max-w-3xl mx-auto pt-8 border-t border-[#1F1F1F]">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8A8A8A] font-bold block mb-1">
                CLARITY
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#8A8A8A] mt-1 font-light">
                Answers to common queries regarding this specification.
              </p>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] p-6 border border-[#262626] cred-box-dark"
                >
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#E5FE40] shrink-0" />
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-xs text-[#8A8A8A] mt-3 leading-relaxed pl-6 font-light">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="bg-[#161616] border border-[#262626] p-8 sm:p-12 text-center cred-box-dark relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to Accelerate with Ascend?
            </h3>
            <p className="text-sm text-[#8A8A8A] mt-3 leading-relaxed font-light">
              Schedule your personalized consultation with our senior advisors for {service.title}.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation(service.id)}
                className="px-8 py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center gap-2 cursor-pointer hover:bg-[#d8f235]"
                id="service-footer-book-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
              <button
                onClick={onBackToHub}
                className="px-6 py-4 bg-[#1F1F1F] text-white font-mono text-xs uppercase tracking-wider border border-[#333333] hover:border-[#555555] transition-colors cred-btn-tactile cred-box-dark"
                id="service-footer-browse-btn"
              >
                Browse All Other Verticals
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
