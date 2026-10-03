'use client';

import Link from 'next/link';
import { ScrollAnimate } from '@/components/scroll-animate';

const points = [
  {
    title: 'Primary-source checks inside Sri Lanka',
    description:
      'Sri Lankan records are rarely available through a global database. Employment history is confirmed with the HR teams of previous employers, degrees with the issuing university or institute, and addresses through field visits. A provider on the ground can reach these sources directly instead of relying on documents the candidate supplies.',
  },
  {
    title: 'Local documents, explained in your report',
    description:
      'Candidates in Sri Lanka present documents an overseas HR team may not recognise: the National Identity Card (NIC), service letters from former employers, G.C.E. O/L and A/L certificates, and Grama Niladhari character and residence certificates. Our reports state what each document is, what was checked, and with whom.',
  },
  {
    title: 'Consent captured before any check begins',
    description:
      'Every candidate gives written consent through our secure portal before verification starts, giving you an audit trail that fits the Personal Data Protection Act, No. 9 of 2022 and the expectations of global compliance teams.',
  },
  {
    title: 'English-language reports, one point of contact',
    description:
      'Reports are delivered in English with clear findings for each check, and a dedicated account manager handles your cases, so remote hiring teams and Employer of Record partners do not have to navigate local institutions themselves.',
  },
];

export function BgvOverseas() {
  return (
    <section id="overseas-employers" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <ScrollAnimate className="lg:col-span-5">
            <div className="lg:sticky lg:top-48">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" />
                <span className="text-slate-900">09</span>
                <span>Global Employers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
                Background Checks for Overseas Employers Hiring in Sri Lanka
              </h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Companies in Australia, the UK, Europe, the Middle East and North America increasingly build teams in Sri Lanka, directly or through an Employer of Record. Their screening policies still apply to those hires, but the records that prove a candidate&apos;s history sit with Sri Lankan employers, universities and local authorities. Ontriq runs the in-country part of that screening.
            </p>

            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{point.description}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed">
              For a full walkthrough of the process, read our guide to{' '}
              <Link href="/resources/background-checks-for-foreign-companies-hiring-in-sri-lanka" className="font-semibold text-[#0098F3] hover:text-[#F75834]">
                background checks for foreign companies hiring in Sri Lanka
              </Link>
              .
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
