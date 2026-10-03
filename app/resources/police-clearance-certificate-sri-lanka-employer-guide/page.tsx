import { ArticleLayout } from '@/components/resources/article-layout';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'Police Clearance Certificates in Sri Lanka: An Employer\'s Guide';
const META_DESC =
  'How police clearance certificates work in Sri Lanka, who can apply, how long they take, and how they differ from Grama Niladhari certificates and employer criminal record checks.';
const CANONICAL =
  'https://www.ontriq.com/resources/police-clearance-certificate-sri-lanka-employer-guide';
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
    question: 'Can a company apply for a police clearance certificate on behalf of an employee?',
    answer: 'No. The application is made by the individual, who submits their own identity documents and pays the fee. An employer can only ask the candidate to obtain the certificate, or commission a separate criminal record check with the candidate\'s consent.',
  },
  {
    question: 'How long does a police clearance certificate take in Sri Lanka?',
    answer: 'Sri Lanka Police state that certificates are issued within 14 working days when the information provided is accurate. Applications from overseas, or with missing or inconsistent documents, can take considerably longer.',
  },
  {
    question: 'Is a Grama Niladhari certificate the same as a police report?',
    answer: 'No. A Grama Niladhari character and residence certificate confirms that the person lives in the division and is known locally. It is useful for address verification but is not a search of police or court records.',
  },
];

export default function PoliceClearanceGuidePage() {
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
      { '@type': 'ListItem', position: 3, name: 'Police Clearance Guide', item: CANONICAL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleLayout
        title={TITLE}
        lede="What a Sri Lankan police clearance certificate is, why employers cannot apply for one themselves, how candidates obtain it, and when a professional criminal record check is the better option."
        publishedDisplay="October 3, 2026"
        breadcrumbLabel="Police Clearance Guide"
        related={[
          { href: '/services/bgv/criminal-record-check', title: 'Criminal record checks in Sri Lanka' },
          { href: '/services/bgv', title: 'Background verification services in Sri Lanka' },
          { href: '/resources/how-to-do-background-checks-on-employees-in-sri-lanka', title: 'How to do background checks on employees' },
          { href: '/resources/background-check-red-flags-employers-guide', title: 'Background check red flags' },
        ]}
      >
        <p>
          A <strong>police clearance certificate</strong> in Sri Lanka is an official document issued by Sri Lanka Police to an individual, confirming whether a police background report found any criminal record. Only the individual can apply, online through the Sri Lanka Police e-services or in person at Police Headquarters in Colombo, and Sri Lanka Police state that certificates are issued within <strong>14 working days</strong> when the information provided is accurate. Employers who need criminal screening as part of hiring therefore either ask the candidate to obtain a certificate, or commission a <Link href="/services/bgv/criminal-record-check">professional criminal record check</Link> with the candidate&apos;s consent.
        </p>
        <p>
          This guide explains how each option works, where the Grama Niladhari certificate fits in, and how to choose the right approach for the roles you hire.
        </p>

        <h2>What a police clearance certificate is</h2>
        <p>
          The certificate is issued on the basis of a background report obtained through a police inquiry. It is best known as a document for overseas use: foreign embassies, immigration authorities and overseas employers routinely ask Sri Lankans for one when they apply for a visa, residency or a job abroad. Sri Lankans also request certificates for local purposes, such as an employer&apos;s request, membership of an organisation, or a business registration.
        </p>
        <p>
          Sri Lankan citizens over the age of 16 can apply. Non-Sri Lankans who have lived in the country can also apply, usually through the Sri Lankan mission where they now live, which is useful for employers abroad who need a certificate for a foreign national who previously worked in Sri Lanka.
        </p>

        <h2>Three documents employers confuse</h2>
        <p>
          When a Sri Lankan hiring manager asks for a &ldquo;police report&rdquo;, they may mean any of three quite different things:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Who issues it</th>
                <th>Who applies</th>
                <th>What it tells you</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Police clearance certificate</td>
                <td>Sri Lanka Police</td>
                <td>The individual</td>
                <td>Whether a police background report found a criminal record</td>
              </tr>
              <tr>
                <td>Grama Niladhari character &amp; residence certificate</td>
                <td>Grama Niladhari of the local division</td>
                <td>The individual</td>
                <td>That the person lives in the division and is of good local standing</td>
              </tr>
              <tr>
                <td>Employer criminal record check</td>
                <td>A background verification provider</td>
                <td>The employer, with candidate consent</td>
                <td>Relevant police and court records, reported within the wider screening case</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The Grama Niladhari certificate is valuable for confirming where someone lives, and many employers request it alongside proof of address. It is not, however, a search of police or court records, and it should not be treated as a substitute for one.
        </p>

        <h2>How a candidate applies</h2>
        <p>
          The process is the candidate&apos;s to complete, but employers who explain it clearly get certificates back faster. In outline:
        </p>
        <ol>
          <li>
            <strong>Apply online or in person.</strong> The online application is made through the e-services section of the{' '}
            <a href="https://www.police.lk/" target="_blank" rel="noopener noreferrer">Sri Lanka Police website</a>. Applicants can also submit in person at Police Headquarters in Colombo.
          </li>
          <li>
            <strong>Upload identity documents.</strong> The online application asks for scanned copies of the National Identity Card (front and back) and the passport&apos;s bio-data page and other relevant pages, with supporting documents such as a birth certificate or affidavit where the names on the NIC and passport differ.
          </li>
          <li>
            <strong>Pay the fee online.</strong> A fee is payable by card when the application is submitted. Check the current amount on the police website, as it is revised from time to time.
          </li>
          <li>
            <strong>Wait for the police inquiry.</strong> Sri Lanka Police state a service standard of 14 working days for applications with accurate information. Mismatched names, missing pages or overseas applications commonly take longer.
          </li>
        </ol>
        <p>
          Because the timeline is outside your control, ask for the certificate as early as possible, ideally with the conditional offer, and do not make it the last item that holds up a start date.
        </p>

        <h2>When to ask for a police clearance certificate</h2>
        <p>
          A certificate makes the most sense when:
        </p>
        <ul>
          <li><strong>The role involves overseas deployment</strong> and a foreign authority or client will require a certificate anyway.</li>
          <li><strong>A client contract or regulator specifically requires it</strong> for staff assigned to that client.</li>
          <li><strong>You are an overseas employer</strong> whose internal policy names a police certificate as the accepted evidence.</li>
        </ul>
        <p>
          For most local hiring, a professional criminal record check is the more practical tool. It is commissioned by you, runs in parallel with employment, education and identity checks, and is reported in the same consolidated report. At Ontriq, a full multi-check case, including the criminal check, is delivered within 7 working days. See our guide on <Link href="/resources/how-long-does-a-background-check-take-in-sri-lanka">how long a background check takes in Sri Lanka</Link> for the per-check timelines.
        </p>

        <h2>Checking a certificate a candidate gives you</h2>
        <p>
          Treat a certificate the same way you would treat any document a candidate supplies: as a claim to be checked. Confirm that the name, NIC number and passport number match the identity documents in your file, note the date of issue (a certificate several years old says little about the present), and look for signs of alteration. If anything looks inconsistent, ask the candidate for a fresh certificate or rely on an independent check rather than accepting the document.
        </p>

        <h2>Consent, privacy and fair decisions</h2>
        <p>
          Criminal record information is among the most sensitive personal data you will handle. Explain to the candidate why you need it, collect written consent before any check, limit access to the people making the hiring decision, and keep it only as long as you need it. The Personal Data Protection Act, No. 9 of 2022 sets the framework for this; our <Link href="/resources/personal-data-protection-act-guide-for-employers">PDPA guide for employers</Link> covers the principles in detail.
        </p>
        <p>
          A record should inform a decision, not make it automatically. Consider how serious the offence was, how long ago it happened, and whether it is relevant to the job, and give the candidate a chance to explain. Our guide to <Link href="/resources/background-check-red-flags-employers-guide">background check red flags</Link> walks through how to handle adverse findings fairly.
        </p>

        <BgvSubpageFaq heading="Frequently asked questions" items={faqs} />

        <h2>Get criminal screening without the wait</h2>
        <p>
          If you need criminal screening as part of a complete hiring check, Ontriq&apos;s <Link href="/services/bgv">background verification services in Sri Lanka</Link> combine criminal, employment, education and identity checks in one report within 7 working days. <Link href="/contact">Contact our team</Link> to set up screening for your next hire.
        </p>
      </ArticleLayout>
    </>
  );
}
