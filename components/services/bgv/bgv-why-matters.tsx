'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { ShieldCheck, AlertTriangle, Scale, Award } from 'lucide-react';

const corePoints = [
  {
    title: 'Workplace Safety & Threat Mitigation',
    description: 'Hiring without verifying increases the risk of workplace violence, theft, and harassment. Conducting criminal and legal background checks ensures you establish a secure, trustworthy environment for your staff, visitors, and clients alike.',
    icon: ShieldCheck
  },
  {
    title: 'Financial & Operational Risk Avoidance',
    description: 'A bad hire is financially taxing. Beyond recruitment and training overhead, employee fraud, intellectual property theft, or operational neglect can cripple startup capital or corporate budgets. Screening mitigates these issues before onboarding.',
    icon: AlertTriangle
  },
  {
    title: 'Legal Liability & Statutory Compliance',
    description: 'Sri Lankan employment regulations and the Personal Data Protection Act require strict adherence to privacy and security. Ontriq guarantees all checks are legally compliant, obtaining proper candidate consent and safeguarding you from potential regulatory fines.',
    icon: Scale
  },
  {
    title: 'Brand Reputation & Client Trust',
    description: 'Particularly in Sri Lanka\'s IT and BPO sectors, servicing international clients requires compliance with strict global standards (SOC 2, ISO). Presenting a fully screened, verified workforce builds trust and helps win high-value contracts.',
    icon: Award
  }
];

export function BgvWhyMatters() {
  return (
    <section id="why-it-matters" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6">
            <ScrollAnimate className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" />
                <span className="text-slate-900">02</span>
                <span>Risk Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                Why Background Verification Matters
              </h2>
            </ScrollAnimate>
          </div>
          <div className="lg:col-span-6">
            <ScrollAnimate delay={0.1}>
              <p className="text-lg text-slate-500 leading-relaxed text-justify">
                Skipping pre-employment checks leaves your organization vulnerable to credential inflation, professional misconduct, and legal liability. With local and global markets becoming more competitive, ensuring talent integrity is key to sustainable enterprise growth. Background verification acts as a shield, protecting your assets, culture, and brand name.
              </p>
            </ScrollAnimate>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {corePoints.map((point, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.08}
              className="p-8 rounded-[32px] bg-white border border-slate-200 shadow-sm flex flex-col gap-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F75834] shadow-sm">
                <point.icon className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900">{point.title}</h3>
                <p className="text-slate-500 leading-relaxed text-justify text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
