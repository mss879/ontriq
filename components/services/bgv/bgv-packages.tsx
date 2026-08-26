'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { Check, Mail } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    name: 'Essential Package',
    description: 'Ideal for entry-level positions and operational roles requiring core verification.',
    features: [
      'Identity Verification (NIC/Passport)',
      'Residential Address Verification',
      'Basic Reference Check (1 Employer)',
      '7 Working Days SLA'
    ]
  },
  {
    name: 'Professional Package',
    description: 'Perfect for mid-level managers, tech specialists, and executive hires.',
    features: [
      'Identity & Address Verification',
      'Employment Verification (Last 2 Employers)',
      'Educational Credential Verification',
      'Professional References (2 contacts)',
      'Criminal Record Check',
      '7 Working Days SLA'
    ],
    popular: true
  },
  {
    name: 'Enterprise Package',
    description: 'Designed for senior executives, finance officers, and highly compliance-sensitive roles.',
    features: [
      'All Professional Package Checks',
      'Extended Employment Checks (Last 3 Employers)',
      'Global Sanctions & Watchlist Screenings',
      'Statutory & Registry Compliance Checks',
      'Dual-Analyst Quality Check Assurance',
      'Dedicated Account Manager'
    ]
  }
];

export function BgvPackages() {
  return (
    <section id="packages" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" />
            <span className="text-slate-900">05</span>
            <span>Packages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
            Flexible Verification Packages
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Choose from our pre-configured background check packages or design a custom screening program tailored to your company's risk profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.1}
              className={`p-8 rounded-[32px] border flex flex-col justify-between relative ${
                pkg.popular 
                  ? 'border-[#0098F3] shadow-lg shadow-blue-500/5 bg-slate-50/50' 
                  : 'border-slate-200 bg-white'
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#0098F3] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{pkg.description}</p>
                <div className="h-px bg-slate-200 mb-6" />
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm font-medium items-start">
                      <Check className="h-5 w-5 text-[#0098F3] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact" 
                className={`w-full py-3 px-6 rounded-2xl font-semibold text-center text-sm transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-[#0098F3] hover:bg-[#F75834] text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Request Quote
              </Link>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate className="p-8 rounded-[32px] bg-slate-900 text-white text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Need a Customized Verification Package?</h3>
            <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
              We can combine specific checks (e.g. drug screenings, credit reports, license checks) to create a tailored program matching your regulatory framework.
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F75834] hover:bg-[#FF8918] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 whitespace-nowrap shadow-lg shadow-orange-500/10 text-sm"
          >
            <Mail className="h-5 w-5" />
            Contact for Custom BGV
          </Link>
        </ScrollAnimate>
      </div>
    </section>
  );
}
