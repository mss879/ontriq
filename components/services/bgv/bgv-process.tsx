'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { 
  Briefcase, 
  GraduationCap, 
  Gavel, 
  UserCheck, 
  MessageSquareQuote, 
  Globe, 
  FlaskConical 
} from 'lucide-react';

const processSteps = [
  {
    title: "Employment History Verification",
    description: "We verify a candidate’s past job roles, tenure, designations, reporting structure, and reasons for leaving directly with previous employers or HR departments. This confirms professional track records and mitigates the risk of falsified experiences.",
    icon: Briefcase
  },
  {
    title: "Educational Qualification Verification",
    description: "We validate academic degrees, diplomas, transcripts, and professional certifications by contacting issuing universities, colleges, or credentialing institutions directly to ensure legitimacy and compliance with hiring standards.",
    icon: GraduationCap
  },
  {
    title: "Criminal Record & Legal Checks",
    description: "We conduct detailed searches for criminal histories, pending litigation, or active court cases using authorized legal databases, police registries, and official records to ensure workplace safety and legal compliance.",
    icon: Gavel
  },
  {
    title: "Identity & Address Verification",
    description: "We authenticate government-issued identification cards, passports, and driving licenses. Additionally, residential addresses are validated via physical field visits and official database cross-referencing to ensure traceability.",
    icon: UserCheck
  },
  {
    title: "Professional Reference Checks",
    description: "We reach out to previous supervisors, reporting managers, or senior colleagues to acquire structured feedback regarding the candidate's professional competence, work ethic, reliability, and team collaboration.",
    icon: MessageSquareQuote
  },
  {
    title: "Global Sanction & Watchlist Screening",
    description: "We screen candidates against international sanction lists and global watchlists (such as OFAC, Interpol, and UN databases) to protect your company from global compliance and reputational hazards.",
    icon: Globe
  },
  {
    title: "Drug Testing & Screening",
    description: "We coordinate pre-employment and random drug screenings through certified laboratories, ensuring compliance with industry safety regulations and promoting a healthy, productive working environment.",
    icon: FlaskConical
  }
];

export function BgvProcess() {
  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
              <span className="h-1 w-8 rounded-full bg-[#F75834]" />
              <span className="text-slate-900">07</span>
              <span>Verification Layers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6">
              Multi-Layer Verification
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              We conduct rigorous checks across seven distinct verification layers to deliver a comprehensive, risk-mitigated candidate profile.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-px w-32 bg-slate-300"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ScrollAnimate
              key={index}
              delay={index * 0.08}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-[#F75834]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient blob */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-50 blur-3xl group-hover:bg-orange-100 transition-colors duration-500" />
              
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#F75834] group-hover:w-full transition-all duration-500 ease-out" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#F75834] group-hover:border-[#F75834] transition-all duration-300 shadow-sm">
                    <step.icon className="h-7 w-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-4xl font-bold text-[#F75834]/20 group-hover:text-[#F75834]/40 transition-colors duration-300 select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
