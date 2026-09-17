import React from 'react';
import { Mail, Phone, MapPin, Globe, Scale, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const TermsConditionsContent: React.FC = () => {
  return (
    <div className="space-y-8 text-slate-300 leading-relaxed font-sans" id="terms-conditions-content">
      {/* Header Banner */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
          <Scale className="w-4 h-4" />
          <span>Official Legal Agreement</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">TERMS &amp; CONDITIONS</h2>
        <p className="text-xs text-slate-400 font-mono mt-1">Last Updated: 17 September 2026</p>
      </div>

      {/* Preamble */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 text-slate-200">
        <p>
          Welcome to Ascend Career. These Terms &amp; Conditions (“Terms”) govern your access to and use of the Ascend Career website, services, programmes, counselling, training, placement assistance, education-advisory services and related offerings.
        </p>
        <p>
          By accessing our website, submitting an enquiry, booking a consultation, registering for a service, or using any Ascend Career service, you agree to these Terms.
        </p>
        <p className="text-xs text-amber-300 font-medium bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>If you do not agree with these Terms, please do not use our website or services.</span>
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">01</span>
          <h3 className="text-base font-bold text-white">About Ascend Career</h3>
        </div>
        <p>Ascend Career provides career, education, training, recruitment and related advisory services, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
          {[
            'Career Guidance & Assessment',
            'Skill Development',
            'Jobs & Placement',
            'Study Abroad',
            'Study in India',
            'School & College Programs',
            'Corporate Training & HR'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/40 px-3 py-2 rounded-lg border border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 pt-1">
          The exact services available to an individual may depend on their requirements, eligibility, programme availability and applicable service agreement.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">02</span>
          <h3 className="text-base font-bold text-white">Eligibility</h3>
        </div>
        <p>You may use our services if:</p>
        <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
          {[
            'You provide accurate information to us.',
            'You have the legal capacity to enter into an agreement, where required.',
            'Where the service involves a minor, the required parent/guardian involvement or consent is provided.',
            'You comply with these Terms and applicable laws.'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          For certain services, we may request additional documents or information to establish eligibility.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">03</span>
          <h3 className="text-base font-bold text-white">Career Guidance &amp; Assessment</h3>
        </div>
        <p>Ascend Career may provide career counselling, career guidance and assessment-related services. These may include:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Career counselling',
            'Career path planning',
            'Stream selection',
            'Course and college selection',
            'Career change guidance',
            'Psychometric/career assessments',
            'Aptitude, interest, personality or skills assessments',
            'Career-roadmap guidance'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
          <h4 className="font-semibold text-amber-300 uppercase tracking-wider text-[11px]">Important Notice</h4>
          <p className="text-slate-300">
            Career guidance and assessment services are intended to support your decision-making. Recommendations are based on the information you provide, assessment results where applicable, your stated interests, qualifications and other relevant factors.
          </p>
          <p className="text-slate-400 italic">
            Ascend Career does not guarantee that following a recommendation will result in a particular career, salary, admission, employment or professional outcome.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">04</span>
          <h3 className="text-base font-bold text-white">Skill Development &amp; Training</h3>
        </div>
        <p>Ascend Career may offer or facilitate job-oriented training and certification programmes. Depending on the programme, training may cover areas such as:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300 pl-2">
          {[
            'Digital Marketing',
            'Data Analytics',
            'Business & Management',
            'HR & Recruitment',
            'Sales & Business Development',
            'Communication',
            'Soft Skills',
            'AI and productivity tools',
            'Interview and employability skills'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Programme content, duration, schedule, trainers, certification and fees may vary between programmes. We reserve the right to modify schedules, trainers, curriculum or delivery methods where reasonably necessary.
        </p>
      </section>

      {/* Section 5 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">05</span>
          <h3 className="text-base font-bold text-white">Jobs &amp; Placement Services</h3>
        </div>
        <p>Ascend Career may provide:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Job placement assistance',
            'Resume/CV preparation',
            'ATS optimisation',
            'Mock interviews',
            'Interview preparation',
            'Job matching',
            'Employer connections',
            'Hire-Train-Deploy (HTD) opportunities, where applicable'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2 text-xs">
          <h4 className="font-bold text-rose-300 uppercase tracking-wider text-[11px]">No Guaranteed Employment</h4>
          <p className="text-slate-300">
            Unless a separate written agreement expressly states otherwise, Ascend Career does not guarantee employment, a particular employer, salary, designation, location or joining date. Employment decisions are ultimately made by the relevant employer.
          </p>
          <div className="pt-2 text-slate-300">
            <span className="font-semibold text-white block mb-1">Candidates are responsible for:</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2 text-slate-300">
              <li>• Providing accurate information</li>
              <li>• Providing genuine documents</li>
              <li>• Attending interviews</li>
              <li>• Completing required assessments</li>
              <li>• Following employer requirements</li>
              <li>• Accepting or declining employment opportunities</li>
            </ul>
          </div>
          <p className="text-slate-400 italic pt-1">
            Submitting a resume or registering with Ascend Career does not itself create an employment relationship.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">06</span>
          <h3 className="text-base font-bold text-white">Study Abroad Services</h3>
        </div>
        <p>Ascend Career may provide guidance and assistance relating to international education, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Country selection',
            'University/institution selection',
            'Course selection',
            'Application assistance',
            'SOP/LOR guidance',
            'Scholarship guidance',
            'Education-loan guidance',
            'Documentation assistance',
            'Visa-documentation guidance',
            'Visa interview preparation',
            'Pre-departure guidance'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs">
          <h4 className="font-bold text-amber-300 uppercase tracking-wider text-[11px]">No Guaranteed Admission or Visa</h4>
          <p className="text-slate-300">
            Admission decisions are made by the relevant educational institution. Visa decisions are made by the relevant government authority/consulate.
          </p>
          <p className="text-slate-300 font-medium">
            Therefore: Ascend Career does not guarantee university admission, scholarship approval, visa approval, visa duration, residence permission, employment or permanent settlement.
          </p>
          <p className="text-slate-400 italic">
            Eligibility and requirements may change according to the relevant university, government authority, country or programme.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">07</span>
          <h3 className="text-base font-bold text-white">Scholarships and Financial Assistance</h3>
        </div>
        <p>Ascend Career may provide information or guidance regarding scholarships, tuition-fee reductions, accommodation support, food/meals, grants, education loans or other financial assistance.</p>
        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
          <span className="font-semibold text-teal-300 uppercase tracking-wider text-[11px] block">Conditions &amp; Disclaimers:</span>
          <ul className="space-y-1 text-slate-300">
            <li>• Scholarships are subject to eligibility.</li>
            <li>• Availability may vary by university, region and programme.</li>
            <li>• Scholarship amounts may change.</li>
            <li>• Financial benefits are not guaranteed unless officially confirmed by the relevant awarding authority.</li>
            <li>• Ascend Career does not guarantee that every student will receive a particular scholarship amount.</li>
          </ul>
          <p className="text-slate-400 italic pt-1">
            Students should rely on official university/government documentation for final scholarship terms.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">08</span>
          <h3 className="text-base font-bold text-white">Study in India</h3>
        </div>
        <p>Ascend Career may assist students with:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Undergraduate admissions',
            'Postgraduate admissions',
            'Course selection',
            'College/university selection',
            'Admission procedures',
            'Scholarship guidance',
            'Education-loan guidance'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Admission decisions remain with the relevant educational institution. Ascend Career does not guarantee admission unless expressly confirmed in a written agreement with the relevant institution.
        </p>
      </section>

      {/* Section 9 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">09</span>
          <h3 className="text-base font-bold text-white">School &amp; College Programs</h3>
        </div>
        <p>Ascend Career may provide programmes for schools and colleges, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Career awareness programmes',
            'Counselling camps',
            'Career assessments',
            'Employability workshops',
            'Skill-development programmes',
            'Campus-placement support',
            'Student development activities'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Programme schedules, deliverables and fees may be specified separately in an institutional proposal or agreement.
        </p>
      </section>

      {/* Section 10 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">10</span>
          <h3 className="text-base font-bold text-white">Corporate Training &amp; HR</h3>
        </div>
        <p>Ascend Career may provide corporate services including:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300 pl-2">
          {[
            'Corporate training',
            'Employee upskilling',
            'Leadership development',
            'Sales training',
            'Campus-to-corporate programmes',
            'Recruitment/staffing support'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          For corporate clients, the scope of services, deliverables, fees, timelines and responsibilities may be defined in a separate proposal, quotation, purchase order or service agreement.
        </p>
      </section>

      {/* Section 11 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">11</span>
          <h3 className="text-base font-bold text-white">Information Provided by Users</h3>
        </div>
        <p>You agree that information and documents submitted to Ascend Career are:</p>
        <div className="flex flex-wrap gap-2 text-xs text-teal-300">
          {['Accurate', 'Complete', 'Current', 'Genuine', 'Legally obtained'].map((term, i) => (
            <span key={i} className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-lg font-mono font-semibold">
              ✓ {term}
            </span>
          ))}
        </div>
        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-xs space-y-1.5">
          <p className="font-bold uppercase tracking-wide text-[11px]">Strict Prohibition on Fraudulent Documents:</p>
          <p className="text-slate-300">You must not submit forged, fraudulent, misleading or unauthorised documents, including:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[11px] text-slate-300 pt-1">
            <span>• Academic certificates</span>
            <span>• Marksheets</span>
            <span>• Identity documents</span>
            <span>• Passports</span>
            <span>• Resumes</span>
            <span>• Employment documents</span>
            <span>• Financial documents</span>
            <span>• Language-test results</span>
            <span>• Admission documents</span>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Ascend Career may refuse or discontinue services if information or documents appear inaccurate, fraudulent or materially misleading.
        </p>
      </section>

      {/* Section 12 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">12</span>
          <h3 className="text-base font-bold text-white">Third-Party Institutions and Partners</h3>
        </div>
        <p>Some Ascend Career services may involve third parties, including:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Universities',
            'Colleges',
            'Employers',
            'Recruitment organisations',
            'Training providers',
            'Scholarship authorities',
            'Government portals',
            'Application platforms',
            'Financial/loan providers',
            'Technology providers'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Third parties may have their own terms, eligibility requirements, fees and privacy policies. Ascend Career is not responsible for decisions made independently by such third parties.
        </p>
      </section>

      {/* Section 13 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">13</span>
          <h3 className="text-base font-bold text-white">Fees and Payments</h3>
        </div>
        <p>Certain Ascend Career services may require payment. Before payment, applicable fees and service details should be communicated to the customer.</p>
        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs">
          <span className="font-semibold text-teal-300 uppercase tracking-wider text-[11px] block">Payment Terms:</span>
          <ul className="space-y-1 text-slate-300">
            <li>• Fees must be paid through the designated payment method.</li>
            <li>• You are responsible for providing correct payment information.</li>
            <li>• Third-party payment gateways may process transactions.</li>
            <li>• Additional third-party fees may apply for services such as university applications, examinations, visa applications, courier services, translations, insurance or other external services.</li>
          </ul>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5 text-xs">
          <span className="font-semibold text-teal-300 uppercase tracking-wider text-[11px] block">Refund Policy:</span>
          <p className="text-slate-300">
            Refund eligibility depends on the particular service and applicable refund policy communicated at the time of purchase or registration. Where a separate written service agreement contains refund terms, those terms will apply to that service.
          </p>
        </div>
      </section>

      {/* Section 14 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">14</span>
          <h3 className="text-base font-bold text-white">Consultation Appointments</h3>
        </div>
        <p>If you book a consultation:</p>
        <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
          {[
            'You should provide accurate contact information.',
            'You should attend at the scheduled time.',
            'You should provide relevant information necessary for the consultation.',
            'Rescheduling may be subject to availability.',
            'Repeated failure to attend may affect future appointment availability.'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          The consultation provides guidance based on the information available at the time and does not constitute a guarantee of a particular outcome.
        </p>
      </section>

      {/* Section 15 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">15</span>
          <h3 className="text-base font-bold text-white">Communication</h3>
        </div>
        <p>By submitting an enquiry through our website, Meta lead forms or other channels, you may be contacted regarding your enquiry through:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 pl-2">
          {['Phone', 'WhatsApp', 'Email', 'SMS'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Other communication methods you have provided may also be used. You may request that certain marketing communications stop, subject to applicable law and necessary service-related communications.
        </p>
      </section>

      {/* Section 16 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">16</span>
          <h3 className="text-base font-bold text-white">Intellectual Property</h3>
        </div>
        <p>
          Unless otherwise stated, the Ascend Career website and its content—including logo, brand name, text, graphics, images, videos, designs, website layout, original materials, software and other content—are owned by or licensed to Ascend Career and may be protected by applicable intellectual-property laws.
        </p>
        <p className="text-xs text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
          You may not reproduce, copy, modify, distribute, sell or commercially exploit our proprietary content without written permission.
        </p>
      </section>

      {/* Section 17 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">17</span>
          <h3 className="text-base font-bold text-white">Acceptable Use</h3>
        </div>
        <p>You agree not to:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Use the website for unlawful purposes.',
            'Provide fraudulent information.',
            'Upload malicious software.',
            'Attempt unauthorised access to our systems.',
            'Interfere with website functionality.',
            'Scrape or copy substantial website content without permission.',
            'Impersonate another person or organisation.',
            'Misuse our brand or services.',
            'Use our services to facilitate fraud or other unlawful activities.'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          We may restrict or terminate access where we reasonably believe these Terms have been violated.
        </p>
      </section>

      {/* Section 18 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">18</span>
          <h3 className="text-base font-bold text-white">Website Availability</h3>
        </div>
        <p>We aim to keep our website and online services available, but we do not guarantee uninterrupted availability. The website may occasionally be unavailable because of:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 pl-2">
          {['Maintenance', 'Updates', 'Technical problems', 'Hosting issues', 'Security incidents', 'Network problems', 'Events outside control'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 19 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">19</span>
          <h3 className="text-base font-bold text-white">Third-Party Links</h3>
        </div>
        <p>
          Our website may contain links to third-party websites, including university, government, employer, payment, social-media and other websites.
        </p>
        <p className="text-xs text-slate-400">
          These links are provided for convenience. Ascend Career does not control and is not responsible for the content, availability, policies or practices of third-party websites.
        </p>
      </section>

      {/* Section 20 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">20</span>
          <h3 className="text-base font-bold text-white">Limitation of Liability</h3>
        </div>
        <p>To the extent permitted by applicable law, Ascend Career will not be responsible for losses arising solely from:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'A university rejecting an application',
            'A visa application being rejected',
            'A scholarship not being awarded',
            'An employer declining a candidate',
            'Changes in university or government policies',
            'Changes in immigration requirements',
            'Third-party service failures',
            'Incorrect information supplied by a user',
            'Events outside our reasonable control'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 italic">
          Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.
        </p>
      </section>

      {/* Section 21 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">21</span>
          <h3 className="text-base font-bold text-white">No Guarantee of Results</h3>
        </div>
        <p>Ascend Career provides guidance, training, assistance and facilitation.</p>
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
          <p className="font-semibold text-rose-300">Unless specifically stated in a written agreement, we do not guarantee:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2 text-slate-300">
            <li>• A particular career outcome</li>
            <li>• A particular salary</li>
            <li>• Employment</li>
            <li>• University admission</li>
            <li>• Scholarship approval</li>
            <li>• Visa approval</li>
            <li>• Immigration/residence approval</li>
            <li>• Overseas employment</li>
            <li>• Permanent residency</li>
            <li>• Any particular academic result</li>
          </ul>
          <p className="text-slate-400 italic pt-1">
            Individual results depend on many factors, including qualifications, performance, eligibility, competition, institutional decisions and government requirements.
          </p>
        </div>
      </section>

      {/* Section 22 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">22</span>
          <h3 className="text-base font-bold text-white">Confidentiality</h3>
        </div>
        <p>
          We will handle personal information according to our Privacy Policy. You should not submit confidential information that is unrelated to the service you are requesting.
        </p>
        <p className="text-xs text-slate-400">
          Our Privacy Policy explains how we collect, use, store and share personal information.
        </p>
      </section>

      {/* Section 23 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">23</span>
          <h3 className="text-base font-bold text-white">Changes to Services</h3>
        </div>
        <p>
          Ascend Career may modify, suspend or discontinue a particular service, programme, feature or website functionality where reasonably necessary.
        </p>
        <p className="text-xs text-slate-400">
          Where a customer has already purchased a service, applicable contractual commitments will continue to be handled according to the relevant agreement.
        </p>
      </section>

      {/* Section 24 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">24</span>
          <h3 className="text-base font-bold text-white">Changes to These Terms</h3>
        </div>
        <p>We may update these Terms from time to time to reflect:</p>
        <ul className="space-y-1 text-xs text-slate-300 pl-2">
          <li>• Changes to our services</li>
          <li>• Changes to our business</li>
          <li>• Changes in technology</li>
          <li>• Changes in applicable law</li>
          <li>• Changes in operational requirements</li>
        </ul>
        <p className="text-xs text-slate-400">
          The latest version will be published on this page with the updated “Last Updated” date.
        </p>
      </section>

      {/* Section 25 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">25</span>
          <h3 className="text-base font-bold text-white">Governing Law</h3>
        </div>
        <p>These Terms shall be governed by the applicable laws of India.</p>
        <p className="text-xs text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
          Subject to applicable law, disputes relating to these Terms or Ascend Career services shall be subject to the jurisdiction of the appropriate courts having jurisdiction over <strong className="text-teal-300">Bengaluru, Karnataka, India</strong>.
        </p>
      </section>

      {/* Section 26 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">26</span>
          <h3 className="text-base font-bold text-white">Contact Us</h3>
        </div>
        <p>For questions regarding these Terms &amp; Conditions, please contact:</p>

        <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-4 shadow-xl">
          <div className="border-b border-slate-800 pb-3">
            <h4 className="text-base font-bold text-white">Ascend Career</h4>
            <p className="text-xs text-teal-400">Advisory, Admissions &amp; Corporate Placement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <a href="mailto:support@ascendcareer.in" className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/50 transition-colors group">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Email</span>
                <span className="text-slate-200 group-hover:text-white font-medium">support@ascendcareer.in</span>
              </div>
            </a>

            <a href="tel:+919901999720" className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/50 transition-colors group">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Phone</span>
                <span className="text-slate-200 group-hover:text-white font-medium">+91 99019 99720</span>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Address</span>
                <span className="text-slate-300">Zam zam Layout, 6th Cross Rd, RK Hegde Nagar, Bengaluru 560077</span>
              </div>
            </div>

            <a href="https://ascendcareer.in/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/50 transition-colors group">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Official Website</span>
                <span className="text-slate-200 group-hover:text-white font-medium">https://ascendcareer.in/</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
