'use client';

import React, { memo } from 'react';
import { ScrollAnimate } from '@/components/scroll-animate';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Users, Briefcase, FileText, CreditCard, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Verification Services",
    description: "Comprehensive pre-employment screening including employment, education, criminal, identity, and reference checks.",
    icon: ShieldCheck,
    href: "/services/bgv",
  },
  {
    title: "Recruitment Services",
    description: "End-to-end talent acquisition from executive search to volume hiring and contract staffing.",
    icon: Users,
    href: "/services/recruitment-services",
  },
  {
    title: "HR Management",
    description: "Full-cycle HR operations, policy development, and employee lifecycle management.",
    icon: Briefcase,
    href: "/services/hr-management-services",
  },
  {
    title: "Payroll Processing",
    description: "Accurate payroll computation, statutory compliance, and employee payment management.",
    icon: CreditCard,
    href: "/services/payroll-processing-services",
  },
  {
    title: "Company Formation",
    description: "Business registration, secretarial services, and ongoing compliance support.",
    icon: Building2,
    href: "/services/company-formation",
  },
  {
    title: "Director Services",
    description: "Nominee director and corporate governance solutions for local and foreign entities.",
    icon: FileText,
    href: "/services/director-services",
  },
];

export const BgvExplanation = memo(function BgvExplanation() {
  return (
    <section className="bg-white py-10 px-4 md:px-6" aria-labelledby="services-overview-heading">
      <div className="mx-auto w-full max-w-[1440px] rounded-[40px] bg-[#0a0a0a] p-8 md:p-12 lg:p-20 text-white overflow-hidden relative">
        {/* Background Image/Texture */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden="true">
             <Image 
                src="https://framerusercontent.com/images/vrhxHFTuxnCduP4nljUulqZcuQ.jpg" 
                alt="Ontriq office environment background abstract texture" 
                fill
                className="object-cover"
                loading="lazy"
                sizes="100vw"
             />
        </div>
        
        <div className="relative z-10 flex flex-col gap-16 lg:gap-24">
          {/* Header */}
          <ScrollAnimate className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
              <span className="text-white">002</span>
              <span>What We Do</span>
            </div>
            <h2 id="services-overview-heading" className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Our <span className="text-[#F75834]">Services</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              From verification to HR, recruitment to company setup&mdash;we provide the full spectrum of workforce and business solutions across Sri Lanka.
            </p>
          </ScrollAnimate>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimate key={index} delay={index * 0.1}>
                <Link 
                  href={service.href}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#F75834]/30 transition-all duration-300 h-full group"
                >
                  <div className="p-2 rounded-full bg-[#F75834]/20 text-[#F75834] w-fit">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-1">{service.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-[#F75834] group-hover:gap-2 transition-all duration-300">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
