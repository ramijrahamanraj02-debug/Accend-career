import React from 'react';
import {
  Compass,
  BookOpenCheck,
  Briefcase,
  Globe2,
  GraduationCap,
  School,
  Building2,
  Code2,
  Palette,
  LucideProps
} from 'lucide-react';
import { ServiceId } from '../types';

interface ServiceIconProps extends LucideProps {
  id: ServiceId;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ id, ...props }) => {
  switch (id) {
    case 'web-services':
      return <Code2 {...props} />;
    case 'graphic-design':
      return <Palette {...props} />;
    case 'career-guidance':
      return <Compass {...props} />;
    case 'skill-development':
      return <BookOpenCheck {...props} />;
    case 'jobs-placement':
      return <Briefcase {...props} />;
    case 'study-abroad':
      return <Globe2 {...props} />;
    case 'study-in-india':
      return <GraduationCap {...props} />;
    case 'school-college-programs':
      return <School {...props} />;
    case 'corporate-training':
      return <Building2 {...props} />;
    default:
      return <Compass {...props} />;
  }
};
