import { ServiceId } from '../types';

export interface FeaturedOpportunity {
  badge: string;
  country: string;
  countryCode: string;
  campaign: string;
  intakeNote: string;
  highlights: string[];
}

export interface CareerTrackItem {
  id: string;
  trackNumber: string; // '01' - '12'
  title: string;
  category: string;
  serviceId: ServiceId;
  iconType:
    | 'counselling'
    | 'roadmap'
    | 'stream'
    | 'course-college'
    | 'career-change'
    | 'psychometric'
    | 'skill-dev'
    | 'placement'
    | 'study-abroad'
    | 'study-india'
    | 'school-college'
    | 'corporate-hr';
  shortDesc: string;
  details: string;
  deliverables: string[];
  audience: 'students' | 'professionals' | 'institutions' | 'both';
  featuredOpportunity?: FeaturedOpportunity;
}

export const CAREER_TRACKS: CareerTrackItem[] = [
  {
    id: 'track-01',
    trackNumber: '01',
    title: 'Career Counselling',
    category: 'Guidance & Clarity',
    serviceId: 'career-guidance',
    iconType: 'counselling',
    shortDesc: 'Confidential 1-to-1 mentorship with certified strategists to resolve confusion and define clear career milestones.',
    details: 'Ascend Career provides personalized diagnostic advisory sessions for high schoolers, undergraduates, and working professionals seeking direction in an evolving global economy.',
    deliverables: [
      '1-on-1 Comprehensive Mentorship',
      'Aptitude & Interest Profiling',
      'Cognitive Strength Evaluation',
      'Parent-Student Consensus Alignment',
      'Actionable Next-Steps Blueprint'
    ],
    audience: 'students'
  },
  {
    id: 'track-02',
    trackNumber: '02',
    title: 'Career Path Planning',
    category: 'Strategic Trajectory',
    serviceId: 'career-guidance',
    iconType: 'roadmap',
    shortDesc: 'Multi-year trajectory mapping connecting your innate competencies to high-growth emerging industries.',
    details: 'A structured 5-year strategic projection linking current academic studies or corporate roles directly to high-trajectory compensation bands and future-proof domains.',
    deliverables: [
      '5-Year Career Trajectory Matrix',
      'Skill Benchmarking Against Industry',
      'Emerging Industry Viability Audits',
      'Quarterly Progression Triggers',
      'Long-Term Compensation Analysis'
    ],
    audience: 'both'
  },
  {
    id: 'track-03',
    trackNumber: '03',
    title: 'Stream Selection',
    category: 'High School Foundation',
    serviceId: 'career-guidance',
    iconType: 'stream',
    shortDesc: 'Objective stream guidance for Class 10th students choosing between Science, Commerce, and Humanities.',
    details: 'Replacing peer pressure with diagnostic clarity. We test logical, spatial, and analytical aptitude to ensure students choose streams where they naturally excel.',
    deliverables: [
      'Science vs. Commerce vs. Humanities Analysis',
      'Subject Compatibility Index',
      'Future Degree Viability Breakdown',
      'Parental Consultation Briefing',
      'Subject Combination Optimization'
    ],
    audience: 'students'
  },
  {
    id: 'track-04',
    trackNumber: '04',
    title: 'Course & College Selection',
    category: 'Institutional Matching',
    serviceId: 'career-guidance',
    iconType: 'course-college',
    shortDesc: 'Data-driven matching across public, private, and autonomous universities aligned with student scores and budgets.',
    details: 'Navigating cut-offs, NIRF rankings, NAAC accreditations, and curriculum modernism to pinpoint optimal institutions for engineering, medicine, law, management, and arts.',
    deliverables: [
      'Shortlisted Institution Matrix',
      'Cutoff & Quota Feasibility Benchmarks',
      'Accreditation & Placement Audits',
      'Campus ROI & Fee Evaluation',
      'Counseling Round Application Plan'
    ],
    audience: 'students'
  },
  {
    id: 'track-05',
    trackNumber: '05',
    title: 'Career Change Guidance',
    category: 'Mid-Career Transitions',
    serviceId: 'career-guidance',
    iconType: 'career-change',
    shortDesc: 'Structured transition roadmaps for working professionals pivoting into tech, analytics, product, or leadership.',
    details: 'Minimize career risk when pivoting. We evaluate your existing transferable capital, identify critical skill gaps, and position your profile for high-growth sectors.',
    deliverables: [
      'Transferable Skills Inventory',
      'Reskilling & Certification Roadmap',
      'Bridge Internship & Project Strategy',
      'Target Domain Compensation Parity',
      'Senior Mentor Domain Briefing'
    ],
    audience: 'professionals'
  },
  {
    id: 'track-06',
    trackNumber: '06',
    title: 'Psychometric & Career Assessment',
    category: 'Scientific Testing',
    serviceId: 'career-guidance',
    iconType: 'psychometric',
    shortDesc: 'Standardized psychological testing measuring cognitive aptitude, RIASEC interest clusters, and behavioral traits.',
    details: 'Our scientifically validated 45-minute psychometric battery decodes cognitive speed, abstract reasoning, emotional quotient, and workplace orientation.',
    deliverables: [
      '32-Page Comprehensive Dossier',
      'RIASEC Occupational Theme Mapping',
      'Big Five Workplace Personality Index',
      'Domain Percentile & Speed Benchmarks',
      'Clinical Psychologist Debrief Session'
    ],
    audience: 'both'
  },
  {
    id: 'track-07',
    trackNumber: '07',
    title: 'Skill Development & Courses',
    category: 'Capability Acceleration',
    serviceId: 'skill-development',
    iconType: 'skill-dev',
    shortDesc: 'Intensive, job-oriented programs in AI, full-stack, data analytics, digital marketing, and workplace communications.',
    details: 'Bridging the university-to-corporate capability gap with hands-on live code simulations, sprint-based projects, and direct corporate mentor reviews.',
    deliverables: [
      'AI & Machine Learning Foundations',
      'Full-Stack Web & App Engineering',
      'Data Analytics & Power BI Mastery',
      'Digital Marketing & Performance Growth',
      'Executive English & Workplace Etiquette'
    ],
    audience: 'both'
  },
  {
    id: 'track-08',
    trackNumber: '08',
    title: 'Jobs & Placement',
    category: 'Corporate Connect',
    serviceId: 'jobs-placement',
    iconType: 'placement',
    shortDesc: 'Direct recruitment pipelines to 50+ hiring partners, ATS resume overhaul, and 1-on-1 technical mock interviews.',
    details: 'Ascend Career actively bridges candidates and top employers with high-touch interview grooming, portfolio reviews, and direct corporate HR referrals.',
    deliverables: [
      'ATS-Compliant Resume Engineering',
      '1-on-1 Mock Technical & HR Rounds',
      'LinkedIn Profile Optimization',
      'Direct Recruiter Introductions',
      'Offer Evaluation & Salary Negotiation'
    ],
    audience: 'professionals'
  },
  {
    id: 'track-09',
    trackNumber: '09',
    title: 'Study Abroad',
    category: 'Global Admissions',
    serviceId: 'study-abroad',
    iconType: 'study-abroad',
    shortDesc: 'Complete international education advisory for 22+ countries, from university shortlisting to visa clearance.',
    details: 'Access world-class global universities across Italy, USA, Canada, Australia, and Europe with dedicated scholarship and embassy documentation support.',
    deliverables: [
      'Country & University Selection',
      'Application Assistance & Portal Filing',
      'SOP & LOR Drafting Workshops',
      'Scholarship Assistance & Grants',
      'Visa Documentation & Embassy Filings',
      'Visa Interview Preparation Drills',
      'Pre-Departure & Accommodation Briefing'
    ],
    audience: 'students',
    featuredOpportunity: {
      badge: 'FEATURED OPPORTUNITY',
      country: 'Italy',
      countryCode: 'IT',
      campaign: 'Study in Italy — Admissions & Guidance',
      intakeNote: 'Upcoming Autumn & Spring Intakes Open',
      highlights: [
        'Top public universities with 100% English degrees',
        'Regional government scholarships (DSU) up to €7,200/year',
        'Affordable European tuition & Schengen mobility'
      ]
    }
  },
  {
    id: 'track-10',
    trackNumber: '10',
    title: 'Study in India',
    category: 'National Higher Ed',
    serviceId: 'study-in-india',
    iconType: 'study-india',
    shortDesc: 'Strategic guidance for entrance counseling, institutional selection, merit scholarships, and admissions in India.',
    details: 'Comprehensive support for premier central universities, state universities, and accredited private institutions across Engineering, Medical, Law, and Management.',
    deliverables: [
      'Entrance Exam Counseling (JEE/NEET/CUET/CAT)',
      'Management & NRI Quota Advisory',
      'Merit & Need-Based Scholarship Guidance',
      'Education Loan Facilitation Support',
      'Document Verification & Spot Seat Allotment'
    ],
    audience: 'students'
  },
  {
    id: 'track-11',
    trackNumber: '11',
    title: 'School & College Programs',
    category: 'Institutional Enablement',
    serviceId: 'school-college-programs',
    iconType: 'school-college',
    shortDesc: 'Campus-wide career counseling cells, bulk psychometric drives, employability bootcamps, and placement drives.',
    details: 'We partner with academic institutions to establish high-impact career centers, boost campus placement figures, and train students in modern workplace proficiencies.',
    deliverables: [
      'In-Campus Career Counseling Cells',
      'Bulk Student Psychometric Testing Drives',
      'Employability & Soft-Skill Bootcamps',
      'Industry Expert Guest Lectures',
      'High-Volume Campus Placement Drives'
    ],
    audience: 'institutions'
  },
  {
    id: 'track-12',
    trackNumber: '12',
    title: 'Corporate Training & HR',
    category: 'Enterprise Solutions',
    serviceId: 'corporate-training',
    iconType: 'corporate-hr',
    shortDesc: 'Tailored enterprise upskilling, leadership acceleration, sales mastery, and corporate talent acquisition.',
    details: 'Equipping modern enterprises to thrive with customized capability frameworks, mid-level manager acceleration, and fast-turnaround executive search.',
    deliverables: [
      'Campus-to-Corporate Fresh Hire Induction',
      'Mid-Level Leadership & Management Labs',
      'High-Impact Sales & Negotiation Training',
      'Specialized Tech & Business Upskilling',
      'End-to-End Corporate Recruitment & Staffing'
    ],
    audience: 'institutions'
  }
];

export interface DynamicCountryOpportunity {
  country: string;
  countryCode: string;
  flag: string;
  campaign: string;
  intakeNote: string;
  scholarshipNote: string;
  highlights: string[];
}

export const DYNAMIC_STUDY_ABROAD_OPPORTUNITIES: DynamicCountryOpportunity[] = [
  {
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    campaign: 'Study in Italy — Admissions & Guidance',
    intakeNote: 'Upcoming Autumn & Spring Intakes Open',
    scholarshipNote: 'Regional DSU Scholarships up to €7,200/year',
    highlights: [
      'Top public universities with 100% English-taught degrees',
      'Regional government scholarships covering living expenses',
      'Affordable European tuition & full 27-nation Schengen mobility',
      'CIMEA & Universitaly pre-enrollment assistance'
    ]
  },
  {
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    campaign: 'Study in Canada — Co-op & PGWP Career Pathway',
    intakeNote: 'Fall, Winter & Summer Academic Intakes',
    scholarshipNote: 'Institutional Entrance Scholarships up to CAD 15,000',
    highlights: [
      'Up to 3-Year Post-Graduation Work Permit (PGWP)',
      'Integrated paid Co-op internships with Canadian employers',
      'Clear provincial immigration pathways for tech and healthcare'
    ]
  },
  {
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    campaign: 'Study in Australia — Group of Eight & Tech Hubs',
    intakeNote: 'Semester 1 (Feb) & Semester 2 (July) Intakes',
    scholarshipNote: 'Vice-Chancellor Global Excellence Scholarships 20-50%',
    highlights: [
      'Top-tier Group of Eight (Go8) world-ranked research institutions',
      'Extended post-study work rights in regional growth hubs',
      'High minimum hourly wage regulations for student employment'
    ]
  },
  {
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    campaign: 'Study in USA — STEM OPT & Global Research Giants',
    intakeNote: 'Fall & Spring Admissions Cycles',
    scholarshipNote: 'Need-based & Merit Fellowships up to 100% Tuition',
    highlights: [
      '3-Year STEM OPT extension for high-tech employment',
      'Unrivaled research facilities and Silicon Valley tech pipelines',
      'Flexible credit transfer and dual-major possibilities'
    ]
  }
];
