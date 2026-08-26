'use client';

import { memo, ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ScrollAnimate } from "@/components/scroll-animate";

const bgvLinkClass = "text-orange-600 underline underline-offset-4 hover:text-orange-700";

const faqs: { category: string; items: { q: string; a: ReactNode }[] }[] = [
  {
    category: "Verification Services",
    items: [
      { q: "What verification services does Ontriq offer?", a: <>We offer a full suite of <Link href="/services/bgv" className={bgvLinkClass}>background verification services</Link> including employment history verification, educational qualification verification, criminal record checks, identity and address verification, professional reference checks, global sanction screening, and drug testing.</> },
      { q: "How long does a verification take?", a: <>We complete comprehensive <Link href="/services/bgv" className={bgvLinkClass}>background verification</Link> cases within 7 working days — the fastest turnaround in Sri Lanka. Timelines may vary based on check complexity and third-party responsiveness.</> },
      { q: "Do you verify candidates with international backgrounds?", a: <>Yes, we conduct international verifications depending on the country and available data sources, leveraging our network of global verification partners. Learn more on our <Link href="/services/bgv" className={bgvLinkClass}>background verification services</Link> page.</> }
    ]
  },
  {
    category: "HR Management",
    items: [
      { q: "What HR management services do you provide?", a: "We offer end-to-end HR solutions including employee onboarding and offboarding, HR policy development, performance management systems, employee relations, leave and attendance management, and HR compliance advisory." },
      { q: "Can you manage HR for a small or mid-sized company?", a: "Absolutely. Our HR solutions are designed to scale — from startups needing foundational HR support to large enterprises requiring full-cycle HR operations management." },
      { q: "Do you handle employee grievances and disciplinary processes?", a: "Yes, we support organisations with structured grievance handling, disciplinary procedures, and workplace investigations in compliance with Sri Lankan employment law." }
    ]
  },
  {
    category: "Recruitment",
    items: [
      { q: "What types of recruitment does Ontriq handle?", a: "We provide executive search, volume hiring, contract staffing, IT recruitment, candidate screening and assessment, and employer branding services across all industries." },
      { q: "How is Ontriq different from other recruitment agencies?", a: <>Our recruitment process integrates seamlessly with our <Link href="/services/bgv" className={bgvLinkClass}>in-house verification services</Link>, meaning every hire is both talent-matched and fully verified — reducing risk and time-to-hire significantly.</> },
      { q: "Do you recruit for international positions?", a: "Our primary focus is the Sri Lankan market, but we can support international hiring needs through our partner network depending on the role and region." }
    ]
  },
  {
    category: "Payroll & Company Formation",
    items: [
      { q: "What payroll services do you offer?", a: "We handle full payroll processing including salary computation, statutory deductions (EPF/ETF), payslip generation, tax filing support, and compliance reporting for businesses of any size." },
      { q: "Can you help register a new company in Sri Lanka?", a: "Yes, we provide end-to-end company formation services including private limited company registration, partnership registration, foreign company registration, tax registration, and ongoing annual returns filing." },
      { q: "Do you offer director services for foreign companies?", a: "Yes, we provide nominee director and corporate secretary services to help foreign-owned entities meet Sri Lankan legal requirements." }
    ]
  },
  {
    category: "Process & Compliance",
    items: [
      { q: "Is candidate consent required before verification?", a: <>Yes, candidate consent is legally required before any <Link href="/services/bgv" className={bgvLinkClass}>background verification</Link> can begin. We collect consent digitally through our secure portal.</> },
      { q: "Are your services compliant with Sri Lankan law?", a: "Yes, all services are delivered in full compliance with the Sri Lanka Data Protection Act and relevant employment regulations." },
      { q: "What happens if a discrepancy is found during verification?", a: "The discrepancy is documented in the report and the employer is notified. The candidate may be given an opportunity to clarify. The final decision rests with the employer." }
    ]
  },
  {
    category: "Getting Started",
    items: [
      { q: "How can I get a quote from Ontriq?", a: "Visit our contact page or reach us at info@ontriq.com. We'll understand your requirements and provide a tailored proposal within 24 hours." },
      { q: "Do you offer customised service packages?", a: "Yes, we tailor all our services — verification, HR, recruitment, and payroll — according to your industry, company size, and specific requirements." },
      { q: "How can I track the status of ongoing work?", a: "Clients can track verification reports and project status via our secure online portal or by contacting their dedicated account manager." }
    ]
  }
];

export const FaqSection = memo(function FaqSection({ titleAs = 'h2' }: { titleAs?: 'h1' | 'h2' }) {
  const HeadingTag = titleAs;
  return (
    <section className="w-full bg-white py-24 text-gray-900" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-24">
          {/* Left Column: Title & CTA */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-fit">
            <div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 mb-6">
                <span className="h-1 w-8 rounded-full bg-[#F75834]" aria-hidden="true"></span>
                <span className="text-slate-900">005</span>
                <span>FAQ</span>
              </div>
              <HeadingTag id="faq-heading" className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
                Frequently asked questions
              </HeadingTag>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Got any Questions?</h3>
              <p className="mb-6 text-gray-600">Let us know! Reach out and our team will get right back to you.</p>
              <Link 
                href="/contact" 
                className="inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((category, catIndex) => (
                <ScrollAnimate key={catIndex} delay={catIndex * 0.1} className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">{category.category}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${catIndex}-${index}`} className="border-gray-200">
                        <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-gray-600">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
