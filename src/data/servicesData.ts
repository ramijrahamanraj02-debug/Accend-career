import { ServiceVertical } from '../types';

export const SERVICES_DATA: ServiceVertical[] = [
  {
    id: 'career-guidance',
    numericCode: '01',
    title: 'Career Guidance & Assessment',
    navTitle: 'Career Guidance & Assessment',
    tagline: 'Scientific Clarity for Lifelong Professional Triumph',
    shortDesc: 'Comprehensive psychometric evaluations, personalized roadmaps, and 1-to-1 mentorship for students and working professionals.',
    fullDesc: 'Ascend Career’s Guidance & Assessment vertical leverages scientifically validated psychometric instruments and personalized mentorship to evaluate your natural aptitudes, cognitive strengths, and personality traits. Whether choosing high school streams, college degrees, or transitioning career trajectories, we provide an evidence-backed roadmap tailored to your potential.',
    badge: 'Guide • Assess',
    icon3D: '01',
    lucideIcon: 'Compass',
    accentColor: 'teal',
    accentHex: '#14b8a6',
    targetAudience: ['Classes 9th to 12th Students', 'Undergraduates & College Grads', 'Career Transitioners', 'Parents seeking clarity'],
    subServices: [
      {
        id: 'cg-1',
        title: '1-to-1 Career Counselling',
        description: 'Dedicated confidential sessions with certified career strategists to resolve dilemmas and align career ambitions.',
        badge: 'Core Session',
        deliverables: ['Detailed discussion report', 'Action items checklist', 'Direct mentor access']
      },
      {
        id: 'cg-2',
        title: 'Career Path Planning',
        description: 'Strategic long-term horizon mapping connecting present capabilities to high-growth emerging industries.',
        badge: 'Strategic',
        deliverables: ['5-Year trajectory chart', 'Skill requirement benchmarks', 'Industry outlook notes']
      },
      {
        id: 'cg-3',
        title: 'Stream Selection',
        description: 'Objective guidance for class 10th students to select Science, Commerce, or Humanities based on aptitude data.',
        badge: 'High School',
        deliverables: ['Subject compatibility index', 'Career viability breakdown', 'Parent briefing']
      },
      {
        id: 'cg-4',
        title: 'Course & College Selection',
        description: 'Curated institutional matching across public, private, and autonomous universities aligned with student scores.',
        badge: 'Admissions',
        deliverables: ['Shortlisted institution matrix', 'Cutoff benchmarks', 'Accreditation audits']
      },
      {
        id: 'cg-5',
        title: 'Career Change Guidance',
        description: 'Structured mid-career pivot strategies for professionals desiring a switch to tech, management, or emerging fields.',
        badge: 'Professionals',
        deliverables: ['Transferable skills matrix', 'Reskilling roadmap', 'Market compensation parity']
      },
      {
        id: 'cg-6',
        title: 'Career Roadmap',
        description: 'Step-by-step milestone timeline detailing courses, certifications, internships, and skill checkpoints.',
        badge: 'Milestone',
        deliverables: ['Visual milestone calendar', 'Credential checklist', 'Quarterly review triggers']
      },
      {
        id: 'cg-7',
        title: 'Parent–Student Counselling',
        description: 'Collaborative facilitation bridging generation gaps, aligning family aspirations with modern career opportunities.',
        badge: 'Family Focus',
        deliverables: ['Consensus resolution document', 'Financial budgeting overview', 'Parent guidance kit']
      },
      {
        id: 'cg-8',
        title: 'Psychometric Assessment',
        description: 'Multi-dimensional standardized diagnostic testing covering cognitive aptitude, personality, and behavioral traits.',
        badge: 'Diagnostic',
        deliverables: ['32-Page psychometric dossier', 'Confidence score intervals', 'Clinical psychologist review']
      },
      {
        id: 'cg-9',
        title: 'Aptitude Assessment',
        description: 'Rigorous quantitative, logical, spatial, and linguistic reasoning tests to pinpoint innate operational strengths.',
        badge: 'Analytical',
        deliverables: ['Percentile scores by domain', 'Cognitive speed metric', 'Aptitude strength quadrant']
      },
      {
        id: 'cg-10',
        title: 'Personality Assessment',
        description: 'Big Five and Myers-Briggs aligned behavioral analysis revealing workplace styles and leadership temperament.',
        badge: 'Behavioral',
        deliverables: ['Personality type dossier', 'Workplace culture compatibility', 'Stress response profile']
      },
      {
        id: 'cg-11',
        title: 'Interest Assessment',
        description: 'Holland Occupational Themes (RIASEC) mapping student curiosities to authentic occupational fulfillment.',
        badge: 'RIASEC Core',
        deliverables: ['Primary & secondary interest codes', 'Vocational cluster matches', 'Satisfaction forecasts']
      },
      {
        id: 'cg-12',
        title: 'Skill/Growth Assessment',
        description: 'Benchmarking existing digital, technical, and interpersonal proficiencies against corporate market standards.',
        badge: 'Benchmark',
        deliverables: ['Skill gap heatmap', 'Immediate priority areas', 'Upskilling index']
      },
      {
        id: 'cg-13',
        title: 'Career Compatibility Report',
        description: 'Algorithmic matching of student psychometric profile against 250+ modern career paths with probability scores.',
        badge: 'Algorithmic',
        deliverables: ['Top 5 compatible career clusters', 'Risk and reward analysis', 'Growth projections']
      },
      {
        id: 'cg-14',
        title: 'Personalized Career Roadmap',
        description: 'A finalized blueprint synthesizing assessments into actionable study schedules, internships, and target milestones.',
        badge: 'Final Blueprint',
        deliverables: ['Holistic master blueprint', 'Annual progression targets', 'Advisory follow-up support']
      }
    ],
    outcomes: [
      'Eliminate confusion and anxiety around stream & career selection',
      'Receive scientifically verified psychometric validation of true strengths',
      'Gain clarity on high-income, recession-resilient career options',
      'Achieve family consensus between student passions and parent perspectives'
    ],
    processSteps: [
      { step: 1, title: 'Psychometric Diagnostic', description: 'Complete our online 45-minute comprehensive psychometric and aptitude test.' },
      { step: 2, title: 'In-Depth Analysis', description: 'Senior psychologists and industry advisors evaluate your scores against current market realities.' },
      { step: 3, title: '1-to-1 Advisory Session', description: 'Engage in a 60-minute consultative session with parents and student to interpret results.' },
      { step: 4, title: 'Roadmap Execution', description: 'Receive your personalized roadmap and quarterly checkpoint support.' }
    ],
    faq: [
      {
        question: 'At what age or class should a student begin career guidance?',
        answer: 'We recommend initiating stream guidance from Class 8th–9th to allow thoughtful subject selection, with deep career roadmap planning happening in Classes 11th, 12th, or undergraduate years.'
      },
      {
        question: 'How is the psychometric assessment conducted?',
        answer: 'Assessments are taken on our secured portal, measuring personality, reasoning, interests, and emotional quotient, followed by an expert debrief.'
      }
    ]
  },
  {
    id: 'skill-development',
    numericCode: '02',
    title: 'Skill Development',
    navTitle: 'Skill Development & Courses',
    tagline: 'Industry-Aligned Masterclasses Built for High Employability',
    shortDesc: 'Job-oriented certification programs in AI, digital marketing, analytics, business management, and soft skills with real-world projects.',
    fullDesc: 'Bridging the university-to-corporate capability gap, Ascend Career’s Skill Development programs are crafted directly in collaboration with industry leaders. We train students and professionals in contemporary digital, analytical, and leadership competencies using project-based live simulations.',
    badge: 'Train • Upskill',
    icon3D: '02',
    lucideIcon: 'BookOpenCheck',
    accentColor: 'cyan',
    accentHex: '#06b6d4',
    targetAudience: ['Undergraduates looking for job-readiness', 'Professionals seeking career acceleration', 'Job seekers needing certifications'],
    subServices: [
      {
        id: 'sd-1',
        title: 'Job-Oriented Certification Courses',
        description: 'Curriculum certified by accredited bodies, designed to qualify candidates directly for high-demand corporate openings.',
        badge: 'Accredited',
        deliverables: ['Global certificate of completion', 'Capstone portfolio review', 'Industry project sign-off']
      },
      {
        id: 'sd-2',
        title: 'Digital Marketing',
        description: 'Full-stack mastery across SEO, Google & Meta Ads, Content Strategy, Performance Marketing, and Growth Hacking.',
        badge: 'Growth Tech',
        deliverables: ['Live ad budget simulations', 'SEO audit reports', 'Omnichannel marketing playbook']
      },
      {
        id: 'sd-3',
        title: 'Data Analytics',
        description: 'Hands-on practical training in SQL, Excel, Tableau, Power BI, and Python for enterprise business intelligence.',
        badge: 'High Demand',
        deliverables: ['Interactive dashboard portfolio', 'SQL data modeling project', 'Business case presentations']
      },
      {
        id: 'sd-4',
        title: 'Business & Management',
        description: 'Foundations in product thinking, agile methodologies, financial modeling, and operational excellence.',
        badge: 'Executive',
        deliverables: ['Agile sprint simulations', 'P&L analysis worksheets', 'Strategic business proposals']
      },
      {
        id: 'sd-5',
        title: 'HR & Recruitment',
        description: 'End-to-end talent acquisition, LinkedIn talent solutions, payroll management, and employee engagement frameworks.',
        badge: 'HR Tech',
        deliverables: ['Job description templates', 'ATS sourcing workflows', 'Compensation & benefits models']
      },
      {
        id: 'sd-6',
        title: 'Sales & Business Development',
        description: 'B2B consultative selling, objection handling, high-stakes negotiation, CRM pipeline management, and closing mastery.',
        badge: 'Revenue Track',
        deliverables: ['Cold outreach battlecards', 'Pitch deck execution', 'CRM pipeline blueprints']
      },
      {
        id: 'sd-7',
        title: 'Communication Skills',
        description: 'Professional email etiquette, boardroom presentations, cross-cultural diplomacy, and executive articulation.',
        badge: 'Foundational',
        deliverables: ['Speech recording reviews', 'Executive correspondence kit', 'Persuasion techniques']
      },
      {
        id: 'sd-8',
        title: 'Soft Skills',
        description: 'Critical thinking, emotional intelligence, time management, active listening, and conflict resolution.',
        badge: 'Workplace EQ',
        deliverables: ['Behavioral roleplays', 'Peer feedback evaluations', 'Workplace ethics certification']
      },
      {
        id: 'sd-9',
        title: 'AI & Productivity Tools',
        description: 'Leveraging Generative AI, prompt engineering, Notion, automate workflows, and Gemini/GPT tools for 10x office speed.',
        badge: 'Future-Ready',
        deliverables: ['AI prompt library', 'Workflow automation recipes', 'Productivity dashboard']
      },
      {
        id: 'sd-10',
        title: 'Interview & Employability Skills',
        description: 'Aptitude test preparation, group discussion tactics, technical drilldowns, and salary negotiation strategies.',
        badge: 'Placement Edge',
        deliverables: ['Video interview analysis', 'GD performance scorecard', 'Negotiation script playbook']
      }
    ],
    outcomes: [
      'Master industry tools including PowerBI, SQL, Meta Ads, Jira, and GenAI',
      'Build a demonstrable GitHub / Notion portfolio of real-world projects',
      'Receive industry-recognized certification verified by corporate hiring managers',
      'Accelerate your employability quotient by over 300%'
    ],
    processSteps: [
      { step: 1, title: 'Skill Gap Audit', description: 'Assess current proficiencies against target job descriptions.' },
      { step: 2, title: 'Live Interactive Masterclasses', description: 'Learn directly from senior industry practitioners.' },
      { step: 3, title: 'Project Capstone', description: 'Build and deploy a real project reviewed by corporate mentors.' },
      { step: 4, title: 'Certification & Placement Handover', description: 'Earn your credential and transition seamlessly to our placement pipeline.' }
    ],
    faq: [
      {
        question: 'Do these courses accommodate college or work hours?',
        answer: 'Yes, our courses offer flexible weekend cohorts and evening weekday batches with lifetime access to recorded modules and mentor office hours.'
      }
    ]
  },
  {
    id: 'jobs-placement',
    numericCode: '03',
    title: 'Jobs & Placement',
    navTitle: 'Jobs & Placement',
    tagline: 'Direct Corporate Connect, ATS Optimization & Placement Guarantee',
    shortDesc: 'Comprehensive job placement assistance, ATS resume engineering, 1-on-1 mock interviews, and direct hiring partner referrals.',
    fullDesc: 'Ascend Career operates an active corporate recruitment division partnering with 500+ companies including top startups, MNCs, and domestic enterprises. We transform candidates into hireable professionals through rigorous profile grooming, mock technical rounds, and direct hiring pipelines.',
    badge: 'Place • Launch',
    icon3D: '03',
    lucideIcon: 'Briefcase',
    accentColor: 'blue',
    accentHex: '#3b82f6',
    targetAudience: ['Final year students', 'Fresh graduates', 'Professionals actively seeking career jumps', 'Laid-off professionals'],
    subServices: [
      {
        id: 'jp-1',
        title: 'Job Placement Assistance',
        description: 'End-to-end recruitment lifecycle backing, ensuring guaranteed interviews with verified corporate hiring partners.',
        badge: 'Placement Core',
        deliverables: ['Direct interview opportunities', 'Recruiter intro letters', 'Status tracking board']
      },
      {
        id: 'jp-2',
        title: 'Resume Building',
        description: 'Impact-driven resume crafting emphasizing quantifiable achievements, leadership outcomes, and executive layout.',
        badge: 'High Impact',
        deliverables: ['Custom professional resume', 'Executive summary copy', 'Editable source files']
      },
      {
        id: 'jp-3',
        title: 'ATS Resume Optimization',
        description: 'Targeted keyword density engineering ensuring your resume scores 90%+ on Workday, Taleo, Greenhouse, and Lever.',
        badge: 'Tech-Driven',
        deliverables: ['ATS score breakdown report', 'Target keyword list', 'Keyword-injected doc format']
      },
      {
        id: 'jp-4',
        title: 'Mock Interviews',
        description: 'Simulated technical, HR, and behavioral interviews conducted by industry leaders currently working in tier-1 companies.',
        badge: 'Realistic Drills',
        deliverables: ['Full recorded mock session', 'Rubric scoring on 12 parameters', 'Remedial action plan']
      },
      {
        id: 'jp-5',
        title: 'Interview Preparation',
        description: 'Structured coaching for STAR technique, behavioral responses, case studies, and salary negotiation tactics.',
        badge: 'Preparation',
        deliverables: ['STAR method cheatsheet', 'Company research dossiers', 'Salary benchmark guide']
      },
      {
        id: 'jp-6',
        title: 'Job Matching',
        description: 'Curated profile alignment matching your strengths and compensation expectations to tailored job roles.',
        badge: 'Targeted',
        deliverables: ['Curated job openings list', 'Fitment percentage rating', 'Hiring manager contact points']
      },
      {
        id: 'jp-7',
        title: 'Employer Connect',
        description: 'Exclusive networking drives, virtual campus hiring summits, and direct pitch opportunities with talent heads.',
        badge: 'Direct Connect',
        deliverables: ['Exclusive hiring drive access', 'Direct HR introductions', 'Expedited interview slots']
      },
      {
        id: 'jp-8',
        title: 'Hire • Train • Deploy',
        description: 'Specialized enterprise hiring model where candidates are selected, trained on client tech stack, and deployed on Day 1.',
        badge: 'Enterprise Model',
        deliverables: ['Letter of Intent (LOI)', 'Custom client training curriculum', 'Immediate corporate deployment']
      }
    ],
    outcomes: [
      'Gain direct access to unadvertised positions across our corporate network',
      'Boost resume shortlist rates from <5% to over 65% with ATS optimization',
      'Master difficult behavioral and technical interview questions with confidence',
      'Negotiate industry-competitive salary packages with guidance'
    ],
    processSteps: [
      { step: 1, title: 'Profile Overhaul', description: 'Re-engineer resume, LinkedIn profile, and GitHub/portfolio for ATS compliance.' },
      { step: 2, title: 'Mock Simulation', description: 'Undergo 2 rigorous mock interviews with domain directors.' },
      { step: 3, title: 'Recruiter Matching', description: 'Profile forwarded to relevant hiring managers in our network.' },
      { step: 4, title: 'Offer & Deployment', description: 'Support through final offer negotiations and onboarding formalities.' }
    ],
    faq: [
      {
        question: 'What is the Hire • Train • Deploy model?',
        answer: 'Corporate clients partner with Ascend Career with specific job requirements. We pre-screen candidates, train them on the exact tools and technologies requested by the employer, and deploy them directly upon completion.'
      }
    ]
  },
  {
    id: 'study-abroad',
    numericCode: '04',
    title: 'Study Abroad',
    navTitle: 'Study Abroad',
    tagline: 'End-to-End International Admissions Across Italy, US, Canada, Australia & Europe',
    shortDesc: 'Comprehensive international education consultancy covering university selection, SOP/LOR guidance, scholarships, visas, and pre-departure.',
    fullDesc: 'Expand your horizons with world-class global education. Ascend Career’s Study Abroad division provides seamless international guidance for undergraduate, postgraduate, and doctoral degrees across 22+ countries. From Ivy League institutions to affordable European programs in Italy, we stand with you at every step.',
    badge: 'Global • Explore',
    icon3D: '04',
    lucideIcon: 'Globe2',
    accentColor: 'indigo',
    accentHex: '#6366f1',
    targetAudience: ['Aspirants for Masters / MBA abroad', 'High schoolers aiming for Ivy League / global bachelors', 'Working professionals seeking international migration'],
    subServices: [
      {
        id: 'sa-1',
        title: 'Study Abroad Counselling',
        description: 'Holistic evaluation of academic transcripts, career goals, budget constraints, and post-study work visa aspirations.',
        badge: 'Advisory Core',
        deliverables: ['Country feasibility breakdown', 'Budget calculation sheet', 'ROI evaluation across destinations']
      },
      {
        id: 'sa-2',
        title: 'Country & University Selection',
        description: 'Data-driven curation of Dream, Reach, and Safe universities in Italy, USA, Canada, Ireland, and Australia.',
        badge: 'Strategic Matching',
        deliverables: ['8-12 Tailored universities matrix', 'Rankings and employment statistics', 'Deadline tracker']
      },
      {
        id: 'sa-3',
        title: 'Application Assistance',
        description: 'Flawless execution of portal submissions, document verification, fee waivers, and institutional compliance.',
        badge: 'Admissions',
        deliverables: ['Form-filling quality assurance', 'Fee waiver application codes', 'Submission receipts']
      },
      {
        id: 'sa-4',
        title: 'SOP & LOR Guidance',
        description: 'World-class creative drafting and review of Statement of Purpose, Letters of Recommendation, and diversity essays.',
        badge: 'Editorial Edge',
        deliverables: ['Custom SOP refinement', 'Academic & professional LOR drafts', 'Faculty proofreading']
      },
      {
        id: 'sa-5',
        title: 'Scholarship Assistance',
        description: 'Proactive scouting and application for merit-based, need-based, and government international scholarship grants.',
        badge: 'Financial Aid',
        deliverables: ['Global scholarship catalog', 'Essay drafting for grants', 'Institutional funding appeal letters']
      },
      {
        id: 'sa-6',
        title: 'Education Loan Guidance',
        description: 'Securing collateral and non-collateral education loans with top nationalized, private, and NBFC banking partners.',
        badge: 'Banking Support',
        deliverables: ['Comparative interest rate charts', 'Sanction letter facilitation', 'Tax benefit (80E) guidance']
      },
      {
        id: 'sa-7',
        title: 'Visa Documentation',
        description: 'Meticulous verification of I-20, CAS, financial proofs, sponsorship affidavits, and consulate documentation.',
        badge: 'Documentation',
        deliverables: ['Comprehensive visa dossier', 'CA-certified net worth reports', 'Embassy checklist validation']
      },
      {
        id: 'sa-8',
        title: 'Visa Interview Preparation',
        description: 'One-on-one mock visa interviews replicating US F1 and Schengen / Italian consulate interviews.',
        badge: 'Mock Consular',
        deliverables: ['2 Mock interview sessions', 'Tough question answer scripts', 'Confidence assessment']
      },
      {
        id: 'sa-9',
        title: 'Pre-Departure Guidance',
        description: 'Crucial briefing on currency exchange, international SIM cards, student accommodation, and campus arrival.',
        badge: 'Relocation Support',
        deliverables: ['Pre-departure handbook', 'Alumni network connect', 'Flight booking & baggage advisory']
      }
    ],
    outcomes: [
      'Attain admits from top QS-ranked universities with maximized scholarship aid',
      'Maintain a 98.4% visa approval record through stringent documentation audits',
      'Secure collateral-free education loans at competitive international rates',
      'Connect with Ascend Career alumni already studying in your target city'
    ],
    processSteps: [
      { step: 1, title: 'Profile Appraisal & Country Match', description: 'Assess GRE/GMAT/IELTS/TOEFL scores, academics, and budget.' },
      { step: 2, title: 'Document Drafting', description: 'Craft exceptional SOPs, LORs, and personal statements with our editors.' },
      { step: 3, title: 'Application & Scholarship Filing', description: 'Submit applications directly through university partner portals.' },
      { step: 4, title: 'Visa & Departure', description: 'Complete mock visa interviews, loan sanctions, and pre-departure briefings.' }
    ],
    faq: [
      {
        question: 'Which countries are currently best for post-study work visas?',
        answer: 'Italy, Ireland, Australia, and Canada provide prominent post-study work pathways, while the US remains the premier destination for STEM OPT extensions (up to 3 years).'
      }
    ]
  },
  {
    id: 'study-in-india',
    numericCode: '05',
    title: 'Study in India',
    navTitle: 'Study in India',
    tagline: 'Premier Higher Education Admissions Across Top Indian Universities',
    shortDesc: 'Strategic guidance for UG & PG admissions, entrance counseling, institutional selection, scholarship programs, and loan facilitation in India.',
    fullDesc: 'India’s higher education landscape is experiencing unprecedented growth with world-class central universities, private research hubs, and specialized institutes. Ascend Career guides students through competitive admissions for Engineering, Medical, Law, Management, Architecture, and Liberal Arts programs nationwide.',
    badge: 'India • Admissions',
    icon3D: '05',
    lucideIcon: 'GraduationCap',
    accentColor: 'amber',
    accentHex: '#f59e0b',
    targetAudience: ['Class 12th students targeting UG admissions', 'Graduates targeting CAT, XAT, CUET PG, GATE', 'Parents seeking recognized Indian universities'],
    subServices: [
      {
        id: 'sii-1',
        title: 'UG Admissions',
        description: 'End-to-end guidance for B.Tech, MBBS, BBA, Law (CLAT/AILET), Design (NID/NIFT), and Liberal Arts programs.',
        badge: 'Undergraduate',
        deliverables: ['Entrance exam milestone calendar', 'Eligibility benchmark audit', 'Application assistance']
      },
      {
        id: 'sii-2',
        title: 'PG Admissions',
        description: 'Strategic counseling for MBA/PGDM, M.Tech, MCA, and specialized executive master degree programs.',
        badge: 'Postgraduate',
        deliverables: ['B-School ROI comparison', 'Specialization mapping (Fin/Ops/Mktg/Analytics)', 'GD/PI preparation']
      },
      {
        id: 'sii-3',
        title: 'College & University Selection',
        description: 'Unbiased institutional comparisons based on NIRF rankings, NAAC grades, faculty pedigree, and real placement records.',
        badge: 'Audit & Selection',
        deliverables: ['Verified college rankings dossier', 'Placement stats fact-check report', 'Campus facility scorecard']
      },
      {
        id: 'sii-4',
        title: 'Admission Support',
        description: 'Direct counseling, seat allocation protocol guidance, management/NRI quota assistance, and document vetting.',
        badge: 'Direct Support',
        deliverables: ['Counseling choice filling support', 'Document checklist validation', 'Spot round advisory']
      },
      {
        id: 'sii-5',
        title: 'Scholarship Guidance',
        description: 'Facilitating central, state government, and private university merit-cum-means scholarship opportunities.',
        badge: 'Financial Aid',
        deliverables: ['National scholarship portal navigation', 'Merit fee waiver applications', 'Category concession support']
      },
      {
        id: 'sii-6',
        title: 'Education Loan Guidance',
        description: 'Streamlined loan sanctions through SBI, HDFC Credila, Axis Bank, and Vidya Lakshmi government portal.',
        badge: 'Banking Support',
        deliverables: ['Vidya Lakshmi registration help', 'Fast-track bank branch coordination', 'Interest subsidy calculation']
      }
    ],
    outcomes: [
      'Unbiased recommendation of UGC/AICTE approved universities',
      'Maximize cut-off conversion during centralized counseling rounds',
      'Verify authentic campus placement statistics and prevent false marketing traps',
      'Secure timely education loan approvals without unnecessary branch visits'
    ],
    processSteps: [
      { step: 1, title: 'Academic Assessment', description: 'Review Class 10/12/UG marks, entrance scores, and family preferences.' },
      { step: 2, title: 'College Shortlisting', description: 'Filter institutes using our verified database on accreditation and placements.' },
      { step: 3, title: 'Counseling & Choice Locking', description: 'Expert guidance during critical online counseling rounds to secure top seats.' },
      { step: 4, title: 'Admission & Funding', description: 'Facilitate fee payment, scholarship sanction, and education loan approval.' }
    ],
    faq: [
      {
        question: 'Do you help with Centralized Counseling like JEE, NEET, CUET, and state counseling?',
        answer: 'Yes, our counselors provide seat allotment guidance, priority choice filling, and spot round navigation for major national and state admission rounds.'
      }
    ]
  },
  {
    id: 'school-college-programs',
    numericCode: '06',
    title: 'School & College Programs',
    navTitle: 'School & College Programs',
    tagline: 'Institutional Partnerships Empowering Campuses with Career Hubs',
    shortDesc: 'Campus-wide career awareness drives, psychometric testing camps, employability bootcamps, and institutional placement programs.',
    fullDesc: 'Ascend Career acts as an institutional career enablement partner for schools, colleges, and university departments. We set up in-campus career centers, conduct bulk diagnostic assessments, organize industry bootcamps, and facilitate high-volume campus placement drives.',
    badge: 'Campus • Scale',
    icon3D: '06',
    lucideIcon: 'School',
    accentColor: 'emerald',
    accentHex: '#10b981',
    targetAudience: ['School Principals & Counselors', 'College Deans & Placement Officers (TPOs)', 'University Trust Boards & Trustees'],
    subServices: [
      {
        id: 'scp-1',
        title: 'Career Awareness Programs',
        description: 'Interactive seminars introducing students to 100+ modern career opportunities, emerging tech, and future occupations.',
        badge: 'Keynote & Seminars',
        deliverables: ['Full-school auditorium keynotes', 'Career handbook distribution', 'Q&A session with industry speakers']
      },
      {
        id: 'scp-2',
        title: 'Career Counselling Camps',
        description: 'Dedicated multi-day on-campus clinics offering personalized consultations to students and parents under one roof.',
        badge: 'On-Campus Clinic',
        deliverables: ['Dedicated counselor booths', 'Individual student consultation summaries', 'Parent satisfaction audit']
      },
      {
        id: 'scp-3',
        title: 'Assessment Drives',
        description: 'Institutional-scale psychometric, cognitive, and aptitude testing with school-level administrative benchmarking.',
        badge: 'Large-Scale Testing',
        deliverables: ['Batch analytics report for principals', 'Student-wise PDF scorecards', 'High-potential student tagging']
      },
      {
        id: 'scp-4',
        title: 'Employability Workshops',
        description: 'Intensive weekend bootcamps covering resume writing, LinkedIn optimization, GDs, and professional workplace conduct.',
        badge: 'Skills Bootcamps',
        deliverables: ['Hands-on workshop handouts', 'Mock drill performance report', 'Student completion certificates']
      },
      {
        id: 'scp-5',
        title: 'Skill Development Programs',
        description: 'Credit-aligned or add-on semester courses in Digital Marketing, Business Analytics, and Generative AI.',
        badge: 'Curriculum Integration',
        deliverables: ['Semester syllabus design', 'LMS portal access', 'Certified faculty instructors']
      },
      {
        id: 'scp-6',
        title: 'Campus Placement Programs',
        description: 'Inviting corporate recruiters, organizing pooled campus drives, and managing the end-to-end recruitment logistics.',
        badge: 'Placement Drives',
        deliverables: ['Corporate recruiter invitation drive', 'Drive coordination & test administration', 'Final hire placement report']
      }
    ],
    outcomes: [
      'Elevate institutional reputation and admissions attractiveness with structured career support',
      'Equip TPOs with seasoned industry connections and ready placement pipelines',
      'Provide students with institutional access to psychometric assessments at subsidized rates',
      'Bridge the gap between academic theory and corporate hiring requirements'
    ],
    processSteps: [
      { step: 1, title: 'Institutional Diagnostic', description: 'Assess campus student demographic, current placement status, and goals.' },
      { step: 2, title: 'Program Customization', description: 'Curate seminars, testing schedules, and trainer deployment.' },
      { step: 3, title: 'Campus Rollout', description: 'Deliver on-site workshops, psychometric camps, or recruiter drives.' },
      { step: 4, title: 'Impact Evaluation', description: 'Submit comprehensive administrative analytics dossiers to campus leadership.' }
    ],
    faq: [
      {
        question: 'Can programs be customized to our school or college academic calendar?',
        answer: 'Yes, we tailor program schedules around exams, vacations, and semester milestones to ensure zero disruption to core academic classes.'
      }
    ]
  },
  {
    id: 'corporate-training',
    numericCode: '07',
    title: 'Corporate Training & HR Solutions',
    navTitle: 'Corporate Training & HR Solutions',
    tagline: 'Strategic Enterprise Upskilling & Talent Acquisition Solutions',
    shortDesc: 'Corporate training, leadership acceleration, sales mastery, campus-to-corporate onboarding, and specialized recruitment & staffing.',
    fullDesc: 'Empowering organizations to stay competitive in a rapidly evolving business climate. Ascend Career’s Corporate Training & HR Solutions division delivers custom employee upskilling, leadership development, frontline sales enablement, and end-to-end recruitment & executive search.',
    badge: 'Enterprise • HR',
    icon3D: '07',
    lucideIcon: 'Building2',
    accentColor: 'rose',
    accentHex: '#f43f5e',
    targetAudience: ['Chief Human Resource Officers (CHROs)', 'L&D Directors & Managers', 'Founders & Business Unit Heads'],
    subServices: [
      {
        id: 'ct-1',
        title: 'Corporate Training',
        description: 'Customized capability building programs tailored to organizational KPI improvements and domain proficiencies.',
        badge: 'Enterprise Core',
        deliverables: ['Custom training modules', 'Pre/Post training evaluation metrics', 'Leadership feedback report']
      },
      {
        id: 'ct-2',
        title: 'Employee Upskilling',
        description: 'Continuous professional development in AI workflows, cloud fundamentals, advanced data analytics, and modern toolsets.',
        badge: 'Tech & Modernization',
        deliverables: ['Upskilling certification', 'Practical lab access', 'Performance improvement tracking']
      },
      {
        id: 'ct-3',
        title: 'Leadership Development',
        description: 'Executive coaching, strategic decision-making, emotional intelligence, and change management for middle and senior leaders.',
        badge: 'Executive Coaching',
        deliverables: ['360-degree feedback assessment', '1-on-1 executive coaching notes', 'Leadership action projects']
      },
      {
        id: 'ct-4',
        title: 'Sales Training',
        description: 'High-velocity sales enablement, consultative solution selling, objection handling, and enterprise deal negotiation.',
        badge: 'Revenue Accelerator',
        deliverables: ['Enterprise sales playbook', 'Recorded call reviews', 'Conversion optimization framework']
      },
      {
        id: 'ct-5',
        title: 'Campus-to-Corporate Programs',
        description: 'Transforming fresh campus hires into productive corporate contributors through business etiquette and mindset bootcamps.',
        badge: 'Onboarding Track',
        deliverables: ['2-Week induction bootcamp', 'Workplace culture transition toolkit', 'Manager readiness checklist']
      },
      {
        id: 'ct-6',
        title: 'Recruitment & Staffing',
        description: 'Contract, permanent, and executive search staffing services across IT, BFSI, Healthcare, FMCG, and Consulting sectors.',
        badge: 'Talent Acquisition',
        deliverables: ['Pre-screened candidate shortlists', 'Background verification audits', 'Onboarding coordination']
      }
    ],
    outcomes: [
      'Accelerate time-to-productivity for lateral and fresh campus recruits',
      'Increase frontline sales conversion and deal sizes with consultative frameworks',
      'Retain top talent by establishing defined internal growth and upskilling paths',
      'Access pre-vetted, highly qualified talent pools for niche job requisitions'
    ],
    processSteps: [
      { step: 1, title: 'Needs Analysis (TNA)', description: 'Conduct Training Needs Analysis with business unit leaders to pinpoint performance gaps.' },
      { step: 2, title: 'Instructional Design', description: 'Build enterprise-grade curriculum using contextual real-world scenarios.' },
      { step: 3, title: 'Program Delivery', description: 'Engage teams through interactive workshops, case simulations, and roleplays.' },
      { step: 4, title: 'ROI Assessment', description: 'Measure impact against Kirkpatrick’s 4 levels of training evaluation.' }
    ],
    faq: [
      {
        question: 'Do you offer both virtual and on-premise corporate delivery?',
        answer: 'Yes, we deliver pan-India on-premise bootcamps at your office or offsite venues, as well as live instructor-led virtual training modules.'
      }
    ]
  },
  {
    id: 'graphic-design',
    numericCode: '08',
    title: 'Graphic Design & Creative Studio',
    navTitle: 'Graphic Design',
    tagline: 'Distinctive Brand Identities, Strategic UI/UX & High-Impact Visuals',
    shortDesc: 'Bespoke branding systems, digital marketing assets, investor pitch decks, UI/UX prototyping, and packaging design that captivates audiences.',
    fullDesc: 'Our creative graphic design team turns strategic vision into indelible visual experiences. We forge comprehensive brand identity systems, high-converting digital advertising graphics, responsive UI/UX interfaces in Figma, investor-ready presentation decks, and physical print packaging that commands immediate market authority.',
    badge: 'Brand • UI/UX • Creative',
    icon3D: '08',
    lucideIcon: 'Palette',
    accentColor: 'amber',
    accentHex: '#f59e0b',
    targetAudience: ['Emerging Startups', 'Established Corporate Brands', 'Product Teams & Founders', 'Marketing & Growth Agencies'],
    subServices: [
      {
        id: 'gd-1',
        title: 'Brand Identity & Logo Systems',
        description: 'Complete visual identity kits, memorable logo marks, distinctive color palettes, and typographic hierarchies that stand out.',
        badge: 'Brand Core',
        deliverables: ['Primary & secondary logo vector suites', 'Comprehensive brand guideline manual', 'Color palette & typography specs']
      },
      {
        id: 'gd-2',
        title: 'UI/UX App & Web Product Design',
        description: 'Human-centric user experience architectures and pixel-perfect user interfaces designed in Figma with comprehensive design systems.',
        badge: 'Product UI/UX',
        deliverables: ['Figma design system & auto-layout components', 'Interactive clickable prototypes', 'Developer handoff documentation']
      },
      {
        id: 'gd-3',
        title: 'Investor Pitch Decks & Presentations',
        description: 'Persuasive executive pitch decks tailored for venture capital pitches, client proposals, and board-level presentations.',
        badge: 'Executive Decks',
        deliverables: ['Custom 15-20 slide master deck', 'Infographic & financial data visualization', 'Editable PPTX, Keynote & PDF files']
      },
      {
        id: 'gd-4',
        title: 'Social Media & Performance Ad Creatives',
        description: 'Scroll-stopping creative campaign assets engineered for Meta, LinkedIn, Google Display, and Instagram advertising.',
        badge: 'Ad Performance',
        deliverables: ['Multi-format banner sets (1:1, 9:16, 16:9)', 'A/B testing visual variants', 'Template library for in-house teams']
      },
      {
        id: 'gd-5',
        title: 'Marketing Collateral & Print Media',
        description: 'Tangible brand materials including corporate brochures, exhibition booths, stationery, business cards, and sales flyers.',
        badge: 'Print & Events',
        deliverables: ['Print-ready CMYK PDFs with crop marks', 'Custom corporate stationery suite', 'Tri-fold brochures & catalog layouts']
      },
      {
        id: 'gd-6',
        title: 'Packaging & Product Label Design',
        description: 'Distinctive retail packaging and container label concepts engineered to capture customer attention on store shelves.',
        badge: 'Packaging',
        deliverables: ['Dieline vector files & 3D mockups', 'Compliance & ingredient layout styling', 'Vendor-ready print specifications']
      }
    ],
    outcomes: [
      'Distinctive brand positioning that establishes instant credibility and recognition',
      'Higher conversion rates across digital advertising, landing pages, and marketing campaigns',
      'Complete Figma design systems and production-ready brand style guides for your team',
      'Cohesive visual consistency across all physical and digital customer touchpoints'
    ],
    processSteps: [
      { step: 1, title: 'Brand Discovery & Moodboarding', description: 'Analyze your target market, competitors, and core values to formulate a creative visual direction.' },
      { step: 2, title: 'Concept Ideation & Vector Sketches', description: 'Explore multiple unique design concepts, typographic pairings, and color harmonies.' },
      { step: 3, title: 'Refinement & Design System Building', description: 'Refine chosen directions into complete design components, iconography, and asset variations.' },
      { step: 4, title: 'Production Delivery & Brand Toolkit', description: 'Package vector files (AI, EPS, SVG), editable Figma kits, font licenses, and brand manuals.' }
    ],
    faq: [
      {
        question: 'What source files will our team receive upon project delivery?',
        answer: 'You will receive full intellectual property ownership and all production-ready files including vector AI, EPS, SVG, editable Figma files, high-res PNG/JPG, and print-ready PDF formats.'
      },
      {
        question: 'Can you design a complete UI/UX design system for our developers to build?',
        answer: 'Yes! We create robust Figma design systems utilizing modern tokens, variables, auto-layout components, and detailed developer handoff specs so your engineering team can build with precision.'
      }
    ]
  },
  {
    id: 'web-services',
    numericCode: '09',
    title: 'Web Services, Development & Maintenance',
    navTitle: 'Web Services & Maintenance',
    tagline: 'High-Performance Web Platforms, Custom SaaS & 24/7 Continuous Maintenance',
    shortDesc: 'End-to-end engineering of responsive websites, enterprise web apps, e-commerce storefronts, and cloud-native solutions with dedicated maintenance SLAs.',
    fullDesc: 'From high-converting corporate portals and custom web applications to scalable SaaS platforms and headless e-commerce storefronts, our web engineering studio delivers lightning-fast, accessible, and SEO-optimized digital experiences backed by round-the-clock proactive maintenance and monitoring.',
    badge: 'Web • SaaS • Maintenance',
    icon3D: '09',
    lucideIcon: 'Code2',
    accentColor: 'cyan',
    accentHex: '#06b6d4',
    targetAudience: ['Startups & Scale-ups', 'Enterprises & Brands', 'E-Commerce Businesses', 'Educational Institutions & EdTech'],
    subServices: [
      {
        id: 'ws-1',
        title: 'Custom Web Apps & SaaS Development',
        description: 'Bespoke web applications built with modern frameworks (React, Next.js, Node.js, TypeScript) tailored to your workflows.',
        badge: 'Enterprise Stack',
        deliverables: ['Modular component architecture', 'State management & API integrations', 'Scalable database models']
      },
      {
        id: 'ws-2',
        title: 'Corporate & High-Converting Websites',
        description: 'Engaging, mobile-first business websites engineered to tell your story, generate qualified inbound leads, and establish authority.',
        badge: 'Growth Engine',
        deliverables: ['Custom bespoke UI design', 'PageSpeed 95+ Core Web Vitals optimization', 'Lead capture & CRM webhooks']
      },
      {
        id: 'ws-3',
        title: 'E-Commerce & Digital Storefronts',
        description: 'Robust e-commerce solutions with frictionless checkout experiences, payment gateways, and inventory management.',
        badge: 'E-Commerce',
        deliverables: ['Shopify / Custom store setup', 'Stripe / Razorpay multi-currency checkout', 'Automated order tracking system']
      },
      {
        id: 'ws-4',
        title: 'Headless CMS & Dynamic Portals',
        description: 'User-friendly content management systems empowering non-technical team members to manage content effortlessly.',
        badge: 'CMS Solutions',
        deliverables: ['Headless CMS architecture (Sanity / Strapi)', 'Intuitive editor dashboard', 'Role-based publishing workflows']
      },
      {
        id: 'ws-5',
        title: 'API Integration & Cloud Architecture',
        description: 'Connecting external systems, ERPs, CRMs, and payment gateways with secure cloud infrastructure on AWS and GCP.',
        badge: 'Cloud & DevOps',
        deliverables: ['RESTful & GraphQL API integration', 'Docker containerization & CI/CD pipeline', 'SSL & cloud security hardening']
      },
      {
        id: 'ws-6',
        title: 'Website Maintenance & Speed Optimization',
        description: 'Continuous monitoring, routine security audits, performance profiling, and proactive technical support with 99.9% uptime SLAs.',
        badge: '24/7 SLA Support',
        deliverables: ['Weekly security & dependency updates', 'Real-time uptime monitoring (99.9%)', 'Monthly performance & traffic audits']
      }
    ],
    outcomes: [
      'Sub-second page load speeds adhering to Google Core Web Vitals guidelines',
      'Scalable, modular codebases designed to seamlessly handle high traffic spikes',
      'Proactive SLA-backed maintenance and round-the-clock vulnerability monitoring',
      'Flawless responsive behavior across desktop, tablet, and mobile browsers'
    ],
    processSteps: [
      { step: 1, title: 'Requirement Discovery & Tech Blueprint', description: 'Analyze business objectives, define user stories, and select the optimal modern technology stack.' },
      { step: 2, title: 'UI/UX Prototyping & System Architecture', description: 'Design interactive high-fidelity wireframes and establish secure database and API schemas.' },
      { step: 3, title: 'Agile Full-Stack Engineering & QA', description: 'Develop in bi-weekly milestones with continuous integration, cross-device testing, and client review.' },
      { step: 4, title: 'Production Launch & 24/7 Maintenance', description: 'Deploy to high-speed cloud infrastructure, conduct SEO indexing, and activate round-the-clock maintenance monitoring.' }
    ],
    faq: [
      {
        question: 'What modern technologies and frameworks do your engineers utilize?',
        answer: 'We specialize in React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, Python, PostgreSQL, MongoDB, GraphQL, and modern headless CMS platforms like Sanity and Strapi.'
      },
      {
        question: 'Do you provide web hosting and ongoing maintenance after launch?',
        answer: 'Yes! We configure production cloud deployments on Vercel, AWS, or Google Cloud, along with dedicated ongoing maintenance, security updates, and performance optimization packages.'
      }
    ]
  }
];
