export interface AscendTrack {
  trackNumber: string; // '01' through '12'
  id: string;
  title: string;
  subtitle: string;
  humanQuote: string;
  description: string;
  badge: string;
  serviceId: string;
  accentColor: string; // e.g. '#14b8a6'
  accentClass: string;
  actionText: string;
  deliverables: string[];
  image: {
    url: string;
    alt: string;
    focalPosition: string; // e.g. 'center 18%' to ensure faces/heads are never cropped!
    caption: string;
  };
}

export const ASCEND_TRACKS: AscendTrack[] = [
  {
    trackNumber: '01',
    id: 'career-counselling',
    title: 'Career Counselling & Guidance',
    subtitle: 'Scientific 1-on-1 Mentorship & Strengths Discovery',
    humanQuote: '“You don’t have to figure it out alone.”',
    description: 'Personalized psychometric evaluation and 1-on-1 strategic sessions to eliminate confusion, assess innate aptitudes, and chart an actionable career roadmap.',
    badge: 'Track 01 • Mentorship',
    serviceId: 'career-guidance',
    accentColor: '#14b8a6',
    accentClass: 'teal',
    actionText: 'Talk to a Career Mentor',
    deliverables: [
      'Comprehensive Psychometric Strengths Audit',
      'High School Stream & College Selection Matrix',
      'Confidential 1-to-1 Senior Mentor Sessions'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      alt: '1-on-1 Career Counselling Session',
      focalPosition: 'center 15%', // Keeps face and eyes perfectly framed
      caption: 'In-Session Mentorship & Roadmap Review'
    }
  },
  {
    trackNumber: '02',
    id: 'skill-development',
    title: 'Skill Development & Tech Labs',
    subtitle: 'Hands-On Practical Engineering & AI Workflows',
    humanQuote: '“Learn skills that create genuine market demand.”',
    description: 'Bridge the university curriculum gap with intensive project sprints in Full-Stack Development, Generative AI, Cloud Infrastructure, and Business Analytics.',
    badge: 'Track 02 • Tech Mastery',
    serviceId: 'skill-development',
    accentColor: '#06b6d4',
    accentClass: 'cyan',
    actionText: 'Explore Practical Labs',
    deliverables: [
      '100% Practical Project-Driven Coding Sprints',
      'Production Code Pairing with Senior Engineers',
      'Recognized Microservices & Cloud Credentials'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      alt: 'Hands-on Technology Skills Lab',
      focalPosition: 'center 20%', // Keeps mentors and students properly framed
      caption: 'Live Code Pairing & Architecture Review'
    }
  },
  {
    trackNumber: '03',
    id: 'jobs-placement',
    title: 'Jobs & Placement (HTD)',
    subtitle: 'Hire • Train • Deploy Direct Corporate Pathways',
    humanQuote: '“Turn rigorous preparation into verified offers.”',
    description: 'Connecting qualified candidates directly to 500+ corporate hiring partner companies through tailored Hire-Train-Deploy pipelines, ATS resume engineering, and mock drills.',
    badge: 'Track 03 • Placements',
    serviceId: 'jobs-placement',
    accentColor: '#10b981',
    accentClass: 'emerald',
    actionText: 'Explore Placement Tracks',
    deliverables: [
      'Pre-Vetted Corporate Requisitions & Drives',
      'Mock Technical & HR Panels with Senior Managers',
      'Continuous Interview Support till Onboarding'
    ],
    image: {
      url: '/images/jobs-placement-readiness.jpg',
      alt: 'Jobs & Placement Readiness 3D Architectural Campus',
      focalPosition: 'center 40%',
      caption: 'Jobs & Placement Readiness • Accelerate Your Career Journey'
    }
  },
  {
    trackNumber: '04',
    id: 'study-abroad',
    title: 'Study Abroad & Global Admissions',
    subtitle: '100% European & Global Scholarship Guidance',
    humanQuote: '“Your world is bigger than one destination.”',
    description: 'End-to-end guidance for prestigious public and private universities across Italy, the USA, and Canada with specialized regional funding support.',
    badge: 'Track 04 • Global Horizons',
    serviceId: 'study-abroad',
    accentColor: '#38bdf8',
    accentClass: 'sky',
    actionText: 'Explore Study Abroad',
    deliverables: [
      'Top English-Taught European University Admissions',
      'Regional DSU / Erasmus+ Scholarship Mentorship',
      'Complete Visa Dossier & Pre-Departure Briefings'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      alt: 'International University Campus Life',
      focalPosition: 'center 22%', // Beautiful university quad with scholars
      caption: 'Politecnico di Milano & European Scholars'
    }
  },
  {
    trackNumber: '05',
    id: 'psychometric-assessment',
    title: 'Psychometric & Aptitude Testing',
    subtitle: 'Evidence-Based Diagnostic Cognitive Profiling',
    humanQuote: '“Clarity begins with scientific self-awareness.”',
    description: 'Standardized assessment batteries mapping cognitive speed, logical reasoning, RIASEC vocational interests, and Big Five personality traits to 250+ careers.',
    badge: 'Track 05 • Assessment',
    serviceId: 'career-guidance',
    accentColor: '#8b5cf6',
    accentClass: 'purple',
    actionText: 'Book Diagnostic Assessment',
    deliverables: [
      '32-Page Comprehensive Psychometric Dossier',
      'Cognitive Speed & Reasoning Percentile Scores',
      'Holland Code (RIASEC) Career Match Index'
    ],
    image: {
      url: '/images/discover-your-strengths-assessment.jpg',
      alt: 'Discover Your Strengths - Psychometric and Aptitude Testing Campus',
      focalPosition: 'center 45%',
      caption: 'Standardized Aptitude & Personality Battery'
    }
  },
  {
    trackNumber: '06',
    id: 'ats-resume-engineering',
    title: 'ATS Resume & Portfolio Engineering',
    subtitle: 'Algorithmic Optimization & Executive Profiles',
    humanQuote: '“Get your resume seen by actual human decision-makers.”',
    description: 'Transforming passive CVs into high-converting, keyword-dense career portfolios engineered to sail through modern Applicant Tracking Systems (ATS).',
    badge: 'Track 06 • Resume Lab',
    serviceId: 'jobs-placement',
    accentColor: '#14b8a6',
    accentClass: 'teal',
    actionText: 'Optimize Your Resume',
    deliverables: [
      'Algorithmic ATS Compliance Score (>85%)',
      'Impact-Driven Action Bullet Re-Engineering',
      'Executive LinkedIn Profile Alignment'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
      alt: 'Resume Review and Portfolio Optimization',
      focalPosition: 'center 25%',
      caption: 'Executive Resume Audit & Keyword Architecture'
    }
  },
  {
    trackNumber: '07',
    id: 'mock-interviews',
    title: 'Mock Interviews & Behavioral Prep',
    subtitle: 'Senior Hiring Panel Simulation with Feedback',
    humanQuote: '“Walk into your interview with zero doubt.”',
    description: 'Rigorous 1-on-1 simulations covering behavioral rounds (STAR method), technical deep-dives, case studies, and stress tests conducted by industry veterans.',
    badge: 'Track 07 • Interview Drills',
    serviceId: 'jobs-placement',
    accentColor: '#0ea5e9',
    accentClass: 'cyan',
    actionText: 'Schedule Mock Interview',
    deliverables: [
      'Simulated 45-Minute Panel Interview',
      'Comprehensive Behavioral STAR Feedback',
      'Recorded Video Review with Performance Rubric'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
      alt: 'Executive Mock Interview Coaching',
      focalPosition: 'center 18%',
      caption: 'STAR Method Behavioral & Technical Drill'
    }
  },
  {
    trackNumber: '08',
    id: 'study-in-india',
    title: 'College & Stream Selection (India)',
    subtitle: 'Premier National University & Exam Alignment',
    humanQuote: '“Secure your seat at India’s premier institutions.”',
    description: 'Strategic counseling for CUET, JEE, NEET, and CAT entrance milestones with institutional audits across premier central, state, and private universities.',
    badge: 'Track 08 • Admissions India',
    serviceId: 'study-in-india',
    accentColor: '#f59e0b',
    accentClass: 'amber',
    actionText: 'Plan Indian Admissions',
    deliverables: [
      'Curated Institutional Cutoff & Ranking Matrix',
      'Stream Suitability Index for Class 10/12',
      'Autonomous & Deemed University Direct Advisory'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
      alt: 'Indian University Campus Building',
      focalPosition: 'center 30%',
      caption: 'Central & Premier Autonomous Colleges'
    }
  },
  {
    trackNumber: '09',
    id: 'scholarship-visa',
    title: 'Scholarships & Embassy Visa Guidance',
    subtitle: 'Tuition Waivers & Flawless Visa Clearances',
    humanQuote: '“Education is priceless, but tuition doesn’t have to be.”',
    description: 'Navigating government regional grants (DSU, EDISU, DAAD, Chevening) and providing 100% compliant documentation for European and international student visas.',
    badge: 'Track 09 • Scholarship Desk',
    serviceId: 'study-abroad',
    accentColor: '#06b6d4',
    accentClass: 'cyan',
    actionText: 'Check Scholarship Eligibility',
    deliverables: [
      'Up to 100% Tuition Waiver Filing Support',
      'Financial Affidavit & Bank Solvency Guidance',
      'Embassy Interview Preparation & Mock Visa Q&A'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',
      alt: 'Scholarship Graduate Celebration',
      focalPosition: 'center 25%',
      caption: 'DSU Grant Recipients & University Enrollees'
    }
  },
  {
    trackNumber: '10',
    id: 'campus-programs',
    title: 'Institutional Campus Ecosystems',
    subtitle: 'School Guidance Cells & College TPO Bootcamps',
    humanQuote: '“Empowering campuses with industry-grade career cells.”',
    description: 'Partnering with universities and high schools to establish institutional guidance hubs, batch-wide psychometric audits, and campus recruitment training.',
    badge: 'Track 10 • Institutional',
    serviceId: 'school-college-programs',
    accentColor: '#2dd4bf',
    accentClass: 'teal',
    actionText: 'Partner for Your Campus',
    deliverables: [
      'On-Campus Placement Training Drives (CRT)',
      'Batch Psychometric Audits with Admin Dashboards',
      'Faculty Development Programs & Industry Panels'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
      alt: 'Campus Seminar and Guidance Workshop',
      focalPosition: 'center 25%',
      caption: 'College Auditorium Employability Bootcamp'
    }
  },
  {
    trackNumber: '11',
    id: 'career-pivot',
    title: 'Executive Career Pivot & Mentorship',
    subtitle: 'Strategic Mid-Career & Leadership Transitions',
    humanQuote: '“It is never too late to realign your true potential.”',
    description: 'Structured roadmap for working professionals switching into high-growth disciplines like Product Management, Cloud Architecture, and Data Science.',
    badge: 'Track 11 • Executive',
    serviceId: 'career-guidance',
    accentColor: '#6366f1',
    accentClass: 'indigo',
    actionText: 'Plan Your Career Pivot',
    deliverables: [
      'Transferable Skills Matrix & Industry Benchmarks',
      'Executive Brand & Strategic Networking Playbook',
      'Compensation Negotiation Framework'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80',
      alt: 'Executive Career Discussion and Strategy',
      focalPosition: 'center 20%',
      caption: 'Mid-Career Transition Strategy & Portfolio'
    }
  },
  {
    trackNumber: '12',
    id: 'corporate-training',
    title: 'Corporate Training & HR Solutions',
    subtitle: 'Enterprise Upskilling & Specialized Talent Search',
    humanQuote: '“Developing teams that execute with competitive excellence.”',
    description: 'Empowering enterprises with custom workforce upskilling in AI workflows, frontline sales enablement, leadership development, and executive search.',
    badge: 'Track 12 • Enterprise HR',
    serviceId: 'corporate-training',
    accentColor: '#f43f5e',
    accentClass: 'rose',
    actionText: 'Request Enterprise HR Solutions',
    deliverables: [
      'Custom Training Needs Analysis (TNA)',
      'Sales Enablement & Consultative Closing Modules',
      'Specialized Recruitment & Contract Staffing'
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
      alt: 'Corporate Training and Leadership Workshop',
      focalPosition: 'center 20%',
      caption: 'Enterprise Leadership & Talent Enablement'
    }
  }
];
