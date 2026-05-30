import { TechHero } from '@/components/technology/tech-hero';
import { TechContent } from '@/components/technology/tech-content';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Confidentiality & Data Discretion Policy | Ontriq',
  description: 'Learn about Ontriq\'s strict confidentiality policy. Discover how we protect sensitive candidate, client, and company data with strict internal controls.',
  keywords: ['confidentiality policy', 'data discretion', 'information privacy', 'secure data systems', 'corporate compliance', 'data protection'],
  alternates: {
    canonical: 'https://www.ontriq.com/technology/confidentiality',
  },
};

const confidentialityPoints = [
  'Ensuring that all client and candidate data is handled with the utmost discretion and in full compliance with applicable privacy regulations.',
  'Preventing unauthorized access, disclosure, alteration, or destruction of any confidential information through secure systems and rigorous access controls.',
  'Maintaining a culture of confidentiality among our team, supported by formal non-disclosure agreements (NDAs), regular staff training, and clearly defined internal policies.'
];

export default function ConfidentialityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="05"
        title="Confidentiality"
        subtitle="Policy Statement"
        description={`We uphold the highest standards of confidentiality and data security as a foundational principle of our delivery service.`}
      />
      <TechContent 
        title="We are committed to:"
        points={confidentialityPoints}
        footerText="Ontriq assumes full accountability for the protection of sensitive information and has a proven record of safeguarding our clients' trust. This commitment is embedded in our operations today and will remain a core value in the future."
      />
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Technology Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/technology/infrastructure" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Infrastructure</h3>
              <p className="text-xs text-slate-500">Systems & platforms</p>
            </Link>
            <Link href="/technology/specifications" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Specifications</h3>
              <p className="text-xs text-slate-500">Tools we use</p>
            </Link>
            <Link href="/technology/security" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Security</h3>
              <p className="text-xs text-slate-500">ISMS framework</p>
            </Link>
            <Link href="/technology/continuity" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Continuity</h3>
              <p className="text-xs text-slate-500">Recovery plans</p>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">View our full <Link href="/technology" className="text-[#0098F3] font-semibold hover:underline">technology overview</Link>.</p>
        </div>
      </section>
      <CTASection />
    </main>
  );
}

