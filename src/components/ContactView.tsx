import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { ServiceVertical } from '../types';

interface ContactViewProps {
  services: ServiceVertical[];
}

export const CENTER_LOCATION =
  'Zam zam Layout, 6th Cross Rd, Shakti Nagar, Balaji Krupa Layout, Sri Balaji Krupa Layout, RK Hegde Nagar, Bengaluru, Karnataka 560077';
export const CONTACT_PHONE = '+91 99019 99720';
export const WHATSAPP_NUMBER = '919901999720';

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
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const currentService = services.find((s) => s.id === formData.serviceVertical);
    const serviceName = currentService ? `#${currentService.numericCode} ${currentService.title}` : formData.serviceVertical;

    const messageLines = [
      `*New Inquiry - Ascend Career*`,
      `----------------------------------------`,
      `*Full Name:* ${formData.name.trim()}`,
      `*Phone / WhatsApp:* ${formData.phone.trim()}`,
      `*Email Address:* ${formData.email.trim()}`,
      `*User Role:* ${formData.userType}`,
      `*Interested Vertical:* ${serviceName}`,
      formData.message.trim() ? `*Message / Goal:* ${formData.message.trim()}` : `*Message:* Interested in admission / course blueprint`,
      `*Center Location:* ${CENTER_LOCATION}`,
      `----------------------------------------`,
      `Sent via Ascend Career Contact Form`
    ];

    const waText = messageLines.join('\n');
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
    setWhatsappLink(waUrl);

    try {
      window.open(waUrl, '_blank');
    } catch {
      window.location.href = waUrl;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#f2f2f2] py-16 px-4 sm:px-6 lg:px-8 selection:bg-[#E5FE40] selection:text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            We Are Ready to Guide Your Next Career Leap
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] mt-4 leading-relaxed font-light">
            Directly connect with our centralized architecture and advisory command center. Instant response available via WhatsApp and helpline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact info & Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#161616] border border-[#262626] cred-box-dark space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight font-mono uppercase">Central Helpdesk</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#E5FE40] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8A8A8A] block uppercase font-bold">Helpline & Advisory Call</span>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="text-sm font-bold text-white hover:text-[#E5FE40] transition-colors font-mono">
                    {CONTACT_PHONE}
                  </a>
                  <p className="text-xs text-[#8A8A8A] mt-0.5 font-light">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#3BFFAD] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8A8A8A] block uppercase font-bold">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-[#3BFFAD] hover:underline transition-colors font-mono"
                  >
                    Chat on WhatsApp ({CONTACT_PHONE})
                  </a>
                  <p className="text-xs text-[#8A8A8A] mt-0.5 font-light">Instant counselor direct reply</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1F1F1F] border border-[#333333] flex items-center justify-center text-[#6A35FF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8A8A8A] block uppercase font-bold">Official Inquiries</span>
                  <a href="mailto:admissions@ascendcareer.org" className="text-sm font-bold text-white hover:text-[#6A35FF] transition-colors font-mono">
                    counselling@ascendcareer.org
                  </a>
                  <p className="text-xs text-[#8A8A8A] mt-0.5 font-light">admissions@ascendcareer.org</p>
                </div>
              </div>
            </div>

            {/* Office Hubs */}
            <div className="p-8 bg-[#161616] border border-[#262626] cred-box-dark">
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight font-mono uppercase">Center Hub Location</h3>

              <div className="space-y-4 text-xs text-[#8A8A8A]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E5FE40] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Bengaluru Center</span>
                    <p className="font-light text-white/90 leading-relaxed mt-1 text-xs">
                      {CENTER_LOCATION}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CENTER_LOCATION)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#E5FE40] hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#161616] border border-[#262626] cred-box-white relative">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#121212] text-[#E5FE40] border border-[#262626] flex items-center justify-center mx-auto mb-4 cred-box-dark">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Inquiry Transmitted</h3>
                  <p className="text-sm text-[#8A8A8A] max-w-md mx-auto mt-2 leading-relaxed font-light">
                    Thank you, <strong className="text-white font-bold">{formData.name}</strong>. Your inquiry has been routed to our WhatsApp desk at <strong className="text-[#E5FE40] font-mono">{CONTACT_PHONE}</strong>.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {whatsappLink && (
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors cred-box-dark"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Open WhatsApp ({CONTACT_PHONE})</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 bg-[#1F1F1F] text-white font-mono text-xs uppercase tracking-wider border border-[#333333] cred-btn-tactile cred-box-dark hover:border-[#555555] transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="contact-inquiry-form">
                  <h3 className="text-xl font-bold text-white tracking-tight font-mono uppercase">Transmit Inquiry</h3>
                  <p className="text-xs text-[#8A8A8A] -mt-2 mb-4 font-light">
                    Directly connect with our center desk. Every inquiry is routed to WhatsApp <span className="text-[#E5FE40] font-mono">{CONTACT_PHONE}</span>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white placeholder-[#555555] text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white placeholder-[#555555] text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white placeholder-[#555555] text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                        I Am A...
                      </label>
                      <select
                        value={formData.userType}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                      >
                        <option value="School Student (Class 9-12)">School Student (Class 9-12)</option>
                        <option value="College Graduate / Aspirant">College Graduate / Aspirant</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Parent">Parent</option>
                        <option value="School / College Representative">School / College Representative</option>
                        <option value="Corporate HR / Client">Corporate HR / Client</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                      Interested Service Vertical *
                    </label>
                    <select
                      value={formData.serviceVertical}
                      onChange={(e) => setFormData({ ...formData, serviceVertical: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          #{s.numericCode} {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-[#8A8A8A] uppercase tracking-wider mb-1.5">
                      Message / Goal Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current stream, target college, career target, or organizational requirements..."
                      className="w-full px-4 py-2.5 bg-[#121212] border border-[#262626] text-white placeholder-[#555555] text-sm font-mono focus:outline-none focus:border-[#E5FE40]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E5FE40] text-[#0D0D0D] font-bold font-mono text-xs uppercase tracking-wider cred-btn-tactile cred-box-white flex items-center justify-center gap-2 cursor-pointer hover:bg-[#d8f235]"
                    id="submit-contact-form-btn"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send to WhatsApp (+91 99019 99720)</span>
                  </button>
                  <p className="text-[10px] text-center text-[#8A8A8A] font-mono mt-2">
                    Directly routes your inquiry to WhatsApp +91 99019 99720
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
