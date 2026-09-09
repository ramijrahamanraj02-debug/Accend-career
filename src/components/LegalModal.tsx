import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: 'terms' | 'privacy';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'terms',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#0d1527] border border-slate-700 shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Ascend Career Legal Policy</h3>
              <p className="text-xs text-slate-400">Governance, Ethics & Privacy Standards</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'terms'
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'privacy'
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Privacy Policy
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          {activeTab === 'terms' ? (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Terms & Conditions</h4>
              <p className="text-xs text-slate-400">Last updated: September 2026</p>

              <div className="space-y-3">
                <h5 className="font-semibold text-teal-300">1. Nature of Advisory Services</h5>
                <p>
                  Ascend Career provides educational consulting, psychometric testing, skill development training, and corporate placement facilitation. While we maintain a high success track record across universities and hiring partners, final admissions and employment offers remain subject to the sole discretion of the respective universities and corporate employers.
                </p>

                <h5 className="font-semibold text-teal-300">2. Psychometric Diagnostic Validity</h5>
                <p>
                  All assessments are diagnostic benchmarks formulated to measure aptitudes, cognitive proficiencies, and personality characteristics. Reports are interpreted in conjunction with 1-to-1 certified counselor evaluations.
                </p>

                <h5 className="font-semibold text-teal-300">3. Fee Policies & Transparency</h5>
                <p>
                  All fees for counseling packages, certification cohorts, and institutional drives are stated upfront with zero hidden charges. Specific refund and batch rescheduling policies are outlined in individual service enrollments.
                </p>

                <h5 className="font-semibold text-teal-300">4. Intellectual Property</h5>
                <p>
                  All proprietary assessment questions, career roadmap templates, ATS optimization checklists, and training curricula remain the intellectual property of Ascend Career.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Privacy & Data Protection Policy</h4>
              <p className="text-xs text-slate-400">Last updated: September 2026</p>

              <div className="space-y-3">
                <h5 className="font-semibold text-teal-300">1. Data Confidentiality</h5>
                <p>
                  Ascend Career respects student and candidate privacy. All assessment scores, academic transcripts, resumes, and consultation notes are strictly confidential and stored under enterprise-grade encryption.
                </p>

                <h5 className="font-semibold text-teal-300">2. Sharing with Educational & Corporate Partners</h5>
                <p>
                  Candidate profiles, resumes, and credentials are ONLY forwarded to universities or verified corporate recruiters with the explicit informed consent of the candidate or legal guardian.
                </p>

                <h5 className="font-semibold text-teal-300">3. Non-Commercialization Guarantee</h5>
                <p>
                  We never sell, lease, or monetize user contact records, test data, or psychometric files to third-party telemarketers.
                </p>

                <h5 className="font-semibold text-teal-300">4. Data Deletion Requests</h5>
                <p>
                  Students and corporate partners may request full deletion of their diagnostic assessments and profile records at any time by emailing our privacy team.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
