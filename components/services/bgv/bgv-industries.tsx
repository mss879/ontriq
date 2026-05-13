'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    name: 'BPO & IT Services',
    description: 'Business process outsourcing and technology companies require rigorous verification due to data access and client confidentiality requirements.',
    checks: ['Employment History', 'Criminal Checks', 'Education Verification', 'Reference Checks'],
  },
  {
    name: 'Banking & Financial Services',
    description: 'Financial institutions face strict regulatory requirements for screening employees who handle sensitive financial data and transactions.',
    checks: ['Criminal & Legal Checks', 'Global Sanctions', 'Credit History', 'Identity Verification'],
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    description: 'Patient safety and regulatory compliance demand thorough verification of medical credentials, licensing, and professional conduct history.',
    checks: ['Education Verification', 'License Checks', 'Drug Screening', 'Criminal Checks'],
  },
  {
    name: 'Manufacturing & Logistics',
    description: 'Workplace safety and operational integrity require identity authentication, address verification, and screening for past incidents.',
    checks: ['Identity Verification', 'Address Checks', 'Criminal Checks', 'Drug Testing'],
  },
  {
    name: 'Hospitality & Retail',
    description: 'Customer-facing industries need to ensure employees are trustworthy and have verified backgrounds to protect brand reputation.',
    checks: ['Identity Verification', 'Criminal Checks', 'Employment History', 'Reference Checks'],
  },
  {
    name: 'Education & Non-Profits',
    description: 'Organizations working with vulnerable populations require comprehensive screenings to ensure the highest standards of safety and integrity.',
    checks: ['Criminal & Legal Checks', 'Education Verification', 'Reference Checks', 'Identity Verification'],
  },
];

export function BgvIndustries() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" />
            <span className="text-slate-900">05</span>
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 rounded-[24px] border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors">
                {industry.name}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.checks.map((check, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                    {check}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
