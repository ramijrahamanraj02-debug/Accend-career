import React from 'react';
import {
  Film,
  Calendar,
  Users
} from 'lucide-react';
import { HumanStoryProfile } from '../data/humanStoryData';
import { AscendVideoPlayer } from './AscendVideoPlayer';

interface HumanStoryVisualizerProps {
  story: HumanStoryProfile;
  render3DElement?: () => React.ReactNode;
  initialMode?: 'photo' | 'video';
  onOpenConsultation?: () => void;
  className?: string;
  showPerspectiveTabs?: boolean;
}

export const HumanStoryVisualizer: React.FC<HumanStoryVisualizerProps> = ({
  story,
  onOpenConsultation,
  className = ''
}) => {
  return (
    <div
      className={`rounded-3xl bg-slate-900/90 border border-slate-800/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col justify-between ${className}`}
      id={`human-visualizer-${story.id}`}
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div>
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-teal-400 uppercase">
              AUTHENTIC HUMAN STORYTELLING
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Film className="w-3.5 h-3.5 text-teal-400" />
            <span>Advisory Video</span>
          </div>
        </div>

        {/* Advisory Video Display */}
        <div className="w-full mb-4">
          <AscendVideoPlayer
            src={story.videoClip.src}
            poster={story.heroPhoto?.url}
            title={story.videoClip.title}
            subtitle={story.videoClip.subtitle}
            badge={story.videoClip.badge}
            dialogue={story.videoClip.dialogue as any}
            autoPlay={true}
            loop={true}
            onOpenConsultation={onOpenConsultation}
            className="rounded-2xl shadow-xl border border-teal-500/20"
          />
        </div>

        {/* Mentor Credential & Quote Card */}
        {story.mentor && (
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={story.mentor.avatarUrl || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'}
                alt={story.mentor.name || 'Mentor'}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border-2 border-teal-400/80 shadow-md"
                style={{ objectPosition: 'center 15%' }}
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
                ✓
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-bold text-white text-sm sm:text-base">
                  {story.mentor.name}
                </h4>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono">
                  {story.mentor.role}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {story.mentor.experience || (story.mentor as any).credentials || 'Ascend Certified Faculty'}
              </p>
              {story.mentor.quote && (
                <p className="text-xs text-teal-300/90 italic mt-2 border-l-2 border-teal-500 pl-2">
                  "{story.mentor.quote}"
                </p>
              )}
            </div>
          </div>
        )}

        {/* Student Testimonial Box */}
        {(story.studentSuccess || (story as any).student) && (
          (() => {
            const student = story.studentSuccess || (story as any).student;
            const studentName = student?.studentName || student?.name || 'Ascend Scholar';
            const studentRole = student?.roleOrDestination || student?.placedRole || student?.batch || student?.metric || 'Program Graduate';
            const studentAvatar = student?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
            const studentQuote = student?.quote;

            return (
              <div className="mt-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={studentAvatar}
                    alt={studentName}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full object-cover border border-slate-700"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {studentName}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {studentRole}
                    </div>
                  </div>
                </div>
                {studentQuote && (
                  <p className="text-xs text-slate-300 italic">
                    "{studentQuote}"
                  </p>
                )}
              </div>
            );
          })()
        )}
      </div>

      {/* Action Footer */}
      {onOpenConsultation && (
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Users className="w-3.5 h-3.5 text-teal-400" />
            <span>Consultation Available</span>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-teal-500/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book 1-on-1 Guidance</span>
          </button>
        </div>
      )}
    </div>
  );
};
