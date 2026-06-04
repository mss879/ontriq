'use client';

import { ScrollAnimate } from '@/components/scroll-animate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const bgvFaqs = [
  {
    question: 'What are background verification services?',
    answer: 'Background verification services are a systematic process of validating a candidate\'s personal, educational, professional, and legal history before employment. This includes checks on employment records, educational qualifications, criminal history, identity documents, and professional references to ensure the information provided is accurate and truthful.',
  },
  {
    question: 'How long does a background check take in Sri Lanka?',
    answer: 'At Ontriq, we complete comprehensive background verification cases within 7 working days\u2014the fastest turnaround in Sri Lanka. The exact duration may vary based on the complexity of checks, the number of verifications required, and the responsiveness of third-party sources such as previous employers and educational institutions.',
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

export function BgvFaq() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <ScrollAnimate className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" />
                <span className="text-slate-900">07</span>
                <span>FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Common questions about our background verification services in Sri Lanka.
              </p>
            </div>
          </ScrollAnimate>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {bgvFaqs.map((faq, index) => (
                <ScrollAnimate
                  key={index}
                  delay={index * 0.05}
                >
                  <AccordionItem value={`faq-${index}`} className="border-slate-200">
                    <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:text-[#F75834] hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-slate-600 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimate>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for JSON-LD schema generation
export const bgvFaqData = bgvFaqs;
