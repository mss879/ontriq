import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'Pre-Employment Screening Checklist for Sri Lankan Employers';
const META_DESC =
  'A practical pre-employment screening checklist for Sri Lankan employers — documents to collect, consent steps, and which checks to run by role level.';
const CANONICAL = 'https://www.ontriq.com/resources/pre-employment-screening-checklist-sri-lanka';

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

export default function PreEmploymentScreeningChecklistPage() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: META_DESC,
    datePublished: '2026-08-26',
    dateModified: '2026-08-26',
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
      { '@type': 'ListItem', position: 3, name: 'Screening Checklist', item: CANONICAL },
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
        lede="A stage-by-stage checklist covering the documents, consents, and verification checks Sri Lankan employers should complete before a new hire's first day — plus a printable one-page summary."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="Screening Checklist"
      >
        <p>
          A pre-employment screening checklist covers five stages: collect identity and
          qualification documents, obtain the candidate&apos;s written consent, verify identity,
          employment, education, and references before the offer, add criminal and sanctions
          checks for sensitive roles, and store all records securely under Sri Lanka&apos;s Personal
          Data Protection Act. A complete multi-check case can be verified within 7 working days.
        </p>
        <p>
          The stakes justify the effort. An estimated 40&ndash;50% of resumes contain some
          inaccuracy or exaggeration, and a bad hire can cost up to 30% of the employee&apos;s
          first-year potential earnings. A written checklist keeps your screening consistent
          across every hire, which matters both for fairness and for compliance. This guide
          walks through each stage, then recaps everything in a single list you can print and
          pin next to your hiring workflow.
        </p>

        <h2>Step 1: Documents to Collect From Every Candidate</h2>
        <p>
          Start every screening file the same way, regardless of the role. Collecting a complete
          document set up front prevents the most common cause of delay: chasing candidates for
          missing paperwork after checks have already started.
        </p>
        <ul>
          <li>
            <strong>National Identity Card or passport copy</strong> &mdash; the anchor document
            for identity verification.
          </li>
          <li>
            <strong>Proof of current address</strong> &mdash; a recent utility bill, bank
            statement, or Grama Niladhari certificate.
          </li>
          <li>
            <strong>Educational certificates and transcripts</strong> &mdash; degrees, diplomas,
            and professional certifications the candidate has claimed.
          </li>
          <li>
            <strong>Full employment history</strong> &mdash; employer names, job titles, dates,
            and HR contact details for at least the last two or three employers.
          </li>
          <li>
            <strong>Professional reference details</strong> &mdash; names, designations, and
            contact information for referees who supervised the candidate&apos;s work.
          </li>
          <li>
            <strong>Signed consent form</strong> &mdash; covered in detail in the next section.
          </li>
        </ul>
        <p>
          If you work with a <Link href="/services/bgv">background verification provider</Link>,
          look for one that offers a secure candidate document portal. Candidates upload their
          documents directly, which keeps sensitive files out of email inboxes and gives you a
          clean audit trail of what was collected and when.
        </p>

        <h2>Step 2: Get Consent Right Before Any Check Begins</h2>
        <p>
          Background verification is lawful in Sri Lanka, but candidate consent is mandatory
          before any check begins. The Personal Data Protection Act (No. 9 of 2022) is the
          primary law governing how you collect and handle candidate data, and there is no
          single dedicated background-check statute &mdash; so your consent process carries the
          compliance load. Make sure your consent covers the following:
        </p>
        <ul>
          <li>It is in <strong>writing</strong>, signed and dated by the candidate.</li>
          <li>
            It <strong>names each check</strong> you intend to run &mdash; employment, education,
            criminal record, identity and address, references, sanctions screening, or drug
            testing.
          </li>
          <li>
            It <strong>explains the purpose</strong>: assessing suitability for the specific role.
          </li>
          <li>
            It states <strong>who will process the data</strong>, including any third-party
            screening partner.
          </li>
          <li>It is obtained <strong>before</strong> any verification work starts, never after.</li>
          <li>A copy is <strong>retained in the candidate&apos;s screening file</strong>.</li>
        </ul>
        <p>
          For a deeper look at lawful purpose, candidate rights, and data-security duties, see
          our{' '}
          <Link href="/resources/personal-data-protection-act-guide-for-employers">
            Personal Data Protection Act guide for employers
          </Link>
          .
        </p>

        <h2>Step 3: Run Checks by Hiring Stage</h2>
        <p>
          Not everything needs to happen at once. Sequencing checks around the offer keeps your
          pipeline moving while making sure nothing critical is skipped. Individual checks run in
          parallel &mdash; identity and address typically take 2&ndash;4 working days, employment
          3&ndash;5, education 4&ndash;7, and criminal checks 5&ndash;7 &mdash; so a full case
          still completes within 7 working days when they start together.
        </p>
        <h3>Before the offer</h3>
        <p>
          Complete the low-cost, high-signal steps: review the resume against the documents
          collected, confirm identity and current address, and speak to professional references.
          Reference conversations are often where inflated job titles and vague exit reasons
          surface first &mdash; structured{' '}
          <Link href="/services/bgv/reference-checks">reference checks</Link> with consistent
          questions make those conversations comparable across candidates.
        </p>
        <h3>At the offer stage</h3>
        <p>
          Issue the offer letter <strong>conditional on satisfactory verification</strong>, then
          run the substantive checks: employment history with previous employers, academic
          credentials through{' '}
          <Link href="/services/bgv/education-verification">education verification</Link>, and a
          criminal record and legal check where the role warrants it. Making the offer
          conditional protects you legally if a serious discrepancy appears, without forcing
          strong candidates to wait weeks for an offer.
        </p>
        <h3>During the first week</h3>
        <p>
          Close out anything still pending: global sanction and watchlist screening for finance
          or export-facing roles, drug testing through certified laboratories where your policy
          requires it, and a final file review confirming every planned check returned a result.
          Do not let a new hire pass probation with an incomplete screening file.
        </p>

        <h2>Which Checks for Which Role Level</h2>
        <p>
          Screening depth should match role risk. A junior retail assistant and a finance
          director do not need the same level of screening. The table below maps each check to
          a sensible default for entry-level, mid-level, and executive hires.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Check</th>
                <th>Entry-level</th>
                <th>Mid-level / Specialist</th>
                <th>Executive / Compliance-sensitive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identity &amp; address verification</td>
                <td>Required</td>
                <td>Required</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>Professional references</td>
                <td>Required (1 referee)</td>
                <td>Required (2 referees)</td>
                <td>Required (2 referees)</td>
              </tr>
              <tr>
                <td>Employment history</td>
                <td>Optional</td>
                <td>Required (last 2 employers)</td>
                <td>Required (last 3 employers)</td>
              </tr>
              <tr>
                <td>Education verification</td>
                <td>Optional</td>
                <td>Required</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>Criminal record &amp; legal check</td>
                <td>Recommended</td>
                <td>Required</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>Global sanctions &amp; watchlist screening</td>
                <td>Rarely needed</td>
                <td>Recommended</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>Statutory / registry checks</td>
                <td>Rarely needed</td>
                <td>Recommended</td>
                <td>Required</td>
              </tr>
              <tr>
                <td>Drug testing (certified laboratories)</td>
                <td>Policy-dependent</td>
                <td>Policy-dependent</td>
                <td>Recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          If your hiring volume is steady, standardize these combinations per role level so
          recruiters never have to decide check-by-check. A good provider of{' '}
          <Link href="/services/bgv">employee screening services</Link> will agree these
          standard combinations with you up front and price them per candidate, so every hire
          at a given level is screened the same way.
        </p>

        <h2>Step 4: Build In a Red-Flag Review Step</h2>
        <p>
          A checklist is only as good as what happens when a check comes back with a
          discrepancy. Decide in advance who reviews flagged results, and separate the finding
          from the decision: a two-month gap in employment dates is not the same as a fabricated
          degree. Give candidates a chance to explain discrepancies before withdrawing an offer
          &mdash; many turn out to be administrative errors on an old employer&apos;s side.
          Quality control on the verification side matters too; dual-analyst review is how
          leading providers sustain 98%+ report accuracy. For a practical framework on grading
          discrepancies and responding fairly, read our guide to{' '}
          <Link href="/resources/background-check-red-flags-employers-guide">
            background check red flags and what employers should do next
          </Link>
          .
        </p>

        <h2>Step 5: Record-Keeping and PDPA Hygiene</h2>
        <p>
          Screening generates exactly the kind of personal data the PDPA is designed to protect,
          so close every case with the same discipline you opened it:
        </p>
        <ul>
          <li>Store screening files in a <strong>restricted-access</strong> system, not shared drives or inboxes.</li>
          <li>Keep the <strong>signed consent form</strong> attached to each candidate&apos;s file.</li>
          <li>Collect only what the declared purpose requires &mdash; <strong>no fishing expeditions</strong>.</li>
          <li>Set a <strong>defined retention period</strong> and delete candidate data when it lapses, especially for unsuccessful applicants.</li>
          <li>Ensure any screening partner handles data under <strong>equivalent safeguards</strong>.</li>
          <li>Be ready to <strong>respond to candidate requests</strong> about the data you hold on them.</li>
        </ul>

        <h2>The One-Page Screening Checklist</h2>
        <p>
          Here is the whole process as a single ordered list. Print it, adapt the role-level
          table to your organization, and attach it to every requisition.
        </p>
        <ol>
          <li>Collect NIC/passport copy, proof of address, certificates, employment history, and referee details.</li>
          <li>Obtain signed, dated, check-specific written consent before anything else starts.</li>
          <li>Choose the checks that match the role level (see table above).</li>
          <li>Before the offer: verify identity and address; complete reference checks.</li>
          <li>Issue the offer letter conditional on satisfactory verification.</li>
          <li>At offer stage: run employment, education, and (where warranted) criminal checks in parallel.</li>
          <li>First week: complete sanctions screening, statutory checks, and drug testing where applicable.</li>
          <li>Route any discrepancy through your red-flag review step and hear the candidate out.</li>
          <li>Confirm every planned check returned a result before probation ends.</li>
          <li>File the report and consent form in a restricted-access system with a set retention period.</li>
        </ol>
        <p>
          A checklist keeps you consistent; a verification partner keeps you fast. Ontriq runs
          all of these checks &mdash; identity, employment, education, criminal, references,
          sanctions, and drug testing &mdash; as complete{' '}
          <Link href="/services/bgv">background checks in Sri Lanka</Link>, delivered within 7
          working days with real-time case tracking. If you want help turning this checklist
          into a screening program for your organization,{' '}
          <Link href="/contact">talk to our team</Link> &mdash; we serve employers island-wide
          from our Colombo district office.
        </p>
      </ArticleLayout>
    </>
  );
}
