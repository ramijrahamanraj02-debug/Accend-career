export type NavStructure = 'structure-1' | 'structure-2' | 'structure-3';

export type ActivePage = 'home' | 'services-hub' | 'service-detail' | 'about' | 'contact';

export type ServiceId =
  | 'career-guidance'
  | 'skill-development'
  | 'jobs-placement'
  | 'study-abroad'
  | 'study-in-india'
  | 'school-college-programs'
  | 'corporate-training';

export interface SubServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  deliverables?: string[];
}

export interface ServiceVertical {
  id: ServiceId;
  numericCode: string;
  title: string;
  navTitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  icon3D: string; // descriptive icon code
  lucideIcon: string;
  accentColor: string; // tailwind color class
  accentHex: string;
  targetAudience: string[];
  subServices: SubServiceItem[];
  outcomes: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  currentStatus: 'High School (9-12)' | 'College / Graduate' | 'Working Professional' | 'School / College Admin' | 'HR / Corporate';
  serviceVertical: ServiceId;
  preferredMode: 'Online Video Session' | 'In-Person Counselling' | 'Phone Assessment';
  datePreference: string;
  notes: string;
}
