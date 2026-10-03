import { ArticleLayout } from '@/components/resources/article-layout';
import { BgvSubpageFaq, type SubpageFaqItem } from '@/components/services/bgv/bgv-subpage-faq';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'How to Verify Educational Certificates in Sri Lanka';
const META_DESC =
  'A step-by-step guide for employers to verifying degrees, O/L and A/L results, foreign-awarded degrees and professional qualifications in Sri Lanka, plus the red flags to watch for.';
const CANONICAL =
  'https://www.ontriq.com/resources/how-to-verify-educational-certificates-in-sri-lanka';
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
    question: 'Can an employer verify a degree without the candidate\'s consent?',
    answer: 'No. Universities generally require the graduate\'s authorisation before confirming details, and verifying qualifications involves processing the candidate\'s personal data. Collect written consent before any education check begins.',
  },
  {
    question: 'How do I check whether a Sri Lankan university is recognised?',
    answer: 'The University Grants Commission (UGC) publishes the state universities and the institutes recognised to award degrees. If an institution is not on those lists, check whether the degree is actually awarded by a foreign university through a local campus, and verify it with that university.',
  },
  {
    question: 'How long does education verification take?',
    answer: 'Typically 4 to 7 working days for a local qualification, depending on how quickly the institution responds. Overseas awards and older records can take longer.',
  },
];

export default function VerifyEducationalCertificatesPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Verifying Certificates', item: CANONICAL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleLayout
        title={TITLE}
        lede="A certificate on letterhead proves very little on its own. Here is how to confirm each kind of Sri Lankan qualification with the body that issued it, and the warning signs that a certificate needs a closer look."
        publishedDisplay="October 3, 2026"
        breadcrumbLabel="Verifying Certificates"
        related={[
          { href: '/services/bgv/education-verification', title: 'Education verification services in Sri Lanka' },
          { href: '/services/bgv/professional-licence-verification', title: 'Professional licence verification' },
          { href: '/resources/pre-employment-screening-checklist-sri-lanka', title: 'Pre-employment screening checklist' },
          { href: '/resources/background-check-red-flags-employers-guide', title: 'Background check red flags' },
        ]}
      >
        <p>
          To verify an educational certificate in Sri Lanka, confirm it with the organisation that issued it: the university&apos;s registrar or examinations division for a degree, the Department of Examinations for G.C.E. O/L and A/L results, the overseas university for a foreign degree taught at a local campus, and the professional body for qualifications such as accounting or engineering. First check that the institution is genuinely authorised to award the qualification, and always collect the candidate&apos;s written consent before you start.
        </p>
        <p>
          The steps below cover each type of qualification in turn. If you would rather not run them in-house, our <Link href="/services/bgv/education-verification">education verification service</Link> handles the whole process as part of a background check.
        </p>

        <h2>Step 1: Collect consent and the right documents</h2>
        <p>
          Ask the candidate for written consent naming the qualifications you will verify, together with clear copies of each certificate and transcript, their student or index numbers, the years of study, and the name they used at the time if it has since changed. Most delays in education checks come from missing index numbers or name mismatches, so asking for these up front saves days later.
        </p>

        <h2>Step 2: Confirm the institution is recognised</h2>
        <p>
          Before verifying the certificate, confirm that the institution can award it. Sri Lanka&apos;s state universities operate under the{' '}
          <a href="https://www.ugc.ac.lk/" target="_blank" rel="noopener noreferrer">University Grants Commission (UGC)</a>, which also lists the institutes recognised as degree-awarding. A &ldquo;degree&rdquo; from an institution that is neither on those lists nor delivering a recognised foreign university&apos;s award is the most common form of credential problem we see.
        </p>

        <h2>Step 3: Verify university degrees with the registrar</h2>
        <p>
          Send a written verification request to the registrar or examinations division of the awarding university, enclosing the candidate&apos;s consent and a copy of the certificate. Ask the university to confirm the degree title, class or grade, field of study, and year of award. Use contact details from the university&apos;s official website, never those printed on the document the candidate gave you. Universities set their own procedures, and some charge a fee or require the request to come through the graduate.
        </p>

        <h2>Step 4: Verify O/L and A/L results with the Department of Examinations</h2>
        <p>
          G.C.E. Ordinary Level and Advanced Level results are issued by the{' '}
          <a href="https://www.doenets.lk/" target="_blank" rel="noopener noreferrer">Department of Examinations</a>. For certificates issued from 2001 onwards, candidates can generate an official certificate through the Department&apos;s online certificate service, which carries a unique reference number. Asking the candidate for an officially generated certificate is far more reliable than accepting a photocopy. For older results, the candidate can request a certified copy from the Department.
        </p>

        <h2>Step 5: Verify foreign degrees taught at local campuses</h2>
        <p>
          Many private campuses in Sri Lanka deliver degrees awarded by universities in the United Kingdom, Australia, Malaysia and elsewhere. The awarding body is the foreign university, so that is where the verification goes. Many universities have an official verification service; UK degrees, for example, can be checked through the Higher Education Degree Datacheck (HEDD) service. Confirm the candidate&apos;s enrolment with the local campus as well, as the transcript is often issued locally.
        </p>

        <h2>Step 6: Verify professional and vocational qualifications</h2>
        <p>
          Professional qualifications in accounting, marketing, management, HR and IT are confirmed with the awarding body. Where membership matters for the role, such as a chartered accountant, ask the body to confirm that the membership is current, not just that the exams were passed. For regulated professions such as medicine and engineering, also confirm registration with the regulator through a <Link href="/services/bgv/professional-licence-verification">professional licence check</Link>. National Vocational Qualification (NVQ) certificates and technical college awards are confirmed with the issuing institute or training authority.
        </p>

        <h2>Red flags on Sri Lankan certificates</h2>
        <ul>
          <li><strong>Unfamiliar institution names</strong> that resemble a well-known university but are not on any recognised list.</li>
          <li><strong>Dates that do not add up</strong>, such as a four-year degree completed in two years, or graduation before the stated enrolment.</li>
          <li><strong>Inconsistent formatting</strong>, such as fonts, seals or signatures that differ from other certificates issued by the same institution in the same year.</li>
          <li><strong>A class or grade higher than the transcript supports.</strong></li>
          <li><strong>Contact details that only reach the candidate&apos;s acquaintances</strong> when you try to verify.</li>
          <li><strong>Reluctance to provide consent</strong> or index numbers, or repeated delays in supplying originals.</li>
        </ul>
        <p>
          A single red flag is a reason to look closer, not proof of fraud. A name change after marriage or a re-issued certificate can explain many inconsistencies. Our guide to <Link href="/resources/background-check-red-flags-employers-guide">background check red flags</Link> explains how to raise a discrepancy with a candidate fairly.
        </p>

        <h2>Doing it in-house or outsourcing</h2>
        <p>
          A single verification is manageable in-house. At volume, or when candidates have studied at several institutions or overseas, the follow-up quickly becomes a part-time job. A screening provider brings established contacts at institutions, consistent records for audit, and parallel processing with your other checks. Education verification typically takes 4 to 7 working days and, with Ontriq, runs alongside employment, identity and criminal checks so the complete case is delivered within 7 working days.
        </p>

        <BgvSubpageFaq heading="Frequently asked questions" items={faqs} />

        <h2>Verify qualifications as part of a full background check</h2>
        <p>
          Ontriq&apos;s <Link href="/services/bgv">background verification services in Sri Lanka</Link> include education verification with every institution type covered above. <Link href="/contact">Contact our team</Link> to verify your next candidate&apos;s qualifications.
        </p>
      </ArticleLayout>
    </>
  );
}
