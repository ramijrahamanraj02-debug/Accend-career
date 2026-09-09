export interface StudentReviewItem {
  id: string;
  author: string;
  reviewCount: string;
  photosCount?: number;
  timeAgo: string;
  rating: number;
  courseTag: string;
  reviewText: string;
  hasOwnerResponse: boolean;
  ownerResponseTime: string;
  ownerResponseText: string;
  featuredMention?: string; // e.g. "Sadiq Sir", "SAP Training"
  initials: string;
  avatarBg: string;
}

export const STUDENT_REVIEWS_DATA: StudentReviewItem[] = [
  {
    id: 'rev-azra-syeda',
    author: 'Azra Syeda',
    reviewCount: '4 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    courseTag: 'SAP Training',
    featuredMention: 'SAP Training & Methodology',
    reviewText:
      'I am currently pursuing SAP training at Ascend Careers, and it has been an excellent learning experience. The teaching methodology is very practical, with real-life examples that make complex SAP concepts easy to understand. The sessions are interactive, clear, and highly focused on industry readiness.',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Dear Azra, Thank you for your wonderful review! We're thrilled your SAP training at Ascend Career has been such a fruitful experience. We are committed to supporting your professional journey.",
    initials: 'AS',
    avatarBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
  },
  {
    id: 'rev-soha-hussain',
    author: 'Soha Hussain',
    reviewCount: '3 reviews',
    photosCount: 2,
    timeAgo: '6 months ago',
    rating: 5,
    courseTag: 'Career Building & Concepts',
    featuredMention: 'Hands-on Foundation',
    reviewText:
      "They're covering the concept thoroughly, and the instructors are making complex concepts easy to grasp. The hands-on approach is helping me build a strong foundation. Nice place to build career.",
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Dear Soha, Thank you so much for your fantastic 5-star review! We're thrilled to hear that our hands-on approach is helping you build a strong foundation. Keep ascending!",
    initials: 'SH',
    avatarBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30'
  },
  {
    id: 'rev-harish-m',
    author: 'Harish Harish M',
    reviewCount: '1 review',
    timeAgo: '10 months ago',
    rating: 5,
    courseTag: 'Mentorship',
    featuredMention: 'Coach Sadiq Sir',
    reviewText:
      'I learned so many things from Sadiq sir. He was such an amazing coach and to understand the concept to give examples for real world entity and take some scenarios and explain in an easy way. Thank you!',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Thank you Harish, for such wonderful words and your genuine trust in us at Ascend Career.',
    initials: 'HH',
    avatarBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
  },
  {
    id: 'rev-sahadeva-m',
    author: 'Sahadeva M',
    reviewCount: '1 review',
    timeAgo: '10 months ago',
    rating: 5,
    courseTag: 'Mentorship',
    featuredMention: 'Coach Sadiq Sir',
    reviewText:
      'My trainer Sadiq sir was very knowledgeable and explained each topic clearly. The sessions were interactive with real-time examples and practical experience. I really appreciate the guidance and support throughout the course.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Thank you Sahadeva, for such wonderful words and for trusting Ascend Career throughout your learning journey.',
    initials: 'SM',
    avatarBg: 'bg-sky-500/20 text-sky-300 border-sky-500/30'
  },
  {
    id: 'rev-aazad-ali',
    author: 'Aazad Ali',
    reviewCount: '4 reviews',
    timeAgo: '2 years ago',
    rating: 5,
    courseTag: 'SAP Training',
    featuredMention: 'Best SAP Institute',
    reviewText:
      "The trainer is the best of this institute. I've learnt lots of. Overall, this is the best @SAP Institute for career development, If ones wanna learn and grow higher and longer, then join you won't even regret about your money and time. Thank you.",
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      "Thank you so much, Aazad Ali, for your heartfelt feedback! 🙏 We're truly glad to know that your learning journey with us was valuable. Your growth and trust in our training means a lot.",
    initials: 'AA',
    avatarBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  },
  {
    id: 'rev-pavan-sindhe',
    author: 'Pavan Sindhe',
    reviewCount: '4 reviews',
    timeAgo: 'a year ago',
    rating: 5,
    courseTag: 'Corporate Guidance',
    featuredMention: 'Coach Sadiq Sir',
    reviewText:
      'Trainer Sadiq sir is very knowledgeable person with actual Corporate experience. Will realistically guide you in regards to your career.',
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      "Thank you so much, Pavan, for your kind words and appreciation! 🌟 We’re truly grateful for your trust in Ascend Career and Sadiq Sir's mentorship. It’s our constant goal to offer real-world, corporate-driven guidance.",
    initials: 'PS',
    avatarBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
  },
  {
    id: 'rev-syeda-ayesha',
    author: 'Syeda Ayesha',
    reviewCount: '1 review',
    timeAgo: '6 months ago',
    rating: 5,
    courseTag: 'Skill Building',
    featuredMention: 'Friendly Faculty & Skills',
    reviewText:
      'Nice place to build Career. Sir is friendly and supports in learning and building skills 😊',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      'Dear Syeda Ayesha, Thank you so much for your wonderful 5-star review! We are delighted to hear that our guidance helped you build confidence and core skills.',
    initials: 'SA',
    avatarBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
  },
  {
    id: 'rev-ayesha',
    author: 'Ayesha',
    reviewCount: '1 review',
    timeAgo: '6 months ago',
    rating: 5,
    courseTag: 'Career Upgrade',
    featuredMention: 'Career Upgrades',
    reviewText:
      'Good place to learn and upgrade your career. Clear guidance and practical sessions that give you confidence.',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Hi Ayesha, We're absolutely delighted to hear that you found Ascend Career a great place to learn and upgrade your career. All the best for your upcoming milestones!",
    initials: 'AY',
    avatarBg: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  },
  {
    id: 'rev-vignesh-vicky',
    author: 'Vignesh Vicky',
    reviewCount: '5 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    courseTag: 'Learning Environment',
    featuredMention: 'Positive Environment',
    reviewText:
      'Good ok. Solid mentorship, helpful coaching staff, and a dedicated environment for career development.',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      'Hello Vignesh, Thank you so much for your kind words and the fantastic 5-star rating! We truly appreciate you.',
    initials: 'VV',
    avatarBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'
  },
  {
    id: 'rev-varun-pb',
    author: 'Varun P.B',
    reviewCount: '3 reviews',
    timeAgo: 'a year ago',
    rating: 5,
    courseTag: 'Corporate Mentorship',
    featuredMention: 'Career Counseling',
    reviewText:
      'Ascend Career provides a genuine, structured learning roadmap. The trainers have deep industry domain insight and offer practical, step-by-step career navigation.',
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      'Thank you Varun, for your wonderful review and strong trust in Ascend Career. We wish you continued success in your professional path.',
    initials: 'VP',
    avatarBg: 'bg-teal-500/20 text-teal-300 border-teal-500/30'
  },
  {
    id: 'rev-darshan-raj',
    author: 'Darshan Raj',
    reviewCount: '1 review',
    timeAgo: '11 months ago',
    rating: 5,
    courseTag: 'Professional Training',
    featuredMention: 'Verified 5-Star',
    reviewText:
      'A wonderful learning institute for students and job seekers. The interactive classes and practical projects give you exactly what corporate employers look for.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hi Darshan, Thank you so much for your fantastic 5-star rating! ⭐ We truly appreciate you recommending Ascend Career.',
    initials: 'DR',
    avatarBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
  },
  {
    id: 'rev-meghna-koul',
    author: 'Meghna Koul',
    reviewCount: '2 reviews',
    photosCount: 1,
    timeAgo: '11 months ago',
    rating: 5,
    courseTag: 'Skills & Development',
    featuredMention: 'Comprehensive Support',
    reviewText:
      'The learning experience was very enriching. The mentors are patient, supportive, and provide personal attention to every learner.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hello Meghna, Thank you so much for taking the time to share your positive experience with Ascend Career. Your feedback motivates our entire faculty!',
    initials: 'MK',
    avatarBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  },
  {
    id: 'rev-harshini-harshu',
    author: 'Harshini Harshu',
    reviewCount: '9 reviews',
    photosCount: 1,
    timeAgo: '11 months ago',
    rating: 4,
    courseTag: 'Student Feedback',
    featuredMention: 'Structured Coursework',
    reviewText:
      'Good training institute with structured course modules, real-world examples, and attentive faculty. Helpful guidance throughout.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hi Harshini, Thank you for taking the time to leave Ascend Career a 4-star rating. We truly value your feedback and strive to make every session impactful.',
    initials: 'HH',
    avatarBg: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
  }
];
