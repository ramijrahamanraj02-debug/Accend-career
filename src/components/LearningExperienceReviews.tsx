import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  MessageSquareQuote,
  CheckCircle2,
  CornerDownRight,
  Search,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  UserCheck
} from 'lucide-react';
import { STUDENT_REVIEWS_DATA, StudentReviewItem } from '../data/learningExperienceReviews';

interface LearningExperienceReviewsProps {
  onBookConsultation?: () => void;
}

export const LearningExperienceReviews: React.FC<LearningExperienceReviewsProps> = ({
  onBookConsultation
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'sadiq' | 'sap' | 'career'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedResponses, setExpandedResponses] = useState<Record<string, boolean>>({
    'rev-azra-syeda': true,
    'rev-harish-m': true
  });
  const [showAll, setShowAll] = useState(false);

  const toggleResponse = (id: string) => {
    setExpandedResponses((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredReviews = useMemo(() => {
    return STUDENT_REVIEWS_DATA.filter((item) => {
      // Filter tab logic
      if (selectedFilter === 'sadiq') {
        const mentionsSadiq =
          item.reviewText.toLowerCase().includes('sadiq') ||
          (item.featuredMention && item.featuredMention.toLowerCase().includes('sadiq'));
        if (!mentionsSadiq) return false;
      } else if (selectedFilter === 'sap') {
        const mentionsSap =
          item.reviewText.toLowerCase().includes('sap') ||
          (item.courseTag && item.courseTag.toLowerCase().includes('sap'));
        if (!mentionsSap) return false;
      } else if (selectedFilter === 'career') {
        const isCareer =
          !item.reviewText.toLowerCase().includes('sap') &&
          !item.reviewText.toLowerCase().includes('sadiq');
        if (!isCareer) return false;
      }

      // Search query logic
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          item.author.toLowerCase().includes(q) ||
          item.reviewText.toLowerCase().includes(q) ||
          (item.courseTag && item.courseTag.toLowerCase().includes(q)) ||
          (item.featuredMention && item.featuredMention.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <div className="mt-16 pt-16 border-t border-slate-800/80">
      {/* Header & Trust Badge */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          What Our Students Say on Google Reviews
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl mx-auto leading-relaxed">
          Real feedback from learners who mastered SAP, built corporate-grade skills, and gained direction under coach Sadiq Sir and the Ascend Career faculty.
        </p>

        {/* Google Reviews Trust Bar */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
          {/* Google G Graphic */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <div className="flex items-center gap-1">
              <span className="text-sm font-black text-white">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-xs text-slate-400 font-mono">Google Rating</span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-1.5 text-xs text-teal-400 font-bold">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            <span>13 Verified Reviews</span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-1.5 text-xs text-slate-300">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>Mentorship with Sadiq Sir</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedFilter('all')}
            id="review-filter-all"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              selectedFilter === 'all'
                ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            All Reviews (13)
          </button>
          <button
            onClick={() => setSelectedFilter('sadiq')}
            id="review-filter-sadiq"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              selectedFilter === 'sadiq'
                ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Coach Sadiq Sir</span>
          </button>
          <button
            onClick={() => setSelectedFilter('sap')}
            id="review-filter-sap"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              selectedFilter === 'sap'
                ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            SAP Training
          </button>
          <button
            onClick={() => setSelectedFilter('career')}
            id="review-filter-career"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              selectedFilter === 'career'
                ? 'bg-teal-500 text-slate-950 border-teal-400 shadow-md shadow-teal-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800'
            }`}
          >
            Career & Skills
          </button>
        </div>

        {/* Live Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500"
            id="reviews-search-input"
          />
        </div>
      </div>

      {/* Reviews Grid */}
      {displayedReviews.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm text-slate-400">No reviews found matching your search.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('all');
            }}
            className="mt-3 px-3 py-1.5 rounded-lg bg-slate-800 text-teal-400 text-xs font-bold"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedReviews.map((item) => {
            const hasResponse = item.hasOwnerResponse && item.ownerResponseText;
            const isExpanded = !!expandedResponses[item.id];

            return (
              <div
                key={item.id}
                id={`review-card-${item.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-teal-500/5"
              >
                <div>
                  {/* Author Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full border flex items-center justify-center font-bold text-xs font-mono shrink-0 ${item.avatarBg}`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                          <span>{item.author}</span>
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                          <span>{item.reviewCount}</span>
                          {item.photosCount && (
                            <>
                              <span>•</span>
                              <span>{item.photosCount} photos</span>
                            </>
                          )}
                          <span>•</span>
                          <span>{item.timeAgo}</span>
                        </div>
                      </div>
                    </div>

                    {/* Google G small icon */}
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars & Feature Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {item.featuredMention && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                        {item.featuredMention}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{item.reviewText}&rdquo;
                  </p>
                </div>

                {/* Owner Response Box */}
                {hasResponse && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleResponse(item.id)}
                      className="w-full flex items-center justify-between text-[11px] font-bold text-slate-400 hover:text-teal-400 transition-colors py-1"
                    >
                      <span className="flex items-center gap-1.5">
                        <CornerDownRight className="w-3 h-3 text-teal-400" />
                        <span>Response from Ascend Career ({item.ownerResponseTime})</span>
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                            <span className="text-teal-400 font-bold block mb-0.5">
                              Ascend Career Team:
                            </span>
                            {item.ownerResponseText}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Show All / Show Less Toggle Button */}
      {filteredReviews.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            id="toggle-all-reviews-button"
            className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-teal-500/60 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>{showAll ? 'Show Fewer Reviews' : `View All ${filteredReviews.length} Student Reviews`}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Bottom Counselor Connect Ribbon */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-teal-950/40 via-slate-900/60 to-slate-900 border border-teal-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-white">
              Want to experience this personalized mentorship?
            </h5>
            <p className="text-xs text-slate-300">
              Connect with Sadiq Sir and our certified counselors for your free roadmap session.
            </p>
          </div>
        </div>

        {onBookConsultation && (
          <button
            onClick={onBookConsultation}
            id="review-section-cta"
            className="px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm shadow-teal-500/20"
          >
            Book Free Session
          </button>
        )}
      </div>
    </div>
  );
};
