import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  GraduationCap,
  Award,
  Globe2,
  FileCheck,
  Briefcase,
  Calendar,
  Compass
} from 'lucide-react';

export interface FAQItem {
  id: string;
  category: 'guidance' | 'italy' | 'scholarships' | 'visa' | 'placement';
  categoryLabel: string;
  question: string;
  answer: string;
  badge?: string;
  highlights?: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'italy',
    categoryLabel: 'Study in Italy',
    question: 'Why is Italy one of the top destinations for international students, and are courses taught in English?',
    answer: 'Italy hosts some of the world’s oldest and most prestigious universities (such as Politecnico di Milano, University of Bologna, and Sapienza University of Rome) offering over 500+ fully English-taught Bachelor’s and Master’s degree programs. Tuition fees at Italian public universities are among the lowest in Europe (typically €900 to €3,000 per year), and students receive an internationally recognized degree valid across all 27 European Union nations.',
    badge: 'European Excellence',
    highlights: [
      '500+ fully English-taught Bachelor’s and Master’s programs',
      'Extremely affordable public university fees compared to the US or UK',
      'Automatic Schengen visa mobility across 27 European nations'
    ]
  },
  {
    id: 'faq-2',
    category: 'scholarships',
    categoryLabel: 'Scholarships & DSU',
    question: 'What is the Italian DSU / Regional Scholarship, and does it really provide free tuition and a living stipend?',
    answer: 'Yes! Italian regional governments offer need-based scholarships known as DSU (Diritto allo Studio Universitario) or equivalent regional grants (such as EDISU in Piedmont or ER.GO in Emilia-Romagna). When qualified based on your family’s annual income (evaluated via the ISEE Parificato document), the scholarship provides a 100% tuition waiver, free meals at university student canteens, university accommodation or a housing stipend, and an annual cash stipend of up to €7,200 directly to your bank account.',
    badge: 'Up to €7,200/yr Grant',
    highlights: [
      '100% full tuition waiver at public universities',
      'Annual cash stipend up to €7,200 for student living expenses',
      'Free or heavily subsidized campus cafeteria meals'
    ]
  },
  {
    id: 'faq-3',
    category: 'guidance',
    categoryLabel: 'Career Guidance',
    question: 'When should a student start professional career guidance, and how does the psychometric assessment help?',
    answer: 'The ideal window to begin career guidance is in Class 9 or 10 for scientific stream selection (PCM, PCB, Commerce, or Humanities), or in Class 11 and 12 for undergraduate degree planning. College students and working professionals also benefit when considering specialization switches or postgraduate studies. Ascend’s 5-dimensional psychometric assessment analyzes Aptitude, Technical Interests, Personality Traits, Work Motivators, and Cognitive Styles to map you to high-growth career tracks rather than following peer pressure.',
    badge: 'Scientifically Validated',
    highlights: [
      'Identifies genuine aptitude rather than temporary interests',
      'Eliminates confusion between similar fields (e.g. CS vs. AI vs. Data Science)',
      'Delivers a customized multi-year career roadmap with certified mentors'
    ]
  },
  {
    id: 'faq-4',
    category: 'visa',
    categoryLabel: 'Visa & Documentation',
    question: 'What is the Universitaly portal, CIMEA statement, and how does Ascend help with the Italian Visa process?',
    answer: 'Universitaly is the official Italian Ministry of University and Research (MUR) digital portal where international applicants submit pre-enrollment applications. Italian consulates also require educational document verification via CIMEA (Statement of Comparability and Verification) or a Declaration of Value (DoV). Ascend provides end-to-end support: from apostille guidance and official Italian consular translations to financial documentation audits and 1-on-1 mock consular interview drills, sustaining our 98.4% visa clearance record.',
    badge: '98.4% Visa Success',
    highlights: [
      'Complete handling of Universitaly pre-enrollment application submission',
      'Step-by-step assistance with MEA Apostille, CIMEA, and DoV filings',
      'Consular-grade mock visa interviews replicating embassy drills'
    ]
  },
  {
    id: 'faq-5',
    category: 'italy',
    categoryLabel: 'Study in Italy',
    question: 'Can international students work part-time in Italy, and what post-study work options exist after graduation?',
    answer: 'Yes. Under Italian immigration law, international students holding a valid study permit (Permesso di Soggiorno per Studio) are legally entitled to work up to 20 hours per week during term time and 40 hours per week during academic breaks. After graduating from an accredited Italian Bachelor’s or Master’s degree, you are eligible for an 18-month to 1-year job seeker permit (Permesso di Soggiorno per Ricerca Lavoro) which converts seamlessly into a standard European work permit once you secure an employment contract.',
    badge: 'Part-Time & Post-Study',
    highlights: [
      'Legal 20 hours per week part-time work authorization during semesters',
      'Average student hourly wages between €8 to €14 per hour',
      'Post-study residence permit for job hunting across the EU zone'
    ]
  },
  {
    id: 'faq-6',
    category: 'placement',
    categoryLabel: 'Corporate Placement',
    question: 'What is Ascend Career’s Hire-Train-Deploy (HTD) program, and how does it guarantee employment interviews?',
    answer: 'Our Hire-Train-Deploy (HTD) framework acts as a direct bridge between job seekers and corporate hiring managers. Partner companies provide Ascend with exact job descriptions and tech-stack requirements. We then train candidates across high-demand frameworks, real-world live projects, ATS-optimized technical resumes, and executive mock interviews. Once certified, candidates are deployed directly to hiring rounds without navigating generic job board rejections.',
    badge: 'Direct Corporate Connect',
    highlights: [
      'Custom curriculum designed around active enterprise job requisitions',
      'ATS-proof resume engineering and portfolio architecture',
      'Direct pipeline to partner corporate recruitment drives'
    ]
  },
  {
    id: 'faq-7',
    category: 'scholarships',
    categoryLabel: 'Scholarships & DSU',
    question: 'What financial documents and income thresholds are required to qualify for Italian government scholarships?',
    answer: 'Eligibility for DSU scholarships is determined by your family’s ISEE Parificato value (Equivalent Economic Situation Indicator), which must generally be under €23,000 to €25,000 annually. Required documents include: family composition certificate, gross annual income certificates of working family members, property/asset valuation documents, and bank balance certificates. Ascend handles document verification, certified translations into Italian, and portal submissions with the regional scholarship offices.',
    badge: 'Documentation Audit',
    highlights: [
      'Evaluation based on family income parity, not just competitive test percentiles',
      'Standardized documentation checklist tailored for your specific home region',
      'Assistance in filing with regional bodies like EDISU, DSU Toscana, and ER.GO'
    ]
  },
  {
    id: 'faq-8',
    category: 'guidance',
    categoryLabel: 'Career Guidance',
    question: 'Is the initial discovery consultation really free, and how do I schedule my session?',
    answer: 'Yes, your first 30-minute 1-on-1 discovery consultation with an Ascend certified mentor is 100% free with zero obligation. During this session, we review your academic transcripts, understand your ambitions (whether choosing a college stream, preparing for IT placement, or planning overseas study in Italy), and give you an objective appraisal of realistic options, timelines, and scholarship possibilities. You can book directly using our online scheduler.',
    badge: '100% Free Discovery',
    highlights: [
      'Personalized 1-on-1 advice with a senior domain counselor',
      'Zero pushy sales tactics or locked proprietary obligations',
      'Instant scheduling via calendar link or WhatsApp support'
    ]
  }
];

interface HomeFAQProps {
  onOpenConsultation: () => void;
}

export const HomeFAQ: React.FC<HomeFAQProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep top question open by default for immediate engagement
    'faq-2': false
  });

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'italy', label: 'Study in Italy', icon: Globe2 },
    { id: 'scholarships', label: 'Scholarships & DSU', icon: Award },
    { id: 'guidance', label: 'Career Guidance', icon: Compass },
    { id: 'visa', label: 'Visa & Admissions', icon: FileCheck },
    { id: 'placement', label: 'Placement (HTD)', icon: Briefcase }
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        (item.highlights && item.highlights.some((h) => h.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="home-faq-section"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050b16] border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[300px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[250px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span>STUDENT & PARENT ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our scientifically validated career counselling, study abroad in Italy, regional government scholarships (DSU), and corporate placement.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Live Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. Italy, DSU scholarship, visa, Class 10, fees)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-lg backdrop-blur-md transition-all"
              id="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`faq-category-${cat.id}`}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border shrink-0 ${
                    isActive
                      ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/25 scale-[1.02]'
                      : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-3xl bg-slate-900/50 border border-slate-800">
            <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-200">No questions match your search</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              We couldn&apos;t find an answer for &ldquo;{searchQuery}&rdquo;. Clear your search or contact our counseling desk directly.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold border border-slate-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-card-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-teal-500/40 shadow-lg shadow-teal-500/10'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700/90 hover:bg-slate-900/70'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                          {faq.categoryLabel}
                        </span>
                        {faq.badge && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded border border-slate-700">
                            <Sparkles className="w-2.5 h-2.5 text-teal-400" />
                            {faq.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-teal-500 text-slate-950 border-teal-400 rotate-180 shadow-sm'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-800/70">
                          <p className="text-sm text-slate-300 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-slate-800/50">
                              <span className="text-[11px] font-mono text-teal-400 font-bold uppercase tracking-wider block mb-2">
                                Key Takeaways:
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {faq.highlights.map((point, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800"
                                  >
                                    <span className="text-teal-400 font-bold">•</span>
                                    <span>{point}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions Helper Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-[#0c182b] border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Have a specific question about your profile?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Our certified mentors evaluate your grades, stream options, budget, and Italian scholarship prospects for free.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            id="faq-cta-book-consultation"
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-teal-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Mentorship</span>
          </button>
        </div>
      </div>
    </section>
  );
};
