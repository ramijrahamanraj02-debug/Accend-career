import { ServiceId } from '../types';

export interface DialogueSnippet {
  speaker: 'MENTOR' | 'STUDENT' | 'SYSTEM' | 'RECRUITER';
  text: string;
  start: number;
  end: number;
}

export interface HumanStoryProfile {
  id: ServiceId;
  pillarNumber?: string;
  serviceTitle: string;
  tagline: string;
  mentor: {
    name: string;
    role: string;
    experience: string;
    avatarUrl: string;
    quote: string;
  };
  heroPhoto: {
    url: string;
    alt: string;
    caption: string;
    badge: string;
  };
  videoClip: {
    src: string;
    title: string;
    subtitle: string;
    duration: string;
    badge: string;
    dialogue?: DialogueSnippet[];
  };
  fieldMoments: {
    title: string;
    url: string;
    description: string;
  }[];
  studentSuccess: {
    studentName: string;
    roleOrDestination: string;
    quote: string;
    avatarUrl: string;
    metric: string;
  };
}

export const HUMAN_STORIES_DATA: Record<ServiceId, HumanStoryProfile> = {
  'career-guidance': {
    id: 'career-guidance',
    pillarNumber: '01',
    serviceTitle: 'Career Guidance & 1-on-1 Counselling',
    tagline: 'Empathetic, data-backed guidance that unlocks hidden human potential',
    mentor: {
      name: 'Dr. Ananya Sen',
      role: 'Lead Career Psychologist & Assessment Director',
      experience: '14+ years counselling 8,000+ candidates',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      quote: 'Every student carries a distinct cognitive blueprint. When we align their natural curiosity with emerging global demand, confidence replaces fear.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Ascend Senior Counsellor reviewing 5-year career roadmap with a high school student and parent',
      caption: 'In-person psychometric debrief session at our flagship advisory suite',
      badge: 'AUTHENTIC 1-TO-1 ADVISORY'
    },
    videoClip: {
      src: '/videos/ascend-mentor-session.mp4',
      title: 'Real-Time Mentorship Consultation',
      subtitle: 'Brushed Steel Monolith Flip • Authentic Dialogue',
      duration: '9s',
      badge: 'LIVE DIALOGUE FOOTAGE',
      dialogue: [
        { speaker: 'MENTOR', text: 'You have great potential.', start: 0.5, end: 4.2 },
        { speaker: 'STUDENT', text: 'Thank you.', start: 4.4, end: 6.2 },
        { speaker: 'MENTOR', text: 'We will find the way.', start: 6.4, end: 8.8 }
      ]
    },
    fieldMoments: [
      {
        title: 'Cognitive Aptitude Evaluation',
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        description: 'Analyzing psychometric scores across verbal, spatial, and analytical domains.'
      },
      {
        title: 'Family Career Alignment',
        url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
        description: 'Bringing student passions and parental peace of mind into harmonious consensus.'
      },
      {
        title: '5-Year Trajectory Blueprint',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        description: 'Mapping milestones from Class 11 subject choice through entrance exams and bachelor degrees.'
      }
    ],
    studentSuccess: {
      studentName: 'Aarav Sharma',
      roleOrDestination: 'B.Tech + MS Dual Scholar (Politecnico di Milano)',
      quote: 'I felt paralyzed between Computer Engineering and Pure Mathematics. Dr. Sen’s session showed me how Data Science bridges both worlds.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      metric: '100% Scholarship Recipient'
    }
  },

  'skill-development': {
    id: 'skill-development',
    pillarNumber: '02',
    serviceTitle: 'Hands-on Skill Development & Tech Labs',
    tagline: 'Practical mastery in software engineering, AI, and industrial analytics',
    mentor: {
      name: 'Rajesh K. Varma',
      role: 'Head of Technical Curriculum & Ex-Principal Architect',
      experience: '12+ years in cloud native systems and engineering mentorship',
      avatarUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      quote: 'Don’t just watch videos—build real systems under production constraints. When students push code to live repositories, employers take notice.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Students and senior instructor collaborating on code in modern tech workshop',
      caption: 'Full-stack software engineering cohort conducting code sprint review',
      badge: 'LIVE WORKSHOP ENVIRONMENT'
    },
    videoClip: {
      src: '/videos/ascend-skills-lab.mp4',
      title: 'Ascend Tech Skills Lab & Sprint Review',
      subtitle: 'Hands-On Full-Stack Coding • Live Mentor Code Reviews',
      duration: '6s',
      badge: 'LAB WORKSHOP CLIP'
    },
    fieldMoments: [
      {
        title: 'Real-Time Code Pairing',
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
        description: 'Industry mentors sitting beside students debugging scalable database schemas.'
      },
      {
        title: 'Project Capstone Demo Day',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        description: 'Presenting working microservices to visiting tech recruiters and CTOs.'
      },
      {
        title: 'AI & Data Science Labs',
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        description: 'Training production machine learning models with real-world enterprise datasets.'
      }
    ],
    studentSuccess: {
      studentName: 'Rohan Mehra',
      roleOrDestination: 'Associate Software Engineer @ Top Cloud Enterprise',
      quote: 'Ascend’s bootcamp taught me Git workflows, REST microservices, and Docker. I cleared 3 technical interviews in my first week.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      metric: 'Placed at ₹8.5 LPA'
    }
  },

  'jobs-placement': {
    id: 'jobs-placement',
    pillarNumber: '03',
    serviceTitle: 'Hire • Train • Deploy & Executive Placements',
    tagline: 'Bridging the corporate gap through rigorous mock rounds and 50+ hiring partners',
    mentor: {
      name: 'Sunita Chawla',
      role: 'Director of Corporate Placement & Talent Acquisition',
      experience: '16+ years building corporate recruitment pipelines across India',
      avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      quote: 'Hiring directors do not just evaluate knowledge—they look for poise, communication, and real problem-solving grit under pressure.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Corporate recruiter conducting mock interview with an Ascend graduate',
      caption: 'Executive boardroom simulation replicating tier-1 corporate interviews',
      badge: 'INTERVIEW SIMULATION'
    },
    videoClip: {
      src: '/videos/ascend-corporate-placement.mp4',
      title: 'Corporate Placement & Mock Interview Session',
      subtitle: 'ATS Resume Review • HR Screening • Final Negotiation',
      duration: '6s',
      badge: 'PLACEMENT SIMULATION'
    },
    fieldMoments: [
      {
        title: 'ATS Resume Rebuilding',
        url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
        description: 'Crafting quantifiable impact statements that beat automated HR filter algorithms.'
      },
      {
        title: 'Behavioral HR Readiness',
        url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
        description: 'STAR methodology coaching to deliver compelling leadership and crisis narratives.'
      },
      {
        title: 'Offer Acceptance Celebration',
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
        description: 'Graduates celebrating direct corporate placement letters with senior mentors.'
      }
    ],
    studentSuccess: {
      studentName: 'Pooja Mukherjee',
      roleOrDestination: 'Business Intelligence Analyst @ FinTech Corp',
      quote: 'My resume went from being ignored by algorithms to receiving 5 interview calls in two weeks. The mock interviews gave me absolute calm.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      metric: '70%+ Selection Rate'
    }
  },

  'study-abroad': {
    id: 'study-abroad',
    pillarNumber: '04',
    serviceTitle: 'Study Abroad & Global University Admissions',
    tagline: 'Comprehensive international guidance from university shortlisting to 100% scholarships',
    mentor: {
      name: 'Matteo Rossi & Sarah Jenkins',
      role: 'International Admissions Deans & Visa Specialists',
      experience: 'Assisted 3,200+ students across Italy, Europe, USA, and Canada',
      avatarUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
      quote: 'Global education transforms worldview. We ensure financial barriers disappear through institutional and regional government scholarships.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      alt: 'International students walking through university quad in Europe',
      caption: 'Ascend alumni cohort arriving on campus at Politecnico di Milano, Italy',
      badge: 'GLOBAL CAMPUS ARRIVAL'
    },
    videoClip: {
      src: '/videos/ascend-global-admissions.mp4',
      title: 'Global Study Admissions & Campus Milestone',
      subtitle: 'Accredited European Campuses • 100% Scholarship Assistance',
      duration: '6s',
      badge: 'CAMPUS DOCUMENTARY'
    },
    fieldMoments: [
      {
        title: 'SOP & Portfolio Workshops',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        description: '1-to-1 statement of purpose editing with native language academic editors.'
      },
      {
        title: 'Visa Dossier Auditing',
        url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
        description: 'Vetted financial proofs, apostille attestations, and embassy interview drills.'
      },
      {
        title: 'Pre-Departure Orientation',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        description: 'Accommodation booking, SIM card logistics, and connecting with senior student alumni.'
      }
    ],
    studentSuccess: {
      studentName: 'Vikramaditya Rao',
      roleOrDestination: 'Master of Management @ University of Bologna',
      quote: 'Ascend secured my 100% tuition waiver and €7,200 annual living stipend under regional DSU scholarships. It made my dream reality.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      metric: '€7,200/yr Living Grant'
    }
  },

  'study-in-india': {
    id: 'study-in-india',
    serviceTitle: 'Study in India & Top University Admissions',
    tagline: 'Strategic entrance guidance for premier public, private, and deemed universities',
    mentor: {
      name: 'Prof. Arvind Nambiar',
      role: 'National Entrance Advisory Chair',
      experience: '20+ years guiding students through CUET, JEE, NEET, and MBA exams',
      avatarUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      quote: 'India’s top institutions reward strategic preparation and disciplined choices. We demystify cutoff trends and seat matrices.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      alt: 'Students inside a premier Indian university lecture hall',
      caption: 'National entrance counseling and institution shortlisting workshop',
      badge: 'CAMPUS LIFE INDIA'
    },
    videoClip: {
      src: '/videos/ascend-mentor-session.mp4',
      title: 'College Matching & Cutoff Analysis',
      subtitle: 'Personalized Cutoff Mapping • Verified Institutional Quality',
      duration: '9s',
      badge: 'ADMISSIONS SESSION'
    },
    fieldMoments: [
      {
        title: 'Cutoff Trends Analysis',
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
        description: 'Multi-year percentile comparisons for engineering, medical, and liberal arts.'
      },
      {
        title: 'Institutional Accreditations',
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        description: 'Auditing NAAC A++ ratings, NIRF rankings, and true placement audit logs.'
      },
      {
        title: 'Counseling Round Strategy',
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
        description: 'Optimizing web option choices to maximize seat allocation probability.'
      }
    ],
    studentSuccess: {
      studentName: 'Meera Iyer',
      roleOrDestination: 'B.Sc Economics (Hons) @ Top Autonomous College',
      quote: 'The cutoff matrix helped me get into my dream economics program in Round 1 without paying extra management fees.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      metric: 'Merit Seat Allocation'
    }
  },

  'school-college-programs': {
    id: 'school-college-programs',
    serviceTitle: 'Institutional Bootcamps & Campus Programs',
    tagline: 'Partnering with schools and colleges to elevate institutional placement metrics',
    mentor: {
      name: 'Dr. R. K. Nair',
      role: 'Institutional Partnership Dean',
      experience: 'Conducted 200+ campus workshops impacting 25,000+ students',
      avatarUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
      quote: 'When educational institutions embed career psychology early in classes 9 to 12, drop-out anxiety vanishes and placement figures surge.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
      alt: 'Auditorium filled with students participating in an Ascend career orientation session',
      caption: 'Campus-wide career assessment and stream orientation for 600+ students',
      badge: 'INSTITUTIONAL CAMPUS WORKSHOP'
    },
    videoClip: {
      src: '/videos/ascend-skills-lab.mp4',
      title: 'Institutional Career Readiness Bootcamp',
      subtitle: 'On-Campus Psychometric Assessment • Career Days',
      duration: '6s',
      badge: 'CAMPUS BOOTCAMP'
    },
    fieldMoments: [
      {
        title: 'Auditorium Career Day',
        url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
        description: 'Interactive career exhibits where students meet industry professionals.'
      },
      {
        title: 'Faculty Training Sessions',
        url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        description: 'Equipping school counselors and teachers with modern psychometric diagnostic tools.'
      },
      {
        title: 'Placement Cell Auditing',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        description: 'Restructuring campus recruitment drives to double tier-1 recruiter participation.'
      }
    ],
    studentSuccess: {
      studentName: 'Kavita Sundaram',
      roleOrDestination: 'Principal, St. Xavier Senior Secondary',
      quote: 'Ascend tested all 450 class 10 and 12 students. For the first time, parents had scientific reports rather than subjective hearsay.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      metric: '450+ Students Guided'
    }
  },

  'corporate-training': {
    id: 'corporate-training',
    serviceTitle: 'Corporate Training & Executive Development',
    tagline: 'Custom learning pathways that align workforce competencies with enterprise goals',
    mentor: {
      name: 'Hemant Bhasin',
      role: 'Enterprise Leadership & Talent Development Partner',
      experience: 'Delivered leadership programs for Fortune 500 tech and financial giants',
      avatarUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
      quote: 'Technological disruption requires continuous reskilling. Our corporate programs build resilient, cross-functional teams ready for tomorrow.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      alt: 'Corporate executives in boardroom during leadership strategy workshop',
      caption: 'Executive leadership retreat focusing on digital transformation and agile execution',
      badge: 'ENTERPRISE RETREAT'
    },
    videoClip: {
      src: '/videos/ascend-corporate-placement.mp4',
      title: 'Executive Leadership & Upskilling Workshop',
      subtitle: 'Boardroom Simulations • Cross-Functional Alignment',
      duration: '6s',
      badge: 'EXECUTIVE SESSION'
    },
    fieldMoments: [
      {
        title: 'Executive Boardroom Strategy',
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        description: 'Simulating complex merger, growth, and team restructuring scenarios.'
      },
      {
        title: 'Tech Modernization Sprints',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        description: 'Hands-on AI and cloud architecture migration labs for enterprise engineering teams.'
      },
      {
        title: 'Team Dynamics & Emotional IQ',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        description: 'Fostering psychological safety and high-velocity collaborative problem solving.'
      }
    ],
    studentSuccess: {
      studentName: 'Alok Sengupta',
      roleOrDestination: 'VP of Human Resources @ Global SaaS Enterprise',
      quote: 'Ascend’s 6-week upskilling program decreased our developer ramp-up time by 40% and boosted employee retention significantly.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      metric: '40% Faster Ramp-up'
    }
  }
};
