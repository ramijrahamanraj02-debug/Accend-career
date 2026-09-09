import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { ServiceVertical } from '../types';

interface ContactViewProps {
  services: ServiceVertical[];
}

export const ContactView: React.FC<ContactViewProps> = ({ services }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceVertical: services[0]?.id || 'career-guidance',
    userType: 'Student',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Ascend</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We Are Ready to Guide Your Next Career Leap
          </h1>

          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Reach out to our centralized admission and counselling desk. We respond within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact info & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white">Central Helpdesk</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Toll-Free Helpline</span>
                  <a href="tel:+918001234567" className="text-sm font-bold text-white hover:text-teal-400 transition-colors">
                    +91 (800) 123-4567
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Official Inquiries</span>
                  <a href="mailto:admissions@ascendcareer.org" className="text-sm font-bold text-white hover:text-teal-400 transition-colors">
                    counselling@ascendcareer.org
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">admissions@ascendcareer.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Direct</span>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Chat on WhatsApp (+91 98765 43210)
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Instant counselor reply</p>
                </div>
              </div>
            </div>

            {/* Office Hubs */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4">Regional Center Hubs</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Bengaluru (Corporate HQ)</span>
                    <span className="text-slate-400">Indiranagar 100ft Road, Bengaluru, KA 560038</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Delhi NCR Center</span>
                    <span className="text-slate-400">Sector 62, Electronic City, Noida, UP 201309</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Mumbai & Kolkata Branches</span>
                    <span className="text-slate-400">BKC, Bandra East, Mumbai & Salt Lake Sector V, Kolkata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, <strong className="text-teal-400">{formData.name}</strong>. An Ascend Career advisor specializing in <strong className="text-teal-400">{services.find(s => s.id === formData.serviceVertical)?.title}</strong> has been notified and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-inquiry-form">
                  <h3 className="text-xl font-bold text-white">Send an Official Inquiry</h3>
                  <p className="text-xs text-slate-400 -mt-2 mb-4">
                    Fill in your details to receive customized curriculum or service breakdowns.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        I Am A...
                      </label>
                      <select
                        value={formData.userType}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400"
                      >
                        <option value="School Student (Class 9-12)">School Student (Class 9-12)</option>
                        <option value="College Graduate / Aspirant">College Graduate / Aspirant</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Parent">Parent</option>
                        <option value="School / College Representative">School / College Representative</option>
                        <option value="Corporate HR / L&D Head">Corporate HR / L&D Head</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Interested Service Vertical *
                    </label>
                    <select
                      value={formData.serviceVertical}
                      onChange={(e) => setFormData({ ...formData, serviceVertical: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-teal-400"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.numericCode}. {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message / Goal Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current stream, target college, career target, or organizational requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2"
                    id="submit-contact-form-btn"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
