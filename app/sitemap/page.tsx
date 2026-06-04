import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap | Ontriq',
  description: 'Navigate through all pages on Ontriq website. Find services, technology, and company information easily.',
}

export default function SitemapPage() {
  interface SitemapLink {
    name: string;
    href: string;
    subLinks?: SitemapLink[];
  }

  interface SitemapSection {
    title: string;
    links: SitemapLink[];
  }

  const sections: SitemapSection[] = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Services Overview', href: '/services' },
        {
          name: 'Background Verification',
          href: '/services/bgv',
          subLinks: [
            { name: 'Employment History', href: '/services/bgv/employment-verification' },
            { name: 'Educational Background', href: '/services/bgv/education-verification' },
            { name: 'Criminal Record & Legal', href: '/services/bgv/criminal-record-check' },
            { name: 'Identity & Address', href: '/services/bgv/identity-address-verification' },
            { name: 'Professional References', href: '/services/bgv/reference-checks' },
          ]
        },
        {
          name: 'Company Formation',
          href: '/services/company-formation',
          subLinks: [
            { name: 'Private Limited Company', href: '/services/company-formation/private-limited-company' },
            { name: 'Partnership Registration', href: '/services/company-formation/partnership-registration' },
            { name: 'Foreign Company Setup', href: '/services/company-formation/foreign-company-registration' },
            { name: 'Annual Returns Filing', href: '/services/company-formation/annual-returns-filing' },
            { name: 'Tax & Regulatory Registration', href: '/services/company-formation/tax-registration' },
          ]
        },
        { name: 'Director Nominee Services', href: '/services/director-services' },
        { name: 'HR Management Solutions', href: '/services/hr-management-services' },
        { name: 'Payroll Processing Services', href: '/services/payroll-processing-services' },
        {
          name: 'Talent Recruitment',
          href: '/services/recruitment-services',
          subLinks: [
            { name: 'Executive Search', href: '/services/recruitment-services/executive-search' },
            { name: 'Volume Hiring & RPO', href: '/services/recruitment-services/volume-hiring' },
            { name: 'Candidate Screening', href: '/services/recruitment-services/candidate-screening' },
            { name: 'Contract Staffing', href: '/services/recruitment-services/contract-staffing' },
            { name: 'IT Recruitment Specialists', href: '/services/recruitment-services/it-recruitment' },
            { name: 'Employer Branding', href: '/services/recruitment-services/employer-branding' },
          ]
        },
        { name: 'Startup Support Services', href: '/services/startup-support-services' },
      ],
    },
    {
      title: 'Technology & Standards',
      links: [
        { name: 'Technology Overview', href: '/technology' },
        { name: 'Confidentiality Protection', href: '/technology/confidentiality' },
        { name: 'Business Continuity & BCP', href: '/technology/continuity' },
        { name: 'Infrastructure Resilience', href: '/technology/infrastructure' },
        { name: 'Security & Compliance', href: '/technology/security' },
        { name: 'Technical Specifications', href: '/technology/specifications' },
      ],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-32 md:py-40">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-slate-900 font-sans">Sitemap</h1>
        <p className="text-lg text-slate-500 mb-16 max-w-2xl leading-relaxed">
          Explore the complete structure of our website and find exactly what you are looking for.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h2 className="text-xl font-bold border-b border-slate-200 pb-3 text-slate-900">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href} className="space-y-2">
                    <Link 
                      href={link.href}
                      className="text-slate-600 hover:text-[#0098F3] font-medium transition-colors hover:translate-x-1 inline-block duration-200"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <ul className="pl-4 space-y-2 border-l border-slate-200 mt-2">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.href}>
                            <Link 
                              href={subLink.href}
                              className="text-sm text-slate-500 hover:text-[#F75834] transition-colors hover:translate-x-1 inline-block duration-200"
                            >
                              • {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

