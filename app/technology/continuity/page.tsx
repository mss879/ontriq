import { TechHero } from '@/components/technology/tech-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Continuity Plan & Operational Resilience | Ontriq',
  description: 'Discover Ontriq\'s robust business continuity plan. Learn how we guarantee uninterrupted HR, payroll, BGV, and recruitment services during any disruption.',
  keywords: ['business continuity', 'operational resilience', 'disaster recovery', 'service redundancy', 'workforce contingency plan', 'risk mitigation'],
  alternates: {
    canonical: 'https://www.ontriq.com/technology/continuity',
  },
};

export default function ContinuityPage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="04"
        title="Our Continuity"
        subtitle="Plan"
        description={`At Ontriq, we understand the importance of uninterrupted service delivery across our core offerings, including Background Verification, Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation & Regulatory Setup.

To ensure continuous operations during disruptions, we have implemented several Business Continuity options designed for resilience, flexibility, and rapid recovery.`}
      />
      <CTASection />
    </main>
  );
}
