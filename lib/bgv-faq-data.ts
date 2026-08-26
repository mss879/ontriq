// Single source of truth for the BGV FAQ.
// Consumed by the visible accordion (components/services/bgv/bgv-faq.tsx)
// AND the FAQPage JSON-LD (app/services/bgv/page.tsx) so the schema text
// can never diverge from what users (and Google) see on the page.

export interface BgvFaqItem {
  question: string;
  answer: string;
}

export const bgvFaqData: BgvFaqItem[] = [
  {
    question: 'What are background verification services?',
    answer: 'Background verification services are a systematic process of validating a candidate\'s personal, educational, professional, and legal history before employment. This includes checks on employment records, educational qualifications, criminal history, identity documents, and professional references to ensure the information provided is accurate and truthful.',
  },
  {
    question: 'How long does a background check take in Sri Lanka?',
    answer: 'At Ontriq, we complete comprehensive background verification cases within 7 working days—the fastest turnaround in Sri Lanka. The exact duration may vary based on the complexity of checks, the number of verifications required, and the responsiveness of third-party sources such as previous employers and educational institutions.',
  },
  {
    question: 'How much does background verification cost in Sri Lanka?',
    answer: 'The cost of background verification in Sri Lanka depends on the number and type of checks required for each role. Ontriq offers three tiers—Essential, Professional, and Enterprise packages—so you only pay for the level of screening a position actually needs, and per-candidate pricing improves with hiring volume. Contact us for a tailored quote based on your requirements.',
  },
  {
    question: 'What documents are needed for background verification?',
    answer: 'Candidates typically need to provide government-issued identification (NIC/passport), educational certificates and transcripts, employment letters or appointment letters from previous employers, current and previous address proof, and signed consent forms. Our secure digital portal guides candidates through the document submission process.',
  },
  {
    question: 'Is background verification legal in Sri Lanka?',
    answer: 'Yes, background verification is a lawful and widely accepted practice in Sri Lanka. The process is governed by the Personal Data Protection Act and other relevant employment regulations. Candidate consent must be obtained before initiating any checks, and data must be handled in compliance with privacy requirements.',
  },
  {
    question: 'Do you provide employee screening services in Colombo?',
    answer: 'Yes. Ontriq is headquartered in Dehiwala-Mount Lavinia in the Colombo district, and our employee screening services cover employers across Colombo and the whole of Sri Lanka. Field activities such as address verification are carried out island-wide, so candidates from any province can be screened under the same 7-working-day turnaround.',
  },
  {
    question: 'What happens if a discrepancy is found during verification?',
    answer: 'When a discrepancy is identified, our team documents it in the verification report with supporting details. The employer is notified of the discrepancy, and the candidate may be given an opportunity to clarify or provide additional documentation. The final decision on how to proceed rests with the employer.',
  },
  {
    question: 'Do you verify candidates with international backgrounds?',
    answer: 'Yes, we conduct international verifications depending on the country and available data sources. For candidates with overseas employment or education history, we leverage our network of verification partners and international databases to validate credentials across borders.',
  },
  {
    question: 'How is candidate data protected during the verification process?',
    answer: 'We follow strict data privacy and security protocols throughout the verification process. All candidate data is transmitted via encrypted channels, stored in access-controlled systems, and handled only by authorized verification analysts. We comply with the Sri Lanka Data Protection Act and maintain strict confidentiality at every stage.',
  },
  {
    question: 'What is included in a standard background verification package?',
    answer: 'A standard BGV package at Ontriq includes employment history verification, educational qualification checks, criminal record screening, identity and address verification, and professional reference checks. We also offer customized packages that can include global sanction screening, drug testing, and industry-specific checks based on your requirements.',
  },
  {
    question: 'Can we customize BGV packages for different roles?',
    answer: 'Yes, Ontriq offers customizable background verification packages. We understand that entry-level, mid-management, and executive roles require different levels of screening. You can select specific checks—such as adding global sanction screening, drug testing, or reference checks—to create a tailored package that aligns with your regulatory framework and budget.',
  },
  {
    question: 'How does Ontriq ensure the accuracy of background check reports?',
    answer: 'We maintain a 98%+ accuracy rate by implementing a strict, multi-level Quality Control (QC) process. Every verification undergoes primary-source validation and is checked by at least two senior compliance analysts before a final report is compiled. This ensures all findings are accurate, verifiable, and compliant with audit standards.',
  },
];
