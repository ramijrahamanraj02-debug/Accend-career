import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  GraduationCap,
  Users,
  CheckCircle2,
  Sparkles,
  Calendar,
  Clock,
  Euro,
  FileText,
  Briefcase,
  ShieldCheck,
  Target,
  ArrowRight,
  Award,
  Globe2,
  BookOpen,
  Building2,
  Layers,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

interface MentorshipInActionDetailsProps {
  onOpenConsultation: () => void;
  onExploreServices?: () => void;
}

type TabType = 'compass' | 'campus' | 'mentorship';

export const MentorshipInActionDetails: React.FC<MentorshipInActionDetailsProps> = ({
  onOpenConsultation,
  onExploreServices
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('compass');

  const tabData = {
    compass: {
      id: 'compass',
      badge: '🧭 3D Career Compass',
      tabTitle: 'Career Direction & Aptitude',
      tagline: 'Scientific 5-Dimensional Assessment & Multi-Year Career Blueprinting',
      headline: 'Find Your True North — Eliminating Guesswork & Peer Pressure',
      overview:
        'Most students choose career paths based on trends or peer opinions. The Ascend 3D Career Compass grounds every decision in objective psychometric data, evaluating your cognitive aptitude, practical interests, personality archetypes, and industry demand to build a customized 5-year career roadmap.',
      leadQuote:
        '“A 30-minute scientific diagnostic avoids 4 years of studying the wrong discipline.”',
      deliverables: [
        {
          title: '28-Page Comprehensive Psychometric Audit',
          description:
            'In-depth evaluation across 5 critical dimensions: Numerical Aptitude, Spatial Reasoning, Abstract Logic, Behavioral Tendencies, and Professional Motivators.',
          icon: FileText
        },
        {
          title: 'Stream & Degree Alignment Matrix',
          description:
            'Clear recommendations for Class 9–12 streams (PCM, PCB, Commerce, Humanities) or specialized college degrees (AI, Data Science, Core Engineering, Finance).',
          icon: Target
        },
        {
          title: '5-Year Salary & Industry Demand Forecast',
          description:
            'Empirical projections of emerging corporate job markets in India and abroad, mapping which skills will command premium compensation by graduation.',
          icon: Briefcase
        },
        {
          title: '1-on-1 Certified Counselor Interpretation',
          description:
            'A dedicated 45-minute debrief with you and your parents to walk through results, resolve family dilemmas, and set measurable milestones.',
          icon: Users
        }
      ],
      steps: [
        {
          step: '01',
          name: 'Diagnostic Assessment',
          desc: 'Complete the standardized 45-minute multi-dimensional psychometric questionnaire.'
        },
        {
          step: '02',
          name: 'Algorithmic Profiling',
          desc: 'Our engine cross-references your profile against 250+ modern career benchmarks.'
        },
        {
          step: '03',
          name: 'Counselor Synthesis',
          desc: 'A certified mentor identifies your top 3 high-probability career tracks.'
        },
        {
          step: '04',
          name: 'Roadmap Execution',
          desc: 'Receive your semester-by-semester milestone tracker, entrance exam list, and skill goals.'
        }
      ],
      metrics: [
        { label: 'Assessment Dimensions', val: '5 Critical Vectors' },
        { label: 'Profile Career Benchmarks', val: '250+ Tracks' },
        { label: 'Confidence After Session', val: '99.2%' }
      ]
    },
    campus: {
      id: 'campus',
      badge: '🎓 Global Campus Life',
      tabTitle: 'Campus Life & European Reality',
      tagline: 'Transparent Realities of Studying in Italy & Top European Public Universities',
      headline: 'World-Class European Education with Zero Hidden Costs',
      overview:
        'Studying abroad should be an empowering life chapter, not a financial trap. We provide an unvarnished, 360-degree orientation into living, studying, and working in Italy—from world-ranked universities and 100% English degrees to €7,200/year DSU living stipends, student housing, and part-time jobs.',
      leadQuote:
        '“High-ranking European education is more affordable than private Indian universities when paired with regional scholarships.”',
      deliverables: [
        {
          title: 'DSU & Regional Scholarship Unlock',
          description:
            'Full eligibility assessment and document translation for Italian government grants (DSU/ERGO/EDISU), securing up to €7,200 annual living stipends and 100% tuition waivers.',
          icon: Euro
        },
        {
          title: '500+ Fully English-Taught Curricula',
          description:
            'Direct application support for world-renowned public universities including Politecnico di Milano, University of Bologna, Sapienza Rome, and Padua.',
          icon: BookOpen
        },
        {
          title: 'Legal Student Work Rights (20 hrs/week)',
          description:
            'Orientation on campus part-time jobs, local employment regulations, average €8–€14/hour student wages, and balancing academic workloads.',
          icon: Clock
        },
        {
          title: 'Schengen Mobility & Post-Study Work Visa',
          description:
            'Guidance on the Permesso di Soggiorno permit allowing unrestricted travel across 27 EU nations, plus the 12-to-18-month European job-seeker visa after graduation.',
          icon: Globe2
        }
      ],
      steps: [
        {
          step: '01',
          name: 'University & Program Fit',
          desc: 'Shortlist English-taught Bachelor’s or Master’s degrees matched to your budget and profile.'
        },
        {
          step: '02',
          name: 'Universitaly & CIMEA Filing',
          desc: 'Complete official Italian Ministry pre-enrollment and statement of comparability filings.'
        },
        {
          step: '03',
          name: 'DSU Scholarship Filing',
          desc: 'Audit ISEE Parificato financial documents and file for tuition waivers + living stipends.'
        },
        {
          step: '04',
          name: 'Consular Visa & Departure',
          desc: 'Conduct mock embassy interviews, secure travel health insurance, and arrange campus housing.'
        }
      ],
      metrics: [
        { label: 'Regional Scholarship Stipend', val: 'Up to €7,200/yr' },
        { label: 'Italian Public University Fees', val: '€900 – €3,000/yr' },
        { label: 'Visa Clearance Rate', val: '98.4% Success' }
      ]
    },
    mentorship: {
      id: 'mentorship',
      badge: '👥 Mentorship Lab',
      tabTitle: '1-on-1 Mentorship in Action',
      tagline: 'Practical Corporate Coaching, SAP Training & Dedicated Career Sponsorship',
      headline: 'Learn from Leaders with Real Corporate Experience',
      overview:
        'True mentorship isn’t reading slides or delivering generic motivation. In the Ascend Mentorship Lab, senior practitioners—like coach Sadiq Sir with 15+ years in corporate enterprise architecture—break down complex industry concepts using practical, real-world case scenarios, interactive labs, and direct employer pipelines.',
      leadQuote:
        '“The trainer is very knowledgeable with actual corporate experience and explains every concept with real-world scenarios.” — Pavan Sindhe & Harish M',
      deliverables: [
        {
          title: 'Real-World Scenario-Based Training',
          description:
            'Whether mastering SAP S/4HANA, Data Engineering, or Cloud Architecture, topics are taught using actual business entities and live corporate workflows.',
          icon: Layers
        },
        {
          title: 'ATS-Engineered Technical Portfolios',
          description:
            'Transform your resume and LinkedIn presence into recruiter magnets with verifiable GitHub repos, certified project case studies, and corporate keywords.',
          icon: ShieldCheck
        },
        {
          title: '1-on-1 Executive Mock Interviews',
          description:
            'Simulate high-pressure technical and HR rounds with feedback on answer structuring, behavioral competencies, and salary negotiation tactics.',
          icon: Award
        },
        {
          title: 'Hire-Train-Deploy (HTD) Direct Pipeline',
          description:
            'Fast-track deployment into active hiring drives at top corporate hiring partners, bypassing generic job portal rejection algorithms.',
          icon: Building2
        }
      ],
      steps: [
        {
          step: '01',
          name: 'Skills Gap Diagnostic',
          desc: 'Review your current transcripts, coding skills, and career roadblocks with a senior mentor.'
        },
        {
          step: '02',
          name: 'Custom Skill Sprint',
          desc: 'Hands-on practical training covering industry-relevant stacks with real corporate datasets.'
        },
        {
          step: '03',
          name: 'Consular & Tech Drills',
          desc: 'Rigorous mock drills simulating exact embassy questions or corporate technical panels.'
        },
        {
          step: '04',
          name: 'Deployment & Follow-Through',
          desc: 'Continuous post-admission or post-offer support throughout your first 90 days on campus or at work.'
        }
      ],
      metrics: [
        { label: 'Faculty Corporate Experience', val: '15+ Years Avg' },
        { label: 'Student Rating on Google', val: '4.9 ★ Verified' },
        { label: 'Candidate Interview Conversion', val: '86.7%' }
      ]
    }
  };

  const current = tabData[activeTab];

  return (
    <section
      id="mentorship-in-action-section"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050b16] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[550px] h-[300px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[250px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>1-ON-1 PERSONALIZED GUIDANCE • ZERO GUESSWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Experience Real Mentorship in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed font-normal">
            No pre-recorded videos, generic sales talk, or false promises. Explore the detailed framework behind our scientific career direction, European campus guidance, and corporate coaching.
          </p>
        </div>

        {/* 3 Interactive Dimension Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {(Object.keys(tabData) as TabType[]).map((tabKey) => {
            const item = tabData[tabKey];
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                id={`mentorship-tab-${tabKey}`}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2.5 border shadow-sm ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-400 to-teal-500 text-slate-950 border-teal-300 shadow-lg shadow-teal-500/25 scale-[1.03]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <span>{item.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detailed Content Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* 1. Core Thesis Card */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                <div className="max-w-2xl">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded border border-teal-500/20 inline-block mb-3">
                    {current.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug">
                    {current.headline}
                  </h3>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {current.overview}
                  </p>
                </div>

                {/* Metrics Highlight Pill Column */}
                <div className="w-full lg:w-72 shrink-0 grid grid-cols-1 gap-2.5">
                  {current.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-400 font-medium">{m.label}</span>
                      <span className="text-xs font-bold font-mono text-teal-300">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Quote Ribbon */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-teal-950/40 to-slate-950/80 border border-teal-500/20 text-xs sm:text-sm text-teal-200 font-medium italic flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 text-teal-300 not-italic font-black text-xs">
                  “
                </div>
                <span>{current.leadQuote}</span>
              </div>
            </div>

            {/* 2. Deliverables Grid: What Students Receive */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Concrete Deliverables In This Track</span>
                </h4>
                <span className="text-xs text-slate-400">Included in Session</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.deliverables.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. The 4-Step Operational Walkthrough */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#08111f] border border-slate-800">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-widest block mb-1">
                  EXECUTION BLUEPRINT
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white">
                  How a Mentorship Cycle Works Step-by-Step
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {current.steps.map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 relative group hover:border-slate-700 transition-all"
                  >
                    <div className="text-2xl font-mono font-black text-teal-500/40 group-hover:text-teal-400 transition-colors mb-2">
                      {st.step}
                    </div>
                    <h6 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      {st.name}
                    </h6>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Action Banner to Book Session */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-[#0a182c] border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0 text-teal-300 shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    Experience this 1-on-1 mentorship for yourself
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Schedule a free 30-minute diagnostic session with our certified counselors. Zero sales pressure.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={onOpenConsultation}
                  id="mentorship-in-action-book-btn"
                  className="flex-1 md:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-teal-500/25 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Free Session</span>
                </button>

                {onExploreServices && (
                  <button
                    onClick={onExploreServices}
                    id="mentorship-in-action-explore-btn"
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs transition-colors border border-slate-700 flex items-center gap-1.5"
                  >
                    <span>All Tracks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
