'use client';

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
                <span className="text-slate-900">09</span>
                <span>Legal</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
                Background Verification<br />Laws in Sri Lanka
              </h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Background verification in Sri Lanka is a lawful and widely accepted practice for pre-employment screening. While there is no single dedicated &ldquo;background check&rdquo; law, the process is governed by several overlapping regulations that employers and verification providers must adhere to.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Sri Lanka Data Protection Act
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  The Personal Data Protection Act establishes clear requirements for how personal data must be collected, processed, and stored during verification. Candidate consent is mandatory before any verification can begin, and data must be processed for a lawful and specific purpose.
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
                  Employer Verification Rights
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Employers in Sri Lanka have the legal right to verify the information candidates provide during the hiring process, including employment records, educational qualifications, and criminal history. The verification must be proportionate to the role and conducted through legitimate sources.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Confidentiality & Data Security
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
