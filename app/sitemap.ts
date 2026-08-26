import { MetadataRoute } from 'next'

const baseUrl = 'https://www.ontriq.com'

// Dates reflect when each page's content last meaningfully changed.
// Bump a page's date only when its content is genuinely updated —
// a blanket "today" on every build teaches Google to ignore lastmod.
const AUG_2026_REFRESH = '2026-08-26' // site-wide SEO/content overhaul
const JUN_2026_BASELINE = '2026-06-04' // previous SEO pass
const MAY_2026_BASELINE = '2026-05-25'

type Entry = {
  path: string
  lastModified: string
  changeFrequency: 'weekly' | 'monthly'
  priority: number
}

const entries: Entry[] = [
  // ===== CORE PAGES =====
  { path: '', lastModified: AUG_2026_REFRESH, changeFrequency: 'weekly', priority: 1 },
  { path: '/about', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', lastModified: AUG_2026_REFRESH, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/technology', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.6 },
  { path: '/sitemap', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.4 },

  // ===== BACKGROUND VERIFICATION SERVICES (Pillar + Cluster) =====
  { path: '/services/bgv', lastModified: AUG_2026_REFRESH, changeFrequency: 'weekly', priority: 0.95 },
  { path: '/services/bgv/employment-verification', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/education-verification', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/criminal-record-check', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/identity-address-verification', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/reference-checks', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/global-sanction-screening', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/bgv/drug-testing', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.85 },

  // ===== RESOURCES (Content hub) =====
  { path: '/resources', lastModified: AUG_2026_REFRESH, changeFrequency: 'weekly', priority: 0.7 },
  { path: '/resources/how-to-do-background-checks-on-employees-in-sri-lanka', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },
  { path: '/resources/background-verification-cost-sri-lanka', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },
  { path: '/resources/personal-data-protection-act-guide-for-employers', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },
  { path: '/resources/pre-employment-screening-checklist-sri-lanka', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },
  { path: '/resources/how-long-does-a-background-check-take-in-sri-lanka', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },
  { path: '/resources/background-check-red-flags-employers-guide', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.65 },

  // ===== RECRUITMENT SERVICES (Pillar + Cluster) =====
  { path: '/services/recruitment-services', lastModified: JUN_2026_BASELINE, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/recruitment-services/executive-search', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/recruitment-services/volume-hiring', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/recruitment-services/candidate-screening', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/recruitment-services/contract-staffing', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/recruitment-services/it-recruitment', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/recruitment-services/employer-branding', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.75 },

  // ===== COMPANY FORMATION (Pillar + Cluster) =====
  { path: '/services/company-formation', lastModified: JUN_2026_BASELINE, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/company-formation/private-limited-company', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/company-formation/partnership-registration', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/company-formation/foreign-company-registration', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/company-formation/annual-returns-filing', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/company-formation/tax-registration', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },

  // ===== OTHER SERVICE PILLARS =====
  { path: '/services/payroll-processing-services', lastModified: JUN_2026_BASELINE, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/hr-management-services', lastModified: JUN_2026_BASELINE, changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/startup-support-services', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/director-services', lastModified: JUN_2026_BASELINE, changeFrequency: 'monthly', priority: 0.85 },

  // ===== TECHNOLOGY PAGES =====
  { path: '/technology/confidentiality', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/technology/continuity', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/technology/infrastructure', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/technology/security', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },
  { path: '/technology/specifications', lastModified: AUG_2026_REFRESH, changeFrequency: 'monthly', priority: 0.7 },

  { path: '/privacy', lastModified: MAY_2026_BASELINE, changeFrequency: 'monthly', priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
