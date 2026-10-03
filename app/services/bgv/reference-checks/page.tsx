import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { BgvQuote } from '@/components/services/bgv/bgv-quote';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import { BgvSubpageLinks } from '@/components/services/bgv/bgv-subpage-links';
import type { Metadata } from 'next';
import Link from 'next/link';

const TITLE = 'Professional Reference Check Services in Sri Lanka';
const DESCRIPTION = 'Professional reference checks in Sri Lanka. Ontriq validates each referee, runs structured interviews with former supervisors, and reports consistent, comparable feedback.';
const URL = 'https://www.ontriq.com/services/bgv/reference-checks';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['reference check Sri Lanka', 'professional reference check', 'employment reference verification', 'referee check Sri Lanka', 'pre-employment reference check'],
  openGraph: {
    title: TITLE,
    description: 'Validated referees and structured interviews with former supervisors.',
    url: URL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Reference Checks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Validated referees and structured interviews with former supervisors.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: URL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'How many references should an employer check?',
    answer: 'Two to three professional references is standard, ideally including the candidate\'s most recent direct supervisor. Senior and sensitive roles justify more, while for entry-level roles one academic or internship reference may be all that is available.',
  },
  {
    question: 'How do you know a referee is genuine?',
    answer: 'Before the interview we confirm that the referee actually worked at the stated organisation and in a role that gave them direct knowledge of the candidate\'s work. Contact details are checked independently rather than taken only from the CV, which guards against friends or relatives posing as former managers.',
  },
  {
    question: 'What if a referee refuses to comment?',
    answer: 'Some organisations only confirm dates and job titles as a matter of policy. We record the refusal neutrally, since it is not a negative signal on its own, and ask the candidate for an alternative referee where needed.',
  },
  {
    question: 'Is a reference check the same as employment verification?',
    answer: 'No. Employment verification confirms facts, such as titles, dates and reasons for leaving, with the employer\'s HR records. A reference check gathers a former supervisor\'s view of how the candidate actually worked. The two complement each other and are usually run together.',
  },
];

export default function ReferenceChecksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Reference Checks",
    "serviceType": "Reference Check",
    "url": URL,
    "provider": { "@type": "Organization", "@id": "https://www.ontriq.com/#organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "isRelatedTo": { "@id": "https://www.ontriq.com/services/bgv#service" },
    "description": DESCRIPTION,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Background Verification", "item": "https://www.ontriq.com/services/bgv" },
      { "@type": "ListItem", "position": 4, "name": "Reference Checks", "item": URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="001-E"
        title="Professional Reference"
        subtitle="Checks in Sri Lanka"
        description="Professional reference checks provide invaluable insights into a candidate's work ethic, performance, and interpersonal skills that cannot be captured through documents alone."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Background Verification', href: '/services/bgv' },
          { label: 'Reference Checks' },
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">What Are Professional Reference Checks?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Professional reference checks involve contacting previous supervisors, managers, colleagues, or other professional contacts provided by the candidate to gather qualitative feedback on their work performance, professional conduct, reliability, and suitability for the role. Unlike document-based verifications, reference checks provide subjective but highly valuable insights into how a candidate actually performs in a professional setting.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">What We Assess</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Quality and consistency of work', 'Reliability and punctuality', 'Teamwork and collaboration skills', 'Communication and interpersonal abilities', 'Leadership and initiative', 'Response to feedback and challenges', 'Reason for leaving previous role', 'Overall recommendation for hire'].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50">
                <div className="h-2 w-2 rounded-full bg-[#0098F3] mt-2 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Why Reference Checks Matter</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A candidate may have strong credentials on paper but demonstrate poor teamwork, unreliable attendance, or a negative attitude in the workplace. Reference checks reveal these behavioral patterns that formal verifications cannot detect. They help employers make more complete, well-rounded hiring decisions.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            At Ontriq, our experienced analysts conduct structured reference interviews using a standardized framework that captures consistent, comparable data across all candidates while allowing referees to provide candid, open-ended feedback.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Getting Honest References in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Referees in Sri Lanka are often reluctant to say anything negative about a former colleague, particularly in a short, informal phone call with a hiring manager they do not know. That politeness makes unstructured reference calls of limited value: almost every candidate comes back &ldquo;good&rdquo;.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A structured interview by an independent third party gets further. Our analysts ask every referee the same specific, behaviour-based questions (for example, how the candidate handled a missed deadline, or what they would need to improve in a more senior role), which makes vague praise easy to spot and gives you answers you can compare across candidates. Referees also tend to speak more freely to a verification provider than to the prospective employer directly.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8 mt-16">Warning Signs in References</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { title: 'Personal contacts as referees', desc: 'Friends, relatives or peers presented as supervisors, often with personal mobile numbers only.' },
              { title: 'No recent supervisor', desc: 'References only from older roles, with nobody from the most recent employer.' },
              { title: 'Scripted answers', desc: 'Identical wording from different referees, or answers that read like the candidate\'s own CV.' },
              { title: 'Mismatched facts', desc: 'A referee whose account of dates, title or reason for leaving differs from the employment verification.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Our Reference Check Process</h2>
          <div className="space-y-6 mb-12">
            {[
              { step: '01', title: 'Reference Collection', desc: 'With the candidate\'s consent, we collect the names and contact details of 2-3 professional references.' },
              { step: '02', title: 'Referee Validation', desc: 'We verify that each referee is a genuine professional contact who worked directly with the candidate.' },
              { step: '03', title: 'Structured Interview', desc: 'Our analysts conduct structured reference interviews covering performance, conduct, and suitability.' },
              { step: '04', title: 'Feedback Documentation', desc: 'All feedback is documented objectively and compiled into a structured reference report.' },
              { step: '05', title: 'Report Delivery', desc: 'Findings are included in the comprehensive BGV report, typically within 2 to 3 working days for this check.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="text-2xl font-bold text-[#0098F3] shrink-0">{item.step}</span>
                <div><h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3><p className="text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>

          <BgvSubpageFaq heading="Reference Check FAQs" items={faqs} />

          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-4">
              Reference checks are part of our <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification services in Sri Lanka</Link>, and work best alongside <Link href="/services/bgv/employment-verification" className="text-[#0098F3] font-semibold hover:underline">employment verification</Link>.
            </p>
            <Link href="/contact" className="inline-block px-6 py-3 rounded-xl bg-[#0098F3] text-white font-semibold hover:opacity-90 transition-opacity">
              Talk to Our Team
            </Link>
          </div>

          <BgvSubpageLinks
            current="reference-checks"
            guides={[
              { href: '/resources/background-check-red-flags-employers-guide', title: 'Background Check Red Flags: An Employer\'s Guide' },
              { href: '/resources/pre-employment-screening-checklist-sri-lanka', title: 'Pre-Employment Screening Checklist for Sri Lankan Employers' },
            ]}
          />
        </div>
      </section>

      <BgvQuote />
      <CTASection />
    </main>
  );
}
