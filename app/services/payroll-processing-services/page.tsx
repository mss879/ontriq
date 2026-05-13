import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

const payrollFaqItems = [
  { question: 'What payroll services does Ontriq provide in Sri Lanka?', answer: 'Ontriq provides comprehensive payroll services including monthly salary processing, EPF/ETF calculation and remittance, PAYE tax deductions, payslip generation, leave and attendance integration, statutory compliance, year-end tax documentation, and benefits administration.' },
  { question: 'How do you handle EPF and ETF contributions?', answer: 'We calculate employer and employee EPF contributions (12% and 8% respectively) and ETF contributions (3% employer) for each payroll cycle, prepare the remittance forms, and ensure timely submission to the Central Bank of Sri Lanka and Employees Trust Fund Board.' },
  { question: 'Can you handle payroll for companies with remote employees?', answer: 'Yes, we manage payroll for distributed and remote teams across Sri Lanka. Our cloud-based systems handle multi-location payroll processing, attendance tracking integration, and digital payslip delivery.' },
  { question: 'What statutory compliance does your payroll service cover?', answer: 'Our payroll service covers EPF/ETF contributions, PAYE income tax deductions, gratuity calculations, Workmen Compensation Fund requirements, and all relevant labor law compliance including Shop and Office Employees Act requirements.' },
  { question: 'How secure is employee payroll data with Ontriq?', answer: 'All payroll data is processed through encrypted systems with role-based access controls. We comply with Sri Lankan data protection requirements and maintain strict confidentiality protocols for all employee financial information.' },
  { question: 'What is the cost of outsourcing payroll?', answer: 'Payroll outsourcing costs depend on the number of employees, complexity of your compensation structure, and additional services required. Contact us for a customized quote. Our pricing is transparent with no hidden charges.' },
];

export const metadata: Metadata = {
  title: 'Payroll Processing & Outsourcing Services Sri Lanka | Ontriq',
  description: 'Accurate payroll services in Sri Lanka. EPF/ETF management, PAYE tax, payslip generation, and full statutory compliance from Ontriq.',
  keywords: [
    'payroll services Sri Lanka', 'payroll outsourcing Sri Lanka', 'payroll processing',
    'EPF ETF management Sri Lanka', 'PAYE tax Sri Lanka', 'payroll compliance',
    'payslip generation', 'salary processing Sri Lanka', 'payroll company Sri Lanka',
  ],
  openGraph: {
    title: 'Payroll Processing & Outsourcing Services Sri Lanka | Ontriq',
    description: 'Accurate, timely, and fully compliant payroll services in Sri Lanka.',
    url: 'https://www.ontriq.com/services/payroll-processing-services',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq Payroll Services' }],
  },
  twitter: { card: 'summary_large_image', title: 'Payroll Processing Services Sri Lanka | Ontriq', description: 'Accurate, timely, and fully compliant payroll services.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/payroll-processing-services' },
};

export default function PayrollProcessingServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service", "name": "Payroll Processing Services",
    "serviceType": "Payroll Services", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Comprehensive payroll processing and administration services in Sri Lanka including EPF/ETF management, PAYE tax, and statutory compliance.",
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Payroll Services", "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Payroll Processing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EPF/ETF Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Statutory Compliance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tax Calculations & PAYE" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leave & Attendance Management" } },
    ]}
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": payrollFaqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Payroll Processing", "item": "https://www.ontriq.com/services/payroll-processing-services" },
  ]};

  const services = [
    { title: 'Monthly Payroll Processing', description: 'Calculating salaries, bonuses, deductions, overtime, and net pay with complete accuracy every month.' },
    { title: 'EPF & ETF Management', description: 'Computing employer and employee EPF contributions (12% + 8%) and ETF (3%), preparing remittance forms, and ensuring timely submission.' },
    { title: 'Statutory Compliance', description: 'Managing all government-mandated contributions, filings, and labor law requirements including PAYE, gratuity, and Workmen Compensation.' },
    { title: 'Payslip Generation', description: 'Secure, timely issuance of detailed digital payslips with full breakdown of earnings, deductions, and net pay.' },
    { title: 'Tax Calculations & PAYE', description: 'Accurate PAYE tax deduction calculations, year-end tax documentation, and employee tax returns support.' },
    { title: 'Leave & Attendance Integration', description: 'Syncing payroll with attendance and leave management systems for accurate compensation calculations.' },
    { title: 'Benefits Administration', description: 'Managing expense claims, incentives, allowances, reimbursements, and other employee entitlements.' },
  ];

  const processSteps = [
    { title: 'Data Collection', description: 'Gathering attendance, leave, overtime, and variable pay data each month.' },
    { title: 'Payroll Calculation', description: 'Processing salaries, deductions, statutory contributions, and tax calculations.' },
    { title: 'Review & Approval', description: 'Quality checks and client approval before finalization.' },
    { title: 'Payslip Distribution', description: 'Generating and distributing digital payslips to all employees.' },
    { title: 'Statutory Filing', description: 'Submitting EPF/ETF remittances and PAYE returns on time.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="004" title="Payroll Processing" subtitle="& Administration Services"
        description={`At Ontriq, we offer accurate, timely, and fully compliant Payroll Processing and Administration services that help businesses manage employee compensation with confidence.\n\nOur payroll solutions reduce administrative burdens, eliminate errors, and ensure adherence to all Sri Lankan regulatory requirements including EPF, ETF, PAYE, and gratuity obligations.`} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">Payroll Services in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Payroll processing in Sri Lanka involves complex calculations across multiple statutory requirements. These include EPF contributions at 12% (employer) and 8% (employee), ETF at 3%, PAYE income tax deductions, and compliance with the Shop and Office Employees Act. Errors in any of these areas can result in penalties, employee dissatisfaction, and regulatory action.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq&apos;s payroll outsourcing service handles every aspect of your payroll, from monthly salary calculations and statutory deductions to payslip generation and year-end tax reporting. We integrate with your <Link href="/services/hr-management-services" className="text-[#0098F3] font-semibold hover:underline">HR management</Link> systems to ensure seamless data flow between attendance, leave, and compensation.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="01" title="Our Payroll Services" subtitle="What We Offer" description="End-to-end payroll processing and statutory compliance." />
          <ServiceCardGrid items={services} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="02" title="How We Process Payroll" subtitle="Our Process" description="A reliable, accurate payroll cycle every month." />
          <ServiceHorizontalList items={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/hr-management-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">HR Management</h3>
              <p className="text-sm text-slate-500">End-to-end HR solutions</p>
            </Link>
            <Link href="/services/company-formation" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Company Formation</h3>
              <p className="text-sm text-slate-500">Business registration & setup</p>
            </Link>
            <Link href="/services/recruitment-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Recruitment</h3>
              <p className="text-sm text-slate-500">Find top talent</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader number="03" title="Frequently Asked Questions" subtitle="FAQ" description="Common questions about payroll services in Sri Lanka." />
          <div className="space-y-6">
            {payrollFaqItems.map((faq, index) => (
              <details key={index} className="group border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-2xl text-slate-400 group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
