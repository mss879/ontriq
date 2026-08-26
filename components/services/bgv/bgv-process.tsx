'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import {
  FileCheck,
  Network,
  UserCheck,
  SearchCheck,
  ShieldCheck,
  ClipboardCheck
} from 'lucide-react';

const qualityStandards = [
  {
    title: "Primary-Source Verification",
    description: "Every data point is confirmed directly with the issuing source—the employer's HR department, the university registrar, or the official government registry. We never rely on second-hand aggregator databases, which is why our findings hold up under client and regulatory audits.",
    icon: FileCheck
  },
  {
    title: "Parallel Processing for 7-Day Delivery",
    description: "Checks are executed simultaneously, not sequentially. Specialized analyst teams handle employment, education, criminal, and field verification streams in parallel, which is how a complete multi-check case closes within 7 working days without shortcuts.",
    icon: Network
  },
  {
    title: "Dual-Analyst Quality Control",
    description: "Before any report leaves our office, every completed check is independently reviewed by two senior compliance analysts. This dual-review discipline is the backbone of our 98%+ report accuracy rate and eliminates single-analyst blind spots.",
    icon: UserCheck
  },
  {
    title: "Discrepancy Handling Protocol",
    description: "When a finding does not match the candidate's claims, we document the evidence trail, notify the employer, and give the candidate a defined window to clarify or provide supporting documents. Reports state verified facts, never assumptions.",
    icon: SearchCheck
  },
  {
    title: "Secure, Compliant Data Handling",
    description: "Candidate data moves only through encrypted channels and is stored in access-controlled systems, with retention and disposal governed by the Sri Lanka Personal Data Protection Act. Only authorized verification analysts ever handle case files.",
    icon: ShieldCheck
  },
  {
    title: "Audit-Ready Reporting",
    description: "Every finding in the final report is source-attributed and timestamped. That means your background verification records can withstand ISO 27001 and SOC 2 vendor assessments, central bank inspections, and internal compliance audits.",
    icon: ClipboardCheck
  }
];

export function BgvProcess() {
  return (
    <section id="process" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" />
              <span className="text-slate-900">06</span>
              <span>Quality Control</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6">
              Our Verification Process &amp; Quality Control
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Speed means nothing without rigor. These are the six quality standards applied to every background verification case we handle in Sri Lanka.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-slate-300"></div>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
          {qualityStandards.map((standard, index) => (
            <li key={index}>
              <ScrollAnimate
                delay={index * 0.08}
                className="group relative h-full bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-[#F75834]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Decorative gradient blob */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-50 blur-3xl group-hover:bg-orange-100 transition-colors duration-500" />

                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-[#F75834] group-hover:w-full transition-all duration-500 ease-out" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#F75834] group-hover:border-[#F75834] transition-all duration-300 shadow-sm">
                      <standard.icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-4xl font-bold text-[#F75834]/20 group-hover:text-[#F75834]/40 transition-colors duration-300 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors duration-300">
                    {standard.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {standard.description}
                  </p>
                </div>
              </ScrollAnimate>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
