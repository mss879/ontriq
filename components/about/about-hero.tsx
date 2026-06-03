'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award } from 'lucide-react';

const highlights = [
  { icon: Building2, label: 'Division of Konnect BPO Technologies' },
  { icon: Users, label: 'Full-Spectrum Workforce Solutions' },
  { icon: Globe, label: 'Operating Across Sri Lanka' },
  { icon: Award, label: 'Trusted by Leading Enterprises' },
];

export const AboutHero = memo(function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="about-hero-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-4xl"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
              <span className="text-slate-900">001</span>
              <span>Who We Are</span>
            </div>
            <h1 id="about-hero-heading" className="text-[44px] font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.1]">
              Sri Lanka&apos;s Trusted <span className="text-slate-400">Workforce Solutions Partner.</span>
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Main Text */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-6 text-base text-slate-500 md:text-lg leading-relaxed">
                <h2 className="text-3xl font-semibold text-slate-900">Who is Ontriq?</h2>
                <p>
                  Ontriq is a trusted workforce solutions provider in Sri Lanka, offering end-to-end services in verification, HR management, recruitment, payroll processing, and company formation. We are part of <strong className="text-slate-900">Konnect BPO Technologies (Pvt) Ltd</strong>, one of the leading BPOs in the country.
                </p>
                <p>
                  From pre-employment screening to full-cycle HR operations, we help businesses of every size build confident, compliant, and high-performing teams.
                </p>
                <blockquote className="p-6 bg-orange-50 border border-orange-100 rounded-2xl">
                  <p className="text-orange-900 font-medium">
                    &ldquo;We exist to help organisations hire with confidence, operate compliantly, and grow sustainably.&rdquo;
                  </p>
                </blockquote>
              </div>
            </motion.div>

            {/* Right Column: Highlights */}
            <motion.aside 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5"
              aria-label="Company highlights"
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">At a Glance</h3>
                <ul className="space-y-6" role="list">
                  {highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F75834]" aria-hidden="true">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>

          </div>
        </div>
      </div>
    </section>
  );
});
