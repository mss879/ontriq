import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ontriq Sri Lanka',
  description: 'Learn how Ontriq collects, stores, and protects background verification, HR, and recruitment data in strict compliance with the Sri Lanka Personal Data Protection Act.',
  keywords: [
    'privacy policy Ontriq',
    'data protection Sri Lanka',
    'background check privacy',
    'data retention BGV',
    'personal data security',
    'PDPA compliance Sri Lanka',
  ],
  openGraph: {
    title: 'Privacy Policy | Ontriq Sri Lanka',
    description: 'Learn how Ontriq collects, stores, and protects candidate and client data.',
    url: 'https://www.ontriq.com/privacy',
    siteName: 'Ontriq',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Ontriq Sri Lanka',
    description: 'Learn how Ontriq protects background verification, HR, and recruitment data.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/privacy',
  },
};

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy',
  description: 'Official privacy policy and data protection declaration for Ontriq.',
  url: 'https://www.ontriq.com/privacy',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Ontriq',
    url: 'https://www.ontriq.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ontriq.com' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://www.ontriq.com/privacy' },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <main className="min-h-screen bg-slate-50 pt-32 pb-24" id="main-content">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Card container */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 mb-8 font-medium">
              Last Updated: May 25, 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  At Ontriq, we recognize that privacy and data security are of paramount importance, especially within our core operations of background verification, recruitment, and HR management. We are committed to safeguarding the personal and credential data of our candidates, clients, and visitors.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  This Privacy Policy outlines how Ontriq collects, stores, processes, and purges personal information in strict compliance with the **Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022** and international data protection standards.
                </p>
              </section>

              <hr className="border-slate-200" />

              {/* Strict No-Sharing Policy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Internal Storage & Strict Non-Disclosure Policy
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                  <p className="text-blue-900 font-semibold mb-2">Industry-Standard Security Pledge:</p>
                  <p className="text-blue-800 leading-relaxed">
                    **We do not share candidate or client data with any third parties for commercial use, advertising, or external marketing.** 
                  </p>
                  <p className="text-blue-800 leading-relaxed mt-2">
                    All personal records, credential files, background screening forms, and verification documents are stored strictly within our secure, access-controlled internal servers. Data access is tightly restricted to authorized verification analysts and security personnel.
                  </p>
                </div>
              </section>

              {/* Data Retention Lifecycle */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Rigid Data Retention & Secure Purging (6–12 Months)
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  In order to balance client auditing needs with the candidate&apos;s right to data minimization, Ontriq enforces a strict data lifecycle policy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <strong>Active Verification Period:</strong> Candidate-submitted documentation is processed under explicit consent during active background screening.
                  </li>
                  <li>
                    <strong>Retention Period:</strong> All screening documents, verified records, and generated verification reports are kept in our secure internal database for a minimum of <strong>6 months</strong> and a maximum of <strong>1 year (12 months)</strong> from the completion of the case.
                  </li>
                  <li>
                    <strong>Permanent Purging:</strong> Immediately following this retention window, all digital documents and case files are permanently and securely deleted from our databases, rendering them completely unrecoverable.
                  </li>
                </ul>
              </section>

              {/* Information Collection */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Information We Collect
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We only collect data that is strictly necessary to conduct our services. Depending on the service chosen by the employing organization, this may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Identity Information:</strong> Full name, National Identity Card (NIC) number, Passport details, and current/previous address proof.</li>
                  <li><strong>Educational Background:</strong> Degrees, diplomas, professional licenses, transcripts, and institutional certificates.</li>
                  <li><strong>Professional Experience:</strong> Employment history, designations, job scopes, tenure, salary records (where permitted), and performance references.</li>
                  <li><strong>Legal Checks:</strong> Police clearances, court search histories, and global sanction screenings.</li>
                </ul>
              </section>

              {/* Consent and Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Explicit Consent & Candidate Rights
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Background verification at Ontriq is **never conducted without candidate consent**. Prior to initiating any search or inquiry, candidates must review and sign our explicit, legal consent form. 
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Under the Sri Lankan PDPA, candidates retain the following rights, which can be exercised by contacting our privacy officer:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Right to Access:</strong> Request a copy of the background check report and raw documentation collected during the process.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of any inaccurate or outdated information in your verification file.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any stage, halting the screening process immediately.</li>
                  <li><strong>Right to Erasure:</strong> Request early purging of your verification data prior to the automatic 6-to-12-month schedule.</li>
                </ul>
              </section>

              {/* Security Standards */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Technical Security & Encryption Standards
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  To guarantee absolute safety, Ontriq deploys industry-standard technical defenses aligned with ISO 27001 cybersecurity frameworks:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Data in Transit:</strong> Encrypted using secure Transport Layer Security (TLS 1.3) protocols.</li>
                  <li><strong>Data at Rest:</strong> Stored on encrypted database volumes utilizing Advanced Encryption Standard (AES-256).</li>
                  <li><strong>Infrastructure:</strong> Firewalled network environments with multi-factor authentication (MFA) required for all internal operations.</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Privacy Enquiries
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  If you have questions about this policy, want to request access to your records, or need to exercise your candidate rights, please contact our designated Data Protection Officer:
                </p>
                <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 mt-2">
                  <p className="text-slate-800 font-bold">Ontriq Privacy & Compliance Team</p>
                  <p className="text-slate-600">107 Colombo - Galle Main Rd, Dehiwala-Mount Lavinia, Sri Lanka</p>
                  <p className="text-slate-600 mt-2"><strong>Email:</strong> info@ontriq.com</p>
                  <p className="text-slate-600"><strong>Phone:</strong> +94 77 999 6940</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
