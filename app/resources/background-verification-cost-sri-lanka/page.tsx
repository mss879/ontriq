import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'How Much Does Background Verification Cost in Sri Lanka?';
const META_DESC =
  'Learn what drives background verification pricing in Sri Lanka, how screening depth is matched to each role, and how to budget employee checks for your hiring plan.';
const CANONICAL = 'https://www.ontriq.com/resources/background-verification-cost-sri-lanka';

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

export default function BgvCostGuidePage() {
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
      { '@type': 'ListItem', position: 3, name: 'BGV Cost Guide', item: CANONICAL },
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
        title="How Much Does Background Verification Cost in Sri Lanka?"
        lede="There is no one-size-fits-all price for a background check. This guide explains the six factors that drive verification pricing in Sri Lanka, how matching screening depth to each role keeps costs predictable, and how to budget employee screening across your entire hiring plan."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="BGV Cost Guide"
      >
        <p>
          The cost of background verification in Sri Lanka depends on the number and type of
          checks, the seniority of the role, your hiring volume, and how fast you need results.
          Screening is priced per candidate based on the depth of verification each role
          actually requires, so no two hiring plans cost quite the same.
        </p>
        <p>
          That is for a good reason: not every hire carries the same risk. An entry-level
          associate does not need executive-grade due diligence, and a CFO candidate should
          never be screened as lightly as a junior hire. Understanding what actually moves the
          price lets you budget accurately and avoid paying for depth you do not
          need&mdash;or skipping depth you do.
        </p>

        <h2>The 6 Factors That Drive Background Check Pricing</h2>
        <p>
          Whether you engage a professional{' '}
          <Link href="/services/bgv">background verification company</Link> or attempt
          verification in-house, six variables determine what you will spend per candidate.
        </p>
        <ol>
          <li>
            <strong>Number of checks per candidate.</strong> This is the single biggest driver.
            A case covering identity and one reference costs far less than a case covering
            identity, address, employment, education, criminal record, references, and sanctions
            screening. Every additional check adds analyst time.
          </li>
          <li>
            <strong>Complexity of each check type.</strong> Checks are not equal in effort. A
            sanctions screen can typically clear in 1&ndash;2 working days, while a criminal
            record and legal check involves official records and usually takes 5&ndash;7 working
            days. Checks that require field visits&mdash;such as physical address
            verification&mdash;or direct contact with registrars and past employers involve more
            hands-on work, which is reflected in the price.
          </li>
          <li>
            <strong>Role seniority and verification depth.</strong> Verifying a candidate&apos;s
            last employer is one task; verifying the last three employers, plus statutory and
            registry records, is another. Senior and compliance-sensitive roles justify deeper
            coverage, and deeper coverage costs more.
          </li>
          <li>
            <strong>Hiring volume.</strong> Screening 5 hires a year and screening 200 are very
            different conversations. Higher volumes generally allow providers to structure more
            favorable per-case arrangements, so annual commitments usually bring the unit cost
            down.
          </li>
          <li>
            <strong>Turnaround requirements.</strong> Speed has a cost with many providers.
            Ontriq&apos;s standard is a complete multi-check case within 7 working days, with
            individual checks running in parallel, so employers do not need to pay a premium
            simply to keep an offer timeline on track.
          </li>
          <li>
            <strong>International candidates.</strong> Verifying overseas employment or foreign
            academic credentials requires coordination across borders and time zones. Add-ons
            such as{' '}
            <Link href="/services/bgv/global-sanction-screening">
              global sanction and watchlist screening
            </Link>{' '}
            are essential for candidates with international histories, and they add a modest
            cost to the case.
          </li>
        </ol>

        <h2>Matching Verification Depth to the Role</h2>
        <p>
          Rather than quoting every check individually, most employers agree a standard check
          list per role level with their provider of{' '}
          <Link href="/services/bgv">background verification services in Sri Lanka</Link>. That
          keeps budgeting predictable: you know in advance what each hire at each level will
          cost to screen, and you avoid ad-hoc decisions about which checks to run. A typical
          mapping looks like this.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Role Level</th>
                <th>Checks Typically Run</th>
                <th>Why This Depth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Entry-level</strong>
                </td>
                <td>
                  Identity and address verification, 1 professional reference
                </td>
                <td>Confirms the person is who they say they are, at volume-friendly cost</td>
              </tr>
              <tr>
                <td>
                  <strong>Mid-level &amp; specialists</strong>
                </td>
                <td>
                  Identity and address verification, employment history (last 2 employers),
                  education verification, 2 professional references, criminal record check
                </td>
                <td>Validates the credentials and track record the hire was made on</td>
              </tr>
              <tr>
                <td>
                  <strong>Executive &amp; compliance-sensitive</strong>
                </td>
                <td>
                  All of the above, plus employment history for the last 3 employers, global
                  sanctions and watchlist screening, and statutory and registry checks
                </td>
                <td>Positions of trust justify the fullest available due diligence</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A common concern is that more checks mean a slower hire. In practice, checks run in
          parallel&mdash;employment verification typically takes 3&ndash;5 working days,
          education 4&ndash;7, references 2&ndash;3&mdash;so a full multi-check case still
          closes within 7 working days. For a check-by-check breakdown of timelines, see our
          guide on{' '}
          <Link href="/resources/how-long-does-a-background-check-take-in-sri-lanka">
            how long a background check takes in Sri Lanka
          </Link>
          .
        </p>

        <h3>Why Standardizing by Role Level Beats Ad-Hoc Ordering</h3>
        <p>
          Deciding checks hire-by-hire sounds flexible, but it tends to produce two expensive
          failure modes: over-screening junior staff out of caution, and under-screening senior
          staff to save money. A standard check list per role level removes that guesswork. It
          also makes finance approvals simpler&mdash;one known cost per role band, rather than
          a different invoice composition for every hire.
        </p>

        <h2>The Real Comparison: What Not Screening Costs</h2>
        <p>
          Screening should be weighed against the alternative, and the alternative is not free.
          Industry research suggests a bad hire can cost up to 30% of the employee&apos;s
          first-year potential earnings once you account for recruitment, onboarding, lost
          productivity, and replacement. And the risk is not rare: an estimated 40&ndash;50% of
          resumes contain some inaccuracy or exaggeration.
        </p>
        <p>An unverified hire exposes your business to several kinds of loss:</p>
        <ul>
          <li>
            <strong>Rehiring and retraining costs</strong> when a misrepresented candidate
            underperforms and has to be replaced.
          </li>
          <li>
            <strong>Fraud and theft exposure</strong> when someone with an undisclosed history
            is placed in a position of trust over cash, inventory, or data.
          </li>
          <li>
            <strong>Compliance and legal exposure.</strong> Hiring practices that mishandle
            candidate data can create regulatory risk under Sri Lanka&apos;s Personal Data
            Protection Act (No. 9 of 2022), which requires candidate consent before checks are
            run. Regulated industries also face scrutiny over who they employ in sensitive
            roles.
          </li>
          <li>
            <strong>Reputational damage</strong> with clients and partners if a fraudulent hire
            becomes public.
          </li>
        </ul>
        <p>
          Against those numbers, per-candidate screening is one of the cheapest forms of risk
          management available to a Sri Lankan employer.
        </p>

        <h2>How to Budget Screening by Annual Hires</h2>
        <p>
          The most reliable way to budget is to plan by role band rather than by individual
          vacancy. A simple five-step method works for most organizations:
        </p>
        <ol>
          <li>
            <strong>Segment your projected annual hires</strong> into entry-level, mid-level,
            and senior or compliance-sensitive bands.
          </li>
          <li>
            <strong>Agree a standard check list for each band</strong>&mdash;lighter identity
            and reference checks for entry-level, fuller employment, education, and criminal
            coverage for mid-level, and the deepest due diligence for executive and regulated
            roles.
          </li>
          <li>
            <strong>Request a per-band quote</strong> from your provider and multiply each by
            the projected hires in that band.
          </li>
          <li>
            <strong>Add a buffer for add-ons</strong> such as international verifications, extra
            references, or drug testing through certified laboratories where the role requires
            it.
          </li>
          <li>
            <strong>Review the plan annually</strong> against your actual hiring, and
            renegotiate volume terms as your headcount grows.
          </li>
        </ol>
        <p>
          If you are building a screening program from scratch, start with our step-by-step
          guide on{' '}
          <Link href="/resources/how-to-do-background-checks-on-employees-in-sri-lanka">
            how to do background checks on employees in Sri Lanka
          </Link>{' '}
          before you set the budget&mdash;knowing the process makes the numbers much easier to
          justify internally.
        </p>

        <h2>4 Ways to Reduce Screening Costs Without Cutting Corners</h2>
        <ol>
          <li>
            <strong>Match depth to risk, not habit.</strong> Running the deepest screening on
            every hire wastes money; running the lightest on every hire creates risk. Map
            checks to role levels deliberately and revisit the mapping once a year.
          </li>
          <li>
            <strong>Bundle checks into a single case.</strong> Ordering checks piecemeal across
            different providers multiplies admin work and loses the efficiency of parallel
            processing. Consolidating your{' '}
            <Link href="/services/bgv">employee screening services</Link> with one provider
            keeps cases moving through a single workflow and a single report.
          </li>
          <li>
            <strong>Commit to volume where you can.</strong> If you can forecast your annual
            hiring with reasonable confidence, an annual arrangement almost always beats
            one-off, per-case ordering.
          </li>
          <li>
            <strong>Get consent and documents right the first time.</strong> The most common
            hidden cost in screening is rework: chasing missing certificates, unsigned consent
            forms, or incomplete employer details. Candidate consent is mandatory under the
            PDPA in any case, so build it into your offer process. A secure candidate document
            portal&mdash;which Ontriq provides as standard&mdash;cuts the back-and-forth that
            drags cases out.
          </li>
        </ol>

        <h2>Get an Exact Price for Your Hiring Plan</h2>
        <p>
          Because pricing depends on your specific mix of roles, checks, and volume, the fastest
          route to an accurate number is a tailored quote. Ontriq serves employers island-wide
          from its office in Dehiwala-Mount Lavinia, delivering complete multi-check cases
          within 7 working days with 98%+ report accuracy through dual-analyst quality control,
          and real-time case tracking so you always know where each candidate stands.{' '}
          <Link href="/contact">Contact our team</Link> with your annual hiring plan, or call
          +94 77 999 6940, and we will map your roles to the right level of screening and give
          you a clear, per-band cost for the year.
        </p>
      </ArticleLayout>
    </>
  );
}
