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
  'web-services': {
    id: 'web-services',
    pillarNumber: '01',
    serviceTitle: 'Web Development & Engineering',
    tagline: 'Precision full-stack engineering delivering ultra-fast, conversion-driven web platforms',
    mentor: {
      name: 'Rohan Mukherjee',
      role: 'Principal Solutions Architect & Head of Web Engineering',
      experience: '12+ years deploying enterprise SaaS, Next.js apps & e-commerce platforms',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      quote: 'Exceptional web development is where mathematical performance meets intuitive human utility. Every millisecond shaved off load time creates tangible business value.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      alt: 'Senior web developers collaborating on full-stack web architecture and code review',
      caption: 'Full-stack engineering sprint review and performance tuning at our tech center',
      badge: 'ENTERPRISE WEB ENGINEERING'
    },
    videoClip: {
      src: '/videos/ascend-mentor-session.mp4',
      title: 'Full-Stack Architecture Walkthrough',
      subtitle: 'Modern React/Next.js & API Engineering Demo • Rohan Mukherjee',
      duration: '10s',
      badge: 'TECH SPRINT REVIEW'
    },
    fieldMoments: [
      {
        title: 'System Architecture & Schema Design',
        url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        description: 'Architecting fault-tolerant databases and serverless endpoints built for scale.'
      },
      {
        title: 'Core Web Vitals & Speed Optimization',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        description: 'Tuning asset delivery pipelines and caching layers to guarantee sub-second LCP.'
      },
      {
        title: 'Production CI/CD Cloud Deployment',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        description: 'Automated container build verification with zero-downtime rolling releases.'
      }
    ],
    studentSuccess: {
      studentName: 'NexVibe Solutions',
      roleOrDestination: 'B2B SaaS Web Application Launch',
      quote: 'Ascend engineered our entire client platform from scratch. Our signup conversion jumped 38% within 3 weeks of going live.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      metric: '38% Conversion Increase'
    }
  },
  'graphic-design': {
    id: 'graphic-design',
    pillarNumber: '02',
    serviceTitle: 'Graphic Design & Creative Studio',
    tagline: 'Distinctive visual identities and Figma design systems that captivate target audiences',
    mentor: {
      name: 'Maya Varma',
      role: 'Creative Director & Brand Experience Lead',
      experience: '10+ years shaping visual identities for 120+ international startups and brands',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      quote: 'Great visual design isn’t decoration—it’s strategic clarity. When your brand identity speaks clearly, customer trust follows naturally.'
    },
    heroPhoto: {
      url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
      alt: 'Creative designers examining typography palettes, brand moodboards, and UI components',
      caption: 'Creative brand discovery and visual guideline formulation workshop',
      badge: 'CREATIVE BRAND STUDIO'
    },
    videoClip: {
      src: '/videos/ascend-mentor-session.mp4',
      title: 'Design System & UI/UX Presentation',
      subtitle: 'Figma Auto-Layout & Typographic Hierarchy Showcase • Maya Varma',
      duration: '10s',
      badge: 'CREATIVE PROCESS REVIEW'
    },
    fieldMoments: [
      {
        title: 'Brand Vector Exploration & Iconography',
        url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
        description: 'Iterating on bespoke monogram marks and geometric icon sets in Adobe Illustrator.'
      },
      {
        title: 'Figma Component Systems & Auto-Layout',
        url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
        description: 'Building cohesive token-driven design systems with light/dark theme variants.'
      },
      {
        title: 'Investor Pitch Decks & Marketing Print',
        url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        description: 'Formulating compelling visual narratives for high-stakes investor pitch presentations.'
      }
    ],
    studentSuccess: {
      studentName: 'AuraCraft Lifestyle',
      roleOrDestination: 'Brand Rebranding & Packaging Overhaul',
      quote: 'The brand identity and packaging designs provided by Ascend transformed our brand into a premium market leader.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      metric: '4.9/5 Brand Satisfaction'
    }
  },
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
      url: '/images/career-guidance-compass.jpg',
      alt: 'Ascend 3D Astrolabe Compass Chamber mapping multi-branch career pathways and trajectories',
      caption: 'Ascend Strategic Direction Chamber: Mapping personalized career trajectories from psychometric evaluations',
      badge: '3D PATHWAYS MATRIX'
    },
    videoClip: {
      src: '/videos/ascend-mentor-session.mp4',
      title: 'Real-Time Mentorship Consultation',
      subtitle: 'Live Career Psychology & Roadmap Session • Dr. Ananya Sen',
      duration: '10s',
      badge: 'LIVE DIALOGUE FOOTAGE',
      dialogue: [
        { speaker: 'MENTOR', text: 'You have great potential.', start: 0.5, end: 4.2 },
        { speaker: 'STUDENT', text: 'Thank you.', start: 4.4, end: 6.2 },
        { speaker: 'MENTOR', text: 'We will find the way together.', start: 6.4, end: 9.5 }
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
    tagline: 'Bridging the corporate gap through rigorous mock rounds and 500+ hiring partner companies',
    mentor: {
      name: 'Sunita Chawla',
      role: 'Director of Corporate Placement & Talent Acquisition',
      experience: '16+ years building corporate recruitment pipelines across India',
      avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      quote: 'Hiring directors do not just evaluate knowledge—they look for poise, communication, and real problem-solving grit under pressure.'
    },
    heroPhoto: {
      url: '/images/jobs-placement-readiness.jpg',
      alt: 'Jobs & Placement Readiness 3D Architectural Campus',
      caption: 'Jobs & Placement Readiness • Accelerate Your Career Journey',
      badge: 'PLACEMENT READINESS'
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
      url: '/images/study-abroad-global-pathways.jpg',
      alt: 'Global Study Admissions 3D Campus with holographic world globe and international discipline hubs',
      caption: 'Ascend global admissions network spanning Europe, North America, and Asia',
      badge: 'GLOBAL ADMISSIONS HUB'
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
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
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
      url: '/images/study-in-india-direct-admissions.jpg',
      alt: 'Ascend 3D Futuristic Campus: Study in India & Direct Admissions Multi-Discipline Hub',
      caption: 'Direct Admissions & Top University Hub: Medical Sciences, Engineering, Technology, Management & Liberal Arts',
      badge: 'DIRECT ADMISSIONS MATRIX'
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
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
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
