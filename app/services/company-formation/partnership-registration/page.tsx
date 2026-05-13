import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Partnership Registration Sri Lanka | Business Partnership Setup | Ontriq',
  description: 'Register a partnership in Sri Lanka with Ontriq. General and limited partnership registration, partnership agreements, and regulatory compliance for business partners.',
  keywords: ['partnership registration Sri Lanka', 'register partnership', 'business partnership Sri Lanka', 'general partnership', 'limited partnership'],
  openGraph: {
    title: 'Partnership Registration Sri Lanka | Ontriq',
    description: 'Expert partnership registration and setup services in Sri Lanka.',
    url: 'https://www.ontriq.com/services/company-formation/partnership-registration',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Partnership Registration Sri Lanka' }],
  },
  twitter: { card: 'summary_large_image', title: 'Partnership Registration Sri Lanka | Ontriq', description: 'Expert partnership registration and setup services in Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/company-formation/partnership-registration' },
};

export default function PartnershipRegistrationPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": "Partnership Registration", "serviceType": "Partnership Setup", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" }, "areaServed": { "@type": "Country", "name": "Sri Lanka" } };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Company Formation", "item": "https://www.ontriq.com/services/company-formation" },
    { "@type": "ListItem", "position": 4, "name": "Partnership Registration", "item": "https://www.ontriq.com/services/company-formation/partnership-registration" },
  ]};

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceHero serviceNumber="005-D" title="Partnership" subtitle="Registration" description="Partnerships offer a flexible and cost-effective way for two or more individuals to start a business in Sri Lanka. Ontriq handles the registration, agreement drafting, and regulatory setup." />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Partnership Registration in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">A partnership in Sri Lanka is governed by the Partnership Ordinance and involves two or more individuals (up to 20) carrying on business with a view to profit. Unlike a Pvt Ltd company, a partnership does not have a separate legal identity, so partners share liability for business debts.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq registers partnerships with the relevant provincial secretariat, drafts comprehensive partnership agreements, and ensures all tax and regulatory registrations are completed.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Types of Partnerships</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['General Partnership: all partners share liability equally', 'Limited Partnership: limited partners have restricted liability', 'Professional partnerships (accountants, lawyers, doctors)', 'Family business partnerships'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Partnership vs. Pvt Ltd Company</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">While partnerships are simpler and cheaper to set up, they lack the limited liability protection of a Pvt Ltd company. If you&apos;re unsure which structure is right for your business, Ontriq provides <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">legal structure advisory</Link> to help you decide.</p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Our Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Advisory', desc: 'Understanding your business model and advising whether a partnership is the best structure.' },
              { step: '02', title: 'Agreement Drafting', desc: 'Preparing a comprehensive partnership agreement covering profit sharing, roles, and exit terms.' },
              { step: '03', title: 'Registration', desc: 'Filing the partnership with the relevant provincial secretariat and obtaining registration.' },
              { step: '04', title: 'Tax Setup', desc: 'TIN registration and any required tax registrations with the Inland Revenue Department.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600">Partnership registration is part of our <Link href="/services/company-formation" className="text-[#0098F3] font-semibold hover:underline">company formation services</Link>.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
