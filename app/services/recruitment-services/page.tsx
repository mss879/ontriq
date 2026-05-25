import { ServiceHero } from '@/components/services/service-hero';
import { CTASection } from '@/components/cta-section';
import { ServiceSectionHeader, ServiceCardGrid, ServiceHorizontalList } from '@/components/services/service-page-components';
import Link from 'next/link';
import type { Metadata } from 'next';

// FAQ data for JSON-LD
const recruitmentFaqItems = [
  { question: 'What recruitment services does Ontriq offer in Sri Lanka?', answer: 'Ontriq provides end-to-end recruitment services in Sri Lanka including executive search, volume hiring, candidate screening, contract staffing, IT recruitment, employer branding, and full-cycle talent acquisition. We handle everything from job profiling and candidate sourcing through to interviews, assessments, and onboarding.' },
  { question: 'How long does the recruitment process take?', answer: 'The timeline depends on the role complexity. Standard positions are typically filled within 2-4 weeks, while executive and specialized roles may take 4-8 weeks. Volume hiring projects are executed on customized timelines based on the number of positions and urgency.' },
  { question: 'Do you recruit for all industries in Sri Lanka?', answer: 'Yes, we recruit across all major industries in Sri Lanka including IT and technology, banking and finance, manufacturing, healthcare, retail, hospitality, telecommunications, logistics, education, and government-linked organizations.' },
  { question: 'What is executive search and how does it differ from regular recruitment?', answer: 'Executive search (headhunting) is a specialized recruitment service targeting senior-level, C-suite, and niche roles. Unlike standard recruitment which relies on job postings and applicant flow, executive search involves proactively identifying and approaching high-caliber candidates who may not be actively seeking new positions.' },
  { question: 'Do you offer contract or temporary staffing services?', answer: 'Yes, Ontriq provides contract staffing and temporary workforce solutions for businesses needing flexible workforce arrangements. This includes project-based hiring, seasonal staffing, maternity cover, and interim management positions.' },
  { question: 'How do you ensure candidate quality during screening?', answer: 'Our screening process includes structured interviews, skills assessments, psychometric testing, reference checks, and background verification through our in-house BGV team. We verify employment history, educational qualifications, and professional credentials before shortlisting candidates.' },
  { question: 'What does your IT recruitment service cover?', answer: 'Our IT recruitment service covers software developers, DevOps engineers, data scientists, cybersecurity specialists, cloud architects, project managers, QA engineers, UI/UX designers, and other technology roles. We understand the Sri Lankan tech talent market and have access to both active and passive IT candidates.' },
  { question: 'How much do your recruitment services cost?', answer: 'Our recruitment fees are structured based on the type of service (standard recruitment, executive search, or volume hiring) and the seniority of the role. We offer competitive, transparent pricing with no hidden charges. Contact us for a customized quote based on your specific hiring needs.' },
];

export const metadata: Metadata = {
  title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
  description: 'Top recruitment agency in Sri Lanka. Ontriq offers executive search, volume hiring, IT recruitment, contract staffing & employer branding. Find top talent fast.',
  keywords: [
    'recruitment services Sri Lanka',
    'recruitment agency Sri Lanka',
    'talent acquisition Sri Lanka',
    'hiring services Sri Lanka',
    'executive search Sri Lanka',
    'headhunting Sri Lanka',
    'staffing solutions Sri Lanka',
    'IT recruitment Sri Lanka',
    'contract staffing Sri Lanka',
    'volume hiring Sri Lanka',
    'recruitment company Colombo',
    'best recruitment agency Sri Lanka',
    'talent management Sri Lanka',
  ],
  openGraph: {
    title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
    description: 'Find top talent in Sri Lanka with Ontriq. Executive search, volume hiring, IT recruitment, and end-to-end talent acquisition.',
    url: 'https://www.ontriq.com/services/recruitment-services',
    images: [
      {
        url: 'https://www.ontriq.com/share-img.png',
        width: 1200,
        height: 630,
        alt: 'Ontriq Recruitment Services Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment & Talent Acquisition Services Sri Lanka | Ontriq',
    description: 'Find top talent in Sri Lanka with Ontriq. Executive search, volume hiring, IT recruitment, and end-to-end talent acquisition.',
    images: ['https://www.ontriq.com/share-img.png'],
  },
  alternates: {
    canonical: 'https://www.ontriq.com/services/recruitment-services',
  },
};

export default function RecruitmentServicesPage() {
  // Service JSON-LD with offer catalog
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Recruitment & Talent Acquisition Services",
    "serviceType": "Recruitment Services",
    "provider": {
      "@type": "Organization",
      "name": "Ontriq",
      "url": "https://www.ontriq.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sri Lanka"
    },
    "description": "Comprehensive recruitment and talent acquisition services in Sri Lanka including executive search, volume hiring, IT recruitment, contract staffing, and employer branding.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Recruitment Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Search & Headhunting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Volume & Mass Hiring" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Candidate Screening & Assessment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contract & Temporary Staffing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT & Technology Recruitment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employer Branding" } },
      ]
    }
  };

  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": recruitmentFaqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ontriq.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ontriq.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Recruitment Services", "item": "https://www.ontriq.com/services/recruitment-services" },
    ],
  };

  const servicesOffered = [
    {
      title: 'End-to-End Hiring Support',
      description: 'From job profiling and candidate sourcing through interviews, assessments, and final onboarding. We manage the complete recruitment lifecycle so you can focus on your business.',
    },
    {
      title: 'Executive Search & Headhunting',
      description: 'Targeted recruitment for senior-level, C-suite, and niche roles. We proactively identify and approach top-tier candidates through our extensive professional network in Sri Lanka.',
    },
    {
      title: 'Volume & Mass Hiring',
      description: 'Scalable hiring solutions for large or time-sensitive workforce demands. Ideal for new project launches, seasonal staffing, or rapid business expansion across Sri Lanka.',
    },
    {
      title: 'Candidate Screening & Assessment',
      description: 'Rigorous evaluation through structured interviews, psychometric assessments, skills testing, and comprehensive reference checks, all powered by our in-house background verification team.',
    },
    {
      title: 'Contract & Temporary Staffing',
      description: 'Flexible workforce solutions for project-based needs, seasonal demand, maternity cover, and interim management positions across all industries.',
    },
    {
      title: 'IT & Technology Recruitment',
      description: 'Specialized recruitment for software developers, DevOps engineers, data scientists, cybersecurity specialists, and other technology roles in Sri Lanka\'s growing tech sector.',
    },
    {
      title: 'Employer Branding',
      description: 'Positioning your company as an employer of choice to attract and retain top talent. We help craft your employer value proposition and recruitment marketing strategy.',
    },
  ];

  const processSteps = [
    { title: 'Requirement Analysis', description: 'Understanding your hiring needs, culture, and role specifications.' },
    { title: 'Talent Sourcing', description: 'Identifying candidates through our database, networks, and targeted outreach.' },
    { title: 'Screening & Assessment', description: 'Structured interviews, skills testing, and background verification.' },
    { title: 'Shortlist Presentation', description: 'Presenting qualified candidates with detailed profiles and assessments.' },
    { title: 'Interview Coordination', description: 'Managing the interview process between your team and candidates.' },
    { title: 'Offer & Onboarding', description: 'Assisting with offer negotiation, acceptance, and seamless onboarding.' },
  ];

  const industries = [
    { title: 'Information Technology', description: 'Software, SaaS, fintech, and IT services companies.' },
    { title: 'Banking & Finance', description: 'Banks, insurance, microfinance, and financial services firms.' },
    { title: 'Manufacturing', description: 'Apparel, FMCG, industrial, and export-oriented manufacturers.' },
    { title: 'Healthcare', description: 'Hospitals, pharmaceutical companies, and health-tech startups.' },
    { title: 'Retail & Hospitality', description: 'Hotels, restaurants, retail chains, and e-commerce businesses.' },
    { title: 'Telecommunications', description: 'Telecom operators, ISPs, and digital infrastructure companies.' },
  ];

  const whyChooseUsItems = [
    { title: 'Local Market Expertise', description: 'Deep understanding of Sri Lanka\'s talent landscape, salary benchmarks, and hiring trends.' },
    { title: 'Integrated BGV', description: 'In-house background verification ensures every candidate is thoroughly vetted before placement.' },
    { title: 'Speed & Quality', description: 'Fast turnaround without compromising on candidate quality or screening rigor.' },
    { title: 'Transparent Process', description: 'Real-time updates, clear timelines, and honest communication throughout the hiring process.' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ServiceHero
        serviceNumber="003"
        title="Talent Acquisition"
        subtitle="& Recruitment Services"
        description={`At Ontriq, our Talent Acquisition and Recruitment Services are designed to help businesses attract, identify, and hire top-tier talent aligned with their organizational goals and culture. We deliver customized recruitment strategies that ensure the right candidates are placed in the right roles, efficiently and effectively.\n\nAs one of Sri Lanka's leading recruitment agencies, we combine deep local market knowledge with rigorous screening processes, powered by our in-house background verification capabilities.`}
      />

      {/* Intro / What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
            Recruitment Services in Sri Lanka
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Finding the right talent is the foundation of every successful organization. In Sri Lanka&apos;s competitive job market, businesses need a recruitment partner who understands the local talent landscape, industry-specific skill requirements, and the nuances of candidate expectations. At Ontriq, we provide comprehensive recruitment and talent acquisition services that go beyond simply filling positions. We help you build high-performing teams.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Whether you need to hire a single senior executive or scale your workforce rapidly with volume hiring, our recruitment team combines strategic sourcing, rigorous candidate screening, and integrated background verification to deliver results that matter. Every candidate we present has been thoroughly vetted, including employment history verification, educational credential checks, and reference validation through our in-house <Link href="/services/background-verification-services" className="text-[#0098F3] font-semibold hover:underline">background verification services</Link>.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our recruitment services span all major industries in Sri Lanka, from IT and banking to manufacturing, healthcare, and hospitality. We serve startups, SMEs, and large enterprises with tailored hiring solutions that align with your budget, timeline, and organizational culture.
          </p>
        </div>
      </section>

      {/* Services Offered - Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader
            number="01"
            title="Our Recruitment Services"
            subtitle="What We Offer"
            description="End-to-end talent acquisition solutions tailored to your business needs."
          />
          <ServiceCardGrid items={servicesOffered} columns={3} />
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader
            number="02"
            title="Our Recruitment Process"
            subtitle="How We Work"
            description="A structured, transparent process designed to find the best talent for your organization."
          />
          <ServiceHorizontalList items={processSteps} />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader
            number="03"
            title="Industries We Recruit For"
            subtitle="Sectors"
            description="We recruit across all major industries in Sri Lanka."
          />
          <ServiceCardGrid items={industries} columns={3} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ServiceSectionHeader
            number="04"
            title="Why Choose Ontriq"
            subtitle="Our Advantage"
            description="What sets us apart as a recruitment partner in Sri Lanka."
          />
          <ServiceCardGrid items={whyChooseUsItems} columns={2} />
        </div>
      </section>

      {/* Detailed Recruitment Services */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Detailed Recruitment Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/services/recruitment-services/executive-search" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Executive Search</h3>
              <p className="text-xs text-slate-500">C-suite & headhunting services</p>
            </Link>
            <Link href="/services/recruitment-services/volume-hiring" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Volume Hiring</h3>
              <p className="text-xs text-slate-500">Mass recruitment solutions</p>
            </Link>
            <Link href="/services/recruitment-services/candidate-screening" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Candidate Screening</h3>
              <p className="text-xs text-slate-500">Vetting & assessment process</p>
            </Link>
            <Link href="/services/recruitment-services/contract-staffing" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Contract Staffing</h3>
              <p className="text-xs text-slate-500">Flexible temporary staffing</p>
            </Link>
            <Link href="/services/recruitment-services/it-recruitment" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">IT Recruitment</h3>
              <p className="text-xs text-slate-500">Tech & engineering placement</p>
            </Link>
            <Link href="/services/recruitment-services/employer-branding" className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-1">Employer Branding</h3>
              <p className="text-xs text-slate-500">Promote your employer value</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/background-verification-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Background Verification</h3>
              <p className="text-sm text-slate-500">Verify candidates before hiring</p>
            </Link>
            <Link href="/services/hr-management-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">HR Management</h3>
              <p className="text-sm text-slate-500">End-to-end HR solutions</p>
            </Link>
            <Link href="/services/payroll-processing-services" className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-bold text-slate-900 mb-2">Payroll Processing</h3>
              <p className="text-sm text-slate-500">Compliant payroll services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ServiceSectionHeader
            number="05"
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Common questions about our recruitment services in Sri Lanka."
          />
          <div className="space-y-6">
            {recruitmentFaqItems.map((faq, index) => (
              <details key={index} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <span className="text-2xl text-slate-400 group-open:rotate-45 transition-transform duration-300 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
