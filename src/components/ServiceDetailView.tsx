import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  FileText,
  ChevronRight,
  Send,
  Users,
  Award,
  Camera,
  Film,
  Box,
  Eye,
  Video
} from 'lucide-react';
import { ServiceVertical } from '../types';
import { ServiceIcon } from './ServiceIcons';
import { ServiceVisual3D } from './ServiceVisual3D';
import { HumanStoryVisualizer } from './HumanStoryVisualizer';
import { HUMAN_STORIES_DATA } from '../data/humanStoryData';
import { AscendVideoPlayer } from './AscendVideoPlayer';

interface ServiceDetailViewProps {
  service: ServiceVertical;
  allServices: ServiceVertical[];
  onSelectAnotherService: (service: ServiceVertical) => void;
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
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'programs' | 'process' | 'outcomes' | 'human-stories' | 'faq'>('programs');

  const story = HUMAN_STORIES_DATA[service.id];

  // Helper for stage photos
  const getStagePhoto = (stepNum: number) => {
    if (stepNum === 1) return story.fieldMoments[0]?.url || story.heroPhoto.url;
    if (stepNum === 2) return story.fieldMoments[1]?.url || story.heroPhoto.url;
    if (stepNum === 3) return story.heroPhoto.url;
    return story.fieldMoments[2]?.url || story.studentSuccess.avatarUrl;
  };

  return (
    <div className="min-h-screen bg-[#0b1120] pb-24" id={`service-page-${service.id}`}>
      {/* Top Breadcrumb & Switcher */}
      <div className="bg-[#080d1a] border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={onBackToHub}
              className="hover:text-teal-400 transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Services
            </button>
            <span>/</span>
            <span className="text-teal-400 font-semibold">{service.title}</span>
          </div>

          {/* Quick Switch to Other Services */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            <span className="text-[11px] text-slate-500 uppercase font-mono mr-1 hidden lg:inline">
              Jump to:
            </span>
            {allServices.map((s) => (
              <button
                key={s.id}
                onClick={() => onSelectAnotherService(s)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  s.id === service.id
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
                id={`jump-service-${s.id}`}
              >
                <ServiceIcon id={s.id} className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">{s.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60 bg-gradient-to-b from-[#0e1628] to-[#0b1120]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
                <ServiceIcon id={service.id} className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Ascend Vertical 0{service.numericCode}</span>
                <span>•</span>
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg text-teal-300 font-medium mt-3">
                {service.tagline}
              </p>

              <p className="text-base text-slate-300 mt-4 leading-relaxed max-w-2xl">
                {service.fullDesc}
              </p>

              {/* Target Audience Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                  Ideal For:
                </span>
                {service.targetAudience.map((audience, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-slate-700/60 font-medium"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action Card on Right */}
            <div className="w-full lg:w-96 rounded-2xl bg-slate-900/90 border border-teal-500/30 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_20px_rgba(20,184,166,0.15)] shrink-0 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-widest font-bold">
                  CONSULTATION PORTAL
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Begin Your {service.title.split('&')[0].trim()} Plan
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Connect with our senior certified counsellors and domain mentors for a 1-to-1 strategic roadmap session.
              </p>

              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>100% Document-aligned curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Online video or in-person advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Comprehensive reports & roadmaps</span>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(service.id)}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all hover:scale-[1.02]"
                id="service-hero-cta-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>

          {/* 3D Framework & Authentic Human Storytelling Showcase */}
          {story && (
            <div className="mt-12 pt-8 border-t border-slate-800/80">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VISUAL DUALITY • 3D ARCHITECTURE & AUTHENTIC HUMAN REALITY</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    Theoretical 3D Geometry & Live Field Photography
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                    Positioning our 3D conceptual modeling directly alongside verified documentary photography and supplementary video clips from live Ascend advisory sessions.
                  </p>
                </div>
              </div>

              <HumanStoryVisualizer
                story={story}
                render3DElement={() => (
                  <div className="w-full py-4 flex flex-col items-center justify-center">
                    <ServiceVisual3D verticalId={service.id} className="w-full h-52 sm:h-64" isHovered={true} />
                    <span className="text-xs font-mono text-teal-400 mt-2 font-bold tracking-wider">
                      Vertical 0{service.numericCode} • Interactive 3D Model
                    </span>
                  </div>
                )}
                initialMode="hybrid"
                onOpenConsultation={() => onOpenConsultation(service.id)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-20 z-30 bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 overflow-x-auto py-3">
          <button
            onClick={() => setActiveTab('programs')}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'programs'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            id="tab-subservices"
          >
            <Layers className="w-4 h-4" />
            <span>Full Programs & Modules ({service.subServices.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('process')}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'process'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            id="tab-process"
          >
            <Clock className="w-4 h-4" />
            <span>4-Stage Delivery Process</span>
          </button>

          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'outcomes'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            id="tab-outcomes"
          >
            <Award className="w-4 h-4" />
            <span>Guaranteed Outcomes</span>
          </button>

          <button
            onClick={() => setActiveTab('human-stories')}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'human-stories'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            id="tab-human-stories"
          >
            <Camera className="w-4 h-4 text-teal-400" />
            <span>Field Photography & Video Stories</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            id="tab-faq"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* TAB 1: ALL SUB-SERVICES DIRECTLY FROM DOCUMENT */}
        {activeTab === 'programs' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Inside: {service.title}
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Each sub-service is meticulously structured based on the Ascend Career official service blueprint.
                </p>
              </div>

              <div className="text-xs text-slate-400 font-mono bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                TOTAL TRACKS: <span className="text-teal-400 font-bold">{service.subServices.length}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.subServices.map((sub, idx) => (
                <div
                  key={sub.id}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-teal-500/40 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.25)] group"
                  id={`subservice-${sub.id}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/20">
                        TRACK {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                      {sub.badge && (
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-medium border border-slate-700">
                          {sub.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {sub.title}
                    </h3>

                    <p className="text-sm text-slate-300/90 mt-2 leading-relaxed">
                      {sub.description}
                    </p>

                    {sub.deliverables && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                          Key Deliverables:
                        </span>
                        <ul className="space-y-1.5">
                          {sub.deliverables.map((item, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-slate-300 flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(service.id)}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors"
                      id={`enquire-track-${sub.id}`}
                    >
                      <span>Enquire For This Track</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PROCESS STEPS */}
        {activeTab === 'process' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white">
                How We Deliver {service.title}
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                A structured, milestone-based methodology ensuring measurable outcomes.
              </p>
            </div>

            <div className="relative border-l-2 border-teal-500/30 ml-6 space-y-10 pl-8">
              {service.processSteps.map((step) => (
                <div key={step.step} className="relative group">
                  {/* Step Bubble */}
                  <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center font-bold text-teal-300 text-xs shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                    {step.step}
                  </div>

                  <div className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-teal-500/40 transition-all">
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      <div className="flex-1">
                        <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
                          STAGE 0{step.step}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Stage Human Photo Moment Thumbnail */}
                      <div className="w-full sm:w-48 shrink-0 rounded-xl overflow-hidden border border-slate-700/80 aspect-[16/10] sm:aspect-square relative group bg-slate-950 shadow-md">
                        <img
                          src={getStagePhoto(step.step)}
                          alt={`Stage ${step.step} in session`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-teal-300 font-bold border border-teal-500/30">
                          Field Moment 0{step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: OUTCOMES */}
        {activeTab === 'outcomes' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white">
                Core Results & Impact
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                What students, job seekers, and organizations achieve through this vertical.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 p-6 border border-slate-800 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Outcome 0{idx + 1}
                    </h4>
                    <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                      {outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: FIELD PHOTOGRAPHY & VIDEO STORIES */}
        {activeTab === 'human-stories' && story && (
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-bold uppercase mb-3">
                <Camera className="w-3.5 h-3.5" />
                <span>HUMAN-CENTRIC DOCUMENTATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Authentic Photography & Video Stories
              </h2>
              <p className="text-sm text-slate-300 mt-2">
                Unfiltered visual proof from our coaching rooms, tech workshops, campus send-offs, and executive mock interviews.
              </p>
            </div>

            {/* Video Player Spotlight */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                    Supplementary Footage Clip
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono font-bold">
                  {story.videoClip.duration} • 1080p
                </span>
              </div>

              <AscendVideoPlayer
                src={story.videoClip.src}
                poster={story.heroPhoto.url}
                title={story.videoClip.title}
                subtitle={story.videoClip.subtitle}
                badge={story.videoClip.badge}
                dialogue={story.videoClip.dialogue as any}
                autoPlay={true}
                loop={true}
                onOpenConsultation={() => onOpenConsultation(service.id)}
              />
            </div>

            {/* Photography Moments Grid */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Camera className="w-4 h-4 text-teal-400" />
                <span>Verified Field Moments ({story.fieldMoments.length + 1} Photos)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Hero Photo Card */}
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={story.heroPhoto.url}
                      alt={story.heroPhoto.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-mono font-bold text-teal-300 border border-teal-500/30">
                      MAIN SPOTLIGHT
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h4 className="text-sm font-bold text-white">In-Person Session</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {story.heroPhoto.caption}
                    </p>
                  </div>
                </div>

                {/* Field Moments */}
                {story.fieldMoments.map((moment, idx) => (
                  <div key={idx} className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl flex flex-col group">
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={moment.url}
                        alt={moment.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 text-[10px] font-mono font-bold text-slate-300 border border-slate-700">
                        MOMENT 0{idx + 1}
                      </span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h4 className="text-sm font-bold text-white">{moment.title}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {moment.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor & Student Case Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mentor Profile */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-teal-400 uppercase tracking-widest block mb-3">
                    CERTIFIED LEAD ADVISOR
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.mentor.avatarUrl}
                      alt={story.mentor.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white">{story.mentor.name}</h4>
                      <p className="text-xs text-slate-400">{story.mentor.role}</p>
                      <span className="text-[11px] text-teal-300 font-mono mt-0.5 block">
                        {story.mentor.experience}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 italic border-l-2 border-teal-500 pl-3 py-1">
                    &ldquo;{story.mentor.quote}&rdquo;
                  </p>
                </div>

                <button
                  onClick={() => onOpenConsultation(service.id)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold border border-teal-500/30 transition-colors"
                >
                  Schedule 1-on-1 with {story.mentor.name.split(' ')[0]}
                </button>
              </div>

              {/* Student Success Profile */}
              <div className="rounded-2xl bg-teal-950/20 border border-teal-500/30 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-3">
                    VERIFIED STUDENT OUTCOME
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.studentSuccess.avatarUrl}
                      alt={story.studentSuccess.studentName}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white">{story.studentSuccess.studentName}</h4>
                      <p className="text-xs text-emerald-300">{story.studentSuccess.roleOrDestination}</p>
                      <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                        Metric: {story.studentSuccess.metric}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-l-2 border-emerald-500 pl-3 py-1">
                    &ldquo;{story.studentSuccess.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Outcome Status:</span>
                  <span className="text-emerald-300 font-bold font-mono">100% Verified Track</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FAQS */}
        {activeTab === 'faq' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Got questions regarding this vertical? Here are answers to common queries.
              </p>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 p-6 border border-slate-800"
                >
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-indigo-950/60 border border-teal-500/30 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-2">
              PERSON-CENTERED EXCELLENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Accelerate Your Career with Ascend?
            </h3>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Schedule your personalized consultation with our senior advisors for {service.title}.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation(service.id)}
                className="px-8 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/25 transition-all hover:scale-105 flex items-center gap-2"
                id="service-footer-book-btn"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>
              <button
                onClick={onBackToHub}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
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
