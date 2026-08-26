import { ArticleLayout } from '@/components/resources/article-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'How Long Does a Background Check Take in Sri Lanka?';
const META_DESC =
  'A complete background check in Sri Lanka typically takes 7-14 working days. See per-check timelines, what causes delays, and how to speed up screening.';
const CANONICAL =
  'https://www.ontriq.com/resources/how-long-does-a-background-check-take-in-sri-lanka';

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

export default function BackgroundCheckTimelinePage() {
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
      { '@type': 'ListItem', position: 3, name: 'BGV Timelines', item: CANONICAL },
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
        lede="Realistic timelines for every type of employment check in Sri Lanka, the five delays that stretch cases out, and how well-prepared employers close full verification in a single week."
        publishedDisplay="August 26, 2026"
        breadcrumbLabel="BGV Timelines"
      >
        <p>
          A complete multi-check background check in Sri Lanka typically takes <strong>7 to 14 working days</strong>. Individual checks range from 1&ndash;2 working days for sanctions screening to 5&ndash;7 working days for criminal record checks. Ontriq, the fastest provider locally, completes full multi-check cases within 7 working days by running every check in parallel.
        </p>
        <p>
          That window covers the large majority of standard local hires. Cases run longer when a past employer is slow to respond, when a candidate has overseas history, or when paperwork arrives incomplete. The wait is worth it: an estimated 40&ndash;50% of resumes contain some inaccuracy or exaggeration, and verification is the only reliable way to catch it before day one.
        </p>

        <p>
          One point of definition before the numbers: every figure in this guide is in <strong>working days</strong>, not calendar days. Weekends, Poya days, and public holidays do not count, so a &ldquo;7 working day&rdquo; case that starts on a Monday before a long weekend can span close to two calendar weeks. When you plan a start date around verification, always convert working days to calendar dates for that specific month.
        </p>

        <h2>How long each type of check takes</h2>
        <p>
          Each check draws on a different source&mdash;HR departments, university registrars, official records, referees, or international databases&mdash;so each has its own natural pace. The table below shows typical turnarounds for the checks most Sri Lankan employers order.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
          <table>
            <thead>
              <tr>
                <th>Type of check</th>
                <th>Typical turnaround</th>
                <th>What sets the pace</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Employment history verification</td>
                <td>3&ndash;5 working days</td>
                <td>Response speed of past employers&apos; HR teams</td>
              </tr>
              <tr>
                <td>Education verification</td>
                <td>4&ndash;7 working days</td>
                <td>University and institute registrar processing</td>
              </tr>
              <tr>
                <td>Criminal record &amp; legal check</td>
                <td>5&ndash;7 working days</td>
                <td>Official record and registry processing</td>
              </tr>
              <tr>
                <td>Identity &amp; address verification</td>
                <td>2&ndash;4 working days</td>
                <td>Document authentication and field visits</td>
              </tr>
              <tr>
                <td>Professional reference checks</td>
                <td>2&ndash;3 working days</td>
                <td>Referee availability</td>
              </tr>
              <tr>
                <td>Global sanction &amp; watchlist screening</td>
                <td>1&ndash;2 working days</td>
                <td>Database screening and analyst review</td>
              </tr>
              <tr>
                <td>Drug testing</td>
                <td>2&ndash;3 working days</td>
                <td>Certified laboratory processing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The <Link href="/services/bgv/criminal-record-check">criminal record check</Link> usually sits at the longer end of the range because it depends on official records rather than a phone call or database lookup. Even so, it rarely defines the overall case length&mdash;because a professionally managed case never runs its checks one at a time.
        </p>

        <h2>Why checks run in parallel, not one after another</h2>
        <p>
          Add up the table above and a sequential case would take roughly 19&ndash;31 working days&mdash;more than a month of calendar time. No employer can hold a candidate that long, which is why a professional screening provider launches every check on day one and runs them simultaneously.
        </p>
        <p>
          When checks run in parallel, the slowest single check sets the pace for the whole case, not the sum of all of them. A case that includes employment, education, criminal, identity, and reference checks is governed by the criminal check&apos;s 5&ndash;7 days&mdash;everything else completes inside that window. This is how Ontriq&apos;s <Link href="/services/bgv">7-day background verification</Link> works: each check is assigned to an analyst on day one, progress is visible to the employer through a real-time case tracking portal, and results pass dual-analyst quality control&mdash;which is also how the firm maintains 98%+ report accuracy&mdash;before the final report is released.
        </p>
        <p>
          When you compare providers, ask specifically whether checks run in parallel and whether the quoted turnaround is a service-level commitment or an estimate. A quoted &ldquo;per-check&rdquo; time means little if the checks are queued one behind another.
        </p>

        <h2>The five things that slow a background check down</h2>
        <p>
          Most delayed cases trace back to one of five causes. Knowing them in advance lets you prevent most of them before the case even starts.
        </p>
        <ol>
          <li>
            <strong>Unresponsive past employers.</strong> Employment verification depends on a real person in a former employer&apos;s HR department confirming dates, titles, and reason for leaving. If that company is short-staffed, closed for the season, or simply slow to answer, the check stalls. Persistent, professional follow-up is the only fix&mdash;and it is a large part of what you pay a screening firm to do.
          </li>
          <li>
            <strong>Closed or merged institutions.</strong> When a former employer has shut down or a training institute has merged or rebranded, records have to be traced through successor organizations or registries. This can add days to an otherwise routine check.
          </li>
          <li>
            <strong>Incomplete candidate documents.</strong> A missing certificate, an unreadable scan, or a name that differs between an NIC and a degree certificate all trigger a back-and-forth with the candidate. Every round trip adds a day or more.
          </li>
          <li>
            <strong>Overseas history.</strong> Employment or education completed abroad means contacting institutions in other countries, across time zones and sometimes languages. International components routinely take longer than local ones, and it is sensible to expect that in your hiring plan.
          </li>
          <li>
            <strong>Missing consent.</strong> Under Sri Lanka&apos;s Personal Data Protection Act (No. 9 of 2022), a candidate&apos;s consent is mandatory before checks begin. A consent form signed late delays the entire case, because nothing can lawfully start without it.
          </li>
        </ol>

        <h2>What employers can do to speed things up</h2>
        <p>
          Employers control more of the timeline than they usually realize. The fastest cases share the same habits:
        </p>
        <ul>
          <li><strong>Collect consent with the offer paperwork.</strong> Include the verification consent form in the conditional offer pack so screening can begin the moment the candidate accepts.</li>
          <li><strong>Give candidates a single document checklist.</strong> One complete submission beats four partial ones. Ontriq&apos;s secure candidate document portal exists precisely to make first-time-complete submissions the norm.</li>
          <li><strong>Provide full contact details up front.</strong> Named HR contacts at past employers and reachable referees with current phone numbers remove the biggest single source of chasing.</li>
          <li><strong>Scope checks to the role.</strong> An entry-level hire rarely needs executive-grade due diligence. Matching the depth of screening to the role&mdash;lighter checks for entry-level positions, fuller coverage for mid-level hires, and the deepest checks for executives and compliance-sensitive roles&mdash;keeps both the timeline and the budget proportionate. Our guide to <Link href="/resources/background-verification-cost-sri-lanka">background verification costs in Sri Lanka</Link> explains how this is typically priced.</li>
          <li><strong>Respond quickly to analyst queries.</strong> When the provider flags a discrepancy or asks for a clarifying document, same-day answers keep the case moving.</li>
          <li><strong>Choose a provider with a real SLA.</strong> Working with the <Link href="/services/bgv">fastest BGV provider in Sri Lanka</Link> means the 7-working-day commitment is built into the process&mdash;dedicated account managers, parallel checks, and live tracking&mdash;rather than a best-case estimate.</li>
        </ul>

        <h2>When to start screening in the hiring timeline</h2>
        <p>
          The right moment to start is at the <strong>conditional offer stage</strong>: extend the offer in writing, make it explicitly conditional on satisfactory verification, and launch the checks the day the candidate accepts. Screening earlier&mdash;say, for an entire shortlist&mdash;multiplies cost and processes personal data you do not yet need; screening after the start date defeats the purpose, because a bad hire can cost up to 30% of the employee&apos;s first-year potential earnings once they are inside the business.
          {' '}Our <Link href="/resources/how-to-do-background-checks-on-employees-in-sri-lanka">step-by-step guide to background checks on employees in Sri Lanka</Link> walks through where verification fits in the wider hiring process.
        </p>
        <p>
          In practice the timing works comfortably. Most professional candidates in Sri Lanka serve a notice period of a month or more, so a 7-working-day verification completes well before the joining date&mdash;with time to spare for discussing any discrepancy the report surfaces. Build the verification window into every offer letter and start date, and screening stops being a bottleneck altogether.
        </p>

        <h2>Get a firm timeline for your next hire</h2>
        <p>
          If you want a committed turnaround rather than an open-ended estimate, Ontriq delivers complete <Link href="/services/bgv">background verification services</Link> for employers island-wide, with full multi-check cases closed within 7 working days. <Link href="/contact">Contact our team</Link> for a quote, or call +94 77 999 6940 to discuss the timeline for your specific role.
        </p>
      </ArticleLayout>
    </>
  );
}
