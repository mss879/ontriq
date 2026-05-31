'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const checkTypes = [
  {
    title: 'Employment History Verification',
    description: 'We verify past job roles, tenure, reporting structures, designations, and reasons for leaving by directly contacting previous employers. This confirms a candidate\'s professional track record and identifies any inconsistencies in their stated work experience.',
    link: '/services/bgv/employment-verification',
  },
  {
    title: 'Educational Background Verification',
    description: 'Our team validates academic credentials including degrees, diplomas, certifications, and the authenticity of educational institutions attended. We contact universities and certification bodies directly to confirm qualifications.',
    link: '/services/bgv/education-verification',
  },
  {
    title: 'Criminal Record & Legal Checks',
    description: 'We examine an individual\'s criminal history and legal standing through police databases, court records, and legal registries. These checks are essential for creating a secure workplace and fulfilling regulatory obligations.',
    link: '/services/bgv/criminal-record-check',
  },
  {
    title: 'Identity & Address Verification',
    description: 'We authenticate government-issued identification documents such as NICs, passports, and driving licenses, and verify current and past residential addresses through field visits and database cross-referencing.',
    link: '/services/bgv/identity-address-verification',
  },
  {
    title: 'Professional Reference Checks',
    description: 'We contact previous supervisors, colleagues, and professional contacts provided by the candidate to gather insights into their work ethic, performance, interpersonal skills, and overall professional conduct.',
    link: '/services/bgv/reference-checks',
  },
  {
    title: 'Global Sanction & Watchlist Screening',
    description: 'We screen candidates against international sanction lists, global watchlists, and anti-money laundering (AML) databases to ensure your organization does not inadvertently engage with sanctioned individuals.',
  },
  {
    title: 'Drug Testing & Screening',
    description: 'We coordinate pre-employment and random drug screenings through certified laboratories, ensuring compliance with industry standards and workplace safety requirements.',
  },
];

export function BgvTypes() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" />
            <span className="text-slate-900">02</span>
            <span>Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
            Types of Background Checks We Offer
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            Our background verification services in Sri Lanka cover every aspect of a candidate&apos;s history to give you a complete, reliable picture before making a hiring decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checkTypes.map((check, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.08}
              className="group p-8 rounded-[24px] border border-slate-200 bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-500"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm font-bold text-[#0098F3]">{(index + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#F75834] transition-colors">
                  {check.title}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {check.description}
              </p>
              {check.link && (
                <Link
                  href={check.link}
                  className="inline-flex items-center text-sm font-semibold text-[#0098F3] hover:text-[#F75834] transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
