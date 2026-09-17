import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="space-y-8 text-slate-300 leading-relaxed font-sans" id="privacy-policy-content">
      {/* Header Banner */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Legal Document</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">PRIVACY POLICY</h2>
        <p className="text-xs text-slate-400 font-mono mt-1">Last Updated: 17 September 2026</p>
      </div>

      {/* Preamble */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 text-slate-200">
        <p>
          Ascend Career (“Ascend Career”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you provide while using our website, services, enquiry forms, counselling services, educational services, placement services, and other career-related services.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, share, and protect your personal information.
        </p>
        <p className="text-xs text-teal-300 font-medium bg-teal-500/10 p-3 rounded-lg border border-teal-500/20">
          By using our website or submitting your information to us, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>

      {/* Section 1 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">01</span>
          <h3 className="text-base font-bold text-white">About Ascend Career</h3>
        </div>
        <p>Ascend Career provides career and education-related services, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
          {[
            'Career Guidance & Assessment',
            'Career Counselling',
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
          Our services may involve communicating with students, parents/guardians, job seekers, working professionals, educational institutions, employers, universities, training partners, and corporate clients.
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">02</span>
          <h3 className="text-base font-bold text-white">Information We Collect</h3>
        </div>
        <p className="text-sm">Depending on the service you request, we may collect information such as:</p>

        {/* Sub-section A */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
          <h4 className="font-semibold text-teal-300 text-sm">A. Personal Information</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {['Full name', 'Date of birth or age, where relevant', 'Gender, where voluntarily provided', 'Mobile number', 'Email address', 'City, state and country', 'Residential/contact address, where required'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sub-section B */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
          <h4 className="font-semibold text-teal-300 text-sm">B. Educational Information</h4>
          <p className="text-xs text-slate-400">For education and career services, we may collect:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {[
              'Current qualification',
              'Previous qualifications',
              'School/college/university details',
              'Course or stream',
              'Marks, percentage or CGPA',
              'Graduation/passing year',
              'Preferred course',
              'Preferred university/institution',
              'Career interests'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sub-section C */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
          <h4 className="font-semibold text-teal-300 text-sm">C. Career &amp; Employment Information</h4>
          <p className="text-xs text-slate-400">For placement and career services, we may collect:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {[
              'Resume/CV',
              'Work experience',
              'Skills',
              'Certifications',
              'Job preferences',
              'Preferred location',
              'Expected salary, where relevant',
              'Employment history',
              'Interview-related information'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sub-section D */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
          <h4 className="font-semibold text-teal-300 text-sm">D. Study Abroad Information</h4>
          <p className="text-xs text-slate-400">If you request Study Abroad services, we may collect information required for counselling and application assistance, including:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {[
              'Academic records',
              'Passport information',
              'Language-test information',
              'Course preferences',
              'University preferences',
              'Financial information required for scholarship/admission guidance',
              'Documents required for applications',
              'Visa-related information'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-400 italic pt-1">We will request only information reasonably required for the relevant service.</p>
        </div>

        {/* Sub-section E */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
          <h4 className="font-semibold text-teal-300 text-sm">E. Information You Provide Through Forms</h4>
          <p className="text-xs text-slate-400">This may include information submitted through:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            {[
              'Contact forms',
              'Career counselling forms',
              'Book-a-consultation forms',
              'Course enquiry forms',
              'Placement enquiry forms',
              'Study Abroad enquiry forms',
              'Study in India enquiry forms',
              'Corporate enquiry forms',
              'Scholarship enquiries',
              'Meta/Facebook lead forms',
              'Other marketing or enquiry forms'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">03</span>
          <h3 className="text-base font-bold text-white">Information Collected Automatically</h3>
        </div>
        <p>When you visit our website, certain technical information may be collected automatically, such as:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'IP address',
            'Browser type',
            'Device type',
            'Operating system',
            'Pages visited',
            'Approximate location derived from technical information',
            'Website interaction information',
            'Referral/source information',
            'Date and time of access'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 pt-1">This information may be used to operate, secure, analyse and improve our website.</p>
      </section>

      {/* Section 4 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">04</span>
          <h3 className="text-base font-bold text-white">Cookies and Similar Technologies</h3>
        </div>
        <p>Ascend Career may use cookies and similar technologies to:</p>
        <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
          {[
            'Keep the website functioning properly',
            'Understand website usage',
            'Improve website performance',
            'Remember certain preferences',
            'Measure marketing campaigns',
            'Understand how visitors interact with our website'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">Where required, we will seek appropriate consent for non-essential cookies or similar technologies. You may also control cookies through your browser settings.</p>
      </section>

      {/* Section 5 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">05</span>
          <h3 className="text-base font-bold text-white">How We Use Your Information</h3>
        </div>
        <p className="text-sm">We may use your information to:</p>

        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Career Guidance &amp; Assessment</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Provide career counselling</li>
              <li>• Understand your educational and career goals</li>
              <li>• Conduct career assessments where applicable</li>
              <li>• Recommend relevant career pathways</li>
              <li>• Schedule counselling sessions</li>
              <li>• Communicate regarding your counselling request</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Skill Development</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Recommend relevant courses or training</li>
              <li>• Register you for training programmes</li>
              <li>• Provide course-related communication</li>
              <li>• Track your participation where necessary</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Jobs &amp; Placement</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Understand your job preferences</li>
              <li>• Review your resume</li>
              <li>• Provide resume/interview assistance</li>
              <li>• Match candidates with relevant opportunities</li>
              <li>• Communicate with potential employers or placement partners where appropriate</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Study Abroad</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Provide education and university guidance</li>
              <li>• Help evaluate course/university options</li>
              <li>• Assist with application-related processes</li>
              <li>• Provide scholarship-related guidance</li>
              <li>• Assist with documentation and visa-related preparation</li>
              <li>• Communicate with relevant institutions or authorised partners when necessary</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Study in India</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Assist with course and institution selection</li>
              <li>• Provide admission guidance</li>
              <li>• Support application-related processes</li>
              <li>• Provide scholarship or education-financing guidance where applicable</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">School &amp; College Programs</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Coordinate counselling programmes</li>
              <li>• Conduct career awareness activities</li>
              <li>• Organise assessments and workshops</li>
              <li>• Coordinate with participating institutions</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="font-semibold text-teal-300 text-xs uppercase tracking-wider mb-2">Corporate Training &amp; HR</h4>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Respond to corporate enquiries</li>
              <li>• Organise training programmes</li>
              <li>• Support employee upskilling programmes</li>
              <li>• Assist with recruitment/staffing-related services where applicable</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">06</span>
          <h3 className="text-base font-bold text-white">Communication With You</h3>
        </div>
        <p>If you submit an enquiry, you agree that Ascend Career may contact you regarding your enquiry through appropriate communication channels, which may include:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 pl-2">
          {['Phone calls', 'SMS', 'Email', 'WhatsApp'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Other communication channels you have provided may also be used. For example, if you submit a Study Abroad enquiry, we may contact you to understand your qualification, preferred country/course and requirements.
        </p>
        <p className="text-xs text-slate-400">
          Marketing communications will be handled in accordance with applicable law and your available consent/preferences.
        </p>
      </section>

      {/* Section 7 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">07</span>
          <h3 className="text-base font-bold text-white">Meta Lead Generation</h3>
        </div>
        <p>Ascend Career may use advertising platforms such as Meta to generate enquiries.</p>
        <p className="text-xs text-slate-300">
          If you submit information through a Meta Lead Form or advertisement, the information you provide may be made available to Ascend Career for the purpose of responding to your enquiry and providing the requested services.
        </p>
        <p className="text-xs text-slate-400">The information may include:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {['Name', 'Phone number', 'Email address', 'Education details', 'Course/service interest', 'Other information voluntarily submitted through the form'].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 italic">Meta may separately process information according to its own privacy policies.</p>
      </section>

      {/* Section 8 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">08</span>
          <h3 className="text-base font-bold text-white">Sharing of Personal Information</h3>
        </div>
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 font-semibold text-xs">
          We do not sell your personal information as a product.
        </div>
        <p>We may share relevant information where reasonably necessary to provide the service you requested, including with:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Universities and educational institutions',
            'Employers and recruitment partners',
            'Training providers',
            'Application/service partners',
            'Technology and hosting providers',
            'Communication service providers',
            'Professional service providers',
            'Government or regulatory authorities where legally required'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          We will seek to limit information shared to what is reasonably necessary for the relevant purpose. For example, if you request assistance with university admission, relevant academic information may need to be shared with an applicable institution or authorised application partner.
        </p>
      </section>

      {/* Section 9 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">09</span>
          <h3 className="text-base font-bold text-white">Third-Party Service Providers</h3>
        </div>
        <p>We may use third-party providers for services such as:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300 pl-2">
          {[
            'Website hosting',
            'Cloud storage',
            'CRM systems',
            'Email communication',
            'WhatsApp/business communication',
            'Analytics',
            'Advertising',
            'Payment processing',
            'Application management',
            'IT and security'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Such providers may process information on our behalf or independently according to their applicable terms and privacy practices.
        </p>
      </section>

      {/* Section 10 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">10</span>
          <h3 className="text-base font-bold text-white">International Data Transfers</h3>
        </div>
        <p>Some service providers, universities, technology platforms or partners may operate outside India.</p>
        <p className="text-xs text-slate-300">
          Where personal information is transferred outside India, Ascend Career will take steps required under applicable law and applicable data-protection requirements.
        </p>
      </section>

      {/* Section 11 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">11</span>
          <h3 className="text-base font-bold text-white">Data Security</h3>
        </div>
        <p>We take reasonable technical and organisational measures to protect personal information against:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300 pl-2">
          {['Unauthorised access', 'Unauthorised disclosure', 'Loss', 'Misuse', 'Alteration', 'Destruction'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400 italic">
          However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
        </p>
      </section>

      {/* Section 12 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">12</span>
          <h3 className="text-base font-bold text-white">Data Retention</h3>
        </div>
        <p>We retain personal information only for as long as reasonably necessary for:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Providing requested services',
            'Maintaining business and transaction records',
            'Completing admission/application processes',
            'Placement or recruitment activities',
            'Meeting legal or regulatory obligations',
            'Resolving disputes',
            'Preventing fraud or misuse',
            'Protecting our legal rights'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          When information is no longer reasonably required, we may delete, anonymise or securely dispose of it, subject to applicable legal requirements.
        </p>
      </section>

      {/* Section 13 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">13</span>
          <h3 className="text-base font-bold text-white">Your Rights</h3>
        </div>
        <p>Subject to applicable law, you may have rights relating to your personal data, including rights concerning:</p>
        <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
          {[
            'Access to information about your personal data',
            'Correction of inaccurate information',
            'Updating your information',
            'Withdrawal of consent where consent is the basis for processing',
            'Requesting deletion where applicable',
            'Raising a grievance',
            'Obtaining information about processing/sharing as provided by applicable law'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-teal-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          The DPDP Act provides rights to obtain information regarding personal data being processed and certain information about sharing with other data fiduciaries/data processors.
        </p>
        <p className="text-xs text-slate-400">To exercise applicable rights, contact us using the details below.</p>
      </section>

      {/* Section 14 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">14</span>
          <h3 className="text-base font-bold text-white">Withdrawal of Consent</h3>
        </div>
        <p>Where we rely on your consent to process personal information, you may withdraw that consent subject to applicable law.</p>
        <p className="text-xs text-slate-400">
          Withdrawal of consent may affect our ability to provide certain services. For example, if you withdraw consent necessary for processing an education application, we may not be able to continue that particular service.
        </p>
      </section>

      {/* Section 15 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">15</span>
          <h3 className="text-base font-bold text-white">Children's Privacy</h3>
        </div>
        <p>Some Ascend Career services may involve students who are minors.</p>
        <p className="text-xs text-slate-300">
          Where services involve children, we will handle their personal data in accordance with applicable legal requirements, including requirements concerning verifiable parental consent where applicable.
        </p>
        <p className="text-xs text-slate-400">
          We do not knowingly seek unnecessary personal information from children. Parents or lawful guardians may contact us regarding information submitted in connection with a minor.
        </p>
      </section>

      {/* Section 16 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">16</span>
          <h3 className="text-base font-bold text-white">Accuracy of Information</h3>
        </div>
        <p>You are responsible for providing accurate and updated information. Please do not submit:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-rose-300 pl-2">
          {[
            'False academic records',
            'Fraudulent documents',
            'Incorrect identity information',
            "Someone else's personal information without appropriate authority"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-rose-500/10 p-2 rounded-lg border border-rose-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">Providing inaccurate information may affect our ability to provide services.</p>
      </section>

      {/* Section 17 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">17</span>
          <h3 className="text-base font-bold text-white">Third-Party Websites</h3>
        </div>
        <p>Our website may contain links to third-party websites, including:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 pl-2">
          {[
            'Universities',
            'Employers',
            'Educational institutions',
            'Government portals',
            'Application portals',
            'Social media platforms',
            'Payment providers',
            'Other service providers'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          Ascend Career is not responsible for the privacy practices or content of third-party websites. We recommend reviewing the privacy policy of each third-party website before submitting information.
        </p>
      </section>

      {/* Section 18 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">18</span>
          <h3 className="text-base font-bold text-white">Payments</h3>
        </div>
        <p>If you make a payment for an Ascend Career service, payment information may be processed by an authorised third-party payment provider.</p>
        <p className="text-xs text-slate-400">Where applicable, we may receive transaction-related information such as:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300 pl-2">
          {['Payment status', 'Transaction reference', 'Amount', 'Date of transaction'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">We generally do not need to store your complete card, banking or payment credentials.</p>
      </section>

      {/* Section 19 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">19</span>
          <h3 className="text-base font-bold text-white">Fraud Prevention and Legal Compliance</h3>
        </div>
        <p>We may process or disclose information where reasonably necessary to:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pl-2">
          {[
            'Prevent fraud',
            'Detect misuse',
            'Protect our website and systems',
            'Protect users',
            'Investigate security incidents',
            'Comply with applicable laws',
            'Respond to lawful requests from authorities',
            'Protect our legal rights'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 20 */}
      <section className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">20</span>
          <h3 className="text-base font-bold text-white">Changes to This Privacy Policy</h3>
        </div>
        <p>We may update this Privacy Policy from time to time to reflect:</p>
        <ul className="space-y-1.5 text-xs text-slate-300 pl-2">
          {[
            'Changes to our services',
            'Changes to technology',
            'Changes to legal requirements',
            'Changes to our data-processing practices'
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">
          The updated version will be published on this page with a revised “Last Updated” date.
        </p>
      </section>

      {/* Section 21 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">21</span>
          <h3 className="text-base font-bold text-white">Contact Us</h3>
        </div>
        <p>If you have questions, concerns, requests or complaints regarding this Privacy Policy or your personal information, please contact:</p>

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

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Address</span>
              <span className="text-slate-300">Zam zam Layout, 6th Cross Rd, RK Hegde Nagar, Bengaluru 560077</span>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800/80">
            <span className="font-semibold text-slate-300">Privacy/Grievance Contact:</span> Data Protection Officer (DPO) / Legal Governance Office
          </div>
        </div>
      </section>

      {/* Section 22 */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-400 font-mono font-bold text-xs border border-teal-500/30">22</span>
          <h3 className="text-base font-bold text-white">Consent</h3>
        </div>
        <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-xs text-slate-200 space-y-2">
          <p className="font-semibold text-teal-300">
            By submitting an enquiry or using our services, you acknowledge that you have read this Privacy Policy.
          </p>
          <p className="text-slate-300">
            Where applicable, we will obtain consent before processing personal data for purposes that require consent under applicable law.
          </p>
          <p className="text-slate-400">
            You may withdraw consent where permitted by applicable law.
          </p>
        </div>
      </section>
    </div>
  );
};
