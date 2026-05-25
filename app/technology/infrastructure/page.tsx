import { TechHero } from '@/components/technology/tech-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Infrastructure & Automated HR Platforms | Ontriq',
  description: 'Discover Ontriq\'s robust technology infrastructure. We leverage advanced ATS, automated BGV platforms, and secure systems for premium business operations.',
  keywords: ['technology infrastructure', 'applicant tracking systems', 'ATS software', 'automated BGV platform', 'secure HR database', 'system scaling'],
  alternates: {
    canonical: 'https://www.ontriq.com/technology/infrastructure',
  },
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-white">
      <TechHero 
        pageNumber="01"
        title="Technology &"
        subtitle="Infrastructure"
        description={`At Ontriq, our investment in cutting-edge technology and robust infrastructure is central to delivering excellence across all our service verticals, including Background Verification (BGV), Human Resource Management, Talent Acquisition, Payroll Administration, and Business Formation and Regulatory Setup.

In today’s fast-moving business environment, organizations require speed, precision, flexibility, and compliance, all of which are enabled by technology. Our advanced systems streamline complex processes, ensure data accuracy, enhance security, and support real-time reporting. Whether it's automating payroll, securely managing employee data, verifying candidate backgrounds, or navigating regulatory frameworks, our tech-enabled solutions are designed to meet your business objectives efficiently and reliably.

With deep domain expertise and state-of-the-art tools, we ensure your operational processes are not only optimized but aligned with your long-term strategic goals.`}
      />
      <CTASection />
    </main>
  );
}
