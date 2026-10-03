// Single source of truth for the BGV check subpages under /services/bgv.
// Drives the sibling navigation on every subpage so each check links to all
// of the others, and the pillar's OfferCatalog schema.

export interface BgvSubpage {
  slug: string;
  name: string;
  /** Short card description shown in sibling navigation. */
  summary: string;
}

export const BGV_BASE_URL = 'https://www.ontriq.com/services/bgv';

export const bgvSubpages: BgvSubpage[] = [
  { slug: 'employment-verification', name: 'Employment Verification', summary: 'Confirm past job titles, dates and reasons for leaving' },
  { slug: 'education-verification', name: 'Education Verification', summary: 'Validate degrees, diplomas and exam certificates' },
  { slug: 'criminal-record-check', name: 'Criminal Record Check', summary: 'Police and court record screening' },
  { slug: 'identity-address-verification', name: 'Identity & Address Verification', summary: 'Authenticate NICs, passports and addresses' },
  { slug: 'reference-checks', name: 'Reference Checks', summary: 'Structured feedback from former supervisors' },
  { slug: 'global-sanction-screening', name: 'Sanction & Watchlist Screening', summary: 'International sanctions, watchlists and PEP lists' },
  { slug: 'drug-testing', name: 'Drug Testing', summary: 'Certified laboratory testing with chain of custody' },
  { slug: 'credit-history-check', name: 'Credit History Check', summary: 'CRIB credit reports for finance-sensitive roles' },
  { slug: 'professional-licence-verification', name: 'Professional Licence Verification', summary: 'Registration with professional and regulatory bodies' },
];
