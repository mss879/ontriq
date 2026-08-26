'use client';

import { ScrollAnimate } from '@/components/scroll-animate';

const industries = [
  {
    name: 'BPO & IT Services',
    description: 'With access to global client networks and proprietary code, tech firms and business process outsourcing units in Sri Lanka face strict requirements for information security (e.g. ISO 27001). We verify credentials and check criminal databases to prevent data breaches and keep client trust high.',
    checks: ['Employment History', 'Criminal Checks', 'Education Verification', 'Reference Checks'],
  },
  {
    name: 'Banking & Financial Services',
    description: 'Financial institutions operate under strict central bank regulations and must mitigate operational risks. Our checks help screen employees handling sensitive financial transactions, customer accounts, and corporate treasury systems by running criminal database searches and global sanction watchlists.',
    checks: ['Criminal & Legal Checks', 'Global Sanctions', 'Credit history', 'Identity Verification'],
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    description: 'In clinical settings, patient safety is paramount. We help hospitals, research labs, and pharmaceutical firms thoroughly verify academic backgrounds, professional medical licenses, and chemical safety records to ensure only qualified personnel are placed in caregiving or lab roles.',
    checks: ['Education Verification', 'License Checks', 'Drug Screening', 'Criminal Checks'],
  },
  {
    name: 'Manufacturing & Logistics',
    description: 'Warehouse operations, heavy machinery handling, and delivery networks require a reliable and safe workforce. We authenticate candidate identities, verify residential addresses for logistics tracking, and conduct drug tests to reduce liability and promote high workplace safety.',
    checks: ['Identity Verification', 'Address Checks', 'Criminal Checks', 'Drug Testing'],
  },
  {
    name: 'Hospitality & Retail',
    description: 'Customer-facing roles directly impact your brand reputation. We verify candidate histories and references to ensure that front-of-house staff, hotel personnel, and retail cashiers have a track record of honesty and professionalism, helping prevent theft and fraud.',
    checks: ['Identity Verification', 'Criminal Checks', 'Employment History', 'Reference Checks'],
  },
  {
    name: 'Startups & Fast-Growing SMEs',
    description: 'Early-stage startups cannot afford the cultural and financial setback of a bad hire. We provide streamlined, affordable background screening packages that help agile businesses quickly onboard verified talent while protecting their initial capital and collaborative team culture.',
    checks: ['Employment History', 'Education Verification', 'Reference Checks', 'Identity Verification'],
  },
  {
    name: 'Government & Public Sector',
    description: 'Public utility agencies and government contractors require stringent screening to safeguard public infrastructure and sensitive data. We provide neutral, compliant verification reports that conform to national security guidelines and local employment laws.',
    checks: ['Criminal Checks', 'Identity Verification', 'Address Checks', 'Legal Compliance'],
  },
  {
    name: 'Education & Non-Profits',
    description: 'Schools, universities, and NGOs working with children or vulnerable communities are held to high safety standards. We provide child protection registry checks and comprehensive history searches to support a safe, trusted learning and service environment.',
    checks: ['Criminal & Legal Checks', 'Education Verification', 'Reference Checks', 'Identity Verification'],
  },
];

export function BgvIndustries() {
  return (
    <section id="industries" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" />
            <span className="text-slate-900">08</span>
            <span>Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Our background verification services in Sri Lanka are tailored to the specific needs and regulatory requirements of diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.08}
              className="group p-8 rounded-[24px] border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors">
                {industry.name}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm md:text-base text-justify">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.checks.map((check, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                    {check}
                  </span>
                ))}
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
