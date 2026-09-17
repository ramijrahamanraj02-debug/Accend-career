export interface ReviewTopic {
  id: string;
  label: string;
  count?: number;
}

export const REVIEW_TOPICS: ReviewTopic[] = [
  { id: 'all', label: 'All', count: 13 },
  { id: 'trainer', label: 'knowledgeable trainer', count: 3 },
  { id: 'guidance', label: 'career guidance', count: 5 },
  { id: 'examples', label: 'practical examples', count: 2 },
  { id: 'concepts', label: 'concepts', count: 3 },
  { id: 'understand', label: 'understand', count: 2 },
  { id: 'learning', label: 'learning experience', count: 3 },
  { id: 'sir', label: 'sir', count: 3 }
];

export interface StudentReviewItem {
  id: string;
  author: string;
  reviewCount: string;
  photosCount?: number;
  timeAgo: string;
  rating: number;
  reviewText: string;
  hasOwnerResponse: boolean;
  ownerResponseTime: string;
  ownerResponseText: string;
  topics: string[];
  courseTag?: string;
  featuredMention?: string;
  initials: string;
  avatarBg: string;
  likes: number;
}

export const STUDENT_REVIEWS_DATA: StudentReviewItem[] = [
  {
    id: 'rev-azra-syeda',
    author: 'Azra Syeda',
    reviewCount: '4 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    reviewText:
      'I am currently pursuing SAP training at Ascend Careers, and it has been an excellent learning experience. The teaching methodology is very practical, with real-life examples that make complex SAP concepts easy to understand. The sessions are interactive, structured, and focused on industry readiness.',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Dear Azra, Thank you for your wonderful review! We're thrilled your SAP training at Ascend Career has been such a positive learning journey. We are committed to supporting your professional milestones.",
    topics: ['learning', 'examples', 'concepts', 'understand'],
    initials: 'AS',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 6
  },
  {
    id: 'rev-soha-hussain',
    author: 'Soha Hussain',
    reviewCount: '3 reviews',
    photosCount: 2,
    timeAgo: '6 months ago',
    rating: 5,
    reviewText:
      "They're covering the concept thoroughly, and the instructors are making complex concepts easy to grasp. The hands-on approach is helping me build a strong foundation. Nice place to build career.",
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Dear Soha, Thank you so much for your fantastic 5-star review! We're thrilled to hear that our hands-on approach is helping you build a strong foundation. Keep ascending!",
    topics: ['concepts', 'understand', 'guidance'],
    initials: 'SH',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 4
  },
  {
    id: 'rev-harish-m',
    author: 'Harish Harish m',
    reviewCount: '1 review',
    timeAgo: '10 months ago',
    rating: 5,
    reviewText:
      'I learned so many things for sadiq sir he was such a amazing coach and to understand the concept to give examples for real world entity and take some sceneries and explain and explain in essay way\nThank you',
    hasOwnerResponse: true,
    ownerResponseTime: '10 months ago',
    ownerResponseText:
      'Thank you Harish, for such a wonderful words and Trust in us.',
    topics: ['sir', 'concepts', 'understand', 'examples'],
    initials: 'HM',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 5
  },
  {
    id: 'rev-sahadeva-m',
    author: 'Sahadeva M',
    reviewCount: '1 review',
    timeAgo: '10 months ago',
    rating: 5,
    reviewText:
      'My trainer Sadiq sir was very knowledgeable and explained each topic clearly.\nThe sessions were interactive with real-time examples and practical experience.\nI really appreciate the guidance and support throughout the course.',
    hasOwnerResponse: true,
    ownerResponseTime: '10 months ago',
    ownerResponseText:
      'Thank you Sahadeva, for such a wonderful words and Trusting Ascend Career.',
    topics: ['trainer', 'sir', 'examples', 'guidance'],
    initials: 'SM',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 7
  },
  {
    id: 'rev-aazad-ali',
    author: 'Aazad Ali',
    reviewCount: '4 reviews',
    timeAgo: '2 years ago',
    rating: 5,
    reviewText:
      "The trainer is the best of this institute. I've learnt lots of. Over all, this is the best @SAP Institute for career development, If ones wanna learn and grow higher and longer, then join you won't even regret about your money and time.\nThank you .",
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      "Thank you so much, Aazad Ali, for your heartfelt feedback! 🙏 We're truly glad to know that your learning journey with us was valuable. Your growth and trust in our training means a lot.",
    topics: ['trainer', 'guidance', 'learning'],
    initials: 'AA',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 8
  },
  {
    id: 'rev-pavan-sindhe',
    author: 'Pavan Sindhe',
    reviewCount: '4 reviews',
    timeAgo: 'a year ago',
    rating: 5,
    reviewText:
      'Trainer Sadiq sir is very knowledgeable person with actual Corporate experience. Will realistically guide you in regards to your career',
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      "Thank you so much, Pavan, for your kind words and appreciation! 🌟 We’re truly grateful for your trust in Ascend Career and Sadiq Sir's mentorship. It’s our constant goal to offer real-world, corporate-driven guidance that empowers your journey.",
    topics: ['trainer', 'sir', 'guidance'],
    initials: 'PS',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 5
  },
  {
    id: 'rev-syeda-ayesha',
    author: 'Syeda Ayesha',
    reviewCount: '1 review',
    timeAgo: '6 months ago',
    rating: 5,
    reviewText:
      'Nice place to build Carrier. Sir is friendly and supports in learning and buliding skills 😊',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      'Dear Syeda Ayesha, Thank you so much for your wonderful 5-star review! We are delighted to hear that our guidance and friendly faculty supported your skills.',
    topics: ['sir', 'guidance', 'learning'],
    initials: 'SA',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 3
  },
  {
    id: 'rev-vignesh-vicky',
    author: 'Vignesh Vicky',
    reviewCount: '5 reviews',
    timeAgo: '6 months ago',
    rating: 5,
    reviewText: 'Good ok',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      'Hello Vignesh, Thank you so much for your kind words and the fantastic 5-star rating! We truly appreciate you.',
    topics: ['guidance'],
    initials: 'VV',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 2
  },
  {
    id: 'rev-ayesha',
    author: 'Ayesha',
    reviewCount: '1 review',
    timeAgo: '6 months ago',
    rating: 5,
    reviewText: 'Good place to learn and upgrade your career',
    hasOwnerResponse: true,
    ownerResponseTime: '6 months ago',
    ownerResponseText:
      "Hi Ayesha, We're absolutely delighted to hear that you found Ascend Career a great place to learn and upgrade your career.",
    topics: ['guidance', 'learning'],
    initials: 'AY',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 3
  },
  {
    id: 'rev-harshini-harshu',
    author: 'harshini harshu',
    reviewCount: '9 reviews',
    photosCount: 1,
    timeAgo: '11 months ago',
    rating: 4,
    reviewText:
      'Good training institute with structured curriculum, clear practical guidance and attentive faculty support.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hi Harshini, Thank you for taking the time to leave Ascend Career a 4-star rating. We truly value your feedback and strive to make every session impactful.',
    topics: ['guidance', 'learning'],
    initials: 'HH',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 4
  },
  {
    id: 'rev-darshan-raj',
    author: 'Darshan Raj',
    reviewCount: '1 review',
    timeAgo: '11 months ago',
    rating: 5,
    reviewText:
      'A wonderful learning institute for students and job seekers. The interactive classes and practical projects give you exactly what corporate employers look for.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hi Darshan, Thank you so much for your fantastic 5-star rating! ⭐ We truly appreciate you recommending Ascend Career.',
    topics: ['examples', 'guidance'],
    initials: 'DR',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 3
  },
  {
    id: 'rev-meghna-koul',
    author: 'Meghna Koul',
    reviewCount: '2 reviews',
    photosCount: 1,
    timeAgo: '11 months ago',
    rating: 5,
    reviewText:
      'The learning experience was very enriching. The mentors are patient, supportive, and provide personal attention to every learner.',
    hasOwnerResponse: true,
    ownerResponseTime: '9 months ago',
    ownerResponseText:
      'Hello Meghna, Thank you so much for taking the time to share your positive experience with Ascend Career. Your feedback motivates our entire faculty!',
    topics: ['learning', 'guidance'],
    initials: 'MK',
    avatarBg: 'bg-[#262626] text-white border-[#333333]',
    likes: 4
  },
  {
    id: 'rev-varun-pb',
    author: 'Varun P.B',
    reviewCount: '3 reviews',
    timeAgo: 'a year ago',
    rating: 5,
    reviewText:
      'Ascend Career provides a genuine, structured learning roadmap with deep corporate insights and step-by-step guidance.',
    hasOwnerResponse: true,
    ownerResponseTime: 'a year ago',
    ownerResponseText:
      'Thank you Varun, for your trust in Ascend Career and positive feedback.',
    topics: ['guidance', 'learning'],
    initials: 'VP',
    avatarBg: 'bg-[#262626] text-[#E5FE40] border-[#333333]',
    likes: 5
  }
];
