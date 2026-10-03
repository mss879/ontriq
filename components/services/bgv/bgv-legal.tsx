'use client';

import Link from 'next/link';
import { ScrollAnimate } from '@/components/scroll-animate';

export function BgvLegal() {
  return (
    <section id="legal-compliance" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <ScrollAnimate className="lg:col-span-5">
            <div className="lg:sticky lg:top-48">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" />
                <span className="text-slate-900">10</span>
                <span>Legal</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
                Background Verification<br />Laws in Sri Lanka
              </h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Background verification in Sri Lanka is a lawful and widely accepted practice for pre-employment screening. While there is no single dedicated &ldquo;background check&rdquo; law, the process is shaped by data protection law, the rules of the institutions that hold each record, and the candidate&apos;s consent.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Personal Data Protection Act, No. 9 of 2022
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The Personal Data Protection Act, No. 9 of 2022 (PDPA) sets out how personal data must be collected, processed, and stored, including during employee screening. It is being brought into force in stages, and the Personal Data Protection (Amendment) Act, No. 22 of 2025 allows the remaining parts to commence on dates set by Gazette notice. The{' '}
                  <a href="https://www.dpa.gov.lk/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#0098F3] hover:text-[#F75834]">
                    Data Protection Authority of Sri Lanka
                  </a>{' '}
                  publishes the current status. We run every case to the Act&apos;s standards now: a lawful, specific purpose, candidate consent, and only the data the role requires. Our{' '}
                  <Link href="/resources/personal-data-protection-act-guide-for-employers" className="font-medium text-[#0098F3] hover:text-[#F75834]">
                    PDPA guide for employers
                  </Link>{' '}
                  explains what this means in practice.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Candidate Consent Requirements
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Employers must obtain written consent from candidates before initiating any background checks. At Ontriq, we collect consent digitally through our secure BGV portal, ensuring compliance and providing a clear audit trail for both the employer and the candidate.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Police Clearance &amp; Character Certificates
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  A Police Clearance Certificate is issued by Sri Lanka Police to the individual, who applies for it personally (online through the{' '}
                  <a href="https://www.police.lk/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#0098F3] hover:text-[#F75834]">
                    Sri Lanka Police
                  </a>{' '}
                  e-services or at Police Headquarters). Because the application is made by the individual, employers either ask the candidate to obtain one or rely on a professional{' '}
                  <Link href="/services/bgv/criminal-record-check" className="font-medium text-[#0098F3] hover:text-[#F75834]">
                    criminal record check
                  </Link>
                  . Many employers also ask for a Grama Niladhari character and residence certificate from the candidate&apos;s local division.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Credit Information (CRIB) Reports
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Credit records are held by the Credit Information Bureau of Sri Lanka (CRIB) under the Credit Information Bureau of Sri Lanka Act, No. 18 of 1990. Lenders access them for credit decisions; for employment, the candidate obtains their own self-inquiry report and shares it with consent. We coordinate this for finance-sensitive roles through our{' '}
                  <Link href="/services/bgv/credit-history-check" className="font-medium text-[#0098F3] hover:text-[#F75834]">
                    credit history check
                  </Link>
                  .
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Confidentiality &amp; Data Security
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  All verification data must be handled with strict confidentiality. At Ontriq, we use encrypted communication channels, secure data storage, and access-controlled systems to ensure candidate information remains protected throughout the entire verification process and beyond.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
