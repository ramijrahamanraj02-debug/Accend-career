import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  ThumbsUp,
  Share2,
  CheckCircle2,
  CornerDownRight,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  ArrowUpRight
} from 'lucide-react';
import {
  STUDENT_REVIEWS_DATA,
  REVIEW_TOPICS,
  StudentReviewItem,
  ReviewTopic
} from '../data/learningExperienceReviews';

interface RealJourneysReviewsProps {
  onBookSession?: () => void;
}

export const RealJourneysReviews: React.FC<RealJourneysReviewsProps> = ({
  onBookSession
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevant' | 'newest' | 'highest'>('relevant');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedResponses, setExpandedResponses] = useState<Record<string, boolean>>({
    'rev-azra-syeda': true,
    'rev-soha-hussain': false,
    'rev-harish-m': true,
    'rev-sahadeva-m': false
  });
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    STUDENT_REVIEWS_DATA.forEach((r) => {
      initial[r.id] = { count: r.likes, liked: false };
    });
    return initial;
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const toggleResponse = (id: string) => {
    setExpandedResponses((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLike = (id: string) => {
    setLikesState((prev) => {
      const current = prev[id] || { count: 0, liked: false };
      const newLiked = !current.liked;
      return {
        ...prev,
        [id]: {
          count: newLiked ? current.count + 1 : current.count - 1,
          liked: newLiked
        }
      };
    });
  };

  const handleShare = async (review: StudentReviewItem) => {
    const textToShare = `"${review.reviewText}" — ${review.author} (Google Review for Ascend Career)`;
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(textToShare);
      setCopiedId(review.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Filter & Sort reviews
  const filteredReviews = useMemo(() => {
    let result = STUDENT_REVIEWS_DATA.filter((item) => {
      // Topic filter
      if (selectedTopic !== 'all') {
        const matchesTopic = item.topics.includes(selectedTopic);
        if (!matchesTopic) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          item.author.toLowerCase().includes(q) ||
          item.reviewText.toLowerCase().includes(q) ||
          item.ownerResponseText.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'highest') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      // Relative order preservation for simulated freshness
      result = [...result];
    }

    return result;
  }, [selectedTopic, searchQuery, sortBy]);

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  return (
    <div className="w-full">
      {/* Top Google Reviews Header & Trust Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-[#141414] border border-[#262626] cred-box-dark mb-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Google Official Logo Icon */}
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
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
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-white font-mono">4.9</span>
                <div className="flex text-[#E5FE40]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-[#8A8A8A] font-mono tracking-wider uppercase">
                Google Business Rating
              </p>
            </div>
          </div>

          <div className="h-6 w-px bg-[#262626] hidden sm:block" />

          <div className="flex items-center gap-2 text-xs text-[#E5FE40] font-mono">
            <CheckCircle2 className="w-4 h-4 text-[#E5FE40]" />
            <span>13 Verified Reviews</span>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews..."
            className="w-full bg-[#0D0D0D] border border-[#262626] py-2 pl-9 pr-3 text-xs text-white placeholder-[#555555] focus:outline-none focus:border-[#E5FE40] transition-colors"
          />
        </div>
      </div>

      {/* Filter Topic Pills & Sort Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        {/* Exact topic pills requested by user */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#8A8A8A] uppercase tracking-wider mr-1 hidden sm:inline">
            Topics:
          </span>
          {REVIEW_TOPICS.map((topic) => {
            const isSelected = selectedTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#E5FE40] text-black border-[#E5FE40] font-bold shadow-[2px_2px_0px_#000000]'
                    : 'bg-[#161616] text-[#A0A0A0] hover:text-white border-[#262626] hover:border-[#404040]'
                }`}
              >
                <span>{topic.label}</span>
                {topic.count !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-sm ${
                      isSelected ? 'bg-black/20 text-black' : 'bg-[#222222] text-[#8A8A8A]'
                    }`}
                  >
                    {topic.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 self-end md:self-auto text-xs font-mono text-[#8A8A8A]">
          <span>Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#161616] border border-[#262626] text-white text-xs px-2.5 py-1.5 focus:outline-none focus:border-[#E5FE40] cursor-pointer"
          >
            <option value="relevant">Most Relevant</option>
            <option value="newest">Most Recent</option>
            <option value="highest">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Review Cards Grid */}
      {filteredReviews.length === 0 ? (
        <div className="p-12 text-center bg-[#161616] border border-[#262626] text-[#8A8A8A] text-sm font-mono">
          No reviews found matching &ldquo;{searchQuery}&rdquo;. Try another filter or search term.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => {
            const isResponseOpen = !!expandedResponses[review.id];
            const likeInfo = likesState[review.id] || { count: review.likes, liked: false };
            const isCopied = copiedId === review.id;

            return (
              <div
                key={review.id}
                className="p-6 bg-[#161616] border border-[#262626] cred-box-dark flex flex-col justify-between transition-colors hover:border-[#383838]"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 flex items-center justify-center font-bold text-xs border ${review.avatarBg}`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white tracking-tight">
                          {review.author}
                        </h4>
                        <div className="text-[11px] text-[#8A8A8A] font-mono flex items-center gap-1.5">
                          <span>{review.reviewCount}</span>
                          {review.photosCount && (
                            <>
                              <span>•</span>
                              <span>{review.photosCount} photos</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Time Ago */}
                    <span className="text-[11px] text-[#707070] font-mono whitespace-nowrap">
                      {review.timeAgo}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-3 text-[#E5FE40]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    {review.rating < 5 && (
                      <Star className="w-3.5 h-3.5 text-[#333333] fill-current" />
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#D1D1D1] leading-relaxed whitespace-pre-line font-light">
                    &ldquo;{review.reviewText}&rdquo;
                  </p>
                </div>

                {/* Bottom Actions & Owner Response */}
                <div className="mt-6 pt-4 border-t border-[#262626]">
                  {/* Like & Share Action Row */}
                  <div className="flex items-center justify-between text-xs text-[#8A8A8A] mb-3">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(review.id)}
                        className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                          likeInfo.liked ? 'text-[#E5FE40] font-bold' : 'hover:text-white'
                        }`}
                        title="Helpful review"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>Like {likeInfo.count > 0 && `(${likeInfo.count})`}</span>
                      </button>

                      <button
                        onClick={() => handleShare(review)}
                        className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                        title="Share this review"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{isCopied ? 'Copied!' : 'Share'}</span>
                      </button>
                    </div>

                    {review.hasOwnerResponse && (
                      <button
                        onClick={() => toggleResponse(review.id)}
                        className="flex items-center gap-1 text-[11px] text-[#A0A0A0] hover:text-[#E5FE40] transition-colors cursor-pointer font-mono"
                      >
                        <span>Owner reply</span>
                        {isResponseOpen ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Owner Response Box */}
                  <AnimatePresence>
                    {review.hasOwnerResponse && isResponseOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 p-3 bg-[#111111] border-l-2 border-[#E5FE40] text-[11px] text-[#A0A0A0] space-y-1">
                          <div className="flex items-center justify-between text-[#E5FE40] font-mono text-[10px]">
                            <span className="font-bold flex items-center gap-1">
                              <CornerDownRight className="w-3 h-3" />
                              Ascend Career (Owner)
                            </span>
                            <span className="text-[#666666]">{review.ownerResponseTime}</span>
                          </div>
                          <p className="leading-relaxed font-light text-[#C4C4C4]">
                            {review.ownerResponseText}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Show More Reviews Toggle */}
      {filteredReviews.length > visibleCount && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-[#161616] hover:bg-[#202020] text-white border border-[#262626] hover:border-[#404040] text-xs font-mono uppercase tracking-wider transition-colors cred-box-dark cursor-pointer"
          >
            Load More Reviews ({filteredReviews.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {visibleCount > 6 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount(6)}
            className="text-xs text-[#8A8A8A] hover:text-white font-mono underline transition-colors cursor-pointer"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};
