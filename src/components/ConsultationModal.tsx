import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { ServiceVertical } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceVertical[];
  initialServiceId?: string;
}

export const CENTER_LOCATION =
  'Zam zam Layout, 6th Cross Rd, Shakti Nagar, Balaji Krupa Layout, Sri Balaji Krupa Layout, RK Hegde Nagar, Bengaluru, Karnataka 560077';

export const ADVISORY_PHONE = '+91 99019 99720';
export const ADVISORY_WHATSAPP_RAW = '919901999720';

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  services,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || services[0]?.id || 'career-guidance'
  );
  // Video call removed: only 'In-Person Counselling' (At Center) and 'Phone Assessment' (Phone Call)
  const [mode, setMode] = useState<'In-Person Counselling' | 'Phone Assessment'>('In-Person Counselling');
  const [date, setDate] = useState<string>('Tomorrow, 3:00 PM IST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [academicLevel, setAcademicLevel] = useState('College Graduate / Job Seeker');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const currentServiceObj = services.find((s) => s.id === selectedService);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ASC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);

    const modeLabel = mode === 'In-Person Counselling' ? 'At Center (In-Person Counselling)' : 'Phone Call (Phone Assessment)';
    const serviceTitle = currentServiceObj ? `#${currentServiceObj.numericCode} ${currentServiceObj.title}` : selectedService;

    // Structured message for WhatsApp
    const messageLines = [
      `*New Advisory Session Booking - Ascend Career*`,
      `----------------------------------------`,
      `*Booking Ref:* ${ref}`,
      `*Service Track:* ${serviceTitle}`,
      `*Delivery Mode:* ${modeLabel}`,
      mode === 'In-Person Counselling'
        ? `*Center Location:* ${CENTER_LOCATION}`
        : `*Direct Phone Line:* ${ADVISORY_PHONE}`,
      `*Preferred Slot:* ${date}`,
      `----------------------------------------`,
      `*Candidate Name:* ${name.trim()}`,
      `*Candidate Phone / WhatsApp:* ${phone.trim()}`,
      `*Email Address:* ${email.trim()}`,
      `*Profile / Stage:* ${academicLevel}`,
      `----------------------------------------`,
      `Sent from Ascend Career Web Portal`
    ];

    const fullMessage = messageLines.join('\n');
    const waLink = `https://wa.me/${ADVISORY_WHATSAPP_RAW}?text=${encodeURIComponent(fullMessage)}`;
    setWhatsappUrl(waLink);

    // Direct redirection to WhatsApp
    try {
      window.open(waLink, '_blank');
    } catch {
      window.location.href = waLink;
    }

    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 selection:bg-[#E5FE40] selection:text-[#0D0D0D]">
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#262626] cred-box-white overflow-hidden text-[#f2f2f2]">
        {/* Top Voltage Bar */}
        <div className="h-1.5 w-full bg-[#E5FE40]" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1F1F1F] bg-[#161616]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0D0D0D] border border-[#262626] flex items-center justify-center text-[#E5FE40]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight uppercase font-mono">Book Advisory Session</h3>
              <p className="text-[11px] font-mono text-[#8A8A8A]">Direct Booking & WhatsApp Confirmation ({ADVISORY_PHONE})</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#8A8A8A] hover:text-white hover:bg-[#1F1F1F] border border-transparent hover:border-[#333333] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 max-h-[82vh] overflow-y-auto">
          {isBooked ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-[#161616] text-[#E5FE40] flex items-center justify-center mx-auto mb-4 border border-[#262626] cred-box-dark">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Advisory Request Transmitted</h4>
              <p className="text-xs font-mono text-[#E5FE40] mt-1 uppercase tracking-widest font-bold">
                REF // {bookingRef}
              </p>

              <div className="mt-5 p-4 bg-[#161616] border border-[#262626] cred-box-dark text-left text-xs font-mono space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-[#8A8A8A]">Vertical:</span>
                  <span className="font-bold text-white">{currentServiceObj?.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8A8A]">Delivery Mode:</span>
                  <span className="font-bold text-[#E5FE40]">
                    {mode === 'In-Person Counselling' ? 'At Center (In-Person)' : 'Phone Call'}
                  </span>
                </div>
                {mode === 'In-Person Counselling' ? (
                  <div className="pt-2 border-t border-[#262626]">
                    <span className="text-[#8A8A8A] block mb-1">Center Location:</span>
                    <span className="text-white text-[11px] leading-relaxed block font-sans">
                      {CENTER_LOCATION}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between pt-2 border-t border-[#262626]">
                    <span className="text-[#8A8A8A]">Phone Line:</span>
                    <span className="font-bold text-white">{ADVISORY_PHONE}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#8A8A8A]">Slot:</span>
                  <span className="font-bold text-white">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A8A8A]">Client:</span>
                  <span className="font-bold text-white">{name} ({phone})</span>
                </div>
              </div>

              <p className="text-xs text-[#8A8A8A] mt-4 leading-relaxed font-light">
                Your advisory booking is routed directly to WhatsApp number <strong className="text-[#E5FE40] font-mono">{ADVISORY_PHONE}</strong>. Click below to continue in WhatsApp or call directly.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cred-box-dark shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat (+91 99019 99720)</span>
                  </a>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${ADVISORY_PHONE.replace(/\s+/g, '')}`}
                    className="py-3 bg-[#1F1F1F] hover:bg-[#282828] text-white border border-[#333333] font-mono text-xs uppercase font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E5FE40]" />
                    <span>Call Counselor</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="py-3 bg-[#E5FE40] hover:bg-[#d8f235] text-black font-mono text-xs uppercase font-bold cred-btn-tactile transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4" id="consultation-booking-form">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                  1. Service Vertical *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] text-white text-xs font-mono focus:outline-none focus:border-[#E5FE40]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      #{s.numericCode} {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Mode Selection: Video call option removed! */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                  2. Consultation Delivery Mode *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'In-Person Counselling', icon: MapPin, label: 'At Center', subtitle: 'Visit Our Bengaluru Center' },
                    { id: 'Phone Assessment', icon: Phone, label: 'Phone Call', subtitle: '+91 99019 99720' }
                  ].map((m) => {
                    const Icon = m.icon;
                    const isSelected = mode === m.id;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(m.id as any)}
                        className={`p-3 border text-left flex items-start gap-2.5 transition-all cursor-pointer font-mono ${
                          isSelected
                            ? 'border-[#E5FE40] bg-[#1F1F1F] text-[#E5FE40] font-bold cred-box-white'
                            : 'border-[#262626] bg-[#161616] text-[#8A8A8A] hover:border-[#333333]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-[#E5FE40]' : 'text-[#8A8A8A]'}`} />
                        <div>
                          <span className="text-xs uppercase block font-bold text-white">{m.label}</span>
                          <span className="text-[10px] text-[#8A8A8A] block font-sans mt-0.5">{m.subtitle}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Mode Detail Card */}
                {mode === 'In-Person Counselling' ? (
                  <div className="mt-3 p-3.5 bg-[#161616] border border-[#2E2E2E] text-xs">
                    <div className="flex items-start gap-2 text-white mb-1.5">
                      <MapPin className="w-4 h-4 text-[#E5FE40] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-xs uppercase text-[#E5FE40] block">
                          Center Location:
                        </span>
                        <p className="text-[11px] text-[#C4C4C4] leading-relaxed mt-1 font-sans">
                          {CENTER_LOCATION}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CENTER_LOCATION)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E5FE40] hover:underline mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ) : (
                  <div className="mt-3 p-3.5 bg-[#161616] border border-[#2E2E2E] text-xs">
                    <div className="flex items-start gap-2 text-white">
                      <Phone className="w-4 h-4 text-[#E5FE40] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-xs uppercase text-[#E5FE40] block">
                          Phone Call Line:
                        </span>
                        <p className="text-sm font-mono font-bold text-white mt-0.5">
                          {ADVISORY_PHONE}
                        </p>
                        <p className="text-[11px] text-[#8A8A8A] font-sans mt-0.5">
                          Our senior advisor will phone you directly at your specified slot time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slot Preference */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                  3. Preferred Slot Timing *
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#262626] text-white text-xs font-mono focus:outline-none focus:border-[#E5FE40]"
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
                  <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#161616] border border-[#262626] text-white text-xs font-mono placeholder-[#555555] focus:outline-none focus:border-[#E5FE40]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-[#161616] border border-[#262626] text-white text-xs font-mono placeholder-[#555555] focus:outline-none focus:border-[#E5FE40]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-[#161616] border border-[#262626] text-white text-xs font-mono placeholder-[#555555] focus:outline-none focus:border-[#E5FE40]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1">
                  Current Profile / Stage
                </label>
                <select
                  value={academicLevel}
                  onChange={(e) => setAcademicLevel(e.target.value)}
                  className="w-full px-3.5 py-2 bg-[#161616] border border-[#262626] text-white text-xs font-mono focus:outline-none focus:border-[#E5FE40]"
                >
                  <option value="High School (Class 9-10 Stream Dilemma)">High School (Class 9-10 Stream Dilemma)</option>
                  <option value="Senior Secondary (Class 11-12 College Entrance)">Senior Secondary (Class 11-12 College Entrance)</option>
                  <option value="College Undergraduate / Final Year">College Undergraduate / Final Year</option>
                  <option value="College Graduate / Job Seeker">College Graduate / Job Seeker</option>
                  <option value="Working Professional Seeking Pivot">Working Professional Seeking Pivot</option>
                  <option value="Startup Founder / Business Client (Web & Creative)">Startup Founder / Business Client (Web & Creative)</option>
                  <option value="Parent Booking on Behalf of Ward">Parent Booking on Behalf of Ward</option>
                  <option value="Institutional / Corporate Representative">Institutional / Corporate Representative</option>
                </select>
              </div>

              {/* Submit Button routing to WhatsApp */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold font-mono text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center justify-center gap-2 cursor-pointer hover:bg-[#d8f235]"
                  id="confirm-consultation-btn"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Confirm & Send to WhatsApp (+91 99019 99720)</span>
                </button>
                <p className="text-[10px] text-center text-[#8A8A8A] font-mono mt-2">
                  Submitting directly dispatches your briefing to WhatsApp +91 99019 99720
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
