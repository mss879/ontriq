import { Breadcrumbs } from '@/components/breadcrumbs';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BGV & Hiring Resources for Sri Lankan Employers',
  description: 'Practical guides on background checks, employee screening, hiring compliance, and the Personal Data Protection Act — written for HR teams and employers in Sri Lanka.',
  openGraph: {
    title: 'BGV & Hiring Resources for Sri Lankan Employers',
    description: 'Practical guides on background checks, employee screening, and hiring compliance in Sri Lanka.',
    url: 'https://www.ontriq.com/resources',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq BGV & Hiring Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGV & Hiring Resources for Sri Lankan Employers',
    description: 'Practical guides on background checks, employee screening, and hiring compliance in Sri Lanka.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/resources',
  },
};

const articles = [
  {
    slug: 'how-to-do-background-checks-on-employees-in-sri-lanka',
    title: 'How to Do Background Checks on Employees in Sri Lanka',
    description: 'A step-by-step guide to running compliant employee background checks — what to verify, in what order, and the mistakes to avoid.',
    tag: 'Guide',
  },
  {
    slug: 'background-verification-cost-sri-lanka',
    title: 'How Much Does Background Verification Cost in Sri Lanka?',
    description: 'What drives BGV pricing, how package tiers work, and how to budget screening for different roles and hiring volumes.',
    tag: 'Pricing',
  },
  {
    slug: 'personal-data-protection-act-guide-for-employers',
    title: 'Sri Lanka\'s Personal Data Protection Act: A Guide for Employers',
    description: 'What the PDPA means for hiring and employee screening — consent, lawful purpose, data security, and candidate rights.',
    tag: 'Compliance',
  },
  {
    slug: 'pre-employment-screening-checklist-sri-lanka',
    title: 'Pre-Employment Screening Checklist for Sri Lankan Employers',
    description: 'A printable, role-by-role checklist covering every document and check to complete before an offer letter goes out.',
    tag: 'Checklist',
  },
  {
    slug: 'how-long-does-a-background-check-take-in-sri-lanka',
    title: 'How Long Does a Background Check Take in Sri Lanka?',
    description: 'Realistic timelines for each type of check, what slows verification down, and how 7-working-day turnarounds are achieved.',
    tag: 'Guide',
  },
  {
    slug: 'background-check-red-flags-employers-guide',
    title: 'Background Check Red Flags: What Employers Should Do Next',
    description: 'How to read a verification report, which discrepancies matter, and how to respond fairly and legally when one appears.',
    tag: 'Guide',
  },
];

export default function ResourcesPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BGV & Hiring Resources for Sri Lankan Employers',
    description: 'Practical guides on background checks, employee screening, hiring compliance, and the Personal Data Protection Act for employers in Sri Lanka.',
    url: 'https://www.ontriq.com/resources',
    hasPart: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: `https://www.ontriq.com/resources/${article.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ontriq.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.ontriq.com/resources' },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: 'Home', href: '/' }, { label: 'Resources' }]}
        className="container mx-auto px-4 md:px-6 pt-28 md:pt-32"
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 leading-tight mb-6">
              BGV &amp; Hiring Resources
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Practical, plain-English guides on background verification, employee screening, and hiring compliance&mdash;written for HR teams and business owners in Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="group flex flex-col justify-between p-8 rounded-[24px] border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-500"
              >
                <div>
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#0098F3] mb-4">
                    {article.tag}
                  </span>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#F75834] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    {article.description}
                  </p>
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-[#0098F3] group-hover:text-[#F75834] transition-colors">
                  Read the guide <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[24px] border border-slate-200 bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Need screening done, not just explained?
              </h2>
              <p className="text-slate-600">
                Explore our{' '}
                <Link href="/services/bgv" className="text-[#0098F3] font-medium hover:text-[#F75834] underline underline-offset-4">
                  background verification services in Sri Lanka
                </Link>{' '}
                &mdash; complete cases delivered in 7 working days.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-[#F75834] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
