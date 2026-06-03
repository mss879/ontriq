import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

const hrFaqItems = [
  { question: 'What HR services does Ontriq offer in Sri Lanka?', answer: 'Ontriq provides comprehensive HR services including HR policy development, employee onboarding and offboarding, performance management systems, employee relations and conflict resolution, HR compliance consulting, HR administration, and full HR outsourcing (HRO) for businesses that want to delegate their entire HR function.' },
  { question: 'What is HR outsourcing and when should I consider it?', answer: 'HR outsourcing (HRO) is when a business delegates some or all of its HR functions to an external provider like Ontriq. Consider HR outsourcing when your business is growing faster than your internal HR capacity, you need specialized HR expertise, you want to reduce HR operational costs, or you need to ensure compliance with complex labor regulations in Sri Lanka.' },
  { question: 'Do you handle employee onboarding and offboarding?', answer: 'Yes, we manage the complete employee lifecycle, from offer letter preparation and onboarding documentation to exit interviews, final settlements, and EPF/ETF closure. Our structured onboarding process ensures new hires are productive from day one.' },
  { question: 'How do you ensure compliance with Sri Lankan labor laws?', answer: 'Our HR compliance team stays current with the Shop and Office Employees Act, Industrial Disputes Act, Workmen Compensation Ordinance, Payment of Gratuity Act, and all EPF/ETF regulations. We conduct regular compliance audits and update your policies to reflect any legal changes.' },
  { question: 'Can Ontriq help develop HR policies for my company?', answer: 'Yes, we develop customized HR policies and employee handbooks tailored to your industry, company culture, and Sri Lankan legal requirements. This includes leave policies, code of conduct, anti-harassment policies, performance review frameworks, and disciplinary procedures.' },
  { question: 'Do you provide performance management solutions?', answer: 'Yes, we implement performance management systems including KPI frameworks, 360-degree feedback processes, performance review cycles, and employee development plans. We help you build a culture of accountability and continuous improvement.' },
];

export const metadata: Metadata = {
  title: 'HR Management & Outsourcing Services Sri Lanka | Ontriq',
  description: 'HR management services in Sri Lanka. Policy development, onboarding, performance management, compliance, and full HR outsourcing.',
  keywords: [
    'HR management services Sri Lanka', 'HR outsourcing Sri Lanka', 'HR solutions Sri Lanka',
    'HR consulting Sri Lanka', 'HR policy development', 'performance management Sri Lanka',
    'employee onboarding services', 'HR compliance Sri Lanka', 'HR BPO Sri Lanka',
  ],
  openGraph: {
    title: 'HR Management & Outsourcing Services Sri Lanka | Ontriq',
    description: 'End-to-end HR solutions that align with your business goals in Sri Lanka.',
    url: 'https://www.ontriq.com/services/hr-management-services',
    images: [{ url: 'https://www.ontriq.com/share-img.png', width: 1200, height: 630, alt: 'Ontriq HR Services' }],
  },
  twitter: { card: 'summary_large_image', title: 'HR Management Services Sri Lanka | Ontriq', description: 'End-to-end HR solutions for Sri Lanka.', images: ['https://www.ontriq.com/share-img.png'] },
  alternates: { canonical: 'https://www.ontriq.com/services/hr-management-services' },
};

export default function HrManagementServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service", "name": "HR Management Services",
    "serviceType": "Human Resources", "provider": { "@type": "Organization", "name": "Ontriq", "url": "https://www.ontriq.com" },
    "areaServed": { "@type": "Country", "name": "Sri Lanka" },
    "description": "Comprehensive HR management and outsourcing services in Sri Lanka.",
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "HR Services", "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR Policy Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employee Onboarding & Offboarding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR Compliance Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HR Outsourcing (HRO)" } },
    ]}
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": hrFaqItems.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
    { "@type": "ListItem", "position": 3, "name": "HR Management", "item": "https://www.ontriq.com/services/hr-management-services" },
  ]};

  const services = [
    { title: 'HR Policy Development', description: 'Crafting clear, compliant, and customized HR policies and employee handbooks aligned with Sri Lankan labor laws.' },
    { title: 'Employee Onboarding & Offboarding', description: 'Managing seamless entry and exit processes with proper documentation, compliance, and employee experience focus.' },
    { title: 'Performance Management', description: 'Implementing KPI frameworks, review cycles, and development plans to enhance employee performance and accountability.' },
    { title: 'Employee Relations', description: 'Facilitating conflict resolution, grievance handling, disciplinary processes, and workplace culture development.' },
    { title: 'HR Compliance & Legal', description: 'Ensuring adherence to labor laws, EPF/ETF regulations, Shop and Office Act, and all statutory requirements.' },
    { title: 'HR Administration', description: 'Managing personnel files, leave tracking, benefits administration, attendance, and all day-to-day HR operations.' },
    { title: 'HR Outsourcing (HRO)', description: 'Full delegation of your HR function to Ontriq. We become your dedicated HR department, handling everything end-to-end.' },
  ];

  const processSteps = [
    { title: 'HR Audit', description: 'Analyzing your current HR structure, policies, and identifying gaps and opportunities.' },
    { title: 'Strategy Design', description: 'Developing tailored HR strategies aligned with your business goals and growth plans.' },
    { title: 'Implementation', description: 'Executing policies, systems, and processes with minimal disruption to your operations.' },
    { title: 'Ongoing Management', description: 'Continuous monitoring, support, optimization, and compliance updates.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero serviceNumber="002" title="HR Management" subtitle="& Outsourcing Services"
        description={`At Ontriq, our Human Resource Management services are designed to support organizations in building and maintaining a productive, compliant, and engaged workforce.\n\nWe provide end-to-end HR solutions that align with your business goals, from policy development and compliance to full HR outsourcing for businesses that want to focus on growth while we handle the people operations.`} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">HR Services in Sri Lanka</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Managing human resources in Sri Lanka involves navigating complex labor regulations, maintaining employee engagement, ensuring statutory compliance with EPF/ETF and labor laws, and building HR systems that scale with your business. Many companies, especially startups and SMEs, lack the in-house expertise or capacity to handle all of this effectively.</p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">Ontriq provides HR management solutions ranging from specific consulting engagements to full HR outsourcing. Whether you need help developing HR policies, setting up performance management systems, or need a dedicated HR partner to manage your entire people function, our team delivers solutions tailored to your industry, size, and goals.</p>
          <p className="text-lg text-slate-600 leading-relaxed">Our HR services integrate seamlessly with our <Link href="/services/payroll-processing-services" className="text-[#0098F3] font-semibold hover:underline">payroll processing</Link>, <Link href="/services/recruitment-services" className="text-[#0098F3] font-semibold hover:underline">recruitment</Link>, and <Link href="/services/bgv" className="text-[#0098F3] font-semibold hover:underline">background verification</Link> services, giving you a single partner for all workforce needs.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="01" title="Our HR Services" subtitle="What We Offer" description="Comprehensive HR solutions for every stage of your business." />
          <ServiceCardGrid items={services} columns={3} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader number="02" title="How We Work" subtitle="Our Process" description="A strategic approach to building a stronger workforce." />
          <ServiceHorizontalList items={processSteps} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/payroll-processing-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Payroll Processing</h3>
              <p className="text-sm text-slate-500">EPF/ETF compliant payroll</p>
            </Link>
            <Link href="/services/recruitment-services" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Recruitment</h3>
              <p className="text-sm text-slate-500">Find top talent</p>
            </Link>
            <Link href="/services/bgv" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Background Verification</h3>
              <p className="text-sm text-slate-500">Verify employees</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader number="03" title="Frequently Asked Questions" subtitle="FAQ" description="Common questions about HR services in Sri Lanka." />
          <div className="space-y-6">
            {hrFaqItems.map((faq, index) => (
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
