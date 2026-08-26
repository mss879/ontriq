import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'How to Do Background Checks on Employees in Sri Lanka';
const META_DESC =
  'How to run compliant employee background checks in Sri Lanka — from PDPA consent and document collection to primary-source verification and fair decisions.';
const CANONICAL =
  'https://www.ontriq.com/resources/how-to-do-background-checks-on-employees-in-sri-lanka';

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

export default function HowToDoBackgroundChecksPage() {
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
      { '@type': 'ListItem', position: 3, name: 'How to Do Background Checks', item: CANONICAL },
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
        lede="A step-by-step guide for HR teams and business owners: what to verify, in what order, how to stay compliant with the Personal Data Protection Act, and the mistakes that most often derail a hire."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="How to Do Background Checks"
      >
        <p>
          To do a background check on an employee in Sri Lanka, obtain the candidate&apos;s written consent as required under the Personal Data Protection Act, collect identity and qualification documents, select checks that match the role, verify each claim directly with employers, universities, and official registries, then compile the findings into a report and act on them fairly.
        </p>
        <p>
          Done properly, screening is neither slow nor complicated&mdash;but the steps have to happen in the right order, and the consent step is not optional. This guide walks through the full process, the documents involved, and the choices you will need to make along the way.
        </p>

        <h2>Why Employers in Sri Lanka Screen Before They Hire</h2>
        <p>
          Hiring on trust alone is expensive. A bad hire can cost up to 30% of the employee&apos;s first-year potential earnings once you account for recruitment, training, lost productivity, and replacement. And the risk is not rare: an estimated 40&ndash;50% of resumes contain some inaccuracy or exaggeration, from stretched job titles and inflated tenure to qualifications that were never earned.
        </p>
        <p>
          Screening protects more than the budget. It reduces compliance exposure in regulated industries, protects colleagues and customers from safety risks, and shields your brand from the reputational damage a fraudulent hire can cause. That is why <Link href="/services/bgv">background verification services in Sri Lanka</Link> have moved from a nice-to-have for large corporates to standard practice for growing businesses of every size.
        </p>

        <h2>Step 1: Obtain Written Candidate Consent</h2>
        <p>
          Background verification is fully lawful in Sri Lanka, but it is governed primarily by the <strong>Personal Data Protection Act (No. 9 of 2022)</strong>. There is no single dedicated &quot;background check&quot; law&mdash;instead, the PDPA sets the ground rules for how you collect, process, and store a candidate&apos;s personal data. The most important rule is simple: <strong>you must obtain the candidate&apos;s consent before running any checks</strong>.
        </p>
        <p>
          In practice, that means a written consent form signed before verification begins. A good form names the specific checks you intend to run, explains why the data is being collected, states who will process it, and tells the candidate how long the information will be retained. Blanket or buried consent clauses are a poor substitute&mdash;make the authorization explicit and keep a copy on file.
        </p>

        <h2>Step 2: Collect the Documents You Will Verify</h2>
        <p>
          With consent in hand, gather the source documents for each claim you plan to check. For most roles this means:
        </p>
        <ul>
          <li><strong>Identity documents</strong> &mdash; National Identity Card (NIC) or passport</li>
          <li><strong>Education certificates</strong> &mdash; degree, diploma, and professional certification copies</li>
          <li><strong>Employment letters</strong> &mdash; service letters or experience certificates from previous employers</li>
          <li><strong>Proof of address</strong> &mdash; a utility bill, bank statement, or Grama Niladhari certificate</li>
          <li><strong>Reference contacts</strong> &mdash; names and details of professional referees</li>
        </ul>
        <p>
          Collect documents through a secure channel rather than open email threads&mdash;a secure candidate document portal keeps sensitive data protected and gives you a clean record of what was submitted and when. For a role-by-role breakdown of exactly what to gather, see our <Link href="/resources/pre-employment-screening-checklist-sri-lanka">pre-employment screening checklist for Sri Lankan employers</Link>.
        </p>

        <h2>Step 3: Choose the Checks That Fit the Role</h2>
        <p>
          Not every position needs every check. Matching the depth of screening to the seniority and risk profile of the role keeps the process fast and the budget sensible.
        </p>
        <h3>Entry-level roles</h3>
        <p>
          Identity and address verification plus a single professional reference is usually enough. This confirms the person is who they say they are and lives where they claim, without over-engineering the process for a junior hire.
        </p>
        <h3>Mid-level and specialist roles</h3>
        <p>
          Add employment history for the last two employers, education verification, a second reference, and a <Link href="/services/bgv/criminal-record-check">criminal record check</Link>. These are the roles where resume exaggeration is most common and where a fabricated qualification does real damage.
        </p>
        <h3>Executive and compliance-sensitive roles</h3>
        <p>
          Extend employment verification to the last three employers and add global sanction and watchlist screening plus statutory and registry checks. For directors, finance leaders, and anyone with signing authority, the cost of a missed red flag far outweighs the cost of a deeper check. For a closer look at how these tiers are typically priced, read our guide to <Link href="/resources/background-verification-cost-sri-lanka">background verification costs in Sri Lanka</Link>.
        </p>

        <h2>Step 4: Verify Every Claim Through Primary Sources</h2>
        <p>
          This is where most in-house efforts stall. Genuine verification means going back to the original source of each claim&mdash;not accepting the certificate or letter at face value:
        </p>
        <ol>
          <li><strong>Employment history</strong> &mdash; contact the HR department of each previous employer to confirm job title, tenure, and reason for leaving. See how professional <Link href="/services/bgv/employment-verification">employment verification</Link> works in practice.</li>
          <li><strong>Education</strong> &mdash; write to the registrar or examinations department of each university or institute to confirm the qualification, dates, and the institution&apos;s accreditation.</li>
          <li><strong>Criminal and legal records</strong> &mdash; check police and court records through the appropriate official channels.</li>
          <li><strong>Identity and address</strong> &mdash; authenticate the NIC or passport and, where needed, conduct a physical field visit to the stated address.</li>
          <li><strong>References</strong> &mdash; speak to referees directly and ask structured questions rather than accepting a written testimonial.</li>
        </ol>
        <p>
          Doing this yourself is possible, but it is slow and error-prone. Registrars and HR departments respond faster to organizations they already know; an untrained coordinator can miss a forged certificate or accept a friend posing as a former manager. A <Link href="/services/bgv">professional BGV provider</Link> runs these checks in parallel through established primary-source channels&mdash;employment checks typically take 3&ndash;5 working days, education 4&ndash;7, criminal records 5&ndash;7, and identity or address 2&ndash;4&mdash;so a complete multi-check case can still close within 7 working days.
        </p>

        <h2>Step 5: Quality-Check and Compile the Report</h2>
        <p>
          Raw verification responses are not a report. Before anyone makes a hiring decision, the findings should be reviewed for accuracy, discrepancies should be clearly flagged and categorized, and every result should be traceable to its source. This is why mature screening operations use dual-analyst quality control&mdash;a second analyst independently reviews each case before release, which is how accuracy rates above 98% are sustained. The output should be a single, dated report your hiring managers can read in minutes, with the underlying evidence preserved as an audit trail.
        </p>

        <h2>Step 6: Act on the Findings Fairly</h2>
        <p>
          A discrepancy is not automatically a disqualification. A date that is off by a month may be a memory slip; a job title that differs slightly may reflect an internal restructure. Before withdrawing an offer, share the finding with the candidate and give them a genuine opportunity to explain. Apply the same standard to every candidate for the same role, document the reasoning behind your decision, and store the report securely with access limited to those who need it&mdash;consistent with your obligations under the PDPA.
        </p>

        <h2>Common Mistakes Employers Make</h2>
        <ul>
          <li><strong>Skipping written consent</strong> &mdash; running checks first and asking permission later creates avoidable legal exposure under the PDPA.</li>
          <li><strong>Verifying documents instead of claims</strong> &mdash; a well-made forgery passes a visual inspection; only the issuing institution can confirm it is genuine.</li>
          <li><strong>Screening after the start date</strong> &mdash; once an employee is onboarded, acting on adverse findings becomes far harder. Verify before the offer is confirmed.</li>
          <li><strong>Using one-size-fits-all checks</strong> &mdash; over-screening juniors wastes money; under-screening executives invites serious risk.</li>
          <li><strong>Letting checks run sequentially</strong> &mdash; running one check at a time can stretch screening into months. Checks should run in parallel.</li>
          <li><strong>Keeping no audit trail</strong> &mdash; if a hire is ever challenged, you need dated evidence of what was verified, by whom, and what it showed.</li>
        </ul>

        <h2>DIY In-House vs. a Professional BGV Provider</h2>
        <p>
          Many companies start by screening in-house and switch to <Link href="/services/bgv">outsourced employee screening</Link> once volume or risk grows. Here is how the two approaches compare:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                <th>DIY In-House</th>
                <th>Professional BGV Provider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Speed</strong></td>
                <td>Weeks to months; checks run one at a time around other HR duties</td>
                <td>Checks run in parallel; complete multi-check cases within 7 working days</td>
              </tr>
              <tr>
                <td><strong>Primary-source access</strong></td>
                <td>Cold outreach to registrars and HR departments; slow or no responses</td>
                <td>Established channels with institutions, employers, and registries</td>
              </tr>
              <tr>
                <td><strong>PDPA compliance</strong></td>
                <td>Depends on in-house legal awareness; easy to miss consent and retention rules</td>
                <td>Consent-first workflows and secure data handling built into the process</td>
              </tr>
              <tr>
                <td><strong>Cost of errors</strong></td>
                <td>Missed forgeries and unverified claims; a bad hire can cost up to 30% of first-year potential earnings</td>
                <td>Dual-analyst quality control sustaining 98%+ report accuracy</td>
              </tr>
              <tr>
                <td><strong>Audit trail</strong></td>
                <td>Scattered emails and notes, if kept at all</td>
                <td>Dated, source-referenced reports with real-time case tracking</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Get Screening Right From the First Hire</h2>
        <p>
          Employee background checks in Sri Lanka come down to six disciplined steps: consent, documents, the right checks for the role, primary-source verification, quality-controlled reporting, and fair decisions. If you would rather have a dedicated team handle it&mdash;with a dedicated account manager, a secure candidate portal, and complete cases in 7 working days&mdash;<Link href="/contact">get in touch with Ontriq</Link> and we will scope the right screening program for your roles.
        </p>
      </ArticleLayout>
    </>
  );
}
