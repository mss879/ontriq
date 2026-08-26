import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = "Sri Lanka's Personal Data Protection Act: A Guide for Employers";
const META_DESC =
  "What Sri Lanka's Personal Data Protection Act means for employers — consent, lawful purpose, data minimization, and compliant candidate screening explained.";
const CANONICAL =
  'https://www.ontriq.com/resources/personal-data-protection-act-guide-for-employers';

export const metadata: Metadata = {
  title: TITLE,
  description: META_DESC,
  openGraph: {
    type: 'article',
    title: TITLE,
    description: META_DESC,
    url: CANONICAL,
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: META_DESC,
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: { canonical: CANONICAL },
};

export default function PdpaGuideForEmployersPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: META_DESC,
    datePublished: '2026-08-26',
    dateModified: '2026-08-26',
    author: {
      '@type': 'Organization',
      name: 'Ontriq',
      url: 'https://www.ontriq.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ontriq',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ontriq.com/share-img.png',
      },
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
      { '@type': 'ListItem', position: 3, name: 'PDPA Guide for Employers', item: CANONICAL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleLayout
        title={TITLE}
        lede="The Personal Data Protection Act changed how Sri Lankan employers can collect, store, and use candidate and employee data. Here is what it means for hiring, screening, and everyday HR work — in plain English."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="PDPA Guide for Employers"
      >
        <p>
          Sri Lanka&apos;s Personal Data Protection Act (No. 9 of 2022) requires employers to
          collect candidate and employee data lawfully, for a specific purpose, with informed
          consent, and to store it securely for no longer than necessary. Background checks remain
          fully legal, but they must be run transparently and only after the candidate has given
          clear consent.
        </p>

        <h2>What the PDPA Is, in Plain English</h2>
        <p>
          The Personal Data Protection Act, No. 9 of 2022 — usually shortened to the PDPA — is Sri
          Lanka&apos;s first comprehensive data protection law. In simple terms, it sets rules for
          how organizations collect, use, store, share, and eventually delete personal data:
          any information that can identify a living person. A name, an NIC number, a home address,
          an employment history, a degree certificate, a reference letter — all of it counts.
        </p>
        <p>
          For employers, the important shift is one of mindset. Candidate and employee data is no
          longer something a company simply owns because it happens to hold it. Under the PDPA, the
          organization is accountable for that data — for why it was collected, how it is
          protected, who can see it, and how long it is kept.
        </p>
        <p>
          It is also worth knowing what the PDPA is not. Sri Lanka has no single, dedicated
          &quot;background check law.&quot; Employee screening is lawful, and the PDPA is the
          primary legal framework that governs how it must be done. This guide explains the
          practical implications in general terms; for decisions specific to your organization,
          always consult qualified legal counsel.
        </p>

        <h2>Why the PDPA Matters for Hiring and Screening</h2>
        <p>
          Recruitment is one of the most data-intensive activities in any business. A single hiring
          round can generate hundreds of CVs, copies of NICs and passports, degree certificates,
          salary slips, referee contact details, and interview notes. Every one of those documents
          is personal data, and every step — collecting it, sharing it with a verification partner,
          storing it after the decision — falls under the PDPA.
        </p>
        <p>
          None of this makes screening less necessary. An estimated 40&ndash;50% of resumes contain
          some inaccuracy or exaggeration, and a bad hire can cost up to 30% of the employee&apos;s
          first-year potential earnings. The question for Sri Lankan employers is not{' '}
          <strong>whether</strong> to verify candidates, but <strong>how</strong> to verify them in
          a way that respects the law. If you are new to the process itself, start with our guide
          on{' '}
          <Link href="/resources/how-to-do-background-checks-on-employees-in-sri-lanka">
            how to do background checks on employees in Sri Lanka
          </Link>{' '}
          and come back to this article for the compliance layer.
        </p>

        <h2>Core PDPA Principles Applied to Recruitment</h2>
        <p>
          The PDPA is built on a set of data protection principles. Here is what each one looks
          like when applied to hiring:
        </p>
        <ul>
          <li>
            <strong>Consent.</strong> Candidates must agree before you process their personal data
            for screening. Consent has to be informed and specific — a vague line buried in an
            application form is risky practice.
          </li>
          <li>
            <strong>Lawful and specific purpose.</strong> Data should be collected for a clearly
            stated reason, such as assessing suitability for a named role. You cannot quietly
            repurpose it later for marketing, profiling, or an unrelated decision.
          </li>
          <li>
            <strong>Data minimization.</strong> Collect only what the role genuinely requires. An
            entry-level hire rarely justifies the same depth of data collection as a finance
            director.
          </li>
          <li>
            <strong>Security safeguards.</strong> Personal data must be protected against loss,
            leaks, and unauthorized access — technically (encryption, access controls) and
            organizationally (who in HR can open the file).
          </li>
          <li>
            <strong>Retention limits.</strong> Data should be kept only as long as it is needed for
            the purpose it was collected for, then securely deleted or anonymized.
          </li>
          <li>
            <strong>Candidate rights.</strong> Individuals can ask what data you hold about them
            and request correction of inaccuracies. Your processes need a way to answer those
            requests.
          </li>
        </ul>

        <h2>A Practical PDPA Checklist for Employers</h2>
        <p>
          Use this as a starting point for reviewing your recruitment workflow. It is not
          exhaustive, but it covers the areas where most HR teams have gaps:
        </p>
        <ol>
          <li>
            Map the candidate data you collect at each hiring stage — application, interview,
            verification, offer — and record why each item is needed.
          </li>
          <li>
            Add a clear, standalone consent step before any background check begins, describing
            which checks will run and who will perform them.
          </li>
          <li>
            Update privacy notices in job advertisements and application forms so candidates know
            how their data will be used.
          </li>
          <li>
            Restrict access to candidate files to the people who actually need them, and stop
            circulating CVs and NIC copies over open email threads.
          </li>
          <li>
            Set retention periods for candidate data — including data on rejected applicants — and
            actually enforce the deletion dates.
          </li>
          <li>
            Vet any third party that touches candidate data, including verification providers, and
            put your expectations in writing.
          </li>
          <li>
            Create a simple procedure for handling a candidate&apos;s request to access or correct
            their data.
          </li>
          <li>
            Brief hiring managers, not just HR, on what they may and may not do with candidate
            information.
          </li>
        </ol>
        <p>
          If you want the operational counterpart to this list — the documents and checks to
          complete before an offer goes out — see our{' '}
          <Link href="/resources/pre-employment-screening-checklist-sri-lanka">
            pre-employment screening checklist for Sri Lankan employers
          </Link>
          .
        </p>

        <h2>What Candidate Consent Should Look Like in Screening</h2>
        <p>
          Consent is the foundation of compliant screening in Sri Lanka, so it deserves more than a
          checkbox. In a background verification context, good consent practice generally means:
        </p>
        <ul>
          <li>
            <strong>Written and recorded.</strong> A signed form or a logged digital acceptance
            that you can produce later if asked.
          </li>
          <li>
            <strong>Specific about the checks.</strong> The candidate should know whether you will
            verify employment history, education, criminal records, identity and address,
            references, or sanctions lists — not just that &quot;checks may be conducted.&quot;
          </li>
          <li>
            <strong>Clear about who is involved.</strong> Name the verification partner if one will
            process the candidate&apos;s data on your behalf.
          </li>
          <li>
            <strong>Given before the checks start.</strong> Consent collected after the fact does
            not fix a check that was run without it.
          </li>
        </ul>
        <p>
          Handled this way, consent is rarely a barrier. Candidates with accurate credentials have
          little reason to object, and a transparent process signals that your organization takes
          both integrity and privacy seriously.
        </p>

        <h2>Common PDPA Mistakes in Hiring</h2>
        <p>
          Most compliance failures in recruitment are not deliberate — they are old habits that
          predate the law. The patterns we see most often:
        </p>
        <ul>
          <li>
            <strong>Keeping CVs forever.</strong> Folders of applications from years-old vacancies,
            held &quot;just in case,&quot; with no retention policy and no deletion schedule.
          </li>
          <li>
            <strong>Screening without consent.</strong> Calling previous employers or running
            checks before the candidate has agreed, or relying on assumed consent because the
            person applied for the job.
          </li>
          <li>
            <strong>Emailing NIC copies unencrypted.</strong> Forwarding identity documents,
            certificates, and salary slips through open email chains where anyone copied can save
            them.
          </li>
          <li>
            <strong>Using data for other purposes.</strong> Adding applicants to marketing lists,
            sharing candidate details with other companies, or reusing screening data for unrelated
            internal decisions.
          </li>
          <li>
            <strong>Over-collecting.</strong> Demanding the same exhaustive document set from every
            candidate regardless of role, seniority, or actual risk.
          </li>
        </ul>

        <h2>Hiring Activity vs. What the PDPA Expects</h2>
        <p>
          The table below summarizes how the principles above map onto the everyday steps of a
          hiring process:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Hiring activity</th>
                <th>What the PDPA expects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Collecting CVs and application forms</td>
                <td>
                  A clear purpose, a privacy notice explaining how data will be used, and only the
                  fields the role requires
                </td>
              </tr>
              <tr>
                <td>Running a background check</td>
                <td>
                  Informed, specific candidate consent obtained before any verification begins
                </td>
              </tr>
              <tr>
                <td>Storing NIC copies and certificates</td>
                <td>
                  Secure storage with access controls — not shared drives or inboxes open to the
                  whole team
                </td>
              </tr>
              <tr>
                <td>Sharing data with a verification partner</td>
                <td>
                  A vetted provider, disclosure to the candidate, and written terms covering how
                  the data is handled
                </td>
              </tr>
              <tr>
                <td>Deciding not to hire a candidate</td>
                <td>
                  Fair use of the data collected, plus a route for the candidate to request access
                  or correction
                </td>
              </tr>
              <tr>
                <td>Holding data after the process ends</td>
                <td>A defined retention period, followed by secure deletion or anonymization</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How a Compliant Verification Partner Shifts the Burden</h2>
        <p>
          You can build all of this in-house, but much of the operational risk sits in the
          verification step itself — collecting sensitive documents, contacting institutions, and
          moving data between parties. Working with a provider that offers{' '}
          <Link href="/services/bgv">PDPA-compliant background verification</Link> moves those
          high-risk mechanics into a controlled process.
        </p>
        <p>
          At Ontriq, candidates upload their documents through a secure candidate document portal
          rather than email, consent is captured before checks begin, and every report passes
          dual-analyst quality control that sustains 98%+ report accuracy. HR teams follow progress
          through a real-time case tracking portal with a dedicated account manager, and complete
          multi-check cases are delivered within 7 working days. Checks that involve especially
          sensitive documents — such as{' '}
          <Link href="/services/bgv/identity-address-verification">
            identity and address verification
          </Link>
          , including physical field visits — are handled end to end, so NIC copies and utility
          bills never sit in an unprotected inbox.
        </p>
        <p>
          The employer still owns the hiring decision and the consent relationship with the
          candidate. But the day-to-day handling of documents, institutional outreach, and data
          security moves to a partner whose entire process is built around doing it properly.
        </p>

        <h2>The Bottom Line for Sri Lankan Employers</h2>
        <p>
          The PDPA does not prohibit screening — it professionalizes it. Employers who collect only
          what they need, ask permission first, protect what they hold, and delete what they no
          longer require can verify candidates as thoroughly as ever. Treat this guide as a
          starting framework, take legal advice on the specifics, and put the consent and retention
          basics in place before your next hiring round rather than after.
        </p>
        <p>
          If you would rather not carry the verification workload yourself, explore our{' '}
          <Link href="/services/bgv">background verification services in Sri Lanka</Link> or{' '}
          <Link href="/contact">contact our team</Link> to talk through a screening process that
          fits both your roles and the PDPA.
        </p>
      </ArticleLayout>
    </>
  );
}
