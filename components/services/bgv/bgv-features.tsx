'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { Plus } from 'lucide-react';

const features = [
  {
    title: 'Speed with Accuracy',
    description: 'We boast an industry-leading turnaround time of just 7 working days for complete verification reports without compromising accuracy. By employing parallel processing workflows, direct checks, and rigorous dual-analyst quality controls, we ensure you hire the right talent quickly and confidently.',
    stat: '7 Days'
  },
  {
    title: 'Comprehensive Verification Checks',
    description: 'Our screening covers all essential layers: employment history, educational credentials, criminal records, identity validation, address verification, and professional references. This holistic scope ensures there are no blind spots, providing you with a complete candidate risk profile.',
    stat: '100%'
  },
  {
    title: 'Local Expertise & Institutional Networks',
    description: 'We maintain strong, direct relationships with Sri Lankan educational institutions, government registries, police channels, and local corporate networks. This local presence enables us to bypass red tape and verify details faster and more reliably than overseas providers.',
    stat: 'Local'
  },
  {
    title: 'Dedicated Account Manager',
    description: 'Each client is paired with a dedicated Account Manager who acts as a single point of contact. This specialist coordinates checks, addresses questions in real time, and helps customize verification depth to suit your varying department needs and seniority levels.',
    stat: 'Dedicated'
  },
  {
    title: 'Real-Time Tracking Portal',
    description: 'Clients gain access to our secure client portal, allowing HR teams and hiring managers to track the status of ongoing background verification cases. From document submission to final PDF delivery, you have full transparency over every stage of the check.',
    stat: 'Real-Time'
  },
  {
    title: 'Strict Data Security & Privacy Integrity',
    description: 'We prioritize candidate data protection above all. All operations are fully compliant with the Sri Lanka Personal Data Protection Act and international GDPR principles. Candidate data is transmitted securely via SSL encryption and stored in secure, access-controlled environments.',
    stat: 'Secure'
  },
  {
    title: 'Tailored Industry Solutions',
    description: 'We adapt our verification depth and package composition to suit the specific regulatory and risk profiles of different sectors, including IT/BPO, Banking & Finance, Healthcare, and Logistics, ensuring you only pay for what is relevant to the job.',
    stat: 'Custom'
  }
];

export function BgvFeatures() {
  return (
    <section id="why-choose-ontriq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
            <span className="h-1 w-8 rounded-full bg-[#F75834]" />
            <span className="text-slate-900">04</span>
            <span>Why Ontriq</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900">
            Why Choose Ontriq?
          </h2>
        </div>
        
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.1}
              className="group border-t border-slate-200 py-12 md:py-16 transition-colors hover:bg-slate-50/50"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 lg:col-span-6">
                  <h3 className="text-3xl md:text-4xl font-medium text-slate-900 group-hover:text-[#F75834] transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="md:col-span-5 lg:col-span-4">
                  <p className="text-lg text-slate-500 leading-relaxed text-justify">
                    {feature.description}
                  </p>
                </div>

                <div className="md:col-span-2 lg:col-span-2 flex justify-end items-center">
                  <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#F75834] group-hover:bg-[#F75834] transition-all duration-300">
                    <Plus className="h-6 w-6 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
          <div className="border-t border-slate-200" />
        </div>
      </div>
    </section>
  );
}
