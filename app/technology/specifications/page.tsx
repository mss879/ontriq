import { TechHero } from '@/components/technology/tech-hero';
import { TechSpecList } from '@/components/technology/tech-spec-list';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology We Use & System Specifications | Ontriq',
  description: 'View our technology tools and system specifications. We leverage AI screening, automated BGV engines, and advanced payroll platforms for maximum efficiency.',
  keywords: ['automated BGV engines', 'AI screening tools', 'video interviewing', 'EPF ETF payroll software', 'digital compliance systems'],
  openGraph: {
    title: 'Technology We Use & System Specifications | Ontriq',
    description: 'View our technology tools and system specifications. We leverage AI screening, automated BGV engines, and advanced payroll platforms for maximum efficiency.',
    url: 'https://www.ontriq.com/technology/specifications',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Technology We Use & System Specifications | Ontriq' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology We Use & System Specifications | Ontriq',
    description: 'View our technology tools and system specifications. We leverage AI screening, automated BGV engines, and advanced payroll platforms for maximum efficiency.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/technology/specifications',
  },
};

const specs = [
  {
    title: 'Background Verification Technology',
    iconType: 'bgv' as const,
    points: [
      'Applicant Tracking Systems (ATS): To track and manage candidate data and verification status.',
      'Automated Verification Platforms: Integrated databases and APIs to verify education, employment history, criminal records, and identity in real-time.'
    ]
  },
  {
    title: 'Human Resource Management Systems',
    iconType: 'hr' as const,
    points: [
      'Comprehensive platforms for managing employee records, attendance, leave, performance evaluations, and compliance tracking.',
      'Self-service portals for employees to update information and access HR resources.',
      'Workflow automation for approvals, notifications, and document management.'
    ]
  },
  {
    title: 'Talent Acquisition & Recruitment Software',
    iconType: 'recruitment' as const,
    points: [
      'Applicant Tracking Systems (ATS): For sourcing, screening, and managing candidates through recruitment pipelines.',
      'Video Interviewing Platforms: For remote interviews and assessments.',
      'AI-Powered Screening Tools: To evaluate resumes and match candidates to job requirements efficiently.'
    ]
  },
  {
    title: 'Payroll Management Systems',
    iconType: 'payroll' as const,
    points: [
      'Software that automates salary calculations, tax deductions, benefits administration, and statutory compliance (e.g., EPF, ETF, PAYE in Sri Lanka).',
      'Integration with attendance and leave management systems for accuracy.',
      'Secure generation and distribution of payslips and tax documents.'
    ]
  },
  {
    title: 'Business Formation & Regulatory Tools',
    iconType: 'formation' as const,
    points: [
      'Document management systems for handling incorporation paperwork, licenses, and agreements.',
      'Compliance monitoring software to track regulatory deadlines and filings.',
      'Digital signature and e-filing platforms to streamline submissions with government agencies.'
    ]
  }
];

export default function SpecificationsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Technology", "item": "https://www.ontriq.com/technology" },
      { "@type": "ListItem", "position": 3, "name": "Specifications", "item": "https://www.ontriq.com/technology/specifications" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TechHero 
        pageNumber="02"
        title="Technology We Use"
        subtitle="For Our Services"
        description="We leverage advanced tools and platforms to ensure precision, efficiency, and compliance across all our service lines."
      />
      <TechSpecList items={specs} />
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Technology Pages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/technology/infrastructure" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Infrastructure</h3>
              <p className="text-xs text-slate-500">Systems & platforms</p>
            </Link>
            <Link href="/technology/security" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Security</h3>
              <p className="text-xs text-slate-500">ISMS framework</p>
            </Link>
            <Link href="/technology/continuity" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Continuity</h3>
              <p className="text-xs text-slate-500">Recovery plans</p>
            </Link>
            <Link href="/technology/confidentiality" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Confidentiality</h3>
              <p className="text-xs text-slate-500">Data protection</p>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">View our full <Link href="/technology" className="text-[#0098F3] font-semibold hover:underline">technology overview</Link>.</p>
        </div>
      </section>
      <CTASection />
    </main>
  );
}

