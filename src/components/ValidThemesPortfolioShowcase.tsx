import React from 'react';
import { ExternalLink, Sparkles, ArrowRight, Code2, Palette, Globe2, Laptop } from 'lucide-react';
import { ServiceVertical } from '../types';

interface ValidThemesPortfolioShowcaseProps {
  onOpenConsultation: (serviceId?: string) => void;
  onSelectServiceById?: (id: string) => void;
}

export const ValidThemesPortfolioShowcase: React.FC<ValidThemesPortfolioShowcaseProps> = ({
  onOpenConsultation,
  onSelectServiceById
}) => {
  const projects = [
    {
      title: 'NexVibe B2B SaaS Cloud Platform',
      category: 'Web Services & Engineering',
      icon: Code2,
      accent: 'cyan',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind', 'PostgreSQL'],
      description: 'Engineered a high-performance customer dashboard with sub-second page loads, real-time analytics, and automated stripe billing.',
      metric: '38% Conversion Increase',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      serviceId: 'web-services'
    },
    {
      title: 'AuraCraft Luxury Brand Identity & UI System',
      category: 'Graphic Design & Creative',
      icon: Palette,
      accent: 'amber',
      tech: ['Figma', 'Brand Guidelines', 'Adobe CC', 'Design Tokens'],
      description: 'Crafted a bespoke visual identity, minimalist typography hierarchy, custom iconography, and retail packaging suite.',
      metric: 'Award-Winning Identity',
      imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      serviceId: 'graphic-design'
    },
    {
      title: 'Global University Admissions Engine',
      category: 'Web Development & Global Portal',
      icon: Globe2,
      accent: 'teal',
      tech: ['React', 'API Integration', 'Cloud Native', 'Tailwind'],
      description: 'Streamlined multi-country university profile evaluations, automated eligibility calculators, and secure scholarship document uploads.',
      metric: '10k+ Candidates Processed',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      serviceId: 'study-abroad'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050913] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" />
              <span>FEATURED CASE STUDIES & DELIVERABLES</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Selected Digital Projects & Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Explore how our multidisciplinary web engineering and creative design teams transform ideas into high-performing digital realities.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('web-services')}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-teal-500/20 transition-transform hover:scale-105 shrink-0 flex items-center gap-2 self-start md:self-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isCyan = project.accent === 'cyan';
            const isAmber = project.accent === 'amber';

            return (
              <div
                key={idx}
                className="group rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Project Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${
                        isCyan
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                          : isAmber
                          ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                          : 'bg-teal-950/80 text-teal-300 border-teal-500/40'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900/90 text-teal-400 border border-slate-700">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(project.serviceId)}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire About Similar Build</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
