import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Sanction & Watchlist Screening in Sri Lanka',
  description: 'Ontriq screens candidates against OFAC, UN, and EU sanction lists, global watchlists, and PEP databases for Sri Lankan employers in 1-2 working days.',
  keywords: ['sanction screening Sri Lanka', 'global watchlist screening', 'AML candidate screening', 'PEP screening', 'OFAC sanctions check', 'pre-employment compliance screening'],
  openGraph: {
    title: 'Global Sanction & Watchlist Screening in Sri Lanka',
    description: 'Screen candidates against international sanction lists, watchlists, and PEP databases.',
    url: 'https://www.ontriq.com/services/bgv/global-sanction-screening',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Global Sanction & Watchlist Screening' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Sanction & Watchlist Screening in Sri Lanka',
    description: 'Screen candidates against international sanction lists, watchlists, and PEP databases.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: 'https://www.ontriq.com/services/bgv/global-sanction-screening' },
};

export default function GlobalSanctionScreeningPage() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Global Sanction & Watchlist Screening", "serviceType": "Sanction and Watchlist Screening",
    "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Global sanction and watchlist screening services in Sri Lanka &mdash; checking candidates against international sanction lists, watchlists, and PEP databases.",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Global Sanction & Watchlist Screening", "item": "https://www.ontriq.com/services/bgv/global-sanction-screening" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-F"
        title="Global Sanction & Watchlist"
        subtitle="Screening"
        description="Before a new hire touches client money, customer data, or international contracts, you need to know they do not appear on a sanction list or global watchlist. Our screening service checks every candidate against the databases that matter most."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            What Is Global Sanction &amp; Watchlist Screening?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Global sanction and watchlist screening is the process of checking a candidate&apos;s name and identity details against international sanction lists, law enforcement watchlists, and anti-money laundering (AML) databases. The goal is straightforward: to confirm that the person you are about to hire is not a sanctioned individual, a fugitive subject to an international notice, or someone flagged for financial crime concerns anywhere in the world.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The screen typically covers sanction lists published by the United States (such as OFAC lists), the United Nations, and the European Union, alongside Interpol notices and databases of politically exposed persons (PEPs). Because these lists are maintained by different authorities and updated constantly, checking them properly requires structured searches and careful review of the results &mdash; not a quick name lookup.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What We Screen Against
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              'OFAC sanction lists (United States)',
              'UN Security Council sanction lists',
              'EU consolidated sanction lists',
              'Interpol notices',
              'Politically exposed persons (PEP) databases',
              'Global law enforcement watchlists',
              'AML and financial crime databases',
              'International regulatory enforcement lists',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Why It Matters for Sri Lankan Companies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            For banks, finance companies, and other regulated institutions in Sri Lanka, screening is not optional in practice. Central bank expectations around AML and counter-terrorism financing mean that an employee who later turns out to be a sanctioned or watchlisted individual is a serious regulatory problem &mdash; one that is far cheaper to prevent at the hiring stage than to remediate afterward.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The same logic applies well beyond banking. Sri Lankan BPO and IT firms handle sensitive data and systems for international clients, and those clients increasingly require proof that staff have been screened before granting access. Export businesses face a parallel risk: dealings that involve sanctioned individuals can jeopardize banking relationships, shipping arrangements, and access to overseas markets.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            In short, if your company serves global clients or moves money across borders, a sanction hit inside your workforce is a business continuity risk, not just an HR issue.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            What a Match Does &mdash; and Doesn&apos;t &mdash; Mean
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A potential match is a starting point, not a verdict. Sanction and watchlist databases contain millions of entries, and many South Asian names are shared by large numbers of people. A raw name match may simply be a different person with a similar name. That is why our analysts review every potential hit against the candidate&apos;s date of birth, nationality, and identity documents before anything appears in your report.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Equally, a clear screen does not certify that a candidate has no history of wrongdoing &mdash; it confirms they do not currently appear on the lists checked. For a fuller picture, most employers pair this screen with a criminal record check and identity verification.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            How Ontriq Runs the Screen
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Consent & Identity Capture', desc: 'The candidate provides written consent — mandatory under Sri Lanka\'s Personal Data Protection Act — and submits identity details through our secure document portal.' },
              { step: '02', title: 'Multi-List Screening', desc: 'We run structured searches across international sanction lists, watchlists, PEP databases, and AML sources using the candidate\'s full name and identifiers.' },
              { step: '03', title: 'Match Review', desc: 'Analysts examine every potential hit, eliminating false positives by comparing dates of birth, nationalities, and document details.' },
              { step: '04', title: 'Quality Control', desc: 'Findings pass through our dual-analyst quality control process, which underpins our 98%+ report accuracy.' },
              { step: '05', title: 'Reporting', desc: 'Results are delivered within 1-2 working days, and you can follow progress at any time through our real-time case tracking portal.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">
            Who Should Include This Check
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Sanction and watchlist screening is included in our Enterprise package &mdash; designed for executives and compliance-sensitive roles &mdash; and can be added to any other package as a standalone check. We recommend it for banks and finance companies, BPO and IT firms with international contracts, exporters and logistics businesses, and any role with authority over payments, treasury functions, or client funds. Because the screen completes in 1-2 working days and runs in parallel with your other checks, adding it does not delay your overall report.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">
            Common Questions
          </h2>
          <div className="space-y-6 mb-12">
            {[
              { q: 'How long does sanction screening take?', a: 'Typically 1-2 working days. It runs in parallel with other checks, so a complete multi-check case is still delivered within 7 working days.' },
              { q: 'Is this screening legal in Sri Lanka?', a: 'Yes. Background verification is lawful in Sri Lanka and is governed primarily by the Personal Data Protection Act (No. 9 of 2022). Candidate consent is obtained before any screening begins.' },
              { q: 'What happens if a candidate matches a list?', a: 'We verify whether the match is genuine before reporting it. Confirmed findings are documented factually in your report; the hiring decision always remains with you.' },
              { q: 'Do I need this for every hire?', a: 'Not necessarily. Many employers reserve it for senior, financial, and client-facing roles, while regulated institutions often screen all staff.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Global sanction &amp; watchlist screening is one component of our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>. To discuss which checks fit your roles, <Link href="/contact" className="text-[#0098F3] font-semibold hover:underline">contact our team</Link> &mdash; we serve employers island-wide from our Colombo district office.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Other Verification Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/bgv/criminal-record-check" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Criminal Record Check</h3>
                <p className="text-xs text-slate-500">Police & court record screening</p>
              </Link>
              <Link href="/services/bgv/identity-address-verification" className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1">Identity & Address Verification</h3>
                <p className="text-xs text-slate-500">Authenticate IDs & addresses</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
