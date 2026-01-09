import { RecruitmentHero } from '@/components/services/recruitment/recruitment-hero';
import { RecruitmentFeatures } from '@/components/services/recruitment/recruitment-features';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
  description: 'Find top talent in Sri Lanka with Ontriq\'s recruitment services. Expert talent acquisition for your business growth.',
  keywords: ['recruitment Sri Lanka', 'talent acquisition', 'hiring services', 'job placement', 'staffing solutions'],
  openGraph: {
    title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
    description: 'Attract, identify, and hire top-tier talent aligned with your goals.',
    url: 'https://www.ontriq.com/services/recruitment',
    images: [
      {
        url: 'https://www.ontriq.com/ontriq%20favicon.png',
        width: 512,
        height: 512,
        alt: 'Ontriq',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
    description: 'Attract, identify, and hire top-tier talent aligned with your goals.',
    images: ['https://www.ontriq.com/ontriq%20favicon.png'],
  },
};

export default function RecruitmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Recruitment Services",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq"
    },
    "areaServed": "Sri Lanka",
    "description": "Talent acquisition and recruitment solutions to help businesses attract and hire top-tier talent."
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RecruitmentHero 
        serviceNumber="003"
        title="Talent Acquisition"
        subtitle="& Recruitment Solutions"
        description="At Ontriq, our Talent Acquisition and Recruitment Solutions are designed to help businesses attract, identify, and hire top-tier talent aligned with their organizational goals and culture. We deliver customized recruitment strategies that ensure the right candidates are placed in the right roles—efficiently and effectively."
      />
      <RecruitmentFeatures />
      <CTASection />
    </main>
  );
}
