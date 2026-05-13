import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Employer Branding Services Sri Lanka | Ontriq',
  description: 'Build your employer brand in Sri Lanka with Ontriq. Attract top talent through employer value proposition development, recruitment marketing, and candidate experience optimization.',
  keywords: ['employer branding Sri Lanka', 'employer value proposition', 'recruitment marketing', 'talent attraction', 'employer brand strategy'],
  openGraph: {
    title: 'Employer Branding Services Sri Lanka | Ontriq',
    description: 'Position your company as an employer of choice in Sri Lanka.',
    url: 'https://www.ontriq.com/services/recruitment-services/employer-branding',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Employer Branding' }],
  },
  twitter: { card: 'summary_large_image', title: 'Employer Branding Services Sri Lanka | Ontriq', description: 'Position your company as an employer of choice in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/recruitment-services/employer-branding' },
};

export default function EmployerBrandingPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Employer Branding Services", "serviceType": "Employer Branding",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
      { "@type": "ListItem", "position": 4, "name": "Employer Branding", "item": "https://www.ontriq.com/services/recruitment-services/employer-branding" },
    ],
  };

  const brandingServices = [
    'Employer Value Proposition (EVP) development', 'Careers page design and optimization',
    'Employee testimonial and story content', 'Social media employer brand campaigns',
    'Job description optimization', 'Candidate experience auditing',
    'Glassdoor and review platform management', 'Recruitment marketing strategy',
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="003-F" title="Employer Branding" subtitle="& Talent Attraction"
        description="The best candidates choose employers, not the other way around. Ontriq's employer branding services help you position your company as an employer of choice in Sri Lanka's competitive talent market." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Is Employer Branding?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Employer branding is the process of promoting your company as a desirable place to work. It encompasses your employer value proposition (EVP), candidate experience, employee advocacy, and how your organization is perceived in the job market.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">In Sri Lanka&apos;s growing job market, companies with strong employer brands attract better candidates faster and at lower cost. Ontriq helps you define what makes your workplace unique and communicate that effectively to your target talent pool.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Employer Branding Services</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {brandingServices.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#F75834] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Employer Branding Matters</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Companies with strong employer brands see 50% more qualified applicants, reduce cost-per-hire by up to 50%, and improve employee retention. In Sri Lanka, where competition for skilled workers is intensifying, your employer brand is a strategic asset that directly impacts your ability to attract and retain top talent.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Approach</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Brand Audit', desc: 'Analyzing your current employer brand perception through employee surveys, candidate feedback, and market research.' },
              { step: '02', title: 'EVP Development', desc: 'Crafting a compelling employer value proposition that differentiates you from competitors.' },
              { step: '03', title: 'Content Strategy', desc: 'Creating authentic content including employee stories, behind-the-scenes content, and culture showcases.' },
              { step: '04', title: 'Channel Activation', desc: 'Deploying your employer brand across careers pages, social media, job boards, and recruitment channels.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#F75834] shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Employer branding is part of our <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment services</Link>. Contact us to build your employer brand.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
