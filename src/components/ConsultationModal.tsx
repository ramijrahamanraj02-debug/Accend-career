import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ServiceId, ServiceVertical } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceVertical[];
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  services,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || services[0]?.id || 'career-guidance'
  );
  const [mode, setMode] = useState<'Online Video Session' | 'In-Person Counselling' | 'Phone Assessment'>('Online Video Session');
  const [date, setDate] = useState<string>('Tomorrow, 3:00 PM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academicLevel, setAcademicLevel] = useState('College Graduate / Job Seeker');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ASC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  const currentServiceObj = services.find((s) => s.id === selectedService);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0d1527] border border-teal-500/30 shadow-[0_25px_60px_-15px_rgba(20,184,166,0.35)] overflow-hidden text-slate-200">
        {/* Top Glow Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Book a Consultation</h3>
              <p className="text-xs text-slate-400">1-to-1 Advisory with Senior Mentors</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {isBooked ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-4 border border-teal-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Consultation Confirmed!</h4>
              <p className="text-xs font-mono text-teal-400 mt-1 uppercase tracking-widest font-bold">
                REFERENCE: {bookingRef}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Service Area:</span>
                  <span className="font-semibold text-white">{currentServiceObj?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mode:</span>
                  <span className="font-semibold text-teal-400">{mode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Preferred Slot:</span>
                  <span className="font-semibold text-white">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Candidate:</span>
                  <span className="font-semibold text-white">{name} ({phone})</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                A calendar invitation link and WhatsApp briefing have been sent to <strong>{email}</strong>. Our counselor will connect with you at your chosen time.
              </p>

              <button
                onClick={handleReset}
                className="mt-6 w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-teal-500/20 transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4" id="consultation-booking-form">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  1. Select Service Vertical *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-teal-400"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.numericCode}. {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  2. Consultation Delivery Mode *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Online Video Session', icon: Video, label: 'Video Call' },
                    { id: 'In-Person Counselling', icon: MapPin, label: 'At Center' },
                    { id: 'Phone Assessment', icon: Phone, label: 'Phone Call' }
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(m.id as any)}
                        className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                          mode === m.id
                            ? 'border-teal-400 bg-teal-500/10 text-teal-300 font-bold'
                            : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-[11px]">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slot Preference */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  3. Preferred Slot Timing *
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                >
                  <option value="Today (Urgent slot, within 3 hours)">Today (Urgent slot, within 3 hours)</option>
                  <option value="Tomorrow, 11:00 AM IST">Tomorrow, 11:00 AM IST</option>
                  <option value="Tomorrow, 3:00 PM IST">Tomorrow, 3:00 PM IST</option>
                  <option value="Tomorrow, 6:30 PM IST (Evening)">Tomorrow, 6:30 PM IST (Evening)</option>
                  <option value="Weekend Special Cohort (Saturday 11 AM)">Weekend Special Cohort (Saturday 11 AM)</option>
                </select>
              </div>

              {/* Candidate Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate / Parent Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="For invitation & assessment dossier delivery"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Current Profile / Stage
                </label>
                <select
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-teal-400"
                >
                  <option value="High School (Class 9-10 Stream Dilemma)">High School (Class 9-10 Stream Dilemma)</option>
                  <option value="Senior Secondary (Class 11-12 College Entrance)">Senior Secondary (Class 11-12 College Entrance)</option>
                  <option value="College Undergraduate / Final Year">College Undergraduate / Final Year</option>
                  <option value="College Graduate / Job Seeker">College Graduate / Job Seeker</option>
                  <option value="Working Professional Seeking Pivot">Working Professional Seeking Pivot</option>
                  <option value="Parent Booking on Behalf of Ward">Parent Booking on Behalf of Ward</option>
                  <option value="Institutional / Corporate Representative">Institutional / Corporate Representative</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-300 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2"
                  id="confirm-consultation-btn"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Free Consultation Booking</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
