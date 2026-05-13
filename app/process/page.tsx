import type { Metadata } from 'next';
import { ProcessHero } from '@/components/process/process-hero';
import { BgvProcessList } from '@/components/process/bgv-process-list';
import { BgvWorkflowSteps } from '@/components/process/bgv-workflow-steps';

export const metadata: Metadata = {
  title: 'Our Verification Process | How We Work | Ontriq',
  description: 'See how Ontriq\'s step-by-step verification workflow delivers accurate, compliant results in just 7 working days. From data collection to final reporting.',
  keywords: [
    'verification process',
    'how BGV works',
    'verification workflow',
    'verification steps',
    'data collection',
    'compliance check',
    'Ontriq process'
  ],
  openGraph: {
    title: 'Our Verification Process | How We Work | Ontriq',
    description: 'See how Ontriq\'s step-by-step verification workflow delivers accurate, compliant results in just 7 working days.',
    url: 'https://www.ontriq.com/process',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq Verification Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Verification Process | How We Work | Ontriq',
    description: 'See how Ontriq\'s step-by-step verification workflow delivers accurate, compliant results in just 7 working days.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/process',
  },
};

export default function ProcessPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Background Verification Process',
    description: 'Step-by-step guide to Ontriq\'s background verification process.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Data Collection',
        text: 'Collecting necessary documents and information from the candidate.'
      },
      {
        '@type': 'HowToStep',
        name: 'Verification',
        text: 'Verifying the provided information against trusted sources.'
      },
      {
        '@type': 'HowToStep',
        name: 'Quality Check',
        text: 'Ensuring the accuracy and completeness of the verification report.'
      },
      {
        '@type': 'HowToStep',
        name: 'Final Reporting',
        text: 'Delivering the final background verification report to the client.'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProcessHero />
      <BgvProcessList />
      <BgvWorkflowSteps />
    </main>
  );
}
