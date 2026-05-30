'use client';

import { ScrollAnimate } from '@/components/scroll-animate';

export function BgvIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <ScrollAnimate className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" />
              <span className="text-slate-900">01</span>
              <span>Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight">
              What Are Background Verification Services?
            </h2>
          </ScrollAnimate>

          <ScrollAnimate delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
              Background verification services are a systematic process of validating the personal, educational, professional, and legal history of an individual&mdash;most commonly conducted before employment. These services protect employers from the risks of hiring unverified candidates by confirming that the information a candidate provides is accurate, complete, and truthful.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
              In Sri Lanka, background verification has become an essential part of the hiring process for organizations of all sizes&mdash;from multinational corporations to fast-growing startups. Employers who invest in thorough pre-employment screening significantly reduce hiring risks, protect their workplace culture, and ensure compliance with local regulations including the Sri Lanka Data Protection Act.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-justify">
              A comprehensive background check goes far beyond a simple resume review. It involves verifying employment history, educational qualifications, criminal records, identity documents, residential addresses, and professional references through trusted, verified sources.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-4">
              {[
                { stat: '7', label: 'Day Turnaround', sublabel: 'Fastest in Sri Lanka' },
                { stat: '98%+', label: 'Accuracy Rate', sublabel: 'Multi-level QC' },
                { stat: '100%', label: 'Compliance', sublabel: 'Data Protection Act' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <div className="text-3xl font-bold text-[#0098F3] mb-1">{item.stat}</div>
                  <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
