import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'Background Check Red Flags: An Employer\'s Guide';
const META_DESC = 'What counts as a red flag in a background check? The 7 most common discrepancies in Sri Lankan hiring, a severity framework, and a fair 4-step response process.';
const CANONICAL = 'https://www.ontriq.com/resources/background-check-red-flags-employers-guide';

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

export default function BackgroundCheckRedFlagsPage() {
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
      { '@type': 'ListItem', position: 3, name: 'Red Flags Guide', item: CANONICAL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ArticleLayout
        title={TITLE}
        lede="A discrepancy has appeared on a verification report. Before you withdraw the offer — or ignore the finding — here is how to judge which red flags actually matter, and how to respond fairly."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="Red Flags Guide"
      >
        <p>
          A background check red flag is any material mismatch between what a candidate claimed and what primary sources &mdash; past employers, universities, courts, and registries &mdash; actually confirm. Not every discrepancy is disqualifying: many turn out to be clerical errors or honest memory lapses. What matters is whether the gap is deliberate, relevant to the role, and repeated across checks.
        </p>
        <p>
          Getting this judgment right is worth the effort. An estimated 40&ndash;50% of resumes contain some inaccuracy or exaggeration, so most HR teams will face a discrepancy sooner rather than later. At the same time, a bad hire can cost up to 30% of the employee&apos;s first-year potential earnings &mdash; which is exactly why <Link href="/services/bgv">employee background check services</Link> exist in the first place. The goal is not to reject every candidate with an imperfect file. It is to separate the trivial from the material, and to do so in a way that is fair, documented, and legally defensible.
        </p>

        <h2>The 7 Most Common Red Flags in Sri Lankan Hiring</h2>
        <p>
          Across employment, education, criminal, identity, reference, and sanctions checks, discrepancies tend to fall into seven recurring patterns.
        </p>

        <h3>1. Unexplained employment date gaps</h3>
        <p>
          The candidate&apos;s CV shows continuous employment, but the previous employer confirms different start or end dates &mdash; sometimes leaving months unaccounted for. Short gaps are common and usually innocent: notice periods, garden leave, family responsibilities, or simply rounding &ldquo;March&rdquo; to &ldquo;January.&rdquo; The concern arises when a long gap appears to have been deliberately papered over, because candidates sometimes stretch dates to conceal a dismissal or a short, failed stint at another company. Dedicated <Link href="/services/bgv/employment-verification">employment verification</Link> confirms dates, titles, and reasons for leaving directly with each past employer, so you are comparing the claim against the record rather than guessing.
        </p>

        <h3>2. Inflated job titles or responsibilities</h3>
        <p>
          &ldquo;Head of Finance&rdquo; turns out to have been &ldquo;Senior Accounts Executive.&rdquo; Title inflation is one of the most frequent findings in verification work, partly because titles genuinely vary between companies &mdash; a &ldquo;Manager&rdquo; in a five-person firm may carry less scope than an &ldquo;Executive&rdquo; in a large conglomerate. The material question is whether the candidate claimed authority, team size, or budget responsibility they never held, especially when your role depends on that experience.
        </p>

        <h3>3. Unaccredited or fake qualifications</h3>
        <p>
          Education discrepancies range from harmless &mdash; a slightly misremembered graduation year &mdash; to serious: degrees from unaccredited &ldquo;degree mills,&rdquo; altered certificates, or qualifications the institution has no record of awarding. Because a forged certificate can look entirely convincing, <Link href="/services/bgv/education-verification">education verification</Link> goes to the source: the university registrar or examinations department, plus a check on the institution&apos;s own accreditation status.
        </p>

        <h3>4. Undisclosed criminal records</h3>
        <p>
          A criminal record surfacing on a check is not automatically disqualifying &mdash; but a criminal record the candidate was asked about and denied is a different matter, because the dishonesty compounds the underlying finding. Relevance matters too: a decades-old minor offense has little bearing on most roles, while a fraud conviction is directly material for anyone handling money, data, or vulnerable people.
        </p>

        <h3>5. Address mismatches</h3>
        <p>
          The address on the application does not match what an identity check or field visit confirms. Often this is mundane &mdash; the candidate recently moved, or listed a permanent family address while boarding near work, which is common in Sri Lanka. It becomes a red flag when the candidate cannot explain the mismatch, or when it forms part of a wider pattern of identity inconsistencies.
        </p>

        <h3>6. Poor or evasive references</h3>
        <p>
          A referee who declines to comment, gives only dates of employment when asked open questions, or contradicts the candidate&apos;s account is a signal worth noting &mdash; though a cautious reference alone is weak evidence, since many companies have policies restricting what staff may say. Two or more independently lukewarm or contradictory references, however, deserve serious weight.
        </p>

        <h3>7. Sanctions or watchlist matches</h3>
        <p>
          Global sanctions and watchlist screening occasionally returns a match against the candidate&apos;s name. Many of these are false positives caused by common names, which is why a potential match must be resolved against date of birth and identity documents before any conclusion is drawn. A confirmed match, on the other hand, is among the most serious findings a report can contain, particularly for finance and compliance-sensitive roles.
        </p>

        <h2>How Serious Is It? A Severity Framework</h2>
        <p>
          Use the table below as a first filter. The pattern is consistent: discrepancies are usually minor when they are small, explainable, and irrelevant to the role &mdash; and material when they are deliberate, role-relevant, or repeated.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Red flag</th>
                <th>Usually minor when...</th>
                <th>Material when...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment date gaps</td>
                <td>Gap is short, disclosed, or explained by notice periods, study, or family reasons</td>
                <td>Dates were stretched to conceal a dismissal or an omitted employer</td>
              </tr>
              <tr>
                <td>Inflated job titles</td>
                <td>Titles differ due to company naming conventions; duties broadly match</td>
                <td>Claimed seniority, team, or budget the candidate never held &mdash; and the role depends on it</td>
              </tr>
              <tr>
                <td>Qualification issues</td>
                <td>Minor errors in dates or grade classification, confirmed by the institution</td>
                <td>Qualification is fake, altered, or from an unaccredited institution</td>
              </tr>
              <tr>
                <td>Criminal records</td>
                <td>Old, minor, disclosed, and unrelated to the role&apos;s duties</td>
                <td>Undisclosed after being asked, recent, or directly relevant (e.g., fraud for a finance role)</td>
              </tr>
              <tr>
                <td>Address mismatches</td>
                <td>Recent move or a permanent vs. residential address difference, readily explained</td>
                <td>Part of a wider pattern of identity inconsistencies the candidate cannot explain</td>
              </tr>
              <tr>
                <td>Poor references</td>
                <td>One cautious referee, or a company policy limiting comment</td>
                <td>Multiple independent references are negative, evasive, or contradict the candidate</td>
              </tr>
              <tr>
                <td>Sanctions matches</td>
                <td>Name-only match ruled out against date of birth and identity documents</td>
                <td>Match is confirmed against the candidate&apos;s verified identity</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>A Fair 4-Step Response Process</h2>
        <p>
          When a discrepancy appears, resist the urge to decide on the spot. A structured response protects the candidate from an unfair rejection and protects you from a rushed hire &mdash; or a rushed withdrawal you later regret.
        </p>
        <ol>
          <li>
            <strong>Document the finding.</strong> Record exactly what was claimed, what the source confirmed, and where the two differ. Keep the verification report and your notes together; if the decision is ever questioned, this record is your defense.
          </li>
          <li>
            <strong>Notify the candidate.</strong> Tell them a discrepancy was found and describe it specifically. Vague accusations (&ldquo;something came up in your background check&rdquo;) invite panic, not clarification.
          </li>
          <li>
            <strong>Give a clarification window.</strong> Allow the candidate a reasonable period to respond with an explanation or supporting documents. Many discrepancies dissolve at this stage &mdash; a company that changed names, a maiden name on a certificate, an institution&apos;s own record-keeping error.
          </li>
          <li>
            <strong>Decide and record the rationale.</strong> Weigh the explanation against the severity framework above, decide, and write down why. A one-paragraph rationale turns a gut call into a defensible decision.
          </li>
        </ol>

        <h2>Legal and Fairness Considerations Under the PDPA</h2>
        <p>
          Background verification is lawful in Sri Lanka, but there is no single dedicated &ldquo;background check&rdquo; law. The process is governed primarily by the Personal Data Protection Act (No. 9 of 2022), which treats the information gathered during screening as personal data. In practice, that means candidate consent must be obtained before any checks begin, the data you collect should be limited to what the role genuinely requires, and findings should be stored securely and shared only with those involved in the hiring decision.
        </p>
        <p>
          Fairness is also self-interested: a clarification window is not just courteous, it is how you avoid rejecting a good candidate over a source&apos;s clerical error. Getting consent language and data handling right from the start is easier than retrofitting it &mdash; our <Link href="/resources/pre-employment-screening-checklist-sri-lanka">pre-employment screening checklist</Link> covers the consent and documentation steps to complete before any check is ordered.
        </p>

        <h2>When to Walk Away &mdash; and When to Hire Anyway</h2>
        <p>
          After clarification, most decisions fall into one of two clear zones.
        </p>
        <p>
          <strong>Walk away when:</strong> the candidate fabricated a qualification or an entire employment record; they denied a criminal record they were directly asked about; a sanctions match is confirmed against their verified identity; or their explanation for a material discrepancy shifts each time you ask. In each of these cases the issue is no longer the original finding &mdash; it is that you cannot trust what the candidate tells you.
        </p>
        <p>
          <strong>Hiring anyway can be reasonable when:</strong> the discrepancy is small and the candidate&apos;s explanation checks out; the issue is old, disclosed, and unrelated to the role; or the source itself made the error. A candidate who volunteers an honest explanation for an employment gap is often demonstrating exactly the integrity the check was designed to test.
        </p>

        <h2>How Professional Verification Reports Present Discrepancies</h2>
        <p>
          A professional report does not simply stamp a candidate &ldquo;pass&rdquo; or &ldquo;fail.&rdquo; It presents each finding with an evidence trail: what the candidate claimed, what the source confirmed, who the source was, and when they were contacted. That source attribution is what lets you run the four-step process above with confidence &mdash; you can show the candidate precisely what was found and where it came from.
        </p>
        <p>
          It is also why quality control matters. Ontriq&apos;s <Link href="/services/bgv">background verification services in Sri Lanka</Link> put every report through dual-analyst quality control, which is how we maintain 98%+ report accuracy &mdash; and complete multi-check cases are still delivered within 7 working days, with progress visible in a real-time case tracking portal. If you are building your screening program from scratch, our step-by-step guide on <Link href="/resources/how-to-do-background-checks-on-employees-in-sri-lanka">how to do background checks on employees in Sri Lanka</Link> explains which checks to run for each role and in what order.
        </p>
        <p>
          Found a discrepancy you are unsure how to handle &mdash; or want reports that make these calls easier? <Link href="/contact">Talk to the Ontriq team</Link>, call +94 77 999 6940, or email info@ontriq.com for a confidential discussion.
        </p>
      </ArticleLayout>
    </>
  );
}
