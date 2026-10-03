import { ArticleLayout } from '@/components/resources/article-layout';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'Background Checks for Foreign Companies Hiring in Sri Lanka';
const META_DESC =
  'A guide for overseas employers and EOR clients: which background checks are possible in Sri Lanka, where the records sit, how consent works, and realistic timelines.';
const CANONICAL =
  'https://www.ontriq.com/resources/background-checks-for-foreign-companies-hiring-in-sri-lanka';
const PUBLISHED = '2026-10-03';

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESC,
  openGraph: {
    type: 'article',
    title: TITLE,
    description: META_DESC,
    url: CANONICAL,
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: META_DESC,
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: CANONICAL },
};

const faqs: SubpageFaqItem[] = [
  {
    question: 'Can I use a global screening platform for Sri Lankan hires?',
    answer: 'You can, but check how the platform fulfils each check inside Sri Lanka. Because there is no central employment or education database, the work is done by contacting local employers and institutions. Many global platforms pass this to a local partner, so it is worth knowing who actually performs the checks and how long they take.',
  },
  {
    question: 'Is it legal to run background checks on Sri Lankan candidates from abroad?',
    answer: 'Yes. Background verification is lawful in Sri Lanka when the candidate consents and the checks are relevant to the role. Data handling is shaped by the Personal Data Protection Act, No. 9 of 2022, and your own home-country data protection obligations also apply to the candidate data you receive.',
  },
  {
    question: 'How long does a background check on a Sri Lankan candidate take?',
    answer: 'For checks carried out inside Sri Lanka, a complete multi-check case typically takes 7 to 14 working days; Ontriq delivers within 7 working days by running checks in parallel. Overseas components, such as employment with a foreign company, take longer.',
  },
];

export default function ForeignCompaniesGuidePage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: META_DESC,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: { '@type': 'Organization', name: 'Ontriq', url: 'https://www.ontriq.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Ontriq',
      logo: { '@type': 'ImageObject', url: 'https://www.ontriq.com/share-img.png' },
    },
    image: 'https://www.ontriq.com/share-img.png',
    mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ontriq.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.ontriq.com/resources' },
      { '@type': 'ListItem', position: 3, name: 'Hiring in Sri Lanka from Abroad', item: CANONICAL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleLayout
        title={TITLE}
        lede="Your screening policy still applies when you hire in Sri Lanka, but the evidence lives with local employers, universities and authorities. Here is how each check works on the ground, and how to run them without slowing your hiring."
        publishedDisplay="October 3, 2026"
        breadcrumbLabel="Hiring in Sri Lanka from Abroad"
        related={[
          { href: '/services/bgv', title: 'Background verification services in Sri Lanka' },
          { href: '/services/bgv/global-sanction-screening', title: 'Sanction and watchlist screening' },
          { href: '/resources/police-clearance-certificate-sri-lanka-employer-guide', title: 'Police clearance certificates: an employer\'s guide' },
          { href: '/resources/personal-data-protection-act-guide-for-employers', title: 'PDPA guide for employers' },
        ]}
      >
        <p>
          Foreign companies can run thorough background checks on candidates in Sri Lanka, but not through a single database. Employment history is confirmed with former employers, degrees with the issuing university, school results with the Department of Examinations, and addresses through documents or field visits. Each check needs the candidate&apos;s written consent. Run in parallel by a local provider, a complete case typically takes <strong>7 to 14 working days</strong>, and Ontriq delivers full multi-check cases within 7 working days.
        </p>
        <p>
          This guide is for HR, talent and compliance teams outside Sri Lanka, whether you are hiring directly, building an offshore team, or employing through an Employer of Record (EOR).
        </p>

        <h2>Why screening in Sri Lanka works differently</h2>
        <p>
          In many countries a screening provider can query a national database for criminal records, credit files or education. In Sri Lanka most of that information is held by the organisation that created it, so verification depends on contacting the source directly. Three practical consequences follow:
        </p>
        <ul>
          <li><strong>Documents are a starting point, not proof.</strong> Candidates usually supply a service letter for each previous job and copies of their certificates. These must be confirmed with the issuer.</li>
          <li><strong>Local knowledge matters.</strong> Knowing which office of a university answers verification requests, or how to trace an employer that has merged, is the difference between a 3-day check and a 3-week one.</li>
          <li><strong>Some records are only available to the individual.</strong> Police clearance certificates and CRIB credit reports are issued to the candidate, so the employer&apos;s role is to request and review them, not obtain them directly.</li>
        </ul>

        <h2>Which checks are possible, and where the records sit</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Check</th>
                <th>Source in Sri Lanka</th>
                <th>Notes for overseas employers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link href="/services/bgv/identity-address-verification">Identity &amp; address</Link></td>
                <td>National Identity Card (Department for Registration of Persons), passport, proof of address</td>
                <td>NIC numbers encode date of birth, which helps detect inconsistent documents. Field visits are available.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/employment-verification">Employment history</Link></td>
                <td>HR teams of previous employers</td>
                <td>Service letters are confirmed with the employer. EPF statements can corroborate dates where an employer has closed.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/education-verification">Education</Link></td>
                <td>Universities, Department of Examinations, awarding bodies</td>
                <td>Many local private campuses award foreign degrees, which must be verified with the overseas university.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/criminal-record-check">Criminal record</Link></td>
                <td>Police and court records</td>
                <td>Police clearance certificates are applied for by the candidate; an employer-commissioned check is faster for hiring.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/credit-history-check">Credit history</Link></td>
                <td>Credit Information Bureau of Sri Lanka (CRIB)</td>
                <td>Candidate obtains a self-inquiry report and shares it with consent. Use only for finance-sensitive roles.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/global-sanction-screening">Sanctions &amp; watchlists</Link></td>
                <td>International sanction lists and watchlists</td>
                <td>Same lists you screen against at home; quick to complete.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/professional-licence-verification">Professional licences</Link></td>
                <td>Regulators such as the Sri Lanka Medical Council</td>
                <td>Essential for healthcare, engineering, legal and accounting roles.</td>
              </tr>
              <tr>
                <td><Link href="/services/bgv/drug-testing">Drug testing</Link></td>
                <td>Certified laboratories</td>
                <td>Coordinated locally with chain of custody.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Mapping your home policy to local checks</h2>
        <p>
          Most global screening policies are written in terms of the employer&apos;s home market. Before the first hire, translate each requirement into its Sri Lankan equivalent and agree it with your provider. For example, a policy that requires a &ldquo;national criminal record search&rdquo; is usually met in Sri Lanka by a professional criminal record check, optionally supported by a police clearance certificate for roles where a client or regulator requires one. A &ldquo;credit check for all finance staff&rdquo; becomes a CRIB self-inquiry report, shared by the candidate with consent.
        </p>
        <p>
          Writing this mapping down once saves repeated questions on every case, and gives your auditors a clear record of how the policy is applied in Sri Lanka.
        </p>

        <h2>Consent and data protection</h2>
        <p>
          Collect written consent from every candidate before any check begins, naming the checks to be run and the purpose. Sri Lanka&apos;s Personal Data Protection Act, No. 9 of 2022 sets the local framework and is being brought into force in stages, with current status published by the{' '}
          <a href="https://www.dpa.gov.lk/" target="_blank" rel="noopener noreferrer">Data Protection Authority of Sri Lanka</a>. Your own home-country obligations apply too, so agree with your provider how candidate data is transmitted, stored and deleted, and who can access the reports. Our <Link href="/resources/personal-data-protection-act-guide-for-employers">PDPA guide for employers</Link> covers the principles.
        </p>

        <h2>If you hire through an Employer of Record</h2>
        <p>
          With an EOR, the EOR is the legal employer, but you are usually the one who wants the screening done. Decide up front who orders the checks, whose consent form the candidate signs, and who receives the report. Some EORs run basic checks themselves; others leave screening to the client. Either way, make sure the checks actually performed in Sri Lanka match what your policy requires.
        </p>

        <h2>Realistic timelines</h2>
        <p>
          For checks carried out inside Sri Lanka, plan on 7 to 14 working days for a full case, or 7 working days with Ontriq. Remember that working days exclude weekends, public holidays and the monthly Poya day, so a case that spans a holiday period can stretch further in calendar time. Components outside Sri Lanka, such as a candidate&apos;s previous job in Dubai or degree from Australia, depend on response times in those countries. Our guide to <Link href="/resources/how-long-does-a-background-check-take-in-sri-lanka">how long a background check takes in Sri Lanka</Link> breaks down each check.
        </p>

        <h2>Choosing a local screening partner</h2>
        <p>Ask any provider you are considering:</p>
        <ul>
          <li>Do you contact employers and institutions directly, using contact details you source independently?</li>
          <li>Do checks run in parallel, and is your turnaround a commitment or an estimate?</li>
          <li>Are reports in English, and do they explain local documents for a reader outside Sri Lanka?</li>
          <li>How is consent collected, and how is candidate data secured, retained and deleted?</li>
          <li>Will we have a named account manager who works in our time zone&apos;s overlap hours?</li>
        </ul>

        <BgvSubpageFaq heading="Frequently asked questions" items={faqs} />

        <h2>Screen your Sri Lankan hires with a local team</h2>
        <p>
          Ontriq runs <Link href="/services/bgv">background verification services in Sri Lanka</Link> for local and overseas employers, with consent captured through a secure portal, English-language reports and complete cases delivered within 7 working days. <Link href="/contact">Contact our team</Link> to agree a screening package for your roles.
        </p>
      </ArticleLayout>
    </>
  );
}
